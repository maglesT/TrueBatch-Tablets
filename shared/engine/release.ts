/**
 * The batch's own status and what QA reviews, computed from the step events and the batch events (production
 * approval, QC approval, release or rejection, QA closing a deviation note). Nothing is stored but the events.
 */
import type { Permission } from '../../server/auth.js';
import { findBlock } from '../blocks/index.js';
import type { MasterDoc } from '../master/schema.js';
import { openSteps, timers, type StepView, type Timer } from './batch.js';
import { keyId, type StepEvent } from './state.js';
import { failed } from './values.js';

export const BATCH_EVENT_KINDS = ['production_approved', 'qc_approved', 'released', 'rejected', 'deviation_closed'] as const;
export type BatchEventKind = (typeof BATCH_EVENT_KINDS)[number];
export interface BatchEvent { id: number; kind: BatchEventKind; payload: { reportNo?: string; note?: number; reason?: string }; person: number; at: Date }

export const BATCH_STATUSES = ['in production', 'manufacturing complete', 'production approved', 'QC approved', 'released', 'rejected'] as const;
export type BatchStatus = (typeof BATCH_STATUSES)[number];

export type BatchAction = 'production-approve' | 'qc-approve' | 'release' | 'reject' | 'close-deviation';
export const BATCH_ACTIONS: Record<BatchAction, { event: BatchEventKind; permission: Permission; from?: BatchStatus; meaning?: 'production_approved' | 'qc_approved' | 'released' | 'rejected' }> = {
  'production-approve': { event: 'production_approved', permission: 'truebatch.batch.supervise', from: 'manufacturing complete', meaning: 'production_approved' },
  'qc-approve': { event: 'qc_approved', permission: 'truebatch.qc.approve', from: 'production approved', meaning: 'qc_approved' },
  release: { event: 'released', permission: 'truebatch.qa.release', from: 'QC approved', meaning: 'released' },
  reject: { event: 'rejected', permission: 'truebatch.qa.release', from: 'QC approved', meaning: 'rejected' },
  'close-deviation': { event: 'deviation_closed', permission: 'truebatch.qa.release' },
};

/** A note with a reference is a linked deviation: open until QA closes it with a reason. */
export interface Deviation { note: number; step: string; reference: string; text: string; open: boolean; closed?: BatchEvent }
export function deviations(events: readonly StepEvent[], batchEvents: readonly BatchEvent[]): Deviation[] {
  return events.filter((e) => e.kind === 'note' && e.payload.reference).map((e) => {
    const closed = batchEvents.find((b) => b.kind === 'deviation_closed' && b.payload.note === e.id);
    return { note: e.id, step: keyId(e), reference: e.payload.reference!, text: e.payload.text ?? '', open: !closed, ...(closed ? { closed } : {}) };
  });
}

/** Every timer that ran over, with the deviation notes made after it (a hold: in the using stage; a check: on it). */
export function lateItems(doc: MasterDoc, events: readonly StepEvent[], now: Date): { timer: Timer; notes: StepEvent[] }[] {
  return timers(doc, events, now).filter((t) => t.state === 'late').map((timer) => ({
    timer,
    notes: events.filter((e) => e.kind === 'note' && e.at > timer.at && e.stage === timer.key.stage && (timer.kind === 'hold' || keyId(e) === keyId(timer.key))),
  }));
}

const FINISHED = ['done', 'checked', 'not_applicable'];
const isYield = (doc: MasterDoc, v: StepView) => findBlock(doc.stages[v.key.stage]!.steps[v.key.step]!.block)?.gmp === 'yield';

export interface BatchView { status: BatchStatus; open: string[]; late: string[]; deviations: Deviation[]; yieldOut: string[] }

/** The batch status, and what stands in the way of the next signature. */
export function batchView(doc: MasterDoc, events: readonly StepEvent[], batchEvents: readonly BatchEvent[], now: Date): BatchView {
  const { stages, steps } = openSteps(doc, events, now);
  const open = [
    ...steps.filter((s) => !FINISHED.includes(s.state)).map((s) => `Step ${s.stepKey} (${s.id}) ${s.needsResign ? 'needs signing again' : `is ${s.state.replaceAll('_', ' ')}`}`),
    ...stages.filter((s) => !s.closed).map((s) => `Stage ${s.name} is not closed`),
  ];
  const late = lateItems(doc, events, now).filter((l) => !l.notes.length).map((l) => `${l.timer.label} ran over: a deviation note is needed`);
  const devs = deviations(events, batchEvents);
  const yieldOut = steps.filter((s) => isYield(doc, s) && Object.values(s.results).some(failed) && !devs.some((d) => d.step === s.id))
    .map((s) => `The yield of step ${s.stepKey} (${s.id}) is out of limits: a deviation note with its reference is needed`);
  const has = (k: BatchEventKind) => batchEvents.some((e) => e.kind === k);
  const status: BatchStatus = has('released') ? 'released' : has('rejected') ? 'rejected' : has('qc_approved') ? 'QC approved'
    : has('production_approved') ? 'production approved' : open.length ? 'in production' : 'manufacturing complete';
  return { status, open, late, deviations: devs, yieldOut };
}

/** Why the person may not do the batch action now; null when they may. */
export function batchRefusal(action: BatchAction, v: BatchView, user: { permissions: readonly string[] }, note?: number): { status: 403 | 409; error: string; problems: string[] } | null {
  const rule = BATCH_ACTIONS[action];
  if (!user.permissions.includes(rule.permission)) return { status: 403, error: 'forbidden', problems: ['You do not have the permission for this action.'] };
  const no = (...problems: string[]) => (problems.length ? { status: 409 as const, error: 'not_ready', problems } : null);
  if (action === 'close-deviation') {
    if (v.status === 'released' || v.status === 'rejected') return no(`The batch is ${v.status}.`);
    return v.deviations.some((d) => d.note === note && d.open) ? null : no('There is no open deviation note with this number.');
  }
  // TB-20: the record is complete before production signs.
  if (action === 'production-approve' && v.status === 'in production') return no(...v.open);
  if (v.status !== rule.from) return no(`Not possible while the batch is ${v.status}.`);
  if (action === 'production-approve') return no(...v.late);
  if (action === 'qc-approve') return null;
  // TB-21: release or rejection only with every linked deviation closed; TB-18: a yield out of limits blocks release.
  const open = v.deviations.filter((d) => d.open).map((d) => `Deviation ${d.reference} (step ${d.step}) is open`);
  return no(...open, ...(action === 'release' ? v.yieldOut : []));
}

/** What QA reviews before release (TB-21): every change, departure and finding of the batch. Signatures are the server's. */
export function review(doc: MasterDoc, events: readonly StepEvent[], batchEvents: readonly BatchEvent[], now: Date) {
  const { steps } = openSteps(doc, events, now);
  const notes = (s: StepView) => s.events.filter((e) => e.kind === 'note');
  return {
    corrections: steps.flatMap((s) => s.replaced.map((r) => ({ step: s.id, ...r }))),
    sentBack: events.filter((e) => e.kind === 'sent_back'),
    late: lateItems(doc, events, now),
    outOfLimits: steps.flatMap((s) => Object.entries(s.results).filter(([, r]) => failed(r)).map(([calc, r]) => ({ step: s.id, calc, shown: r.ok ? r.shown : '', notes: notes(s) }))),
    inputChanged: steps.filter((s) => s.inputChanged.length).map((s) => ({ step: s.id, changes: s.inputChanged })),
    deviations: deviations(events, batchEvents),
    notApplicable: events.filter((e) => e.kind === 'not_applicable'),
    batchEvents,
  };
}
