import { readFileSync } from 'node:fs';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { connect, type Sql } from '../server/db.js';
import { links } from '../server/links.js';
import { batchRecordDoc } from '../server/batch-record.js';
import { loadBatch, recordInput } from '../server/routes/batches.js';
import { PACKING } from '../packing/product.js';
import { PACKING_APP_ROLE } from '../packing/migrate.js';
import { call, freshApp, handLabels, login, proofFor, seedUser, TEST_DATABASE_URL, type TestApp } from './helpers.js';
import { packing } from './packing-fixture.js';

// TrueBatch Tablets Packing through its own server: its own permission codes, a packing batch issued from a RELEASED
// bulk batch read from TrueBatch Tablets' batch_fact_v1 (a fake provider schema, read with packing's restricted login),
// the hand fallback with a second person, one active order per line, the whole record run to QC approval and QA release,
// the packing record PDF, its published view, and its insert-only tables.

let t: TestApp;
let provider: Sql;
let TB = '';
const cookies: Record<string, string> = {};
const item = (itemId: string, c: string, name: string) => ({ itemId, code: c, name, version: 1, active: true });
const P = (...codes: string[]) => codes.map((c) => `truebatch_packing.${c}` as const);

beforeAll(async () => {
  t = await freshApp(async (db) => {
    TB = `${db.schema}_tb`;
    // TrueBatch Tablets' published batch_fact_v1, as a table with its columns.
    await db.owner.unsafe(`
      create schema ${TB};
      create table ${TB}.batch_fact_v1 (batch_id uuid, batch_number text, product_code text, strength text, mbr_version_id uuid, family_code text, record_kind text,
        status text, issued_at timestamptz, completed_at timestamptz, released boolean, read_at timestamptz default now(), data_as_of timestamptz default now());
      grant usage on schema ${TB} to ${PACKING_APP_ROLE};
      grant select on all tables in schema ${TB} to ${PACKING_APP_ROLE};
      insert into ${TB}.batch_fact_v1 (batch_number, product_code, record_kind, status, issued_at, released) values
        ('TB260001', 'PRD-001', 'PROCESSING', 'RELEASED', '2026-11-03 06:00+00', true),
        ('TB260002', 'PRD-001', 'PROCESSING', 'QC_APPROVED', '2026-11-05 06:00+00', false),
        ('TB260003', 'PRD-002', 'PROCESSING', 'RELEASED', '2026-11-04 06:00+00', true),
        ('TB260004', 'PRD-001', 'PROCESSING', 'RELEASED', '2026-11-06 06:00+00', true);`);
    provider = connect(TEST_DATABASE_URL, { role: PACKING_APP_ROLE, link: true });
    return links({ truebatch: provider }, { truebatch: TB });
  }, PACKING);
  t.master.products_.push({ ...item('pk-1', 'PK-001', 'Examplol 100 mg tablets, 10 x 10 blister'), strength: '100 mg', dosageForm: 'tablet' },
    { ...item('prd-1', 'PRD-001', 'Examplol 100 mg tablets'), strength: '100 mg', dosageForm: 'tablet' });
  for (const m of packing().pack!.materials) t.master.materials_.push({ ...item(m.materialItemId, m.code, m.name), category: 'packing', unit: m.unit });
  t.master.equipment_.push({ ...item('ln-1', 'BL-01', 'Blister line 1'), kind: 'equipment', type: 'blister line', room: 'PK-01' },
    { ...item('ln-2', 'BL-02', 'Blister line 2'), kind: 'equipment', type: 'blister line', room: 'PK-02' });
  const people = {
    author: P('master.author', 'view'), issuer: P('batch.issue'), op1: P('batch.operate'), chk1: P('batch.check'), sup1: P('batch.supervise'), qc1: P('qc.approve'), qa1: P('qa.release'),
  };
  for (const [name, perms] of Object.entries(people)) {
    await seedUser(t.owner, name, perms);
    cookies[name] = (await login(t.app, name)).cookie;
  }
  await seedUser(t.owner, 'tablets', ['truebatch.batch.operate', 'truebatch.qa.release']);
});
afterAll(async () => {
  await provider?.end();
  await t.owner.unsafe(`drop schema if exists ${TB} cascade`);
  await t.close();
});

const as = (who: string, method: 'GET' | 'POST', url: string, body?: object) => call(t.app, cookies[who]!, method, url, body);
type Batch = { batch: { status: string; contentHash: string; actions: string[] }; steps: { id: string; state: string; actions: string[]; contentHash: string; values: Record<string, unknown>;
  source: Record<string, { from: string }>; handFields: { name: string }[]; results: Record<string, { ok: boolean; shown?: string; check?: { pass: boolean } }>; problems: string[] }[] };
const get = async (id: number, who = 'op1') => (await as(who, 'GET', `/api/batches/${id}`)).json() as Batch;
let mv = 0;
async function effective() {
  const res = await as('author', 'POST', '/api/masters', { doc: packing() });
  expect(res.statusCode, res.body).toBe(200);
  const { id } = res.json() as { id: number };
  for (const s of ['in_review', 'approved', 'effective']) await t.owner`update master_versions set state = ${s} where id = ${id}`;
  return id;
}
// No Logbook link here: the line's status labels are answered at issue (TB-11).
const issue = (values: Record<string, unknown>) => as('issuer', 'POST', '/api/batches', { masterVersionId: mv, proof: proofFor('issuer'), values: { ...handLabels('line', 'machine'), ...values } });

describe('TrueBatch Tablets Packing: its own product on the platform', () => {
  it('PL-01 packing reads only its own permission codes from core, each as the shared code of the same thing', async () => {
    const me = (await as('op1', 'GET', '/api/me')).json() as { permissions: string[] };
    expect(me.permissions).toEqual(['truebatch.batch.operate']);
    const refused = await login(t.app, 'tablets');
    expect(refused.res.statusCode).toBe(403);
    expect(refused.res.body).toContain('You have no right to use TrueBatch Tablets Packing.');
  });

  it('PL-01 the packing draft manifest declares exactly the packing permission codes and labels, in the platform format', () => {
    const m = JSON.parse(readFileSync(path.join(import.meta.dirname, '../ops/packing.manifest.draft.json'), 'utf8')) as { product: string; database: string; permissions: { code: string; label: string }[]; reads: Record<string, string[]>; publishes: string[] };
    expect(Object.fromEntries(m.permissions.map((p) => [p.code, p.label]))).toEqual(PACKING.permissions);
    expect([m.product, m.database]).toEqual(['truebatch_packing', 'truebatch_packing']);
    for (const p of m.permissions) expect(p.code).toMatch(/^truebatch_packing(\.[a-z0-9_]+)+$/);
    expect(m.reads.truebatch).toEqual(['batch_fact_v1']);
    expect(m.publishes).toEqual(['packing_batch_v1']);
  });

  it('PL-06 the packing app login keeps the step events and signatures insert-only', async () => {
    mv = await effective();
    await expect(t.sql`update step_events set kind = 'done'`).rejects.toMatchObject({ code: '42501' });
    await expect(t.sql`delete from signatures`).rejects.toMatchObject({ code: '42501' });
  });
});

describe('a packing batch from a released bulk batch', () => {
  let first = 0;
  it('TB-P2 a packing batch is issued from a RELEASED bulk batch of TrueBatch Tablets: line, bulk and tablets recorded, the date of manufacture pulled', async () => {
    const res = await issue({ line: 'ln-1', bulk: 'TB260001', tablets: '100000' });
    expect(res.statusCode, res.body).toBe(200);
    expect(res.json()).toMatchObject({ batchNo: expect.stringMatching(/^TP\d{6}$/) });
    first = (res.json() as { id: number }).id;
    const s = (await get(first)).steps[0]!;
    expect(s).toMatchObject({ state: 'in_progress', values: { bulk: 'TB260001', mfgDate: '2026-11-03', line: { code: 'BL-01' } }, source: { bulk: { from: 'truebatch' }, mfgDate: { from: 'truebatch' } } });
    expect(s.results.expiry).toMatchObject({ ok: true, shown: expect.stringContaining('expiry 10/2028') });
    expect(s.results.packs).toMatchObject({ ok: true, shown: '100000 tablets ÷ 10 tablets = 10000 units' });
    // The pulled date cannot be typed over.
    const r = await as('op1', 'POST', `/api/batches/${first}/steps/0.1.0.1/record`, { values: { mfgDate: '2026-11-01' } });
    expect(r.json()).toMatchObject({ problems: ['Date of manufacture of the bulk (YYYY-MM-DD) comes from TrueBatch Tablets and cannot be typed over'] });
  });

  it('TB-P2 bulk must be released: a bulk batch not released, of another product, or unknown is refused', async () => {
    const no = async (bulk: string) => (await issue({ line: 'ln-2', bulk, tablets: '1000' })).json() as { problems: string[] };
    expect((await no('TB260002')).problems).toEqual(['Bulk batch TB260002 is qc approved in TrueBatch Tablets: only a released bulk batch may be packed.']);
    expect((await no('TB260003')).problems).toEqual(['Bulk batch TB260003 is PRD-002 in TrueBatch Tablets, not PRD-001 Examplol 100 mg tablets.']);
    expect((await no('TB269999')).problems).toEqual(['Bulk batch TB269999 is not in TrueBatch Tablets.']);
    expect((await issue({ line: 'ln-2', bulk: 'TB260001' })).json()).toMatchObject({ problems: ['Bulk tablets issued is not recorded'] });
  });

  it('TB-P7 one active packing order per line: a line with a batch being packed takes no other', async () => {
    const res = await issue({ line: 'ln-1', bulk: 'TB260004', tablets: '50000' });
    expect(res.statusCode).toBe(409);
    expect(res.json()).toMatchObject({ error: 'line_in_use', problems: [expect.stringMatching(/^Line BL-01 has an active packing order: batch TP\d{6} \(PK-001\) is still being packed\. One packing order per line\.$/)] });
  });

  it('TB-P2 without the TrueBatch Tablets link the bulk is typed from its labels (RELEASED), and a second person checks it', async () => {
    await t.owner.unsafe(`revoke select on ${TB}.batch_fact_v1 from ${PACKING_APP_ROLE}`);
    try {
      const notReleased = await issue({ line: 'ln-2', bulk: 'TB260004', tablets: '50000', mfgDate: '2026-11-06', 'bulk.released': 'no', 'bulk.product': 'yes' });
      expect(notReleased.json()).toMatchObject({ problems: [expect.stringContaining('the bulk container labels say RELEASED (QA) for this batch number: if not, do not use it')] });
      const res = await issue({ line: 'ln-2', bulk: 'TB260004', tablets: '50000', mfgDate: '2026-11-06', 'bulk.released': 'yes', 'bulk.product': 'yes' });
      expect(res.statusCode, res.body).toBe(200);
      const id = (res.json() as { id: number }).id;
      const s = (await get(id)).steps[0]!;
      expect(s.source.bulk).toEqual({ from: 'hand', link: 'truebatch', state: 'down' });
      expect(s.handFields.map((f) => f.name)).toEqual(expect.arrayContaining(['bulk.released', 'bulk.product']));
      // The issuer cannot check it; the review lists the hand entry for QA.
      const review = (await as('qa1', 'GET', `/api/batches/${id}/review`)).json() as { hand: { field: string; link: string }[] };
      expect(review.hand.map((h) => `${h.field} ${h.link}`)).toContain('bulk truebatch');
      const done = await as('op1', 'POST', `/api/batches/${id}/steps/0.1.0.1/record`, { values: { received: 'yes' } });
      expect(done.statusCode).toBe(200);
      const signed = await as('op1', 'POST', `/api/batches/${id}/steps/0.1.0.1/done`, { proof: proofFor('op1'), contentHash: (await get(id)).steps[0]!.contentHash });
      expect(signed.statusCode, signed.body).toBe(200);
      expect((await get(id, 'chk1')).steps[0]).toMatchObject({ state: 'done_awaiting_check', actions: ['check', 'send-back', 'note'] });
    } finally {
      await t.owner.unsafe(`grant select on ${TB}.batch_fact_v1 to ${PACKING_APP_ROLE}`);
    }
  });

  it('TB-P6 the packing record runs to the end: materials issued and reconciled, checks alongside the line, finished goods; QC approves it, then QA releases it, and the line is free again', async () => {
    const id = first;
    const step = async (key: string, values: Record<string, unknown>) => {
      let s = (await get(id)).steps.find((x) => x.id === key)!;
      if (s.actions.includes('start')) expect((await as('op1', 'POST', `/api/batches/${id}/steps/${key}/start`)).statusCode).toBe(200);
      const r = await as('op1', 'POST', `/api/batches/${id}/steps/${key}/record`, { values });
      expect(r.statusCode, `${key}: ${r.body}`).toBe(200);
      s = (await get(id)).steps.find((x) => x.id === key)!;
      const d = await as('op1', 'POST', `/api/batches/${id}/steps/${key}/done`, { proof: proofFor('op1'), contentHash: s.contentHash });
      expect(d.statusCode, `${key} done: ${d.body}`).toBe(200);
      s = (await get(id, 'chk1')).steps.find((x) => x.id === key)!;
      if (s.state === 'done_awaiting_check') {
        const c = await as('chk1', 'POST', `/api/batches/${id}/steps/${key}/check`, { proof: proofFor('chk1'), contentHash: s.contentHash });
        expect(c.statusCode, `${key} check: ${c.body}`).toBe(200);
      }
      return s;
    };
    const yes = (...names: string[]) => Object.fromEntries(names.map((n) => [n, 'yes']));
    const line = { line: 'ln-1', ...handLabels('line', 'machine') };
    await step('0.1.0.1', { received: 'yes' });
    const issued: Record<string, string> = { foil: '1250', pvc: '1250', carton: '1000', leaflet: '1000' };
    for (const [i, k] of Object.keys(issued).entries()) await step(`0.1.${i + 1}.1`, { lot: `${k.toUpperCase()}-1`, ...handLabels('lot', 'lot'), issued: issued[k], matches: 'yes' });
    await step('1.1.0.1', { ...line, ...yes('noPrevious', 'coderCleared', 'rejectsEmpty', 'clean'), cleanedOn: '2026-11-15 07:00', cleanedBy: 'CLEANER ONE' });
    await step('1.1.1.1', yes('components', 'changeParts', 'coderSet', 'specimens'));
    const coding = await step('1.1.2.1', { printedBatch: 'TB260001', printedMfg: 'NOV.2026', printedExpiry: 'OCT.2028', printedMrp: 'Rs. 125.00', ...yes('legible', 'packingDone') });
    expect(coding.results.expiryCheck).toMatchObject({ check: { pass: true } });
    await step('1.1.3.1', { sealTemp: '175', ...yes('pockets', 'seal', 'packingDone') });
    await step('1.1.4.1', { vacuum: '500', tested: '20', leaking: '0', packingDone: 'yes' });
    await step('1.1.5.1', yes('appearance', 'complete', 'samplesKept', 'packingDone'));
    await step('1.1.6.1', { cartons: '10', ...yes('leaflet', 'count', 'coded', 'packingDone') });
    const fg = await step('2.1.0.1', { packs: '9800', cartons: '980', samples: '40', returnedWeight: '0.375', rejectWeight: '0.125' });
    expect(fg.results.accountability).toMatchObject({ check: { pass: true } });
    await step('2.1.1.1', { used: '1176', destroyed: '20', returned: '54' });
    await step('2.1.2.1', { used: '984', destroyed: '6', returned: '10' });
    await step('2.1.3.1', { used: '980', destroyed: '0', returned: '20' });
    await step('2.1.4.1', { what: 'Foil 20 m, cartons 6', method: 'shredded', destroyed: 'yes' });
    await step('2.1.5.1', { ...line, ...yes('noLeftover', 'coderCleared', 'leftoversDone') });

    let b = await get(id, 'sup1');
    expect(b.batch.status).toBe('manufacturing complete');
    expect((await as('sup1', 'POST', `/api/batches/${id}/production-approve`, { proof: proofFor('sup1'), contentHash: b.batch.contentHash })).statusCode).toBe(200);
    // TB-21: QC signs first (the finished packed product tested and complies, with the QC report number), then QA releases.
    b = await get(id, 'qa1');
    expect(b.batch).toMatchObject({ status: 'production approved', actions: [] });
    const early = await as('qa1', 'POST', `/api/batches/${id}/release`, { proof: proofFor('qa1'), contentHash: b.batch.contentHash });
    expect(early.statusCode).toBe(409);
    expect(early.json()).toMatchObject({ problems: ['Not possible while the batch is production approved.'] });
    expect(((await as('qa1', 'GET', '/api/batches/to-review')).json() as { id: number }[]).find((x) => x.id === id)).toBeUndefined();
    const forQc = (await as('qc1', 'GET', '/api/batches/to-review')).json() as { id: number; waiting: string; actions: string[] }[];
    expect(forQc.find((x) => x.id === id)).toMatchObject({ waiting: 'QC', actions: ['qc-approve'] });
    b = await get(id, 'qc1');
    const qc = await as('qc1', 'POST', `/api/batches/${id}/qc-approve`, { proof: proofFor('qc1'), contentHash: b.batch.contentHash, reportNo: 'QC-26-0101' });
    expect(qc.statusCode, qc.body).toBe(200);
    const [qcRow] = await t.owner.unsafe(`select status from ${t.schema}_report.packing_batch_v1 where batch_number = $1`, [(await loadBatch(t.sql, id))!.batch.batchNo]);
    expect(qcRow).toEqual({ status: 'QC_APPROVED' });
    b = await get(id, 'qa1');
    expect(b.batch).toMatchObject({ status: 'QC approved', actions: ['release', 'reject'] });
    const toReview = (await as('qa1', 'GET', '/api/batches/to-review')).json() as { id: number; waiting: string }[];
    expect(toReview.find((x) => x.id === id)).toMatchObject({ waiting: 'QA' });
    const rel = await as('qa1', 'POST', `/api/batches/${id}/release`, { proof: proofFor('qa1'), contentHash: b.batch.contentHash });
    expect(rel.statusCode, rel.body).toBe(200);
    expect((await get(id, 'qa1')).batch.status).toBe('released');

    // TB-22 for packing: the packing record PDF, with the pack, the bulk and the packing materials.
    const pdf = JSON.stringify(batchRecordDoc(await recordInput(t.sql, (await loadBatch(t.sql, id))!), 'QA'));
    for (const text of ['Packing record TP', 'TrueBatch Tablets Packing', 'batch TB260001', 'expiry 10/2028', 'QC report QC-26-0101', 'Packing materials', 'Lot FOIL-1: 1250 m', '1176 m used']) expect(pdf).toContain(text);
    const res = await as('qa1', 'GET', `/api/batches/${id}/pdf`);
    expect(res.headers['content-type']).toContain('application/pdf');

    // The published view, for MMS finished goods later.
    const [row] = await t.owner.unsafe(`select batch_number, coded_batch_number, product_code, bulk_product_code, pack_type, units_per_pack, mfg_date, expiry_month, packs::text, cartons::text, status, released
      from ${t.schema}_report.packing_batch_v1 where coded_batch_number = 'TB260001'`);
    expect(row).toMatchObject({ coded_batch_number: 'TB260001', product_code: 'PK-001', bulk_product_code: 'PRD-001', pack_type: 'blister', units_per_pack: 10, mfg_date: '2026-11-03',
      expiry_month: '2028-10', packs: '9800', cartons: '980', status: 'RELEASED', released: true });

    // TB-P7: the line takes the next order once this one is finished.
    expect((await issue({ line: 'ln-1', bulk: 'TB260004', tablets: '50000' })).statusCode).toBe(200);
  });
});
