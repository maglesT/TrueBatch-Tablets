import type { Block } from './format.js';

// Dry to an LOD limit: used as repeat-until, a new round of drying until the LOD is within the limit.
export const dry: Block = {
  id: 'dry', version: 1, name: 'Dry to an LOD limit', checker: false, stop: 'lodCheck',
  instruction: 'Dry the granules, take a sample and record the loss on drying.',
  fields: [
    { name: 'machine', label: 'Dryer', kind: 'machine', types: ['dryer', 'drier', 'fbd', 'fluid bed'] },
    { name: 'inletTemp', label: 'Inlet temperature', kind: 'number', unit: '°C' },
    { name: 'inletRh', label: 'Relative humidity of the inlet air', kind: 'number', unit: '%RH', optional: true },
    { name: 'lod', label: 'Loss on drying', kind: 'number', unit: '%' },
  ],
  settings: [
    { name: 'lodLimit', label: 'LOD limit', kind: 'limit' },
    // The inlet air's absolute humidity (T25) from its relative humidity and temperature: optional.
    { name: 'humidityPer', label: 'Inlet air humidity per', kind: 'text', options: ['kg dry air', 'm³ air'], optional: true },
    { name: 'humidityLimit', label: 'Inlet air humidity limits (g per kg dry air, or g per m³ of air)', kind: 'limit', optional: true },
  ],
  calcs: [
    { name: 'lodCheck', label: 'LOD against limit', template: 'C1', args: { value: '$lod', limit: '$lodLimit' } },
    { name: 'humidity', label: 'Inlet air absolute humidity', template: 'T25', args: { relativeHumidity: '$inletRh', temperature: '$inletTemp', per: '$humidityPer?', limit: '$humidityLimit?' } },
  ],
};
