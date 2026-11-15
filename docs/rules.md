# TrueBatch rules

The 22 TrueBatch rules. Each is checked once, in the app. Each test that proves a rule starts its name with the rule
ID, e.g. `TB-08 the person who performed a step cannot check it`. `npm run traceability` prints the rule-to-test list;
CI (`npm run traceability -- --check`) fails when a rule has no test, unless its feature comes later (marked
"later" in the Tests column, with the feature it waits for).

Clauses: EU GMP Part I (chapter.paragraph) and Annex 11 (§), 21 CFR 211 and Part 11, Revised Schedule M (RSM).

| Rule | Requirement | Clauses | Tests |
|------|-------------|---------|-------|
| TB-01 | A master is complete before it can be approved | EU GMP 4.14; 21 CFR 211.186; RSM master formula | `test/master-checks.test.ts` |
| TB-02 | A master is checked by a second person and approved by QA; one effective version; a new version needs a change control number | EU GMP 4.3, 4.4; Annex 11 §10; 21 CFR 211.186(a), 211.100(a) | later: the designer's review and approval |
| TB-03 | A batch is issued from the effective master, with a unique number never reused | EU GMP 4.20; 21 CFR 211.188(a) | `test/batches.test.ts` |
| TB-04 | Entries are saved at once, with the person and the server time; late entries need a reason | EU GMP 4.8; Annex 11 §9; 21 CFR 211.100(b), 11.10(e) | `test/batches.test.ts`, `test/release.test.ts` |
| TB-05 | TrueBatch keeps its own audit trail | Annex 11 §9; 21 CFR 11.10(e) | `test/batches.test.ts` |
| TB-06 | A correction keeps the original value and its reason, and reaches the steps that used it; nothing is deleted | EU GMP 4.9; Annex 11 §9; 21 CFR 11.10(e) | `test/engine.test.ts`, `test/batches.test.ts` |
| TB-07 | E-signatures carry the name, time and meaning, linked to what was signed | Annex 11 §14; 21 CFR 11.50, 11.70, 11.200 | `test/batches.test.ts` |
| TB-08 | Significant steps have a second-person check; the checker is not the performer | Annex 11 §6; 21 CFR 211.101(c), (d), 211.188(b)(11) | `test/engine.test.ts`, `test/batches.test.ts`, `test/master-checks.test.ts` |
| TB-09 | Steps are done in order; a departure needs a deviation note | EU GMP 5.15; 21 CFR 211.100(b), 211.192 | `test/engine.test.ts` |
| TB-10 | Line clearance before each stage | EU GMP 5.35; 21 CFR 211.67 | later: the line clearance screen |
| TB-11 | Equipment and rooms are fit for use | EU GMP 3.34-3.44; 21 CFR 211.63, 211.67, 211.182 | `test/batches.test.ts` (master data; the Logbook status comes with the link) |
| TB-12 | Only released, in-date lots are used | EU GMP 5.31; 21 CFR 211.84, 211.87 | later: the MMS link (lot status and expiry) |
| TB-13 | The dispensing target comes from the master, adjusted by assay and LOD | 21 CFR 211.101(a), 211.186(b); EU GMP 4.14 | `test/engine.test.ts`, `test/master-checks.test.ts` |
| TB-14 | In-process checks against the master's limits; out of limits needs a deviation note | EU GMP 4.20; 21 CFR 211.110, 211.192 | `test/engine.test.ts` |
| TB-15 | Compression: every station at the start, then a sample at least every 30 minutes | 21 CFR 211.110(a); RSM in-process controls | `test/engine.test.ts` |
| TB-16 | Sieves, punches and dies are checked before and after use | 21 CFR 211.67; RSM tablets | `test/engine.test.ts` (screens; punches and dies come with the tooling block) |
| TB-17 | Hold times run on the server clock; an overrun needs a deviation note | 21 CFR 211.111; EU GMP 4.20 | `test/engine.test.ts`, `test/batches.test.ts` |
| TB-18 | Yield is calculated and verified; out of limits blocks release | 21 CFR 211.103, 211.192; EU GMP 5.39 | `test/engine.test.ts`, `test/release.test.ts` |
| TB-19 | Rework only as a new batch issued from an approved master | EU GMP 5.62-5.64; 21 CFR 211.115 | `test/batches.test.ts` |
| TB-20 | The record is complete before production signs | EU GMP 4.20; 21 CFR 211.188, 211.192 | `test/release.test.ts`, `test/batches.test.ts` |
| TB-21 | QC approval, then QA review and release or rejection by e-signature; all changes and deviations shown; release blocked until linked deviations are closed | EU GMP 1.4(xv); Annex 11 §9, §15; Annex 16; 21 CFR 211.22, 211.192 | `test/release.test.ts`, `test/batches.test.ts` |
| TB-22 | A complete copy (PDF) with its signatures and changes | Annex 11 §8; 21 CFR 11.10(b) | later: the PDF export |

## Notes: safety rules built into the calculation templates

These notes record which TrueBatch rule each template safety rule protects. They are not rule rows, and they add no
rules to the table above. Each safety rule refuses with a plain-English message. Each has its own tests in
`test/templates/` (the test names start with the template ID). The templates are described in
`shared/templates/README.md`.

- **TB-13 (dispensing):**
  - **Same basis (C5, built into T9).** A hydrate or solvate molecular weight in the salt factor (T11) together with
    a water, LOD or solvent correction of the assay (T9) is refused, because it counts the water twice (about 6.7 %
    too much pantoprazole).
    A salt, ester, hydrate or compound factor is also refused when the certificate states the potency "as parent"
    (µg of parent drug per mg of material) or "as element" (% Ca, % Zn, % Fe), because that factor is already
    inside the potency.
  - **Molecules per salt formula unit (T11).** The salt factor uses the MW of the salt divided by the number of drug
    molecules per formula unit (2 for hemifumarates and for calcium salts with two anions), so a hemi-salt cannot
    double the dose.
  - **No negative filler (T10).** A compensating excipient that would go below zero is refused: the batch weight
    cannot be kept, and a deviation is needed.
  - **Potency units are never a mass.** IU, CFU and activity units never convert to a mass. They become a weight
    only through the lot's content per gram (T18).
- **TB-14 (in-process checks against the master's limits):**
  - **No weight-variation method for coated tablets other than film-coated (T14).** Uniformity of dosage units by
    weight variation is refused for sugar-coated and other coated tablets. It is also refused below 25 mg or 25 %
    of the unit, and for products set to "individual results only".
- **TB-16 (coating solutions):**
  - **No negative water or solvent (T17).** A liquid make-up whose water or solvent to add would be negative (the
    target solids are higher than the ingredients allow) is refused.
