import type { Permission } from '../server/auth.js';

export const E2E_PORT = 8291;
export const E2E_SCHEMA = 'e2e';
// Invented test people and the TrueBatch permissions core gives them.
export const USERS: Record<string, Permission[]> = {
  op1: ['truebatch.batch.operate'],
  chk1: ['truebatch.batch.check'],
  qa1: ['truebatch.qa.release', 'truebatch.master.approve'],
  norole: [],
};
