// Template round 22 Nov 2026, part 4: F4 (a step in or out by a value recorded earlier in the batch) and F6 (a check
// interval that changes by a value).
import { describe, expect, it } from 'vitest';
import { openSteps, timers, waitsForRule } from '../shared/engine/index.js';
import { masterChecks } from '../shared/master/checks.js';
import type { MasterDoc } from '../shared/master/schema.js';
import { at, ev, tablet, unplaced } from './engine-fixture.js';

const checks = (d: MasterDoc) => unplaced(masterChecks(d)).filter((p) => p.level === 'error').map((p) => `${p.path}: ${p.message}`);
const step = (d: MasterDoc, stage: string, key: string) => d.stages.find((s) => s.key === stage)!.steps.find((t) => t.key === key)!;
const lod = (value: string) => ev('value', '1.1.4.1', { min: 5, payload: { values: { lod: { value, unit: '%' } } } });

describe('F4 by a value recorded earlier', () => {
  const rule = (high: string): MasterDoc => { const d = tablet(); step(d, 'granulation', 'mill').onlyIf = { ref: 'granulation/dry/lod', limit: { high, unit: '%' } }; return d; };
  const view = (d: MasterDoc, events: ReturnType<typeof ev>[]) => openSteps(d, events, at(100)).steps.find((s) => s.stageKey === 'granulation' && s.stepKey === 'mill')!;

  it('the step waits until the value is recorded', () => {
    const v = view(rule('2.0'), []);
    expect(v.state).toBe('waiting');
    expect(v.blocked).toBeTruthy();
    const d = rule('2.0');
    expect(waitsForRule(d, step(d, 'granulation', 'mill'), [], { stage: 1, sub: 1, step: 5, round: 1 })).toMatch(/Waits for Granulation › .*Loss on drying/);
    expect(waitsForRule(d, step(d, 'granulation', 'mill'), [lod('1.5')], { stage: 1, sub: 1, step: 5, round: 1 })).toBeNull();
  });
  it('is left out when the value is not within the limit, and in when it is', () => {
    expect(view(rule('2.0'), [lod('1.5')]).state).not.toBe('not_applicable');
    const out = view(rule('2.0'), [lod('3.5')]);
    expect(out).toMatchObject({ state: 'not_applicable', leftOut: expect.stringMatching(/only when Granulation › .*Loss on drying/) });
  });
  it('the master check reads one value, from an earlier step, that is a single number', () => {
    expect(checks(rule('2.0'))).toEqual([]);
    const later = tablet(); step(later, 'granulation', 'dry').onlyIf = { ref: 'granulation/yield/yield', limit: { high: '2.0', unit: '%' } };
    expect(checks(later).join()).toContain('comes later than this step');
    const both = tablet(); step(both, 'granulation', 'mill').onlyIf = { header: 'batchSize', ref: 'granulation/dry/lod', limit: { high: '2.0', unit: '%' } };
    expect(checks(both).join()).toContain('reads one value');
    const list = tablet(); step(list, 'compression', 'yield').onlyIf = { ref: 'compression/compress/hardness', limit: { high: '2.0', unit: 'N' } };
    expect(checks(list).join()).toContain('not a single number');
  });
});

describe('F6 an interval that changes by a value', () => {
  const doc = () => { const d = tablet(); step(d, 'compression', 'compress').everyMinutesBy = { field: 'meanHardness', limit: { low: '60', high: '120', unit: 'N' }, everyMinutes: 10 }; return d; };
  const round = (mean: string) => [ev('started', '2.1.0.1', { min: 0 }), ev('value', '2.1.0.1', { min: 1, payload: { values: {}, results: { meanHardness: { ok: true, value: mean, unit: 'N', shown: '' } } } })];

  it('the next check is after 10 minutes when the mean hardness is within 60 to 120 N, else after 30', () => {
    const next = (mean: string) => timers(doc(), round(mean), at(2)).find((t) => t.kind === 'periodic' && t.key.round === 2)!;
    expect((next('90').at.getTime() - at(0).getTime()) / 60_000).toBe(10);
    expect(next('90').label).toContain('every 10 min');
    expect((next('40').at.getTime() - at(0).getTime()) / 60_000).toBe(30);
  });
  it('the master check wants a number the step records or works out, and the interval to be set', () => {
    expect(checks(doc())).toEqual([]);
    const bad = doc(); step(bad, 'compression', 'compress').everyMinutesBy!.field = 'weights';
    expect(checks(bad).join()).toContain('not a number this step records');
    const slow = doc(); step(slow, 'compression', 'compress').everyMinutesBy!.everyMinutes = 45;
    expect(checks(slow).join()).toContain('at least every 30 min');
    const none = doc(); delete step(none, 'compression', 'compress').everyMinutes;
    expect(checks(none).join()).toContain('needs the interval of the first checks');
  });
});
