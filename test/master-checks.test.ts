import { describe, expect, it } from 'vitest';
import { BLOCKS } from '../shared/blocks/index.js';
import { blockProblems, type Block } from '../shared/blocks/format.js';
import { masterChecks } from '../shared/master/checks.js';
import { masterSchema, type MasterDoc } from '../shared/master/schema.js';
import { tablet } from './engine-fixture.js';

/** The fixture with one change; the problems that change makes. */
function after(change: (d: MasterDoc) => void) {
  const d = tablet();
  change(d);
  return masterChecks(d).map((p) => `${p.level} ${p.rule ?? '-'} ${p.path}: ${p.message}`);
}
const step = (d: MasterDoc, stage: string, key: string) => d.stages.find((s) => s.key === stage)!.steps.find((t) => t.key === key)!;

describe('blocks are data', () => {
  it.each(BLOCKS.map((b) => [b.id, b] as const))('the %s block is a valid description', (_id, b) => {
    expect(blockProblems(b)).toEqual([]);
  });

  it('a block naming an unknown template, field or stop check is refused', () => {
    const bad: Block = { ...BLOCKS[0]!, calcs: [{ name: 'x', label: 'X', template: 'T99', args: { a: '$nothing' } }], stop: 'y' };
    expect(blockProblems(bad)).toEqual(['calculation x: unknown template T99', 'calculation x: "$nothing" is not a field, setting or earlier calculation', 'stop: no calculation y']);
  });
});

describe('master checks', () => {
  it('the fixture tablet master passes every check', () => {
    expect(masterChecks(tablet())).toEqual([]);
  });

  it('a draft may be incomplete, but its shape is checked', () => {
    expect(masterSchema.safeParse({ ...tablet(), stages: [{ key: 'X Y' }] }).success).toBe(false);
  });

  it.each<[string, (d: MasterDoc) => void, string]>([
    ['weighing', (d) => { step(d, 'granulation', 'weigh-api').checker = false; }, 'error TB-08 stages[1].steps[0]: A weighing step needs a second-person check'],
    ['charge-in', (d) => { step(d, 'granulation', 'charge-api').checker = false; }, 'error TB-08 stages[1].steps[2]: A charge-in step needs a second-person check'],
    ['yield', (d) => { step(d, 'compression', 'yield').checker = false; }, 'error TB-08 stages[2].steps[1]: A yield step needs a second-person check'],
    ['critical', (d) => { step(d, 'granulation', 'granulate').critical = true; }, 'error TB-08 stages[1].steps[3]: A critical step needs a second-person check'],
  ])('TB-08 a %s step without a second-person check is an error', (_what, change, want) => {
    expect(after(change)).toEqual([want]);
  });

  it('TB-01 an intermediate without a hold time is an error', () => {
    expect(after((d) => { delete d.stages[1]!.produces!.holdHours; })).toEqual(['error TB-01 stages[1].produces: The intermediate dried granules has no hold time']);
  });

  it('a stage without a yield step is an error (a preparation needs none)', () => {
    expect(after((d) => { d.stages[2]!.steps.pop(); })).toEqual(['error - stages[2]: Stage Compression has no yield step']);
  });

  it('the formula must add up to the theoretical core weight (coating and solvents left out)', () => {
    expect(after((d) => { d.formula[4]!.mgPerTablet = '17.0'; })).toEqual(['error - formula: The core materials add up to 249.5 mg per tablet, not the theoretical core weight 250.0 mg']);
    expect(after((d) => { d.formula[3]!.mgPerTablet = '80.0'; d.formula[6]!.mgPerTablet = '9.0'; })).toEqual([]);
  });

  it('TB-13 adjustment settings the templates library refuses are errors (same basis, overage, salt factor)', () => {
    expect(after((d) => {
      d.formula[0]!.adjust = { salt: { from: { name: 'base', mw: '383.4' }, to: { name: 'sodium sesquihydrate', mw: '432.4', hydrateOrSolvate: true } }, potency: { basis: 'anhydrous' } };
    })).toEqual([expect.stringMatching(/^error TB-13 formula\[0\]\.adjust: Same-basis rule \(C5\): the standard quantity already uses the hydrate/)]);
    expect(after((d) => { d.formula[0]!.adjust = { potency: { basis: 'as is' } }; }))
      .toEqual(['error TB-13 formula[0].adjust: Say whether the standard quantity is the anhydrous weight or the hydrate/solvate weight (same-basis rule C5)']);
    expect(after((d) => { d.formula[0]!.adjust = { overage: { percent: '5.0', maxPercent: '3.0' } }; }))
      .toEqual(['error - formula[0].adjust: The overage 5.0 % is above the 3.0 % the master allows']);
    expect(after((d) => { d.formula[0]!.adjust = { salt: { from: { name: 'base', mw: '383.4' }, to: { name: 'hemifumarate', mw: '0' } } }; }))
      .toEqual(['error - formula[0].adjust: Molecular weights must be more than zero']);
    expect(after((d) => { d.formula[1]!.adjust = { compensates: ['nothing'] }; })).toEqual(['error - formula[1].adjust.compensates: No other formula line nothing to compensate']);
  });

  it('a limit the library refuses is an error', () => {
    expect(after((d) => { step(d, 'granulation', 'granulate').settings.endPointLimit = { low: '12.0', high: '8.0', unit: 'kW' }; }))
      .toEqual(['error - stages[1].steps[3].settings.endPointLimit: The lower limit 12.0 is above the upper limit 8.0']);
  });

  it('TB-15 compression checks more than 30 minutes apart, or with no interval, are an error', () => {
    expect(after((d) => { step(d, 'compression', 'compress').everyMinutes = 45; }))
      .toEqual(['error TB-15 stages[2].steps[0].everyMinutes: Periodic checks every 45 min: they must be at least every 30 min']);
    expect(after((d) => { delete step(d, 'compression', 'compress').everyMinutes; }))
      .toEqual(['error TB-15 stages[2].steps[0].everyMinutes: Compress with periodic checks needs the interval of its periodic checks']);
    expect(after((d) => { step(d, 'compression', 'compress').everyMinutes = 30; })).toEqual([]);
  });

  it('a repeat-until step without the most rounds, or without a stop check, is an error', () => {
    expect(after((d) => { step(d, 'granulation', 'dry').flow = { kind: 'repeat-until' }; }))
      .toEqual(['error - stages[1].steps[4].flow: A repeat-until step needs the most rounds allowed']);
    expect(after((d) => { step(d, 'granulation', 'dry').flow = { kind: 'repeat-until', maxRounds: 3, stop: 'nothing' }; }))
      .toEqual(['error - stages[1].steps[4].flow: A repeat-until step needs a stop check (a calculation of its block)']);
  });

  it('a reference to a field that does not exist, comes later, or is inside another sub-batch stage is an error', () => {
    const coat = (ref: string) => after((d) => { step(d, 'coating', 'coat').settings.coreWeight = { ref }; });
    expect(coat('compression/compress/nothing')).toEqual(['error - stages[3].steps[0].settings.coreWeight: compression/compress/nothing: step compress has no field or calculation nothing']);
    expect(coat('coating/yield/yield')).toEqual(['error - stages[3].steps[0].settings.coreWeight: coating/yield/yield comes later than this step']);
    expect(coat('nowhere/x/y')).toEqual(['error - stages[3].steps[0].settings.coreWeight: nowhere/x/y: no such stage and step']);
    expect(after((d) => { step(d, 'compression', 'yield').settings.theoretical = { ref: 'coating/coat/gain' }; }))
      .toEqual(['error - stages[2].steps[1].settings.theoretical: coating/coat/gain comes later than this step']);
  });

  it('unknown blocks, missing settings and stages used before they exist are errors; an unused preparation is a warning', () => {
    expect(after((d) => { step(d, 'granulation', 'mill').block.version = 9; })).toEqual(['error - stages[1].steps[5].block: No block sieve version 9']);
    expect(after((d) => { delete step(d, 'granulation', 'dry').settings.lodLimit; })).toEqual(['error - stages[1].steps[4].settings.lodLimit: LOD limit is not set']);
    expect(after((d) => { d.stages[1]!.uses = ['coating']; })).toEqual(['warning - stages[0]: No stage uses the preparation Binder solution', 'error - stages[1].uses: coating is not an earlier stage']);
  });
});
