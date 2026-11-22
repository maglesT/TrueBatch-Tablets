// Template round 22 Nov 2026, part 6: the new process blocks (milling, hot-melt extrusion, curing, sugar coating, drug
// layering), each worked out by the engine with the templates it names.
import { describe, expect, it } from 'vitest';
import { evaluate } from '../shared/engine/index.js';
import { findBlock } from '../shared/blocks/index.js';
import { blockProblems } from '../shared/blocks/format.js';
import { masterChecks } from '../shared/master/checks.js';
import type { MasterDoc } from '../shared/master/schema.js';
import { ev, small, unplaced } from './engine-fixture.js';

const q = (value: string, unit: string) => ({ value, unit });
const pct = (low: string, high: string) => ({ low, high, unit: '%' });
const doc = (id: string, settings: object, options: object = {}): MasterDoc => small([{ role: 'Operator', steps: [{ key: id, block: { id, version: 1 }, checker: id === 'mill', settings, ...options },
  { key: 'yield', block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '0.100 kg', yieldLimit: pct('97.0', '100.5') } }] }]);
const KEY = (round = 1) => ({ stage: 0, sub: 1, step: 0, round });
const rounds = { everyMinutes: 15, flow: { kind: 'repeat-until', maxRounds: 40 } };
const errors = (d: MasterDoc) => unplaced(masterChecks(d)).filter((p) => p.level === 'error').map((p) => p.message);

it('every new block is a valid description with a machine picked by type', () => {
  for (const id of ['mill', 'hot-melt-extrusion', 'curing', 'sugar-coat', 'drug-layering']) {
    const b = findBlock({ id, version: 1 })!;
    expect(blockProblems(b)).toEqual([]);
    expect(b.fields.find((f) => f.kind === 'machine')?.types?.length).toBeGreaterThan(0);
  }
});

describe('milling', () => {
  const d = doc('mill', { screen: '1.0 mm', accountabilityLimit: pct('98.0', '100.5') });
  it('accounts for the weight fed: 25.0 kg fed, 24.6 milled, 0.3 rejects = 99.6 %', () => {
    const r = evaluate(d, [], KEY(), { feedWeight: q('25.0', 'kg'), milledWeight: q('24.6', 'kg'), rejects: q('0.3', 'kg'), screenOk: 'yes', intactBefore: 'yes', intactAfter: 'yes' } as never);
    expect(r.accountability).toMatchObject({ ok: true, check: { pass: true } });
    expect(r.integrity).toMatchObject({ ok: true });
  });
  it('a screen that is not intact after use, or a loss, is out of limits', () => {
    const r = evaluate(d, [], KEY(), { feedWeight: q('25.0', 'kg'), milledWeight: q('23.0', 'kg'), screenOk: 'yes', intactBefore: 'yes', intactAfter: 'no' } as never);
    expect((r.accountability as { check: { pass: boolean } }).check.pass).toBe(false);
    expect((r.integrity as { check: { pass: boolean } }).check.pass).toBe(false);
  });
});

describe('hot-melt extrusion', () => {
  const settings = { motorPower: '11 kW', maxScrewSpeed: '400 rpm', efficiency: '0.9', smeLimit: { low: '0.1', high: '0.5', unit: 'kWh/kg' }, barrelLimit: { low: '120', high: '160', unit: '°C' }, dieLimit: { low: '110', high: '150', unit: '°C' } };
  const d = doc('hot-melt-extrusion', settings, rounds);
  it('is accepted by the master check', () => expect(errors(d)).toEqual([]));
  it('works out the specific mechanical energy: 11 kW x 50 % x 200/400 x 0.9 / 5 kg/h = 0.495 kWh/kg', () => {
    const r = evaluate(d, [], KEY(), { barrelTemp: q('140', '°C'), dieTemp: q('130', '°C'), screwSpeed: q('200', 'rpm'), torque: q('50', '%'), feedRate: q('5', 'kg/h'), extrudateOk: 'yes', extrusionDone: 'no' } as never);
    expect(r.sme).toMatchObject({ ok: true, unit: 'kWh/kg', check: { pass: true } });
    expect(Number((r.sme as { value: string }).value)).toBeCloseTo(0.495, 3);
    expect(r.barrelCheck).toMatchObject({ check: { pass: true } });
  });
  it('a die temperature out of limits fails its check; a unit of another kind for the motor power is refused', () => {
    const r = evaluate(d, [], KEY(), { barrelTemp: q('140', '°C'), dieTemp: q('170', '°C'), screwSpeed: q('200', 'rpm'), torque: q('50', '%'), feedRate: q('5', 'kg/h') } as never);
    expect((r.dieCheck as { check: { pass: boolean } }).check.pass).toBe(false);
    expect(errors(doc('hot-melt-extrusion', { ...settings, motorPower: '11 kg' }, rounds)).join()).toContain('Motor power');
  });
});

describe('curing: time counts only while the oven is inside its limits', () => {
  const d = doc('curing', { tempLimit: { low: '40', high: '50', unit: '°C' }, timeLimit: { low: '2', unit: 'h' } }, { everyMinutes: 60, flow: { kind: 'repeat-until', maxRounds: 10 } });
  const read = (round: number, temp: string, at: string) => ev('value', `0.1.0.${round}`, { min: round, payload: { values: { ovenTemp: q(temp, '°C'), ovenTempAt: at } } });
  const t = (h: number) => `2026-11-20T${String(8 + h).padStart(2, '0')}:00:00Z`;
  it('is accepted by the master check, and waits for two readings', () => {
    expect(errors(d)).toEqual([]);
    expect(evaluate(d, [], KEY(1), { ovenTemp: q('45', '°C'), ovenTempAt: t(0) } as never).cured).toBeUndefined();
  });
  it('three readings an hour apart inside the limits give 2 h: the time required is reached', () => {
    const events = [read(1, '45', t(0)), read(2, '46', t(1))];
    const r = evaluate(d, events, KEY(3), { ovenTemp: q('44', '°C'), ovenTempAt: t(2) } as never).cured;
    expect(r, JSON.stringify(r)).toMatchObject({ ok: true, unit: 'h', value: '2', check: { pass: true } });
  });
  it('a reading out of limits stops the count next to it: 0 h counted, not reached', () => {
    const events = [read(1, '45', t(0)), read(2, '60', t(1))];
    const r = evaluate(d, events, KEY(3), { ovenTemp: q('45', '°C'), ovenTempAt: t(2) } as never).cured;
    expect(r).toMatchObject({ ok: true, value: '0', check: { pass: false } });
  });
});

describe('sugar coating in rounds', () => {
  const d = doc('sugar-coat', { coreWeight: { header: 'coreWeight' }, base: 'start', gainLimit: pct('30.0', '60.0') }, rounds);
  it('stops when the weight gain is within its limits: 100 mg to 140 mg is 40 %', () => {
    expect(errors(d)).toEqual([]);
    const r = evaluate(d, [], KEY(), { syrup: q('0.5', 'kg'), dryMinutes: q('10', 'min'), meanWeight: q('140.0', 'mg') } as never);
    expect(r.gain).toMatchObject({ ok: true, check: { pass: true } });
    expect((evaluate(d, [], KEY(), { syrup: q('0.5', 'kg'), dryMinutes: q('10', 'min'), meanWeight: q('120.0', 'mg') } as never).gain as { check: { pass: boolean } }).check.pass).toBe(false);
  });
});

describe('drug layering: the end point is the drug deposited', () => {
  const d = doc('drug-layering', { drugTarget: { formula: 'x' }, drugInSuspension: '10 %', depositLimit: pct('98.0', '102.0') }, rounds);
  it('150 kg of suspension at 10 % deposits 15 kg; the formula needs 10 kg of drug for 100 mg x 1000 tablets: 0.1 kg', () => {
    expect(errors(d)).toEqual([]);
    // The formula line x is 100 mg x 1000 tablets = 0.1 kg of drug to deposit; 1 kg of suspension at 10 % is 0.1 kg.
    const r = evaluate(d, [], KEY(), { sprayed: q('1.0', 'kg'), inletTemp: q('50', '°C'), bedTemp: q('40', '°C'), sprayRate: q('20', 'g/min') } as never);
    expect(r.deposited).toMatchObject({ ok: true, value: '0.1', unit: 'kg' });
    expect(r.deposit).toMatchObject({ ok: true, check: { pass: true } });
    expect((evaluate(d, [], KEY(), { sprayed: q('0.5', 'kg'), inletTemp: q('50', '°C') } as never).deposit as { check: { pass: boolean } }).check.pass).toBe(false);
  });
});
