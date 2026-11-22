// Template round 22 Nov 2026, part 3: tensile strength (T23) in compression, solid fraction of the ribbon, and the inlet
// air's absolute humidity (T25) in drying and coating.
import { describe, expect, it } from 'vitest';
import { evaluate } from '../shared/engine/index.js';
import { masterChecks } from '../shared/master/checks.js';
import type { MasterDoc } from '../shared/master/schema.js';
import { small, unplaced } from './engine-fixture.js';

const q = (value: string, unit: string) => ({ value, unit });
const periodic = ['compress', 'roller-compact', 'spray-coat'];
const step = (id: string, settings: object) => ({ key: id, block: { id, version: 1 }, checker: false, settings, ...(periodic.includes(id) ? { everyMinutes: 15, flow: { kind: 'repeat-until', maxRounds: 5 } } : {}) });
const doc = (id: string, settings: object): MasterDoc => small([{ role: 'Operator', steps: [step(id, settings), { key: 'yield', block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '0.100 kg', yieldLimit: { low: '97.0', high: '100.5', unit: '%' } } }] }]);
const run = (d: MasterDoc, values: Record<string, unknown>) => evaluate(d, [], { stage: 0, sub: 1, step: 0, round: 1 }, values as never);
const errors = (d: MasterDoc) => unplaced(masterChecks(d)).filter((p) => p.level === 'error').map((p) => `${p.path}: ${p.message}`);

const compress = { meanLimit: { low: '95.0', high: '105.0', unit: 'mg' }, weightBand: '5.0', weightOuterBand: '10.0', hardnessLimit: { low: '40', high: '80', unit: 'N' }, thicknessLimit: { low: '2.8', high: '3.2', unit: 'mm' } };
const readings = { hardness: [60, 62, 58, 61, 59].map((v) => q(String(v), 'N')), thickness: [3, 3, 3, 3, 3].map((v) => q(String(v), 'mm')) };

describe('tensile strength in compression (T23)', () => {
  const tensile = { ...compress, tensileShape: 'flat round', tabletDiameter: '8.0 mm', tensileLimit: { low: '0.5', high: '3.0', unit: 'MPa' } };
  it('is worked out from the mean hardness and thickness: 2 x 60 N / (pi x 8 mm x 3 mm) = 1.59 MPa', () => {
    const d = doc('compress', tensile);
    expect(errors(d)).toEqual([]);
    const r = run(d, readings).tensile;
    expect(r).toMatchObject({ ok: true, unit: 'MPa' });
    expect(Number((r as { value: string }).value)).toBeCloseTo(1.5915, 3);
    expect((r as { check: { pass: boolean } }).check.pass).toBe(true);
  });
  it('a tablet outside the limit is out of limits; without the settings nothing is worked out', () => {
    const r = run(doc('compress', { ...tensile, tensileLimit: { low: '2.0', high: '3.0', unit: 'MPa' } }), readings).tensile;
    expect((r as { check: { pass: boolean } }).check.pass).toBe(false);
    expect(run(doc('compress', compress), readings).tensile).toBeUndefined();
  });
  it('a convex tablet needs its wall thickness, and a limit in another kind of unit is refused', () => {
    expect((run(doc('compress', { ...tensile, tensileShape: 'convex round' }), readings).tensile as { message: string }).message).toContain('wall');
    expect(errors(doc('compress', { ...tensile, tensileLimit: { low: '1', high: '2', unit: 'mm' } })).join()).toContain('Tensile strength limits');
    expect(errors(doc('compress', { ...tensile, tabletDiameter: '8.0 N' })).join()).toContain('force');
  });
});

describe('solid fraction of the ribbon (T23)', () => {
  const roller = { forceUnit: 'kN/cm', forceLimit: { low: '6', high: '10', unit: 'kN/cm' }, gapLimit: { low: '2.0', high: '3.0', unit: 'mm' }, screen: '1.0 mm', finesLimit: { high: '30', unit: '%' },
    trueDensity: '1.5 g/cm³', solidFractionLimit: { low: '0.60', high: '0.90', unit: '' } };
  it('ribbon density over the true density: 1.05 / 1.5 = 0.70', () => {
    const d = doc('roller-compact', roller);
    expect(errors(d)).toEqual([]);
    expect(run(d, { ribbonDensity: q('1.05', 'g/cm³') }).solidFraction).toMatchObject({ ok: true, value: '0.7' });
    expect((run(d, { ribbonDensity: q('1.4', 'g/cm³') }).solidFraction as { check: { pass: boolean } }).check.pass).toBe(false);
  });
});

describe('inlet air humidity (T25)', () => {
  it('drying: 60 %RH at 25 C is about 11.9 g per kg of dry air; a limit in g/m³ with the per-kg choice is out', () => {
    const d = doc('dry', { lodLimit: { high: '2.0', unit: '%' }, humidityLimit: { low: '5', high: '15', unit: 'g/kg' } });
    expect(errors(d)).toEqual([]);
    const r = run(d, { inletTemp: q('25', '°C'), inletRh: q('60', '%RH'), lod: q('1.0', '%') }).humidity;
    expect(r).toMatchObject({ ok: true });
    expect(Number((r as { value: string }).value)).toBeGreaterThan(11);
    expect(Number((r as { value: string }).value)).toBeLessThan(13);
    expect((r as { check: { pass: boolean } }).check.pass).toBe(true);
    // Not recorded: nothing worked out, the step still signs.
    expect(run(d, { inletTemp: q('25', '°C'), lod: q('1.0', '%') }).humidity).toBeUndefined();
  });
  it('coating, per m³ of air', () => {
    const d = doc('spray-coat', { coreWeight: { header: 'coreWeight' }, base: 'start', gainLimit: { low: '2.8', high: '3.2', unit: '%' }, humidityPer: 'm³ air', humidityLimit: { low: '3', high: '12', unit: 'g/m³' } });
    expect(errors(d)).toEqual([]);
    const r = run(d, { inletTemp: q('40', '°C'), inletRh: q('20', '%RH'), meanWeight: q('257.5', 'mg') }).humidity;
    expect(r).toMatchObject({ ok: true, unit: 'g/m³' });
  });
});
