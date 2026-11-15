/** The block library: each block is a description file; a new block (or a new version of one) is a new file here. */
import type { Block } from './format.js';
import { charge } from './charge.js';
import { check } from './check.js';
import { coat } from './coat.js';
import { compress } from './compress.js';
import { dry } from './dry.js';
import { dryConstant } from './dry-constant.js';
import { granulate } from './granulate.js';
import { mix } from './mix.js';
import { sieve } from './sieve.js';
import { stageYield } from './stage-yield.js';
import { weigh } from './weigh.js';

export type { Block, BlockField, BlockSetting } from './format.js';
export const BLOCKS: readonly Block[] = [weigh, charge, mix, granulate, dry, dryConstant, sieve, check, compress, coat, stageYield];

export function findBlock(ref: { id: string; version: number }): Block | undefined {
  return BLOCKS.find((b) => b.id === ref.id && b.version === ref.version);
}
