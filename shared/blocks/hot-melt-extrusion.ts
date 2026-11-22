import type { Block } from './format.js';

// Hot-melt extrusion with periodic checks (F6): a round every N minutes (at most 30) until extrusion is finished. Each
// round: the barrel and die temperatures, screw speed, torque and feed rate against the master's limits (C1), the
// specific mechanical energy (T24, kWh/kg) from the motor power the master gives and the torque and speed read, and the
// extrudate as the master shows it (C4). Out of limits: a deviation note before the round is signed, as every block.
export const hotMeltExtrusion: Block = {
  id: 'hot-melt-extrusion', version: 1, name: 'Hot-melt extrusion with periodic checks', checker: false, stop: 'finished',
  periodic: { maxMinutes: 30 },
  instruction: 'Read the barrel and die temperatures, the screw speed, the torque and the feed rate on the extruder. Check the extrudate against the sample shown.',
  fields: [
    { name: 'machine', label: 'Extruder', kind: 'machine', types: ['extruder'] },
    { name: 'barrelTemp', label: 'Barrel temperature', kind: 'number', unit: '°C' },
    { name: 'dieTemp', label: 'Die temperature', kind: 'number', unit: '°C' },
    { name: 'screwSpeed', label: 'Screw speed', kind: 'number', unit: 'rpm' },
    { name: 'torque', label: 'Torque', kind: 'number', unit: '%' },
    { name: 'feedRate', label: 'Feed rate', kind: 'number', unit: 'kg/h' },
    { name: 'meltPressure', label: 'Melt pressure', kind: 'number', unit: 'bar', optional: true },
    { name: 'extrudateOk', label: 'Extrudate as shown (appearance, colour)', kind: 'yes-no' },
    { name: 'extrusionDone', label: 'Extrusion finished', kind: 'yes-no' },
  ],
  settings: [
    // The extruder's motor power and top screw speed (its equipment record), typed: the specific energy needs them.
    { name: 'motorPower', label: 'Motor power of the extruder', kind: 'quantity', notBatch: 'tolerance' },
    { name: 'maxScrewSpeed', label: 'Top screw speed of the extruder', kind: 'quantity', notBatch: 'tolerance' },
    { name: 'efficiency', label: 'Gearbox efficiency (a fraction, e.g. 0.9; empty: 1)', kind: 'number', optional: true },
    { name: 'smeLimit', label: 'Specific mechanical energy limits', kind: 'limit' },
    { name: 'barrelLimit', label: 'Barrel temperature limits', kind: 'limit' },
    { name: 'dieLimit', label: 'Die temperature limits', kind: 'limit' },
    { name: 'speedLimit', label: 'Screw speed limits', kind: 'limit', optional: true },
    { name: 'torqueLimit', label: 'Torque limits', kind: 'limit', optional: true },
    { name: 'feedLimit', label: 'Feed rate limits', kind: 'limit', optional: true },
  ],
  calcs: [
    { name: 'barrelCheck', label: 'Barrel temperature', template: 'C1', args: { value: '$barrelTemp', limit: '$barrelLimit' } },
    { name: 'dieCheck', label: 'Die temperature', template: 'C1', args: { value: '$dieTemp', limit: '$dieLimit' } },
    { name: 'speedCheck', label: 'Screw speed', template: 'C1', args: { value: '$screwSpeed', limit: '$speedLimit' } },
    { name: 'torqueCheck', label: 'Torque', template: 'C1', args: { value: '$torque', limit: '$torqueLimit' } },
    { name: 'feedCheck', label: 'Feed rate', template: 'C1', args: { value: '$feedRate', limit: '$feedLimit' } },
    { name: 'sme', label: 'Specific mechanical energy', template: 'T24', args: { motorPower: '$motorPower', torquePercent: '$torque', screwSpeed: '$screwSpeed', maxScrewSpeed: '$maxScrewSpeed', feedRate: '$feedRate', efficiency: '$efficiency?', limit: '$smeLimit' } },
    { name: 'extrudate', label: 'Extrudate', template: 'C4', args: { question: 'Extrudate as shown', answers: ['$extrudateOk'], expected: ['yes'] } },
    { name: 'finished', label: 'Extrusion finished', template: 'C4', args: { question: 'Extrusion finished', answers: ['$extrusionDone'], expected: ['yes'] } },
  ],
};
