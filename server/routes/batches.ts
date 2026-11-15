import type { FastifyInstance, FastifyReply } from 'fastify';
import { z } from 'zod';
import type { Sql, Tx } from '../db.js';
import { audit } from '../audit.js';
import { parseId, requirePermission, type SessionUser } from '../auth.js';
import { usableItem } from '../master.js';
import { SignError, authenticateSigner, contentHash, sign, signBody } from '../signatures.js';
import { masterVersion } from './masters.js';
import { batchRecordDoc, type RecordInput, type Signature } from '../batch-record.js';
import { render, sendPdf } from '../pdf.js';
import { findBlock } from '../../shared/blocks/index.js';
import { masterChecks } from '../../shared/master/checks.js';
import type { MasterDoc, Step } from '../../shared/master/schema.js';
import {
  ACTIONS, BATCH_ACTIONS, batchRefusal, batchView, doneProblems, evaluate, lateItems, openSteps, parseKey, readValue, refusal, review, timers,
  type Action, type BatchAction, type BatchEvent, type StepEvent, type StepKey, type StepView, type Value,
} from '../../shared/engine/index.js';

// Plant time zone: the batch number's year is the plant's year.
const PLANT_TZ = process.env.DISPLAY_TZ ?? 'Asia/Kolkata';

class StepError extends Error {
  constructor(public status: number, public code: string, public problems: string[] = []) { super(code); }
}
function send(reply: FastifyReply, e: unknown) {
  if (e instanceof StepError) return reply.code(e.status).send({ error: e.code, problems: e.problems });
  if (e instanceof SignError) return reply.code(e.code === 'wrong_credentials' ? 401 : e.code === 'not_allowed' ? 403 : 409).send({ error: e.code });
  throw e;
}

export interface LoadedBatch {
  batch: { id: number; batchNo: string; masterVersionId: number; issuedBy: number; issuedAt: Date };
  doc: MasterDoc;
  events: (StepEvent & { personName: string | null })[];
  batchEvents: (BatchEvent & { personName: string })[];
  now: Date;
}

/** The batch, its master document and every step event, with the database time. */
export async function loadBatch(q: Sql | Tx, id: number): Promise<LoadedBatch | null> {
  const [b] = await q<(LoadedBatch['batch'] & { doc: MasterDoc; now: Date })[]>`
    select b.id::int, b.batch_no as "batchNo", b.master_version_id::int as "masterVersionId", b.issued_by::int as "issuedBy",
      b.issued_at as "issuedAt", v.doc, now() as now
    from batches b join master_versions v on v.id = b.master_version_id where b.id = ${id}`;
  if (!b) return null;
  const events = await q<LoadedBatch['events']>`
    select e.id::int, e.stage, e.sub, e.step, e.round, e.kind, e.payload, e.person_id::int as person, u.full_name as "personName", e.at
    from step_events e left join users u on u.id = e.person_id where e.batch_id = ${id} order by e.id`;
  const batchEvents = await q<LoadedBatch['batchEvents']>`
    select e.id::int, e.kind, e.payload, e.person_id::int as person, u.full_name as "personName", e.at
    from batch_events e join users u on u.id = e.person_id where e.batch_id = ${id} order by e.id`;
  const { doc, now, ...batch } = b;
  return { batch, doc, events: [...events], batchEvents: [...batchEvents], now };
}

// What a batch-level signer is shown: the record as it stands, by its last events (the signature is refused if
// anything was added since).
const batchContent = (l: LoadedBatch) => ({ batch: l.batch.id, batchNo: l.batch.batchNo, lastStepEvent: l.events.at(-1)?.id ?? 0, lastBatchEvent: l.batchEvents.at(-1)?.id ?? 0 });
/** Every signature of the batch: its issue, its steps and its batch-level decisions, in order. */
const batchSignatures = (q: Sql, id: number) => q<Signature[]>`
  select s.object_type as "objectType", s.object_id::int as "objectId", s.printed_name as "printedName", s.meaning, s.signed_at as "signedAt"
  from signatures s
  where (s.object_type = 'batch' and s.object_id = ${id})
     or (s.object_type = 'step_event' and s.object_id in (select e.id from step_events e where e.batch_id = ${id}))
     or (s.object_type = 'batch_event' and s.object_id in (select e.id from batch_events e where e.batch_id = ${id}))
  order by s.signed_at, s.id`;
/** What the batch record PDF is made from: the batch with its master version, issuer and signatures. */
export async function recordInput(q: Sql, l: LoadedBatch): Promise<RecordInput> {
  const v = await masterVersion(q, l.batch.masterVersionId);
  const [issuer] = await q<{ name: string }[]>`select full_name as name from users where id = ${l.batch.issuedBy}`;
  return { ...l, versionNo: v!.versionNo, issuedByName: issuer?.name ?? '', signatures: [...await batchSignatures(q, l.batch.id)] };
}
const batchHash = (l: LoadedBatch) => contentHash('batch', l.batch.id, batchContent(l));
const view = (l: LoadedBatch) => batchView(l.doc, l.events, l.batchEvents, l.now);

// What a signer is shown of a step, and its hash: the signature is refused if the step changed since (PL-05).
const stepContent = (batchId: number, v: StepView) => ({ batch: batchId, step: v.id, values: v.values, results: v.results });
const stepHash = (batchId: number, v: StepView) => contentHash('batch_step', batchId, stepContent(batchId, v));

/** Reads the typed values of a step; machines and rooms are read from master data now (PL-08) and must fit the stage. */
async function readValues(app: FastifyInstance, doc: MasterDoc, key: StepKey, raw: Record<string, unknown>, now: Date): Promise<Record<string, Value>> {
  const stage = doc.stages[key.stage]!;
  const step = stage.steps[key.step]!;
  const block = findBlock(step.block)!;
  const out: Record<string, Value> = {};
  const problems: string[] = [];
  for (const [name, x] of Object.entries(raw)) {
    const f = block.fields.find((y) => y.name === name);
    if (!f) { problems.push(`There is no field ${name}`); continue; }
    if (f.kind === 'timer') { out[name] = now.toISOString(); continue; }
    if (f.kind === 'machine' || f.kind === 'room') {
      const item = f.kind === 'machine' ? usableItem(await app.master.equipment(), String(x), 'machine') : usableItem(await app.master.rooms(), String(x), 'room');
      const type = 'type' in item ? item.type : item.area;
      const allowed = f.kind === 'machine' ? stage.machineTypes : stage.roomTypes;
      if (allowed.length && !allowed.includes(type ?? '')) { problems.push(`${item.code} is not one of the ${f.kind} types this stage allows (${allowed.join(', ')})`); continue; }
      out[name] = { itemId: item.itemId, code: item.code, name: item.name, version: item.version };
      continue;
    }
    const setting = f.unit?.startsWith('$') ? step.settings[f.unit.slice(1)] : f.unit;
    const v = readValue(f, x, typeof setting === 'string' ? setting : '');
    if (typeof v === 'object' && !Array.isArray(v) && 'error' in v) problems.push(v.error);
    else out[name] = v as Value;
  }
  if (problems.length) throw new StepError(400, 'invalid_values', problems);
  return out;
}

const reason = z.string().trim().min(1).max(1000);
const values = z.record(z.unknown());
const BODIES: Record<Action, z.ZodTypeAny> = {
  start: z.object({}),
  record: z.object({ values }),
  done: signBody,
  check: signBody,
  'send-back': z.object({ reason }),
  correct: z.object({ values, reason }),
  'not-applicable': signBody.extend({ reason }),
  'release-hold': signBody,
  note: z.object({ text: reason, reference: z.string().trim().min(1).max(60).optional() }),
};
const BATCH_BODIES: Record<BatchAction, z.ZodTypeAny> = {
  'production-approve': signBody,
  'qc-approve': signBody.extend({ reportNo: z.string().trim().min(1).max(60) }),
  release: signBody,
  reject: signBody.extend({ reason }),
  'close-deviation': z.object({ note: z.number().int().positive(), reason }),
};
// GET /api/batches/:id shows the last few events of each step; the full history is per step.
const LAST_EVENTS = 5;
const NAMES = Object.keys(ACTIONS) as Action[];
const BATCH_NAMES = Object.keys(BATCH_ACTIONS) as BatchAction[];
const flowOf = (doc: MasterDoc, k: StepKey) => doc.stages[k.stage]!.steps[k.step]!.flow.kind;
const context = (doc: MasterDoc, v: StepView, user: SessionUser) => ({ state: v.state, events: v.events, flow: flowOf(doc, v.key), user });
// A step as people name it: the block, and the formula line or the thing checked.
function stepTitle(doc: MasterDoc, st: Step): string {
  const line = Object.values(st.settings).find((v): v is { formula: string } => typeof v === 'object' && 'formula' in v);
  const what = line ? doc.formula.find((l) => l.key === line.formula)?.name : typeof st.settings.what === 'string' ? st.settings.what : undefined;
  return [findBlock(st.block)?.name ?? st.key, what].filter(Boolean).join(': ');
}

/** "My work": what in this batch waits for the person, and where the batch stands. Null when nothing does. */
function myWork(l: LoadedBatch, user: SessionUser) {
  const { stages, steps } = openSteps(l.doc, l.events, l.now);
  const bv = view(l);
  const title = (v: StepView) => stepTitle(l.doc, l.doc.stages[v.key.stage]!.steps[v.key.step]!);
  const stageName = (i: number) => l.doc.stages[i]?.name ?? '';
  const badges: { kind: 'check' | 'resign' | 'due' | 'late' | 'approve'; step?: string; stage: string; title: string; at?: Date; timer?: string }[] = [];
  for (const v of steps) {
    // TB-08: the checker's own list holds only steps the person was not involved in.
    if (!refusal('check', context(l.doc, v, user))) badges.push({ kind: 'check', step: v.id, stage: stageName(v.key.stage), title: title(v) });
    if (v.needsResign && user.permissions.includes('truebatch.batch.operate')) badges.push({ kind: 'resign', step: v.id, stage: stageName(v.key.stage), title: title(v) });
  }
  for (const t of timers(l.doc, l.events, l.now)) {
    if (t.kind === 'periodic' && t.state !== 'late') badges.push({ kind: 'due', step: `${t.key.stage}.${t.key.sub}.${t.key.step}.${t.key.round - 1}`, stage: stageName(t.key.stage), title: t.label, at: t.at, timer: t.kind });
  }
  for (const { timer: t } of lateItems(l.doc, l.events, l.now).filter((x) => !x.notes.length)) {
    badges.push({ kind: 'late', stage: stageName(t.key.stage), title: t.label, at: t.at, timer: t.kind });
  }
  if (!batchRefusal('production-approve', bv, user)) badges.push({ kind: 'approve', stage: '', title: 'Production approval' });
  const now = steps.find((s) => s.state === 'in_progress') ?? steps.find((s) => s.state === 'open');
  const operates = user.permissions.includes('truebatch.batch.operate') && bv.status === 'in production';
  if (!operates && !badges.length) return null;
  return {
    id: l.batch.id, batchNo: l.batch.batchNo, productCode: l.doc.header.productCode, productName: l.doc.header.productName, status: bv.status,
    issuedAt: l.batch.issuedAt, stagesClosed: stages.filter((s) => s.closed).length, stageCount: stages.length,
    current: now ? { step: now.id, stage: stageName(now.key.stage), title: title(now), state: now.state } : null, badges,
  };
}

export function batchRoutes(app: FastifyInstance, sql: Sql) {
  const anyUser = { preHandler: requirePermission() };

  // TB-03: issue a batch from an effective master version, with the next number of the year (never reused).
  app.post('/api/batches', { preHandler: requirePermission('truebatch.batch.issue') }, async (req, reply) => {
    const b = z.object({ masterVersionId: z.number().int().positive(), proof: z.string().min(1).max(2000) }).safeParse(req.body);
    if (!b.success) return reply.code(400).send({ error: 'invalid' });
    const user = req.user!;
    try {
      const signer = await authenticateSigner(sql, app.proofKey, user, b.data, { objectType: 'master_version', objectId: b.data.masterVersionId, meaning: 'issued' });
      return await sql.begin(async (tx) => {
        const v = await masterVersion(tx, b.data.masterVersionId, true);
        if (v?.state !== 'effective') throw new StepError(409, 'not_effective', ['Only an effective master version can be issued.']);
        // Approval will refuse a version with errors; until that workflow exists, issuing checks it too.
        const errors = masterChecks(v.doc).filter((p) => p.level === 'error');
        if (errors.length) throw new StepError(409, 'master_has_errors', errors.map((p) => `${p.path}: ${p.message}`));
        const [c] = await tx<{ n: number; yy: string }[]>`
          insert into batch_counters (year, last_no) values (extract(year from now() at time zone ${PLANT_TZ})::int, 1)
          on conflict (year) do update set last_no = batch_counters.last_no + 1
          returning last_no as n, right(year::text, 2) as yy`;
        const batchNo = `${app.batchPrefix}${c!.yy}${String(c!.n).padStart(4, '0')}`;
        const [row] = await tx<{ id: number }[]>`
          insert into batches (batch_no, master_version_id, issued_by) values (${batchNo}, ${v.id}, ${user.id}) returning id::int`;
        const content = { batchNo, masterVersionId: v.id, masterId: v.masterId, versionNo: v.versionNo, product: v.doc.header.productCode };
        await sign(tx, { signer, objectType: 'batch', objectId: row!.id, meaning: 'issued', content, shownHash: contentHash('batch', row!.id, content) });
        await audit(tx, { actorId: user.id, action: 'batch.issued', objectType: 'batch', objectId: row!.id, new: content });
        return { id: row!.id, batchNo };
      });
    } catch (e) {
      return send(reply, e);
    }
  });

  // My work: the batches still in production (or waiting for production approval) with what waits for this person.
  app.get('/api/batches', anyUser, async (req) => {
    const ids = await sql<{ id: number }[]>`
      select b.id::int from batches b
      where not exists (select 1 from batch_events e where e.batch_id = b.id and e.kind in ('production_approved', 'released', 'rejected'))
      order by b.issued_at desc limit 100`;
    const out = [];
    for (const { id } of ids) {
      const l = await loadBatch(sql, id);
      const w = l && myWork(l, req.user!);
      if (w) out.push(w);
    }
    return out;
  });

  // To review: for QC the production-approved batches, for QA the QC-approved ones (TB-21), oldest decision first.
  app.get('/api/batches/to-review', { preHandler: requirePermission('truebatch.qc.approve', 'truebatch.qa.release') }, async (req) => {
    const ids = await sql<{ id: number }[]>`
      select b.id::int from batches b
      where exists (select 1 from batch_events e where e.batch_id = b.id and e.kind = 'production_approved')
        and not exists (select 1 from batch_events e where e.batch_id = b.id and e.kind in ('released', 'rejected'))
      order by b.issued_at limit 200`;
    const out = [];
    for (const { id } of ids) {
      const l = (await loadBatch(sql, id))!;
      const bv = view(l);
      const waiting = bv.status === 'production approved' ? 'QC' : 'QA';
      if (!req.user!.permissions.includes(waiting === 'QC' ? 'truebatch.qc.approve' : 'truebatch.qa.release')) continue;
      const last = l.batchEvents.filter((e) => e.kind !== 'deviation_closed').at(-1)!;
      out.push({ id, batchNo: l.batch.batchNo, productCode: l.doc.header.productCode, productName: l.doc.header.productName, status: bv.status, waiting,
        since: last.at, by: last.personName, openDeviations: bv.deviations.filter((d) => d.open).length, actions: BATCH_NAMES.filter((a) => a !== 'close-deviation' && !batchRefusal(a, bv, req.user!)) });
    }
    return out;
  });

  // The batch with, per step, its state, current values, why it is not open, the actions open to this person, and
  // the timers. All computed from the step events; nothing is stored.
  app.get<{ Params: { id: string } }>('/api/batches/:id', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const l = id === null ? null : await loadBatch(sql, id);
    if (!l) return reply.code(404).send({ error: 'not_found' });
    const v = await masterVersion(sql, l.batch.masterVersionId);
    const { stages, steps } = openSteps(l.doc, l.events, l.now);
    const bv = view(l);
    return {
      batch: { ...l.batch, ...bv, contentHash: batchHash(l), actions: BATCH_NAMES.filter((a) => a !== 'close-deviation' && !batchRefusal(a, bv, req.user!)) },
      // The server time: the screens count timers down on the server clock.
      now: l.now, master: { id: v!.id, masterId: v!.masterId, versionNo: v!.versionNo, doc: l.doc }, stages, timers: timers(l.doc, l.events, l.now),
      steps: steps.map((s) => {
        const { events, replaced: _, ...current } = s;
        return {
          ...current, events: events.slice(-LAST_EVENTS), contentHash: stepHash(l.batch.id, s),
          actions: NAMES.filter((a) => !refusal(a, context(l.doc, s, req.user!))),
          problems: s.state === 'in_progress' ? doneProblems(l.doc, s, l.now) : [],
        };
      }),
    };
  });

  // The full history of one step, with every correction (the original value, the new one, the reason).
  app.get<{ Params: { id: string; key: string } }>('/api/batches/:id/steps/:key/events', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const l = id === null ? null : await loadBatch(sql, id);
    const s = l && openSteps(l.doc, l.events, l.now).steps.find((x) => x.id === req.params.key);
    return s ? { events: s.events, replaced: s.replaced, inputChanged: s.inputChanged } : reply.code(404).send({ error: 'not_found' });
  });

  // TB-21: what QA reviews in the release screen: corrections, sent-backs, late items, values out of limits with
  // their notes, deviation notes and their status, steps not applicable, and every signature of the batch.
  app.get<{ Params: { id: string } }>('/api/batches/:id/review', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const l = id === null ? null : await loadBatch(sql, id);
    if (!l) return reply.code(404).send({ error: 'not_found' });
    const signatures = await batchSignatures(sql, l.batch.id);
    const names = new Map(l.events.map((e) => [e.person, e.personName]));
    const r = review(l.doc, l.events, l.batchEvents, l.now);
    return { status: view(l).status, ...r, corrections: r.corrections.map((c) => ({ ...c, personName: names.get(c.person) ?? null })), signatures };
  });

  // TB-22: the batch record as a PDF: a complete copy with its values, calculations, changes, notes and signatures.
  app.get<{ Params: { id: string } }>('/api/batches/:id/pdf', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const l = id === null ? null : await loadBatch(sql, id);
    if (!l) return reply.code(404).send({ error: 'not_found' });
    const def = batchRecordDoc(await recordInput(sql, l), req.user!.fullName);
    return sendPdf(reply, `batch-record-${l.batch.batchNo}`, await render(def));
  });

  // Production approval, QC approval, release or rejection (each an e-signature), and QA closing a deviation note.
  for (const action of BATCH_NAMES) {
    const rule = BATCH_ACTIONS[action];
    app.post<{ Params: { id: string } }>(`/api/batches/:id/${action}`, anyUser, async (req, reply) => {
      const id = parseId(req.params.id);
      const body = BATCH_BODIES[action].safeParse(req.body);
      if (id === null || !body.success) return reply.code(400).send({ error: 'invalid', problems: body.error?.issues.map((i) => `${i.path.join('.')}: ${i.message}`) ?? [] });
      const b = body.data as { proof?: string; contentHash?: string; reportNo?: string; reason?: string; note?: number };
      const user = req.user!;
      try {
        const signer = rule.meaning ? await authenticateSigner(sql, app.proofKey, user, { proof: b.proof! }, { objectType: 'batch', objectId: id, meaning: rule.meaning }) : null;
        return await sql.begin(async (tx) => {
          await tx`select pg_advisory_xact_lock(${id}::bigint)`;
          const l = await loadBatch(tx, id);
          if (!l) throw new StepError(404, 'not_found');
          const no = batchRefusal(action, view(l), user, b.note);
          if (no) throw new StepError(no.status, no.error, no.problems);
          if (signer && b.contentHash !== batchHash(l)) throw new StepError(409, 'content_changed', ['The batch record changed since you opened it.']);
          const payload = { ...(b.reportNo ? { reportNo: b.reportNo } : {}), ...(b.reason ? { reason: b.reason } : {}), ...(b.note ? { note: b.note } : {}) };
          const [ev] = await tx<{ id: number }[]>`
            insert into batch_events (batch_id, kind, payload, person_id) values (${id}, ${rule.event}, ${tx.json(payload)}, ${user.id}) returning id::int`;
          if (signer && rule.meaning) {
            const content = { ...batchContent(l), action, ...payload };
            await sign(tx, { signer, objectType: 'batch_event', objectId: ev!.id, meaning: rule.meaning, content, shownHash: contentHash('batch_event', ev!.id, content) });
          }
          await audit(tx, { actorId: user.id, action: `batch.${rule.event}`, objectType: 'batch', objectId: id, new: { event: ev!.id, ...payload }, reason: b.reason ?? null });
          return { ok: true, eventId: ev!.id };
        });
      } catch (e) {
        return send(reply, e);
      }
    });
  }

  // One route per action. Each does the same five things: read the step's events, work out its state, check the
  // action is allowed (state, permission, checker not the performer), insert one event (and its signature), audit.
  for (const action of NAMES) {
    const rule = ACTIONS[action];
    app.post<{ Params: { id: string; key: string } }>(`/api/batches/:id/steps/:key/${action}`, anyUser, async (req, reply) => {
      const id = parseId(req.params.id);
      const key = parseKey(req.params.key);
      const body = BODIES[action].safeParse(req.body);
      if (id === null || key === null || !body.success) return reply.code(400).send({ error: 'invalid', problems: body.error?.issues.map((i) => `${i.path.join('.')}: ${i.message}`) ?? [] });
      const b = body.data as { proof?: string; contentHash?: string; reason?: string; text?: string; reference?: string; values?: Record<string, unknown> };
      const user = req.user!;
      try {
        const signer = rule.meaning ? await authenticateSigner(sql, app.proofKey, user, { proof: b.proof! }, { objectType: 'batch', objectId: id, meaning: rule.meaning }) : null;
        return await sql.begin(async (tx) => {
          await tx`select pg_advisory_xact_lock(${id}::bigint)`;
          // 1. the step's events, 2. its state
          const l = await loadBatch(tx, id);
          if (!l) throw new StepError(404, 'not_found');
          const v = openSteps(l.doc, l.events, l.now).steps.find((s) => s.id === req.params.key);
          if (!v) throw new StepError(404, 'no_such_step');
          // Once production has approved the record it is closed to changes; notes stay possible until QA decides.
          const decided = l.batchEvents.find((e) => e.kind === 'released' || e.kind === 'rejected');
          if (decided || (action !== 'note' && l.batchEvents.some((e) => e.kind === 'production_approved'))) {
            throw new StepError(409, 'batch_closed', [decided ? `The batch is ${decided.kind}.` : 'Production has approved the batch record.']);
          }
          // 3. allowed?
          const no = refusal(action, context(l.doc, v, user));
          if (no) throw new StepError(no.status, no.error, [no.message]);
          if (action === 'done') { const p = doneProblems(l.doc, v, l.now); if (p.length) throw new StepError(409, 'not_ready', p); }
          if (signer && b.contentHash !== stepHash(id, v)) throw new StepError(409, 'content_changed', ['The step changed since you opened it.']);
          let payload: Record<string, unknown> = {};
          const uses: number[] = [];
          if (b.values) {
            const typed = await readValues(app, l.doc, key, b.values, l.now);
            payload = { values: typed, results: evaluate(l.doc, l.events, key, { ...v.values, ...typed }, uses), uses };
          }
          // Signed again after an input changed: the results worked out again, as shown, are stored with the signature.
          if (action === 'done' && v.inputChanged.length) payload = { results: evaluate(l.doc, l.events, key, v.values, uses), uses };
          if (b.reason) payload.reason = b.reason;
          if (b.text) payload.text = b.text;
          if (b.reference) payload.reference = b.reference;
          // 4. one event, and its signature
          const [ev] = await tx<{ id: number }[]>`
            insert into step_events (batch_id, stage, sub, step, round, kind, payload, person_id)
            values (${id}, ${key.stage}, ${key.sub}, ${key.step}, ${key.round}, ${rule.event}, ${tx.json(payload as never)}, ${user.id})
            returning id::int`;
          if (signer && rule.meaning) {
            const content = { ...stepContent(id, v), action, ...(b.reason ? { reason: b.reason } : {}) };
            await sign(tx, { signer, objectType: 'step_event', objectId: ev!.id, meaning: rule.meaning, content, shownHash: contentHash('step_event', ev!.id, content) });
          }
          // 5. audit
          await audit(tx, { actorId: user.id, action: `step.${rule.event}`, objectType: 'batch', objectId: id, new: { step: v.id, event: ev!.id, ...payload }, reason: b.reason ?? null });
          return { ok: true, eventId: ev!.id };
        });
      } catch (e) {
        return send(reply, e);
      }
    });
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    batchPrefix: string;
  }
}
