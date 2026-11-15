# Wave 5, part 5 (F0481-F0500)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the source finder; this part worked from those files only.

## F0481 naltrexone hydrochloride, uncoated IR (film coat added), high-shear granulation with the drug in the binder solution, 0.5 mg (listed 50 mg)

Source: EP 1 482 912 B1 (Euro-Celtique / Purdue), Examples 1-2 (reference examples), Tables 1A and 2A and process [0079], https://data.epo.org/publication-server/rest/v1.2/patents/EP1482912NWB1/document.pdf. Close variant: low-dose 0.5 mg (listed 50 mg), uncoated in the source.

- Per tablet (Example 2): naltrexone HCl anhydrous 0.5 mg, povidone (Plasdone C-30) 5.0, MCC PH102 58.0 intragranular, water 25 (removed), MCC PH102 58.0 extragranular, colloidal silica 0.3, croscarmellose 2.5, Mg stearate 0.7; 125.0 mg.
- Process: drug and povidone dissolved in the water, added to the MCC in a high-shear (Collette) bowl; fluid-bed dried to 5 % moisture; Comil; blended with the extragranular MCC, silica and croscarmellose; lubricated; compressed.
- Plant choice (not in source): HPMC film coat at 3 % (the description says the tablets may be film-coated with HPMC). Batch 1,000,000 tablets (125 kg; 0.5 kg API, 25 kg water). Standard practice assumed: mixer settings, drying temperatures, blend times, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| T1 | FITS WITH SETTING | drug/binder solution added = vessel weight before - after, incl. any rinse (T1 Difference) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The formula names the anhydrous salt. A dihydrate lot needs the T11 hydrate factor (about 1.095 by molecular weight) and then no further water correction (C5, known wave-1 hydrate chain). The whole dose travels in the solution, so its complete transfer is a recorded check.

Counts: 129 rows; FITS 126, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0482 pimavanserin tartrate, film-coated IR, intensive-mixer granulation with ethanol, 5 mg (listed 10 mg)

Source: US 2007/0264330 A1 (ACADIA), Example 9 Tables 7-8 (granulation) and Example 10 Tables 9-10 (coat), https://patents.google.com/patent/US20070264330A1/en. Close variant: 5 mg stated as the tartrate (listed 10 mg); the source coats only its direct-compression cores, so the Example 10 coat is put on the granulated cores here.

- Per 100 mg core (Table 7, 5 mg column, % w/w): pimavanserin tartrate 5.13, mannitol 87.2, pregelatinised starch 5.00, povidone K25 1.15, Mg stearate 1.5; ethanol 99.5 % 16.5 (evaporates). Coat: Opadry White 5 mg in water 50.6 mg; 105 mg.
- Process: drug, starch and mannitol pre-blended in an intensive mixer, granulated with povidone in ethanol (water caused discolouration), dried in a cabinet at 40 C, sieved 1.1 mm; Mg stearate pre-blended with an equal volume of the dry blend, sieved 1 mm, final blend 2 min, compressed. Table 8: LOD 0.8-2.3 %, sieve analysis, bulk/tapped density, 100 mg, 51-61 N, height 3.8 mm, friability 0.1 %, DT 6 min.
- Batch 1,000,000 tablets (100 kg core; 16.5 kg ethanol in a flameproof area). Standard practice assumed: mixer speeds, drying end point, coat pan settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from Table 7 % w/w of the 100 mg tablet (T8 % w/w mode) |
| T8 | FITS WITH SETTING | dry blend taken for the Mg stearate premix = equal volume: Mg stearate mass x blend bulk density / Mg stearate bulk density (T8 product of readings) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source states strengths as the tartrate (2 drug molecules per salt unit, factor 1.1755 by molecular weight); the marketed 10 mg is base. The drug lines are 2.5-3 % above nominal with no stated reason (known wave-2 rule: an excess must be a declared T16 overage).

Counts: 118 rows; FITS 114, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0483 vortioxetine hydrobromide, film-coated IR, high-shear wet granulation (listed: direct compression), 10 mg

Source: EP 2 044 043 B1 (H. Lundbeck), [0065] and [0070]-[0072], https://data.epo.org/publication-server/rest/v1.2/patents/EP2044043NWB1/document.pdf; salt factor cross-checked with EP 3 184 104 B1 Table 1 (6.36 mg HBr = 5 mg base), https://data.epo.org/publication-server/rest/v1.2/patents/EP3184104NWB1/document.pdf. Thin variant: wet granulation, % w/w only ("approximately"), no tablet weight, no coat.

- Composition [0071] (% w/w): HBr salt 5, anhydrous dibasic calcium phosphate 39, corn starch 20, copovidone 3 (granule); MCC 25, sodium starch glycolate 3, talc 4, Mg stearate 1 (added after drying).
- Derived (not stated): 10 mg base = 12.71 mg HBr salt (factor 1.271 by molecular weight, 1.272 in EP 3 184 104), so a 254.2 mg core at 5 %; [0072] says the strength is set by tablet size.
- Process [0065]: high-shear granulation with water, sieve, dry, mix with MCC, SSG, talc and Mg stearate, compress. API particle size matters ([0073]-[0074]: small crystals stick, large ones dissolve slowly).
- Plant choice: HPMC film coat 3 %; batch 500,000 tablets (127.1 kg). Standard practice assumed: all process parameters, IPC limits, coat.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from the [0071] % w/w on the derived 254.2 mg core (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The "approximately" percentages are fixed as targets by the master (known wave-1 rule on formula ranges).

Counts: 125 rows; FITS 122, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0485 mitapivat sulfate (hemisulfate sesquihydrate, Form A), film-coated IR, direct compression, 50 mg

Source: EP 3 713 919 B1 (Agios), [0212] exemplified tablet, [0099] dose basis, claim 8, [0214] water data, https://data.epo.org/publication-server/rest/v1.2/patents/EP3713919NWB1/document.pdf

- Composition (% w/w): Form A 11.70, MCC 60.18, mannitol 23.12, croscarmellose 3.00, sodium stearyl fumarate 2.00. Dose basis: 1.18 mg Form A = 1.0 mg free base; claim 8 gives 58.7-58.9 mg Form A for 50 mg.
- Derived (not stated): 58.8 mg Form A at 11.70 % gives a 502.6 mg core. One blend serves 5, 20 and 50 mg by weight (about 50, 201 and 503 mg).
- Process: direct compression of the blend (one sentence); optional film coat. Form A holds about 5.3 % water (KF) and loses water quickly below 10 % RH (reversible).
- Plant choice: HPMC film coat 3 %; batch 300,000 tablets (150.8 kg). Standard practice assumed: blending, compression and coating parameters, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from the [0212] % w/w on the derived 502.6 mg core (T8 % w/w mode) |
| T11 | FITS WITH SETTING | hemisulfate sesquihydrate to free base with 2 drug molecules per salt unit |
| T11 | FITS WITH SETTING | stated factor 1.18 checked against the molecular weights of Form A (1.169); refused beyond rounding (known, wave 1, typed factor check) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The factor is on the hydrate's molecular weight, so no further water correction (C5). The dispensing room needs a lower RH limit as well as an upper one, because a dehydrated lot weighed at the hydrate factor carries up to about 5 % more drug.

Counts: 101 rows; FITS 96, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0486 sapropterin dihydrochloride, soluble IR, direct compression, 100 mg

Source: US 8,003,126 B2 (BioMarin), Example 3 Table III with the Example 2 process and the description, https://patents.google.com/patent/US8003126B2/en

- Per tablet: sapropterin dihydrochloride polymorph B 100.0 mg (33.33 %), D-mannitol 172.68, anhydrous dibasic calcium phosphate 6.54, crospovidone 13.50, ascorbic acid 5.00, riboflavin 0.03, sodium stearyl fumarate 2.25; 300.0 mg.
- Process: API and mannitol screened 20 mesh, blended 10 min at 21 rpm; CaHPO4 and crospovidone added, 10 min; ascorbic acid and riboflavin, 10 min; SSF screened 40 mesh, 5 min; blend tested for uniformity; compressed to 4.5-5.5 mm thick, target 7 kP. Rooms at or below about 65 % RH; packed with desiccant; LOD below 1 %, disintegration within 3 min on stability.
- Batch 300,000 tablets (90 kg; riboflavin 9 g, pre-diluted by geometric dilution). Standard practice assumed: premix steps, IPC limits, dissolving-time test in water.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | hardness target 7 kP (round-3 unit kgf; kP as its alias) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The 100 mg is the dihydrochloride (label strength), so no T11. The Example 3 text says "100 mg tetrahydrobiopterin"; read as base it would mean 130.2 mg salt (+30 %, known label-basis rule).

Counts: 104 rows; FITS 101, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0487 potassium chloride + potassium bicarbonate (+ potassium citrate, glycine hydrochloride), effervescent, isopropyl-alcohol granulation, 20 mEq K

Source: US 3,903,255 A (Rohm and Haas), Example 1 and the drying limit of Example 11, https://patents.google.com/patent/US3903255A/en. Close variant: KCl 597 mg + KHCO3 1,001 mg per tablet (listed 600 + 400 mg); the acid is glycine hydrochloride, not citric acid.

- Per tablet: glycine HCl 1,338 mg (12 mEq), KCl 597 (8 mEq), KHCO3 1,001 (10 mEq), potassium citrate monohydrate 216 (2 mEq K), povidone 77, PEG 6000 115, saccharin 20, colloidal silica 5, DL-leucine 34 (soluble lubricant), colour 3, flavour 5; 3,411 mg; isopropyl alcohol 0.6 ml (removed). In water it gives 20 mEq K and 20 mEq Cl.
- Process: grind the four salts together, mix 15-20 min; granulate with the binder/sweetener/colour solution in isopropyl alcohol; tray dry until no alcohol odour (Example 11: moisture below 0.3 %); screen No. 12; blend silica and flavour, then leucine (may be doubled, with the tablet weight adjusted); compress 3.41 g with 1 inch flat bevel-edge punches, 0.21 inch thick.
- Batch 100,000 tablets (341 kg, 60 L isopropyl alcohol) at low RH. Standard practice assumed: drying temperature (lost in the text), IPC limits, effervescence time and solution tests, moisture-proof packing.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | glycine hydrochloride per tablet from 12 mEq (mEq unit with ion charge; wave-4 F0393 setting) |
| T11 | FITS WITH SETTING | potassium chloride from 8 mEq (mEq unit; wave-4 F0393 setting) |
| T11 | FITS WITH SETTING | potassium bicarbonate from 10 mEq (mEq unit; wave-4 F0393 setting) |
| T11 | FITS WITH SETTING | potassium citrate monohydrate from 2 mEq K, 3 K per formula unit (mEq unit; wave-4 F0393 setting) |
| T17 | FITS WITH SETTING | PVP/PEG/saccharin/colour solution in 6.0 ml isopropyl alcohol per 10 tablets (T17 liquid by volume via density) |
| F2 | FITS WITH SETTING | dry until no alcohol odour AND moisture below 0.3 % (F2 stop when all named checks pass) |
| F4 | FITS WITH SETTING | leucine doubled if sticking, with the new target weight from T2 (known wave-2 rule: added blend forces a new target) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The mEq rows use the setting found in wave 4 (F0393), still to be merged in the wave-4 summary; not counted as new again. The text reads the citrate as 2.10 g per 10 tablets, but Examples 7-9 and the 3.41 g total confirm 2.16 g (OCR error, not a source error).

Counts: 142 rows; FITS 133, FITS WITH SETTING 9, NEW SETTING 0, GAP 0.

## F0489 doxofylline, uncoated bilayer IR + SR matrix (HPMC K15M + Eudragit RSPO), wet granulation with water (listed: single ER hydrophilic matrix, roller compaction, 650 mg), 800 mg

Source: Panda N et al., Int J Pharm Pharm Sci 2015;7(10):74-83, Tables 1-2 (DIRF8 + DSRF6 = DBMF6), https://journals.innovareacademics.in/index.php/ijpps/article/download/7527/6171?inline=1. Close variant: bilayer 361 mg IR + 439 mg SR (the SR layer itself weighs 650 mg); wet granulation; lab scale.

- IR layer (DIRF8): doxofylline 361 mg, MCC PH101 25, lactose 29, PVP K30 50, crospovidone 20, Mg stearate 5, talc 10; 500 mg.
- SR layer (DSRF6): doxofylline 439 mg, HPMC K15M 80, Eudragit RSPO 50, lactose 16, insoluble starch 45, Mg stearate 7, talc 13; 650 mg. Tablet 1,150 mg, 12 mm concave.
- Process (both layers): sieve #80, wet mass with water, pre-dry 5-10 min, wet sieve #20, dry 40 C for 20 min to 2-5 % moisture, lubricate; granule flow tests (angle of repose, densities, Carr, Hausner); bilayer rotary press. Tests: thickness within +/- 5 %, hardness 5-7, friability, weight variation, assay, swelling, two-stage dissolution over 12 h.
- Batch 200,000 tablets (100 kg IR, 130 kg SR granule). Standard practice assumed: mixer and dryer equipment, layer press settings, IPC frequency.

| Template | Result | Step |
|---|---|---|
| T6 | FITS WITH SETTING | angle of repose of IR granules (round-3 T6 option) |
| T6 | FITS WITH SETTING | angle of repose of SR granules (round-3 T6 option) |
| C1 | FITS WITH SETTING | hardness 5-7 kgf (round-3 unit kgf; the source prints kg/cm2) |
| C1 | FITS WITH SETTING | IR layer weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | SR layer weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | total tablet weight within +/- % of the sum of the two layer targets (C1 option) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The same API is in both layers, so each layer has its own weight check and the layer ratio is checked (known wave-3 rule). The dose split (361 + 439 mg) comes from a pharmacokinetic calculation in the paper; it is a design value, not a batch-record step.

Counts: 148 rows; FITS 141, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0490 loratadine, uncoated IR, wet granulation with water (listed: roller compaction), 10 mg

Source: EP 1 303 276 B1 (Ranbaxy), Example 3 Table 3.1 and [0021], with Examples 1, 2 and 4 for the particle-size effect, https://data.epo.org/publication-server/rest/v1.2/patents/EP1303276NWB1/document.pdf. Thin variant: wet granulation; no equipment or parameters.

- Per tablet: loratadine 10.0 mg (d90 below 10 um, d50 below 5 um, specific surface area 1.54 m2/g), lactose 79.75, starch 7.5, pregelatinised starch 2.0, Mg stearate 0.75; 100.0 mg.
- Process: drug mixed with the excipients, granulated with water, dried, lubricated, compressed; over 90 % dissolved in 30 min (0.1 N HCl, paddle).
- Bioavailability follows the API: coarse API (d90 47 um, 1.13 m2/g) gave Cmax 67.5 % of Claritin; 1.54 m2/g gave 95.5 %; 2.04 m2/g gave 130 %.
- Batch 1,000,000 tablets (100 kg). Standard practice assumed: water quantity, drying limits, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The API lot's d90, d50 and surface area are checked against both limits (C1 on CoA values) before dispensing.

Counts: 92 rows; FITS 90, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0491 phenylephrine hydrochloride, film-coated and wax-polished IR, spray-dried API then direct compression, 5 mg (listed 10 mg, printed)

Source: EP 2 190 414 B1 (McNeil-PPC), Table 2 column 1 with [0057], spray-drying Example 1 [0044] and [0053], wax polish from Table 2 columns 2-6, https://data.epo.org/publication-server/rest/v1.2/patents/EP2190414NWB1/document.pdf. Close variant: 5 mg; the wax polish is only on the source's combination columns; printing is not in the source.

- Per tablet: spray-dried phenylephrine HCl 5.00, silicified MCC (Prosolv SMCC 90) 85.6, pregelatinised starch 2.00, crospovidone 4.00, stearic acid 3.00, Mg stearate 0.40, acesulfame K 0.152; core 100.152 mg; white film coat 6.08; 106.232 mg; candelilla wax 0.30 mg added here.
- Spray-dry feed (Example 1): phenylephrine HCl 30 g, citric acid 1 g, maltodextrin 120 g, water 200 g; dissolved, acid added, spray dried (conditions not given). Theoretical content 19.9 % PE HCl.
- Process [0057]: spray-dried PE into a tote bin, de-lumped crospovidone, starch and stearic acid blended, Mg stearate blended, compressed; Opadry II with acesulfame K dispersed in water, de-aerated, sprayed to 4 % of the coated tablet weight.
- Plant reading: 5.00 mg is the PE HCl dose, so about 25.2 mg spray-dried material is weighed from its assay and the Prosolv takes the difference (about 65.4 mg) to keep the 100.152 mg core. Batch 1,000,000 tablets (5 kg PE HCl, about 25.2 kg spray-dried material). Standard practice assumed: spray-dryer settings, blend times, IPC limits, printing.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | spray-dry feed from the Example 1 recipe ratio scaled to the batch's PE need (T8 % w/w mode) |
| T18 | FITS WITH SETTING | spray-dried material per tablet from its measured PE HCl content (T18 content from in-process result; known, wave 1) |
| T5 | FITS WITH SETTING | coat gain as % of the coated tablet weight (round-3 T5 base option: final weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The table does not say whether "5.00 mg spray dried phenylephrine HCl" is the drug or the powder. Read as powder, each tablet holds about 1 mg PE HCl (-80 %); this is the known wave-1/2 rule for diluted or dispersed intermediates, with its size here.

Counts: 140 rows; FITS 135, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0492 pirfenidone, film-coated IR, high-shear wet granulation, 267 mg

Source: EP 3 511 001 B1 (Alfred E. Tiefenbacher), Example 16 [0046]-[0047], https://data.epo.org/publication-server/rest/v1.2/patents/EP3511001NWB1/document.pdf

- Per tablet: stage A pirfenidone 267.454 (adjusted for assay and water; theoretical 267.000), mannitol SD200 8.333, croscarmellose 3.333; stage B povidone K29/32 6.667 in water; stage C MCC PH101 13.212 (reduced from 13.667 to absorb the API adjustment), croscarmellose 5.000, colloidal silica 1.000, SSF 2.000; core 307.0 mg; Opadry II yellow 8.0 mg at 20 % w/w solids; 315.0 mg.
- Process: stage A sifted #30, rapid mixer 5 min; binder added slowly; wet milled through a 6.35 mm screen; dried; sifted #20 and retains milled through 1.016 mm; blended with sifted stage C; compressed; coat dispersion stirred about 45 min, perforated pan. Data: bulk 0.433, tapped 0.552 g/ml, Carr 21.67 %, Hausner 1.276; core 307.6 mg, 82-92 N, 5.18-5.25 mm, DT 36 s, friability 0.
- Batch 300,000 tablets (92.1 kg core). Standard practice assumed: drying temperature and LOD end point, IPC limits, pan settings.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source's own T9 + T10 pair (assay and water adjustment, MCC compensation) maps directly onto the templates.

Counts: 128 rows; FITS 126, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0494 mirabegron, film-coated ER hydrogel matrix (PEO/PEG), roller compaction (listed: direct compression), 50 mg

Source: EP 3 292 864 A1 (Synthon), Example 1 Table 1 [0045], process scheme [0046] (image, checked against the page), PK table after [0047], https://data.epo.org/publication-server/rest/v1.2/patents/EP3292864NWA1/document.pdf. Close variant: dry granulation by compaction.

- Per tablet: intragranular mirabegron 50.00 mg (20 %), PEO 7,000,000 41.25, PEG 8000 148.35, HPC (Klucel EXF) 7.50, BHT 0.40, Mg stearate 1.25; extragranular Mg stearate 1.25; core 250.00 mg; Opadry yellow 7.50; 257.50 mg. PEO:PEG 1:3.60 (claimed range 1:3 to 1:4.5).
- Process (scheme): sieve and mix the intragranular powders, add sieved Mg stearate, mix, compact, mill (granules D90 not above 1 mm), add extragranular Mg stearate, compress, coat. No parameters given.
- Exposure follows the PEO:PEG ratio: 1:3.60 gave Cmax 100 % of Myrbetriq/Betmiga; 1:5.01 gave 173 %; 1:2.16 gave 56 %.
- Batch 400,000 tablets (100 kg core). Standard practice assumed: all process parameters, roll force, IPC limits, coat.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The weighed PEO:PEG ratio is checked (T6 + C1) after any T10 compensation; the formula has no inert filler, so a potency excess would come out of the PEG.

Counts: 118 rows; FITS 116, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0495 tamsulosin hydrochloride, ER lipid/hydrophilic matrix with an enteric-type film coat, high-shear granulation, 0.4 mg

Source: EP 1 784 161 B1 (Instytut Farmaceutyczny), Example 1 [0045]-[0048] (core) and Example 2 [0053]-[0054] (coat), https://data.epo.org/publication-server/rest/v1.2/patents/EP1784161NWB1/document.pdf. Close variant: glyceryl dibehenate + povidone matrix (listed HPMC matrix); acid-resistant coat (listed plain film coat).

- Per tablet (the table is per 10,000 tablets, though headed per 1,000): tamsulosin HCl 0.40 mg, lactose 50.0, glyceryl dibehenate 56.0, povidone K30 14.0, sorbitol powder 50.0, sorbitol instant 27.6, Mg stearate 2.0; 200.0 mg (Table 2 average weight 200.0 mg).
- Process: lactose, sorbitol and glyceryl dibehenate mixed 4 min at 300 rpm; drug (1 % excess) sieved 0.3 mm and suspended in water (40 ml per 10,000 tablets, plus 50 ml rinse); granulated 16 min (propeller 1,500 then 3,000 rpm); fluid-bed dried 30 C for 8 min to 0.5-2.0 %; 0.8 mm oscillating granulator; granules weighed and Mg stearate + sorbitol instant calculated on granule weight; compressed with 8 mm punches.
- Coat (Example 2, per 10,000 tablets): Eudragit L30 D-55 113.3 g (34.0 g solids), triethyl citrate 3.4 g, talc 5.0 g, TiO2 2.5 g, yellow lake 0.39 g; bed 30-34 C, inlet 45 C, to about 4.6 mg per tablet; 5 min drying.
- Batch 500,000 tablets (100 kg; 202 g API with the 1 % excess). Standard practice assumed: coat water, spray rate, IPC limits.

| Template | Result | Step |
|---|---|---|
| T1 | FITS WITH SETTING | API suspension added = vessel weight before - after, rinse included (T1 Difference) |
| T1 | FITS WITH SETTING | coat per tablet in mg = mean coated - mean core, target about 4.6 mg (T1 Difference) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The 1 % excess is declared in the process (T16, fits). Read literally, the "g per 1,000 tablets" header gives 4 mg tamsulosin in a 2,000 mg tablet on 8 mm punches (10 times the dose); the known tooling-fit rule (wave 2) and T8 per-tablet quantities catch it.

Counts: 121 rows; FITS 117, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0496 cyanocobalamin + SNAC, film-coated IR, granulated (listed: direct compression), 5 mg (listed 1,000 ug)

Source: EP 2 215 047 B1 (Emisphere Technologies), Example 6 [0032] with the SNAC specification of Example 3, https://data.epo.org/publication-server/rest/v1.2/patents/EP2215047NWB1/document.pdf. Close variant: 5 mg cyanocobalamin with the absorption enhancer SNAC; uncoated in the source; granulation method not stated.

- Per tablet: intragranular cyanocobalamin USP 5.00 mg, SNAC 100.00, povidone K90 2.00, anhydrous dibasic calcium phosphate 70.00; extragranular dibasic calcium phosphate 21.00, Mg stearate 2.00; 200.0 mg.
- SNAC specification: assay as the sodium salt, as is, 90-110 %; water not above 3.0 %; sodium 6.9-8.4 %.
- Plant choices (not in source): dry granulation by roller compaction with povidone as dry binder; opaque HPMC film coat 3 % for light protection; low-actinic light. Batch 300,000 tablets (60 kg; 1.5 kg cyanocobalamin, 30 kg SNAC). Standard practice assumed: all process parameters and IPC limits.

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | extragranular Emcompress takes the excess of both cyanocobalamin and SNAC (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Cyanocobalamin is assayed on the dried basis and may lose up to about 12 % on drying, so T9 takes the lot's LOD; SNAC is assayed as is (no LOD correction). The second source (EP 0 416 773 B1, 0.1-1 % cyanocobalamin dilutions on starch) was not needed at 5 mg.

Counts: 110 rows; FITS 107, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0500 tibolone, uncoated IR, direct compression, 2.5 mg

Source: EP 3 452 019 B1 (Novalon), Example 1 Table 2 (batches 2-4) and [0048], https://data.epo.org/publication-server/rest/v1.2/patents/EP3452019NWB1/document.pdf; trituration step from EP 1 444 247 B1 (Norton Healthcare), Example 1 [0040], https://data.epo.org/publication-server/rest/v1.2/patents/EP1444247NWB1/document.pdf

- Per tablet: tibolone 2.5 mg, lactose monohydrate 43.15, mannitol 43.15, potato starch 10, ascorbyl palmitate 0.2, Mg stearate 1; 100 mg.
- Process: weigh, sieve, homogenise, compress; PVC/Al blisters. The second source first triturates the API with a small part of the powder, then blends and compresses 100 mg tablets.
- Batch 1,000,000 tablets (100 kg; 2.5 kg tibolone) in a hormone-contained area. Standard practice assumed: sieve sizes, blend times, BU sampling, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 94 rows; FITS 92, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0484 zopiclone, film-coated IR, direct compression, 7.5 mg

NO SOURCE: SmPCs give only the lactose amount and the tablet weight; the nearest patent (EP 1 997 482 B1) is for eszopiclone, a different API. Not counted.

## F0488 Dermatophagoides house dust mite allergen extract, sublingual oral lyophilisate, 12 SQ-HDM

NO SOURCE: the only source (EP 2 436 395 B1) gives the grass-pollen (Phleum) record, already mapped for F0087 and F0285. A dust-mite record would need invented extract and potency numbers (allowed weak variant treated as NO SOURCE). Not counted.

## F0493 ethionamide, dispersible IR (paediatric), wet granulation, 125 mg

NO SOURCE: the WHO public assessment reports (TB352, TB333) describe the process qualitatively and give no quantitative formula. Not counted.

## F0497 nicotinamide, uncoated IR, slugging, 500 mg

NO SOURCE: only qualitative microtablets, coated granules for capsules or sachets, and supplement labels without quantities. Not counted.

## F0498 selenium (as L-selenomethionine), uncoated IR, direct compression, 100 ug

NO SOURCE: only supplement labels with excipient names; no formula with process. Not counted.

## F0499 nomegestrol acetate, uncoated IR, fluid-bed granulation, 5 mg

NO SOURCE: no single-agent formula found; the nearest patent (EP 1 227 814 B1) is a combination with estradiol. Not counted.

## Totals for F0481-F0500

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0481 | 129 | 126 | 3 | 0 | 0 |
| F0482 | 118 | 114 | 4 | 0 | 0 |
| F0483 | 125 | 122 | 3 | 0 | 0 |
| F0485 | 101 | 96 | 5 | 0 | 0 |
| F0486 | 104 | 101 | 3 | 0 | 0 |
| F0487 | 142 | 133 | 9 | 0 | 0 |
| F0489 | 148 | 141 | 7 | 0 | 0 |
| F0490 | 92 | 90 | 2 | 0 | 0 |
| F0491 | 140 | 135 | 5 | 0 | 0 |
| F0492 | 128 | 126 | 2 | 0 | 0 |
| F0494 | 118 | 116 | 2 | 0 | 0 |
| F0495 | 121 | 117 | 4 | 0 | 0 |
| F0496 | 110 | 107 | 3 | 0 | 0 |
| F0500 | 94 | 92 | 2 | 0 | 0 |
| **Total (14)** | **1,670** | **1,616** | **54** | **0** | **0** |

Counted 14 formulations, 1,670 rows: FITS 1,616, FITS WITH SETTING 54, NEW SETTING 0, GAP 0. NO SOURCE 6 (F0484, F0488, F0493, F0497, F0498, F0499).

New settings and gaps:
- None. Everything uses existing settings or known findings: C1 limits around a computed value, T5 loss mode and final-weight base, T1 Difference, T8 % w/w mode and product of readings, T6 angle of repose, T10 several adjusted materials into one filler, T11 two drug molecules per salt unit and the wave-1 typed-factor check, T17 liquid by volume, T18 in-process content, F2 all named checks, the kgf unit, and the mEq unit found in wave 4 (F0393; F0487 uses it four times).

Safety rules:
- **New: a ratio of release-controlling excipients can set the dose** (F0494). With the same 50 mg of mirabegron, PEO:PEG at 1:3.60 matched the reference (Cmax 100 %), 1:5.01 gave Cmax 173 % (AUC 130 %), and 1:2.16 gave 56 % (AUC 63 %). The master checks the ratio of the quantities actually weighed (T6 + C1, here 1:3 to 1:4.5) after any T10 compensation. T10 must not take a potency excess from one partner of a dose-critical pair unless the ratio check still passes on the adjusted quantities. The PEO lot's viscosity grade is a C1 check on the CoA.
- **New: label claim made from several salts** (F0487). "20 mEq" comes from KCl (8), KHCO3 (10) and potassium citrate (2); glycine hydrochloride supplies the rest of the chloride in solution. The claim is checked as the T2 sum of each salt's mEq (T11), never put on one salt. Putting all 20 mEq on KCl would weigh 1,491 mg instead of 597 mg and give 32 mEq K per tablet (+60 %). This extends the wave-4 mEq rule (F0393).
- **API particle size and surface area set exposure in both directions** (F0490). Loratadine at d90 47 um / 1.13 m2/g gave Cmax 67.5 % of the reference; at 2.04 m2/g it gave 130 %. The lot's PSD and surface area are C1 checks with an upper as well as a lower limit. This extends the known wave-3 rule (API crystal form must match the master).
- Reminders of known rules, with their size here: a powder line read as drug (F0491: 5 mg of spray-dried powder is about 1 mg PE HCl, -80 %); a "per 1,000" header that is really per 10,000 (F0495: 10 times the dose; caught by the wave-2 tooling-fit check); label basis (F0486 dihydrochloride against base, +30 %; F0482 tartrate against base, 5 mg tartrate = 4.25 mg base, -15 %); typed salt factor (F0485: 1.18 against 1.169 by molecular weight, +0.6 to +0.9 %); hydrate water lost at low RH (F0485 sesquihydrate below 10 % RH, up to about 5 % more drug per mg weighed; dispensing RH needs a lower limit as well); undeclared drug excess (F0482, 2.5-3 %).

Sources that contradict themselves:
- US 2007/0264330 A1 (F0482): the 20 mg column of Table 7 adds up to 99.75 %, not 100 %. All drug lines are 2.5-3 % above the nominal strength with no reason given.
- EP 3 713 919 B1 (F0485): the stated factor 1.18 gives 59.0 mg Form A for 50 mg, outside the claimed 58.7-58.9 mg; the molecular weights of the hemisulfate sesquihydrate give 1.169 (58.4 mg).
- US 8,003,126 B2 (F0486): the Example 2 text for a 12 kg batch gives 120 g riboflavin (0.01 % is 1.2 g) and 9 kg sodium stearyl fumarate (0.75 % is 90 g). Formulation I names only one of its two binders ("104 grams" of an unnamed material). Example 3 says "100 mg tetrahydrobiopterin", while its table gives 100 mg of the dihydrochloride.
- Panda et al. 2015 (F0489): the text sets the USP weight tolerance at 5 % for tablets over 324 mg, then applies 7.5 % / 15 % to these 1,150 mg tablets. Hardness is given in kg/cm2 for a crushing force. The optimised batch is said to hold 12.5 % HPMC and 8 % Eudragit; the table gives 12.3 % and 7.7 % of the SR layer.
- EP 1 303 276 B1 (F0490): the Example 4 lines add up to 100.6 mg against a stated 100.0 mg.
- EP 2 190 414 B1 (F0491): the coat is said to be 4 % of the coated tablet weight, but 6.08 mg on 106.232 mg is 5.7 % (6.1 % of the core). In Example 11, 71.4 mg phenylephrine HCl and 28.6 mg chlorpheniramine sprayed onto 1,000 g MCC cannot give the stated 6.43 % and 2.58 % (grams must be meant).
- EP 3 511 001 B1 (F0492): screen sizes and Dv90 are printed in mm (6350 mm, 145 mm; um meant). The footnote gives the theoretical MCC as 13.667 mg, while Example 12 prints 13.666 mg and Example 17 uses 27.332 mg (2 x 13.666). Example 13 uses 267.964 mg pirfenidone for 267 mg with no adjustment footnote.
- EP 3 292 864 A1 (F0494): in Comparative Example 2 the lines add up to 250.10 mg against 250.00 mg, PEO 31.30 mg is printed as 12.64 % (it is 12.52 %), and the ratio is 1:5.06, printed as 1:5.01.
- EP 1 784 161 B1 (F0495): the core table is headed g per 1,000 tablets, but its numbers are per 10,000 (200 mg tablets, 0.2 % API in claim 16, water given per 10,000). The plasticiser is called "triethyl citrate (triacetin)", and the Example 1 coat is given "in mg/500 mg" with no stated basis.
- EP 1 482 912 B1 (F0481): the Example 1 lines add up to 125.025 mg against a stated 125 mg (minor; the batch column of 25.005 g matches the lines).
