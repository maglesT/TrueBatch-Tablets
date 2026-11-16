import { describe, expect, it } from 'vitest';
import { stateWords } from '../server/pull.js';

describe('a Logbook status is shown in words, never its key', () => {
  it.each([
    ['clean', 'clean'], ['in_use', 'in use'], ['dirty_expired', 'dirty expired'], ['pm_overdue', 'PM overdue'],
    ['in_change_over', 'in change over'], ['out_of_service', 'out of service'],
  ])('%s → %s', (key, words) => expect(stateWords(key)).toBe(words));
});
