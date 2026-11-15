/**
 * Master checks: pure checks over one master document. Each problem is an error (⛔, the version cannot be approved)
 * or a warning (⚠️), with the path to the item. Template settings are checked by the templates library itself.
 * The calculation checks (calculationChecks below) are error-proofing of the calculations, not GMP rules.
 */
import { findBlock, type Block } from '../blocks/index.js';
import { Dec, c1WithinLimits, findUnit, t10Compensating, t11SaltFactor, t2Total, type Q } from '../templates/index.js';
import { lineQuantity } from '../engine/values.js';
import type { Answer, FormulaLine, MasterDoc, SettingValue } from './schema.js';

/** A warning the author answers: one of the options, with a reason when `needsReason`. */
export interface Question { key: string; options: string[]; needsReason: boolean; answer?: Answer }
export interface Problem { level: 'error' | 'warning'; path: string; message: string; rule?: string; question?: Question }

/** What stops "Send for review" and approval: an error, or a warning that needs an answer and has none. */
export const blocking = (p: Problem) => p.level === 'error' || (p.question !== undefined && !p.question.answer);

const QUANTITY = /^[+-]?(\d+(\.\d*)?|\.\d+)\s*(\S.*)?$/;
const DECIMAL = /^\d+(\.\d+)?$/;
// Neutral certificate values for checking a formula line's adjustment settings with the templates themselves.
const SAMPLE = { assay: { value: '100.0', unit: '%' }, water: { value: '0', unit: '%' }, lod: { value: '0', unit: '%' } };
const HERE = { stage: 0, sub: 1, step: 0, round: 1 };

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
    const r = lineQuantity(doc, [], HERE, { ...l, adjust: { ...a, compensates: undefined } }, true, values);
    if (!r.ok) error(`formula[${i}].adjust`, r.message, a.potency ? 'TB-13' : undefined);
    // A compensating filler that would go below zero even at the nominal certificate values (salt factor, overage).
    const others = (a.compensates ?? []).map((k) => doc.formula.find((x) => x.key === k)).filter((x): x is FormulaLine => !!x && x.key !== l.key);
    const quantity = (x: FormulaLine, adjusted: boolean) => {
      const r = lineQuantity(doc, [], HERE, x, adjusted, { ...SAMPLE, content: x.adjust?.content?.nominalContent ?? SAMPLE.assay });
      return r.ok ? { value: r.value, unit: r.unit } : undefined;
    };
    const std = quantity(l, false);
    const adj = others.map((x) => ({ name: x.name, standard: quantity(x, false), adjusted: quantity(x, true) }));
    if (std && adj.length && adj.every((x) => x.standard && x.adjusted)) {
      const t10 = t10Compensating({ fillers: [{ name: l.name, standard: std }], adjusted: adj as { name: string; standard: Q; adjusted: Q }[] });
      if (!t10.ok) error(`formula[${i}].adjust.compensates`, `At the nominal certificate values: ${t10.message.replace(/; raise a deviation$/, '')}`, 'TB-13');
    }
  });
  calculationChecks(doc, out);

  twice(doc.stages.map((s) => s.key), 'stages');
  doc.stages.forEach((s, si) => {
    const path = `stages[${si}]`;
    twice(s.steps.map((t) => t.key), `${path}.steps`);
    if (s.kind === 'sub-batch' && !s.count) error(path, 'A sub-batch stage needs the number of sub-batches');
    if (s.produces && !s.produces.holdHours) error(`${path}.produces`, `The intermediate ${s.produces.name} has no hold time`, 'TB-01');
    if (s.kind !== 'preparation' && !s.steps.some((t) => findBlock(t.block)?.gmp === 'yield')) error(path, `Stage ${s.name} has no yield step`);
    if (s.kind === 'preparation' && !doc.stages.some((x) => x.uses.includes(s.key))) warn(path, `No stage uses the preparation ${s.name}`);
    // TB-10: a stage worked in a room starts with line clearance.
    const clearance = s.steps.findIndex((t) => findBlock(t.block)?.gmp === 'line-clearance');
    if (s.roomTypes.length && clearance < 0) error(path, `Stage ${s.name} is worked in a room but has no line clearance step`, 'TB-10');
    if (clearance > 0) warn(`${path}.steps[${clearance}]`, `Line clearance is not the first step of ${s.name}`);
    for (const u of s.uses) {
      const pi = doc.stages.findIndex((x) => x.key === u);
      if (pi < 0 || pi >= si) error(`${path}.uses`, `${u} is not an earlier stage`);
      else if (!doc.stages[pi]!.produces) error(`${path}.uses`, `Stage ${doc.stages[pi]!.name} produces no intermediate`);
    }
    s.steps.forEach((st, ti) => {
      const p = `${path}.steps[${ti}]`;
      const block = findBlock(st.block);
      if (!block) return void error(`${p}.block`, `No block ${st.block.id} version ${st.block.version}`);
      if (!st.checker && (block.gmp || st.critical)) error(p, `${block.gmp ? `A ${block.gmp.replace('line-clearance', 'line clearance')} step` : 'A critical step'} needs a second-person check`, 'TB-08');
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

// Calculation checks (owner decision of 15 November 2026). Not GMP rules: error-proofing of the calculations while the
// master is built. The refusals (water counted twice, potency as parent or element with a salt factor, molecules per
// salt unit, negative filler, IU or CFU as a mass) come from the templates through the formula checks above. These
// warnings need an answer, kept in the master document under their key; the answer counts while the warning reads the
// same as when it was answered.
const SALT_WORD = /\b(hydrochloride|hcl|hydrobromide|sodium|potassium|calcium|magnesium|zinc|maleate|fumarate|hemifumarate|succinate|tartrate|besylate|besilate|mesylate|mesilate|citrate|phosphate|sulfate|sulphate|acetate|bromide|chloride|nitrate|lactate|gluconate|tosylate|oxalate|malate|carbonate|oxide)\b/i;
const HERBAL = /\b(extracts?|herbs?|herbal|botanical|churna|tincture|oleoresin)\b|\b(leaf|leaves|roots?|rhizomes?|bark|seeds?|fruits?|flowers?)\s+powder\b/i;
const RATIO = /\d+(\.\d+)?\s*(:\s*\d+(\.\d+)?|%(\s*w\/w)?)/;

function calculationChecks(doc: MasterDoc, out: Problem[]): void {
  const ask = (path: string, key: string, message: string, options: string[], needsReason = false) => {
    const a = doc.answers?.[key];
    const ok = a && a.about === message && options.includes(a.choice) && (!needsReason || a.reason.trim() !== '');
    out.push({ level: 'warning', path, message, question: { key, options, needsReason, ...(ok ? { answer: a } : {}) } });
  };
  const apis = doc.formula.filter((l) => l.role === 'api');
  // (d) the API adjusted for potency at dispensing, then set again from an in-process granule or blend assay
  const atDispensing = apis.find((l) => l.adjust?.potency || (l.adjust?.content && l.adjust.content.contentSource !== 'in-process result'));
  doc.formula.forEach((l, i) => {
    const salt = l.adjust?.salt;
    // (a) the label basis for this master's market
    if (l.role === 'api' && (salt || SALT_WORD.test(l.name))) {
      const formulaForm = salt?.from.name || l.name;
      const other = salt ? salt.to.name || 'the dispensed form' : 'the base, acid or element';
      ask(`formula[${i}]`, `label-basis/${l.key}`, `Label claim for this master's market: is the strength of ${l.name} stated as ${formulaForm} or as ${other}? The formula gives ${l.mgPerTablet} mg of ${formulaForm} per tablet.`, [`as ${formulaForm}`, `as ${other}`]);
    }
    // (b) a herbal or extract line
    if (l.role !== 'solvent' && HERBAL.test(l.name)) {
      ask(`formula[${i}]`, `herbal/${l.key}`, `${l.name} is a herbal or extract line: is ${l.mgPerTablet} mg per tablet the raw-herb equivalent or the weight of the extract?`, ['raw-herb equivalent', 'extract weight']);
    }
    if (atDispensing && l.adjust?.content?.contentSource === 'in-process result') {
      ask(`formula[${i}].adjust`, `double-adjustment/${l.key}`, `${atDispensing.name} is adjusted for its potency at dispensing, and ${l.name} is set again from an in-process granule or blend assay (T18): the potency would be corrected twice. Confirm that this is intended, with a reason, or remove one of the adjustments.`, ['intended'], true);
    }
    // (e) a salt factor written in the formula that differs from the molecular weights by more than 0.5 %
    const t11 = salt?.factor ? t11SaltFactor({ quantity: '1 kg', from: salt.from, to: salt.to }) : undefined;
    if (salt?.factor && t11?.ok) {
      const off = new Dec(salt.factor).minus(t11.factor).abs().div(t11.factor).times(100);
      if (off.gt('0.5')) {
        ask(`formula[${i}].adjust.salt`, `salt-factor/${l.key}`, `The salt factor ${salt.factor} written for ${l.name} differs by ${off.toFixed(1, Dec.ROUND_HALF_UP)} % from the molecular weights of ${salt.from.name} and ${salt.to.name} (factor ${t11.factor.toFixed(4, Dec.ROUND_HALF_UP)}), which the batch quantity uses. Confirm with a reason, or correct the factor or the molecular weights.`, ['confirmed'], true);
      }
    }
  });
  // (c) a ratio or % in a step instruction that involves the API
  doc.stages.forEach((s, si) => s.steps.forEach((t, ti) => {
    const m = RATIO.exec(t.instruction ?? '');
    const text = (t.instruction ?? '').toLowerCase();
    const api = m && apis.find((l) => Object.values(t.settings).some((v) => typeof v === 'object' && 'formula' in v && v.formula === l.key) || text.includes(l.name.toLowerCase()));
    if (m && api) {
      ask(`stages[${si}].steps[${ti}]`, `ratio-basis/${s.key}/${t.key}`, `The instruction gives "${m[0]}" with ${api.name}: on which basis is the ${api.name} quantity taken?`, ['as weighed', 'as base', 'as anhydrous']);
    }
  }));
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
