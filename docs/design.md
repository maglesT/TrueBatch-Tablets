# TrueBatch Tablets: design decisions

Owner decisions of 15 November 2026. Built the Logbook way (the platform Logbook is the model for structure, patterns
and size), not the Batchwright way.

## Product
- **One product per dosage form.** TrueBatch Tablets covers manufacturing, from dispensing to QA release of bulk
  tablets. Packing is a later, separate product, "TrueBatch Tablets Packing".

## Platform
- Runs on the Medhanta platform. Core provides people, sign-in, permissions, e-signature re-authentication and master
  data. Normal platform sign-in (OIDC through core, one person per browser).
- Optional links: MMS (lots, status, assay, LOD), Logbook (equipment and room status), Deviations, QMS (change
  control numbers). Every link has a hand-entry fallback with a second-person check.

## Rules and where they are enforced
- 22 TrueBatch GMP rules (EU GMP Part I and Annex 11, 21 CFR 211 and Part 11, Revised Schedule M), listed in
  `rules.md`. Each is checked **once, in the app**.
- The database only protects records: an insert-only audit trail, locked signed records, and only the app may write.

## Engine
- About 40 calculation and check templates, each a small pure function. No formula language.
- Step blocks are **data**: a description of their fields, templates, signatures and limits. One engine runs all blocks.
  The library holds the standard tablet steps, from sifting to the reconciliation of tablets (`shared/blocks/`). A text
  setting may have a fixed list the author picks from.
- A fixed, short list of units.
- A master version is stored as one JSON document.
- The designer is forms and ordered lists.
- Server timers as the Logbook does them.
- The second-person checker signs on their own device.
- Version 1: weights are typed (no balance connection).
- PDF output as the Logbook does its exports.

## Calculation checks
Owner decision of 15 November 2026. The master check also runs calculation checks: error-proofing of the
calculations while a master is built. They are **not GMP rules** and are not among the 22. A **refusal** (⛔) is a
calculation the templates library refuses (water counted twice, a salt factor with a potency stated as parent or
element, molecules per salt unit ignored, a negative filler or solvent, IU or CFU turned into a mass, weight
variation on coated tablets other than film-coated); it shows on its item and must be fixed. A **warning** (⚠️) is a
question of basis only the author can answer (label basis, herbal line, ratio basis, double adjustment, a written salt
factor): the author picks an answer, with a reason where asked, and the answer is kept in the master document and
shown to the checker and QA. An unanswered warning blocks "Send for review" like a refusal. The list is in
`shared/templates/README.md`.

## Testing
- Tests per rule and per template, and a few browser journeys.
- No Batchwright machinery: no control register, mutation testing, golden batches, API contract package, CLI, sandbox,
  continuity or markets.
