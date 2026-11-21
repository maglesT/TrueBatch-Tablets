import type { Block } from './format.js';

// Fix round 21 Nov 2026 (A1): bilayer compression with periodic in-process checks, one round every N minutes (at most
// 30, TB-15) until compression is finished, on a press that can make bilayer tablets (master data names it in its type
// or name, A8). Each round: 10 layer 1 samples (the press stopped after the first layer, or its sampling station) with
// their mean (T7) and each against ± % of their mean (C3); 20 whole tablets (T7 mean, C3 individual weights); layer 2
// as the tablet's mean less layer 1's (T1), against its own limits when the master sets them; hardness and thickness
// (T7); and no tablet splitting at the layer interface (C4, delamination). The layer targets come from the formula's
// layer lines (the master check compares them, checks.ts).
export const bilayerCompress: Block = {
  id: 'bilayer-compress', version: 1, name: 'Bilayer compression with periodic checks', checker: false, stop: 'finished',
  periodic: { maxMinutes: 30 },
  instruction: 'Take 10 layer 1 samples and record their weights, then 20 whole tablets and their weights, the hardness and thickness of 5 tablets. Check that no tablet splits at the layer interface.',
  fields: [
    { name: 'machine', label: 'Bilayer tablet press', kind: 'machine', types: ['press', 'compression'], notTypes: ['filter', 'compressor'],
      capability: ['bilayer', 'bi-layer', 'trilayer', 'tri-layer', 'multilayer', 'multi-layer'] },
    { name: 'layerOneWeights', label: 'Weights of 10 layer 1 samples', kind: 'number', unit: 'mg', count: 10 },
    { name: 'weights', label: 'Weights of 20 tablets', kind: 'number', unit: 'mg', count: 20 },
    { name: 'hardness', label: 'Hardness of 5 tablets', kind: 'number', unit: 'N', count: 5 },
    { name: 'thickness', label: 'Thickness of 5 tablets', kind: 'number', unit: 'mm', count: 5 },
    { name: 'intact', label: 'No tablet splits at the layer interface (twist or drop test of 5 tablets)', kind: 'yes-no' },
    { name: 'compressionDone', label: 'Compression finished', kind: 'yes-no' },
  ],
  settings: [
    { name: 'layerOneLimit', label: 'Layer 1 mean weight limits', kind: 'limit' },
    { name: 'layerOneBand', label: 'Each layer 1 sample (± % of the mean)', kind: 'number' },
    { name: 'meanLimit', label: 'Tablet mean weight limits', kind: 'limit' },
    { name: 'weightBand', label: 'Individual weights (± % of the mean)', kind: 'number' },
    { name: 'weightOuterBand', label: 'No tablet outside (± % of the mean)', kind: 'number' },
    { name: 'layerTwoLimit', label: 'Layer 2 mean weight limits (tablet less layer 1)', kind: 'limit', optional: true },
    { name: 'hardnessLimit', label: 'Hardness limits', kind: 'limit' },
    { name: 'thicknessLimit', label: 'Thickness limits', kind: 'limit' },
  ],
  calcs: [
    { name: 'layerOneMean', label: 'Layer 1 mean weight', template: 'T7', args: { readings: '$layerOneWeights', limit: '$layerOneLimit' } },
    { name: 'layerOneEach', label: 'Each layer 1 sample', template: 'C3', args: { readings: '$layerOneWeights', band: { plusMinusPercent: '$layerOneBand', of: 'mean' }, noun: 'layer 1 samples', meanLimit: '$layerOneLimit' } },
    { name: 'meanWeight', label: 'Tablet mean weight', template: 'T7', args: { readings: '$weights', limit: '$meanLimit' } },
    { name: 'individualWeights', label: 'Individual weights', template: 'C3', args: { readings: '$weights', band: { plusMinusPercent: '$weightBand', of: 'mean' }, allowedOutside: 2, outer: { plusMinusPercent: '$weightOuterBand', of: 'mean' }, noun: 'tablets', meanLimit: '$meanLimit' } },
    { name: 'layerTwoMean', label: 'Layer 2 mean weight (tablet less layer 1)', template: 'T1', args: { a: '$meanWeight', b: '$layerOneMean', names: ['tablet mean weight', 'layer 1 mean weight'] } },
    { name: 'layerTwoCheck', label: 'Layer 2 mean weight against its limits', template: 'C1', args: { value: '$layerTwoMean', limit: '$layerTwoLimit' } },
    { name: 'meanHardness', label: 'Hardness', template: 'T7', args: { readings: '$hardness', limit: '$hardnessLimit' } },
    { name: 'meanThickness', label: 'Thickness', template: 'T7', args: { readings: '$thickness', limit: '$thicknessLimit' } },
    { name: 'intactCheck', label: 'No delamination', template: 'C4', args: { question: 'No tablet splits at the layer interface', answers: ['$intact'], expected: ['yes'] } },
    { name: 'finished', label: 'Compression finished', template: 'C4', args: { question: 'Compression finished', answers: ['$compressionDone'], expected: ['yes'] } },
  ],
};
