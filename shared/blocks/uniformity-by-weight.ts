import type { Block } from './format.js';

// Uniformity of dosage units by weight variation (T14): each tablet's content from its weight and the assay. Only
// for uncoated and film-coated tablets: the master can pick no other coating, and T14 refuses any other.
// Round 44 (found by Capsules on the demo): the assay is an IN-PROCESS test of this step, not the batch's release CoA
// (the step comes mid-production, after compression: waiting for full release testing would hold the line). The step's
// lab request asks QC for the assay of a composite sample of the units (USP <905> weight variation), a single result
// (LIMS figure 'result'); the acceptance value is worked out from it. A step started before this has no lab request for
// it: its assay is typed (round 43, "started before LIMS in-process requests").
export const uniformityByWeight: Block = {
  id: 'uniformity-by-weight', version: 1, name: 'Uniformity by weight variation', checker: true,
  instruction: 'Weigh 10 tablets one by one and record each weight. Send a composite sample of the tablets to QC for the assay and pick its result from LIMS once QC has approved it (typed from the QC report only while LIMS cannot be reached).',
  fields: [
    { name: 'balance', label: 'Balance', kind: 'machine', types: ['balance'], notTypes: ['analytical', 'micro'] },
    { name: 'weights', label: 'Weights of 10 tablets', kind: 'number', unit: 'mg', count: 10 },
    { name: 'assay', label: 'Assay (% of label claim, QC report)', kind: 'number', unit: '%', qc: 'in_process' },
  ],
  settings: [
    { name: 'coating', label: 'Coating', kind: 'text', options: ['uncoated', 'film-coated'] },
    // A formula line gives its label claim per tablet (never its batch quantity): pulled from the API line.
    { name: 'labelClaim', label: 'Label claim per tablet', kind: 'quantity', formulaField: 'labelClaim' },
  ],
  calcs: [
    { name: 'acceptance', label: 'Content uniformity', template: 'T14', args: { method: 'weight variation', coating: '$coating', weights: { readings: '$weights' }, assay: '$assay', labelClaim: '$labelClaim' } },
  ],
};
