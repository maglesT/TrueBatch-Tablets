# TrueBatch rules

The 22 TrueBatch rules, each mapped to its tests. Not written yet.

Each rule will get one row in the table below: its ID (`TB-01` to `TB-22`), what the application enforces, and the
clauses it serves (EU GMP Part I and Annex 11, 21 CFR 211 and Part 11, Revised Schedule M). Each test that proves a
rule starts its name with the rule ID, e.g. `TB-07: a step cannot be checked by the person who performed it`.
`npm run traceability` prints the rule-to-test list; CI (`npm run traceability -- --check`) fails when a rule has no test.

| Rule | Requirement | Clauses |
|------|-------------|---------|
