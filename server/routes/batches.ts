import type { FastifyInstance, FastifyReply } from 'fastify';
import { z } from 'zod';
import type { Sql, Tx } from '../db.js';
import { audit } from '../audit.js';
import { parseId, requirePermission, type SessionUser } from '../auth.js';
import { usableItem } from '../master.js';
import { SignError, authenticateSigner, contentHash, sign, signBody } from '../signatures.js';
import { masterVersion } from './masters.js';
import { findBlock } from '../../shared/blocks/index.js';
import { masterChecks } from '../../shared/master/checks.js';
import type { MasterDoc } from '../../shared/master/schema.js';
import {
  ACTIONS, doneProblems, evaluate, openSteps, parseKey, readValue, refusal, timers,
  type Action, type StepEvent, type StepKey, type StepView, type Value,
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
  const { doc, now, ...batch } = b;
  return { batch, doc, events: [...events], now };
}

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
  note: z.object({ text: reason }),
};
const NAMES = Object.keys(ACTIONS) as Action[];
const flowOf = (doc: MasterDoc, k: StepKey) => doc.stages[k.stage]!.steps[k.step]!.flow.kind;
const context = (doc: MasterDoc, v: StepView, user: SessionUser) => ({ state: v.state, events: v.events, flow: flowOf(doc, v.key), user });

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

  // The batch with, per step, its state, current values, why it is not open, the actions open to this person, and
  // the timers. All computed from the step events; nothing is stored.
  app.get<{ Params: { id: string } }>('/api/batches/:id', anyUser, async (req, reply) => {
    const id = parseId(req.params.id);
    const l = id === null ? null : await loadBatch(sql, id);
    if (!l) return reply.code(404).send({ error: 'not_found' });
    const v = await masterVersion(sql, l.batch.masterVersionId);
    const { stages, steps } = openSteps(l.doc, l.events, l.now);
    return {
      batch: l.batch, master: { id: v!.id, masterId: v!.masterId, versionNo: v!.versionNo, doc: l.doc }, stages, timers: timers(l.doc, l.events, l.now),
      steps: steps.map((s) => ({
        ...s, contentHash: stepHash(l.batch.id, s),
        actions: NAMES.filter((a) => !refusal(a, context(l.doc, s, req.user!))),
        problems: s.state === 'in_progress' ? doneProblems(l.doc, s, l.now) : [],
      })),
    };
  });

  // One route per action. Each does the same five things: read the step's events, work out its state, check the
  // action is allowed (state, permission, checker not the performer), insert one event (and its signature), audit.
  for (const action of NAMES) {
    const rule = ACTIONS[action];
    app.post<{ Params: { id: string; key: string } }>(`/api/batches/:id/steps/:key/${action}`, anyUser, async (req, reply) => {
      const id = parseId(req.params.id);
      const key = parseKey(req.params.key);
      const body = BODIES[action].safeParse(req.body);
      if (id === null || key === null || !body.success) return reply.code(400).send({ error: 'invalid', problems: body.error?.issues.map((i) => `${i.path.join('.')}: ${i.message}`) ?? [] });
      const b = body.data as { proof?: string; contentHash?: string; reason?: string; text?: string; values?: Record<string, unknown> };
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
