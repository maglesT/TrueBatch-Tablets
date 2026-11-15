/** The block library: each block is a description file; a new block (or a new version of one) is a new file here. */
import type { Block } from './format.js';
import { binderSolution } from './binder-solution.js';
import { blendUniformity } from './blend-uniformity.js';
import { charge } from './charge.js';
import { check } from './check.js';
import { coat } from './coat.js';
import { coatingSuspension } from './coating-suspension.js';
import { compress } from './compress.js';
import { compressionRelease } from './compression-release.js';
import { densityFlow } from './density-flow.js';
import { dryConstant } from './dry-constant.js';
import { dryMix } from './dry-mix.js';
import { dry } from './dry.js';
import { granulate } from './granulate.js';
import { lineClearance } from './line-clearance.js';
import { lubricate } from './lubricate.js';
import { mix } from './mix.js';
import { pressSetup } from './press-setup.js';
import { punchDieCheck } from './punch-die-check.js';
import { sieveAnalysis } from './sieve-analysis.js';
import { sieve } from './sieve.js';
import { sift } from './sift.js';
import { stageYield } from './stage-yield.js';
import { subBatchCombine } from './sub-batch-combine.js';
import { tabletReconciliation } from './tablet-reconciliation.js';
import { weigh } from './weigh.js';

export type { Block, BlockField, BlockSetting } from './format.js';
// In the order of a process: dispensing and preparation, granulation and blending, compression and its tests,
// coating, then the steps of any stage.
export const BLOCKS: readonly Block[] = [
  weigh, charge, sift, binderSolution, coatingSuspension, dryMix, mix, granulate, dry, dryConstant, sieve, lubricate,
  subBatchCombine, blendUniformity, densityFlow, sieveAnalysis, punchDieCheck, pressSetup, compressionRelease,
  compress, coat, check, stageYield, tabletReconciliation, lineClearance,
];

export function findBlock(ref: { id: string; version: number }): Block | undefined {
  return BLOCKS.find((b) => b.id === ref.id && b.version === ref.version);
}
