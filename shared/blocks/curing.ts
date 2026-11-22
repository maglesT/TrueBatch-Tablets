import type { Block } from './format.js';

// Curing (or sublimation) in an oven, with periodic readings (F6): a round every N minutes (at most 60). The time counts
// only while the oven temperature is inside the master's limits (T13, accumulated: an interval counts only when both of
// its readings are inside); the rounds stop when the time required is reached. Each reading is also checked on its own
// (C1): out of limits needs a deviation note before the round is signed.
export const curing: Block = {
  id: 'curing', version: 1, name: 'Cure in an oven with periodic readings', checker: false, stop: 'cured',
  periodic: { maxMinutes: 60 },
  instruction: 'Read the oven temperature and record it. The curing time counts only while the temperature is within its limits.',
  fields: [
    { name: 'machine', label: 'Oven or curing chamber', kind: 'machine', types: ['oven', 'cur'] },
    { name: 'ovenTemp', label: 'Oven temperature', kind: 'number', unit: '°C' },
    // The time of the reading, taken from the server clock when it is recorded ("<name>At" pairs with its value).
    { name: 'ovenTempAt', label: 'Time of the reading', kind: 'timer' },
    { name: 'humidity', label: 'Relative humidity in the oven', kind: 'number', unit: '%RH', optional: true },
  ],
  settings: [
    { name: 'tempLimit', label: 'Oven temperature limits', kind: 'limit' },
    { name: 'timeLimit', label: 'Time required inside the limits (at least)', kind: 'limit' },
    { name: 'humidityLimit', label: 'Relative humidity limits', kind: 'limit', optional: true },
  ],
  calcs: [
    { name: 'tempCheck', label: 'Oven temperature', template: 'C1', args: { value: '$ovenTemp', limit: '$tempLimit' } },
    { name: 'humidityCheck', label: 'Relative humidity', template: 'C1', args: { value: '$humidity', limit: '$humidityLimit' } },
    { name: 'cured', label: 'Time inside the limits', template: 'T13', args: { mode: 'accumulated', readings: '$rounds.ovenTemp', inside: '$tempLimit', unit: 'h', limit: '$timeLimit' } },
  ],
};
