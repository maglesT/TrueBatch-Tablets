/**
 * Recorded values and the results of the block's calculations. Every GMP number comes from the templates library:
 * this file only picks the inputs (fields, settings, earlier steps, formula lines) and calls the templates.
 */
import { Dec, type Outcome, type Q, type ResultValue } from '../templates/index.js';
import { findBlock, type BlockField } from '../blocks/index.js';
import type { FormulaLine, MasterDoc, SettingValue } from '../master/schema.js';
import { callTemplate } from './templates.js';
import type { StepEvent, StepKey } from './state.js';

/** A recorded value: a number with its unit, a list of them, a text (yes/no, choice, lot, time) or a picked item. */
export type Value = { value: string; unit: string } | { value: string; unit: string }[] | string | { itemId: string; code: string; name: string; version: number };

/** A template's outcome as stored in the event payload: decimals as full-precision text, with the worked line. */
export type Stored = ({ ok: true; value: string; unit: string; shown: string; check?: { pass: boolean; level: string; shown: string } } & Record<string, unknown>) | { ok: false; message: string };
export const store = (o: Outcome<object>): Stored => JSON.parse(JSON.stringify(o)) as Stored;
// A result passed on as an input: its full value, written with at least 3 decimals for the worked line (only zeros
// are added, nothing is rounded).
const exact = (v: Dec | string, unit: string): Q => { const d = new Dec(v); return { value: d.toFixed(Math.max(d.decimalPlaces(), 3)), unit }; };
const asQ = (r: Stored): Q | undefined => (r.ok ? exact(r.value, r.unit) : undefined);

/** The checks inside a result that failed (check, rsdCheck, unaccountedCheck ...). */
export function failed(r: Stored | undefined): boolean {
  if (!r?.ok) return false;
  return Object.entries(r).some(([k, v]) => /check$/i.test(k) && (v as { pass?: boolean } | null)?.pass === false);
}

export interface Current {
  values: Record<string, Value>;
  results: Record<string, Stored>;
  // Corrections replace a value; the original stays in the record.
  replaced: { field: string; was: Value; now: Value; reason: string; person: number | null; at: Date }[];
}

/** The current values of one step instance: later values and corrections replace earlier ones, which are kept. */
export function currentValues(events: readonly StepEvent[]): Current {
  const c: Current = { values: {}, results: {}, replaced: [] };
  for (const e of events) {
    if (e.kind !== 'value' && e.kind !== 'corrected') continue;
    for (const [k, v] of Object.entries(e.payload.values ?? {})) {
      const was = c.values[k];
      if (e.kind === 'corrected' && was !== undefined) c.replaced.push({ field: k, was, now: v, reason: e.payload.reason ?? '', person: e.person, at: e.at });
      c.values[k] = v;
    }
    if (e.payload.results) c.results = e.payload.results;
  }
  return c;
}

const NUMBER = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
/** Reads a typed value for a field (machine, room and timer values are the server's). */
export function readValue(f: BlockField, raw: unknown, unit: string): Value | { error: string } {
  const bad = (why: string) => ({ error: `${f.label}: ${why}` });
  if (f.kind === 'number') {
    const one = (x: unknown) => (typeof x === 'string' && NUMBER.test(x.trim()) ? { value: x.trim(), unit } : null);
    if (f.count === undefined) return one(raw) ?? bad('type a number, e.g. "50.300"');
    if (!Array.isArray(raw) || raw.length !== f.count) return bad(`give exactly ${f.count} readings`);
    const list = raw.map(one);
    return list.every((x) => x !== null) ? (list as { value: string; unit: string }[]) : bad('every reading must be a number');
  }
  if (typeof raw !== 'string' || !raw.trim() || raw.length > 2000) return bad('missing');
  const t = raw.trim();
  if (f.kind === 'yes-no' && t !== 'yes' && t !== 'no') return bad('answer yes or no');
  if (f.kind === 'choice' && !f.options?.includes(t)) return bad(`choose one of ${f.options?.join(', ')}`);
  if (f.kind === 'lot' && t.length > 60) return bad('a lot number has at most 60 characters');
  return t;
}

const MISSING = Symbol('missing');
/** Replaces each "$name" by its input; MISSING when one is not there yet (the calculation then waits). */
function resolve(x: unknown, inputs: Record<string, unknown>): unknown {
  if (typeof x === 'string' && x.startsWith('$')) return x.slice(1) in inputs ? inputs[x.slice(1)] : MISSING;
  if (Array.isArray(x)) { const a = x.map((y) => resolve(y, inputs)); return a.includes(MISSING) ? MISSING : a; }
  if (x && typeof x === 'object') {
    const o: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(x)) { const r = resolve(v, inputs); if (r === MISSING) return MISSING; o[k] = r; }
    return o;
  }
  return x;
}

/** The latest round of a step that has values, in the copy `sub`. */
function latestValues(events: readonly StepEvent[], stage: number, sub: number, step: number): Current {
  const mine = events.filter((e) => e.stage === stage && e.sub === sub && e.step === step);
  const last = Math.max(0, ...mine.filter((e) => e.kind === 'value' || e.kind === 'corrected').map((e) => e.round));
  return currentValues(mine.filter((e) => e.round === last));
}

/** An earlier step's field or calculation, "stage/step/name". In the same sub-batch stage: the same copy. */
function refValue(doc: MasterDoc, events: readonly StepEvent[], here: StepKey, ref: string): unknown {
  const [sk, tk, name] = ref.split('/') as [string, string, string];
  const si = doc.stages.findIndex((s) => s.key === sk);
  const ti = doc.stages[si]?.steps.findIndex((t) => t.key === tk) ?? -1;
  if (ti < 0) return undefined;
  const c = latestValues(events, si, si === here.stage ? here.sub : 1, ti);
  return name in c.values ? c.values[name] : c.results[name] ? asQ(c.results[name]) : undefined;
}

const tablets = (doc: MasterDoc) => `${doc.header.batchSize} tablets`;
const perBatch = (mg: string, doc: MasterDoc) => callTemplate('T8', { mode: 'per unit', perUnit: `${mg} mg`, count: tablets(doc), unit: 'kg' });

/** A header value: as written, or the batch weight (T8: weight per tablet × batch size). */
function headerValue(doc: MasterDoc, h: 'batchSize' | 'coreWeight' | 'coatedWeight' | 'coreBatch' | 'coatedBatch'): string | Stored {
  const { coreWeightMg: core, coatedWeightMg: coated } = doc.header;
  if (h === 'batchSize') return tablets(doc);
  if (h === 'coreWeight') return `${core} mg`;
  if (h === 'coreBatch') return store(perBatch(core, doc));
  if (coated === undefined) return { ok: false, message: 'The master has no coated tablet weight' };
  return h === 'coatedWeight' ? `${coated} mg` : store(perBatch(coated, doc));
}

/** The adjusted quantity a step recorded for a formula line (its setting that asks for the adjusted line). */
function recordedAdjusted(doc: MasterDoc, events: readonly StepEvent[], here: StepKey, lineKey: string): Stored | undefined {
  for (const [si, s] of doc.stages.entries()) for (const [ti, t] of s.steps.entries()) {
    for (const [name, v] of Object.entries(t.settings)) {
      if (typeof v === 'object' && 'formula' in v && v.formula === lineKey && v.adjusted) {
        const r = latestValues(events, si, si === here.stage ? here.sub : 1, ti).results[name];
        if (r) return r;
      }
    }
  }
  return undefined;
}

/**
 * A formula line's batch quantity: T8 (mg per tablet × batch size), then, when adjusted, the line's adjustments in
 * order: T11 salt factor, T9 potency (with the lot's assay, water, LOD from this step) or T18 content, T16 overage,
 * or T10 for a filler that compensates other lines. The worked lines are joined.
 */
export function lineQuantity(doc: MasterDoc, events: readonly StepEvent[], here: StepKey, line: FormulaLine, adjusted: boolean, values: Record<string, Value>): Stored {
  let q: Outcome<object> = perBatch(line.mgPerTablet, doc);
  const shown: string[] = [];
  const next = (o: Outcome<object>) => { if (q.ok) shown.push(q.shown); q = o; };
  const a = adjusted ? line.adjust : undefined;
  const certificate = (k: string) => values[k] as Q | undefined;
  if (a?.salt && q.ok) next(callTemplate('T11', { quantity: exact(q.value, q.unit), from: a.salt.from, to: a.salt.to, unit: 'kg' }));
  if (a?.potency && q.ok) {
    next(callTemplate('T9', { ...a.potency, standard: a.salt ? q : exact(q.value, q.unit),
      assay: certificate('assay'), water: certificate('water'), lod: certificate('lod'), unit: 'kg' }));
  } else if (a?.content && q.ok) {
    next(callTemplate('T18', { ...a.content, target: exact(q.value, q.unit), content: certificate('content'), unit: 'kg' }));
  }
  if (a?.overage && q.ok) next(callTemplate('T16', { quantity: exact(q.value, q.unit), overagePercent: a.overage.percent, maxOveragePercent: a.overage.maxPercent, unit: 'kg' }));
  if (a?.compensates?.length && q.ok) {
    const others = a.compensates.map((k) => ({ k, l: doc.formula.find((f) => f.key === k), r: recordedAdjusted(doc, events, here, k) }));
    const missing = others.find((o) => !o.r?.ok);
    if (missing) return { ok: false, message: `Weigh ${missing.l?.name ?? missing.k} first: ${line.name} compensates its adjusted quantity` };
    next(callTemplate('T10', { fillers: [{ name: line.name, standard: exact(q.value, q.unit) }], unit: 'kg',
      adjusted: others.map((o) => ({ name: o.l?.name ?? o.k, standard: perBatchQ(doc, o.l), adjusted: asQ(o.r!) })) }));
  }
  const r = store(q);
  return r.ok && shown.length ? { ...r, shown: [...shown, r.shown].join('; then ') } : r;
}
const perBatchQ = (doc: MasterDoc, l: FormulaLine | undefined) => {
  const r = l ? store(perBatch(l.mgPerTablet, doc)) : undefined;
  return r ? asQ(r) : undefined;
};

/**
 * The results of a step's calculations for its current values: settings that refer to the formula or the header are
 * worked out first (they show their own worked line), then the block's calculations in order. A calculation whose
 * inputs are not all there yet is left out until they are.
 */
export function evaluate(doc: MasterDoc, events: readonly StepEvent[], key: StepKey, values: Record<string, Value>): Record<string, Stored> {
  const step = doc.stages[key.stage]?.steps[key.step];
  const block = step && findBlock(step.block);
  if (!step || !block) return {};
  const results: Record<string, Stored> = {};
  const inputs: Record<string, unknown> = { ...values };
  // C1 takes earlier results as results, and shows them at display precision.
  const asResults: Record<string, ResultValue> = {};
  for (const s of block.settings) {
    const v: SettingValue | undefined = step.settings[s.name];
    if (v === undefined) continue;
    if (typeof v === 'string' || 'unit' in v) { inputs[s.name] = v; continue; }
    if ('ref' in v) { const r = refValue(doc, events, key, v.ref); if (r !== undefined) inputs[s.name] = r; continue; }
    if ('formula' in v) {
      const line = doc.formula.find((l) => l.key === v.formula);
      if (s.kind === 'material' || !line) continue;
      results[s.name] = lineQuantity(doc, events, key, line, v.adjusted ?? false, values);
    } else {
      const h = headerValue(doc, v.header);
      if (typeof h === 'string') { inputs[s.name] = h; continue; }
      results[s.name] = h;
    }
    const r = results[s.name]!;
    if (r.ok) { inputs[s.name] = asQ(r); asResults[s.name] = { ok: true, value: new Dec(r.value), unit: r.unit }; }
  }
  for (const c of block.calcs) {
    const args = resolve(c.args, c.template === 'C1' ? { ...inputs, ...asResults } : inputs);
    if (args === MISSING) continue;
    const r = store(callTemplate(c.template, args));
    results[c.name] = r;
    const q = asQ(r);
    if (q) inputs[c.name] = q;
    if (r.ok) asResults[c.name] = { ok: true, value: new Dec(r.value), unit: r.unit };
  }
  return results;
}
