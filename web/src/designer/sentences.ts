// The calculations and checks of a block written as sentences, never as formulas. A sentence is a list of parts:
// plain words, a field the operator records, a calculation worked out earlier, or a setting the master fills (a slot).
import type { Block } from '../../../shared/blocks/index.js';
import { findBlock } from '../../../shared/blocks/index.js';
import type { Limit, MasterDoc, SettingValue } from '../../../shared/master/schema.js';
import { HEADER_LABEL, unitLabel } from './model.js';

export type Part = string | { setting: string } | { field: string } | { calc: string } | { prev: string };
type Calc = Block['calcs'][number];

/** One input of a calculation as a part: "$gross" is a field, "$target" a setting, "$net" an earlier calculation. */
function input(block: Block, x: unknown): Part {
  if (typeof x !== 'string' || !x.startsWith('$')) return String(x);
  const raw = x.slice(1).replace(/\?$/, '');
  if (raw.startsWith('prev.')) return { prev: raw.slice(5) };
  if (block.settings.some((s) => s.name === raw)) return { setting: raw };
  if (block.fields.some((f) => f.name === raw)) return { field: raw };
  return { calc: raw };
}

export function sentence(block: Block, c: Calc): Part[] {
  const a = c.args as Record<string, unknown>;
  const p = (x: unknown) => input(block, x);
  const limit = (pre = '; it must be within ') => (a.limit === undefined ? [] : [pre, p(a.limit)]);
  const label = c.label.toLowerCase();
  switch (c.template) {
    case 'T1': return [`The ${label} is `, p(a.a), ' minus ', p(a.b), '.'];
    case 'T3': return [`The ${label} is `, p(a.actual), ' as a percentage of ', p(a.theoretical), ...limit(), '.'];
    case 'T4': {
      const parts = (a.parts as { value: unknown }[]).flatMap((x, i) => [i ? ' + ' : '', p(x.value)]);
      return [`The ${label} is `, ...parts, ' as a percentage of ', p(a.input), ...limit('; when limits are set, it must be within '), '.'];
    }
    case 'T5': return [`The ${label} is the ${a.mode === 'loss' ? 'loss' : 'gain'} from `, p(a.before), ' to ', p(a.after),
      `, as a percentage of ${a.base === 'start' ? 'the starting weight' : a.base === 'final' ? 'the final weight' : 'the named stage'}`, ...limit(), '.'];
    case 'T7': return [`The ${label} is the mean of `, p(a.readings), ...limit(', which must be within '), '.'];
    case 'C1': {
      const around = a.around as { centre: unknown; plusMinusPercent?: unknown; plusMinus?: unknown } | undefined;
      if (around) return [p(a.value), ' must be within ± ', p(around.plusMinusPercent ?? around.plusMinus), around.plusMinusPercent ? ' % of ' : ' of ', p(around.centre), '.'];
      return [p(a.value), ' must be within ', p(a.limit), '.'];
    }
    case 'C3': {
      const band = a.band as { plusMinusPercent: unknown }; const outer = a.outer as { plusMinusPercent: unknown } | undefined;
      return ['Each of ', p(a.readings), ' must be within ± ', p(band.plusMinusPercent), ` % of the mean, with at most ${String(a.allowedOutside ?? 0)} outside`,
        ...(outer ? [', and none outside ± ', p(outer.plusMinusPercent), ' %'] : []), '.'];
    }
    case 'C4': return [`${String(a.question)}: the answer must be "${(a.expected as string[]).join('" or "')}".`];
    case 'F2': return [p(a.current), ' must not differ by more than ', p((a.limit as { maxChange: unknown }).maxChange), ' from the previous round.'];
    default: return [`The ${label} is worked out from `, ...Object.values(a).flatMap((x, i) => [i ? ', ' : '', p(x)]), '.'];
  }
}

/** The settings a block's sentences show as slots; the others are asked for on their own. */
export function slotsOf(block: Block): Set<string> {
  return new Set(block.calcs.flatMap((c) => sentence(block, c)).flatMap((x) => (typeof x === 'object' && 'setting' in x ? [x.setting] : [])));
}

export function limitText(l: Limit): string {
  const u = l.unit === '' ? '' : ` ${l.unit}`;
  const low = l.low ? `${l.lowStrict ? 'more than' : 'at least'} ${l.low}${u}` : '';
  const high = l.high ? `${l.highStrict ? 'less than' : 'at most'} ${l.high}${u}` : '';
  if (l.low && l.high && !l.lowStrict && !l.highStrict) return `${l.low} to ${l.high}${u}`;
  return [low, high].filter(Boolean).join(' and ') || 'no limits';
}

/** A setting's value in words. */
export function settingText(doc: MasterDoc, v: SettingValue | undefined): string {
  if (v === undefined) return '(not set)';
  if (typeof v === 'string') return v.trim() === '' ? '(empty)' : v;
  if ('unit' in v) return limitText(v);
  if ('formula' in v) {
    const l = doc.formula.find((x) => x.key === v.formula);
    return `the batch quantity of ${l?.name || v.formula}${v.adjusted ? ', adjusted for the lot' : ''}`;
  }
  if ('header' in v) return HEADER_LABEL[v.header].label;
  const [sk, tk, name] = v.ref.split('/');
  const s = doc.stages.find((x) => x.key === sk);
  const t = s?.steps.find((x) => x.key === tk);
  const b = t && findBlock(t.block);
  const what = b ? [...b.fields, ...b.calcs].find((x) => x.name === name)?.label : undefined;
  return `the ${(what ?? name ?? '').toLowerCase()} of step ${b?.name ?? tk} in ${s?.name ?? sk}`;
}

/** A whole sentence in words, with the master's settings filled in (for the review view). */
export function sentenceText(doc: MasterDoc, block: Block, settings: Record<string, SettingValue>, parts: Part[]): string {
  const label = (n: string) => [...block.fields, ...block.calcs].find((x) => x.name === n)?.label.toLowerCase() ?? n;
  return parts.map((x) => (typeof x === 'string' ? x
    : 'setting' in x ? settingText(doc, settings[x.setting])
    : 'field' in x ? `the ${label(x.field)}`
    : 'calc' in x ? `the ${label(x.calc)}`
    : `the previous round's ${label(x.prev)}`)).join('').replace(/^the /, 'The ');
}

export { unitLabel };
