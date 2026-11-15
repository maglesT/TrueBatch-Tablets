# Wave 3 summary (F0201-F0300)

Method changed from wave 3 on: ONE paced source finder downloaded the sources first (EPO publication server first,
Google Patents at one request per 20 s, Europe PMC), then five helpers mapped OFFLINE from the downloaded files.

Formulations with a usable source: **61** of 100 (most are close variants: other strength or process of the same API
and tablet type, each said in its section). NO SOURCE: **39** — F0206, F0210, F0211, F0213, F0217-F0220, F0228, F0233,
F0235, F0239, F0242-F0246, F0248, F0249, F0251-F0253, F0256, F0264, F0267-F0269, F0275, F0277, F0278, F0280, F0281,
F0286, F0289-F0291, F0295 (an effervescent sachet powder, not a tablet: not counted), F0296, F0297.

| Checks mapped | FITS | FITS WITH SETTING | NEW SETTING | GAP | Fit (no new setting or gap) |
|---|---|---|---|---|---|
| 6490 | 6260 | 227 | 3 | 0 | 99.95 % |

Totals recounted by script from every per-formulation Counts line.

Wave 2 retries with the same method: 10 more wave-2 formulations sourced and counted (`wave-02/part-6-retries.md`:
728 checks, 693 FITS, 35 FITS WITH SETTING, 0 new, 0 gaps); wave 2 now counts 61.

## New settings (none truly new; no gaps)

- **C5** (variant of C5; F0201): solvates. If T11 uses the solvate's molecular weight (darunavir ethanolate, factor
  1.0841), the assay is used as is; combining it with a solvent-free basis counts the ethanol twice: refuse.
- **T14** (variant of T14; F0229): stratified content uniformity (e.g. 3 tablets at each of 20 times) with the allowed
  RSD from Bergum's method (ASTM E2709), which moves with the observed mean.
- **Units** (F0250): Hz (drive frequency), converted to rpm only through a factor from the equipment record.

## Safety rules (calculation checks for the master; not GMP rules)

- **Solvate counted twice** (F0201): about 8.4 % too much darunavir.
- **Relative assay vs absolute content** (F0205): an intermediate's assay reported as "% of theoretical" typed as % w/w
  content gives about a third of the dose (or 3.3× the reverse); the master fixes which result type T18 takes.
- **Solvent-wet API cake** (F0204): weighed as dry API gives about 23 % too little; quantity from T12 with the lot's
  measured solvent content.
- **One material with two quantities** (F0250): refuse a formula line that appears with two different amounts.
- **Same API in two layers** (F0259): each layer needs its own weight check and the layer ratio, not only the total.
- **API crystal form must match the master** (F0260): a different form changed bioavailability (about 89 %).
- **One granulation for several strengths** (F0225): API per tablet = tablet weight × granulation share × granulation
  assay, checked against the label before compression (a wrong strength's ratio gives 7-15 % less).
- **Water activity decides the dose** (F0234): a stability-critical limit not to be widened without QA.
- **Suspension dosed by fill** (F0288): stirring confirmed, maximum hold time, fill-weight rounds, per-unit content at
  start, middle and end (extends the wave-2 rule for solutions dosed by fill).
- **Granules cut to a size fraction** (F0125): core weight from that fraction's assay; rejected fractions reconciled.
- Reminders of known rules with their size: label basis per strength and market (amphetamine salts about 60 %,
  sildenafil citrate about 29 %, metoclopramide about 18 %, cyclobenzaprine about 12 %, prazosin about 9.5 %,
  tipiracil 13 %), dry-basis core weight (F0270), enteric polymer as dry polymer not dispersion (F0238: 30 % of the
  coat), allergen potency per lot (F0285: 19-188 % of the dose), content taken at the wrong stage (F0293: −23 %),
  undeclared overages, stated totals below the sum of the lines, double adjustment by granule assay.

## Sources that contradict themselves (detail in the part files)

US 6,384,020 B1; CA 2 773 003 A1; EP 2 561 864 B1; EP 2 566 463 B1; EP 2 228 056 A2; US 2005/0008691 A1;
EP 3 089 741 B1; EP 0 384 600 B1; WO 2009/013356; EP 3 576 718; EP 0 187 626; Patil 2024; IJDD 2012 ofloxacin;
CN 101199489; US 5,358,941; US 2011/0189243; Pharmaceutics 2026; Brovchenko & Trusov 2023; Adarsha 2019;
CN 102429881 A; US 6,099,863; US 2008/0254118; Rathnam 2024; WO 2005/018605; US 12,383,503; DE 10 2010 005 124;
CN 101129355; US 4,517,179; Pak J Pharm Sci 2016; US 6,129,930; US 4,765,989; EP 1 545 467; EP 3 620 155;
EP 3 038 465; US 9,480,661; EP 1 622 587; KR 10-2011-0090142; Pharmaceutics 2024 metoclopramide; Pharmaceutics 2023
pancreatin; Heliyon 2024; EP 2 436 395; EP 0 614 362; EP 0 393 572; EP 2 246 051; Pharmaceutics 2023 sildenafil;
and in the wave-2 retries US 9,283,192, El-Masry 2020, WO 99/18937, RU 2 403 045, RU 2 756 312, DDDT 2025,
Pharmaceutics 2021, US 2015/0030676. Common patterns: totals that do not add up, µm printed as mm, per-tablet values
in batch columns, salt/base not stated, % of the coated tablet applied to the core.
