import { describe, expect, it } from 'vitest';
import { plantClock, plantText } from '../shared/plant-time.js';
import { valueText } from '../server/batch-record.js';

// Times are shown in plant time (IST) everywhere, never as raw UTC or ISO text (owner, 15 Nov 2026).
describe('plant time', () => {
  it('a worked line with mixing times reads in plant time, with its seconds', () => {
    expect(plantText('2026-11-15T18:23:50Z − 2026-11-15T18:13:19Z = 11 min'))
      .toBe('15 Nov 2026, 23:53:50 IST − 15 Nov 2026, 23:43:19 IST = 11 min');
  });

  it('a time read from the Logbook as PostgreSQL text (cleaned on) reads in plant time; a plain date stays as it is', () => {
    expect(plantText('2026-11-15 17:38:16.254+00')).toBe('15 Nov 2026, 23:08:16 IST');
    expect(plantText('expiry 2029-08-31')).toBe('expiry 2029-08-31');
    expect(valueText('2026-11-15 17:38:16.254+00')).toBe('15 Nov 2026, 23:08:16 IST');
  });

  it('one instant, with or without seconds', () => {
    expect(plantClock('2026-11-15T18:30:00Z')).toBe('16 Nov 2026, 00:00 IST');
    expect(plantClock(new Date('2026-11-15T18:30:05Z'), true)).toBe('16 Nov 2026, 00:00:05 IST');
  });
});
