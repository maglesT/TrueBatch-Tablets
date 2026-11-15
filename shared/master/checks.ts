/**
 * Master checks: pure checks over one master document. Each problem is an error (⛔, the version cannot be approved)
 * or a warning (⚠️), with the path to the item. Template settings are checked by the templates library itself.
 */
import { findBlock, type Block } from '../blocks/index.js';
import { Dec, c1WithinLimits, findUnit, t2Total } from '../templates/index.js';
import { lineQuantity } from '../engine/values.js';
import type { MasterDoc, SettingValue } from './schema.js';

export interface Problem { level: 'error' | 'warning'; path: string; message: string; rule?: string }

const QUANTITY = /^[+-]?(\d+(\.\d*)?|\.\d+)\s*(\S.*)?$/;
const DECIMAL = /^\d+(\.\d+)?$/;
// Neutral certificate values for checking a formula line's adjustment settings with the templates themselves.
const SAMPLE = { assay: { value: '100.0', unit: '%' }, water: { value: '0', unit: '%' }, lod: { value: '0', unit: '%' } };

export function masterChecks(doc: MasterDoc): Problem[] {
  const out: Problem[] = [];
  const error = (path: string, message: string, rule?: string) => out.push({ level: 'error', path, message, ...(rule ? { rule } : {}) });
  const warn = (path: string, message: string) => out.push({ level: 'warning', path, message });
  const twice = (keys: string[], path: string) => keys.forEach((k, i) => keys.indexOf(k) !== i && error(`${path}[${i}]`, `The key ${k} is used twice`));

  // The formula: the core materials (not coating, not a solvent removed in processing) make the core weight.
  twice(doc.formula.map((l) => l.key), 'formula');
  const core = doc.formula.filter((l) => l.place !== 'coating' && l.role !== 'solvent');
  const total = t2Total({ values: core.map((l) => `${l.mgPerTablet} mg`), unit: 'mg' });
  if (!core.length) error('formula', 'The formula has no core materials');
  else if (total.ok && !total.value.eq(new Dec(doc.header.coreWeightMg))) {
    error('formula', `The core materials add up to ${total.value.toString()} mg per tablet, not the theoretical core weight ${doc.header.coreWeightMg} mg`);
  }
  if (doc.header.coatedWeightMg && new Dec(doc.header.coatedWeightMg).lt(doc.header.coreWeightMg)) error('header.coatedWeightMg', 'The coated weight is below the core weight');
  if (doc.formula.some((l) => l.place === 'coating') && !doc.header.coatedWeightMg) error('header.coatedWeightMg', 'A coated product needs the theoretical coated weight');
  doc.formula.forEach((l, i) => {
    const a = l.adjust;
    if (!a) return;
    if (a.potency && a.content) error(`formula[${i}].adjust`, 'A line is adjusted for potency (T9) or for content (T18), not both');
    for (const k of a.compensates ?? []) if (k === l.key || !doc.formula.some((x) => x.key === k)) error(`formula[${i}].adjust.compensates`, `No other formula line ${k} to compensate`);
    const values = { ...SAMPLE, content: a.content?.nominalContent ?? { value: '100.0', unit: '%' } };
    const r = lineQuantity(doc, [], { stage: 0, sub: 1, step: 0, round: 1 }, { ...l, adjust: { ...a, compensates: undefined } }, true, values);
    if (!r.ok) error(`formula[${i}].adjust`, r.message, a.potency ? 'TB-13' : undefined);
  });

  twice(doc.stages.map((s) => s.key), 'stages');
  doc.stages.forEach((s, si) => {
    const path = `stages[${si}]`;
    twice(s.steps.map((t) => t.key), `${path}.steps`);
    if (s.kind === 'sub-batch' && !s.count) error(path, 'A sub-batch stage needs the number of sub-batches');
    if (s.produces && !s.produces.holdHours) error(`${path}.produces`, `The intermediate ${s.produces.name} has no hold time`, 'TB-01');
    if (s.kind !== 'preparation' && !s.steps.some((t) => findBlock(t.block)?.gmp === 'yield')) error(path, `Stage ${s.name} has no yield step`);
    if (s.kind === 'preparation' && !doc.stages.some((x) => x.uses.includes(s.key))) warn(path, `No stage uses the preparation ${s.name}`);
    for (const u of s.uses) {
      const pi = doc.stages.findIndex((x) => x.key === u);
      if (pi < 0 || pi >= si) error(`${path}.uses`, `${u} is not an earlier stage`);
      else if (!doc.stages[pi]!.produces) error(`${path}.uses`, `Stage ${doc.stages[pi]!.name} produces no intermediate`);
    }
    s.steps.forEach((st, ti) => {
      const p = `${path}.steps[${ti}]`;
      const block = findBlock(st.block);
      if (!block) return void error(`${p}.block`, `No block ${st.block.id} version ${st.block.version}`);
      if (!st.checker && (block.gmp || st.critical)) error(p, `${block.gmp ? `A ${block.gmp} step` : 'A critical step'} needs a second-person check`, 'TB-08');
      if (st.critical && st.flow.kind === 'optional-with-reason') error(`${p}.flow`, 'A critical step cannot be optional');
      if (st.waitForCheck && !st.checker) warn(p, 'The next step waits for a check this step does not have');
      for (const bs of block.settings) if (!bs.optional && st.settings[bs.name] === undefined) error(`${p}.settings.${bs.name}`, `${bs.label} is not set`);
      for (const [name, v] of Object.entries(st.settings)) {
        const bs = block.settings.find((x) => x.name === name);
        const why = bs ? settingProblem(doc, si, ti, bs.kind, v) : `The block ${block.name} has no setting ${name}`;
        if (why) error(`${p}.settings.${name}`, why);
      }
      if (st.flow.kind === 'repeat-until') {
        if (!st.flow.maxRounds) error(`${p}.flow`, 'A repeat-until step needs the most rounds allowed');
        const stop = st.flow.stop ?? block.stop;
        if (!stop || !block.calcs.some((c) => c.name === stop)) error(`${p}.flow`, 'A repeat-until step needs a stop check (a calculation of its block)');
      }
      if (st.everyMinutes && st.flow.kind !== 'repeat-until') error(`${p}.everyMinutes`, 'Checks every N minutes need a repeat-until step');
      if (block.periodic && !st.everyMinutes) error(`${p}.everyMinutes`, `${block.name} needs the interval of its periodic checks`, 'TB-15');
      if (block.periodic && st.everyMinutes && st.everyMinutes > block.periodic.maxMinutes) {
        error(`${p}.everyMinutes`, `Periodic checks every ${st.everyMinutes} min: they must be at least every ${block.periodic.maxMinutes} min`, 'TB-15');
      }
    });
  });
  return out;
}

/** Whether a step setting fits its kind, and a reference points at something earlier that exists. */
function settingProblem(doc: MasterDoc, si: number, ti: number, kind: Block['settings'][number]['kind'], v: SettingValue): string | null {
  if (typeof v === 'string') {
    if (kind === 'number') return DECIMAL.test(v) ? null : `"${v}" is not a plain decimal`;
    if (kind === 'quantity') {
      const m = QUANTITY.exec(v);
      return m && findUnit(m[3] ?? '') ? null : `"${v}" is not a number with a unit from the unit list`;
    }
    return kind === 'text' ? null : `A ${kind} cannot be written as text`;
  }
  if ('unit' in v) {
    if (kind !== 'limit') return `A limit is given where a ${kind} is wanted`;
    const r = c1WithinLimits({ value: { value: '0', unit: v.unit }, limit: v });
    return r.ok ? null : r.message;
  }
  if ('formula' in v) {
    if (kind !== 'material' && kind !== 'quantity') return `A formula line is given where a ${kind} is wanted`;
    return doc.formula.some((l) => l.key === v.formula) ? null : `No formula line ${v.formula}`;
  }
  if ('header' in v) {
    if (kind !== 'quantity') return `A header value is given where a ${kind} is wanted`;
    return v.header.startsWith('coated') && !doc.header.coatedWeightMg ? 'The header has no coated weight' : null;
  }
  const [sk, tk, name] = v.ref.split('/') as [string, string, string];
  const ri = doc.stages.findIndex((x) => x.key === sk);
  const target = doc.stages[ri];
  const rt = target?.steps.findIndex((t) => t.key === tk) ?? -1;
  if (!target || rt < 0) return `${v.ref}: no such stage and step`;
  if (ri > si || (ri === si && rt >= ti)) return `${v.ref} comes later than this step`;
  if (ri !== si && target.kind === 'sub-batch') return `${v.ref} is inside the sub-batch stage ${target.name}: refer to it from that stage only`;
  const b = findBlock(target.steps[rt]!.block);
  const names = b ? [...b.fields, ...b.calcs].map((x) => x.name) : [];
  if (!names.includes(name)) return `${v.ref}: step ${tk} has no field or calculation ${name}`;
  return null;
}
