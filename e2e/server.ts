// Starts the real app with the built UI on a fresh database schema for the browser tests. The test people are seeded;
// master data is an in-memory stand-in.
import { connect } from '../server/db.js';
import { migrate } from '../db/migrate.js';
import { buildApp } from '../server/app.js';
import globalSetup from '../test/global-setup.js';
import { TEST_DATABASE_URL, TEST_PROOF_KEY, fakeMaster, fakeSignOn, seedUser } from '../test/helpers.js';
import { E2E_PORT, E2E_SCHEMA, USERS } from './config.js';

await globalSetup();
const owner = connect(TEST_DATABASE_URL);
await owner.unsafe(`drop schema if exists ${E2E_SCHEMA} cascade`);
await owner.unsafe(`create schema ${E2E_SCHEMA}`);
await owner.end();

const schemaOwner = connect(TEST_DATABASE_URL, { searchPath: E2E_SCHEMA });
await migrate(schemaOwner);
for (const [username, permissions] of Object.entries(USERS)) await seedUser(schemaOwner, username, permissions);
await schemaOwner.end();

const sql = connect(TEST_DATABASE_URL, { role: 'truebatch_app', searchPath: E2E_SCHEMA });
const app = await buildApp({ sql, signOn: fakeSignOn(), proofKey: TEST_PROOF_KEY, master: fakeMaster(),
  webRoot: new URL('../dist/web', import.meta.url).pathname, cookieSecure: false });
await app.listen({ port: E2E_PORT, host: '127.0.0.1' });
