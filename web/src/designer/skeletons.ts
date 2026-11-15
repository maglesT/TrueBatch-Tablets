// Process skeletons a new master may start from: the usual stages and steps of a process, as data. Settings that
// depend on the product (which material a step weighs, its limits) are left for the author; the master check lists
// them. Tablet-weight limits start at ± 5 % of the header's core weight. Every stage is worked in a room, so each
// starts with line clearance (TB-10).
import { findBlock } from '../../../shared/blocks/index.js';
import { Dec } from '../../../shared/templates/index.js';
import type { MasterDoc, SettingValue, Stage, Step } from '../../../shared/master/schema.js';
import { stepFrom } from './model.js';

type Header = MasterDoc['header'];
interface StepPlan { block: string; key?: string; settings?: (h: Header) => Record<string, SettingValue>; minMinutes?: number }
interface StagePlan { key: string; name: string; kind?: Stage['kind']; role: string; produces?: [string, number]; uses?: string[]; steps: StepPlan[] }

const pct = (h: Header, mg: string, by: string) => new Dec(mg).times(new Dec(100).plus(by)).div(100).toFixed(1);
const yieldStep = (theoretical: SettingValue): StepPlan => ({ block: 'stage-yield', key: 'yield', settings: () => ({
  theoretical, yieldLimit: { low: '97.0', high: '100.5', unit: '%' }, accountabilityLimit: { low: '99.0', high: '100.5', unit: '%' } }) });
const weighStep = (key: string): StepPlan => ({ block: 'weigh', key, settings: () => ({ tolerance: '0.5' }) });
const compressStep: StepPlan = { block: 'compress', settings: (h) => ({
  meanLimit: { low: pct(h, h.coreWeightMg, '-5'), high: pct(h, h.coreWeightMg, '5'), unit: 'mg' }, weightBand: '5.0', weightOuterBand: '10.0' }) };
// TB-16: the tooling is checked before and after compression; the tablets are reconciled at the end.
const tooling = (key: string): StepPlan => ({ block: 'punch-die-check', key });
const reconcile: StepPlan = { block: 'tablet-reconciliation', key: 'yield', settings: () => ({ theoretical: { header: 'batchSize' },
  meanWeight: { ref: 'compression/compress/meanWeight' }, yieldLimit: { low: '97.0', high: '100.5', unit: '%' }, accountabilityLimit: { low: '99.0', high: '100.5', unit: '%' } }) };
const compression = [tooling('tooling-before'), compressStep, tooling('tooling-after'), reconcile];

const SKELETONS: { id: string; name: string; text: string; stages: StagePlan[] }[] = [
  {
    id: 'wet-granulation-film-coated', name: 'Wet granulation, film-coated',
    text: 'Binder solution, granulation and drying, lubrication, compression, coating suspension and film coating.',
    stages: [
      { key: 'binder', name: 'Binder solution', kind: 'preparation', role: 'Granulation operator', produces: ['binder solution', 24],
        steps: [weighStep('weigh-binder'), { block: 'binder-solution' }] },
      { key: 'granulation', name: 'Granulation', role: 'Granulation operator', produces: ['dried granules', 72], uses: ['binder'],
        steps: [weighStep('weigh-api'), { block: 'sift' }, { block: 'charge', key: 'charge-api' }, { block: 'dry-mix' }, { block: 'granulate' }, { block: 'dry' },
          { block: 'sieve', key: 'mill' }, yieldStep('')] },
      { key: 'blending', name: 'Blending', role: 'Granulation operator', produces: ['lubricated blend', 72], uses: ['granulation'],
        steps: [{ block: 'lubricate', settings: () => ({ granuleWeight: { ref: 'granulation/yield/output' }, tolerance: '0.5' }) }, { block: 'blend-uniformity' }, yieldStep({ header: 'coreBatch' })] },
      { key: 'compression', name: 'Compression', role: 'Compression operator', produces: ['core tablets', 720], uses: ['blending'], steps: compression },
      { key: 'suspension', name: 'Coating suspension', kind: 'preparation', role: 'Coating operator', produces: ['coating suspension', 24],
        steps: [weighStep('weigh-coating'), { block: 'coating-suspension' }] },
      { key: 'coating', name: 'Film coating', role: 'Coating operator', produces: ['coated tablets', 2160], uses: ['compression', 'suspension'],
        steps: [{ block: 'spray-coat', key: 'coat', settings: () => ({ coreWeight: { header: 'coreWeight' }, base: 'start' }) }, yieldStep({ header: 'coatedBatch' })] },
    ],
  },
  {
    id: 'direct-compression-uncoated', name: 'Direct compression, uncoated',
    text: 'Sifting and blending of the dispensed materials, then compression.',
    stages: [
      { key: 'blending', name: 'Blending', role: 'Production operator', produces: ['blend', 72],
        steps: [weighStep('weigh'), { block: 'sift' }, { block: 'dry-mix', key: 'blend' }, yieldStep({ header: 'coreBatch' })] },
      { key: 'compression', name: 'Compression', role: 'Compression operator', produces: ['bulk tablets', 720], uses: ['blending'], steps: compression },
    ],
  },
];
export const SKELETON_LIST = SKELETONS.map(({ id, name, text }) => ({ id, name, text }));

/** The stages of a skeleton for this header. */
export function skeletonStages(id: string, h: Header): Stage[] {
  const sk = SKELETONS.find((s) => s.id === id);
  if (!sk) return [];
  return sk.stages.map((p) => ({
    key: p.key, name: p.name, kind: p.kind ?? 'normal', roomTypes: [], machineTypes: [], role: p.role, uses: p.uses ?? [],
    ...(p.produces ? { produces: { name: p.produces[0], holdHours: p.produces[1] } } : {}),
    steps: [{ block: 'line-clearance' }, ...p.steps].reduce<Step[]>((steps, sp) => {
      const block = findBlock({ id: sp.block, version: 1 })!;
      const settings = Object.fromEntries(Object.entries(sp.settings?.(h) ?? {}).filter(([, v]) => v !== ''));
      return [...steps, { ...stepFrom(block, steps.map((t) => t.key)), ...(sp.key ? { key: sp.key } : {}), settings, ...(sp.minMinutes ? { minMinutes: sp.minMinutes } : {}) }];
    }, []),
  }));
}
