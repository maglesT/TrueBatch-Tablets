# Wave 2, part 1 (F0101-F0120)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

## F0101 dolutegravir sodium + lamivudine + tenofovir disoproxil fumarate, film-coated bilayer, dry granulation (listed: direct compression)

Source: US 10,004,721 B2 (Cipla), Example 2, https://patents.google.com/patent/US10004721B2/en. Close variant: three dry granulations (compaction) and a bilayer tablet; the WHO PQ reports for this FDC (e.g. HA696 Hetero, HA713 Macleods) also say direct compression was ruled out because the APIs flow poorly.

- Layer 1 per tablet: dolutegravir 50.00 mg, MCC PH102 415.00, croscarmellose 25.00, colloidal silica 2.50 + 2.50 (intra/extra), Mg stearate 5.00; 500.00 mg.
- Layer 2: TDF part (TDF 300.00, croscarmellose 22.50, MCC PH101 45.00, yellow iron oxide 0.20, Mg stearate 2.50) and lamivudine part (lamivudine 300.00, croscarmellose 22.50, MCC PH101 50.60, iron oxide 0.20, pregelatinised starch 18.00, Mg stearate 2.50), then croscarmellose 30.00 and Mg stearate 6.00; 800.00 mg. Core 1,300 mg; Opadry 32 mg; 1,332 mg.
- Process: each part sifted and dry mixed on its own, compacted and sized; granules blended and lubricated; bilayer compression; aqueous film coat.
- Batch 200,000 tablets; TDF handled at low RH. Standard practice assumed: compactor settings, screens, blend times, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| T15 | FITS WITH SETTING | the TDF and lamivudine granules of layer 2 are blended in their fixed ratio: the smaller of the two granule yields (T21) sets the scale, and the other granule and the extragranular materials are weighed by T15 on it |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The example lists "dolutegravir 50.00" without saying whether it is the sodium salt or the base; the layer adds up to 500.00 mg only if 50.00 mg is what is weighed. The master must state the basis (C5).

Counts: 158 rows; FITS 155, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0102 fostemsavir tromethamine, film-coated ER hydrophilic matrix, roller compaction

Source: US 2010/0056540 A1 (Bristol-Myers Squibb), Example 1, https://patents.google.com/patent/US20100056540A1/en

- Per tablet: fostemsavir tromethamine 725 mg (= 600 mg free acid), HPMC 4000 cP 283, MCC 95, colloidal silica 17, Mg stearate 10; 1,130 mg. Film coat optional per the text.
- The text only says the prodrug is mixed with excipients and HPMC (together or one after the other) and compressed. Roller compaction, its settings, the intra/extra split of silica and Mg stearate, the coat and all IPC limits are standard practice.
- Batch 200,000 tablets. The HPMC grade (2 % viscosity about 4,000 cP) is checked on the lot CoA.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 99 rows; FITS 97, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0103 bacitracin + papain + lysozyme hydrochloride, lozenge, 200 IU + 2 mg + 5 mg

NO SOURCE: only the Swiss Lysopain label (active amounts per lozenge, excipients named without amounts) and a clinical trial; no formula with process. Not counted.

## F0104 cefcapene pivoxil hydrochloride, film-coated, fluid-bed granulation, 100 mg

NO SOURCE: PMDA package inserts and interview forms name the excipients only; no cefcapene tablet example found in patents or articles. Not counted.

## F0105 nalidixic acid, uncoated IR, slurry wet granulation (listed: steam granulation)

Source: US 4,562,024 A, Example 5, https://patents.google.com/patent/US4562024A/en. Close variant: granulating fluid is an isopropanol slurry of part of the drug, not steam.

- Per tablet: nalidixic acid 500 mg, povidone 37, maize starch 138, dicalcium phosphate 100, Mg stearate 2; 777 mg. Isopropanol 157 mg (200 ml per 1,000 tablets), removed.
- Slurry: povidone dissolved in isopropanol, about one-third of the drug (165 of 500) homogenised into it to a cream-like dispersion. Rest of the drug mixed with starch and phosphate in a mixer-granulator and massed with the slurry; 4-mesh screen; fluid-bed dried at about 50-60 C until no isopropanol is detected; 16-mesh; Mg stearate; compressed to 777 mg.
- The same volume of ethanol or 50:50 aqueous isopropanol/ethanol is allowed; the master fixes isopropanol. Batch 300,000 tablets. Standard practice assumed: mixer settings, solvent recovery, IPC limits.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | isopropanol 200 ml per 1,000 tablets = 157 g (T17 liquids by volume via density) |
| F2 | FITS WITH SETTING | dry until isopropanol can no longer be detected (F2 with C4 on every round) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 82 rows; FITS 78, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0106 phenoxymethylpenicillin potassium, uncoated quickly disintegrating tablet, high-shear wet granulation (listed: film-coated 250 mg)

Source: US 5,948,422 A, Examples 4, 5 and 6, https://patents.google.com/patent/US5948422A/en. Close variant: 800 mg uncoated tablet (the patent compares it with a film-coated 780 mg tablet).

- Per tablet (Example 6): phenoxymethylpenicillin potassium (as 100 %) 800.0 mg, MCC 730.4, crospovidone 145.6, saccharin 13.0, aspartame 86.6, peppermint 36.2, silica 2.2, Mg stearate 11.0; 1,825.0 mg.
- Granulate (Example 4 route, drug alone): 550 ml water per 4,000 g drug in a high-speed mixer at 200 rpm for 55-120 s; 2.0 mm wet screen; fluid-bed dried at 45 C inlet for 35 min; 1.0 mm screen.
- Blending and lubrication as in Example 5: extragranular materials 10 min, Mg stearate 3 min; compressed. Example 6 itself gives the composition only.
- Batch 150,000 tablets in a beta-lactam segregated suite. Standard practice assumed: IPC limits; no film coat.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | strength stated on the potassium salt or as phenoxymethylpenicillin depending on market: basis named, no second factor (C5 extended, known wave 1) |
| T8 | FITS WITH SETTING | granulating water as 13.75 % of the drug weight (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 93 rows; FITS 89, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0107 roxithromycin, film-coated IR, solvent wet granulation, 150 mg

NO SOURCE: labels give excipients "q.s." only; no roxithromycin film-coated tablet formula with process found. Not counted.

## F0108 roxithromycin, dispersible tablet, wet granulation (listed: direct compression 50 mg)

Source: EP 1 506 780 A2 (CLL Pharma; divisional of EP 1 165 094), Example 2 and paragraph 0038, https://data.epo.org/publication-server/rest/v1.2/patents/EP1506780NWA2/document.pdf. Close variant: 150 mg strength, wet granulation.

- Per tablet: roxithromycin base 150 mg, crospovidone 22.5, croscarmellose sodium 62.5, polysorbate 3.8, MCC 666.2, aspartame 40, saccharin sodium 20, mint flavour 20, colloidal silica 5, Mg stearate 10; 1,000 mg; disintegrates in water within 3 min.
- Process: drug mixed with 30-60 % of the disintegrants, wet granulated with water containing the surfactant, dried; the rest of the disintegrants, sweeteners, diluent, glidant, lubricant and flavour added dry; compressed.
- Batch 300,000 tablets (paediatric). Standard practice assumed: water quantity, a 45 % intragranular split, drying limits, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 95 rows; FITS 93, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0109 niclosamide, chewable, fluid-bed granulation, 500 mg

NO SOURCE: labels and a clinical-trial protocol list excipients only; the niclosamide patents found are antiviral or delayed-release forms without a chewable formula. Not counted.

## F0110 pyrantel pamoate, uncoated IR, high-shear granulation, 250 mg

NO SOURCE: the Helmintox SmPC gives 360.5 mg embonate per 125 mg base with excipients named only; no quantitative formula with process found. Not counted.

## F0111 tinidazole, film-coated IR, roller compaction, 500 mg

NO SOURCE: the Tinizol 500 SmPC (NAFDAC) gives mg per tablet but no process at all, and no roller-compacted tinidazole formula was found. Not counted.

## F0112 amenamevir, film-coated IR, fluid-bed granulation, 200 mg

NO SOURCE: the public PMDA review module (Amenalief) says only "200 mg film-coated tablet"; its formula tables are not in the public part, and no patent example was found. Not counted.

## F0113 sofosbuvir + velpatasvir (spray-dried dispersion), film-coated IR

Source: EP 3 038 601 B1 (Gilead), Example 1 and Table 3, https://data.epo.org/publication-server/rest/v1.2/patents/EP3038601NWB1/document.pdf

- Per tablet: sofosbuvir 400 mg, velpatasvir:copovidone 1:1 SDD 200 (= 100 mg velpatasvir), MCC 355, croscarmellose 30, Mg stearate 15; core 1,000 mg; PVA-based coat 30 mg (3 %); 1,030 mg.
- SDD: ethanol solution of 10 % velpatasvir and 10 % copovidone, homogenised, spray dried; secondary drying in a 60 C tray oven until residual ethanol is below 0.5 % (about 6 h).
- Co-dry granulation: blend, lubricate, roller compact, in-line mill, extragranular lubricant, compress, coat (coat protects from light).
- Batch 300,000 tablets. Standard practice assumed: spray-dryer settings within the stated ranges, intra/extra split of croscarmellose and Mg stearate, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | SDD quantity from its own in-process velpatasvir content (T18 content from an in-process result) |
| T10 | FITS WITH SETTING | one MCC line absorbs both the sofosbuvir and the SDD adjustment (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 125 rows; FITS 121, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0114 ibandronate sodium monohydrate, film-coated IR, fluid-bed spray granulation (listed: direct compression)

Source: EP 1 596 870 B2 (Roche), Examples 1 and 1a, https://data.epo.org/publication-server/rest/v1.2/patents/EP1596870NWB2/document.pdf. Close variant: fluid-bed granulation.

- Core per tablet: ibandronate sodium monohydrate 168.75 mg (= 150 mg ibandronic acid), povidone K25 22.5, lactose monohydrate 162.75, MCC 60.0 (37.5 intra, 22.5 extra), crospovidone 22.5, stearic acid 9.0, colloidal silica 4.5; 450 mg. Coat: Opadry 12.75 + macrogol 6000 2.25; 465 mg.
- Example 1a (110,000 tablets): povidone 2.475 kg in 14.850 kg water; drug, lactose, intragranular MCC and crospovidone spray granulated in a fluid bed at 70 C, 300 g/min, 2.5 bar; dried at 70 C; 2 mm screen; extragranular MCC, stearic acid and silica re-scaled to the granulate weight; compressed; coat suspension 1.645 kg Opadry + 0.290 kg macrogol in 7.743 kg water (20 % solids).
- Batch here 330,000 tablets as three fluid-bed sub-batches of the Example 1a size (plant choice). Standard practice assumed: LOD limit, IPC limits, coating settings.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | core composition % (claim: 30-36 % active) checked on the free-acid basis (33.3 %), not on the weighed salt (37.5 %) (known, wave 1: ratios and % carry a basis) |
| F7 | FITS WITH SETTING | number of fluid-bed sub-batches = batch ÷ bowl capacity, rounded up (T6 round-up to whole units, known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The coating suspension holds about 17 % more solids than 110,000 x 15.0 mg; a T16 overage on the coating materials is how the master records it.

Counts: 108 rows; FITS 104, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0115 azelnidipine, uncoated IR, high-shear wet granulation, light-protected

Source: EP 1 285 655 B1 (Sankyo / Ube), Example 1 and Table 1, https://patentimages.storage.googleapis.com/c2/f3/9e/a936865615a88f/EP1285655B1.pdf. Close variant: 8 mg strength (listed 16 mg).

- Formula, % w/w: azelnidipine 5, MCC 5, D-mannitol 8, L-HPC 15, light magnesium aluminometasilicate 45, sodium bicarbonate 3, HPC 3, polysorbate 80 15, Mg stearate 1. With 8 mg drug the tablet is 160 mg (8.0 mm punch).
- Polysorbate 80 stirred onto the silicate in a high-shear granulator; drug, MCC, mannitol, L-HPC and bicarbonate added; massed with aqueous HPC; fluid-bed dried with 90 C inlet until the exhaust reaches 55 C; cutting mill, 1.0 mm screen; V-blended 10 min with Mg stearate; compressed.
- Batch 1,000,000 tablets (160 kg) under low-actinic light. Standard practice assumed: HPC solution strength, IPC limits; the pH of a suspension of 5 tablets (about 9.5) used as an IPC.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | each quantity from % w/w x batch weight (T8 % w/w mode) |
| F2 | FITS WITH SETTING | dry until the exhaust air reaches 55 C (F2 stop on a C1 reading) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 88 rows; FITS 84, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0116 captopril, scored (split punches) IR, direct compression, oxygen-sensitive

Source: EP 0 879 050 B1 (EGIS), Example 6, https://data.epo.org/publication-server/rest/v1.2/patents/EP0879050NWB1/document.pdf

- Per 100,000 tablets: captopril 2.50 kg (90 % between 5.5 and 69.6 um), lactose monohydrate 4.90, MCC 4.90, corn starch 1.50, hydrogenated castor oil 0.10, colloidal silica 0.06, Mg stearate 0.04 kg; 140 mg tablet with 25 mg captopril.
- All but Mg stearate mixed 20 min in a 50 l mixer, then Mg stearate (time not stated; 2 min as in Examples 5 and 7); compressed with flat bevelled twice-split punches. Results: 40-55 N, disintegration 2-3 min, 100 % dissolved in 10 min, content RSD 1.9 %, disulfide 1.5 % after 3 months at 40 C.
- Batch 1,000,000 tablets (140 kg, the size of Examples 5 and 8). The lactose:MCC ratio (1:1 here; claimed 1.5:1-1:1) limits disulfide formation in humid storage. Standard practice assumed: RH control, IPC limits, subdivision test.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | score subdivision: parts within +/- % of their mean (C3 limits as % of series mean) |

Counts: 66 rows; FITS 63, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0117 fimasartan potassium trihydrate, film-coated IR, fluid-bed granulation (listed: direct compression)

Source: US 10,420,728 B2 (Boryung), Preparation Example 1 and Example 2, https://patents.google.com/patent/US10420728B2/en. Label basis: Kanarb 60 mg = fimasartan potassium trihydrate 66.01 mg equivalent to fimasartan potassium 60 mg (HSA Singapore product listing SIN15221P). Close variant: fluid-bed granulation; the patent's 43 mg trihydrate is not a marketed strength.

- Per tablet: fimasartan potassium trihydrate 43 mg (jet-milled, D50 1.7 um, D90 5.0 um), lactose monohydrate 29, MCC 7, croscarmellose sodium 15, HPC 2 (binder, in 25 mg water), Mg stearate 1.5; core 97.5 mg; Opadry coat (amount not stated; 3 % assumed).
- Mixed in a fluid-bed granulator (55 C air, 3 m3/min), binder sprayed at 26 g/min, dried with 85 C air; Mg stearate added; compressed at 500 kgf (13.5 kp, 5.33 min disintegration, 0.3 % friability); coated.
- Batch 1,000,000 tablets. Standard practice assumed: LOD limit, screens, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | trihydrate to anhydrous fimasartan potassium (the label basis, factor 1.100), not to fimasartan base (T11 any two named forms) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 97 rows; FITS 94, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0118 flecainide acetate, scored IR, fluid-bed granulation, 100 mg

NO SOURCE: labels name excipients only; the flecainide formulation patent found (EP 0 371 683) is controlled-release beads in capsules. Not counted.

## F0119 glyceryl trinitrate, sublingual, direct compression of a lactose dilution (listed: moulding 0.5 mg)

Source: AU 759018 B2 (= WO 99/17766), Examples 1 and 2 and the process description, https://patentimages.storage.googleapis.com/f9/9c/9f/529d10b9a97df2/AU759018B2.pdf. Close variant: compressed 0.6 mg tablet made to be bioequivalent to moulded tablets; the moulded-tablet patents (US 3,789,119; US 4,091,091) could not be read in full.

- Per tablet (Example 2): nitroglycerin 1.95 % lactose mixture 30.769 mg (= 0.600 mg nitroglycerin), glyceryl monostearate 1.231, lactose monohydrate 3.880, pregelatinised starch 4.000, calcium stearate 0.120; 40.0 mg. No overage.
- The dilution is weighed from its assay and lactose adjusted to match. GMS is co-milled with part of the lactose; diluted nitroglycerin and the GMS mix blended 10 min with the intensifier bar on; starch added, 5 min; calcium stearate, 5 min; compressed at 200-800 kg force to 1-4 kp; disintegration about 10-40 s.
- Batch 2,000,000 tablets (80 kg). Standard practice assumed: room temperature control, amber glass bulk containers, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 63 rows; FITS 61, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0120 indapamide, ER hydrophilic matrix, wet granulation (film-coated listed)

Source: EP 0 519 820 B1 (Servier), Example 1 (LP 1) and stages A-D, https://data.epo.org/publication-server/rest/v1.2/patents/EP0519820NWB1/document.pdf. Close variant: 2.5 mg (listed 1.5 mg); the patent tablet is uncoated, a standard film coat is assumed.

- Per tablet: indapamide 2.5 mg, lactose 114.9, povidone 6.2, high-viscosity HPMC 59.0, Mg stearate 2.0, colloidal silica 0.4; 185.0 mg (HPMC 31.9 %, within the claimed 30-50 %).
- Stage A: indapamide, povidone and lactose wetted with a hydro-alcoholic solution, granulated, dried and sized. B: mixed with HPMC. C: lubricated with silica and Mg stearate. D: compressed to about 60-75 N.
- Batch 1,000,000 tablets. Standard practice assumed: fluid-bed drying, ethanol:water ratio and amount, coat, IPC and dissolution limits (target: 50 % released between 5 and 14 h).

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 104 rows; FITS 102, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## Totals for F0101-F0120

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0101 | 158 | 155 | 3 | 0 | 0 |
| F0102 | 99 | 97 | 2 | 0 | 0 |
| F0105 | 82 | 78 | 4 | 0 | 0 |
| F0106 | 93 | 89 | 4 | 0 | 0 |
| F0108 | 95 | 93 | 2 | 0 | 0 |
| F0113 | 125 | 121 | 4 | 0 | 0 |
| F0114 | 108 | 104 | 4 | 0 | 0 |
| F0115 | 88 | 84 | 4 | 0 | 0 |
| F0116 | 66 | 63 | 3 | 0 | 0 |
| F0117 | 97 | 94 | 3 | 0 | 0 |
| F0119 | 63 | 61 | 2 | 0 | 0 |
| F0120 | 104 | 102 | 2 | 0 | 0 |
| **Total** | **1,178** | **1,141** | **37** | **0** | **0** |

Counted 12 formulations, 1,178 rows: FITS 1,141, FITS WITH SETTING 37, NEW SETTING 0, GAP 0. NO SOURCE 8 (F0103, F0104, F0107, F0109, F0110, F0111, F0112, F0118).

New settings and gaps: none. Every non-FITS row uses an existing setting or a finding already known from wave 1.

Safety rules:
- Label basis is the anhydrous salt (F0117): Kanarb 60 mg is 60 mg fimasartan potassium (66.01 mg trihydrate, factor 1.100). If the master reads 60 mg as fimasartan base, it weighs 71.0 mg trihydrate (factor 1.184), about 7.6 % too much. T11 "any two named forms" covers it when the master names both forms; this is a reminder of the known rule that the label basis must be stated (wave 1).
- Diluted API line (F0119): the formula line 30.769 mg is the 1.95 % nitroglycerin dilution, not nitroglycerin. Read as nitroglycerin, it is about 51 times the dose. T18 with the dilution's assay and a named basis covers it. The limit "dilution not above 2 %" is an explosion-safety limit; like the realgar limit in wave 1, it must not be widened without QA.
- Inconsistent % w/w formula (F0115): 5 % of 8 mg gives a 160 mg tablet, but the same example treats 1,000 mg of powder as five tablets (200 mg each). Compressing at 200 mg with a 5 % blend gives 10 mg per tablet, 25 % too much. When a formula is in % w/w, the master must take the tablet weight as dose ÷ API % and refuse any other stated weight that disagrees.
- Batch table against label claim (F0116): Example 8 is labelled 100 mg but lists 25 kg of captopril for 500,000 tablets, i.e. 50 mg per tablet. A master copied from the batch table would make tablets 50 % under-strength. Building quantities from mg per tablet x tablets (T8) avoids it; a check that batch quantity ÷ tablets equals the claim is worth adding to the master check.
- Salt or base not stated (F0101): "dolutegravir 50.00" in a layer that totals exactly 500.00 mg. If the sodium salt is weighed at 50.00 mg, the tablet gets 47.5 mg dolutegravir (5 % low); if the base is meant, the layer is 502.6 mg. Known rule (wave 1, F0002 mixed bases); a reminder.
- Recorded intermediate weight (F0114): the extragranular quantities are re-scaled on 44.650 kg, while the recorded granulate yield is 44.540 kg. T15 must take the recorded weight from the batch record, not a typed number (here about 0.25 %).

Sources that contradict themselves:
- US 5,948,422 A Example 5 (F0106): the % column adds up to 102.8 %. Its drug:Eudragit ratio is 24:1 as weighed (768 g : 32 g) but 24.9:1 in the % column.
- EP 1 285 655 B1 Example 1 (F0115): 8 mg drug at 5 % w/w gives a 160 mg tablet, but the pH test takes 1,000 mg of powder as five tablets (200 mg each).
- EP 0 879 050 B1 Example 8 (F0116): labelled 100 mg, but 25.00 kg of captopril for 500,000 tablets is 50 mg per tablet (its kg list is exactly that of the 12.5 mg Example 5, which makes 2,000,000 tablets).
- EP 1 596 870 B2 Example 1a (F0114): step 5 gives 44.540 kg of dried granulate, step 6 adds the extragranular materials to 44.650 kg. The coating materials are about 17 % above the per-tablet amounts x 110,000, with no overage stated.
- US 10,420,728 B2 Table 2 (F0117): Comparative Examples 2 and 3 (coarser particles) have exactly the same hardness, disintegration and friability as Examples 14 and 15 (9.2 kp / 4.50 min / 0.5 % and 11.8 kp / 7.75 min / 0.4 %), which looks like a copy error.
- EP 3 038 601 B1 paragraph 0044 (F0113): SDD particle size "D90 less than about 200 mm", which must be micrometres.
- AU 759018 B2 (F0119): Example 2 has no silicon dioxide, but the process for the active batches mills silicon dioxide with lactose. The general description gives 5 min for the first blend, the examples 10 min.
- US 10,004,721 B2 Examples 1 and 2 (F0101): the process blends "the granules of each part" with croscarmellose, but the dolutegravir layer has no extragranular croscarmellose. The dolutegravir line does not say salt or base.
- EP 1 506 780 A2 (F0108): the roxithromycin example has 66.62 % MCC, while the description prefers 5-50 %. The description also calls HPMC "(HPC)".
- EP 0 519 820 B1 (F0120): the text says the finished tablet holds about 1 % indapamide, but LP 1 is 1.35 % (2.5 of 185 mg) (minor).
