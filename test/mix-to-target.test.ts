// Template round 22 Nov 2026, part 2: the mix-to-target block (T26) and its master refusals.
import { describe, expect, it } from 'vitest';
import { evaluate } from '../shared/engine/index.js';
import { masterChecks } from '../shared/master/checks.js';
import type { MasterDoc } from '../shared/master/schema.js';
import { small, unplaced } from './engine-fixture.js';

const minutes = { low: '10', high: '12', unit: 'min' };
const base = { property: 'fines below 125 µm', unit: '%', target: '20.0 %', tolerance: '2.0', mixTimeLimit: minutes };
const using = (settings: object): MasterDoc => small([{ role: 'Operator', steps: [{ key: 'mix', block: { id: 'mix-to-target', version: 1 }, checker: true, settings },
  { key: 'yield', block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '0.100 kg', yieldLimit: { low: '97.0', high: '100.5', unit: '%' } } }] }]);
const errors = (settings: object) => unplaced(masterChecks(using(settings))).filter((p) => p.level === 'error').map((p) => p.message);
const q = (value: string, unit: string) => ({ value, unit });
const run = (settings: object, values: Record<string, unknown>) => evaluate(using(settings), [], { stage: 0, sub: 1, step: 0, round: 1 }, values as never);

describe('mix to a target', () => {
  it('a plain setting passes the master check', () => expect(errors(base)).toEqual([]));

  it('works out the donor lot to add: 100 kg at 28 % fines to 20 % with a donor at 5 % needs 53.3 kg', () => {
    const r = run(base, { mainMass: q('100', 'kg'), mainValue: q('28', '%'), donorValue: q('5', '%') });
    expect(r.donor).toMatchObject({ ok: true, unit: 'kg' });
    expect(Number((r.donor as { value: string }).value)).toBeCloseTo(53.333, 2);
  });

  it('an alcohol strength is mixed on the % w/w scale and the donor is shown as a volume', () => {
    const r = run({ ...base, property: 'alcohol strength', target: '70 %', scale: 'ethanol % v/v' }, { mainMass: q('100', 'kg'), mainValue: q('90', '%'), donorValue: q('40', '%') });
    expect(r.donor).toMatchObject({ ok: true });
    expect((r.donor as { shown: string }).shown).toContain('L at 20');
  });

  it('refuses a property that does not mix by mass (a particle size D50)', () => {
    expect(errors({ ...base, property: 'D50', unit: 'µm', target: '120 µm' }).join()).toContain('does not mix by mass');
  });

  it('refuses a plain number such as pH, and an alcohol scale not in %', () => {
    expect(errors({ ...base, property: 'pH', unit: '', target: '6.5' }).join()).toContain('does not mix by mass');
    expect(errors({ ...base, scale: 'ethanol % v/v', unit: 'mg/mL', target: '700 mg/mL' }).join()).toContain('% v/v');
  });

  it('refuses values on different bases, or a basis set for one value only', () => {
    expect(errors({ ...base, basisMain: 'as is', basisDonor: 'anhydrous', basisTarget: 'as is' }).join()).toContain('not on the same basis');
    expect(errors({ ...base, basisMain: 'as is' }).join()).toContain('not on the same basis');
    expect(errors({ ...base, basisMain: 'as is', basisDonor: 'as is', basisTarget: 'as is' })).toEqual([]);
  });

  it('a second marker is held to its limits for the mix, and is set in full or not at all', () => {
    const second = { ...base, secondMarker: 'Isomer B', secondUnit: '%', secondLimit: { low: '0', high: '10', unit: '%' } };
    expect(errors(second)).toEqual([]);
    const ok = run(second, { mainMass: q('100', 'kg'), mainValue: q('28', '%'), donorValue: q('5', '%'), mainSecond: q('8', '%'), donorSecond: q('2', '%') });
    expect(ok.donor).toMatchObject({ ok: true });
    const out = run(second, { mainMass: q('100', 'kg'), mainValue: q('28', '%'), donorValue: q('5', '%'), mainSecond: q('30', '%'), donorSecond: q('20', '%') });
    expect(out.donor).toMatchObject({ ok: false });
    expect(errors({ ...base, secondMarker: 'Isomer B' }).join()).toContain('in full');
  });

  it('refuses a donor that cannot reach the target', () => {
    const r = run(base, { mainMass: q('100', 'kg'), mainValue: q('28', '%'), donorValue: q('25', '%') });
    expect(r.donor).toMatchObject({ ok: false });
  });
});
