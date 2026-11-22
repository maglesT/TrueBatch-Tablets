// Template round 22 Nov 2026, part 5: the cheap calculation checks of the formulation test that had no code.
import { describe, expect, it } from 'vitest';
import { lineQuantity } from '../shared/engine/index.js';
import { masterChecks } from '../shared/master/checks.js';
import { masterSchema, type MasterDoc } from '../shared/master/schema.js';
import { tablet, unplaced } from './engine-fixture.js';

const checks = (d: MasterDoc) => unplaced(masterChecks(d));
const text = (d: MasterDoc) => checks(d).map((p) => `${p.level} ${p.path}: ${p.message}`).join('\n');
const HERE = { stage: 0, sub: 1, step: 0, round: 1 };

describe('two APIs, one tablet weight (F0121)', () => {
  it('asks which API controls the weight', () => {
    const d = tablet();
    expect(checks(d).some((p) => p.question?.key === 'controlling-api')).toBe(false);
    d.formula[1] = { ...d.formula[1]!, role: 'api', adjust: undefined };
    const q = checks(d).find((p) => p.question?.key === 'controlling-api')!;
    expect(q.message).toContain('Examplol and Lactose monohydrate share one tablet weight');
    expect(q.question!.options).toEqual(['Examplol', 'Lactose monohydrate']);
  });
});

describe('a label claim from several salts (F0487)', () => {
  it('asks whether the claim is the sum of the salts', () => {
    const d = tablet();
    const k = (key: string, claim: string, charge: number) => ({ key, materialItemId: key, code: key.toUpperCase(), name: key, mgPerTablet: '1.0', role: 'api' as const, place: 'intragranular' as const, labelClaim: claim,
      adjust: { salt: { from: { name: key, mw: '74.55', charge }, to: { name: 'K', mw: '39.1' } } } });
    d.formula = [d.formula[0]!, k('kcl', '8 mEq', 1), k('khco3', '10 mEq', 1)];
    const q = checks(d).find((p) => p.question?.key === 'claim-from-salts');
    expect(q?.message).toContain('give 18 mEq together');
  });
});

describe('a ratio of two materials (F0494)', () => {
  const withRatio = (low: string, high: string): MasterDoc => { const d = tablet(); d.header.ratios = [{ first: 'lactose', second: 'mcc', low, high }]; return d; };
  it('lactose 120 mg to MCC 17.5 mg is 6.86 : 1: inside 5 to 8, refused outside 1 to 3', () => {
    expect(text(withRatio('5.0', '8.0'))).not.toContain('ratio of');
    expect(text(withRatio('1.0', '3.0'))).toMatch(/error header\.ratios\[0\]: The ratio of Lactose monohydrate to Microcrystalline cellulose is 6\.86 : 1, outside 1\.0 to 3\.0/);
    expect(text(withRatio('3.0', '1.0'))).toContain('the lowest must be below the highest');
  });
});

describe('a formula range for a compensating filler (F0036)', () => {
  it('the compensation must stay within ± 5 %', () => {
    const d = masterSchema.parse(tablet());
    d.formula[0]!.adjust = { content: { formulaQuantityIs: 'dry' as const } };
    d.formula[1]!.adjust = { compensates: ['api'], rangePercent: '5.0' };
    // The API weighed at 80 % content: 10 kg pure needs 12.5 kg, 2.5 kg more; lactose 12 kg would become 9.5 kg (- 20.8 %).
    const events = [{ id: 1, stage: 1, sub: 1, step: 0, round: 1, kind: 'value' as const, payload: { values: {}, results: { target: { ok: true as const, value: '12.5', unit: 'kg', shown: '' } } }, person: 1, at: new Date() }];
    const r = lineQuantity(d, events, HERE, d.formula[1]!, true, {});
    expect(r).toMatchObject({ ok: false, message: expect.stringContaining('outside the formula range of ± 5.0 %') });
  });
});

describe('an addition to the blend after compression began (F0181)', () => {
  it('a weighing step after the compress step in the same stage is asked about', () => {
    const d = tablet();
    expect(text(d)).not.toContain('after compression');
    d.stages[2]!.steps.push({ key: 'extra', block: { id: 'weigh', version: 1 }, checker: true, critical: false, waitForCheck: false, flow: { kind: 'none' }, settings: { target: { formula: 'mgst' }, tolerance: '0.5' } });
    const q = checks(d).find((p) => p.question?.key === 'late-addition/compression/extra')!;
    expect(q.message).toMatch(/adds material after compression has started in Compression/);
    expect(q.level).toBe('warning');
  });
});

