import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { recordLate } from '../server/late.js';
import { call, freshApp, login, proofFor, seedUser, type TestApp } from './helpers.js';
import { tablet } from './engine-fixture.js';

// Master versions (draft, locked once out of draft), issuing a batch from an effective version (TB-03), walking a
// stage through the step routes, refused actions (TB-08), insert-only step events and the timer job (TB-17).

let t: TestApp;
const cookies: Record<string, string> = {};
const code = (p: Promise<unknown>) => p.then(() => 'ok', (e: { code?: string }) => e.code);
const item = (itemId: string, c: string, name: string) => ({ itemId, code: c, name, version: 1, active: true });

beforeAll(async () => {
  t = await freshApp();
  t.master.products_.push({ ...item('prd-1', 'PRD-001', 'Examplol 100 mg film-coated tablets'), strength: '100 mg', dosageForm: 'tablet' });
  for (const l of tablet().formula) t.master.materials_.push({ ...item(l.materialItemId, l.code, l.name), category: null, unit: 'kg' });
  t.master.equipment_.push(
    { ...item('eq-bal', 'BAL-01', 'Balance 60 kg'), kind: 'instrument', type: 'balance', room: 'DSP-01' },
    { ...item('eq-str', 'STR-01', 'Stirrer'), kind: 'equipment', type: 'stirrer', room: 'GRN-01' },
    { ...item('eq-prs', 'PRS-01', 'Tablet press'), kind: 'equipment', type: 'tablet press', room: 'CMP-01' },
  );
  const people = {
    author: ['truebatch.master.author', 'truebatch.view'], issuer: ['truebatch.batch.issue'], viewer: ['truebatch.view'],
    asha: ['truebatch.batch.operate', 'truebatch.batch.check'], ravi: ['truebatch.batch.check'], meera: ['truebatch.qa.release'],
  } as const;
  for (const [name, perms] of Object.entries(people)) {
    await seedUser(t.owner, name, [...perms]);
    cookies[name] = (await login(t.app, name)).cookie;
  }
});
afterAll(() => t.close());

const as = (who: string, method: 'GET' | 'POST' | 'PUT', url: string, body?: object) => call(t.app, cookies[who]!, method as 'GET', url, body);
async function effectiveMaster(change?: (d: ReturnType<typeof tablet>) => void) {
  const doc = tablet();
  change?.(doc);
  const res = await as('author', 'POST', '/api/masters', { doc });
  expect(res.statusCode).toBe(200);
  const { id } = res.json() as { id: number };
  for (const s of ['in_review', 'approved', 'effective']) await t.owner`update master_versions set state = ${s} where id = ${id}`;
  return id;
}
async function issue(masterVersionId: number) {
  const res = await as('issuer', 'POST', '/api/batches', { masterVersionId, proof: proofFor('issuer') });
  expect(res.statusCode).toBe(200);
  return res.json() as { id: number; batchNo: string };
}
const batch = async (id: number, who = 'asha') => (await as(who, 'GET', `/api/batches/${id}`)).json() as {
  stages: { key: string; open: boolean; closed: boolean; blocked?: string }[];
  steps: { id: string; state: string; actions: string[]; contentHash: string; results: Record<string, { ok: boolean; check?: { pass: boolean } }>; problems: string[]; blocked?: string }[];
  timers: { id: string; state: string }[];
};
const stepOf = async (id: number, key: string, who = 'asha') => (await batch(id, who)).steps.find((s) => s.id === key)!;
const act = (who: string, id: number, key: string, action: string, body: object = {}) => as(who, 'POST', `/api/batches/${id}/steps/${key}/${action}`, body);
const sign = async (who: string, id: number, key: string, action: string, extra: object = {}) =>
  act(who, id, key, action, { proof: proofFor(who), contentHash: (await stepOf(id, key, who)).contentHash, ...extra });

describe('master versions', () => {
  it('a new master is version 1, a draft; the draft can be changed and checked', async () => {
    const res = await as('author', 'POST', '/api/masters', { doc: tablet() });
    const { id, versionNo } = res.json() as { id: number; versionNo: number };
    expect(versionNo).toBe(1);
    const doc = tablet();
    doc.header.batchSize = '50000';
    expect((await as('author', 'PUT', `/api/master-versions/${id}`, { doc })).statusCode).toBe(200);
    expect(((await as('viewer', 'GET', `/api/master-versions/${id}`)).json() as { doc: typeof doc }).doc.header.batchSize).toBe('50000');
    expect((await as('viewer', 'GET', `/api/master-versions/${id}/checks`)).json()).toEqual({ problems: [] });
    expect(await t.owner`select 1 from audit_log where action = 'master.updated' and object_id = ${String(id)}`).toHaveLength(1);
    expect((await as('viewer', 'PUT', `/api/master-versions/${id}`, { doc })).statusCode).toBe(403);
  });

  it('PL-08 the product and materials must be active in master data', async () => {
    const doc = tablet();
    doc.formula[0]!.materialItemId = 'nowhere';
    expect((await as('author', 'POST', '/api/masters', { doc })).statusCode).toBe(409);
  });

  it('only a draft is editable: a version out of draft is locked by the database', async () => {
    const { id, masterId } = (await as('author', 'POST', '/api/masters', { doc: tablet() })).json() as { id: number; masterId: number };
    expect((await as('author', 'POST', `/api/masters/${masterId}/versions`, {})).statusCode).toBe(409);
    await t.owner`update master_versions set state = 'in_review' where id = ${id}`;
    expect((await as('author', 'PUT', `/api/master-versions/${id}`, { doc: tablet() })).json()).toMatchObject({ error: 'locked' });
    expect(await code(t.sql`update master_versions set doc = '{}' where id = ${id}`)).toBe('P0001');
    await t.owner`update master_versions set state = 'approved' where id = ${id}`;
    expect(await code(t.owner`update master_versions set state = 'draft' where id = ${id}`)).toBe('P0001');
    expect(await code(t.owner`update master_versions set doc = '{}' where id = ${id}`)).toBe('P0001');
    expect(await code(t.owner`delete from master_versions where id = ${id}`)).toBe('P0001');
    const next = await as('author', 'POST', `/api/masters/${masterId}/versions`, {});
    expect(next.json()).toMatchObject({ masterId, versionNo: 2 });
  });
});

describe('issuing a batch', () => {
  it('TB-03 batch numbers come from the year counter with the fixed prefix, in order, never reused', async () => {
    const mv = await effectiveMaster();
    const a = await issue(mv);
    const b = await issue(mv);
    expect(a.batchNo).toMatch(/^TB\d{2}\d{4}$/);
    expect(Number(b.batchNo.slice(4))).toBe(Number(a.batchNo.slice(4)) + 1);
    expect(await code(t.sql`insert into batches (batch_no, master_version_id, issued_by) values (${a.batchNo}, ${mv}, 1)`)).toBe('23505');
    expect(await t.owner`select 1 from signatures where object_type = 'batch' and object_id = ${a.id} and meaning = 'issued'`).toHaveLength(1);
  });

  it('only an effective master version is issued, and only with the issue permission', async () => {
    const { id } = (await as('author', 'POST', '/api/masters', { doc: tablet() })).json() as { id: number };
    expect((await as('issuer', 'POST', '/api/batches', { masterVersionId: id, proof: proofFor('issuer') })).json()).toMatchObject({ error: 'not_effective' });
    expect((await as('asha', 'POST', '/api/batches', { masterVersionId: id, proof: proofFor('asha') })).statusCode).toBe(403);
    const bad = await effectiveMaster((d) => { d.stages[1]!.steps[0]!.checker = false; });
    expect((await as('issuer', 'POST', '/api/batches', { masterVersionId: bad, proof: proofFor('issuer') })).json())
      .toMatchObject({ error: 'master_has_errors', problems: ['stages[1].steps[0]: A weighing step needs a second-person check'] });
  });
});

describe('walking a stage', () => {
  let id: number;
  beforeAll(async () => { id = (await issue(await effectiveMaster())).id; });

  it('the first step of the preparation is open; everything else waits, with the reason', async () => {
    const b = await batch(id);
    expect(b.steps[0]).toMatchObject({ id: '0.1.0.1', state: 'open', actions: ['start', 'note'] });
    expect(b.steps.find((s) => s.id === '1.1.0.1')!.blocked).toBe('Waits for the preparation Binder solution to close');
  });

  it('start → record (the templates compute) → done (signed performed) → checked by another person (signed verified)', async () => {
    expect((await act('asha', id, '0.1.0.1', 'start')).statusCode).toBe(200);
    // 10.0 mg × 100 000 = 1.000 kg target; 1.350 − 0.350 = 1.000 kg net.
    const rec = await act('asha', id, '0.1.0.1', 'record', { values: { lot: 'PVP-2611', balance: 'eq-bal', gross: '1.350', tare: '0.350' } });
    expect(rec.statusCode).toBe(200);
    const s = await stepOf(id, '0.1.0.1');
    expect(s.results.net).toMatchObject({ ok: true, value: '1' });
    expect(s.results.netCheck?.check?.pass).toBe(true);
    expect(s.problems).toEqual([]);
    const done = await sign('asha', id, '0.1.0.1', 'done');
    expect(done.statusCode).toBe(200);
    const { eventId } = done.json() as { eventId: number };
    expect(await t.owner`select 1 from signatures where object_type = 'step_event' and object_id = ${eventId} and meaning = 'performed'`).toHaveLength(1);
    expect((await stepOf(id, '0.1.0.1')).state).toBe('done_awaiting_check');
    expect((await sign('ravi', id, '0.1.0.1', 'check')).statusCode).toBe(200);
    expect((await stepOf(id, '0.1.0.1')).state).toBe('checked');
    expect(await t.owner`select 1 from audit_log where action = 'step.checked' and object_id = ${String(id)}`).toHaveLength(1);
  });

  it('a mix cannot be done before its minimum time; after it, the preparation closes and the next stage opens', async () => {
    expect((await act('asha', id, '0.1.1.1', 'start')).statusCode).toBe(200);
    await act('asha', id, '0.1.1.1', 'record', { values: { machine: 'eq-str', speed: '300' } });
    const early = await sign('asha', id, '0.1.1.1', 'done');
    expect(early.statusCode).toBe(409);
    expect(early.json().problems[0]).toMatch(/^The minimum time is 10 min/);
    // As if the mix had started 11 minutes ago.
    await t.owner`insert into step_events (batch_id, stage, sub, step, round, kind, person_id, at)
      select ${id}, 0, 1, 1, 1, 'started', person_id, now() - interval '11 minutes' from step_events where batch_id = ${id} and kind = 'started' limit 1`;
    expect((await sign('asha', id, '0.1.1.1', 'done')).statusCode).toBe(200);
    const b = await batch(id);
    expect(b.stages[0]).toMatchObject({ key: 'binder', closed: true });
    expect(b.steps.find((s) => s.id === '1.1.0.1')!.state).toBe('open');
    expect(b.timers).toMatchObject([{ id: 'hold:0:1', state: 'running' }]);
  });

  it('refused: the wrong state, a missing permission, a stale screen, a machine the stage does not allow', async () => {
    expect((await act('asha', id, '1.1.0.1', 'record', { values: { lot: 'X' } })).json()).toMatchObject({ error: 'wrong_state' });
    expect((await sign('ravi', id, '1.1.0.1', 'check')).json()).toMatchObject({ error: 'wrong_state' });
    expect((await act('ravi', id, '1.1.0.1', 'start')).json()).toMatchObject({ error: 'forbidden' });
    expect((await act('viewer', id, '1.1.0.1', 'note', { text: 'x' })).statusCode).toBe(403);
    expect((await act('asha', id, '9.1.0.1', 'start')).json()).toMatchObject({ error: 'no_such_step' });
    await act('asha', id, '1.1.0.1', 'start');
    const press = await act('asha', id, '1.1.0.1', 'record', { values: { balance: 'eq-prs', gross: 'heavy' } });
    expect(press.json()).toMatchObject({ error: 'invalid_values', problems: ['PRS-01 is not one of the machine types this stage allows (balance, granulator, dryer, mill)', 'Gross weight: type a number, e.g. "50.300"'] });
    await act('asha', id, '1.1.0.1', 'record', { values: { lot: 'API-2611', balance: 'eq-bal', assay: '99.0', lod: '0.5', gross: '11.000', tare: '0.850' } });
    const stale = await act('asha', id, '1.1.0.1', 'done', { proof: proofFor('asha'), contentHash: '0'.repeat(64) });
    expect(stale.json()).toMatchObject({ error: 'content_changed' });
  });

  it('TB-08 the person who performed a step cannot check it', async () => {
    expect((await sign('asha', id, '1.1.0.1', 'done')).statusCode).toBe(200);
    expect((await stepOf(id, '1.1.0.1')).actions).not.toContain('check');
    const own = await sign('asha', id, '1.1.0.1', 'check');
    expect(own.statusCode).toBe(403);
    expect(own.json()).toMatchObject({ error: 'own_work' });
  });

  it('send back, correct with a reason, sign again, check: the original value stays in the record', async () => {
    expect((await act('ravi', id, '1.1.0.1', 'send-back', { reason: 'Tare looks wrong' })).statusCode).toBe(200);
    expect((await act('asha', id, '1.1.0.1', 'record', { values: { tare: '0.849' } })).json()).toMatchObject({ error: 'wrong_state' });
    expect((await act('asha', id, '1.1.0.1', 'correct', { values: { tare: '0.849' } })).statusCode).toBe(400);
    expect((await act('asha', id, '1.1.0.1', 'correct', { values: { tare: '0.849' }, reason: 'Tare misread' })).statusCode).toBe(200);
    const s = (await stepOf(id, '1.1.0.1')) as unknown as { needsResign: boolean; replaced: { field: string; reason: string }[]; results: Record<string, { value: string }> };
    expect(s.needsResign).toBe(true);
    expect(s.replaced).toMatchObject([{ field: 'tare', reason: 'Tare misread' }]);
    expect(s.results.net!.value).toBe('10.151');
    expect((await sign('asha', id, '1.1.0.1', 'done')).statusCode).toBe(200);
    expect((await sign('ravi', id, '1.1.0.1', 'check')).statusCode).toBe(200);
  });

  it('step events are insert-only: the app role cannot change or delete them, nor can the owner', async () => {
    expect(await code(t.sql`update step_events set kind = 'checked'`)).toBe('42501');
    expect(await code(t.sql`delete from step_events`)).toBe('42501');
    expect(await code(t.owner`update step_events set payload = '{}'`)).toBe('42501');
    expect(await code(t.owner`delete from step_events`)).toBe('42501');
    expect(await code(t.sql`insert into step_events (batch_id, stage, sub, step, round, kind, person_id, at) values (${id}, 0, 1, 0, 1, 'note', 1, now() - interval '1 day')`)).toBe('42501');
  });
});

describe('the timer job', () => {
  it('TB-17 a hold time that ran out is recorded late once, and blocks the using stage until a deviation note', async () => {
    const { id } = await issue(await effectiveMaster());
    // The binder solution was made 25 hours ago (hold time 24 h).
    const [p] = await t.owner<{ id: string }[]>`select id from users where username = 'asha'`;
    const [r] = await t.owner<{ id: string }[]>`select id from users where username = 'ravi'`;
    await t.owner`insert into step_events (batch_id, stage, sub, step, round, kind, person_id, at) values
      (${id}, 0, 1, 0, 1, 'started', ${p!.id}, now() - interval '26 hours'), (${id}, 0, 1, 0, 1, 'done', ${p!.id}, now() - interval '26 hours'),
      (${id}, 0, 1, 0, 1, 'checked', ${r!.id}, now() - interval '26 hours'),
      (${id}, 0, 1, 1, 1, 'started', ${p!.id}, now() - interval '26 hours'), (${id}, 0, 1, 1, 1, 'done', ${p!.id}, now() - interval '25 hours')`;
    const b = await batch(id);
    expect(b.stages[1]!.blocked).toBe('Hold time of binder solution (24 h) before Granulation ran out: a deviation note is needed');
    expect(b.steps.find((s) => s.id === '1.1.0.1')!.state).toBe('waiting');
    expect(await recordLate(t.sql)).toBeGreaterThanOrEqual(1);
    expect(await recordLate(t.sql)).toBe(0);
    expect(await t.owner`select 1 from step_events where batch_id = ${id} and kind = 'late' and payload->>'timer' = 'hold:0:1' and person_id is null`).toHaveLength(1);
    expect(await code(t.sql`insert into step_events (batch_id, stage, sub, step, round, kind, payload) values (${id}, 1, 1, 0, 1, 'late', '{"timer": "hold:0:1"}')`)).toBe('23505');
    expect((await act('asha', id, '1.1.0.1', 'note', { text: 'Binder solution held 25 h; deviation raised' })).statusCode).toBe(200);
    expect((await stepOf(id, '1.1.0.1')).state).toBe('open');
  });
});
