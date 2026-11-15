/**
 * The machines and rooms a step field offers and accepts (owner, 15 Nov 2026), from master data's type, room and area:
 * a machine of the stage's allowed types and of the type the field asks for (a balance field: balances only, never a
 * QC lab analytical or micro balance), standing in a room the stage allows; a room the stage allows by its area or by its own code.
 */
import type { BlockField } from '../blocks/format.js';
import type { Stage } from '../master/schema.js';

export interface PickMachine { code: string; type?: string | null; room?: string | null }
export interface PickRoom { code: string; area?: string | null }
const among = (list: readonly string[], x: string | null | undefined) => list.some((a) => a.toLowerCase() === (x ?? '').toLowerCase());

/** Why a room is not one the stage allows; null when it is. */
export function roomRefusal(stage: Stage, r: PickRoom): string | null {
  return !stage.roomTypes.length || among(stage.roomTypes, r.area) || among(stage.roomTypes, r.code) ? null
    : `${r.code} is not one of the rooms this stage allows (${stage.roomTypes.join(', ')})`;
}

/** Why a machine does not fit the field in this stage; null when it does. */
export function machineRefusal(stage: Stage, f: BlockField, m: PickMachine, rooms: readonly PickRoom[]): string | null {
  if (stage.machineTypes.length && !among(stage.machineTypes, m.type)) return `${m.code} is not one of the machine types this stage allows (${stage.machineTypes.join(', ')})`;
  const type = (m.type ?? '').toLowerCase();
  if ((f.types?.length && !f.types.some((w) => type.includes(w))) || f.notTypes?.some((w) => type.includes(w))) return `${m.code} is not a ${f.label.toLowerCase()} (master data: ${m.type ?? 'no type'})`;
  const room = m.room ? rooms.find((r) => r.code === m.room) : undefined;
  if (room && roomRefusal(stage, room)) return `${m.code} stands in ${room.code}, not in a room this stage allows (${stage.roomTypes.join(', ')})`;
  return null;
}
