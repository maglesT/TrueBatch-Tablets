/**
 * A master version is ONE JSON document: the header, the formula, and the stages in order with their steps in order.
 * This schema checks only its shape; whether it makes a good master is for checks.ts. A draft may be incomplete.
 */
import { z } from 'zod';

const decimal = z.string().regex(/^\d+(\.\d+)?$/, 'a plain decimal, e.g. "250.0"');
export const keySchema = z.string().regex(/^[a-z0-9][a-z0-9-]{0,39}$/, 'lower-case letters, digits and -');
const text = (max = 200) => z.string().trim().max(max);

export const limitSchema = z.object({
  low: z.string().optional(), high: z.string().optional(), unit: z.string(),
  lowStrict: z.boolean().optional(), highStrict: z.boolean().optional(),
  alertLow: z.string().optional(), alertHigh: z.string().optional(),
}).strict();

// A step setting: a value as written ("0.5", "250.0 mg"), a limit, or a reference to an earlier step's field or
// calculation ("stage/step/name"), to a formula line (its batch quantity, adjusted when asked) or to the header.
export const HEADER_VALUES = ['batchSize', 'coreWeight', 'coatedWeight', 'coreBatch', 'coatedBatch'] as const;
export const settingValueSchema = z.union([
  text(),
  limitSchema,
  z.object({ ref: z.string().regex(/^[a-z0-9-]+\/[a-z0-9-]+\/[a-zA-Z0-9]+$/, 'stage/step/name') }).strict(),
  z.object({ formula: keySchema, adjusted: z.boolean().optional() }).strict(),
  z.object({ header: z.enum(HEADER_VALUES) }).strict(),
]);

const flowSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('none') }).strict(),
  // Rounds of the same step until the stop check passes, at most maxRounds (then a deviation note is needed).
  z.object({ kind: z.literal('repeat-until'), maxRounds: z.number().int().min(1).max(500).optional(), stop: z.string().optional() }).strict(),
  z.object({ kind: z.literal('optional-with-reason') }).strict(),
  z.object({ kind: z.literal('qa-hold') }).strict(),
]);

export const stepSchema = z.object({
  key: keySchema,
  block: z.object({ id: z.string(), version: z.number().int().min(1) }).strict(),
  instruction: text(4000).optional(),
  settings: z.record(settingValueSchema).default({}),
  // The performer always signs; a second person checks when true.
  checker: z.boolean(),
  // The next step waits for the check (otherwise it opens when this step is done).
  waitForCheck: z.boolean().default(false),
  critical: z.boolean().default(false),
  minMinutes: z.number().int().positive().max(10_000).optional(),
  everyMinutes: z.number().int().positive().max(10_000).optional(),
  flow: flowSchema.default({ kind: 'none' }),
}).strict();

export const stageSchema = z.object({
  key: keySchema,
  name: text().min(1),
  kind: z.enum(['normal', 'preparation', 'sub-batch']),
  count: z.number().int().min(2).max(50).optional(),
  roomTypes: z.array(text()).max(20).default([]),
  machineTypes: z.array(text()).max(50).default([]),
  role: text().default(''),
  produces: z.object({ name: text().min(1), holdHours: z.number().positive().max(100_000).optional() }).strict().optional(),
  // Stages whose intermediate this stage uses (preparations must be closed first; their hold time ends here).
  uses: z.array(keySchema).max(20).default([]),
  steps: z.array(stepSchema).max(200),
}).strict();

const form = z.object({
  name: text().min(1), mw: decimal, moleculesPerUnit: z.number().int().min(1).optional(), hydrateOrSolvate: z.boolean().optional(),
}).strict();

export const lineSchema = z.object({
  key: keySchema,
  materialItemId: z.string().min(1).max(100),
  code: text(),
  name: text(),
  mgPerTablet: decimal,
  // A solvent is removed in processing (granulation water) and is not part of the tablet weight.
  role: z.enum(['api', 'excipient', 'solvent']),
  place: z.enum(['intragranular', 'extragranular', 'binder', 'coating']),
  layer: z.number().int().min(1).max(10).optional(),
  // Settings of the adjustment templates, applied in this order: T11 salt factor, T9 potency or T18 content, T16
  // overage; or, for a filler, T10 compensation of the named lines.
  adjust: z.object({
    // `factor`: the salt factor as written in the formula; only checked against the molecular weights, never used.
    salt: z.object({ from: form, to: form, factor: decimal.optional() }).strict().optional(),
    potency: z.object({
      basis: z.enum(['as is', 'anhydrous', 'dried', 'ignited', 'anhydrous and solvent-free']),
      standardIs: z.enum(['anhydrous', 'hydrate or solvate']).optional(),
      assayExpressedAs: z.enum(['anhydrous substance', 'hydrate']).optional(),
      potencyAs: z.enum(['parent', 'element']).optional(),
      assayAbove100: z.enum(['use', 'treat as 100']).optional(),
    }).strict().optional(),
    content: z.object({
      formulaQuantityIs: z.enum(['dry', 'wet']), nominalContent: z.string().optional(), contentSource: z.enum(['certificate', 'in-process result']).optional(),
    }).strict().optional(),
    overage: z.object({ percent: decimal, maxPercent: decimal.optional() }).strict().optional(),
    compensates: z.array(keySchema).max(20).optional(),
  }).strict().optional(),
}).strict();

export const headerSchema = z.object({
  productItemId: z.string().min(1).max(100),
  productCode: text(),
  productName: text(),
  batchSize: z.string().regex(/^[1-9]\d{0,9}$/, 'a whole number of tablets'),
  coreWeightMg: decimal,
  coatedWeightMg: decimal.optional(),
}).strict();

// The author's answer to a calculation warning (checks.ts), keyed by the warning and its item. `about` is the warning
// as answered: when the warning reads differently (the item changed), it needs a new answer.
export const answerSchema = z.object({ about: text(1000), choice: text().min(1), reason: text(1000) }).strict();

export const masterSchema = z.object({
  header: headerSchema,
  formula: z.array(lineSchema).max(100),
  stages: z.array(stageSchema).max(50),
  answers: z.record(z.string().max(120), answerSchema).optional(),
}).strict();

export type MasterDoc = z.infer<typeof masterSchema>;
export type Stage = z.infer<typeof stageSchema>;
export type Step = z.infer<typeof stepSchema>;
export type FormulaLine = z.infer<typeof lineSchema>;
export type SettingValue = z.infer<typeof settingValueSchema>;
export type Limit = z.infer<typeof limitSchema>;
export type Answer = z.infer<typeof answerSchema>;

export const MASTER_STATES = ['draft', 'in_review', 'approved', 'effective', 'retired'] as const;
export type MasterState = (typeof MASTER_STATES)[number];
