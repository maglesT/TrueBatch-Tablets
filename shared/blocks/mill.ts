import type { Block } from './format.js';

// Mill (comminute) to the size the screen gives: the screen is the master's and is checked as shown and intact before and
// after (C4, as the sieve block); the weight fed, milled and rejected is accounted for (T4). The particle size of the
// milled material is a lab test (the lab tests block) or a sieve analysis, as the master chooses.
export const mill: Block = {
  id: 'mill', version: 1, name: 'Mill to a size', checker: true,
  instruction: 'Check that the screen is the one shown and intact. Mill the material, check the screen again, and weigh what was fed, what was milled and the rejects.',
  fields: [
    { name: 'machine', label: 'Mill', kind: 'machine', types: ['mill', 'pulveri', 'comminut'] },
    { name: 'screenOk', label: 'Screen or knife as shown', kind: 'yes-no' },
    { name: 'intactBefore', label: 'Screen intact before use', kind: 'yes-no' },
    { name: 'intactAfter', label: 'Screen intact after use', kind: 'yes-no' },
    { name: 'speed', label: 'Mill speed', kind: 'number', unit: 'rpm', optional: true },
    { name: 'feedWeight', label: 'Weight fed to the mill', kind: 'number', unit: 'kg' },
    { name: 'milledWeight', label: 'Weight milled', kind: 'number', unit: 'kg' },
    { name: 'rejects', label: 'Rejects (oversize, not milled)', kind: 'number', unit: 'kg', optional: true },
  ],
  settings: [
    { name: 'screen', label: 'Screen (aperture) or knife', kind: 'text' },
    { name: 'speedLimit', label: 'Mill speed limits', kind: 'limit', optional: true },
    { name: 'accountabilityLimit', label: 'Accountability limits (milled and rejects of the weight fed)', kind: 'limit' },
  ],
  calcs: [
    { name: 'screenCheck', label: 'Screen', template: 'C4', args: { question: 'Screen or knife as shown', answers: ['$screenOk'], expected: ['yes'] } },
    { name: 'integrity', label: 'Screen integrity', template: 'C4', args: { question: 'Screen intact before and after use', answers: ['$intactBefore', '$intactAfter'], expected: ['yes'] } },
    { name: 'speedCheck', label: 'Mill speed', template: 'C1', args: { value: '$speed', limit: '$speedLimit' } },
    { name: 'accountability', label: 'Accountability', template: 'T4', args: { input: '$feedWeight', parts: [{ name: 'milled', value: '$milledWeight' }, { name: 'rejects', value: '$rejects?' }], limit: '$accountabilityLimit' } },
  ],
};
