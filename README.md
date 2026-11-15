# TrueBatch Tablets

An electronic batch record for tablet manufacturing, from dispensing to QA release of bulk tablets, on the Medhanta
platform. Built the way the Medhanta Logbook is built: one app, plain SQL, a small set of rules checked once in the app.

- Design decisions: `docs/design.md`
- The TrueBatch rules and their tests: `docs/rules.md`

Status: sign-on through core, permissions, the audit trail, e-signatures and master-data reads are in place, with the
calculation templates (`shared/templates/`), the step blocks (`shared/blocks/`), the master document and its checks
(`shared/master/`) and the batch engine (`shared/engine/`, routes in `server/routes/`). The engine also works out the
batch status (production approval, QC approval, QA release or rejection, `shared/engine/release.ts`), marks a step
"input changed" when a value it used was corrected later, and gives QA the review list (`GET /api/batches/:id/review`).
Screens: the master designer with review and QA approval (`web/src/designer/`), the shop floor (`web/src/floor/`) and
the QC and QA release screens with the audit-trail review (`web/src/release/`). The batch record PDF
(`GET /api/batches/:id/pdf`, `server/batch-record.ts`) is made with pdfmake and embedded Noto fonts, as the Logbook
makes its copies. Line clearance is a standard block; the process skeletons start every stage with it. Still to come:
the links to MMS, Logbook (room and equipment status for line clearance), Deviations and QMS.

## Develop
Needs Node 22 and PostgreSQL 16.

```sh
npm install
export DATABASE_URL=postgres://truebatch_owner:dev@localhost:5432/truebatch_dev DB_APP_ROLE=truebatch_app
# Medhanta core: people, sign-in, TrueBatch permissions and master data are managed there
export MASTER_DATA_DATABASE_URL=postgres://truebatch_app:...@<core db>:5432/master_data   # read through its report views
export OIDC_ISSUER=https://<core domain>/oidc OIDC_CLIENT_SECRET=... OIDC_REDIRECT_URI=http://localhost:3000/cb
npm run migrate
npm run dev        # API on :3000
npm run dev:web    # UI on :5173 (proxies /api)
npm run ci         # typecheck, tests, build, rule-to-test check — run before pushing
npm run test:e2e   # browser tests (Playwright; once: npx playwright install chromium)
```

Tests use `TEST_DATABASE_URL` (default `postgres://truebatch_owner:dev@localhost:5432/truebatch_test`); each test file
gets its own schema. The test login must be able to create roles and databases (the platform test makes its own).

## On the platform
`ops/manifest.draft.json` is the draft of the product's platform manifest (permissions, back-channel logout, the
master-data views it reads). The app reads its database from `TRUEBATCH_DATABASE_URL` and runs as the restricted login
`truebatch_app`, which cannot change or delete audit rows or signatures. Migrations run as the database owner.

## Conventions
- One app: `server/` (Fastify), `web/` (React), `db/migrations/` (plain SQL), `test/`, `e2e/` (browser tests), `ops/`, `docs/`.
- A test that proves a rule starts its name with the rule ID: `TB-xx` for TrueBatch rules, `PL-xx` for platform rules.
- Paraphrase regulations; never paste more than a short phrase.
- Work on a branch, CI green, one review pass, then merge.
