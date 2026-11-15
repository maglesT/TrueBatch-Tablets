# TrueBatch Tablets

An electronic batch record for tablet manufacturing, from dispensing to QA release of bulk tablets, on the Medhanta
platform. Built the way the Medhanta Logbook is built: one app, plain SQL, a small set of rules checked once in the app.

- Design decisions: `docs/design.md`
- The TrueBatch rules and their tests: `docs/rules.md`

Status: skeleton. Sign-on through core, permissions, the audit trail, e-signatures and master-data reads are in place;
no batch record features yet.

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
