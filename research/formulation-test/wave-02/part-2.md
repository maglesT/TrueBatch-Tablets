# Wave 2, part 2 (F0121-F0140)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

## F0121 perindopril arginine + amlodipine besylate, uncoated IR, roller compaction

Source: CN 118267364 A, Examples 1 and 3, https://patents.google.com/patent/CN118267364A/en. Close variant: 10 mg perindopril arginine + 5 mg amlodipine (listed 5 + 5 mg).

- Per tablet: perindopril arginine 10 mg, amlodipine besylate 6.935 (= 5 mg amlodipine), lactose 184.4, croscarmellose sodium 10, colloidal silica 0.325, Mg stearate 5.04; 216.7 mg. Both APIs micronised below 10 um.
- Premix 10 min at 40 Hz; dry granulator feed screw 150-200 rpm, rolls 5-10 rpm, primary sizing 100-150 rpm, secondary 100-120 rpm; Mg stearate 10 min.
- Compression: the standard tablet weight is set from the intermediate (blend) content; friability below 1 %, weight variation within +/- 7.5 %.
- Batch 500,000 tablets (108 kg). Standard practice assumed: roll force and gap, screen sizes, hardness and thickness limits, blister with desiccant (moisture, light).

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | standard tablet weight from the final blend assay (T18 content from in-process result) |
| C1 | FITS WITH SETTING | second API content at the chosen tablet weight inside limits (C1 limits around computed value) |
| C5 | FITS WITH SETTING | each strength line states its basis: perindopril arginine as salt, amlodipine as base (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source sets one tablet weight from "the intermediate content" of a two-API blend without saying which API controls it. See safety rules.

Counts: 90 rows; FITS 85, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0122 pravastatin sodium, uncoated IR, wet granulation (fluid-bed drying)

Source: US 7,642,286 B2 (Andrx), Example 1, https://patents.google.com/patent/US7642286B2/en

- Granules (% w/w): pravastatin sodium 13.33, anhydrous lactose 37.67 + 35.00 (two portions), tromethamine 4.00 (dissolved in the granulating water), MCC 10.00.
- Tablet (% w/w): granules 75, anhydrous lactose 18, croscarmellose sodium 5, Mg stearate 1, lake blend 1; 40 mg tablet = 400 mg (granules 300 mg).
- Sift #25; load lactose (large portion), API, MCC, lactose (small portion), mixing after each; granulate with the tromethamine solution; dry to moisture below about 2 % (preferably below 1.8 %); screen #25; blend with lactose, then croscarmellose, Mg stearate and lake; compress.
- Drying "in any acceptable manner": fluid-bed drying assumed. Batch 500,000 tablets (200 kg). Standard practice assumed: liquid quantity, mixer settings, IPC limits; tablet pH in 900 ml water as an IPC (given for Examples 2-3).

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granule ingredients from % w/w of the granule batch (T8 % w/w mode) |
| T8 | FITS WITH SETTING | tablet ingredients from % w/w of the final blend, granules 75 % (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Examples 2 and 3 put 22 mg and 11 mg pravastatin sodium into the "20 mg" and "10 mg" tablets, a 10 % excess that the text never calls an overage. See safety rules.

Counts: 105 rows; FITS 101, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0123 reserpine, uncoated IR, two-stage wet granulation

Source: US 3,055,433 A (Ciba), Example 8, https://patents.google.com/patent/US3055433A/en. Close variant: 1 mg (listed 0.25 mg); starch-paste granulation then a solvent re-granulation with a resin binder (listed fluid-bed granulation).

- Per 1,000 tablets: reserpine 1 g, lactose 41.5, starch 10, hydrolysed starch 5 (as paste); then epoxy-amine resin (the patent's Example 1 product) 30 g and polyvinyl acetate 5 g in 175 g ethanol/chloroform 1:1; Mg stearate 0.5, talc 7; 100 g = 100 mg tablets, 6 mm.
- Powder granulated with the starch paste and dried; the dry granules kneaded with the resin solution to a uniformly moist mass, broken up, dried and sized; Mg stearate and talc added; compressed.
- The resin makes the tablet moisture-resistant; it disintegrates in simulated gastric fluid in a few minutes. Batch 1,000,000 tablets (100 kg) under low-actinic light.
- Standard practice assumed: geometric dilution of the 1 % API, drying limits, sieve sizes, residual-solvent limits, IPC limits. The resin is treated as a bought-in excipient.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The text says each tablet holds "11 milligram" of reserpine; 1 g in 100 g of 100 mg tablets gives 1 mg. See safety rules.

Counts: 114 rows; FITS 112, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0124 telmisartan + metoprolol succinate, film-coated bilayer IR + ER, 40 + 50 mg

NO SOURCE: only Indian labels (metoprolol succinate 47.5 mg = 50 mg tartrate) and bilayer patents for other partners (telmisartan + HCTZ, metoprolol + amlodipine) were found; no formula with a process. Not counted.

## F0125 verapamil hydrochloride 180 mg, film-coated pulsatile, direct compression

NO SOURCE: labels (Covera-HS osmotic) and article abstracts only (HPMC-coated pulsatile verapamil, Univ. Milan; core-in-cup tablets, Acta Pharm. Sin. 2008); the full texts were not reachable (HTTP 403). Not counted.

## F0126 vericiguat, film-coated IR, wet granulation (fluid bed)

Source: EP 2 576 547 B1 (the vericiguat compound patent, Bayer/Adverio), tablet example, paragraphs [0216]-[0219], https://data.epo.org/publication-server/rest/v1.2/patents/EP2576547NWB1/document.html. Close variant: the patent's generic tablet of "the compound of the invention" at 100 mg (listed 2.5 mg); the marketed tablet also has HPMC, SLS, MCC and croscarmellose.

- Per tablet: compound 100 mg, lactose monohydrate 50, native maize starch 50, PVP 25 10, Mg stearate 2; 212 mg; 8 mm, radius of curvature 12 mm.
- Compound, lactose and starch granulated with a 5 % m/m aqueous PVP solution; dried; Mg stearate mixed in for 5 min; compressed at about 15 kN (guide value).
- Plant choices (not in source): top-spray fluid-bed granulation for the listed process; standard HPMC film coat at 3 % for the listed film-coated type. Batch 500,000 tablets (106 kg cores).
- Standard practice assumed: spray rate, temperatures, LOD end point, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source is a generic compound-patent example, not the marketed 2.5 mg product, so the low-dose handling (micronised API, SLS, content uniformity at 1 % drug) is not tested by this outline.

Counts: 99 rows; FITS 97, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0127 zofenopril calcium, film-coated IR, fluid-bed granulation of an API suspension

Source: CN 104138359 B, Embodiment 1 and claim 1, https://patents.google.com/patent/CN104138359B/en. Close variant: 7.5 mg (listed 30 mg), fluid-bed (listed high-shear) granulation.

- Per 1,000,000 cores: zofenopril calcium 7.5 kg, starch 40, lactose 40, sodium carboxymethyl starch 3.0, Mg stearate 1.0; 2 % starch slurry 10 kg (API suspended in it) + 10 kg sprayed; core about 91.9 mg with the slurry starch.
- API milled through 100 mesh and stirred into the slurry at 100 rpm; the suspension sprayed in a Glatt WSG-60 onto starch, lactose and CMS-Na, then the second 10 kg slurry; air 880-1160 m3/h, pump 75-85 rpm, atomising 1.9 bar.
- Drying: air 880-1100 m3/h, product 20-60 C, inlet 40-80 C, moisture 1.8-2.9 % by rapid analyser; size through 24 mesh; Mg stearate; size fraction 45 +/- 5 %, bulk density 0.67 +/- 0.02 g/ml; Fette rotary press.
- Coat: Opadry at 18 % in water, 2-3 % gain, pan 5.5 rpm, product 40-45 C. Standard practice assumed: blend times, IPC limits, hold times.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | strength stated as zofenopril calcium (salt, 2 molecules per Ca): no T11 factor (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The size distribution limit "45 +/- 5 %" does not name the sieve fraction; the claims call the slurry "q.s." while the example fixes 2 x 10 kg.

Counts: 111 rows; FITS 108, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0128 ertugliflozin pidolate 5 mg, film-coated IR, roller compaction

NO SOURCE: the compound and cocrystal patents (EP 2 334 687 B1, EP 2 496 583 B1) were read and have no tablet example; no formulation patent or article with quantities was found. Not counted.

## F0129 evogliptin tartrate 5 mg, film-coated IR, fluid-bed granulation

NO SOURCE: WO 2024/043358 A1 (Dong-A) was read: it gives evogliptin tartrate 6.87 mg only as the immediate-release layer of a metformin ER bilayer tablet, not the single-API tablet; the other sources found are FDC articles. Not counted.

## F0130 mitiglinide calcium hydrate 10 mg, IR tablet, direct compression

Source: US 2009/0311321 A1 (Kissei), Comparative Example 1, https://patents.google.com/patent/US20090311321A1/en. Close variant: the uncoated direct-compression comparator of an ODT patent; the listed film coat is added as standard practice.

- Per tablet: mitiglinide calcium hydrate 10.0 mg, co-spray-dried lactose/starch granules (Starlac) 135.0, aspartame 2.0, calcium stearate 2.0, light anhydrous silicic acid 1.0; 150.0 mg.
- API, Starlac and aspartame mixed; lubricated with calcium stearate and silica; compressed at 150 mg, 7 mm punches, about 6 kN.
- Plant choices (not in source): HPMC film coat at 3 %; batch 1,000,000 tablets (150 kg).
- Standard practice assumed: blend times, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | strength on the hydrate salt, CoA assay anhydrous: hydrate factor then water correction allowed (known, wave 1, F0088) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 77 rows; FITS 74, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0131 desmopressin, oral lyophilisate (ODT), freeze-dried in the blister

Source: EP 1 501 534 B1 (Ferring), Examples 1 and 4, https://data.epo.org/publication-server/rest/v1.2/patents/EP1501534NWB1/document.html. Close variant: 200 ug (listed 120 ug).

- Per unit (Example 1): desmopressin 200 ug, mannitol 15 mg, fish gelatin 20 mg, citric acid q.s. to pH 4.8, water removed.
- Solution: fish gelatin 4 g and mannitol 3 g in 93 g water, pH checked and adjusted with citric acid; 500 mg dosed into each 16 mm PVC/PVdC blister pocket.
- Frozen at -110 C in a freeze tunnel (3.2 min), held more than 1.5 h at -25 +/- 5 C, freeze-dried overnight (shelf 10 C rising to 20 C, 0.5 mbar); moisture checked by the drying trace and a pressure-rise check before unloading.
- Batch 200,000 units (about 100 kg solution). Standard practice assumed: peptide content basis, solution hold time, lidding, disintegration and residual-moisture limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | peptide content stated as desmopressin (as parent): no T11 acetate factor (C5 extended) |
| T8 | FITS WITH SETTING | citric acid per unit from the recorded q.s. additions (T8 "% of" a recorded weight) |
| T8 | FITS WITH SETTING | dose mass = dosed volume x solution density (T8 product of readings) |
| C1 | FITS WITH SETTING | mean fill weight within +/- % of 500 mg (C1 option: limits around computed value) |
| T1 | FITS WITH SETTING | pressure-rise moisture check: pressure rise over a fixed time (T1 "Difference") |

Note: The Example 1 solution recipe names gelatin, mannitol and water but not the desmopressin; the per-unit table gives the 200 ug. The patent says "desmopressin" while the product label is "as acetate"; the master must state that the potency is as desmopressin (C5).

Counts: 66 rows; FITS 61, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0132 fludrocortisone acetate 0.1 mg, uncoated IR, direct compression

Source: CN 114569569 B, Example 1 and Table 1, https://patents.google.com/patent/CN114569569B/en. Close variant: direct compression (listed fluid-bed granulation).

- Mass ratio (Table 1, g): fludrocortisone acetate 1, lactose (spray-dried) 800, directly compressible starch 150, talc 40, Mg stearate 9; 1,000 g = 0.1 mg in a 100 mg tablet. No ionic excipients (the stability point of the patent).
- API and lactose sieved 40 mesh into the mixer; DC starch added, 12 rpm for 30 min; talc 5 min; Mg stearate 5 min; compressed.
- Dissolution: paddle 75 rpm, 500 ml pH 4.5, not less than 85 % in 15 min. Batch 1,000,000 tablets (100 kg, API 100 g) with potent-compound handling.
- Standard practice assumed: API pre-dilution (0.1 % w/w), blend uniformity sampling, IPC limits, storage condition on the label.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 66 rows; FITS 64, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0133 levosulpiride 25 mg, uncoated IR, direct compression

Source: CN 102871978 A, Embodiment 1 and claim 3, https://patents.google.com/patent/CN102871978A/en. Close variant: direct compression (listed fluid-bed granulation).

- Per 1,000 tablets: levosulpiride 25 g, MCC 80, crospovidone 10, Mg stearate 0.5; 115.5 mg tablet.
- The prescribed quantities are blended and compressed; dissolution in 1,000 ml 0.1 M HCl at 50 rpm is complete in 3-5 min.
- Batch 1,000,000 tablets (115.5 kg). Standard practice assumed: sieving, separate lubrication step, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The process is one line ("blend and compress"); the lubrication step and all limits are standard practice.

Counts: 59 rows; FITS 57, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0134 mebeverine hydrochloride 135 mg, film-coated IR, foam granulation

NO SOURCE: EP 0 393 747 A2 was read but is a colon-targeted coated form; the only IR example, US 3,265,577 A (Philips-Duphar, 50 mg coated tablets), is a garbled OCR scan in which the kernel formula and its process cannot be matched reliably; SmPCs give lactose content only. Not counted.

## F0135 pancrelipase (pancreatin), enteric-coated 2 mm mini-tablets in capsules, direct compression

Source: EP 2 818 160 B1, Examples 5 and 7, https://data.epo.org/publication-server/rest/v1.2/patents/EP2818160NWB1/document.html. Close variant: direct compression (listed high-shear granulation); low strength 675-825 USP lipase units per capsule (listed 5,000 Ph. Eur. units).

- Blend, 372 kg batch: MCC A 297.6 kg (80 %), pancrelipase 37.2 (10 %), croscarmellose sodium 11.16 (3), hydrogenated castor oil 3.72 (1), colloidal silica 1.86 (0.5), MCC C 18.6 (5), Mg stearate 1.86 (0.5); blend density 0.75-0.76 g/ml.
- Compressed with round 2 mm bevelled punches: 20 rpm, forced feeder 20 rpm, about 10 kN main and pre-compression, dosing depth 5-5.5 mm; thickness 2.0-2.4 mm, friability below 2.5 % (USP drum, 20 g, 30 min at 25 rpm).
- Enteric coat (Example 7): HP-55 7.64, triethyl citrate 0.76, talc 3.82, acetone 87.78 % w/w, started at product 15-32 C; coated mini-tablets filled into low-moisture HPMC capsules with desiccant.
- Standard practice assumed: coat level (not given in the example), lipase units per capsule from the coated activity, acid/buffer test, residual acetone.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | pancrelipase quantity from the lot lipase activity, USP units/mg (T18 units per mass) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability, USP drum on 20 g of mini-tablets, 30 min at 25 rpm (T5 loss mode) |
| T18 | FITS WITH SETTING | capsule fill weight from the coated mini-tablet activity to 750 USP units (T18 in-process content) |

Note: Example 5 gives the mini-tablet weight as 0.074-0.086 g (mean 0.079 g), which a 2 mm x 2.2 mm tablet cannot hold; about 7.9 mg fits the geometry. See contradicting sources.

Counts: 99 rows; FITS 95, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0136 polaprezinc 75 mg, orally disintegrating tablet, wet granulation

Source: JP 2017-002045 A (Zeria), Example 1, https://patents.google.com/patent/JP2017002045A/en. Close variant: high-shear wet granulation (listed direct compression).

- Granules (% w/w): polaprezinc 68.2, D-mannitol 17.1, HPC 0.9, crospovidone 10.9, light anhydrous silicic acid 2.2, powdered reduced maltose syrup 0.5, sucralose trace; wet high-shear granulation, tray dried.
- Final blend (% w/w): granules 84.6, D-mannitol 14.2, l-menthol and flavour traces, Mg stearate 1.0; compressed on a rotary press to about 130 mg holding 75 mg polaprezinc.
- Targets: hardness 30-100 N for 7-8.5 mm round tablets, oral disintegration usually within 39 s (preferably 30 s); hardness kept after 1 day open at 30 C / 75 % RH.
- Batch 500,000 tablets (65 kg). Standard practice assumed: granulating water, LOD end point, the "trace" quantities, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granule ingredients from % w/w of the granule batch (T8 % w/w mode) |
| T8 | FITS WITH SETTING | final blend: granules 84.6 %, mannitol 14.2 %, Mg stearate 1.0 % (T8 % w/w mode) |
| C5 | FITS WITH SETTING | strength stated as polaprezinc (zinc complex), not as zinc: no "as element" step (C5 extended) |
| T18 | FITS WITH SETTING | target tablet weight (about 130 mg) from the final blend assay for 75 mg (T18 in-process content) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The "trace" ingredients have no quantities (each list adds up to 99.8 %), so the plant must fix them before the master can be built.

Counts: 101 rows; FITS 95, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0137 prochlorperazine maleate 3 mg, buccal tablet, direct compression

Source: EP 0 180 364 B1 (Reckitt & Colman), Example 8, https://data.epo.org/publication-server/rest/v1.2/patents/EP0180364NWB1/document.pdf

- Per tablet: sucrose (Dipac) 26.25 mg, mannitol 26.25, locust bean gum 1.5, xanthan gum 1.5, prochlorperazine maleate 3.0, Mg stearate 0.5, talc 1.0; 60 mg.
- Powders screened through 750 um, blended, compressed with 5.56 mm normal concave punches at 2-4 kN; breaking strength 20-50 N (Example 1). The tablet gels in the buccal pouch and releases over up to 2 h.
- Claims fix the xanthan : locust bean gum ratio (3:1 to 1:1) and the saccharide : gum ratio (20:1 to 5:1); the in-vitro release test is basket 100 rpm in pH 6.7 phosphate buffer.
- Batch 1,000,000 tablets (60 kg) on a rotary press under low-actinic light. Standard practice assumed: geometric dilution of the 5 % API, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | strength stated as the maleate (UK claim): no T11 base factor (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 70 rows; FITS 67, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0138 sennosides 7.5 mg, uncoated IR, roller compaction

NO SOURCE: only UK and US labels (calcium sennosides with lactose, dicalcium phosphate) were found; no formula with quantities and a process. Not counted.

## F0139 sodium picosulfate, uncoated IR tablet core, high-shear wet granulation

Source: CN 103405395 A, Example 1 (7.5 mg core), https://patents.google.com/patent/CN103405395A/en. Close variant: 7.5 mg (listed 5 mg), high-shear (listed fluid-bed); only the immediate-release core is used, without the patent's isolation and enteric coats.

- Per core: sodium picosulfate 7.5 mg, lactose 50, starch 30, MCC 30, HPC 1.5 (as 3 % w/w aqueous binder), sodium carboxymethyl starch 5, Mg stearate 0.5, silica 0.5; 125 mg.
- API below 80 mesh, excipients below 60 mesh; mixed in a high-shear granulator, granulated with the binder, dried at 45-55 C, sized; Mg stearate and silica added; compressed.
- Core release: not less than 85 % in 15 min in 900 ml water, paddle 50 rpm. Batch 1,000,000 tablets (125 kg).
- Standard practice assumed: liquid quantity, LOD end point, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | hydrate form of sodium picosulfate not named: the master states the basis (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source does not say whether the 7.5 mg is anhydrous sodium picosulfate or the monohydrate.

Counts: 94 rows; FITS 91, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0140 etamsylate 500 mg, uncoated IR, high-shear wet granulation

NO SOURCE: only labels (Dicynone: one antioxidant named, the rest q.s.), synthesis and injection patents were found; no tablet formula with a process. Not counted.

## Totals for F0121-F0140

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0121 | 90 | 85 | 5 | 0 | 0 |
| F0122 | 105 | 101 | 4 | 0 | 0 |
| F0123 | 114 | 112 | 2 | 0 | 0 |
| F0126 | 99 | 97 | 2 | 0 | 0 |
| F0127 | 111 | 108 | 3 | 0 | 0 |
| F0130 | 77 | 74 | 3 | 0 | 0 |
| F0131 | 66 | 61 | 5 | 0 | 0 |
| F0132 | 66 | 64 | 2 | 0 | 0 |
| F0133 | 59 | 57 | 2 | 0 | 0 |
| F0135 | 99 | 95 | 4 | 0 | 0 |
| F0136 | 101 | 95 | 6 | 0 | 0 |
| F0137 | 70 | 67 | 3 | 0 | 0 |
| F0139 | 94 | 91 | 3 | 0 | 0 |
| **Total (13 counted)** | **1151** | **1107** | **44** | **0** | **0** |

Counted 13 formulations, 1,151 rows: FITS 1,107, FITS WITH SETTING 44, NEW SETTING 0, GAP 0. NO SOURCE 7 (F0124, F0125, F0128, F0129, F0134, F0138, F0140).

NO SOURCE (7): F0124, F0125, F0128, F0129, F0134, F0138, F0140. Google Patents was unavailable (HTTP 503) for about an hour of this run and the shared web-search budget ran out, so the search for these seven was shorter than usual; F0124 (telmisartan + metoprolol bilayer), F0125 (verapamil pulsatile), F0128 (ertugliflozin) and F0140 (etamsylate) are worth another search.

New settings and gaps: none. Every non-FITS row is an existing setting or a known finding (C1 limits around a computed value, T5 loss mode, T8 % w/w, T8 product of readings, T8 "% of" a recorded weight, T18 units per mass, T18 in-process content, T1 "Difference", C5 extended "as parent", C5 label basis per market from wave 1).

Safety rules:
- Two-API blend, one tablet weight (F0121): the source sets the compression weight from "the intermediate content" of a blend holding perindopril arginine and amlodipine. Moving the weight to correct one API changes the dose of the other by the same %. The master must name the controlling API, compute the other API's content at the chosen weight and refuse the weight if it falls outside its limits (T18 + C1 on both). The wave 1 double-adjustment rule (no T18 weight correction on top of T9 at dispensing) also applies.
- Unstated API excess (F0122): US 7,642,286 puts 22 mg and 11 mg pravastatin sodium into the "20 mg" and "10 mg" tablets. Copied as plain T8 lines this is a hidden 10 % overdose. Master check: each API line must equal the label claim x the T11 factor (or 1); any excess must be entered as a T16 overage with a reason, or the master is refused.
- Unit error in a target weight (F0135): EP 2 818 160 states a 2 mm mini-tablet weight of 0.074-0.086 g; the tooling (2 mm x 2.0-2.4 mm) holds about 7-9 mg. A target weight or capsule fill count built on the printed value is 10 times wrong. Master check: the target weight must be plausible for the tooling (punch face area from the equipment record x thickness x true density, T8 product of readings, then C1 high limit).
- Peptide basis (F0131, reminder, covered by C5 extended): the patent doses "desmopressin" while the label says "as acetate"; acetate and water make up several % of the weighed peptide. The master must state the basis of the peptide content; treating 200 ug as acetate salt would give a few % less peptide.
- Salt basis by market (F0137, reminder, known wave 1): prochlorperazine maleate 3 mg is about 1.85 mg base (factor 1.62); the strength claim must state the maleate basis so no T11 factor is applied.
- Stated strength against batch arithmetic (F0123): US 3,055,433 says each tablet holds "11 milligram" reserpine, while 1 g in 1,000 tablets of 100 mg gives 1 mg. A master built from the stated strength would scale the API 11 times. The F0122 master check (API per tablet = batch API / number of tablets = label claim x factor, else refuse) catches this too.

Sources that contradict themselves:
- US 3,055,433 A (F0123): "11 milligram" of reserpine per 100 mg tablet against 1 g per 100 g of tablets (1 mg).
- CN 114569569 B (F0132): in Table 1 the marketed-generic column shows a stabiliser subtotal of 4 g although its sodium benzoate line is N/A and its lines already total 1,000 g.
- CN 103405395 A (F0139): enteric sample 3 lists Eudragit FS 30D 60 mg; its lines total 205 mg if 60 is dry polymer and 163 mg if 60 is the 30 % dispersion, but the stated total is 170 mg. The 2.5 mg tablet's isolation coat (4 on 77 mg = 5.2 %) and enteric coat (25 on 81 mg = 30.9 %) fall just outside the patent's own 2-5 % and 20-30 % ranges.
- US 7,642,286 B2 (F0122): Example 2 ("20 mg") holds 22 mg pravastatin sodium and Example 3 ("10 mg") 11 mg, with no overage stated. The Example 2 granule lines add up to 195 mg against the 200 mg used in the tablet, and the Example 3 lines to 98 mg against 100 mg.
- EP 0 180 364 B1 (F0137): Examples 2-4 give talc 0.1 mg where all other examples give 1.0 mg; the lines then total 49.1 mg against the stated 50 mg tablet (50.0 mg with 1.0 mg talc).
- EP 2 818 160 B1 (F0135): the mini-tablet weight of 0.074-0.086 g (mean 0.079 g) cannot fit a 2 mm x 2.2 mm tablet (about 8 mg), while the 1.5 mm microtablets' 0.0034 g fits. Example 6 says its 10 % mini-tablet batches were "prepared as in example 4" (the 15 % microtablets). Example 7 calls the microtablets and mini-tablets "Examples 5 and 6" when they are Examples 4 and 5, and says they were coated "by fluid bed ... in a coating pan".
- EP 1 501 534 B1 (F0131): the Example 1 solution recipe (gelatin, mannitol, water, citric acid) leaves out the desmopressin that the per-unit table lists at 200 ug.
- EP 0 590 963 A1 (F0139, read but not used): Example 5 makes "2.5 mg triazolam per tablet" from 2.5 g triazolam in about 3,000 g of solids, which is 1,000 tablets of about 3 g from a 10 mm x 4.5 mm mould. Example 6 says "2.5 g of picosulfate per tablet". Example 7 gives 5 mg haloperidol per tablet from 10 g in about 3,000 g. The per-tablet amounts cannot all be right; about 0.25 mg per tablet fits the mould.
