// Starts TrueBatch Tablets Packing with its built UI on a fresh schema of the test database, for its browser journey,
// with a stand-in for TrueBatch Tablets' batch_fact_v1 (one released bulk batch). Master data is an in-memory stand-in.
import { connect } from '../server/db.js';
import { migrate } from '../db/migrate.js';
import { buildApp } from '../server/app.js';
import { links } from '../server/links.js';
import { PACKING_APP_ROLE, PACKING_PLAN } from '../packing/migrate.js';
import { PACKING } from '../packing/product.js';
import globalSetup from '../test/global-setup.js';
import { TEST_DATABASE_URL, TEST_PROOF_KEY, fakeMaster, fakeSignOn, seedUser } from '../test/helpers.js';
import { E2E_PACKING_PORT, E2E_PACKING_SCHEMA, PACKING_USERS } from './config.js';

const S = E2E_PACKING_SCHEMA;
await globalSetup();
const owner = connect(TEST_DATABASE_URL);
await owner.unsafe(`drop schema if exists ${S} cascade; drop schema if exists ${S}_report cascade; drop schema if exists ${S}_tb cascade; create schema ${S}; create schema ${S}_tb;
  create table ${S}_tb.batch_fact_v1 (batch_number text, product_code text, record_kind text, status text, issued_at timestamptz, completed_at timestamptz, released boolean,
    read_at timestamptz default now(), data_as_of timestamptz default now(), manufactured_on date);
  insert into ${S}_tb.batch_fact_v1 values ('TB260001', 'PRD-001', 'PROCESSING', 'RELEASED', '2026-11-02 06:00+00', '2026-11-08 06:00+00', true, now(), now(), '2026-11-03');
  grant usage on schema ${S}_tb to ${PACKING_APP_ROLE}; grant select on all tables in schema ${S}_tb to ${PACKING_APP_ROLE};`);
await owner.end();

const schemaOwner = connect(TEST_DATABASE_URL, { searchPath: S });
await migrate(schemaOwner, PACKING_PLAN);
for (const [username, permissions] of Object.entries(PACKING_USERS)) await seedUser(schemaOwner, username, permissions);
await schemaOwner.end();

const master = fakeMaster();
const item = (itemId: string, code: string, name: string) => ({ itemId, code, name, version: 1, active: true });
master.products_.push({ ...item('pk-1', 'PK-001', 'Examplol 100 mg tablets, 10 x 10 blister'), strength: '100 mg', dosageForm: 'tablet' },
  { ...item('prd-1', 'PRD-001', 'Examplol 100 mg tablets'), strength: '100 mg', dosageForm: 'tablet' });
master.materials_.push({ ...item('pm-foil', 'PM-101', 'Printed aluminium foil'), category: 'packing', unit: 'm' },
  { ...item('pm-ctn', 'PM-103', 'Carton'), category: 'packing', unit: 'units' });
master.equipment_.push({ ...item('ln-1', 'BL-01', 'Blister line 1'), kind: 'equipment', type: 'blister line', room: 'PK-01' });

const sql = connect(TEST_DATABASE_URL, { role: PACKING_APP_ROLE, searchPath: S });
const bulk = connect(TEST_DATABASE_URL, { role: PACKING_APP_ROLE, link: true });
const app = await buildApp({ sql, signOn: fakeSignOn(), proofKey: TEST_PROOF_KEY, master, links: links({ truebatch: bulk }, { truebatch: `${S}_tb` }),
  webRoot: new URL('../dist/packing-web', import.meta.url).pathname, cookieSecure: false, product: PACKING });
await app.listen({ port: E2E_PACKING_PORT, host: '127.0.0.1' });
