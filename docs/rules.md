# TrueBatch rules

The 22 TrueBatch rules, each mapped to its tests. Not written yet.

Each rule will get one row in the table below: its ID (`TB-01` to `TB-22`), what the application enforces, and the
clauses it serves (EU GMP Part I and Annex 11, 21 CFR 211 and Part 11, Revised Schedule M). Each test that proves a
rule starts its name with the rule ID, e.g. `TB-07: a step cannot be checked by the person who performed it`.
`npm run traceability` prints the rule-to-test list; CI (`npm run traceability -- --check`) fails when a rule has no test.

| Rule | Requirement | Clauses |
|------|-------------|---------|

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
