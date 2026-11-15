# Running summary: 1,000-formulation template test

| Wave | Counted | NO SOURCE | Checks | FITS | WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|---|---|
| 1 | 75 | 25 | 5672 | 5427 | 234 | 11 | 0 |
| 2 | 61 | 32 (+7 not researched; 10 sourced later, see part-6-retries) | 5457 | 5240 | 216 | 1 | 0 |
| 3 | 61 | 39 | 6490 | 6260 | 227 | 3 | 0 |
| 4 | 72 | 28 | 8283 | 7988 | 294 | 1 | 0 |
| 5 | 66 | 34 | 8642 | 8375 | 263 | 4 | 0 |
| **1-5** | **335** | **158** | **34544** | **33290** | **1234** | **20** | **0** |

Wave 1 was run by the eBMR lead session; waves 2-10 by the demo administrator session. Findings per wave are in `wave-NN/summary.md`.

From wave 3 on, sources are found by one paced source finder and mapped offline (see wave-03/summary.md).
The owner decided on 15 November 2026 to stop the test after wave 5.

## Final result (test stopped after wave 5 by the owner's decision, 15 November 2026)

- 500 formulations planned in waves 1-5; **335** had a real source (patent example, assessment report or article) and
  were mapped: **34,544** calculations, checks and decisions of a commercial master batch record.
- **96.4 %** fit the templates as written, **3.6 %** with an existing setting, **20 rows** needed a small new setting
  (all variants of existing templates or new units), and **no gap**: not one new template was needed.
- With the earlier rounds (205 formulations, about 9,000 checks, which built the template set from 14 to about 42),
  the templates were tested on **540 different tablet formulations**.
- What the waves kept finding were **calculation checks for the master** (wrong salt/base/hydrate/solvate/element basis,
  batch columns that disagree with the per-unit formula, unit errors, double potency adjustment, stage of a weight or a
  %, layers and intermediates whose content must be measured, liquids applied in excess). These go into TrueBatch's
  master check as refusals or answered warnings (`docs/design.md`, "Calculation checks").
- 158 planned formulations had no usable source and were not counted; nothing was invented.
