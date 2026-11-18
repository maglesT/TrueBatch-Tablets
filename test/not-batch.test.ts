import { describe, expect, it } from 'vitest';
import { blockProblems } from '../shared/blocks/format.js';
import { BLOCKS, findBlock } from '../shared/blocks/index.js';
import { masterChecks } from '../shared/master/checks.js';
import type { MasterDoc, SettingValue, Step } from '../shared/master/schema.js';
import { quantityChoices } from '../web/src/designer/model.js';
import { tablet, unplaced } from './engine-fixture.js';
import { packing } from './packing-fixture.js';

// Round 31: a quantity setting that is never a batch quantity (notBatch) takes no formula line (its batch quantity) and
// no batch value of the header: a core weight of 25.000 kg read a weight gain of about -100 %, and a largest change of
// some kilograms let every round of drying to constant weight pass. And a formula line (a mass) is refused for a
// setting of another known kind.

const errors = (d: MasterDoc) => unplaced(masterChecks(d)).filter((p) => p.level === 'error').map((p) => `${p.path}: ${p.message}`);
const pct = (low: string, high: string) => ({ low, high, unit: '%' });
/** The tablet fixture with a step added at the end of coating; returns the doc and the step's settings path. */
function withStep(block: string, settings: Step['settings'], flow: Step['flow'] = { kind: 'none' }): [MasterDoc, string] {
  const d = tablet();
  const si = d.stages.findIndex((s) => s.key === 'coating');
  const steps = d.stages[si]!.steps;
  steps.push({ key: 'added', block: { id: block, version: 1 }, checker: true, waitForCheck: false, critical: false, flow, settings });
  return [d, `stages[${si}].steps[${steps.length - 1}].settings`];
}
/** The tablet fixture with the coat step's core weight set to `v`. */
function withCoreWeight(v: SettingValue): [MasterDoc, string] {
  const d = tablet();
  const si = d.stages.findIndex((s) => s.key === 'coating');
  d.stages[si]!.steps[0]!.settings.coreWeight = v;
  return [d, `stages[${si}].steps[0].settings.coreWeight`];
}
const reconcile = (meanWeight: SettingValue, theoretical: SettingValue = { header: 'batchSize' }) =>
  withStep('tablet-reconciliation', { theoretical, meanWeight, yieldLimit: pct('97.0', '100.5'), accountabilityLimit: pct('99.0', '100.5') });
const dryConstant = (maxChange: SettingValue) => withStep('dry-constant', { maxChange }, { kind: 'repeat-until', maxRounds: 5 });
const perTablet = (label: string, what: string) => `${label} is a weight per tablet: pick the core or coated weight from the header, an earlier step's result, or type it (${what} is per batch)`;

describe('not a batch quantity (notBatch)', () => {
  it('is set on the coats\' core weight and the reconciliations\' mean tablet weight (per tablet), and the drying tolerance', () => {
    const marked = BLOCKS.flatMap((b) => b.settings.filter((s) => s.notBatch).map((s) => `${b.id}.${s.name}: ${s.notBatch}`)).sort();
    expect(marked).toEqual(['coat.coreWeight: tablet', 'dry-constant.maxChange: tolerance', 'finished-goods.meanWeight: tablet',
      'spray-coat.coreWeight: tablet', 'tablet-reconciliation.meanWeight: tablet']);
    for (const b of BLOCKS) expect(blockProblems(b)).toEqual([]);
  });

  it('a block may give it only to a quantity setting, and not with formulaField', () => {
    const b = findBlock({ id: 'coat', version: 1 })!;
    expect(blockProblems({ ...b, settings: [b.settings[0]!, { ...b.settings[1]!, notBatch: 'tablet' }] }))
      .toEqual(['setting gainLimit: only a quantity setting is marked not a batch quantity']);
    expect(blockProblems({ ...b, settings: [{ ...b.settings[0]!, formulaField: 'labelClaim' }, b.settings[1]!] }))
      .toEqual(['setting coreWeight: a setting that is not a batch quantity does not read a field of a formula line']);
  });

  it('a weight per tablet: the master refuses a formula line and the batch values of the header', () => {
    const cases: [SettingValue, string][] = [
      [{ formula: 'api' }, 'the batch quantity of Examplol'],
      [{ formula: 'api', adjusted: true }, 'the batch quantity of Examplol'],
      [{ header: 'coreBatch' }, 'the theoretical core batch weight'],
      [{ header: 'coatedBatch' }, 'the theoretical coated batch weight'],
      [{ header: 'batchSize' }, 'the batch size'],
    ];
    for (const [v, what] of cases) {
      const [d, p] = withCoreWeight(v);
      expect(errors(d)).toEqual([`${p}: ${perTablet('Core weight', what)}`]);
    }
    const [r, q] = reconcile({ formula: 'lactose' });
    expect(errors(r)).toEqual([`${q}.meanWeight: ${perTablet('Mean tablet weight', 'the batch quantity of Lactose monohydrate')}`]);
  });

  it('a weight per tablet: the master takes the tablet weights of the header, an earlier step and a typed value', () => {
    for (const v of [{ header: 'coreWeight' }, { header: 'coatedWeight' }, { ref: 'compression/compress/meanWeight' }, '250.0 mg'] as SettingValue[]) {
      expect(errors(withCoreWeight(v)[0])).toEqual([]);
      expect(errors(reconcile(v)[0])).toEqual([]);
    }
  });

  it('the spray coat and the packing reconciliation refuse a batch value too', () => {
    const d = tablet();
    const coat = d.stages.find((s) => s.key === 'coating')!.steps[0]!;
    Object.assign(coat, { block: { id: 'spray-coat', version: 1 }, everyMinutes: 15, settings: { coreWeight: { header: 'coatedBatch' }, base: 'start', gainLimit: pct('2.8', '3.2') } });
    expect(errors(d)).toEqual([expect.stringMatching(/settings\.coreWeight: Weight before this coat is a weight per tablet: .*\(the theoretical coated batch weight is per batch\)$/)]);

    const pk = packing();
    expect(errors(pk)).toEqual([]);
    const si = pk.stages.findIndex((s) => s.steps.some((t) => t.block.id === 'finished-goods'));
    const ti = pk.stages[si]!.steps.findIndex((t) => t.block.id === 'finished-goods');
    pk.stages[si]!.steps[ti]!.settings.meanWeight = { header: 'coreBatch' };
    expect(errors(pk)).toEqual([`stages[${si}].steps[${ti}].settings.meanWeight: ${perTablet('Mean tablet weight', 'the theoretical core batch weight')}`]);
  });

  it('a tolerance (dry to constant weight): typed only', () => {
    expect(errors(dryConstant('0.5 mg')[0])).toEqual([]);
    const cases: [SettingValue, string][] = [
      [{ formula: 'api' }, 'the batch quantity of Examplol'],
      [{ header: 'coreBatch' }, 'the theoretical core batch weight'],
      [{ header: 'coreWeight' }, 'the theoretical core tablet weight'],
      [{ ref: 'granulation/yield/output' }, 'granulation/yield/output (an earlier step)'],
    ];
    for (const [v, what] of cases) {
      const [d, p] = dryConstant(v);
      expect(errors(d)).toEqual([`${p}.maxChange: Largest change between rounds is a tolerance: type it (${what} is not a tolerance)`]);
    }
  });

  it('every other quantity setting still takes a formula line and a batch value of the header', () => {
    expect(errors(tablet())).toEqual([]);
    const d = tablet();
    const yieldStep = d.stages.find((s) => s.key === 'compression')!.steps.find((t) => t.key === 'yield')!;
    expect(yieldStep.settings.theoretical).toEqual({ header: 'coreBatch' });
  });
});

describe('a formula line on a setting of another kind than a mass', () => {
  it('is refused where the kind is known (a number of tablets), and taken where it is a mass', () => {
    const [d, p] = reconcile('250.0 mg', { formula: 'api' });
    expect(errors(d)).toEqual([`${p}.theoretical: Theoretical number of tablets: a formula line gives its batch quantity (a mass), but this step needs a count: type the value`]);
    // A mass: the weigh target (the fixture weighs the formula lines).
    expect(errors(tablet())).toEqual([]);
  });
});

describe('the designer offers', () => {
  const d = tablet();
  const si = d.stages.findIndex((s) => s.key === 'coating');
  it('for a weight per tablet: the tablet weights of the header and earlier steps, no formula line', () => {
    const c = quantityChoices(d, si, 0, 'mass', 'tablet');
    expect(c).toMatchObject({ lines: false, headers: ['coreWeight', 'coatedWeight'] });
    expect(c.refs.map((r) => r.ref)).toContain('compression/compress/meanWeight');
    const noCoat = tablet();
    delete noCoat.header.coatedWeightMg;
    expect(quantityChoices(noCoat, si, 0, 'mass', 'tablet').headers).toEqual(['coreWeight']);
  });

  it('for a tolerance: nothing but a typed value', () => {
    expect(quantityChoices(d, si, 0, 'mass', 'tolerance')).toEqual({ lines: false, headers: [], refs: [] });
  });

  it('for any other quantity: the formula lines, every header value of its kind and earlier steps', () => {
    const c = quantityChoices(d, si, 0, 'mass');
    expect(c).toMatchObject({ lines: true, headers: ['coreWeight', 'coatedWeight', 'coreBatch', 'coatedBatch'] });
    expect(c.refs.length).toBeGreaterThan(0);
    expect(quantityChoices(d, si, 0, 'count')).toMatchObject({ lines: false, headers: ['batchSize'] });
  });
});

// Round 37 (port of the TrueBatch API check): a repeat-until step whose stop check reads an optional setting the master
// left unset never passes at run time (the check is left out), so the rounds could only end at the most rounds allowed.
describe('a repeat-until step whose stop check can never pass', () => {
  const pct = (low: string, high: string) => ({ low, high, unit: '%' });
  const flow = (stop: string): Step['flow'] => ({ kind: 'repeat-until', maxRounds: 5, stop });
  const never = (d: MasterDoc) => errors(d).filter((e) => e.includes('never passes'));

  it('the Carr index stops the rounds but its limits are not set: refused', () => {
    const [d, p] = withStep('density-flow', {}, flow('carr'));
    expect(never(d)).toEqual([`${p.replace(/\.settings$/, '.flow')}: Carr index stops the rounds, but Carr index limits is not set, so it never passes: set it, or pick the check that stops the rounds under More options`]);
  });

  it('the limits set: taken; the other optional limits (not the stop check) stay optional', () => {
    const [d] = withStep('density-flow', { carrLimit: pct('5', '15') }, flow('carr'));
    expect(never(d)).toEqual([]);
    // Not a repeat-until step: every limit stays optional.
    expect(never(withStep('density-flow', {})[0])).toEqual([]);
  });

  it('no block\'s own stop check reads an optional setting (each stop check of the blocks as shipped can pass)', () => {
    const optional = BLOCKS.filter((b) => b.stop).flatMap((b) => {
      const c = b.calcs.find((x) => x.name === b.stop)!;
      return [...JSON.stringify(c.args).matchAll(/"\$([a-zA-Z0-9]+)\?"/g)].filter(([, n]) => b.settings.some((s) => s.name === n)).map(([, n]) => `${b.id}.${n}`);
    });
    expect(optional).toEqual([]);
    expect(errors(tablet())).toEqual([]);
  });
});
