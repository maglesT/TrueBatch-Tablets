// The sweep: every block of the library (tablets and packing) in a small master with all its settings set, and the
// test masters, worked out with every field filled ("1" for a number, yes, the first option), once with the required
// fields only and once with all, in a first and a second round. A template may refuse what it is given; it must never
// crash on it (a crash is "could not use these inputs": the step could not be signed).
import { describe, expect, it } from 'vitest';
import { BLOCKS, findBlock, type Block } from '../shared/blocks/index.js';
import { evaluate, type StepEvent, type Value } from '../shared/engine/index.js';
import { masterChecks } from '../shared/master/checks.js';
import { masterSchema, type MasterDoc, type Step } from '../shared/master/schema.js';
import { at, ev, tablet } from './engine-fixture.js';
import { GTIN, pack, packing } from './packing-fixture.js';

const pct = (low: string, high: string) => ({ low, high, unit: '%' });
const minutes = { low: '10', high: '12', unit: 'min' };
const weights = { meanLimit: { low: '95.0', high: '105.0', unit: 'mg' }, weightBand: '5.0', weightOuterBand: '10.0', hardnessLimit: { low: '40', high: '80', unit: 'N' },
  thicknessLimit: { low: '2.8', high: '3.2', unit: 'mm' } };
const tensile = { tensileShape: 'flat round', tabletDiameter: '8.0 mm', wallThickness: '1.0 mm', tensileLimit: { low: '0.5', high: '3.0', unit: 'MPa' } };
// Every setting of every block that has settings, optional ones too.
const SETTINGS: Record<string, Step['settings']> = {
  weigh: { target: { formula: 'x', adjusted: true }, tolerance: '0.5', portion: 'Intragranular' },
  charge: { material: { formula: 'x' } },
  sift: { sieve: '40 mesh (425 µm)' },
  'binder-solution': { binder: { formula: 'x' }, binder2: '0.020 kg', binder3: '0.010 kg', targetSolids: '10 %', tolerance: '1.0', mixTimeLimit: minutes },
  'coating-suspension': { powder: { formula: 'x' }, targetSolids: '12 %', tolerance: '1.0', mixTimeLimit: minutes },
  'dry-mix': { speedLimit: { low: '10', high: '20', unit: 'rpm' }, mixTimeLimit: minutes },
  mix: { speedLimit: { low: '10', high: '20', unit: 'rpm' } },
  'mix-to-target': { property: 'fines below 125 µm', unit: '%', target: '20.0 %', scale: 'ethanol % v/v', basisMain: 'as is', basisDonor: 'as is', basisTarget: 'as is',
    secondMarker: 'Isomer B', secondUnit: '%', secondLimit: pct('0.0', '50.0'), tolerance: '2.0', mixTimeLimit: minutes },
  granulate: { endPointLimit: { low: '8.0', high: '12.0', unit: 'kW' } },
  'roller-compact': { forceUnit: 'kN/cm', forceLimit: { low: '6', high: '10', unit: 'kN/cm' }, gapLimit: { low: '2.0', high: '3.0', unit: 'mm' },
    rollSpeedLimit: { low: '3', high: '8', unit: 'rpm' }, feedSpeedLimit: { low: '20', high: '60', unit: 'rpm' }, screen: '1.0 mm', thicknessLimit: { low: '2.0', high: '3.2', unit: 'mm' },
    densityLimit: { low: '0.9', high: '1.2', unit: 'g/cm³' }, finesLimit: { high: '30', unit: '%' }, trueDensity: '1.5 g/cm³', solidFractionLimit: { low: '0.6', high: '0.9', unit: '' } },
  'device-assembly': { component: { formula: 'x' }, theoretical: '1000 units', functionSample: '5', forceLimit: { low: '10', high: '25', unit: 'N' }, level: 'II',
    criticalAql: '0', majorAql: '0.65', minorAql: '2.5', yieldLimit: pct('97.0', '100.5'), accountabilityLimit: pct('99.0', '100.5'), componentLimit: pct('99.0', '100.5') },
  mill: { screen: '1.0 mm', speedLimit: { low: '1000', high: '3000', unit: 'rpm' }, accountabilityLimit: pct('98.0', '100.5') },
  'hot-melt-extrusion': { motorPower: '11 kW', maxScrewSpeed: '400 rpm', efficiency: '0.9', smeLimit: { low: '0.1', high: '0.5', unit: 'kWh/kg' }, barrelLimit: { low: '120', high: '160', unit: '°C' },
    dieLimit: { low: '110', high: '150', unit: '°C' }, speedLimit: { low: '100', high: '300', unit: 'rpm' }, torqueLimit: { low: '20', high: '80', unit: '%' }, feedLimit: { low: '1', high: '5', unit: 'kg/h' } },
  curing: { tempLimit: { low: '40', high: '50', unit: '°C' }, timeLimit: { low: '24', unit: 'h' }, humidityLimit: { low: '30', high: '70', unit: '%RH' } },
  'sugar-coat': { coreWeight: { header: 'coreWeight' }, base: 'start', gainLimit: pct('30.0', '60.0'), syrupLimit: { low: '0.1', high: '1.0', unit: 'kg' }, dryLimit: { low: '5', high: '30', unit: 'min' },
    inletLimit: { low: '40', high: '60', unit: '°C' } },
  'drug-layering': { drugTarget: { formula: 'x' }, drugInSuspension: '10 %', depositLimit: pct('98.0', '102.0'), inletLimit: { low: '40', high: '60', unit: '°C' }, bedLimit: { low: '30', high: '45', unit: '°C' },
    sprayRateLimit: { low: '5', high: '30', unit: 'g/min' } },
  dry: { lodLimit: { high: '2.0', unit: '%' }, humidityPer: 'm³ air', humidityLimit: { low: '3', high: '12', unit: 'g/m³' } },
  'dry-constant': { maxChange: '0.5 g' },
  lubricate: { lubricant: { formula: 'x' }, granuleWeight: '0.098 kg', theoretical: '0.100 kg', window: pct('90.0', '102.0'), tolerance: '1.0', mixTimeLimit: minutes },
  'sub-batch-combine': { accountabilityLimit: pct('99.0', '100.5') },
  'blend-uniformity': { meanLimit: pct('90.0', '110.0'), rsdLimit: { high: '5.0', unit: '%' }, individualLimit: pct('85.0', '115.0') },
  'density-flow': { carrLimit: { high: '20', unit: '%' }, hausnerLimit: { high: '1.25', unit: '' }, reposeLimit: { high: '40', unit: '°' } },
  'sieve-analysis': { sieve1: '850 µm', sieve2: '425 µm', sieve3: '250 µm', sieve4: '180 µm', sieve5: '150 µm', finesBelow: '150 µm', finesLimit: { high: '20.0', unit: '%' },
    recoveryLimit: pct('98.0', '102.0') },
  'press-setup': { toolingType: '8.0 mm round', pressureLimit: { low: '100', high: '250', unit: 'MPa' }, speedLimit: { low: '10', high: '60', unit: 'rpm' } },
  'compression-release': weights,
  compress: { ...weights, ...tensile },
  'bilayer-compress': { ...weights, layerOneLimit: { low: '68.0', high: '72.0', unit: 'mg' }, layerOneBand: '5.0', layerTwoLimit: { low: '28.0', high: '32.0', unit: 'mg' } },
  friability: { lossLimit: { high: '1.0', unit: '%' } },
  disintegration: { maxTime: '15', temperatureLimit: { low: '35', high: '39', unit: '°C' } },
  'uniformity-by-weight': { coating: 'uncoated', labelClaim: '50 mg' },
  'content-uniformity': { coating: 'uncoated' },
  'dissolution-er': { time1: '1 h', limit1: pct('20', '40'), time2: '4 h', limit2: pct('50', '70'), time3: '8 h', limit3: { low: '80', unit: '%' }, time4: '12 h', limit4: { low: '85', unit: '%' },
    medium: 'Paddle, 900 ml pH 6.8' },
  'lab-tests': { what1: 'Assay of metformin', unit1: '%', limit1: pct('95.0', '105.0'), what2: 'Water', unit2: '%', limit2: { high: '3.0', unit: '%' }, what3: 'pH', unit3: 'pH', limit3: { low: '5.0', high: '7.0', unit: 'pH' } },
  dissolution: { test: 'dissolution IR', q: '80', timePoint: '45 min, 900 ml pH 6.8' },
  coat: { coreWeight: { header: 'coreWeight' }, gainLimit: pct('2.8', '3.2') },
  'spray-coat': { coreWeight: { header: 'coreWeight' }, base: 'start', gainLimit: pct('2.8', '3.2'), inletLimit: { low: '50', high: '70', unit: '°C' },
    bedLimit: { low: '35', high: '45', unit: '°C' }, sprayRateLimit: { low: '50', high: '150', unit: 'g/min' }, humidityPer: 'kg dry air', humidityLimit: { low: '4', high: '14', unit: 'g/kg' } },
  'polish-print': { print: 'Logo in black' },
  check: { what: 'Weight', unit: 'mg', limit: { low: '95', high: '105', unit: 'mg' } },
  'qa-sample': { sampleLimit: { low: '50', high: '60', unit: 'tablets' } },
  'stage-yield': { theoretical: { header: 'coreBatch' }, yieldLimit: pct('97.0', '100.5'), accountabilityLimit: pct('99.0', '100.5') },
  'tablet-reconciliation': { theoretical: { header: 'batchSize' }, meanWeight: '100.0 mg', yieldLimit: pct('97.0', '100.5'), accountabilityLimit: pct('99.0', '100.5') },
  'pack-material-issue': { material: { formula: 'foil' }, unit: 'm' },
  'forming-check': { sealLimit: { low: '160', high: '190', unit: '°C' }, formLimit: { low: '110', high: '140', unit: '°C' } },
  'leak-test': { vacuumUnit: 'mbar', vacuumLimit: { low: '400', high: '600', unit: 'mbar' }, level: 'S-1', aql: '0' },
  'finished-goods': { meanWeight: { header: 'coreWeight' }, yieldLimit: pct('98.0', '100.5'), accountabilityLimit: pct('99.5', '100.5') },
  'printed-reconciliation': { material: { formula: 'foil' }, unit: 'm', issued: '100 m' },
  'serial-reconciliation': { received: '1000 nos' },
};

const item = { itemId: 'eq-1', code: 'EQ-01', name: 'Equipment', version: 1, type: 'balance', room: 'RM-1', area: 'Area' };
/** Every field filled (or the required ones only): "1" in its unit, yes, the first option, a time a few minutes apart. */
function filled(b: Block, settings: Step['settings'], all: boolean): Record<string, Value> {
  let minute = 0;
  const one = (f: Block['fields'][number]): Value => {
    if (f.kind === 'number') {
      const u = f.unit?.startsWith('$') ? settings[f.unit.slice(1)] : f.unit;
      const q = { value: '1', unit: typeof u === 'string' ? u : '' };
      return f.count ? Array.from({ length: f.count }, () => q) : q;
    }
    if (f.kind === 'yes-no') return 'yes';
    if (f.kind === 'choice') return f.options![0]!;
    if (f.kind === 'timer') return `${at(minute += 11).toISOString().slice(0, 19)}Z`;
    if (f.kind === 'machine' || f.kind === 'room') return item;
    if (f.kind === 'bulk') return 'TB260001';
    if (f.kind === 'lot') return 'L-1';
    return f.date ? '2026-11-03' : '1';
  };
  return Object.fromEntries(b.fields.filter((f) => all || !f.optional).map((f) => [f.name, one(f)]));
}

/** The calculations that crashed, as "step calc: message". */
function crashes(doc: MasterDoc, all: boolean): string[] {
  const events: StepEvent[] = [];
  const out: string[] = [];
  for (const [si, s] of doc.stages.entries()) for (const [ti, t] of s.steps.entries()) {
    const b = findBlock(t.block)!;
    const values = filled(b, t.settings, all);
    for (const round of [1, 2]) {
      const key = `${si}.1.${ti}.${round}`;
      const results = evaluate(doc, events, { stage: si, sub: 1, step: ti, round }, values);
      for (const [n, r] of Object.entries(results)) if (!r.ok && /could not use these inputs/.test(r.message)) out.push(`${s.key}/${t.key} ${n}: ${r.message}`);
      events.push(ev('started', key), ev('value', key, { payload: { values, results } }));
    }
  }
  return out;
}

const header = { productItemId: 'p', productCode: 'P', productName: 'P', batchSize: '1000', coreWeightMg: '100.0', coatedWeightMg: '103.0', dispensingRooms: ['DSP-01'] };
const formula = [{ key: 'x', materialItemId: 'm', code: 'M', name: 'M', mgPerTablet: '100.0', role: 'api', place: 'intragranular',
  adjust: { potency: { basis: 'as is', standardIs: 'anhydrous' }, overage: { percent: '2' } } }];
/** A small master of one block with all its settings set; a packing block after the bulk issue (its batch facts). */
function using(b: Block): MasterDoc {
  const step = (x: Block) => ({ key: x.id, block: { id: x.id, version: x.version }, checker: x.checker, settings: SETTINGS[x.id] ?? {} });
  const bulk = findBlock({ id: 'bulk-issue', version: 1 })!;
  const steps = b.packing && b.id !== bulk.id ? [step(bulk), step(b)] : [step(b)];
  return masterSchema.parse({ header, formula, stages: [{ key: 's', name: 'Stage', kind: 'normal', steps }], ...(b.packing ? { pack: pack({ gtin: GTIN, serialisation: true }) } : {}) });
}

describe('the sweep: no template crashes on any block or test master', () => {
  it.each(BLOCKS.map((b) => [b.id, b] as const))('%s: all its settings set, its fields filled, required only or all, in two rounds', (id, b) => {
    expect(Object.keys(SETTINGS[id] ?? {}).sort()).toEqual(b.settings.map((s) => s.name).sort());
    for (const all of [false, true]) expect(crashes(using(b), all)).toEqual([]);
    // Its limits and targets are of the kinds of the values they check (TB-01).
    expect(masterChecks(using(b)).filter((p) => /every reading would be refused/.test(p.message))).toEqual([]);
  });

  it.each([['tablet', tablet()], ['packing', packing()], ['packing, serialised', packing({ gtin: GTIN, serialisation: true })],
    ['packing, bottles', packing({ type: 'bottle' })]] as const)('the %s test master', (_name, doc) => {
    for (const all of [false, true]) expect(crashes(doc, all)).toEqual([]);
    expect(masterChecks(doc).filter((p) => /every reading would be refused/.test(p.message))).toEqual([]);
  });
});
