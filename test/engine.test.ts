import { describe, expect, it } from 'vitest';
import {
  currentValues, doneProblems, evaluate, openSteps, parseKey, refusal, stepState, timers,
  type Action, type State, type StepEvent,
} from '../shared/engine/index.js';
import { at, ev, fail, pass, reading, small, tablet } from './engine-fixture.js';

const kinds = (s: string) => s.split(' ').filter(Boolean).map((k) => ev(k as StepEvent['kind'], '0.1.0.1'));
const stateOf = (doc: ReturnType<typeof small>, events: StepEvent[], id: string, now = at(1000)) => {
  const v = openSteps(doc, events, now).steps.find((s) => s.id === id);
  return v ? v.state : 'absent';
};

describe('stepState', () => {
  it.each([
    ['', false, 'waiting', false],
    ['started', false, 'in_progress', false],
    ['started value value', false, 'in_progress', false],
    ['started value done', false, 'done', false],
    ['started value done', true, 'done_awaiting_check', false],
    ['started value done checked', true, 'checked', false],
    ['started value done sent_back', true, 'in_progress', false],
    ['started value done sent_back done', true, 'done_awaiting_check', false],
    ['started value done checked corrected', true, 'in_progress', true],
    ['started value done corrected done', true, 'done_awaiting_check', false],
    ['started not_applicable', false, 'not_applicable', false],
    ['started value done note late', false, 'done', false],
  ])('events "%s" (check: %s) → %s, needs re-sign %s', (events, needsCheck, state, resign) => {
    expect(stepState(kinds(events), needsCheck)).toEqual({ state, needsResign: resign });
  });
});

describe('the action table', () => {
  const op = { id: 1, permissions: ['truebatch.batch.operate'] };
  const checker = { id: 2, permissions: ['truebatch.batch.check'] };
  const qa = { id: 3, permissions: ['truebatch.qa.release'] };
  const ctx = (state: State, events: StepEvent[], user = op, flow: 'none' | 'optional-with-reason' | 'qa-hold' = 'none') => ({ state, events, flow, user });
  const ok = (a: Action, c: ReturnType<typeof ctx>) => refusal(a, c)?.error ?? 'allowed';

  it.each<[Action, State, string, typeof op, string]>([
    ['start', 'open', '', op, 'allowed'],
    ['start', 'waiting', '', op, 'wrong_state'],
    ['start', 'open', '', checker, 'forbidden'],
    ['record', 'in_progress', 'started', op, 'allowed'],
    ['record', 'in_progress', 'started value done sent_back', op, 'wrong_state'],
    ['correct', 'in_progress', 'started value done sent_back', op, 'allowed'],
    ['correct', 'in_progress', 'started value', op, 'wrong_state'],
    ['correct', 'checked', 'started value done checked', op, 'allowed'],
    ['done', 'in_progress', 'started value', op, 'allowed'],
    ['done', 'done_awaiting_check', 'started value done', op, 'wrong_state'],
    ['check', 'done_awaiting_check', 'started value done', checker, 'allowed'],
    ['check', 'in_progress', 'started value', checker, 'wrong_state'],
    ['check', 'done_awaiting_check', 'started value done', op, 'forbidden'],
    ['send-back', 'done_awaiting_check', 'started value done', checker, 'allowed'],
    ['note', 'waiting', '', checker, 'allowed'],
    ['note', 'checked', '', qa, 'allowed'],
  ])('%s while %s (events "%s") → %s', (action, state, events, user, want) => {
    expect(ok(action, ctx(state, kinds(events), user))).toBe(want);
  });

  it('TB-08 the checker cannot be the performer, nor anyone who started, recorded or corrected the step', () => {
    const both = { id: 1, permissions: ['truebatch.batch.operate', 'truebatch.batch.check'] };
    const done = [ev('started', '0.1.0.1', { person: 7 }), ev('value', '0.1.0.1', { person: 1 }), ev('done', '0.1.0.1', { person: 7 })];
    expect(refusal('check', ctx('done_awaiting_check', done, both))?.error).toBe('own_work');
    expect(refusal('send-back', ctx('done_awaiting_check', done, both))?.error).toBe('own_work');
    expect(refusal('check', ctx('done_awaiting_check', done, { ...both, id: 2 }))).toBeNull();
    const corrected = [...done, ev('corrected', '0.1.0.1', { person: 2 }), ev('done', '0.1.0.1', { person: 7 })];
    expect(refusal('check', ctx('done_awaiting_check', corrected, { ...both, id: 2 }))?.error).toBe('own_work');
  });

  it('only an optional step can be not applicable; only a QA-hold step can be released, once', () => {
    expect(refusal('not-applicable', ctx('open', [], op, 'none'))?.error).toBe('wrong_state');
    expect(refusal('not-applicable', ctx('open', [], op, 'optional-with-reason'))).toBeNull();
    const done = kinds('started value done');
    expect(refusal('release-hold', ctx('done', done, qa, 'none'))?.error).toBe('wrong_state');
    expect(refusal('release-hold', ctx('done', done, qa, 'qa-hold'))).toBeNull();
    expect(refusal('release-hold', ctx('done', [...done, ev('qa_released_hold', '0.1.0.1')], qa, 'qa-hold'))?.error).toBe('wrong_state');
    expect(refusal('release-hold', ctx('done', done, op, 'qa-hold'))?.error).toBe('forbidden');
  });

  it('step keys are stage.sub-batch.step.round', () => {
    expect(parseKey('2.1.3.4')).toEqual({ stage: 2, sub: 1, step: 3, round: 4 });
    expect(parseKey('2.0.3.1')).toBeNull();
    expect(parseKey('2.1.3')).toBeNull();
  });
});

describe('openSteps', () => {
  it('normal: the next step opens when the previous is done; the next stage when the previous stage is closed', () => {
    const doc = small([{ steps: [{}, {}] }, {}]);
    expect(stateOf(doc, [], '0.1.0.1')).toBe('open');
    expect(stateOf(doc, [], '0.1.1.1')).toBe('waiting');
    expect(stateOf(doc, [ev('started', '0.1.0.1'), ev('done', '0.1.0.1')], '0.1.1.1')).toBe('open');
    const first = [ev('started', '0.1.0.1'), ev('done', '0.1.0.1'), ev('started', '0.1.1.1')];
    expect(stateOf(doc, first, '1.1.0.1')).toBe('waiting');
    expect(stateOf(doc, [...first, ev('done', '0.1.1.1')], '1.1.0.1')).toBe('open');
  });

  it('with a checker the next step opens on done, or only on the check when the master says wait for the check', () => {
    const done = [ev('started', '0.1.0.1'), ev('done', '0.1.0.1')];
    expect(stateOf(small([{ steps: [{ checker: true }, {}] }]), done, '0.1.1.1')).toBe('open');
    expect(stateOf(small([{ steps: [{ checker: true, waitForCheck: true }, {}] }]), done, '0.1.1.1')).toBe('waiting');
    expect(stateOf(small([{ steps: [{ checker: true, waitForCheck: true }, {}] }]), [...done, ev('checked', '0.1.0.1', { person: 2 })], '0.1.1.1')).toBe('open');
  });

  it('a stage is closed only when every check is done', () => {
    const doc = small([{ steps: [{ checker: true }] }, {}]);
    const done = [ev('started', '0.1.0.1'), ev('done', '0.1.0.1')];
    expect(openSteps(doc, done, at(100)).stages[0]!.closed).toBe(false);
    expect(stateOf(doc, done, '1.1.0.1')).toBe('waiting');
    expect(stateOf(doc, [...done, ev('checked', '0.1.0.1', { person: 2 })], '1.1.0.1')).toBe('open');
  });

  it('preparation: opens any time, and must be closed before the stage that uses it', () => {
    const doc = small([{}, { kind: 'preparation', produces: { name: 'binder', holdHours: 24 } }, { uses: ['s1'] }]);
    expect(stateOf(doc, [], '1.1.0.1')).toBe('open');
    const first = [ev('started', '0.1.0.1'), ev('done', '0.1.0.1')];
    expect(stateOf(doc, first, '2.1.0.1')).toBe('waiting');
    expect(openSteps(doc, first, at(100)).stages[2]!.blocked).toBe('Waits for the preparation Stage 1 to close');
    expect(stateOf(doc, [...first, ev('started', '1.1.0.1'), ev('done', '1.1.0.1')], '2.1.0.1')).toBe('open');
  });

  it('repeat-until: a new round opens while the stop check fails, until it passes', () => {
    const doc = small([{ steps: [{ flow: { kind: 'repeat-until', maxRounds: 3, stop: 'readingCheck' } }, {}] }]);
    const r1 = [ev('started', '0.1.0.1'), reading('0.1.0.1', { readingCheck: fail }), ev('done', '0.1.0.1')];
    expect(stateOf(doc, r1, '0.1.0.2')).toBe('open');
    expect(stateOf(doc, r1, '0.1.1.1')).toBe('waiting');
    const r2 = [...r1, ev('started', '0.1.0.2'), reading('0.1.0.2', { readingCheck: pass }), ev('done', '0.1.0.2')];
    expect(stateOf(doc, r2, '0.1.0.3')).toBe('absent');
    expect(stateOf(doc, r2, '0.1.1.1')).toBe('open');
  });

  it('repeat-until: after the most rounds without passing, the next step needs a deviation note', () => {
    const doc = small([{ steps: [{ flow: { kind: 'repeat-until', maxRounds: 2, stop: 'readingCheck' } }, {}] }]);
    const round = (r: number) => [ev('started', `0.1.0.${r}`), reading(`0.1.0.${r}`, { readingCheck: fail }), ev('done', `0.1.0.${r}`)];
    const both = [...round(1), ...round(2)];
    expect(stateOf(doc, both, '0.1.0.3')).toBe('absent');
    const v = openSteps(doc, both, at(1000)).steps.find((s) => s.id === '0.1.1.1')!;
    expect(v.state).toBe('waiting');
    expect(v.blocked).toMatch(/did not pass in 2 round\(s\), the most allowed: a deviation note is needed/);
    expect(stateOf(doc, [...both, ev('note', '0.1.0.2', { payload: { text: 'Deviation raised' } })], '0.1.1.1')).toBe('open');
  });

  it('sub-batch: N numbered copies run side by side; the stage closes when all are done', () => {
    const doc = small([{ kind: 'sub-batch', count: 3 }, {}]);
    const ids = openSteps(doc, [], at(0)).steps.map((s) => `${s.id} ${s.state}`);
    expect(ids).toEqual(['0.1.0.1 open', '0.2.0.1 open', '0.3.0.1 open', '1.1.0.1 waiting']);
    const two = ['0.1.0.1', '0.2.0.1'].flatMap((k) => [ev('started', k), ev('done', k)]);
    expect(stateOf(doc, two, '1.1.0.1')).toBe('waiting');
    expect(stateOf(doc, [...two, ev('started', '0.3.0.1'), ev('done', '0.3.0.1')], '1.1.0.1')).toBe('open');
  });

  it('QA hold: the next step waits for QA to release the hold', () => {
    const doc = small([{ steps: [{ flow: { kind: 'qa-hold' } }, {}] }]);
    const done = [ev('started', '0.1.0.1'), ev('done', '0.1.0.1')];
    const v = openSteps(doc, done, at(100)).steps[1]!;
    expect([v.state, v.blocked]).toEqual(['waiting', 'Waits for QA to release the hold on step t0']);
    expect(stateOf(doc, [...done, ev('qa_released_hold', '0.1.0.1', { person: 3 })], '0.1.1.1')).toBe('open');
  });

  it('a step not applicable lets the next step open', () => {
    const doc = small([{ steps: [{ flow: { kind: 'optional-with-reason' } }, {}] }]);
    expect(stateOf(doc, [ev('not_applicable', '0.1.0.1')], '0.1.1.1')).toBe('open');
  });
});

describe('corrections', () => {
  it('a correction replaces the value and the original is kept, with the reason', () => {
    const events = [
      ev('started', '0.1.0.1'),
      ev('value', '0.1.0.1', { payload: { values: { reading: { value: '6.1', unit: '' } }, results: { readingCheck: pass as never } } }),
      ev('done', '0.1.0.1'),
      ev('corrected', '0.1.0.1', { person: 4, payload: { values: { reading: { value: '6.2', unit: '' } }, results: { readingCheck: fail as never }, reason: 'typing error' } }),
    ];
    const c = currentValues(events);
    expect(c.values.reading).toEqual({ value: '6.2', unit: '' });
    expect(c.results.readingCheck).toEqual(fail);
    expect(c.replaced).toMatchObject([{ field: 'reading', was: { value: '6.1', unit: '' }, now: { value: '6.2', unit: '' }, reason: 'typing error', person: 4 }]);
  });

  it('a correction after the check takes the step back: it needs re-signing and re-checking, and the stage reopens', () => {
    const doc = small([{ steps: [{ checker: true }] }, {}]);
    const checked = [ev('started', '0.1.0.1'), ev('value', '0.1.0.1'), ev('done', '0.1.0.1'), ev('checked', '0.1.0.1', { person: 2 })];
    const corrected = [...checked, ev('corrected', '0.1.0.1', { payload: { values: {}, reason: 'wrong lot typed' } })];
    const v = openSteps(doc, corrected, at(100)).steps[0]!;
    expect([v.state, v.needsResign]).toEqual(['in_progress', true]);
    expect(openSteps(doc, corrected, at(100)).stages[0]!.closed).toBe(false);
    expect(stateOf(doc, [...corrected, ev('done', '0.1.0.1')], '0.1.0.1')).toBe('done_awaiting_check');
  });
});

describe('done needs', () => {
  const doc = small([{ steps: [{ minMinutes: 10 }] }]);
  const view = (events: StepEvent[], now: Date) => doneProblems(doc, openSteps(doc, events, now).steps[0]!, now);

  it('every required field, no refused calculation and no failing check without a deviation note after it', () => {
    expect(view([ev('started', '0.1.0.1', { min: 0 })], at(20))).toEqual(['Reading is not recorded']);
    const refused = ev('value', '0.1.0.1', { min: 1, payload: { values: { reading: { value: '1', unit: '' } }, results: { readingCheck: { ok: false, message: 'bad limit' } } } });
    expect(view([ev('started', '0.1.0.1', { min: 0 }), refused], at(20))).toEqual(['bad limit']);
    const out = ev('value', '0.1.0.1', { min: 2, payload: { values: { reading: { value: '9', unit: '' } }, results: { readingCheck: fail as never } } });
    expect(view([ev('started', '0.1.0.1', { min: 0 }), out], at(20))).toEqual(['Out of limits: Within limits. Add a deviation note first.']);
    expect(view([ev('started', '0.1.0.1', { min: 0 }), ev('note', '0.1.0.1', { min: 1 }), out], at(20))).toHaveLength(1);
    expect(view([ev('started', '0.1.0.1', { min: 0 }), out, ev('note', '0.1.0.1', { min: 3 })], at(20))).toEqual([]);
  });

  it('a minimum time: a 10-minute mix cannot be done earlier', () => {
    const events = [ev('started', '0.1.0.1', { min: 0 }), ev('value', '0.1.0.1', { min: 1, payload: { values: { reading: { value: '6', unit: '' } }, results: { readingCheck: pass as never } } })];
    expect(view(events, at(9))).toEqual([`The minimum time is 10 min: the step can be finished from ${at(10).toISOString()}`]);
    expect(view(events, at(10))).toEqual([]);
  });
});

describe('timers', () => {
  it('TB-17 an exceeded hold time blocks the using stage until a deviation note', () => {
    const doc = small([{ produces: { name: 'granules', holdHours: 2 } }, { uses: ['s0'] }]);
    const done = [ev('started', '0.1.0.1', { min: 0 }), ev('done', '0.1.0.1', { min: 10 })];
    expect(timers(doc, done, at(60))).toMatchObject([{ id: 'hold:0:1', kind: 'hold', state: 'running', from: at(10), at: at(130), key: { stage: 1, step: 0 } }]);
    expect(timers(doc, done, at(115))[0]!.state).toBe('due soon');
    expect(timers(doc, done, at(131))[0]!.state).toBe('late');
    expect(stateOf(doc, done, '1.1.0.1', at(100))).toBe('open');
    expect(stateOf(doc, done, '1.1.0.1', at(131))).toBe('waiting');
    expect(openSteps(doc, done, at(131)).stages[1]!.blocked).toBe('Hold time of granules (2 h) before Stage 1 ran out: a deviation note is needed');
    // A note made before the hold ran out does not count.
    expect(stateOf(doc, [...done, ev('note', '1.1.0.1', { min: 120 })], '1.1.0.1', at(131))).toBe('waiting');
    expect(stateOf(doc, [...done, ev('note', '1.1.0.1', { min: 131 })], '1.1.0.1', at(132))).toBe('open');
  });

  it('a hold time stops when the using stage starts; started too late, it stays late', () => {
    const doc = small([{ produces: { name: 'granules', holdHours: 2 } }, { uses: ['s0'] }]);
    const done = [ev('started', '0.1.0.1', { min: 0 }), ev('done', '0.1.0.1', { min: 10 })];
    expect(timers(doc, [...done, ev('started', '1.1.0.1', { min: 100 })], at(500))).toEqual([]);
    expect(timers(doc, [...done, ev('note', '1.1.0.1', { min: 140 }), ev('started', '1.1.0.1', { min: 141 })], at(500))[0]!.state).toBe('late');
  });

  it('TB-15 a periodic check is due every 30 minutes from the start of the previous round', () => {
    const doc = small([{ steps: [{ everyMinutes: 30, flow: { kind: 'repeat-until', maxRounds: 10, stop: 'readingCheck' } }] }]);
    const r1 = [ev('started', '0.1.0.1', { min: 0 }), reading('0.1.0.1', { readingCheck: fail }, { min: 2 }), ev('done', '0.1.0.1', { min: 3 })];
    expect(timers(doc, r1, at(20))).toMatchObject([{ id: 'every:0.1.0.2', kind: 'periodic', state: 'running', at: at(30) }]);
    expect(timers(doc, r1, at(26))[0]!.state).toBe('due soon');
    expect(timers(doc, r1, at(31))[0]!.state).toBe('late');
    const r2 = [...r1, ev('started', '0.1.0.2', { min: 29 })];
    expect(timers(doc, r2, at(40)).map((t) => [t.id, t.state])).toEqual([['every:0.1.0.3', 'running']]);
    const late = [...r1, ev('started', '0.1.0.2', { min: 35 })];
    expect(timers(doc, late, at(40)).map((t) => [t.id, t.state])).toEqual([['every:0.1.0.2', 'late'], ['every:0.1.0.3', 'running']]);
    // Once the stop check passes, no further check is due.
    const end = [...r2, reading('0.1.0.2', { readingCheck: pass }, { min: 30 }), ev('done', '0.1.0.2', { min: 31 })];
    expect(timers(doc, end, at(100))).toEqual([]);
  });

  it('a minimum time runs from the start and is due when it has passed', () => {
    const doc = small([{ steps: [{ minMinutes: 10 }] }]);
    expect(timers(doc, [ev('started', '0.1.0.1', { min: 0 })], at(5))).toMatchObject([{ kind: 'minimum', state: 'running', at: at(10) }]);
    expect(timers(doc, [ev('started', '0.1.0.1', { min: 0 })], at(10))[0]!.state).toBe('due');
    expect(timers(doc, [ev('started', '0.1.0.1', { min: 0 }), ev('done', '0.1.0.1', { min: 11 })], at(12))).toEqual([]);
  });
});

describe('calculations come from the templates library', () => {
  const doc = tablet();
  const certificate = { assay: { value: '99.0', unit: '%' }, lod: { value: '0.5', unit: '%' } };

  it('the API target is the potency-adjusted formula quantity (T8 then T9); net (T1) against it (C1)', () => {
    const r = evaluate(doc, [], { stage: 1, sub: 1, step: 0, round: 1 }, { ...certificate, gross: { value: '12.000', unit: 'kg' }, tare: { value: '1.850', unit: 'kg' } });
    // 100.0 mg × 100 000 = 10.000 kg; assay as is 99.0 × 99.5 ÷ 100 = 98.505 %; 10.000 × 100 ÷ 98.505 = 10.1518 kg
    expect(r.target).toMatchObject({ ok: true, unit: 'kg', shown: '100.0 mg × 100000 tablets = 10.000 kg; then assay as is = 99.0 % × (100 − 0.5 %) ÷ 100 = 98.505 %; 10.000 kg × 100 ÷ 98.505 % = 10.152 kg' });
    expect(r.net).toMatchObject({ ok: true, value: '10.15', shown: '12.000 kg − 1.850 kg = 10.150 kg' });
    expect(r.netCheck).toMatchObject({ ok: true, check: { pass: true } });
  });

  it('TB-13 without the LOD the T9 refusal is the result, so the step cannot be signed', () => {
    const r = evaluate(doc, [], { stage: 1, sub: 1, step: 0, round: 1 }, { assay: { value: '99.0', unit: '%' } });
    expect(r.target).toEqual({ ok: false, message: "The dried assay needs the lot's loss on drying" });
    expect(r.netCheck).toBeUndefined();
  });

  it('the filler compensates the adjusted API (T10), from the target the API weighing recorded', () => {
    const lactose = { stage: 1, sub: 1, step: 1, round: 1 };
    expect(evaluate(doc, [], lactose, {}).target).toEqual({ ok: false, message: 'Weigh Examplol first: Lactose monohydrate compensates its adjusted quantity' });
    const api = evaluate(doc, [], { stage: 1, sub: 1, step: 0, round: 1 }, certificate);
    const events = [ev('value', '1.1.0.1', { payload: { values: certificate, results: api } })];
    // 12.000 kg − (10.1518 − 10.000) = 11.848 kg
    expect(evaluate(doc, events, lactose, {}).target).toMatchObject({ ok: true, unit: 'kg' });
    expect(Number((evaluate(doc, events, lactose, {}).target as { value: string }).value).toFixed(3)).toBe('11.848');
  });

  it('a setting can refer to an earlier step: the coating gain is on the mean core weight of compression (T5)', () => {
    const compress = { weights: Array.from({ length: 20 }, () => ({ value: '250.0', unit: 'mg' })) };
    const r1 = evaluate(doc, [], { stage: 2, sub: 1, step: 0, round: 1 }, compress);
    const events = [ev('value', '2.1.0.1', { payload: { values: compress, results: r1 } })];
    const gain = evaluate(doc, events, { stage: 3, sub: 2, step: 0, round: 1 }, { meanWeight: { value: '257.5', unit: 'mg' } }).gain;
    expect(gain).toMatchObject({ ok: true, value: '3', check: { pass: true } });
  });
});

describe('yield accountability (T4)', () => {
  const values = { output: { value: '24.500', unit: 'kg' }, samples: { value: '0.200', unit: 'kg' }, rejects: { value: '0.100', unit: 'kg' } };
  const key = { stage: 2, sub: 1, step: 1, round: 1 };
  it.each([
    ['with accountability limits', true],
    ['without accountability limits', false],
  ])('TB-18 yield and accountability are worked out %s; the limits only add the check', (_what, limits) => {
    const doc = tablet();
    if (!limits) delete doc.stages[2]!.steps[1]!.settings.accountabilityLimit;
    const r = evaluate(doc, [], key, values);
    // (24.500 + 0.200 + 0.100) ÷ 25.000 × 100 = 99.20 %; yield 24.500 ÷ 25.000 × 100 = 98.00 %
    expect(r.accountability).toMatchObject({ ok: true, value: '99.2' });
    expect((r.accountability as { check?: unknown }).check !== undefined).toBe(limits);
    expect(r.yield).toMatchObject({ ok: true, value: '98', check: { pass: true } });
  });
});
