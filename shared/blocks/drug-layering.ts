import type { Block } from './format.js';

// Drug layering on beads or nonpareils in a fluid bed (F6): a round every N minutes (at most 30). The end point is the
// drug deposited (F0438), not the time or the quantity of suspension: the suspension sprayed so far (read on the feed
// scale) × the drug in the suspension (T8) as a % of the drug the formula needs on the beads (T3). The rounds stop when
// it is within its limits.
export const drugLayering: Block = {
  id: 'drug-layering', version: 1, name: 'Layer the drug on beads', checker: false, stop: 'deposit',
  periodic: { maxMinutes: 30 },
  instruction: 'Record the inlet and product temperatures, the spray rate and the weight of suspension sprayed so far, read on the feed scale.',
  fields: [
    { name: 'machine', label: 'Fluid bed processor', kind: 'machine', types: ['fluid bed', 'fbd', 'wurster', 'coat'] },
    { name: 'inletTemp', label: 'Inlet temperature', kind: 'number', unit: '°C' },
    { name: 'bedTemp', label: 'Product temperature', kind: 'number', unit: '°C' },
    { name: 'sprayRate', label: 'Spray rate', kind: 'number', unit: 'g/min' },
    { name: 'sprayed', label: 'Suspension sprayed so far', kind: 'number', unit: 'kg' },
  ],
  settings: [
    // The drug to deposit: the API's batch quantity of the formula (or typed), and the drug in the suspension as made.
    { name: 'drugTarget', label: 'Drug to deposit on the beads', kind: 'quantity' },
    { name: 'drugInSuspension', label: 'Drug in the suspension (% w/w)', kind: 'quantity', notBatch: 'tolerance' },
    { name: 'depositLimit', label: 'Drug deposited (% of the drug to deposit)', kind: 'limit' },
    { name: 'inletLimit', label: 'Inlet temperature limits', kind: 'limit', optional: true },
    { name: 'bedLimit', label: 'Product temperature limits', kind: 'limit', optional: true },
    { name: 'sprayRateLimit', label: 'Spray rate limits', kind: 'limit', optional: true },
  ],
  calcs: [
    { name: 'inletCheck', label: 'Inlet temperature', template: 'C1', args: { value: '$inletTemp', limit: '$inletLimit' } },
    { name: 'bedCheck', label: 'Product temperature', template: 'C1', args: { value: '$bedTemp', limit: '$bedLimit' } },
    { name: 'sprayRateCheck', label: 'Spray rate', template: 'C1', args: { value: '$sprayRate', limit: '$sprayRateLimit' } },
    { name: 'deposited', label: 'Drug deposited', template: 'T8', args: { mode: 'percent', percent: '$drugInSuspension', batch: '$sprayed', unit: 'kg' } },
    { name: 'deposit', label: 'Drug deposited against the drug to deposit', template: 'T3', args: { actual: '$deposited', theoretical: '$drugTarget', limit: '$depositLimit' } },
  ],
};
