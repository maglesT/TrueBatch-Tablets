import { describe, expect, it } from 'vitest';
import { findBlock } from '../shared/blocks/index.js';
import { machineRefusal } from '../shared/engine/picks.js';
import { SKELETON_LIST, packingStages, skeletonStages } from '../web/src/designer/skeletons.js';
import { pack } from './packing-fixture.js';

// The equipment and instrument types of the demo master data (owner's list, 15 Nov 2026), with a few real types that
// share a word with them and must not be offered (filter press, air compressor, dry heat steriliser, case packer).
const TYPES = ['Balance', 'Analytical balance', 'Micro balance', 'IPC balance', 'Platform balance', 'Bin blender', 'Blender', 'Auto coater', 'Blister packer',
  'Strip packer', 'High speed blister line', 'Rapid mixer granulator', 'Fluid bed dryer', 'Tablet compression machine', 'Tablet press', 'Cold forming machine',
  'Filter press', 'Air compressor', 'Dry heat steriliser', 'Case packer', 'Sifter', 'Multimill', 'Friabilator', 'Disintegration tester', 'Manufacturing vessel'];
const MACHINES = TYPES.map((type, i) => ({ code: `EQ-${i}`, type, room: null }));
const BALANCES = ['Balance', 'IPC balance', 'Platform balance'];
const BLENDERS = ['Bin blender', 'Blender'];
const LINES = ['Blister packer', 'Strip packer', 'High speed blister line', 'Cold forming machine'];
const OFFERS: Record<string, string[]> = {
  'weigh.balance': BALANCES, 'lubricate.balance': BALANCES, 'lubricate.machine': BLENDERS, 'blend-uniformity.machine': BLENDERS,
  'dry-mix.machine': [...BLENDERS, 'Rapid mixer granulator'], 'granulate.machine': ['Rapid mixer granulator'], 'dry.machine': ['Fluid bed dryer'],
  'compress.machine': ['Tablet compression machine', 'Tablet press'], 'spray-coat.machine': ['Auto coater'], 'sift.machine': ['Sifter'],
  'sieve.machine': ['Sifter', 'Multimill'], 'binder-solution.machine': ['Manufacturing vessel'], 'coating-suspension.machine': ['Manufacturing vessel'],
  'charge.machine': [...BLENDERS, 'Rapid mixer granulator', 'Fluid bed dryer', 'Manufacturing vessel'], 'friability.machine': ['Friabilator'], 'disintegration.machine': ['Disintegration tester'],
  'bulk-issue.line': LINES, 'pack-clearance.line': LINES, 'pack-clearance-after.line': LINES,
};

describe('machine pickers on the demo master-data types', () => {
  const header = { productItemId: 'p', productCode: 'P', productName: 'P', batchSize: '100000', coreWeightMg: '250.0' };
  const stages = [...SKELETON_LIST.flatMap((s) => skeletonStages(s.id, header)), ...packingStages(pack())];

  it('TB-11 every machine field of the skeletons and the packing skeleton offers the machines of its kind, never a QC lab balance', () => {
    const seen = new Set<string>();
    for (const stage of stages) for (const st of stage.steps) {
      for (const f of findBlock(st.block)!.fields.filter((x) => x.kind === 'machine')) {
        const key = `${st.block.id}.${f.name}`;
        seen.add(key);
        expect([key, MACHINES.filter((m) => !machineRefusal(stage, f, m, [])).map((m) => m.type)]).toEqual([key, OFFERS[key]]);
      }
    }
    expect([...seen].sort()).toEqual(Object.keys(OFFERS).sort());
  });

  it('TB-11 an analytical balance is refused on the floor with the reason', () => {
    const stage = stages[0]!;
    const balance = findBlock({ id: 'weigh', version: 1 })!.fields.find((f) => f.name === 'balance')!;
    expect(machineRefusal(stage, balance, { code: 'QC-BAL-1', type: 'Analytical balance', room: null }, [])).toBe('QC-BAL-1 is not a balance (master data: Analytical balance)');
  });
});
