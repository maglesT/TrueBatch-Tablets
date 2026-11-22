import type { Block } from './format.js';

// Mix a donor lot into the main lot to reach a target (T26): a size fraction (fines), an assay, an LOD, or an alcohol
// strength in % v/v (which does not mix by mass, so the scale is set). Each value is on a basis the master names (set
// for all three, the same). A second marker of the same lots (a second isomer, an impurity) is worked out for the mix
// and held to its limits. The master check refuses a property that does not mix by mass (a size such as D50, a hardness,
// a pressure, a plain number such as pH), a mismatch of bases and a second marker set in part.
export const mixToTarget: Block = {
  id: 'mix-to-target', version: 1, name: 'Mix two lots to a target', checker: true,
  instruction: 'Weigh the main lot and record its value and the donor lot\'s. Add the donor quantity shown, mix for the time shown and record what was added.',
  fields: [
    { name: 'machine', label: 'Blender or vessel', kind: 'machine', types: ['mix', 'blend', 'bin', 'vessel'] },
    { name: 'donorLot', label: 'Donor lot', kind: 'lot' },
    { name: 'mainMass', label: 'Weight of the main lot', kind: 'number', unit: 'kg' },
    { name: 'mainValue', label: 'Value of the main lot', kind: 'number', unit: '$unit' },
    { name: 'donorValue', label: 'Value of the donor lot', kind: 'number', unit: '$unit' },
    { name: 'mainSecond', label: 'Second marker of the main lot', kind: 'number', unit: '$secondUnit', when: 'secondMarker', labelPart: { setting: 'secondMarker', replaces: 'Second marker' } },
    { name: 'donorSecond', label: 'Second marker of the donor lot', kind: 'number', unit: '$secondUnit', when: 'secondMarker', labelPart: { setting: 'secondMarker', replaces: 'Second marker' } },
    { name: 'donorAdded', label: 'Donor lot added', kind: 'number', unit: 'kg' },
    { name: 'mixStart', label: 'Start of mixing', kind: 'timer' },
    { name: 'mixEnd', label: 'End of mixing', kind: 'timer' },
  ],
  settings: [
    { name: 'property', label: 'What is mixed to a target (e.g. fines below 125 µm, assay, alcohol strength)', kind: 'text' },
    { name: 'unit', label: 'Unit of the value', kind: 'text' },
    { name: 'target', label: 'Target of the mix', kind: 'quantity', notBatch: 'tolerance' },
    { name: 'scale', label: 'Scale', kind: 'text', options: ['ethanol % v/v'], optional: true },
    { name: 'basisMain', label: 'Basis of the main lot value (e.g. as is, anhydrous)', kind: 'text', optional: true },
    { name: 'basisDonor', label: 'Basis of the donor lot value', kind: 'text', optional: true },
    { name: 'basisTarget', label: 'Basis of the target', kind: 'text', optional: true },
    { name: 'secondMarker', label: 'Second marker (e.g. a second isomer, an impurity)', kind: 'text', optional: true },
    { name: 'secondUnit', label: 'Unit of the second marker', kind: 'text', optional: true },
    { name: 'secondLimit', label: 'Second marker limits for the mix', kind: 'limit', optional: true },
    { name: 'tolerance', label: 'Donor quantity added (± % of the quantity shown)', kind: 'number' },
    { name: 'mixTimeLimit', label: 'Mixing time limits', kind: 'limit' },
  ],
  calcs: [
    { name: 'donor', label: 'Donor lot to add', template: 'T26', args: { mass: '$mainMass', a: '$mainValue', b: '$donorValue', target: '$target', property: '$property', scale: '$scale?',
      basis: { a: '$basisMain?', b: '$basisDonor?', target: '$basisTarget?' }, others: [{ name: '$secondMarker?', a: '$mainSecond?', b: '$donorSecond?', limit: '$secondLimit?' }], unit: 'kg' } },
    { name: 'addedCheck', label: 'Donor added against the quantity shown', template: 'C1', args: { value: '$donorAdded', around: { centre: '$donor', name: 'target', plusMinusPercent: '$tolerance' } } },
    { name: 'mixTime', label: 'Mixing time', template: 'T13', args: { mode: 'duration', start: '$mixStart', end: '$mixEnd', limit: '$mixTimeLimit' } },
  ],
};
