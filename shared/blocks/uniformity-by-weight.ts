import type { Block } from './format.js';

// Uniformity of dosage units by weight variation (T14): each tablet's content from its weight and the assay. Only
// for uncoated and film-coated tablets: the master can pick no other coating, and T14 refuses any other.
export const uniformityByWeight: Block = {
  id: 'uniformity-by-weight', version: 1, name: 'Uniformity by weight variation', checker: true,
  instruction: 'Weigh 10 tablets one by one and record each weight. Record the assay of the batch from the QC report.',
  fields: [
    { name: 'balance', label: 'Balance', kind: 'machine', types: ['balance'], notTypes: ['analytical', 'micro'] },
    { name: 'weights', label: 'Weights of 10 tablets', kind: 'number', unit: 'mg', count: 10 },
    { name: 'assay', label: 'Assay (% of label claim, QC report)', kind: 'number', unit: '%', qc: true },
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
