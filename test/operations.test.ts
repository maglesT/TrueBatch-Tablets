// Fix 1121 B5: Operations' live scoring of a running batch (report.running_batch_v1 in the ops database, read through
// OPS_DATABASE_URL while the link is on), shown on the batch screen for information only. A fake provider schema,
// read with TrueBatch's restricted login as on the platform.
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { connect, type Sql } from '../server/db.js';
import { links } from '../server/links.js';
import { call, freshApp, login, seedUser, TEST_DATABASE_URL, type TestApp } from './helpers.js';
import { small } from './engine-fixture.js';

let t: TestApp;
let provider: Sql;
let OPS = '';
let cookie = '';
let id = 0;
beforeAll(async () => {
  t = await freshApp(async (db) => {
    OPS = `${db.schema}_ops`;
    await db.owner.unsafe(`
      create schema ${OPS};
      create table ${OPS}.running_batch_v1 (product_code text, batch_number text, stage_title text, step_title text, level text, reasons text[], values_seen int, values_total int,
        expected_finish_at timestamptz, finish_from timestamptz, finish_to timestamptz, expected_yield_percent numeric, yield_from numeric, yield_to numeric, scored_at timestamptz);
      grant usage on schema ${OPS} to truebatch_app; grant select on all tables in schema ${OPS} to truebatch_app;`);
    provider = connect(TEST_DATABASE_URL, { role: 'truebatch_app', link: true });
    return links({ operations: provider }, { operations: OPS });
  });
  const user = await seedUser(t.owner, 'viewer', ['truebatch.view']);
  cookie = (await login(t.app, 'viewer')).cookie;
  const doc = small([{ steps: [{}] }]);
  const [v] = await t.owner<{ id: number }[]>`insert into master_versions (version_no, doc, created_by) values (1, ${t.owner.json(doc as never)}, ${user}) returning id::int`;
  const [b] = await t.owner<{ id: number }[]>`insert into batches (batch_no, master_version_id, issued_by) values ('TB269001', ${v!.id}, ${user}) returning id::int`;
  id = b!.id;
});
afterAll(async () => {
  await provider?.end();
  await t.owner.unsafe(`drop schema if exists ${OPS} cascade`);
  await t.close();
});

describe('B5 Operations scoring on the batch screen (information only)', () => {
  const score = async () => (await call(t.app, cookie, 'GET', `/api/batches/${id}/operations`)).json() as { score: Record<string, unknown> | null };
  it('nothing while Operations has not scored the batch', async () => {
    expect(await score()).toEqual({ score: null });
  });
  it('the latest scoring of this batch of this product: level, reasons, expected finish and yield with their ranges, as of when', async () => {
    const product = small([{ steps: [{}] }]).header.productCode;
    await t.owner.unsafe(`insert into ${OPS}.running_batch_v1 values
      ($1, 'TB269001', 'Compression', 'Compress', 'usual', '{}', 3, 20, '2026-11-21 10:00+00', '2026-11-21 09:30+00', '2026-11-21 11:00+00', 98.2, 97.0, 99.1, '2026-11-21 06:00+00'),
      ($1, 'TB269001', 'Compression', 'Compress', 'unusual', '{"Hardness lower than usual"}', 5, 20, null, null, null, 97.5, 96.0, 99.0, '2026-11-21 07:00+00'),
      ('OTHER', 'TB269001', 'x', 'y', 'very_unusual', '{}', 1, 1, null, null, null, null, null, null, '2026-11-21 08:00+00')`, [product]);
    expect((await score()).score).toMatchObject({ level: 'unusual', reasons: ['Hardness lower than usual'], valuesSeen: 5, valuesTotal: 20, stageTitle: 'Compression', stepTitle: 'Compress',
      expectedFinishAt: null, expectedYieldPercent: '97.5', yieldFrom: '96.0', yieldTo: '99.0', scoredAt: expect.stringContaining('2026-11-21 07:00') });
  });
  it('the view gone (or the link cut): nothing, no error', async () => {
    await t.owner.unsafe(`alter table ${OPS}.running_batch_v1 rename to running_batch_old`);
    try { expect(await score()).toEqual({ score: null }); } finally { await t.owner.unsafe(`alter table ${OPS}.running_batch_old rename to running_batch_v1`); }
  });
});
