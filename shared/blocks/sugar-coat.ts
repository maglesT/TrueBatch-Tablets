import type { Block } from './format.js';

// Sugar coating in rounds (F6): a round every N minutes (at most 30), each a layer of syrup with dusting powder, dried
// for a time. The weight gain on the base the master chooses (T5) stops the rounds when it is within its limits.
export const sugarCoat: Block = {
  id: 'sugar-coat', version: 1, name: 'Sugar coat in rounds', checker: false, stop: 'gain',
  periodic: { maxMinutes: 30 },
  instruction: 'Apply the syrup and the dusting powder, dry for the time shown, and record what was used. Weigh 20 tablets and record their mean weight.',
  fields: [
    { name: 'machine', label: 'Coating pan', kind: 'machine', types: ['coat', 'pan'] },
    { name: 'syrup', label: 'Syrup applied in this round', kind: 'number', unit: 'kg' },
    { name: 'dusting', label: 'Dusting powder used in this round', kind: 'number', unit: 'kg', optional: true },
    { name: 'dryMinutes', label: 'Drying time of this round', kind: 'number', unit: 'min' },
    { name: 'inletTemp', label: 'Inlet air temperature', kind: 'number', unit: '°C', optional: true },
    { name: 'meanWeight', label: 'Mean weight of the coated tablets', kind: 'number', unit: 'mg' },
  ],
  settings: [
    { name: 'coreWeight', label: 'Weight before this coat', kind: 'quantity', notBatch: 'tablet' },
    { name: 'base', label: 'Weight gain on (start: before this coat; final: after it)', kind: 'text', options: ['start', 'final'] },
    { name: 'gainLimit', label: 'Weight gain limits', kind: 'limit' },
    { name: 'syrupLimit', label: 'Syrup per round limits', kind: 'limit', optional: true },
    { name: 'dryLimit', label: 'Drying time limits', kind: 'limit', optional: true },
    { name: 'inletLimit', label: 'Inlet air temperature limits', kind: 'limit', optional: true },
  ],
  calcs: [
    { name: 'syrupCheck', label: 'Syrup per round', template: 'C1', args: { value: '$syrup', limit: '$syrupLimit' } },
    { name: 'dryCheck', label: 'Drying time', template: 'C1', args: { value: '$dryMinutes', limit: '$dryLimit' } },
    { name: 'inletCheck', label: 'Inlet air temperature', template: 'C1', args: { value: '$inletTemp', limit: '$inletLimit' } },
    { name: 'gain', label: 'Weight gain', template: 'T5', args: { before: '$coreWeight', after: '$meanWeight', mode: 'gain', base: '$base', limit: '$gainLimit' } },
  ],
};
