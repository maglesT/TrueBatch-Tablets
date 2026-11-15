import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { connect, type Sql } from '../server/db.js';
import { links, namesProduct, type Links } from '../server/links.js';
import { findBlock } from '../shared/blocks/index.js';
import { batchRefusal, batchView, fieldLabel, handFields, type BatchEvent } from '../shared/engine/index.js';
import { call, freshApp, handLabels, login, proofFor, seedUser, TEST_DATABASE_URL, type TestApp } from './helpers.js';
import { at, ev, small, tablet } from './engine-fixture.js';

// The links to Deviations, QMS, Logbook and MMS (owner 15 Nov 2026), each read through a fake provider schema in the
// test database with TrueBatch's restricted login, as on the platform: absent (no URL), down (refused or not
// answering: people go on by hand with a second-person check) and ok (pulled, never typed over). And the views
// TrueBatch publishes for the Logbook and Deviations.

let t: TestApp;
let provider: Sql;
const S: Record<'dv' | 'qms' | 'lb' | 'mms', string> = { dv: '', qms: '', lb: '', mms: '' };
const cookies: Record<string, string> = {};
const ids: Record<string, number> = {};
const item = (itemId: string, c: string, name: string) => ({ itemId, code: c, name, version: 1, active: true });

beforeAll(async () => {
  t = await freshApp(async (db) => {
    for (const k of Object.keys(S) as (keyof typeof S)[]) S[k] = `${db.schema}_${k}`;
    // The planned and published views, as tables with the same columns (the providers' own contracts).
    await db.owner.unsafe(`
      create schema ${S.dv}; create schema ${S.qms}; create schema ${S.lb}; create schema ${S.mms};
      create table ${S.dv}.deviation_v1 (number text, status text, classification text, opened_at timestamptz, closed_at timestamptz, product text, batch text,
        batch_norm text, outcome text, read_at timestamptz default now(), data_as_of timestamptz default now(), title text, source_ref text);
      create table ${S.qms}.change_v1 (number text, status text, title text, products text, qa_approved_at timestamptz, closed_at timestamptz,
        read_at timestamptz default now(), data_as_of timestamptz default now());
      create table ${S.lb}.equipment_status_v1 (master_id text, code text, kind text, state text, fit_for_use boolean, blockers text[], warnings text[],
        in_use_batch text, clean_until timestamptz, cleaned_at timestamptz, cleaned_by text, calibration_due date, qualification text,
        checked_at timestamptz default now(), read_at timestamptz default now(), data_as_of timestamptz default now());
      create table ${S.mms}.lot_v1 (lot_number text, kind text, material_master_id text, material_code text, product_code text, status text, status_since timestamptz,
        expiry_date date, retest_date date, manufacturer_batch text, supplier_code text, qc_report_ref text, qc_conclusion text,
        read_at timestamptz default now(), data_as_of timestamptz default now());
      create table ${S.mms}.lot_test_v1 (lot_number text, report_ref text, test text, specification text, result text, value numeric, unit text, basis text,
        tested_at timestamptz, read_at timestamptz default now(), data_as_of timestamptz default now());
      grant usage on schema ${S.dv}, ${S.qms}, ${S.lb}, ${S.mms} to truebatch_app;
      grant select on all tables in schema ${S.dv}, ${S.qms}, ${S.lb}, ${S.mms} to truebatch_app;
      insert into ${S.qms}.change_v1 (number, status, title, products, qa_approved_at) values
        ('CC-2026-0001', 'implementation', 'New supplier of lactose', 'PRD-001', now()), ('CC-2026-0002', 'qa', 'Press speed', null, null),
        ('CC-2026-0003', 'rejected', 'Drop the coating', null, now()),
        ('CC-2026-0004', 'implementation', 'Larger batch of paracetamol', 'FG-PCM500 Paracetamol 500 mg tablets', now()),
        ('CC-2026-0005', 'closure', 'New sifter screen', null, now());
      insert into ${S.lb}.equipment_status_v1 (master_id, code, kind, state, fit_for_use, blockers, warnings, in_use_batch, cleaned_at, cleaned_by, checked_at) values
        ('eq-str', 'STR-01', 'equipment', 'clean', true, '{}', '{"Use allowed under exception EXC-7"}', null, null, null, now()),
        ('eq-str2', 'STR-02', 'equipment', 'dirty', false, '{"Dirty hold expired","Calibration overdue"}', '{}', null, null, null, now()),
        ('eq-str3', 'STR-03', 'equipment', 'in use', true, '{}', '{}', 'XB26001', null, null, now()),
        ('eq-str4', 'STR-04', 'equipment', 'clean', true, '{}', '{}', null, null, null, now() - interval '10 minutes'),
        ('eq-bal', 'BAL-01', 'instrument', 'clean', true, '{}', '{}', null, null, null, now()),
        ('rm-1', 'GRN-01', 'area', 'clean', true, '{}', '{}', null, '2026-11-15 05:30+00', 'CLEANER ONE', now());
      insert into ${S.mms}.lot_v1 (lot_number, kind, material_master_id, material_code, status, expiry_date, retest_date, qc_report_ref) values
        ('API-OK', 'material', 'mat-api', 'MAT-001', 'approved', '2099-01-31', null, 'QC-26-101'),
        ('API-Q', 'material', 'mat-api', 'MAT-001', 'quarantine', '2099-01-31', null, null),
        ('API-EXP', 'material', 'mat-api', 'MAT-001', 'approved', '2020-01-31', null, 'QC-19-001'),
        ('API-RT', 'material', 'mat-api', 'MAT-001', 'approved', '2099-01-31', '2021-06-30', 'QC-20-001'),
        ('API-ASIS', 'material', 'mat-api', 'MAT-001', 'approved', '2099-01-31', null, 'QC-26-102'),
        ('LAC-1', 'material', 'mat-lac', 'MAT-002', 'approved', '2099-01-31', null, 'QC-26-103');
      insert into ${S.mms}.lot_test_v1 (lot_number, report_ref, test, result, value, unit, basis) values
        ('API-OK', 'QC-26-101', 'Assay', '99.1 %', 99.1, '%', 'dried'), ('API-OK', 'QC-26-101', 'LOD', '0.4 %', 0.4, '%', 'as is'),
        ('API-OK', 'QC-26-101', 'Identity', 'complies', null, null, null), ('API-ASIS', 'QC-26-102', 'Assay', '98.0 %', 98.0, '%', 'as is');`);
    provider = connect(TEST_DATABASE_URL, { role: 'truebatch_app', link: true });
    return links({ deviations: provider, qms: provider, logbook: provider, mms: provider }, { deviations: S.dv, qms: S.qms, logbook: S.lb, mms: S.mms });
  });
  t.master.products_.push({ ...item('prd-1', 'PRD-001', 'Examplol 100 mg film-coated tablets'), strength: '100 mg', dosageForm: 'tablet' },
    { ...item('p', 'P', 'P'), strength: null, dosageForm: 'tablet' });
  for (const l of tablet().formula) t.master.materials_.push({ ...item(l.materialItemId, l.code, l.name), category: null, unit: 'kg' });
  t.master.materials_.push({ ...item('m', 'M', 'M'), category: null, unit: 'kg' });
  t.master.equipment_.push(...['', '2', '3', '4', '5'].map((n) => ({ ...item(`eq-str${n}`, `STR-0${n || 1}`, 'Stirrer'), kind: 'equipment' as const, type: 'stirrer', room: 'GRN-01' })),
    { ...item('eq-bal', 'BAL-01', 'Balance 60 kg'), kind: 'instrument', type: 'balance', room: 'DSP-01' });
  t.master.rooms_.push({ ...item('rm-1', 'GRN-01', 'Granulation room 1'), area: 'granulation', grade: 'D' });
  const people = {
    author: ['truebatch.master.author'], checker: ['truebatch.master.check'], quality: ['truebatch.master.approve'], quality2: ['truebatch.master.approve'],
    issuer: ['truebatch.batch.issue'], asha: ['truebatch.batch.operate', 'truebatch.batch.check'], ravi: ['truebatch.batch.check'],
    meera: ['truebatch.qa.release'], mona: ['truebatch.qa.release', 'truebatch.batch.operate'],
  } as const;
  for (const [name, perms] of Object.entries(people)) {
    ids[name] = await seedUser(t.owner, name, [...perms]);
    cookies[name] = (await login(t.app, name)).cookie;
  }
});
afterAll(async () => {
  await provider?.end();
  for (const s of Object.values(S)) if (s) await t.owner.unsafe(`drop schema if exists ${s} cascade`);
  await t?.close();
});

const as = (who: string, method: 'GET' | 'POST', url: string, body?: object) => call(t.app, cookies[who]!, method, url, body);
const cut = (schema: string) => t.owner.unsafe(`revoke select on all tables in schema ${schema} from truebatch_app`);
const restore = (schema: string) => t.owner.unsafe(`grant select on all tables in schema ${schema} to truebatch_app`);
async function issue(doc: ReturnType<typeof small>) {
  const res = await as('author', 'POST', '/api/masters', { doc });
  expect(res.statusCode).toBe(200);
  const { id } = res.json() as { id: number };
  for (const s of ['in_review', 'approved', 'effective']) await t.owner`update master_versions set state = ${s} where id = ${id}`;
  const b = await as('issuer', 'POST', '/api/batches', { masterVersionId: id, proof: proofFor('issuer') });
  expect(b.statusCode).toBe(200);
  return b.json() as { id: number; batchNo: string };
}
type StepJson = { id: string; state: string; values: Record<string, unknown>; source: Record<string, { from: string; state?: string; shown?: string }>;
  handFields: { name: string }[]; problems: string[]; contentHash: string; results: Record<string, { ok: boolean; message?: string }> };
const stepOf = async (id: number, key: string) => ((await as('asha', 'GET', `/api/batches/${id}`)).json() as { steps: StepJson[] }).steps.find((s) => s.id === key)!;
const act = (who: string, id: number, key: string, action: string, body: object = {}) => as(who, 'POST', `/api/batches/${id}/steps/${key}/${action}`, body);
const record = (id: number, key: string, values: object) => act('asha', id, key, 'record', { values });
const sign = async (who: string, id: number, key: string, action: string) => act(who, id, key, action, { proof: proofFor(who), contentHash: (await stepOf(id, key)).contentHash });
const problems = async (p: ReturnType<typeof record>) => ((await p).json() as { problems: string[] }).problems;
const yieldStep = { block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '0.100 kg', yieldLimit: { low: '97.0', high: '100.5', unit: '%' } } };

describe('the link client: absent, down (refused or not answering) and ok', () => {
  const reads = (l: Links) => [l.deviations.byNumbers(['DEV-1']), l.qms.change('CC-2026-0001'), l.logbook.status('eq-str'), l.mms.lot('API-OK')];

  it('absent: no URL (not licensed, or the link is off) reads nothing', async () => {
    expect((await Promise.all(reads(links()))).map((r) => r.state)).toEqual(['absent', 'absent', 'absent', 'absent']);
  });

  it('ok: the rows as the provider has them now, nothing copied', async () => {
    const [d, q, l, m] = await Promise.all(reads(t.app.links));
    expect([d!.state, q!.state, l!.state, m!.state]).toEqual(['ok', 'ok', 'ok', 'ok']);
    expect(q).toMatchObject({ value: { number: 'CC-2026-0001', status: 'implementation', title: 'New supplier of lactose' } });
    expect(l).toMatchObject({ value: { code: 'STR-01', fitForUse: true, warnings: ['Use allowed under exception EXC-7'] } });
    expect(m).toMatchObject({ value: { lotNumber: 'API-OK', status: 'approved', tests: [{ test: 'Assay', value: '99.1', basis: 'dried' }, { test: 'LOD', value: '0.4' }] } });
    await t.owner.unsafe(`update ${S.qms}.change_v1 set title = 'Second lactose supplier' where number = 'CC-2026-0001'`);
    expect(await t.app.links.qms.change('CC-2026-0001')).toMatchObject({ value: { title: 'Second lactose supplier' } });
  });

  it('down: a refused read (grant revoked, view missing) or a provider that does not answer', async () => {
    for (const s of Object.values(S)) await cut(s);
    try {
      expect((await Promise.all(reads(t.app.links))).map((r) => r.state)).toEqual(['down', 'down', 'down', 'down']);
    } finally {
      for (const s of Object.values(S)) await restore(s);
    }
    const gone = links({ deviations: provider, qms: provider, logbook: provider, mms: provider }, { deviations: 'nope', qms: 'nope', logbook: 'nope', mms: 'nope' });
    expect((await Promise.all(reads(gone))).map((r) => r.state)).toEqual(['down', 'down', 'down', 'down']);
    const nowhere = connect('postgres://truebatch_app:x@127.0.0.1:1/x', { link: true });
    expect((await Promise.all(reads(links({ deviations: nowhere, qms: nowhere, logbook: nowhere, mms: nowhere })))).map((r) => r.state)).toEqual(['down', 'down', 'down', 'down']);
    await nowhere.end();
  });
});

describe('the labels people saw', () => {
  it('a label question shows its label, not its name, wherever it is listed, and whether the link is back or not', () => {
    const weigh = findBlock({ id: 'weigh', version: 1 })!.fields;
    expect(fieldLabel(weigh, 'balance')).toBe('Balance');
    expect(fieldLabel(weigh, 'balance.inService')).toBe('Balance: not tagged out of service, maintenance in date');
    expect(fieldLabel(weigh, 'lot.expiry')).toBe('Lot: expiry or retest date on the label, whichever is first (YYYY-MM-DD)');
    // The same text as the question the operator answered.
    const hand = handFields(weigh, { balance: { from: 'hand', link: 'logbook', state: 'down' }, lot: { from: 'hand', link: 'mms', state: 'absent' } });
    for (const q of hand) expect(fieldLabel(weigh, q.name)).toBe(q.label);
    expect(fieldLabel(weigh, 'balance.unknown')).toBe('balance.unknown');
  });
});

describe('TB-11 Logbook: equipment and rooms fit for use', () => {
  let b: { id: number; batchNo: string };
  beforeAll(async () => {
    b = await issue(small([{ machineTypes: ['stirrer'], steps: [{ block: { id: 'line-clearance', version: 1 }, checker: true, settings: {} },
      { block: { id: 'mix', version: 1 }, settings: {} }, yieldStep] }]));
  });

  it('TB-10 line clearance: the room\'s cleaning facts are pulled from the Logbook and cannot be typed over', async () => {
    await act('asha', b.id, '0.1.0.1', 'start');
    expect((await record(b.id, '0.1.0.1', { room: 'rm-1' })).statusCode).toBe(200);
    const s = await stepOf(b.id, '0.1.0.1');
    expect(s.values).toMatchObject({ room: { code: 'GRN-01' }, clean: 'yes', cleanedBy: 'CLEANER ONE' });
    expect(s.values.cleanedOn).toMatch(/^2026-11-15 05:30/);
    expect(s.source.cleanedBy).toMatchObject({ from: 'logbook' });
    expect(s.handFields).toEqual([]);
    expect(await problems(record(b.id, '0.1.0.1', { cleanedBy: 'SOMEONE ELSE' }))).toEqual(['Cleaned by (name on the label) comes from Logbook and cannot be typed over']);
    expect((await record(b.id, '0.1.0.1', { previousRemoved: 'yes', noOther: 'yes' })).statusCode).toBe(200);
    expect((await sign('asha', b.id, '0.1.0.1', 'done')).statusCode).toBe(200);
  });

  it('TB-11 a machine the Logbook says is not fit for use is refused with the Logbook\'s reasons; one in use by another batch too', async () => {
    await act('asha', b.id, '0.1.1.1', 'start');
    expect(await problems(record(b.id, '0.1.1.1', { machine: 'eq-str2' }))).toEqual(['STR-02 is not fit for use (Logbook): Dirty hold expired; Calibration overdue.']);
    expect(await problems(record(b.id, '0.1.1.1', { machine: 'eq-str3' }))).toEqual(['STR-03 is in use by batch XB26001 (Logbook).']);
    expect(await problems(record(b.id, '0.1.1.1', { machine: 'eq-str5' }))).toEqual(['STR-05 is not in the Logbook, so it cannot be used.']);
  });

  it('TB-11 a machine fit for use is pulled with its status: no label questions, no extra check', async () => {
    expect((await record(b.id, '0.1.1.1', { machine: 'eq-str', speed: '300' })).statusCode).toBe(200);
    const s = await stepOf(b.id, '0.1.1.1');
    expect(s.source.machine).toMatchObject({ from: 'logbook', shown: 'STR-01: clean; Use allowed under exception EXC-7' });
    expect(s.handFields).toEqual([]);
    expect((await sign('asha', b.id, '0.1.1.1', 'done')).statusCode).toBe(200);
    expect((await stepOf(b.id, '0.1.1.1')).state).toBe('done');
  });

  it('TB-11 Logbook down or its status too old: the label questions, answered yes, and a second-person check', async () => {
    const c = await issue(small([{ machineTypes: ['stirrer'], steps: [{ block: { id: 'mix', version: 1 }, settings: {} }, yieldStep] }]));
    await act('asha', c.id, '0.1.0.1', 'start');
    expect((await record(c.id, '0.1.0.1', { machine: 'eq-str4', speed: '300' })).statusCode).toBe(200);
    expect((await stepOf(c.id, '0.1.0.1')).source.machine).toEqual({ from: 'hand', link: 'logbook', state: 'down' });
    await cut(S.lb);
    try {
      expect((await record(c.id, '0.1.0.1', { machine: 'eq-str' })).statusCode).toBe(200);
    } finally { await restore(S.lb); }
    const s = await stepOf(c.id, '0.1.0.1');
    expect(s.handFields.map((f) => f.name)).toEqual(['machine.clean', 'machine.calibrated', 'machine.inService', 'machine.qualified']);
    expect(s.problems).toContain('Mixer: the calibration label is in date is not recorded');
    expect(await problems(record(c.id, '0.1.0.1', { 'machine.calibrated': 'no' }))).toEqual(['Mixer: the calibration label is in date: if not, do not use it; use another, or raise a deviation.']);
    expect((await record(c.id, '0.1.0.1', handLabels('machine', 'machine'))).statusCode).toBe(200);
    expect((await sign('asha', c.id, '0.1.0.1', 'done')).statusCode).toBe(200);
    expect((await stepOf(c.id, '0.1.0.1')).state).toBe('done_awaiting_check');
    expect((await sign('asha', c.id, '0.1.0.1', 'check')).json()).toMatchObject({ error: 'own_work' });
    expect((await sign('ravi', c.id, '0.1.0.1', 'check')).statusCode).toBe(200);
    // QA sees every hand entry and why.
    const r = (await as('meera', 'GET', `/api/batches/${c.id}/review`)).json() as { hand: { step: string; field: string; link: string; state: string; personName: string }[] };
    expect(r.hand).toMatchObject([{ step: '0.1.0.1', field: 'machine', link: 'logbook', state: 'down', personName: 'ASHA' }, { field: 'machine', state: 'down' }]);
  });
});

describe('TB-12 MMS: only released, in-date lots of the material; certificate values pulled', () => {
  let b: { id: number; batchNo: string };
  beforeAll(async () => {
    const d = tablet();
    const g = d.stages[1]!;
    d.stages = [{ ...g, uses: [], steps: [g.steps[0]!, g.steps[2]!, g.steps[6]!] }];
    b = await issue(d);
    await act('asha', b.id, '0.1.0.1', 'start');
  });

  it.each([
    ['NOPE', 'Lot NOPE is not in MMS.'],
    ['LAC-1', 'Lot LAC-1 is MAT-002 in MMS, not MAT-001 Examplol.'],
    ['API-Q', 'Lot API-Q is in quarantine in MMS: only a released lot may be used.'],
    ['API-EXP', 'Lot API-EXP expired on 2020-01-31.'],
    ['API-RT', 'Lot API-RT is past its retest date 2021-06-30.'],
    ['API-ASIS', "MMS gives the assay of lot API-ASIS on the as is basis; the master's line is on the dried basis."],
  ])('TB-12 lot %s is refused: %s', async (lot, why) => {
    expect(await problems(record(b.id, '0.1.0.1', { lot }))).toContain(why);
  });

  it('TB-13 a released lot brings its assay and LOD from MMS (pull only): they cannot be typed', async () => {
    expect(await problems(record(b.id, '0.1.0.1', { assay: '99.0' }))).toEqual(['Assay (certificate): record the lot first']);
    expect((await record(b.id, '0.1.0.1', { lot: 'API-OK', balance: 'eq-bal', gross: '11.000', tare: '0.850' })).statusCode).toBe(200);
    const s = await stepOf(b.id, '0.1.0.1');
    expect(s.values).toMatchObject({ lot: 'API-OK', assay: { value: '99.1', unit: '%' }, lod: { value: '0.4', unit: '%' } });
    expect(s.source.lot).toMatchObject({ from: 'mms', shown: 'MMS lot API-OK: approved, expiry 2099-01-31, retest —, QC report QC-26-101' });
    expect(s.source.assay).toMatchObject({ from: 'mms', shown: 'assay 99.1 % (dried), report QC-26-101' });
    expect(s.results.target).toMatchObject({ ok: true });
    expect(s.handFields).toEqual([]);
    expect(await problems(record(b.id, '0.1.0.1', { assay: '101.0' }))).toEqual(['Assay (certificate) comes from MMS and cannot be typed over']);
    expect(await problems(record(b.id, '0.1.0.1', { water: '1.0' }))).toEqual(['Water content (certificate) comes from MMS with the lot and cannot be typed']);
  });

  it('the pick list offers the lots of the material MMS has released and in date', async () => {
    const r = (await as('asha', 'GET', '/api/mms/lots?material=mat-api')).json() as { link: string; lots: { lotNumber: string }[] };
    expect(r).toMatchObject({ link: 'ok' });
    expect(r.lots.map((l) => l.lotNumber)).toEqual(['API-ASIS', 'API-OK']);
  });

  it('TB-12 MMS down: the lot is typed with its label status and date, refused when expired or not released, and checked', async () => {
    expect((await sign('asha', b.id, '0.1.0.1', 'done')).statusCode).toBe(200);
    await act('asha', b.id, '0.1.1.1', 'start');
    await cut(S.mms);
    try {
      const charge = { lot: 'API-OK', machine: 'eq-bal', allCharged: 'yes' };
      expect(await problems(record(b.id, '0.1.1.1', { ...charge, 'lot.released': 'yes', 'lot.expiry': '2020-01-31' })))
        .toEqual(['The lot expired or passed its retest date on 2020-01-31: it may not be used.']);
      expect(await problems(record(b.id, '0.1.1.1', { ...charge, 'lot.released': 'no', 'lot.expiry': '2099-01-31' })))
        .toEqual(['Lot charged: the label says RELEASED (approved by QC): if not, do not use it; use another, or raise a deviation.']);
      expect((await record(b.id, '0.1.1.1', { ...charge, ...handLabels('lot', 'lot') })).statusCode).toBe(200);
    } finally { await restore(S.mms); }
    const s = await stepOf(b.id, '0.1.1.1');
    expect(s.source.lot).toEqual({ from: 'hand', link: 'mms', state: 'down' });
    expect(s.values).toMatchObject({ 'lot.released': 'yes', 'lot.expiry': '2099-12-31' });
    const r = (await as('meera', 'GET', `/api/batches/${b.id}/review`)).json() as { hand: { field: string; link: string }[] };
    expect(r.hand).toMatchObject([{ field: 'lot', link: 'mms' }]);
  });
});

describe('TB-21 Deviations: the deviation number and its status come from the Deviations system', () => {
  let b: { id: number; batchNo: string };
  const devs = async () => ((await as('meera', 'GET', `/api/batches/${b.id}`)).json() as { batch: { deviations: { reference: string; open: boolean; status?: string }[]; deviationsLink: string } }).batch;
  beforeAll(async () => {
    b = await issue(small([{ steps: [{ checker: true }, yieldStep] }]));
    await t.owner.unsafe(`insert into ${S.dv}.deviation_v1 (number, status, batch, batch_norm, title) values
      ('DEV-26-0001', 'investigation', '${b.batchNo}', '${b.batchNo.toLowerCase()}', 'pH out of limits'),
      ('DEV-26-0099', 'classification', '${b.batchNo}', '${b.batchNo.toLowerCase()}', 'Label torn'),
      ('DEV-26-0500', 'closed', 'OTHER1', 'other1', 'Another batch')`);
  });

  it('a note\'s reference must be a deviation in the Deviations system; the pick list holds the deviations naming the batch', async () => {
    const picks = (await as('asha', 'GET', `/api/batches/${b.id}/deviations`)).json() as { link: string; deviations: { number: string }[] };
    expect(picks.deviations.map((d) => d.number)).toEqual(['DEV-26-0001', 'DEV-26-0099']);
    expect((await act('asha', b.id, '0.1.0.1', 'note', { text: 'pH 7.4', reference: 'DEV-26-9999' })).json())
      .toMatchObject({ error: 'unknown_deviation', problems: ['DEV-26-9999 is not in the Deviations system: pick one of the deviations of this batch, or check the number.'] });
    expect((await act('asha', b.id, '0.1.0.1', 'note', { text: 'pH 7.4', reference: 'DEV-26-0001' })).statusCode).toBe(200);
  });

  it('TB-21 its status is Deviations\' while the link answers: QA cannot close it by hand, and an unlinked deviation is shown', async () => {
    expect(await devs()).toMatchObject({ deviationsLink: 'ok', deviations: [{ reference: 'DEV-26-0001', open: true, status: 'investigation' }] });
    const note = ((await as('meera', 'GET', `/api/batches/${b.id}/review`)).json() as { deviations: { note: number }[]; unlinked: { number: string }[] });
    expect(note.unlinked.map((d) => d.number)).toEqual(['DEV-26-0099']);
    expect((await as('meera', 'POST', `/api/batches/${b.id}/close-deviation`, { note: note.deviations[0]!.note, reason: 'Closed' })).json())
      .toMatchObject({ problems: ['The status of DEV-26-0001 comes from the Deviations system (now under investigation): it is closed there.'] });
    await t.owner.unsafe(`update ${S.dv}.deviation_v1 set status = 'closed', closed_at = now() where number = 'DEV-26-0001'`);
    expect(await devs()).toMatchObject({ deviations: [{ reference: 'DEV-26-0001', open: false, status: 'closed' }] });
  });

  it('TB-21 release is blocked until Deviations has the deviation closed (the server passes the statuses in)', () => {
    const doc = small([{ steps: [{ checker: true }] }]);
    const events = [ev('started', '0.1.0.1', { min: 1 }), ev('done', '0.1.0.1', { min: 2 }), ev('checked', '0.1.0.1', { person: 2, min: 3 }),
      ev('note', '0.1.0.1', { min: 4, payload: { text: 'pH', reference: 'DEV-26-001' } })];
    const approved: BatchEvent[] = [{ id: 1, kind: 'production_approved', payload: {}, person: 3, at: at(5) }, { id: 2, kind: 'qc_approved', payload: { reportNo: 'QC-1' }, person: 4, at: at(6) }];
    const qa = { id: 9, permissions: ['truebatch.qa.release'] };
    const release = (status: string) => batchRefusal('release', batchView(doc, events, approved, at(10), new Map([['DEV-26-001', { status, closedAt: null }]])), qa)?.problems ?? null;
    expect(release('investigation')).toEqual(['Deviation DEV-26-001 (Stage 0 › Check a value against limits: pH) is still open in the Deviations system (under investigation): it is closed there first']);
    expect(release('closed')).toBeNull();
    expect(release('rejected')).toBeNull();
  });

  it('TB-21 Deviations down: the number is typed, and a QA person other than the one who typed it closes it by hand', async () => {
    await cut(S.dv);
    try {
      expect((await act('mona', b.id, '0.1.0.1', 'note', { text: 'Second pH reading', reference: 'DEV-PAPER-7' })).statusCode).toBe(200);
      const d = await devs();
      expect(d.deviationsLink).toBe('down');
      const typed = d.deviations.find((x) => x.reference === 'DEV-PAPER-7') as unknown as { note: number; open: boolean };
      expect(typed.open).toBe(true);
      expect((await as('mona', 'POST', `/api/batches/${b.id}/close-deviation`, { note: typed.note, reason: 'Closed on paper' })).json())
        .toMatchObject({ error: 'own_work', problems: ['You typed this deviation number: another QA person closes it.'] });
      expect((await as('meera', 'POST', `/api/batches/${b.id}/close-deviation`, { note: typed.note, reason: 'Closed in the deviation system on 15 Nov' })).statusCode).toBe(200);
      const r = (await as('meera', 'GET', `/api/batches/${b.id}/review`)).json() as { hand: { field: string; link: string; state: string; personName: string }[] };
      expect(r.hand).toMatchObject([{ field: 'reference', link: 'deviations', state: 'down', personName: 'MONA' }]);
    } finally { await restore(S.dv); }
  });
});

describe('TB-02 QMS: a new master version needs a QA-approved change control', () => {
  const draft = async () => {
    const { id } = (await as('author', 'POST', '/api/masters', { doc: tablet() })).json() as { id: number };
    const hash = async (who: string) => ((await as(who, 'GET', `/api/master-versions/${id}/review`)).json() as { contentHash: string }).contentHash;
    const review = async (who: string, action: string, extra: object = {}) =>
      as(who, 'POST', `/api/master-versions/${id}/${action}`, { proof: proofFor(who), contentHash: await hash(who), ...extra });
    await review('author', 'submit');
    await review('checker', 'pass');
    return { id, review };
  };

  it('TB-02 the change control must be in QMS and approved by QA; its title and approval are kept', async () => {
    const { id, review } = await draft();
    expect((await review('quality', 'approve', { changeControl: 'CC-404' })).json()).toMatchObject({ error: 'unknown_change_control' });
    expect((await review('quality', 'approve', { changeControl: 'CC-2026-0002' })).json())
      .toMatchObject({ error: 'change_not_approved', message: 'CC-2026-0002 is at the step “qa” in QMS and not approved by QA: only a QA-approved change control (implementation, closure, closed) can carry a new version.' });
    expect((await review('quality', 'approve', { changeControl: 'CC-2026-0003' })).json()).toMatchObject({ error: 'change_not_approved' });
    expect((await review('quality', 'approve', { changeControl: 'CC-2026-0001' })).statusCode).toBe(200);
    const [e] = await t.owner<{ payload: { source: { changeControl: { from: string; shown: string } } } }[]>`
      select payload from master_events where version_id = ${id} and kind = 'approved'`;
    expect(e!.payload.source.changeControl).toMatchObject({ from: 'qms', shown: expect.stringMatching(/^CC-2026-0001: Second lactose supplier \(implementation, QA approved /) });
    // Pulled from QMS: the approver may make it effective.
    expect((await as('quality', 'POST', `/api/master-versions/${id}/make-effective`, {})).statusCode).toBe(200);
    const picks = (await as('quality', 'GET', '/api/change-controls')).json() as { changes: { number: string }[] };
    expect(picks.changes.map((c) => c.number)).toEqual(['CC-2026-0005', 'CC-2026-0004', 'CC-2026-0001']);
  });

  it('TB-02 only a change control naming the master\'s product is offered and accepted; one naming no product is taken with a warning', async () => {
    const { id, review } = await draft();
    const picks = (await as('quality', 'GET', `/api/change-controls?version=${id}`)).json() as { changes: { number: string; names: string }[] };
    expect(picks.changes.map((c) => [c.number, c.names])).toEqual([['CC-2026-0005', 'none'], ['CC-2026-0001', 'yes']]);
    expect((await review('quality', 'approve', { changeControl: 'CC-2026-0004' })).json()).toMatchObject({ error: 'other_product',
      message: 'CC-2026-0004 is for FG-PCM500 Paracetamol 500 mg tablets in QMS, not for PRD-001 Examplol 100 mg film-coated tablets: pick the change control of this product.' });
    expect((await review('quality', 'approve', { changeControl: 'CC-2026-0005' })).statusCode).toBe(200);
    const [e] = await t.owner<{ payload: { source: { changeControl: { shown: string } } } }[]>`select payload from master_events where version_id = ${id} and kind = 'approved'`;
    expect(e!.payload.source.changeControl.shown).toMatch(/QMS names no product: QA checked that it covers PRD-001$/);
    const c = (products: string | null) => ({ number: 'CC', status: 'closed', title: null, qaApprovedAt: 'x', products });
    const prd = { productCode: 'FG-ATV20', productName: 'Atorvastatin calcium tablets 20 mg' };
    expect([c('fg-atv20, FG-ATV40'), c('ATORVASTATIN CALCIUM TABLETS 20 MG'), c('FG-ATV200'), c(' '), c(null)].map((x) => namesProduct(x, prd))).toEqual(['yes', 'yes', 'no', 'none', 'none']);
  });

  it('TB-02 QMS down: the number is typed, and another person makes the version effective', async () => {
    const { id, review } = await draft();
    await cut(S.qms);
    try {
      expect((await review('quality', 'approve', { changeControl: 'CC-PAPER-9' })).statusCode).toBe(200);
    } finally { await restore(S.qms); }
    expect((await as('quality', 'POST', `/api/master-versions/${id}/make-effective`, {})).json()).toMatchObject({ error: 'same_person' });
    expect((await as('quality2', 'POST', `/api/master-versions/${id}/make-effective`, {})).statusCode).toBe(200);
  });
});

describe('the views TrueBatch publishes', () => {
  const rep = () => `${t.schema}_report`;
  const columns = async (view: string) => (await t.owner<{ c: string }[]>`
    select column_name || ' ' || data_type as c from information_schema.columns where table_schema = ${rep()} and table_name = ${view} order by ordinal_position`).map((r) => r.c);

  it('batch_fact_v1 and equipment_use_v1 have the names and columns of Batchwright\'s, as the Logbook and Deviations read them', async () => {
    // Batchwright's columns, in its order, as on the platform demo database; then TrueBatch's own manufactured_on, added
    // at the end only (0007), so every reader that selects Batchwright's named columns reads TrueBatch unchanged.
    const batchwright = ['batch_id uuid', 'batch_number text', 'product_code text', 'strength text', 'mbr_version_id uuid', 'family_code text',
      'record_kind text', 'status text', 'issued_at timestamp with time zone', 'completed_at timestamp with time zone', 'released boolean',
      'read_at timestamp with time zone', 'data_as_of timestamp with time zone'];
    expect(await columns('batch_fact_v1')).toEqual([...batchwright, 'manufactured_on date']);
    expect(await columns('equipment_use_v1')).toEqual(['batch_number text', 'equipment_code text', 'equipment_type text', 'room_code text', 'step text',
      'started_at timestamp with time zone', 'ended_at timestamp with time zone', 'read_at timestamp with time zone', 'data_as_of timestamp with time zone']);
    expect(await columns('deviation_note_v1')).toEqual(['note_id bigint', 'source_ref text', 'batch_number text', 'product_code text', 'step text', 'note text',
      'reference text', 'status text', 'noted_at timestamp with time zone', 'read_at timestamp with time zone', 'data_as_of timestamp with time zone']);
  });

  it('the Logbook\'s and Deviations\' own queries read TrueBatch batches, the equipment they used and the notes', async () => {
    const r = rep();
    // The Logbook's batch list (server/batches.ts COLS and IN_PRODUCTION) and "used on".
    const batches = await t.owner.unsafe(`select batch_number, product_code, strength, status, issued_at::text, completed_at::text, coalesce(released, false) as released,
      (completed_at is null and not coalesce(released, false) and status !~* '(complete|review|releas|reject|cancel|clos|destroy|abort)') as in_production
      from ${r}.batch_fact_v1 order by issued_at desc nulls last, batch_number limit 500`);
    expect(batches.length).toBeGreaterThanOrEqual(4);
    expect(batches[0]).toMatchObject({ product_code: 'P', status: 'IN_PRODUCTION', released: false, in_production: true, completed_at: null });
    const used = await t.owner.unsafe(`select distinct batch_number from ${r}.equipment_use_v1 where upper(equipment_code) = any($1) or upper(room_code) = any($1)`, [['STR-01']]);
    expect(used.length).toBeGreaterThanOrEqual(2);
    // Deviations' batch findings (server/readers/batchwright.ts).
    const uses = await t.owner.unsafe(`select batch_number, equipment_code, equipment_type, room_code, step, started_at, ended_at from ${r}.equipment_use_v1 x
      where equipment_code = 'STR-01' order by batch_number, started_at nulls last limit 1000`);
    expect(uses[0]).toMatchObject({ equipment_code: 'STR-01', equipment_type: 'stirrer', room_code: 'GRN-01', step: 's0/t1' });
    expect(uses[0]!.started_at).toBeInstanceOf(Date);
    const facts = await t.owner.unsafe(`select batch_number, product_code, strength, family_code, status, issued_at, completed_at, released from ${r}.batch_fact_v1`);
    expect(facts.length).toBe(batches.length);
    const notes = await t.owner.unsafe(`select source_ref, step, note, reference, status from ${r}.deviation_note_v1 where reference is not null order by note_id`);
    expect(notes.map((n) => [n.reference, n.status])).toEqual([['DEV-26-0001', 'open'], ['DEV-PAPER-7', 'closed']]);
    expect(notes[0]!.source_ref).toMatch(/^truebatch:note:\d+$/);
  });

  it('TB-P8 batch_fact_v1.manufactured_on, the date of manufacture, is the plant-time date the first processing step started, not the issue date; null before any step started', async () => {
    const [b] = await t.owner<{ mv: number; by: number }[]>`select master_version_id::int as mv, issued_by::int as by from batches order by id limit 1`;
    const made = async (batchNo: string) => (await t.owner<{ id: number }[]>`
      insert into batches (batch_no, master_version_id, issued_by, issued_at) values (${batchNo}, ${b!.mv}, ${b!.by}, '2026-10-30 10:00+00') returning id::int`)[0]!.id;
    const started = await made('MFG-STARTED');
    await made('MFG-NOT-STARTED');
    // A timer finding before the first start is no start; the first start is 20:00 UTC on 2 Nov, 01:30 on 3 Nov in plant time.
    await t.owner`insert into step_events (batch_id, stage, sub, step, round, kind, payload, person_id, at) values
      (${started}, 0, 1, 0, 1, 'late', '{"timer":"mfg-test"}', null, '2026-10-31 08:00+00'),
      (${started}, 1, 1, 0, 1, 'started', '{}', ${b!.by}, '2026-11-04 08:00+00'),
      (${started}, 0, 1, 0, 1, 'started', '{}', ${b!.by}, '2026-11-02 20:00+00'),
      (${started}, 0, 1, 0, 1, 'value', '{}', ${b!.by}, '2026-11-02 21:00+00')`;
    const rows = await t.owner.unsafe(`select batch_number, issued_at::date::text as issued, manufactured_on::text from ${rep()}.batch_fact_v1 where batch_number like 'MFG-%' order by batch_number`);
    expect(rows).toEqual([{ batch_number: 'MFG-NOT-STARTED', issued: '2026-10-30', manufactured_on: null }, { batch_number: 'MFG-STARTED', issued: '2026-10-30', manufactured_on: '2026-11-03' }]);
  });

  it('nobody reads the views without a link: the app login itself has no grant', async () => {
    await expect(t.sql.unsafe(`select * from ${rep()}.batch_fact_v1`)).rejects.toMatchObject({ code: '42501' });
  });
});
