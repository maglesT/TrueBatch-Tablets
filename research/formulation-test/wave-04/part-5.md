# Wave 4, part 5 (F0381-F0400)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

All sources in this part were read from files downloaded beforehand by the source finder (no web access during mapping).

## F0381 etizolam, film-coated IR, fluid-bed granulation, 0.5 mg

NO SOURCE: no etizolam formulation patent or article found (Japanese product; only forensic and clinical papers). Not counted.

## F0382 guanfacine hydrochloride, uncoated ER hydrophilic matrix, direct compression, 1 mg

Source: EP 1 909 766 B1 (Shire), Table 2 (1 mg formulation) and Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP1909766NWB1/document.pdf

- Per tablet: guanfacine HCl 1.14 mg (= 1 mg base, 0.76 %), hypromellose 2208 K4M 20.01, silicified MCC (Prosolv HD90) 26.00, lactose/povidone/crospovidone co-processed (Ludipress) 25.37, methacrylic acid copolymer type C (Eudragit L100-55) 50.00, fumaric acid 7.50, glyceryl behenate (Compritol 888 ATO) 20.00; 150.00 mg, 9/32 inch round.
- Process: all materials through 40 mesh, V-blender with the drug sandwiched in the middle of the load, blend 10 min with the intensifier bar on from minute 5 to 8, compress to target hardness (hardness against compression force studied).
- Batch 1,000,000 tablets (150 kg). Standard practice assumed: blend uniformity sampling for a 0.76 % blend, IPC limits, ER dissolution stages, thickness limit around the stated 0.120 inch.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The label strength is base and the line is the HCl salt. By molecular weight 1 mg base is 1.148 mg HCl, so the printed 1.14 mg gives about 0.99 mg base (-0.7 %). The master must compute the salt quantity with T11 from the named forms, not copy 1.14 (known wave-1 rule on typed factors, F0062).

Counts: 70 rows; FITS 68, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0383 lemborexant, film-coated IR, high-shear granulation with fluid-bed drying, 5 mg

Source: RU 2840786 C1 (Eisai), Example 4, Table 18 and paragraph [0067] (Russian, read with the English machine translation), https://patents.google.com/patent/RU2840786C1/en. Close variant: the example tablets are uncoated (the marketed tablet is film-coated); granulation is high-shear with fluid-bed drying.

- Per tablet (kg per batch): intragranular lemborexant 5 (0.542), lactose hydrate 93.88 (10.17), L-HPC 10.8 (1.17), HPC 3.6 (0.39) in purified water q.s. (2.88 kg); extragranular L-HPC 6.0 (0.65), Mg stearate 0.72 (0.078); 120.0 mg (about 108,000 tablets per batch).
- Process: API (D90 32 um) with lactose and L-HPC premixed 5 min in a high-shear granulator, HPC solution added, granulate 3 min, fluid-bed dry at 70 C inlet until outlet above 40 C, mill on a 0.8 mm screen, extragranular L-HPC and Mg stearate weighed on the granule yield, drum blend 14 min, compress (700, 1150 or 1600 kgf).
- Batch 1,080,000 tablets (ten times the example). Plant choice: aqueous HPMC film coat at 3 % (not in the source). Controlled substance (Schedule IV): vault dispensing and API reconciliation. Standard practice assumed: IPC limits, coat suspension solids.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | coat solids = 3 % of the recorded core load (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: API particle size (D90 20-64 um) is the claimed critical attribute; it is a plain C1 check on the API lot.

Counts: 76 rows; FITS 73, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0384 ramelteon, printed film-coated IR, high-shear granulation, 8 mg

NO SOURCE: only labels and an EMA withdrawal report with a qualitative core; no Takeda formulation patent found. Not counted.

## F0385 deflazacort, dispersible tablet, direct compression from a common blend (listed uncoated IR, roller compaction, 6 mg)

Source: US 2022/0175800 A1 (PTC Therapeutics), Example 3, Table 5 formulation 9 (9A/9B), process of Example 1, https://patents.google.com/patent/US20220175800A1/en. Close variant: dispersible tablets by direct compression; 6 mg is not exemplified, so the exemplified 3 mg and 36 mg strengths from the same blend are mapped.

- Common blend % w/w: micronised deflazacort 5.0 (95 % below 10 um), mannitol 100SD 30.6, MCC 102 46.5, sodium starch glycolate 15.5, flavour 0.5, sucralose 0.5, colloidal silica 0.4, Mg stearate 1.0. 3 mg = 60 mg tablet (5.0 mm round), 36 mg = 720 mg tablet (13 mm flat bevelled).
- Process (Example 1): API (through 18 mesh), silica, disintegrant and a third of the mannitol sieved and V-blended; rest of the mannitol, then MCC, then Mg stearate added and mixed; compress. Results: hardness 4.6 and 12.8 kP, friability 0.02 and 0.15 %, disintegration in water 37 and 49 s.
- Plant choice: 300 kg common blend, 60 kg compressed as 3 mg (1,000,000 tablets) and 240 kg as 36 mg (333,000 tablets). Standard practice assumed: blend times, blend uniformity, dispersion fineness test, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | dispensing quantities from % w/w of the 300 kg blend (T8 % w/w mode) |
| T19 | FITS WITH SETTING | one blend split between two strengths; API per tablet = tablet weight x 5 % x blend assay checked against each label (known, wave 3, F0225) |
| C1 | FITS WITH SETTING | 3 mg: mean weight within +/- % of 60 mg (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | 36 mg: mean weight within +/- % of 720 mg (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | 3 mg friability (T5 loss mode) |
| T5 | FITS WITH SETTING | 36 mg friability (T5 loss mode) |

Note: Example 1's 1 mg mini-tablets (2 mm) failed friability by capping, so the smallest strength needs its own hardness and friability limits.

Counts: 72 rows; FITS 66, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0386 trientine tetrahydrochloride, film-coated IR, direct compression, 150 mg

NO SOURCE: only labels, a qualitative TGA AusPAR and a review; the formulation patent was not identified. Not counted.

## F0387 tolvaptan, uncoated IR, fluid-bed granulation (amorphous spray-dried dispersion), 3.75 mg

Source: US 11,759,470 B2 (Otsuka), Preparation Example 5A (the comparator tablet), https://patents.google.com/patent/US11759470B2/en. Close variant: 3.75 mg strength (listed 15 mg); the drug is an amorphous spray-dried powder of tolvaptan and HPC-SL 2:1.

- Batch of about 5,000 tablets: spray-dried tolvaptan/HPC-SL powder 28.2 g, lactose 291.9, corn starch 50.0, MCC 50.0; binder 200 g of 5 % w/w HPC-L in water (10 g HPC-L); extragranular L-HPC LH-11 22.5 g, Mg stearate 5.0 g. Tablet about 91.5 mg, 6 mm flat, 3.75 mg tolvaptan.
- Process: dry mix, granulate and dry in a tumbling fluid-bed granulator-dryer spraying the HPC-L solution, blend with L-HPC and Mg stearate, compress on a rotary press at 1,000 kg and 40 rpm.
- Batch 500,000 tablets (45.8 kg). Standard practice assumed: spray-dried powder made as its own intermediate (residual solvent and amorphous form from its release record), inlet temperature, LOD end point, hardness, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | spray-dried powder quantity from its measured tolvaptan content, not from the 2:1 ratio (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 74 rows; FITS 71, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0388 acetylcysteine, effervescent, wet granulation with citric acid solution, 1,200 mg (listed 600 mg, solvent granulation)

Source: EP 2 574 333 B1, Table 1 (NAC1200) and Example 8, https://data.epo.org/publication-server/rest/v1.2/patents/EP2574333NWB1/document.pdf. Close variant: 1,200 mg (the 600 mg composition is given only as background, without a process); the granulating liquid is an aqueous citric acid solution.

- Per tablet: N-acetylcysteine 1200 mg, anhydrous citric acid 1087, sodium hydrogen carbonate 1313, lemon flavour 200, aspartame 20, PEG 6000 30; 3850 mg (plus Mg stearate on the punch faces only). 23 mm, 3.10-3.30 mm thick, 16 kp, friability below 1 %, disintegration below 3 min.
- Process: room humidity and temperature controlled; citric acid 5.44 kg dissolved in 3.94 kg water, split in two; per granulation NAC and citric acid dry mixed 10 min at 125 rpm, half the solution added, granulate 6 min; fluid-bed dry at 50 C (product not above 45 C) to residual humidity at most 0.15 %, cool below 28 C; screen 1.25 mm.
- External phase (NaHCO3 131.3 kg, flavour 20, aspartame 2, PEG 6000 3 kg) screened 1.25 mm, final mix 10 min at 10 rpm (humidity below 0.25 %), compress with external lubrication; strips of 4 in Al/PE.
- Batch 100,000 tablets (385 kg; two granulations). Standard practice assumed: room RH limit, tablet IPC frequency, CO2 or pH check of the solution.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Example 8 charges 5.440 kg NAC per granulation, but Table 1 and the 131.3 kg NaHCO3 (100,000 tablets) need 60 kg per granulation. The citric acid figures fit only if 51.63 kg is charged in each of the two granulations (5.44 + 2 x 51.63 = 108.7 kg). The master takes every batch quantity from T8 (per tablet x tablets), never from the example's kg column.

Counts: 80 rows; FITS 78, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0389 bilastine, orodispersible tablet, direct compression, 10 mg

Source: WO 2022/135863 A1 (Disproquima / Biohorm), Table 1 Example 2 and general process 2, https://patents.google.com/patent/WO2022135863A1/en and https://patentimages.storage.googleapis.com/64/0a/bd/b07bd4d5807289/WO2022135863A1.pdf. Table 1 is an image; the transcription was checked against the page images.

- % w/w: bilastine form Eta (D90 29.9 um) 6.7, crospovidone 3.0, ethylcellulose 4.0, mannitol (direct compression grade) 85.1, Mg stearate 1.0, sucralose 0.1, red grape aroma 0.1. 10 mg per tablet, so about 149 mg (derived).
- Process: two hand premixes (flavour + sweetener + 10.6 % of the filler; bilastine + crospovidone + 44.8 % of the filler), all but the lubricant through 1000 um, drum blend 20 min at 23-24 rpm, lubricant (through 250 um) 5 min, compress biconvex round unscored tablets.
- Batch 1,000,000 tablets (149.3 kg). Standard practice assumed: blend uniformity, hardness, ODT disintegration limit, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | dispensing from % w/w of the batch weight (T8 % w/w mode), batch weight set from 10 mg / 6.7 % |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 6.7 % is rounded, so the tablet weight is 149.3 mg if the dose is anchored on 10 mg, or the dose is 10.05 mg at a rounded 150 mg. The master anchors on the API mg per tablet and makes the filler the balance.

Counts: 62 rows; FITS 59, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0390 clemastine fumarate, uncoated IR, fluid-bed granulation, 1 mg

NO SOURCE: only the SmPC (1.34 mg hydrogen fumarate and 107.66 mg lactose; other excipients not quantified, no process). Not counted.

## F0391 fexofenadine hydrochloride + pseudoephedrine hydrochloride, film-coated bilayer IR + ER, 60 + 120 mg

Source: US 6,039,974 A (Hoechst Marion Roussel), Table 1 and the commercial-scale process (Tables 4-5), https://patents.google.com/patent/US6039974A/en and https://patentimages.storage.googleapis.com/66/92/92/f5bde61ff1084f/US6039974.pdf

- IR layer per tablet: fexofenadine HCl 60.00 mg, MCC PH101 26.00, pregelatinised starch 60.00 (granulated with water, removed), then MCC PH102 190.5, croscarmellose 12.00 (8.0 intragranular, 4.0 extragranular), Mg stearate 2.633; 351.1 mg.
- ER layer: pseudoephedrine HCl 120.0, carnauba wax 300.0, stearic acid 4.899, colloidal silica 1.065; 426.0 mg. Core 777.1 mg; clear Opadry 23.31 mg (3 %), 800.4 mg.
- ER granulation (600 kg): wax melted at 85-90 C, stearic acid melted in, drug (30 mesh) added at about 92-95 C, mixed at least 20 min, pumped to a Rotoform onto a chilled belt (5 mm pastilles), milled, blended with silica for 140 revolutions.
- IR granulation (211.8 kg): high-shear with water at 15 kg/min, fluid-bed dried at 80 C inlet, dewpoint 9 C, to 2-4 % moisture (Computrac), milled; final blend with MCC and croscarmellose 140 revolutions, Mg stearate 70 revolutions.
- Bilayer press: ER layer first at 426 mg (about 8 kp, 0.162 inch), total 777.1 mg (about 20 kp, 0.240 inch); 1,374,000 tablets from 585.3 + 482.4 kg. Coating in 10 sub-batches of about 106.8 kg with 26.70 kg of 12 % w/w Opadry solution each. In-process content uniformity of both drugs at 5 times during compression.
- Pseudoephedrine is a regulated precursor: secure storage and full reconciliation.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | coat solution per sub-batch = 3 % solids on the recorded tablet load, at 12 % solids (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | first-layer weight within +/- % of 426 mg (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | total core weight within +/- % of 777.1 mg (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Expected tablets are the smaller of the two layer counts (T21, its standard use). Both labels are on the salts (60 mg fexofenadine HCl, 120 mg pseudoephedrine HCl), so no T11 factor.

Counts: 118 rows; FITS 114, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0392 pyrazinamide, uncoated IR, roller compaction, 500 mg

NO SOURCE: WHO public assessment reports say wet granulation with no quantities; no roller-compaction formula found. Not counted.

## F0393 potassium citrate, uncoated ER wax matrix, heat (melt) granulation, 1080 mg (10 mEq K)

Source: EP 2 961 389 B1 (Mendoza et al.), Table 5 and paragraphs [0014]-[0016], https://data.epo.org/publication-server/rest/v1.2/patents/EP2961389NWB1/document.pdf

- Per tablet: potassium citrate monohydrate 1080 mg (85 %), carnauba wax 177 (14 %), Mg stearate 13 (1 %); 1270 mg, 18.9 x 8.6 mm elliptical. Batches of 100,000 tablets.
- Process: mill the salt (screen mesh 8), mix with wax 20 min in a sigma mixer, mill (mesh 12), heat in the jacketed sigma mixer with mixing until the granule reaches 70 C (below the wax melting point), discharge to drums and cool, mill (mesh 16), Mg stearate (mesh 30) 2 min, compress.
- Results: hardness 11-13 kp, friability below 3 % (25 rpm, 4 min), USP dissolution on 12 units at 30 min, 1 h and 3 h (all-unit and average limits).
- Batch 100,000 tablets (127 kg). Standard practice assumed: low-RH room (hygroscopic salt), IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | NEW SETTING | label strength in mEq: mmol of ion = mEq / ion charge; mg of salt = mmol of ion / ions per formula unit x MW (10 mEq K = 3.333 mmol potassium citrate monohydrate = 1081 mg). Needs mEq as a unit with the ion's charge; variant of T11 (units) |
| C5 | FITS WITH SETTING | monohydrate weighed at the hydrate MW: no LOD correction, because its LOD (3-6 %) is mostly hydrate water (C5; known wave-1 hydrate-labelled rule, F0088) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability, limit 3 % (T5 loss mode) |

Counts: 66 rows; FITS 62, FITS WITH SETTING 3, NEW SETTING 1, GAP 0.

## F0394 solifenacin succinate, film-coated IR, fluid-bed granulation, 10 mg (listed high-shear, 5 mg)

Source: EP 1 728 791 A1 (Astellas), Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP1728791NWA1/document.pdf. Close variant: fluid-bed granulation; 10 mg strength (derived from the parts); 5 mg is not given.

- Parts: solifenacin succinate 340 and lactose 1360 hammer-milled together (1 mm); lactose 2125, corn starch 1020 added; binder HPMC 2910 204 parts as 10 % w/v in 1836 parts water. Mg stearate 12 per 1188 granule. 150 mg core, 7.5 mm; API per tablet 340/5049 x 148.5 = 10.0 mg.
- Fluid-bed (inlet 65 C, 4 m3/min, spray 75 g/min, 1.5 kg/cm2, 30 s spray / 10 s shake); granule moisture at end of spraying 3.9 %; dry 50 C 10 min; blend Mg stearate; compress at about 700 kgf per punch.
- Coat: HPMC 84.3, macrogol 6000 15.8, talc 25.3, TiO2 10.5, red iron oxide 0.03 parts in 1223 parts water, sprayed (inlet 60 C, 13 rpm, 5 g/min) to 2.7 % of tablet weight.
- Batch 1,000,000 tablets. Standard practice assumed: IPC limits, amorphous-content test limit (the source shows high spray moisture forms amorphous drug that degrades).

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | HPMC binder at 10 % w/v (T17 % w/v made up to volume) |
| T8 | FITS WITH SETTING | coat solids = 2.7 % of the recorded core load (T8 "% of" a recorded weight); the solution is made in excess and spraying stops at the gain |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 80 rows; FITS 76, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0395 vardenafil hydrochloride trihydrate, film-coated IR, roller compaction with rehydration of the coated tablets, 10 mg

Source: EP 1 523 303 B1 (Bayer), Example 3 (Examples 2 and 6 for the fluid-bed rehydration), https://data.epo.org/publication-server/rest/v1.2/patents/EP1523303NWB1/document.pdf (description in German). Close variant: dry roller compaction (listed fluid-bed wet granulation); the fluid bed is used only to rehydrate coated tablets. Strength derived from the batch quantities.

- Batch: micronised vardenafil HCl trihydrate 28.4 kg, MCC 69.6 + 182 kg, crospovidone 5.16 + 9.84 kg, colloidal silica 1.50 kg, Mg stearate 3.00 kg; 125 mg cores, 7 mm (about 2,396,000 tablets; 11.85 mg trihydrate = 10 mg base).
- Process: premix in a high-shear mixer, add the rest in a container mixer, sieve, roller compact, blend silica and Mg stearate, compress, coat with HPMC 5.74 kg, macrogol 400 1.91, TiO2 1.57, iron oxides 0.345 kg in 118 kg water (7.5 % solids).
- After coating the drug is a mix of anhydrous and hydrated forms; the tablets are treated in the coater 5 h at 25 C with air of 16 g water/kg (about 80 % RH) until the trihydrate has formed. Later steps run at 30-100 % RH so the hydrate water stays.
- Standard practice assumed: roll force and gap, ribbon density, IPC limits, form test method (XRPD) for the end point.

| Template | Result | Step |
|---|---|---|
| T23 | FITS WITH SETTING | ribbon envelope density / solid fraction (T23 ribbons by envelope density) |
| C1 | FITS WITH SETTING | core mean weight within +/- % of 125 mg (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | coated tablet weight checked against the post-rehydration target, not the core or pre-rehydration weight (known, wave 2 stage-named weights, F0175) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The base-to-trihydrate factor (579.1/488.6 = 1.185) is used with the API weighed as is (C5: hydrate MW, so no water correction). If a micronised lot has lost part of its hydrate water, the master must switch to the anhydrous-basis chain (assay on the anhydrous basis plus water content, factor 1.075) rather than mix the two.

Counts: 84 rows; FITS 80, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0396 biotin, uncoated IR, direct compression, 10 mg

NO SOURCE: only supplement labels without quantities; no formulation patent or article. Not counted.

## F0397 calcium citrate malate (6:2:3), film-coated IR, made in-house then compressed, about 1100 mg (listed 1250 mg, roller compaction)

Source: EP 0 304 987 B1 (Norwich Eaton / P&G), Example I, https://data.epo.org/publication-server/rest/v1.2/patents/EP0304987NWB1/document.pdf. Close variant: tablet about 1104 mg; the granular salt is compressed directly (listed roller compaction); coat weight gain not stated.

- Salt made in the plant: citric acid 384.2 g and malic acid 402.3 g in about 2 l water at 55 C; calcium carbonate 600.6 g slurried in 1.2 l water added slowly (CO2 released), then 0.4 l water; stir 1-1.5 h until the pH settles near 4.3; filter; dry about 12 h at 105 C to moisture below 1 %; mill to 10-20 mesh. Molar ratio 6:2:3.
- Tablet: calcium citrate malate 99.73 %, Mg stearate 0.27 %; about 1104 mg; pan coated with a solution of about 11 % HPMC, 2 % PEG, 3.5 % colour in water.
- Batch 300,000 tablets (about 331 kg; the salt made in 5 reaction lots). Plant choice: 3 % coat gain. Standard practice assumed: acid assays, reaction vessel settings, dryer limits, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | calcium carbonate charge from the moles of citric and malic acid at 6:2:3, each acid on its lot assay (T11 molar factor between species) |
| T3 | FITS WITH SETTING | yield of the salt against the theoretical mass from the molar charge (T3 with the theoretical from T11 molar factor) |
| F2 | FITS WITH SETTING | stir until the pH no longer changes (round-3 repeat-until "no further change") |
| T18 | FITS WITH SETTING | salt per tablet from the lot's measured % Ca for a label in elemental calcium; no T11 factor in the same chain (C5 extended, "as element") |
| C1 | FITS WITH SETTING | target weight = T2 sum of the adjusted quantities (no filler to compensate), mean weight within +/- % of it (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | coat solids = 3 % of the recorded core load (T8 "% of" a recorded weight) |

Counts: 88 rows; FITS 81, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0398 cholecalciferol, film-coated IR, direct compression, 25 ug

NO SOURCE: weak variant only (ACS Omega 2024 eggshell-filler article): lab scale, uncoated, 100 times the listed dose, vitamin D3 grade not stated, and its dose basis contradicts itself (2.5 mg stated as 50,000 IU); a record would need invented numbers. Not counted.

## F0399 elagolix sodium, film-coated IR, acetone wet granulation, 150 mg

Source: EP 4 074 308 A1 (Sandoz), Example 8 (150 mg column) with the Example 4 process, https://data.epo.org/publication-server/rest/v1.2/patents/EP4074308NWA1/document.pdf. Close variant: non-aqueous granulation in a high-shear granulator (listed fluid-bed; the fluid-bed examples are 200 mg uncoated cores); generic formula.

- Per tablet: intragranular elagolix sodium 155.25 mg (= 150 mg elagolix), mannitol 79, magnesium oxide 78, crospovidone 45, L-HPC 18, sodium starch glycolate 13.5, colloidal silica 9, acetone q.s.; extragranular crospovidone 45, Mg stearate 6.75; core 450 mg; Opadry purple 13.5; 463.5 mg.
- Process: screen 0.4 mm, acetone poured over the bed in a high-shear granulator, dry, screen 0.6 mm, extragranular crospovidone, Mg stearate (0.25 mm), compress at 3-20 kN, coat to 2-3 % w/w.
- Batch 500,000 tablets (225 kg cores). Hormone-acting API: contained handling. Standard practice assumed: solvent room controls, residual acetone limit, LOD, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | coat solids = 3 % of the recorded core load (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The 150 mg column adds up to 449.5 mg against the stated 450 mg (mannitol 79 where dose-proportional scaling of the 200 mg column gives 79.5). Theoretical weight = T2 sum (known wave-1 rule).

Counts: 78 rows; FITS 75, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0400 levonorgestrel + ethinylestradiol, sugar-coated IR, high-shear granulation, 150 + 30 ug

NO SOURCE: only labels (excipient names, no quantities or process). Not counted.

## Totals for F0381-F0400

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0382 | 70 | 68 | 2 | 0 | 0 |
| F0383 | 76 | 73 | 3 | 0 | 0 |
| F0385 | 72 | 66 | 6 | 0 | 0 |
| F0387 | 74 | 71 | 3 | 0 | 0 |
| F0388 | 80 | 78 | 2 | 0 | 0 |
| F0389 | 62 | 59 | 3 | 0 | 0 |
| F0391 | 118 | 114 | 4 | 0 | 0 |
| F0393 | 66 | 62 | 3 | 1 | 0 |
| F0394 | 80 | 76 | 4 | 0 | 0 |
| F0395 | 84 | 80 | 4 | 0 | 0 |
| F0397 | 88 | 81 | 7 | 0 | 0 |
| F0399 | 78 | 75 | 3 | 0 | 0 |
| **Total** | **948** | **903** | **44** | **1** | **0** |

Counted 12 formulations, 948 rows: FITS 903, FITS WITH SETTING 44, NEW SETTING 1, GAP 0.

NO SOURCE: 8 (F0381, F0384, F0386, F0390, F0392, F0396, F0398, F0400).

New settings and gaps:
- **T11 / units: strength in milliequivalents** (F0393; variant of T11). Potassium citrate ER is labelled 10 mEq K, weighed as 1080 mg monohydrate. The conversion is mmol of ion = mEq / charge, then mg of salt = mmol of ion / ions per formula unit x MW. T11 already has "drug molecules per salt formula unit"; what is missing is mEq as a unit carrying the ion's charge. The same applies to KCl, K bicarbonate, Mg and Ca electrolyte tablets labelled in mEq.
- No gaps. Everything else uses existing settings or known findings: C1 limits around a computed value, T5 loss mode, T8 % w/w and "% of" a recorded weight, T17 % w/v, T18 in-process content and % element, T11 molar factor, T23 ribbon envelope density, round-3 "no further change", one blend for several strengths (wave 3), stage-named weights (wave 2), the hydrate-labelled C5 chain (wave 1).

Safety rules:
- **mEq read as mmol of salt** (F0393, new with the setting above): 10 mEq K is 3.33 mmol of tripotassium citrate (1081 mg). Read as 10 mmol of the salt, it would be 3,244 mg, three times the potassium. For a divalent ion (Mg, Ca) the error is two times. T11 must take the ion charge and the ions per formula unit from the material record, never a typed number.
- **Hydrate water counted as LOD** (F0393): potassium citrate monohydrate loses 3-6 % on drying, mostly its hydrate water. A T9 dried-basis correction on top of the monohydrate quantity gives 1143 mg instead of 1080 mg (+5.9 % potassium, a hyperkalaemia risk for a drug dosed by mEq). Covered by C5 (hydrate MW, so no water correction); a reminder.
- **Hydrate form changes in process** (F0395): the trihydrate partly dehydrates during processing and is restored by conditioning at about 16 g/kg air. The salt factor must stay on one basis: either as-is at the trihydrate MW, or the anhydrous basis plus water. The weight checks must name their stage, because the tablets gain water during rehydration. These are known C5 and wave-2 rules; a reminder.
- **Batch column against per-unit formula** (F0388): the example's 5.44 kg NAC per granulation would make 100,000 tablets of about 109 mg instead of 1200 mg (-91 %). Every batch quantity must come from T8 (per tablet x tablets); a typed batch quantity that disagrees with the formula is refused. This extends the known rules on per-tablet values in batch columns.
- **One blend, two strengths 12 times apart** (F0385): 3 mg and 36 mg come from the same blend and differ only by tablet weight and tooling (60 against 720 mg). The master needs a tooling and target-weight check per strength (known wave-2 tooling rule, F0135, and wave-3 one-granulation-for-several-strengths rule, F0225); a reminder of the size.
- Reminders: rounded salt line (F0382: 1.14 mg HCl gives 0.99 mg base, -0.7 %); spray-dried dispersion content from measurement (F0387); element label with lot % Ca (F0397: the source implies 22.6-23.5 % Ca, so a fixed theoretical 23.7 % gives up to about 5 % less calcium than labelled); rounded % w/w API line (F0389: anchor on the API mg per tablet).

Sources that contradict themselves:
- EP 1 909 766 B1 (F0382): the 1 mg column adds up to 150.02 mg against a stated 150.00 mg; 1.14 mg HCl per mg base where the molecular weights give 1.148.
- US 2022/0175800 A1 (F0385): in Table 5 the 3 mg column of formulation 10 swaps the mannitol and MCC amounts, and its 36 mg sodium starch glycolate is 116.6 mg where 15.5 % of 720 mg is 111.6. Table 7 (6 % blends) gives totals of 720 and 60 mg, but the text compresses 50 and 600 mg tablets, and its columns mix 6 mg and 36 mg values. Two tables are numbered 7 and two examples are numbered 4.
- EP 2 574 333 B1 (F0388): Example 8 charges 5.440 kg NAC per granulation where Table 1 and the 131.3 kg NaHCO3 need 60 kg.
- US 6,039,974 A (F0391): Table 6 gives a mean of 91.9 % at the last time point with a range of 95.4-104.4 % (mean below the lowest value). The pilot batch is called 130,000 tablets, but 180,000 are compressed (130,000 is the coating-pan load).
- EP 1 728 791 A1 (F0394): Example 4 sprays at 7.5 g/min but ends at a higher granule moisture (8.4 %) than Example 1 at 75 g/min (3.9 %); 7.5 is probably 75.
- EP 0 304 987 B1 (F0397): the salt is milled to "2-4 mm (10-20 mesh)", but 10-20 mesh is about 0.84-2.0 mm. Example II gives 250 mg Ca from about 1,106 mg salt (22.6 % Ca), while the description gives 425 mg salt = 100 mg Ca (23.5 %).
- EP 4 074 308 A1 (F0399): the 150 mg column adds up to 449.5 mg against 450 mg (mannitol 79, not 79.5). The text says 155.2 mg salt while the table has 155.25 mg. Pregelatinised starch is named for Example 8 but appears in only one 200 mg column.
- Haq et al., ACS Omega 2024 (F0398, not counted): 2.5 mg vitamin D3 is called 50,000 IU, but 2.5 mg is 100,000 IU (40 IU/ug). Mg stearate is called a binder.
