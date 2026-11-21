import type { Block, BlockField } from './format.js';

// Fix 1121 B2: dissolution of an extended (modified) release tablet as an in-process test of the QC lab: a profile of
// up to four time points (e.g. 1 h, 4 h, 8 h), each with its own range in % of label claim, judged in stages L1, L2, L3
// (6, 6 more, 12 more units) as the pharmacopoeia's acceptance table for extended release says (C6 'dissolution ER').
// Each time point is its own staged list picked from LIMS (the step's lab request, one test per time point:
// 'dissolution-er.t1', 'dissolution-er.t2' ...), the units in the same order at every time point. Time points 2 to 4
// are asked for only when the master names them.
const POINTS = [1, 2, 3, 4] as const;
const stagesOf = (n: number): BlockField[] => {
  const at = `Dissolved at time point ${n}`;
  const common = { kind: 'number', unit: '%', qc: 'in_process', figure: 'mean', labelPart: { setting: `time${n}`, replaces: `time point ${n}` }, ...(n > 1 ? { when: `time${n}` } : {}) } as const;
  return [
    { name: `t${n}`, label: `${at}, 6 units (% of label claim)`, count: 6, nextStage: `t${n}More`, ...common, ...(n > 1 ? { optional: true } : {}) },
    { name: `t${n}More`, label: `${at}, 6 more units (% of label claim)`, count: 6, optional: true, nextStage: `t${n}Last`, ...common },
    { name: `t${n}Last`, label: `${at}, 12 more units (% of label claim)`, count: 12, optional: true, ...common },
  ];
};

export const dissolutionEr: Block = {
  id: 'dissolution-er', version: 1, name: 'Dissolution profile, extended release (QC lab)', checker: true,
  instruction: 'Take the units for dissolution as the sampling plan says, label them and send them to QC. Pick the results of every time point from LIMS once QC has approved them; if a stage does not pass and QC tested more units, pick those too (typed from the QC report only while LIMS cannot be reached).',
  fields: POINTS.flatMap(stagesOf),
  settings: [
    ...POINTS.flatMap((n) => [
      { name: `time${n}`, label: `Time point ${n} (e.g. ${['1 h', '4 h', '8 h', '12 h'][n - 1]})`, kind: 'text' as const, ...(n > 1 ? { optional: true } : {}) },
      { name: `limit${n}`, label: `Time point ${n}: range (% of label claim)`, kind: 'limit' as const, ...(n > 1 ? { optional: true } : {}) },
    ]),
    { name: 'medium', label: 'Apparatus, medium and volume (as the specification says)', kind: 'text', optional: true },
  ],
  calcs: [
    { name: 'stages', label: 'Dissolution profile', template: 'C6', args: { test: 'dissolution ER', points: POINTS.map((n) => (n === 1
      ? { time: '$time1', limit: '$limit1', stages: ['$t1', '$t1More?', '$t1Last?'] }
      : { time: `$time${n}?`, limit: `$limit${n}?`, stages: [`$t${n}?`, `$t${n}More?`, `$t${n}Last?`] })) } },
  ],
};
