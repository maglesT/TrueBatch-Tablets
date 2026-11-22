// Template round 22 Nov 2026, part 1: library templates reachable from a master's formula line (T18 second API, T11
// average molecular weight of a lot, T20 quantity from part lots, T19 portions, T10 fillers in a ratio).
import { describe, expect, it } from 'vitest';
import { askedFields, lineQuantity } from '../shared/engine/index.js';
import { findBlock } from '../shared/blocks/index.js';
import { masterChecks } from '../shared/master/checks.js';
import { masterSchema, type FormulaLine, type MasterDoc } from '../shared/master/schema.js';
import { tablet, unplaced } from './engine-fixture.js';

const HERE = { stage: 0, sub: 1, step: 0, round: 1 };
const q = (value: string, unit: string) => ({ value, unit });
const withLine = (key: string, patch: Partial<FormulaLine>): MasterDoc => { const d = tablet(); return { ...d, formula: d.formula.map((l) => (l.key === key ? { ...l, ...patch } : l)) }; };
const qty = (d: MasterDoc, key: string, values: Record<string, never> | Record<string, { value: string; unit: string } | string> = {}, portion?: string) =>
  lineQuantity(d, [], HERE, d.formula.find((l) => l.key === key)!, true, values as never, [], portion);

describe('T11 average molecular weight from the lot', () => {
  const salt = { from: { name: 'base', mw: '100' }, to: { name: 'salt', mw: '150', mwFromLot: true } };
  it('uses the lot certificate value', () => {
    const d = withLine('api', { adjust: { salt } });
    const r = qty(d, 'api', { lotMw: q('200', 'g/mol') });
    expect(r).toMatchObject({ ok: true, value: '20' }); // 10 kg base x 200/100
  });
  it('refuses without the lot value, and asks for it on the step only for that line', () => {
    const d = withLine('api', { adjust: { salt } });
    const r = qty(d, 'api');
    expect(r.ok).toBe(false);
    const block = findBlock({ id: 'weigh', version: 1 })!;
    const st = { settings: { target: { formula: 'api', adjusted: true } } };
    expect(askedFields(d, block, st).map((f) => f.name)).toContain('lotMw');
    expect(askedFields(tablet(), block, { settings: { target: { formula: 'api', adjusted: true } } }).map((f) => f.name)).not.toContain('lotMw');
    expect(askedFields(tablet(), block).map((f) => f.name)).not.toContain('lotMw');
  });
});

describe('T18 second API in one material', () => {
  const doc = () => {
    const d = withLine('api', { adjust: { content: { formulaQuantityIs: 'dry', second: { line: 'lactose', low: '80.0', high: '90.0' } } } });
    return d;
  };
  it('checks what the second API delivers', () => {
    const ok = qty(doc(), 'api', { content: q('100', '%'), content2: q('100', '%') });
    expect(ok, JSON.stringify(ok)).toMatchObject({ ok: true });
    expect((ok as { shown: string }).shown).toContain('Lactose monohydrate');
    const bad = qty(doc(), 'api', { content: q('100', '%'), content2: q('50', '%') });
    expect(bad.ok).toBe(false);
  });
  it('the master refuses a second API without limits', () => {
    const d = withLine('api', { adjust: { content: { formulaQuantityIs: 'dry', second: { line: 'lactose', low: '90.0', high: '80.0' } } } });
    expect(unplaced(masterChecks(d)).some((p) => p.level === 'error' && /second API/.test(p.message))).toBe(true);
  });
});

describe('T20 a quantity from part lots', () => {
  const d = withLine('api', { adjust: { content: { formulaQuantityIs: 'dry', partLots: true } } });
  it('takes the rest from this lot', () => {
    // 10 kg pure needed; 4 kg of an earlier lot at 50 % gives 2 kg; the rest 8 kg pure from this lot at 80 % = 10 kg
    const r = qty(d, 'api', { content: q('80', '%'), earlierLot: 'L1', earlierWeighed: q('4', 'kg'), earlierContent: q('50', '%') });
    expect(r).toMatchObject({ ok: true, value: '10' });
  });
  it('is the plain content adjustment when no earlier lot is recorded', () => {
    expect(qty(d, 'api', { content: q('80', '%') })).toMatchObject({ ok: true, value: '12.5' });
    expect(askedFields(d, findBlock({ id: 'weigh', version: 1 })!, { settings: { target: { formula: 'api', adjusted: true } } }).map((f) => f.name)).toContain('earlierWeighed');
  });
});

describe('T19 portions', () => {
  const d = withLine('mcc', { portions: [{ name: 'Intragranular', percent: '30' }, { name: 'Extragranular' }] });
  it('works out each portion', () => {
    expect(qty(d, 'mcc', {}, 'Intragranular')).toMatchObject({ ok: true, value: '0.525' });
  });
  it('the last portion is what is left', () => {
    expect(qty(d, 'mcc', {}, 'Extragranular')).toMatchObject({ ok: true, value: '1.225' });
  });
  it('the master refuses portions that add up to 100 % or an unknown portion on a step', () => {
    const bad = withLine('mcc', { portions: [{ name: 'A', percent: '60' }, { name: 'B', percent: '40' }, { name: 'C' }] });
    expect(masterChecks(bad).some((p) => p.level === 'error' && /add up to 100/.test(p.message))).toBe(true);
    const doc = structuredClone(d);
    doc.stages[1]!.steps[0]!.settings = { target: { formula: 'mcc' }, tolerance: '0.5', portion: 'Nope' };
    expect(masterChecks(doc).some((p) => p.level === 'error' && /not a portion/.test(p.message))).toBe(true);
    doc.stages[1]!.steps[0]!.settings = { target: { formula: 'mcc' }, tolerance: '0.5', portion: 'Extragranular' };
    expect(masterChecks(doc).some((p) => /not a portion/.test(p.message))).toBe(false);
  });
});

describe('T10 fillers in a ratio', () => {
  it('each filler takes its share of the excess, and every filler needs a share', () => {
    const d = tablet();
    const api = { ...d.formula[0]!, adjust: { content: { formulaQuantityIs: 'dry' as const } } };
    const lactose = { ...d.formula[1]!, adjust: { compensates: ['api'], ratio: '60' } };
    const mcc = { ...d.formula[4]!, adjust: { compensates: ['api'], ratio: '40' } };
    const doc: MasterDoc = masterSchema.parse({ ...d, formula: d.formula.map((l) => (l.key === 'api' ? api : l.key === 'lactose' ? lactose : l.key === 'mcc' ? mcc : l)) });
    expect(masterChecks(doc).some((p) => /share/.test(p.message) && p.level === 'error')).toBe(false);
    // The adjusted API is not recorded in a step here: the filler waits for it.
    expect(lineQuantity(doc, [], HERE, lactose as FormulaLine, true, {})).toMatchObject({ ok: false });
    const lone = masterSchema.parse({ ...d, formula: d.formula.map((l) => (l.key === 'api' ? api : l.key === 'lactose' ? lactose : l.key === 'mcc' ? { ...l, adjust: { compensates: ['api'] } } : l)) });
    expect(masterChecks(lone).some((p) => /which has no share/.test(p.message))).toBe(true);
  });
});
