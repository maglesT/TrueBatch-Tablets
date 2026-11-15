/**
 * The block description format. A block is DATA: the fields a person records, the settings a master step fills, the
 * templates it applies to them, its default instruction and signatures. One engine runs every block the same way; a
 * new block is a new description file (listed in index.ts).
 *
 * Calculation arguments are the template's own input object, written as JSON. A string "$name" is replaced by the
 * value of this step's field, setting or earlier calculation of that name; everything else is passed as written.
 */
import { z } from 'zod';
import { findUnit } from '../templates/index.js';
import { TEMPLATES } from '../engine/templates.js';

const name = z.string().regex(/^[a-z][a-zA-Z0-9]{0,39}$/);

export const FIELD_KINDS = ['number', 'text', 'yes-no', 'choice', 'timer', 'lot', 'machine', 'room'] as const;
export const fieldSchema = z.object({
  name,
  label: z.string().min(1),
  kind: z.enum(FIELD_KINDS),
  // number: the unit from the unit list, or "$setting" when the master step names it.
  unit: z.string().optional(),
  // number: a list of exactly this many readings (e.g. 20 tablet weights).
  count: z.number().int().min(2).max(100).optional(),
  // choice: the fixed list.
  options: z.array(z.string().min(1)).optional(),
  optional: z.boolean().optional(),
}).strict();

export const SETTING_KINDS = ['quantity', 'limit', 'number', 'text', 'material'] as const;
export const settingSchema = z.object({
  name,
  label: z.string().min(1),
  kind: z.enum(SETTING_KINDS),
  optional: z.boolean().optional(),
}).strict();

export const calcSchema = z.object({
  name,
  label: z.string().min(1),
  template: z.string(),
  args: z.record(z.unknown()),
}).strict();

export const blockSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]{0,39}$/),
  version: z.number().int().min(1),
  name: z.string().min(1),
  instruction: z.string().min(1),
  // TB-08: weighing, charge-in and yield always need a second-person check.
  gmp: z.enum(['weighing', 'charge-in', 'yield']).optional(),
  // Default signatures: the performer always signs; a second person checks when true.
  checker: z.boolean(),
  fields: z.array(fieldSchema).min(1),
  settings: z.array(settingSchema),
  calcs: z.array(calcSchema),
  // For repeat-until: the calculation whose check stops the rounds (the master step may name another).
  stop: name.optional(),
  // Rounds every N minutes (periodic in-process checks); the master may not set more than maxMinutes (TB-15).
  periodic: z.object({ maxMinutes: z.number().int().positive() }).strict().optional(),
}).strict();

export type BlockField = z.infer<typeof fieldSchema>;
export type BlockSetting = z.infer<typeof settingSchema>;
export type Block = z.infer<typeof blockSchema>;

/** The "$name" strings inside calculation arguments. */
export function refsIn(x: unknown): string[] {
  if (typeof x === 'string') return x.startsWith('$') ? [x.slice(1)] : [];
  if (Array.isArray(x)) return x.flatMap(refsIn);
  if (x && typeof x === 'object') return Object.values(x).flatMap(refsIn);
  return [];
}

/** Problems in a block description; empty when it can be used. */
export function blockProblems(b: Block): string[] {
  const p: string[] = [];
  const parsed = blockSchema.safeParse(b);
  if (!parsed.success) return parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`);
  const names = new Set<string>();
  for (const x of [...b.fields, ...b.settings, ...b.calcs]) {
    if (names.has(x.name)) p.push(`"${x.name}" is used twice`);
    names.add(x.name);
  }
  const settings = new Set(b.settings.map((s) => s.name));
  for (const f of b.fields) {
    if (f.kind === 'number' && !f.unit) p.push(`field ${f.name}: a number needs a unit`);
    if (f.unit?.startsWith('$') ? !settings.has(f.unit.slice(1)) : f.unit !== undefined && !findUnit(f.unit)) p.push(`field ${f.name}: unknown unit ${f.unit}`);
    if (f.kind === 'choice' && !f.options?.length) p.push(`field ${f.name}: a choice needs options`);
  }
  const known = new Set([...b.fields.map((f) => f.name), ...b.settings.map((s) => s.name)]);
  for (const c of b.calcs) {
    if (!(c.template in TEMPLATES)) p.push(`calculation ${c.name}: unknown template ${c.template}`);
    for (const r of refsIn(c.args)) if (!known.has(r)) p.push(`calculation ${c.name}: "$${r}" is not a field, setting or earlier calculation`);
    known.add(c.name);
  }
  if (b.stop && !b.calcs.some((c) => c.name === b.stop)) p.push(`stop: no calculation ${b.stop}`);
  return p;
}
