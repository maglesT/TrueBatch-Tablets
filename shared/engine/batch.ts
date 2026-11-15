/**
 * What is open in a batch, and its timers, computed from the master version and the step events. Nothing is stored:
 * the event log is the single source of truth.
 */
import { findBlock } from '../blocks/index.js';
import type { MasterDoc, Step } from '../master/schema.js';
import { keyId, stepState, type EventKind, type State, type StepEvent, type StepKey } from './state.js';
import { currentValues, failed, type Current } from './values.js';

export interface StepView extends Current {
  key: StepKey;
  id: string;
  stageKey: string;
  stepKey: string;
  state: State;
  needsResign: boolean;
  // Why a waiting step is not open yet.
  blocked?: string;
  events: StepEvent[];
}
export interface StageView { index: number; key: string; name: string; open: boolean; blocked?: string; closed: boolean }
export interface Timer {
  id: string;
  kind: 'hold' | 'periodic' | 'minimum';
  // The step it applies to (where the timer job records "late").
  key: StepKey;
  label: string;
  from: Date;
  at: Date;
  state: 'running' | 'due soon' | 'due' | 'late';
}

const MINUTE = 60_000;
// As in the Logbook: due soon once 85 % of the allowed time has passed.
const DUE_SOON = 0.85;
const phase = (from: Date, at: Date, now: Date): Timer['state'] =>
  now > at ? 'late' : now.getTime() - from.getTime() >= (at.getTime() - from.getTime()) * DUE_SOON ? 'due soon' : 'running';
const earliest = (events: readonly StepEvent[], kind: EventKind) =>
  events.filter((e) => e.kind === kind).map((e) => e.at).sort((a, b) => a.getTime() - b.getTime())[0];
const latest = (events: readonly StepEvent[], kinds: EventKind[]) => events.filter((e) => kinds.includes(e.kind)).at(-1)?.at;
const noteAfter = (events: readonly StepEvent[], t: Date | undefined) => events.some((e) => e.kind === 'note' && (!t || e.at > t));
const plus = (t: Date, minutes: number) => new Date(t.getTime() + minutes * MINUTE);

const stopName = (st: Step) => (st.flow.kind === 'repeat-until' ? st.flow.stop ?? findBlock(st.block)?.stop : undefined);
const maxRounds = (st: Step) => (st.flow.kind === 'repeat-until' ? st.flow.maxRounds ?? 1 : 1);
function stopPassed(v: StepView, st: Step): boolean {
  const r = v.results[stopName(st) ?? ''];
  return r?.ok === true && r.check?.pass === true;
}
// Done enough for what follows: with `wait`, a step that needs a check must be checked.
const finished = (v: StepView, wait: boolean) =>
  v.state === 'done' || v.state === 'checked' || v.state === 'not_applicable' || (v.state === 'done_awaiting_check' && !wait);

/** Why what comes after a step (its last round) cannot open yet; null when it can. */
function after(st: Step, last: StepView, wait: boolean): string | null {
  const label = `step ${st.key}`;
  if (!finished(last, wait)) return `Waits for ${label}${last.state === 'done_awaiting_check' ? ' to be checked' : ''}`;
  if (last.state === 'not_applicable') return null;
  if (st.flow.kind === 'qa-hold' && !last.events.some((e) => e.kind === 'qa_released_hold')) return `Waits for QA to release the hold on ${label}`;
  if (st.flow.kind === 'repeat-until' && !stopPassed(last, st) && !noteAfter(last.events, latest(last.events, ['done']))) {
    return `${label}: the stop check did not pass in ${last.key.round} round(s), the most allowed: a deviation note is needed`;
  }
  return null;
}

/** Hold times: from the producing stage's last step done (the earliest copy) to the start of the stage that uses it. */
export function holdTimers(doc: MasterDoc, events: readonly StepEvent[], now: Date): Timer[] {
  const out: Timer[] = [];
  doc.stages.forEach((s, si) => {
    for (const u of s.uses) {
      const pi = doc.stages.findIndex((p) => p.key === u);
      const p = doc.stages[pi];
      const hours = p?.produces?.holdHours;
      if (!p?.produces || !hours) continue;
      const from = earliest(events.filter((e) => e.stage === pi && e.step === p.steps.length - 1), 'done');
      if (!from) continue;
      const at = plus(from, hours * 60);
      const started = earliest(events.filter((e) => e.stage === si), 'started');
      const state = started ? (started > at ? 'late' : null) : phase(from, at, now);
      if (state) out.push({ id: `hold:${pi}:${si}`, kind: 'hold', key: { stage: si, sub: 1, step: 0, round: 1 }, label: `Hold time of ${p.produces.name} (${hours} h) before ${s.name}`, from, at, state });
    }
  });
  return out;
}

/**
 * Every step instance with its state. The next step opens when the previous is done (or checked, when the master
 * says wait for the check); the next stage opens when the previous stage is closed. Preparation stages open any time
 * and must be closed before the stage that uses them. Repeat-until: rounds of the same step until its stop check
 * passes or the most rounds are reached. A sub-batch stage runs N numbered copies side by side.
 */
export function openSteps(doc: MasterDoc, events: readonly StepEvent[], now: Date): { stages: StageView[]; steps: StepView[] } {
  const byKey = new Map<string, StepEvent[]>();
  for (const e of [...events].sort((a, b) => a.id - b.id)) byKey.set(keyId(e), [...(byKey.get(keyId(e)) ?? []), e]);
  const holds = holdTimers(doc, events, now);
  const stages: StageView[] = [];
  const steps: StepView[] = [];
  doc.stages.forEach((s, si) => {
    const why: string[] = [];
    const prev = doc.stages.slice(0, si).map((x, i) => (x.kind === 'preparation' ? -1 : i)).filter((i) => i >= 0).at(-1);
    if (s.kind !== 'preparation' && prev !== undefined && !stages[prev]!.closed) why.push(`Waits for stage ${doc.stages[prev]!.name} to close`);
    for (const u of s.uses) {
      const pi = doc.stages.findIndex((p) => p.key === u);
      if (doc.stages[pi]?.kind === 'preparation' && !stages[pi]?.closed) why.push(`Waits for the preparation ${doc.stages[pi]!.name} to close`);
    }
    const mine = events.filter((e) => e.stage === si);
    for (const h of holds) {
      if (h.key.stage === si && h.state === 'late' && !earliest(mine, 'started') && !noteAfter(mine, h.at)) why.push(`${h.label} ran out: a deviation note is needed`);
    }
    let closed = true;
    for (let sub = 1; sub <= (s.kind === 'sub-batch' ? s.count ?? 1 : 1); sub++) {
      let gate: string | null = why[0] ?? null;
      s.steps.forEach((st, ti) => {
        let last: StepView;
        for (let round = 1; ; round++) {
          const key = { stage: si, sub, step: ti, round };
          const evs = byKey.get(keyId(key)) ?? [];
          const { state, needsResign } = stepState(evs, st.checker);
          last = { key, id: keyId(key), stageKey: s.key, stepKey: st.key, state: state === 'waiting' && gate === null ? 'open' : state, needsResign,
            ...(state === 'waiting' && gate !== null ? { blocked: gate } : {}), events: evs, ...currentValues(evs) };
          steps.push(last);
          if (st.flow.kind !== 'repeat-until' || !finished(last, st.waitForCheck) || stopPassed(last, st) || round >= maxRounds(st)) break;
          gate = null;
        }
        gate = after(st, last!, st.waitForCheck);
        if (after(st, last!, true) !== null) closed = false;
      });
    }
    stages.push({ index: si, key: s.key, name: s.name, open: why.length === 0, ...(why[0] ? { blocked: why[0] } : {}), closed });
  });
  return { stages, steps };
}

/** Why the performer cannot sign the step as done now; empty when they can. */
export function doneProblems(doc: MasterDoc, v: StepView, now: Date): string[] {
  const st = doc.stages[v.key.stage]?.steps[v.key.step];
  const block = st && findBlock(st.block);
  if (!st || !block) return ['This step has no block'];
  const p: string[] = [];
  for (const f of block.fields) if (!f.optional && v.values[f.name] === undefined) p.push(`${f.label} is not recorded`);
  for (const r of Object.values(v.results)) if (!r.ok) p.push(r.message);
  const stop = stopName(st);
  const out = block.calcs.filter((c) => c.name !== stop && failed(v.results[c.name])).map((c) => c.label);
  if (out.length && !noteAfter(v.events, latest(v.events, ['value', 'corrected']))) p.push(`Out of limits: ${out.join(', ')}. Add a deviation note first.`);
  const started = earliest(v.events, 'started');
  if (st.minMinutes && started && now < plus(started, st.minMinutes)) {
    p.push(`The minimum time is ${st.minMinutes} min: the step can be finished from ${plus(started, st.minMinutes).toISOString()}`);
  }
  return p;
}

/** Hold times, periodic checks (every N minutes from the previous round's start) and minimum times. */
export function timers(doc: MasterDoc, events: readonly StepEvent[], now: Date): Timer[] {
  const out = holdTimers(doc, events, now);
  const { steps } = openSteps(doc, events, now);
  for (const v of steps) {
    const st = doc.stages[v.key.stage]!.steps[v.key.step]!;
    const started = earliest(v.events, 'started');
    if (!started) continue;
    if (st.minMinutes && v.state === 'in_progress' && !v.events.some((e) => e.kind === 'done')) {
      const at = plus(started, st.minMinutes);
      out.push({ id: `min:${v.id}`, kind: 'minimum', key: v.key, label: `Minimum time of step ${st.key} (${st.minMinutes} min)`, from: started, at, state: now >= at ? 'due' : 'running' });
    }
    if (st.everyMinutes) {
      const key = { ...v.key, round: v.key.round + 1 };
      const next = steps.find((x) => x.id === keyId(key));
      const nextStart = next && earliest(next.events, 'started');
      const at = plus(started, st.everyMinutes);
      const t = { id: `every:${keyId(key)}`, kind: 'periodic' as const, key, label: `Check ${key.round} of step ${st.key} (every ${st.everyMinutes} min)`, from: started, at };
      if (nextStart) { if (nextStart > at) out.push({ ...t, state: 'late' }); }
      else if (!stopPassed(v, st) && v.key.round < maxRounds(st)) out.push({ ...t, state: phase(started, at, now) });
    }
  }
  return out;
}
