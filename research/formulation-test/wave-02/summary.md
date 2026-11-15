# Wave 2 summary (F0101-F0200)

Formulations with a usable source: **51** of 100. NO SOURCE: **42**. NOT RESEARCHED: **7** (F0194-F0200; the shared
web-search allowance ran out; to be re-run with a single paced source finder).

NO SOURCE: F0103, F0104, F0107, F0109, F0110, F0111, F0112, F0118 (part 1); F0124, F0125, F0128, F0129, F0134, F0138,
F0140 (part 2); F0141-F0149, F0151, F0156, F0158 (part 3); F0164, F0165, F0168, F0170, F0172, F0173, F0176, F0177, F0179,
F0180 (part 4); F0182, F0184, F0191, F0192, F0193 (part 5).

| Checks mapped | FITS | FITS WITH SETTING | NEW SETTING | GAP | Fit (no new setting or gap) |
|---|---|---|---|---|---|
| 4729 | 4547 | 181 | 1 | 0 | 99.98 % |

Totals recounted by script from every per-formulation Counts line. Row counts per formulation run higher than wave 1's
(more detailed dispensing rows); the fit percentage is not affected.

Why so many NO SOURCE: Google Patents refused automated requests (HTTP 503) for most of the run and the five parts
shared one web-search allowance. From wave 3 on, a single paced source finder downloads the sources first and the
mapping parts work from the files.

## New settings (none truly new; no gaps)

- **T18** (variant of T18; F0187): one intermediate carrying two APIs in a fixed ratio (layered particles). The quantity
  can be set on one API's assay only; T18 must show the second API's resulting content and refuse the step when it is
  out of limits.

## Safety rules (calculation checks for the master; not GMP rules)

- **API quantity must match the label claim** (F0122, F0123): API per tablet = label claim × salt factor; any excess
  must be a declared T16 overage with a reason, otherwise refuse (pravastatin examples carry 10 % undeclared excess;
  a reserpine example states 11 mg where the batch gives 1 mg).
- **Two APIs controlled by one tablet weight** (F0121, F0187): setting the weight from one API's content moves the
  other by the same %; the master names the controlling API and checks the other at the chosen weight.
- **Target weight must fit the tooling** (F0135): compare the target weight with punch area × thickness × density; a
  printed 0.079 g for a 2 mm mini-tablet (about 8 mg) is a 10× unit error.
- **Weight targets must name their stage** (F0175): compressing a sublimation ODT to the post-sublimation weight gives
  about 10 % too little drug; the reverse about 11 % too much.
- **Blend additions mid-run** (F0181): adding lubricant/disintegrant to a running blend (+5 %) leaves tablets about
  4.8 % low at the old target weight; refuse, or force a new T15 target under an F3 deviation.
- **Two hydrates in one tablet** (F0171): each API needs its own hydrate factor and same-basis check; using one API's
  factor for the other gives about 7 % too little.
- **Solution dosed by fill weight** (F0157): the bulk make-up or bulk assay must pass before dosing starts.
- **3D-printed dose set by the print design** (F0154): the same outer size held 235 mg or 335 mg (+43 %) by infill; the
  master needs a check that the right design file is loaded.
- **Hydrate water lost on drying, NTI drug** (F0189, theophylline): compress to the actual granule yield (T15), not the
  formula weight; leaving out the hydrate factor gives about 9 % too little.
- **Stated total below the sum of the lines** (F0159): compressing to a stated 150 mg when the lines add to 200 mg gives
  −25 % drug (known wave-1 T2-sum rule).
- Reminders of known rules: label basis per market (fimasartan F0117, salbutamol F0188, prochlorperazine F0137,
  desmopressin F0131); a diluted line read as pure drug (nitroglycerin 1.95 % trituration, F0119, about 51×; the
  "not above 2 %" limit is an explosion-safety limit); T15 must use the recorded granule weight (F0114); salt/base not
  named (dolutegravir F0101, ferric citrate F0183).

## Sources that contradict themselves (detail in the part files)

US 5,948,422 Ex 5 (% column 102.8 %); EP 1 285 655 (160 vs 200 mg tablet); EP 0 879 050 Ex 8 (50 mg against a 100 mg
label); EP 1 596 870 (granulate 44.540 vs 44.650 kg; unstated 17 % coat overage); US 10,420,728 (comparative examples
copy examples 14-15); EP 3 038 601 ("200 mm" particles); AU 759018; US 10,004,721; EP 1 506 780; EP 0 519 820;
US 7,642,286 (pravastatin 10 % excess); EP 0 180 364; EP 2 818 160 (10× unit error); EP 1 501 534 (drug left out of the
solution recipe); CN 114569569; CN 103405395; US 3,055,433 ("11 mg" against 1 mg); EP 0 590 963; US 6,548,084 B2
(salt factor 1.144 matches no form; 0.024 mg granulating water); EP 1 685 828 A1; EP 1 781 277 B1; US 12,264,148 B2;
US 2018/0207100 A1; EP 2 594 277 A1 ("250 mm" sieves); EP 2 246 045 A1; IJPSR 2011 bambuterol; EP 0 344 960 A2
("1000rpm" paddle); US 12,296,050 B2 ("free base" of a quaternary ammonium); EP 0 814 789 B2; Lamichhane 2019;
EP 1 746 999 B1 (150 mg stated, lines 200 mg); WO 2018/048847; EP 0 966 287 B1; EP 1 077 691 B1.
