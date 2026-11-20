// Round 46: two engine blocks, roller compaction (dry granulation) and device assembly (autoinjector, safety syringe,
// inhaler), run by the engine like any other block: the master check, record → done, out of limits needs a deviation
// note, and the device assembly's component is a material use for MMS.
import { describe, expect, it } from 'vitest';
import { findBlock } from '../shared/blocks/index.js';
import { blockProblems } from '../shared/blocks/format.js';
import { doneProblems, evaluate, materialUses, openSteps, parseKey, type StepEvent, type Value } from '../shared/engine/index.js';
import { masterChecks } from '../shared/master/checks.js';
import type { MasterDoc } from '../shared/master/schema.js';
import { at, ev, small, unplaced } from './engine-fixture.js';
import { batchRecordDoc } from '../server/batch-record.js';

const checks = (d: MasterDoc) => unplaced(masterChecks(d)).map((p) => `${p.path}: ${p.message}`);
const pct = (low: string, high: string) => ({ low, high, unit: '%' });
const q = (value: string, unit: string) => ({ value, unit });
const units = (value: string) => q(value, 'units');
const yieldStep = { key: 'yield', block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '100 kg', yieldLimit: pct('97.0', '100.5') } };

const ROLLER = { forceUnit: 'kN/cm', forceLimit: { low: '6', high: '10', unit: 'kN/cm' }, gapLimit: { low: '2.0', high: '3.0', unit: 'mm' },
  rollSpeedLimit: { low: '3', high: '8', unit: 'rpm' }, screen: '1.0 mm', densityLimit: { low: '0.90', high: '1.20', unit: 'g/cm³' }, finesLimit: { high: '30', unit: '%' } };
const roller = (settings: object = ROLLER) => small([{ role: 'Granulation operator', steps: [
  { key: 'compact', block: { id: 'roller-compact', version: 1 }, checker: false, everyMinutes: 30, flow: { kind: 'repeat-until', maxRounds: 20 }, settings }, yieldStep] }]);
const round = (o: Record<string, Value> = {}): Record<string, Value> => ({ machine: 'RC-01', rollForce: q('8.0', 'kN/cm'), rollGap: q('2.5', 'mm'), rollSpeed: q('5', 'rpm'),
  feedSpeed: q('40', 'rpm'), ribbonThickness: [q('2.4', 'mm'), q('2.5', 'mm'), q('2.6', 'mm')], ribbonDensity: q('1.05', 'g/cm³'), fines: q('22.0', '%'),
  screenOk: 'yes', compactionDone: 'no', ...o });

const DEVICE = { component: { formula: 'x' }, theoretical: '1000 units', functionSample: '5', forceLimit: { low: '10', high: '25', unit: 'N' }, level: 'II',
  criticalAql: '0', majorAql: '0.65', minorAql: '2.5', yieldLimit: pct('97.0', '100.5'), accountabilityLimit: pct('99.0', '100.5'), componentLimit: pct('99.0', '100.5') };
const device = (settings: object = DEVICE) => small([{ role: 'Assembly operator', steps: [{ key: 'assemble', block: { id: 'device-assembly', version: 1 }, checker: true, settings }] }]);
// 1000 syringes fed: 980 good, 10 rejected, 5 samples, 5 fired in the function test = 1000; 1010 housings issued, 5
// damaged, 5 back to stores: 1005 used.
const assembled = (o: Record<string, Value> = {}): Record<string, Value> => ({ lot: 'AI-HSG-2601', machine: 'AL-01', issued: units('1010'), unitsIn: units('1000'),
  tested: units('5'), failed: units('0'), works: 'yes', complete: 'yes', force: q('15', 'N'), inspected: units('80'), critical: units('0'), major: units('0'), minor: units('1'),
  good: units('980'), rejected: units('10'), samples: units('5'), componentRejects: units('5'), returned: units('5'), ...o });

const K = (key: string) => parseKey(key)!;
/** Records the values and asks what stops the performer signing done. */
function problems(doc: MasterDoc, key: string, values: Record<string, Value>, extra: StepEvent[] = []): string[] {
  const results = evaluate(doc, [], K(key), values);
  const events = [ev('started', key, { min: 0 }), ev('value', key, { min: 1, payload: { values, results } }), ...extra];
  return doneProblems(doc, openSteps(doc, events, at(60)).steps.find((s) => s.id === key)!, at(60));
}

describe('roller compaction', () => {
  it('is a valid block, and a small master using it (with the stage yield after it) passes the master check', () => {
    expect(blockProblems(findBlock({ id: 'roller-compact', version: 1 })!)).toEqual([]);
    expect(checks(roller())).toEqual([]);
  });

  it('a round: set points and ribbon within the master\'s limits; the rounds stop when compaction is finished', () => {
    const doc = roller();
    const r = evaluate(doc, [], K('0.1.0.1'), round());
    for (const c of ['forceCheck', 'gapCheck', 'rollSpeedCheck', 'densityCheck', 'finesCheck', 'screenCheck']) expect(r[c], c).toMatchObject({ ok: true, check: { pass: true } });
    expect(r.meanThickness).toMatchObject({ ok: true, value: '2.5', unit: 'mm' });
    // No feed screw limit and no thickness limit set: those checks are left out.
    expect(r.feedSpeedCheck).toBeUndefined();
    expect(r.finished).toMatchObject({ ok: true, check: { pass: false } });
    expect(problems(doc, '0.1.0.1', round())).toEqual([]);
    expect(evaluate(doc, [], K('0.1.0.2'), round({ compactionDone: 'yes' })).finished).toMatchObject({ ok: true, check: { pass: true } });
  });

  it('the roll force in bar when the compactor shows the hydraulic pressure; a limit in another kind is a master-check refusal', () => {
    const bar = roller({ ...ROLLER, forceUnit: 'bar', forceLimit: { low: '40', high: '80', unit: 'bar' } });
    expect(checks(bar)).toEqual([]);
    expect(evaluate(bar, [], K('0.1.0.1'), round({ rollForce: q('60', 'bar') })).forceCheck).toMatchObject({ ok: true, check: { pass: true } });
    const mixed = roller({ ...ROLLER, forceUnit: 'bar' });
    expect(checks(mixed).join('\n')).toMatch(/every reading would be refused/);
  });

  it('out of limits (roll gap, fines, a damaged screen): the round needs a deviation note before it is signed', () => {
    const doc = roller();
    const bad = round({ rollGap: q('3.4', 'mm'), fines: q('35.0', '%'), screenOk: 'no' });
    expect(problems(doc, '0.1.0.1', bad)).toEqual(['Out of limits: Roll gap, Fines, Mill screen. Add a deviation note first.']);
    expect(problems(doc, '0.1.0.1', bad, [ev('note', '0.1.0.1', { min: 2, payload: { text: 'Gap drifted; roll pressure reset, screen replaced' } })])).toEqual([]);
  });
});

describe('device assembly', () => {
  it('is a valid block, a yield step (checked by a second person), and a small master using it passes the master check', () => {
    const b = findBlock({ id: 'device-assembly', version: 1 })!;
    expect(blockProblems(b)).toEqual([]);
    expect([b.gmp, b.checker]).toEqual(['yield', true]);
    expect(checks(device())).toEqual([]);
    expect(checks(device({ ...DEVICE }))).toEqual([]);
  });

  it('record → done: function test, AQL accepted, yield, accountability of the units fed and of the component', () => {
    const doc = device();
    const r = evaluate(doc, [], K('0.1.0.1'), assembled());
    expect(r.functionCount).toMatchObject({ ok: true, check: { pass: true } });
    expect(r.functionFailures).toMatchObject({ ok: true, check: { pass: true } });
    expect(r.functionCheck).toMatchObject({ ok: true, check: { pass: true } });
    expect(r.forceCheck).toMatchObject({ ok: true, check: { pass: true } });
    // 980 good devices, level II: letter J, sample 80; minor AQL 2.5 accepts 5, so 1 minor defect is accepted.
    expect(r.aql).toMatchObject({ ok: true, check: { pass: true, rounded: 'accept' } });
    expect((r.aql as { shown: string }).shown).toMatch(/^Sample 80 of 980/);
    expect(r.yield).toMatchObject({ ok: true, value: '98', check: { pass: true } });
    expect(r.accountability).toMatchObject({ ok: true, value: '100', check: { pass: true } });
    expect(r.net).toMatchObject({ ok: true, value: '1005', unit: 'units' });
    expect(r.componentAccountability).toMatchObject({ ok: true, value: '100', check: { pass: true } });
    expect(problems(doc, '0.1.0.1', assembled())).toEqual([]);
  });

  it('too few devices tested, a device that fails, a critical defect: out of limits, a deviation note first', () => {
    const doc = device();
    const bad = assembled({ tested: units('3'), failed: units('1'), works: 'no', critical: units('1'), unitsIn: units('998') });
    const r = evaluate(doc, [], K('0.1.0.1'), bad);
    expect(r.aql).toMatchObject({ ok: true, check: { pass: false, rounded: 'reject' } });
    expect(problems(doc, '0.1.0.1', bad)).toEqual(['Out of limits: Devices tested for function, Function test defects, Devices work and are complete, AQL inspection. Add a deviation note first.']);
    expect(problems(doc, '0.1.0.1', bad, [ev('note', '0.1.0.1', { min: 2, payload: { text: 'Cap remover misaligned; line stopped' } })])).toEqual([]);
  });

  it('no activation force limit set: the force is recorded without a check; a missing optional force checks nothing', () => {
    const { forceLimit: _, ...rest } = DEVICE;
    const doc = device(rest);
    expect(checks(doc)).toEqual([]);
    expect(evaluate(doc, [], K('0.1.0.1'), assembled()).forceCheck).toBeUndefined();
    const { force: __, ...noForce } = assembled();
    expect(evaluate(device(), [], K('0.1.0.1'), noForce).forceCheck).toBeUndefined();
  });

  it('the component used (issued − returned) is a material use of its lot once signed done, as MMS reads it', () => {
    const doc = device();
    const values = assembled();
    const results = evaluate(doc, [], K('0.1.0.1'), values);
    const events = [ev('started', '0.1.0.1'), ev('value', '0.1.0.1', { payload: { values, results } }), ev('done', '0.1.0.1', { payload: { stockUnit: 'nos' } })];
    const uses = materialUses(doc, openSteps(doc, events, at(60)).steps);
    expect(uses.map((u) => [u.lot, u.quantity])).toEqual([['AI-HSG-2601', { value: '1005', unit: 'nos' }]]);
    // Returned more than issued is refused, so nothing is used.
    expect(evaluate(doc, [], K('0.1.0.1'), assembled({ returned: units('1011') })).net).toMatchObject({ ok: false });
  });
});

describe('the batch record PDF', () => {
  it('shows the roller compaction round and the device assembly with their values and results; the component lot in the formula', () => {
    const doc = small([{ name: 'Dry granulation', role: 'Granulation operator', steps: [
      { key: 'compact', block: { id: 'roller-compact', version: 1 }, checker: false, everyMinutes: 30, flow: { kind: 'repeat-until', maxRounds: 20 }, settings: ROLLER }, yieldStep] },
    { name: 'Assembly', role: 'Assembly operator', steps: [{ key: 'assemble', block: { id: 'device-assembly', version: 1 }, checker: true, settings: DEVICE }] }]);
    const r1 = round({ compactionDone: 'yes' });
    const a = assembled();
    const events = [ev('started', '0.1.0.1'), ev('value', '0.1.0.1', { payload: { values: r1, results: evaluate(doc, [], K('0.1.0.1'), r1) } }), ev('done', '0.1.0.1'),
      ev('started', '1.1.0.1'), ev('value', '1.1.0.1', { payload: { values: a, results: evaluate(doc, [], K('1.1.0.1'), a) } }), ev('done', '1.1.0.1')];
    const pdf = JSON.stringify(batchRecordDoc({ batch: { id: 1, batchNo: 'TB260146', masterVersionId: 1, issuedBy: 1, issuedAt: at(0) }, doc,
      events: events.map((e) => ({ ...e, personName: 'RAMESH' })), batchEvents: [], now: at(1000), versionNo: 1, issuedByName: 'SUPER', signatures: [] }, 'QA'));
    for (const text of ['Roller compaction with periodic checks', 'Roll force', '8.0 kN/cm', 'Ribbon density', 'Mill screen', 'Device assembly', 'AQL inspection',
      'Sample 80 of 980', 'Accountability of the component', 'Lot AI-HSG-2601: 1005 units']) expect(pdf, text).toContain(text);
  });
});
