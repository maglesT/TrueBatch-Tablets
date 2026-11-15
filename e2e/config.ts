import type { Permission } from '../server/auth.js';

// Overridable so two working copies can run their browser tests side by side.
export const E2E_PORT = Number(process.env.E2E_PORT ?? 8291);
export const E2E_SCHEMA = process.env.E2E_SCHEMA ?? 'e2e';
// Invented test people and the TrueBatch permissions core gives them.
export const USERS: Record<string, Permission[]> = {
  op1: ['truebatch.batch.operate'],
  chk1: ['truebatch.batch.check'],
  qa1: ['truebatch.qa.release', 'truebatch.master.approve'],
  // Writes the fixture master and issues the batch of the floor journey.
  iss1: ['truebatch.master.author', 'truebatch.batch.issue'],
  norole: [],
};
