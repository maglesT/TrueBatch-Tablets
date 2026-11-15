# Wave 1, part 5 (F0081-F0100)

Each section lists only the rows that are not plain FITS. The counts include every row of the outlined master batch record.
Where a source gives parts, ratios or a batch in grams and no tablet count, the per-tablet figure below is worked out from it, and the text says so. "Standard practice" marks the parts of the process the source does not give.

## F0081 perphenazine, sugar-coated IR, high-shear wet granulation

NO SOURCE. Labels give strengths and excipient names only; the patents found are about salts, ODTs, 3D printing or plant equipment. No sugar-coated example with a formula. Not counted.

## F0082 risperidone, ODT IR, direct compression (close variant: 0.5 mg OD mini-tablet)

Source: El-Say K.M. et al., Acta Pharm. 65 (2015) 365-382, doi 10.1515/acph-2015-0038, https://hrcak.srce.hr/file/212662. Close variant: 0.5 mg in a 2 mm mini-tablet (listed 1 mg ODT).

- Per mini-tablet: risperidone 0.5 mg, Avicel and mannitol (1.3-2.6 mg each, design runs; optimum 60 % mannitol / 40 % Avicel), superdisintegrant 0.5 mg (Ac-Di-Sol in the optimum), Aerosil 50 µg (200 + 300 at 1:1 in the optimum), aspartame 25 µg, peppermint oil 25 µg. Stated tablet mass 5 mg.
- Process: every material through 40 mesh, geometric mixing, glidant and lubricant last (5 min), compress on concave round punches.
- Tests: weight of 20, content uniformity (30 sampled, 10 assayed; both CU and mass variation because the unit is under 25 mg), crushing strength, friability on about 1 g of mini-tablets in a shaken vial, disintegration in simulated saliva and in milk.
- Batch 2,000,000 mini-tablets (10 kg). Standard practice assumed: lubricant identity and level, room RH limit, blend uniformity sampling, yield limits.

| Template | Result | Step |
|---|---|---|
| T1 / C1 | FITS WITH SETTING | balance minimum weight from the equipment record for the 50 g aspartame and peppermint portions |
| C1 | FITS WITH SETTING | mean mini-tablet weight within +/- % of 5 mg |
| T5 | FITS WITH SETTING | friability (loss mode) on a 1 g sample |

Counts: 54 rows; FITS 51, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0083 trazodone hydrochloride, film-coated ER hydrophilic matrix, wet granulation

Source: CN 105748421 A, embodiments 3-4 (wet granulation), https://patents.google.com/patent/CN105748421A/en. Formula in % w/w only.

- Wet-granulated embodiment: trazodone HCl 49.02 %, HPMC K100M 25.33 %, lactose (80-100 mesh) 23.69 %; colloidal silica and Mg stearate make up the rest (about 2 %, not split). Binder 80 % ethanol; 30 mesh wet and dry sizing; drying 55 +/- 5 °C. Colour film coat from a 10 % aqueous dispersion.
- Worked out: 300 mg strength at 49.02 % gives a core of about 612 mg.
- Batch 200,000 tablets (122 kg core). Standard practice assumed: silica/Mg stearate split (1.5/0.5 %), LOD limit, dissolution time points (24 h profile), coat weight gain 3 %, high-shear equipment.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w of the batch weight |
| T17 | FITS WITH SETTING | 80 % ethanol binder made up by mass and volume via density |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 66 rows; FITS 62, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0084 penicillamine, film-coated IR (close variant: 300 mg in a 500 mg core, solvent granulation)

Source: US 4,847,297 A, Examples 1-2, https://patents.google.com/patent/US4847297A/en. Close variant: 300 mg (listed 250 mg); isopropanol/water granulation instead of fluid-bed.

- Per tablet (batch of 1,000): D-penicillamine 300, disodium EDTA 0.25, corn starch 30, silica 5.25 (inner); binder Luviskol VA 64 12 in isopropanol 102 g + water 6 g per 1,000; outer: corn starch 90, cellulose 50, silica 10, Mg stearate 1.5. Core about 499 mg (stated 500 mg).
- Coat: 87.5 mL suspension per 500 g of cores; ethylcellulose 2 %, HPC 1 %, PEG 2.5 %, glycerol 0.5 %, TiO2 3.5 %, talc 1.5 % in isopropanol and 1,1,1-trichloroethane (44.5 % each).
- Batch 300,000 tablets (150 kg). Standard practice assumed: drying temperature and LOD, sieve sizes, IPC limits; the chlorinated solvent would be replaced today (Class 1 solvent), so a residual-solvent check is shown on the coat.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | coating suspension per mass of cores ("% of" a recorded weight: the actual core weight) |
| T17 | FITS WITH SETTING | coating suspension made up by volume via density |
| T1 / C1 | FITS WITH SETTING | balance minimum weight for EDTA (75 g per batch, 0.05 % of the batch) |
| C1 | FITS WITH SETTING | mean weight within +/- % of 500 mg |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 70 rows; FITS 65, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0085 sodium chloride, film-coated ER hydrophobic matrix, melt granulation

NO SOURCE. The Slow Sodium SmPC gives the strength and excipient names; US 4,140,756 A names sodium chloride but its examples are potassium chloride. No example with a formula. Not counted.

## F0086 levocetirizine dihydrochloride + montelukast sodium, film-coated bilayer (close variant: layer 1 roller-compacted)

Source: KR 2024-0045586 A, Example 1, https://patents.google.com/patent/KR20240045586A/en. Close variant: montelukast layer by roller compaction, levocetirizine layer granulated (method not named); listed fluid-bed for both.

- Layer 1 (176 mg): montelukast sodium 10.40 (= 10 mg montelukast), mannitol 69.80, MCC 69.30, HPC 4.50, croscarmellose 20.00, Mg stearate 2.00.
- Layer 2 (74 mg): levocetirizine (salt as named) 5.00, anhydrous lactose 50.50, MCC 7.00, HPC 3.50, croscarmellose 7.00, Mg stearate 1.00. Core 250 mg; both layer totals add up.
- Coat: Opadry 10 mg from ethanol 41.25 mg + water 13.75 mg per tablet (about 4 % gain). Finished-tablet water not more than 4.0 %.
- Batch 400,000 tablets. Standard practice assumed: roll force, screen, layer-2 fluid-bed granulation with HPC solution, LOD, light protection for montelukast, layer separation check.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | montelukast sodium for montelukast (any two named forms) |
| T23 | FITS WITH SETTING | ribbon solid fraction by envelope density (optional) |
| C1 | FITS WITH SETTING | each layer weight within +/- % of its target (2 rows) |
| T17 | FITS WITH SETTING | coating solution in ethanol/water by volume via density |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 82 rows; FITS 76, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0087 Phleum pratense grass pollen extract, sublingual oral lyophilisate, freeze-drying

Source: US 9,415,015 B2 (ALK-Abello), Examples 1 and 3, https://patents.google.com/patent/US9415015B2/en.

- Per unit (Example 3): grass extract 75,000 SQ-U (0.141 mg extract), fish gelatin 16 mg, mannitol 14 mg, NaOH q.s. to pH 7.5, water q.s. to 250 mg dosing solution. Dry unit 30 mg, 12 mm. The extract amounts are consistent across strengths (about 532 SQ-U per µg).
- Process: mannitol in at least 50 % of the water; gelatin dissolved; extract vials reconstituted with not more than 35 % of the water and added; pH 7.5; water to final mass; dose into pre-formed blisters at ambient; liquid-nitrogen freeze tunnel; frozen store; freeze-dry; seal with lidding foil; sachet.
- Tests: disintegration, Karl Fischer water, allergen released on handling (SQ-U per unit), potency by immunoassay.
- Batch 300,000 units (75 kg dosing solution). Standard practice assumed: freeze-drying cycle values, hold-time limits, fill-weight IPC frequency.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | extract quantity from the lot's potency in SQ-U per mg |
| T6 | NEW SETTING | whole containers: vials of extract needed = SQ-U required ÷ SQ-U per vial, rounded UP to whole vials, with the excess SQ-U shown (and how it is handled: partial vial weighed or batch scaled). Variant of T6 |
| C1 | FITS WITH SETTING | mean dry unit weight within +/- % of the value computed from the dosing mass and the solids |

Counts: 64 rows; FITS 61, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0088 procaterol hydrochloride hemihydrate, IR (close variant: about 25 µg, uncoated, solution wet granulation)

Source: CN 108295035 A, Example 1, https://patents.google.com/patent/CN108295035A/en. Close variant: about 25 µg per 50 mg tablet (worked out: 2.5 g for 100,000 tablets); listed 50 µg film-coated fluid-bed.

- Per batch of 100,000: procaterol HCl 2.5 g dissolved in 100 mL water plus 0.6 kg ethanol, poured onto 65 % of the MCC (3.6 kg in all); sieved, dried 60 °C up to 5 h; then pregelatinised starch 1.2 kg, croscarmellose 0.17 kg and the rest of the MCC; sieved 4-6 times; 50 mg tablets on 4.5 mm punches; weight within about +/- 7 %; CU acceptance value under 15; yield 97.5 %.
- Mass balance: solids 4.97 kg against 5.0 kg for 100,000 tablets (the ethanol evaporates), so it adds up.
- Batch 2,000,000 tablets. Standard practice assumed: lubricant (none named), LOD limit, coat for the listed form, light protection.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | API solution in water + ethanol, liquids by volume via density |
| F7 | FITS WITH SETTING | 4-6 sieving passes on the same lot (N cycles, no split) |
| C5 / T11 | NEW SETTING | label stated as the hydrate itself (procaterol hydrochloride hemihydrate, the Japanese label form) while the CoA assay is on the anhydrous basis: the chain hydrate-to-anhydrous factor (MW ratio below 1) followed by a water correction is valid here and must not be refused as a double count; it is refused only if the factor runs the other way. Variant of C5 |

Counts: 58 rows; FITS 55, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0089 rupatadine fumarate, uncoated IR, high-shear wet granulation

Source: CN 113081980 A, Example 1, https://patents.google.com/patent/CN113081980A/en. The tables are images; the per-tablet figures below are worked out from the stated ratios.

- Ratios to API: API : MCC (pre-mix, jet-milled together) 1 : 0.5; API : pregelatinised starch : lactose 1 : 0.5 : 5.5; Mg stearate 1 : 0.05; iron oxides yellow/red 1 : 0.002 : 0.008; MCC 17 % of total. Worked out for 12.8 mg fumarate (10 mg base): about 109 mg tablet.
- Process: jet-mill API + part of MCC (0.2-0.6 MPa); high-shear mix 300 s, water 20-40 % of the pre-mix over 60 s, granulate 180 s; fluid-bed dry at 60-70 °C inlet, discharge when product is 30-45 °C and moisture is under 3 %; blend, lubricate, compress.
- Batch 10,000 tablets in the patent; used 500,000. Standard practice assumed: sieve sizes, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | fumarate for base (any two named forms) |
| T8 | FITS WITH SETTING | granulating water as % of the recorded pre-mix weight |
| F2 | FITS WITH SETTING | dry until ALL checks pass: product 30-45 °C and moisture under 3 % |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 60 rows; FITS 55, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0090 rupatadine fumarate + montelukast sodium, film-coated IR, fluid-bed

NO SOURCE. EP 3 397 285 A1 and WO 2017/182641 A1 describe the right process (fluid-bed spray granulation with water) but give only % ranges, whose minimums already exceed the stated layer totals; no single formula. Not counted.

## F0091 delamanid, film-coated IR (close variant: 100 mg, hot-melt extrusion then direct compression)

Source: EP 4 563 147 A1 (Otsuka), Example C and Formulation 5, https://patents.google.com/patent/EP4563147A1/en. Close variant: listed 50 mg high-shear granulation; the source makes a melt-extruded dispersion.

- Dispersion: delamanid 40 g, Soluplus 160 g, HPMCP HP-50 120 g, dl-alpha-tocopherol 9.6 g; twin-screw 40 rpm, 180 °C, 1 mm die; ground, sieved through 53 µm (12.1 % drug).
- Tablet: dispersion 824 mg (100 mg delamanid), light anhydrous silicic acid 10, MCC KG-1000 50, carmellose 125, sodium starch glycolate 75, Mg stearate 5; about 1,089 mg; 18.0 x 10.8 mm caplet at 20 kN. Coat: HPMC 18, PEG 6000 3, TiO2 5.7, talc 3, yellow iron oxide 0.3 parts in water (amount not given).
- Batch 100,000 tablets. Standard practice assumed: coat 3 % gain, light protection, amorphous check by XRPD, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | dispersion quantity from the in-process assay of the extrudate |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 72 rows; FITS 69, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0092 ethambutol hydrochloride, dispersible IR

NO SOURCE. Four WHOPARs (TB334, TB368, TB406, TB411) give excipient names and a (non-aqueous) wet granulation, no quantities. Not counted.

## F0093 oxybutynin hydrochloride, osmotic push-pull, printed (close variant: 5 mg)

Source: US 5,912,268 A (Alza), Example 1 and the 5 mg example, https://patents.google.com/patent/US5912268A/en. Close variant: 5 mg (no 10 mg example given).

- Drug layer 147 mg: oxybutynin 5, PEO 200,000 111.60, HPMC 7.35, NaCl 22.05, BHT 0.12, Mg stearate 0.88. Push layer 98 mg: PEO 7,000,000 62.40, NaCl 29.40, HPMC 4.90, BHT 0.08, red iron oxide 0.98, Mg stearate 0.24.
- Drug layer granulated with the drug dissolved in anhydrous ethanol, 16 mesh wet, dried overnight at room temperature, 20 mesh; bilayer at 1 ton, 0.873 cm punch.
- Wall 26.4 mg: cellulose acetate 95 %, PEG 3350 5 % in acetone:water 90:10 at 4 % solids; laser-drilled 0.51 mm orifice; dried 48 h at 50 °C / 50 % RH, then 1 h at 50 °C.
- Batch 300,000 tablets. Standard practice assumed: colour overcoat, printing and inspection, residual acetone limit, release time points.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | drug solution in ethanol by volume via density |
| C1 | FITS WITH SETTING | drug-layer and push-layer weights within +/- % of target (2 rows) |
| T1 | FITS WITH SETTING | wall weight in mg = mean coated − mean core ("Difference") |
| T13 | FITS WITH SETTING | 48 h curing counted only while F6 rounds show 50 °C / 50 % RH |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 96 rows; FITS 90, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0094 terazosin hydrochloride dihydrate, uncoated IR, direct compression

NO SOURCE. CN 106619548 A gives the process only (tables empty); US 5,362,730 A has a soft capsule, no tablet. Not counted.

## F0095 udenafil, IR (close variant: 10 mg, two-stage wet granulation)

Source: CN 109260162 A, Example 3, https://patents.google.com/patent/CN109260162A/en. Close variant: 10 mg (listed 100 mg) and ethanol/water granulation instead of roller compaction.

- Per 1,000 tablets: udenafil 10 g (D90 25 µm), Tween 80 2.0, disodium EDTA 8.5, CaHPO4 8.5, anhydrous lactose 45, starch 30, silica 7.5, croscarmellose 2.5, Mg stearate 1.2; total 115.2 g (about 115 mg tablet).
- Stage 1: API, EDTA, half the CaHPO4 and a third of the starch, wetted with Tween 80 in 55 % ethanol, dried 60 °C, 60 mesh. Stage 2: with the rest, wetted again, dried 60 °C, 40 mesh; lubricate; compress.
- Batch 500,000 tablets. Standard practice assumed: LOD limits, film coat, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 64 rows; FITS 62, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0096 chromium picolinate, uncoated IR, direct compression (close variant: with bromelain)

Source: RO 130484 A2, preferred formula, https://patents.google.com/patent/RO130484A2/en. Close variant: a second active (bromelain 1 mg) is present.

- Per tablet: chromium picolinate 0.5 mg, bromelain 1 mg, "tabletose" (lactose) 198.5, MCC 60, starch 20, Kollidon CL-M 4, talc 7, Mg stearate 9; total 300 mg.
- Process: excipients homogenised in a mixer, actives then added, compressed.
- Basis not stated: 0.5 mg of the compound is about 62 µg chromium (12.4 % Cr). Used as written.
- Batch 1,000,000 tablets. Standard practice assumed: geometric dilution of 500 g API, blend uniformity, bromelain activity units, USP 95-125 % limits for chromium.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | chromium content from the lot's % elemental Cr |
| T18 | FITS WITH SETTING | bromelain from the lot's activity units per mg |
| C1 | FITS WITH SETTING | mean weight within +/- % of 300 mg |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 46 rows; FITS 42, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0097 thiamine hydrochloride, IR (close variant: fluid-bed granules, then tablets)

Source: EP 0 178 138 B1 (Takeda), Example 4 (thiamine HCl granules) and Example 6 (tableting ratio, shown with thiamine nitrate), https://data.epo.org/publication-server/rest/v1.2/patents/EP0178138NWB1/document.pdf. Close variant: no slugging, no film coat in the source.

- Granules: thiamine HCl 96.5 parts (through 77 µm) fluidised and sprayed with 5 % HPC in water to 3.5 parts solids; dried in the unit; Power mill 1.0 mm; 5.3 % on 500 µm, 17.2 % through 105 µm.
- Tablet (Example 6 ratio): granules 103.1, corn starch 6.6, Mg stearate 0.3 parts; 110 mg, 6.5 mm, 4.9 kg hardness, disintegration 4.2 min. For 100 mg thiamine HCl: granules about 103.6 mg.
- Batch 500,000 tablets. Standard practice assumed: film coat 3 %, LOD limit, IPC limits, assay on the dried basis.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | binder solids sprayed = solution used × 5 % (product of two readings); stop at 3.5 parts |
| T18 | FITS WITH SETTING | granule quantity from the in-process assay of the granules |
| C1 | FITS WITH SETTING | hardness in kgf |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 62 rows; FITS 57, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0098 zinc sulfate monohydrate, effervescent (close variant: dry process)

Source: DE 25 15 365 C2, Example 4, https://patents.google.com/patent/DE2515365C2/en. Close variant: the source dries the ingredients and mixes; no solvent granulation.

- Per tablet (batch read as 1,000): zinc sulfate 125 mg (45 mg zinc), sodium dihydrogen citrate 400, sodium bicarbonate 200, sorbitol 400, flavours q.s.; about 1.13 g. One tablet in 100 mL water gives pH 5.2.
- Batch 200,000 tablets. Standard practice assumed: room RH 25 % or less, LOD of each dried ingredient, effervescence time, hardness, tube packing with desiccant, and the hydrate named as monohydrate.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | zinc from the lot's % elemental Zn (the label is "as element") |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 56 rows; FITS 53, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0099 estradiol valerate, sugar-coated IR

Source: CN 119385963 A, Example 3, https://patents.google.com/patent/CN119385963A/en.

- Core (parts): estradiol valerate 1, lactose 47, corn starch 26.2, povidone K25 3, talc 2.4, Mg stearate 0.5 (80.1). Strength not stated; read as 1 part = 2 mg (core 160.2 mg).
- Coat: powder coat (sucrose about 60 % syrup with PEG 6000, PVP K90, calcium carbonate, talc) by spray / roll / dry cycles to 64-68 % gain, water under 4.0 %; smoothing syrup 66.7 % at 60 °C to about 3 %; colour syrup (glycerol, iron oxide, TiO2) about 3 %; second syrup about 2 %; polish in four equal portions (10 + 5 + 5 + 5 min).
- Pan conditions: inlet 30-40 °C, 3-12 rpm, pump 6-7 g/min, water under 4.0 % after each stage. Batch 800 g cores in the patent; used 300,000 tablets.
- Standard practice assumed: core granulation (high-shear, PVP in water), LOD limit, hormone containment, polishing wax identity.

| Template | Result | Step |
|---|---|---|
| T5 | FITS WITH SETTING | gain on a named earlier stage, one row per coat stage (4 rows) |
| F2 | FITS WITH SETTING | spray/roll/dry cycles until the gain is reached (high maximum) |
| T14 | FITS WITH SETTING | individual results only (weight variation refused for sugar-coated) |
| C1 | FITS WITH SETTING | core weight within +/- % of target |
| T5 | FITS WITH SETTING | core friability (loss mode) |

Counts: 98 rows; FITS 90, FITS WITH SETTING 8, NEW SETTING 0, GAP 0.

## F0100 mifepristone, uncoated IR (close variant: 600 mg, water granulation, tray drying)

Source: EP 1 990 044 A1, Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP1990044NWA1/document.pdf. Close variant: 600 mg (listed 200 mg) and mixer + tray oven instead of single-pot; the same document's Example 2 is a 200 mg direct-compression tablet (312.5 mg).

- Per tablet: micronised mifepristone 600 mg (96 % under 15 µm), MCC 120, PVP 40, colloidal silica 8 (granulate); crospovidone 16, talc 8, Mg stearate 8 (external); 800 mg.
- Water 15.625 % of the dry blend (125 mg per tablet) then a second 15.625 % in two halves; 4 mm wet screen; trays 1-2 cm at about 45 °C until residual humidity is 1.5-2.5 %, optional 60 °C stage; 2.5 mm and 1.5 mm screens; D15R20 punches, hardness about 90 N.
- Batch 100,000 tablets (80 kg). Standard practice assumed: mixer times beyond those given, containment, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | water as % of the recorded dry-blend weight |
| F2 | FITS WITH SETTING | dry until humidity is 2.5 % or less; below 1.5 % goes to F3 (two-sided window) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (loss mode) |

Counts: 60 rows; FITS 56, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## Totals for F0081-F0100

Counted 15 formulations, 1,008 rows: FITS 944, FITS WITH SETTING 62, NEW SETTING 2, GAP 0. NO SOURCE 5 (F0081, F0085, F0090, F0092, F0094).

New settings:
- T6 whole containers (F0087): containers needed = amount required ÷ amount per container, rounded up, with the excess shown and its handling stated. Variant of T6.
- C5 hydrate-labelled API (F0088): when the label names the hydrate itself and the assay is anhydrous, a hydrate-to-anhydrous factor followed by a water correction is allowed; refused only when the factor runs the other way. Variant of C5.

Safety rules:
- Hydrate-labelled API (F0088): if the target "50 µg procaterol hydrochloride hydrate" is read as anhydrous and then water-corrected, the batch gets about 2.8 % too much. C5 must allow the correct chain and refuse the wrong one.
- Zinc sulfate hydrate not named (F0098): the source's two examples imply different hydrates for the same "zinc sulfate". Anhydrous, monohydrate and heptahydrate differ by up to about 44 % in zinc. Covered by T18 (% Zn from the lot) and C5 "as element" if the master names the form; recorded as a reminder.
- Basis of a trace mineral (F0096): 0.5 mg chromium picolinate is about 62 µg chromium; read as chromium it would be 8 times too much. Covered when the master states the basis (C5 "as element"); a reminder.

Sources that contradict themselves:
- El-Say et al. 2015 (F0082): the listed parts of each mini-tablet add up to about 4.0 mg, but the tablets are said to be 5 mg, and no lubricant is listed although the method adds one.
- CN 105748421 A (F0083): the % of the embodiments add up to about 98 %; the rest is not given.
- US 5,912,268 A (F0093): a release of 0.260 mg/h for 23.8 h (about 6.2 mg) from a core holding about 5 mg; ferric oxide in the push layer is later called ferric chloride.
- DE 25 15 365 C2 (F0098): 100 mg zinc sulfate gives 40 mg zinc (anhydrous) but 125 mg gives 45 mg zinc (monohydrate), for the same named salt.
- CN 119385963 A (F0099): the sugar layers are said to total about 5 %, which leaves out the 3 % colour layer.
- EP 1 990 044 A1 (F0100): Example 2 lists talc with no amount (the other lines still add up to 312.51 mg).
- EP 4 563 147 A1 (F0091): one row of Table 7 has 9 values for 8 formulations.
- WO 2017/182641 A1 and EP 3 397 285 A1 (F0090, not counted): the minimum % of the parts already exceed the stated layer totals.
