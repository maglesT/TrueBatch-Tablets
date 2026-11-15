/**
 * T26 Mix to a target: how much of a donor lot to add to bring a property of the main lot to a target.
 *
 * Mass balance (the property is a mass-weighted average, e.g. a % size fraction, an assay, an LOD):
 *   (mA × a + x × b) ÷ (mA + x) = t   →   x = mA × (t − a) ÷ (b − t)
 * The donor must lie on the far side of the target from the main lot (a < t < b, or b < t < a);
 * otherwise no amount of donor can reach the target, and the template refuses.
 */
import { defaultDecimals, Dec, fmt, needKind, parse, refuse, run, sameKind, show, to, type Outcome, type Q } from './core.js';
import type { Limit } from './rounding.js';
import { checkOf } from './core.js';

export interface T26Input {
  /** Mass of the main lot (A). */
  readonly mass: Q;
  /** The property of A, e.g. "28.0 %" fines. */
  readonly a: Q;
  /** The same property of the donor lot (B). */
  readonly b: Q;
  /** The target for the mix. */
  readonly target: Q;
  /** What the property is, for the worked line ("fines below 125 µm", "assay", "LOD"). */
  readonly property?: string;
  readonly unit?: string;
  readonly decimals?: number;
  readonly limit?: Limit;
}

export function t26MixToTarget(i: T26Input): Outcome<{ readonly totalMass: Dec }> {
  return run(() => {
    const m = parse(i.mass, 'The mass of the main lot');
    needKind(m, ['mass'], 'The mass of the main lot');
    if (!m.v.isPositive() || m.v.isZero()) refuse('The mass of the main lot must be more than zero');
    const a = parse(i.a, 'The value of the main lot');
    const b = parse(i.b, 'The value of the donor lot');
    const t = parse(i.target, 'The target');
    sameKind([a, b, t], 'Mix to a target');
    if (a.unit.kind === 'temperature') refuse('Temperatures are not mixed by mass balance');
    const av = to(a, t.unit);
    const bv = to(b, t.unit);
    const what = i.property ?? 'the value';
    const u = i.unit === undefined ? m.unit : (needKind({ v: new Dec(0), unit: parse(`0 ${i.unit}`, 'unit').unit, text: '' }, ['mass'], 'The result unit'), parse(`0 ${i.unit}`, 'unit').unit);
    const dp = i.decimals ?? defaultDecimals(u.symbol);
    if (av.eq(t.v)) {
      const zero = new Dec(0);
      return { ok: true, value: zero, unit: u.symbol, totalMass: to(m, u), shown: `${what} of the main lot (${a.text}) is already at the target ${t.text}: add nothing`, ...checkOf(zero, u.symbol, i.limit) };
    }
    const up = t.v.minus(av);
    const down = bv.minus(t.v);
    if (down.isZero() || up.isNegative() !== down.isNegative()) {
      refuse(
        `The donor lot (${b.text}) is not on the far side of the target ${t.text} from the main lot (${a.text}): ` +
          `no amount of it can bring ${what} to the target. Choose a donor ${up.isNegative() ? 'below' : 'above'} ${t.text}`,
      );
    }
    const value = to(m, u).times(up).div(down);
    const totalMass = to(m, u).plus(value);
    const shown =
      `${m.text} × (${t.text} − ${a.text}) ÷ (${b.text} − ${t.text}) = ${show(value, u.symbol, dp)} of the donor lot; ` +
      `mix ${show(totalMass, u.symbol, dp)} at ${what} ${fmt(t.v, Math.max(1, dp - 1))} ${t.unit.symbol}`;
    return { ok: true, value, unit: u.symbol, totalMass, shown, ...checkOf(value, u.symbol, i.limit) };
  });
}
