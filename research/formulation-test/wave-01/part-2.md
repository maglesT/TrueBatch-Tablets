# Wave 1, part 2 (F0021-F0040)

Each section lists only the rows that are not plain FITS. The counts cover every row of the outlined master batch record.
Two rows come up in almost every compressed tablet and are always FITS WITH SETTING: mean weight within +/- % of
target (C1 option: limits around a computed value), and friability (T5 loss mode). All other rows are plain FITS unless
they are listed.

## F0021 ethacrynic acid, uncoated IR, wet granulation (fluid-bed drying), 25 mg

Source: WO 2018/041824 A1, Example 1, https://patents.google.com/patent/WO2018041824A1/en

- % w/w: ethacrynic acid 18.52, lactose monohydrate 68.48, pregelatinised starch 3.00 (intragranular), pregelatinised starch 7.00 and talc 2.00 (extragranular), Mg stearate 1.00. At 25 mg the tablet is 135 mg.
- Process: co-sift, dry mix in a rapid mixer granulator, granulate with water, dry in a fluid-bed drier, size in an oscillating granulator, blend with the extragranular part, lubricate, compress.
- Key point: some moisture keeps the product stable (less dimer impurity C at an LOD of 1.24-1.99 % than below 1 %). So the LOD has a lower limit as well as an upper one. LOD is read on a crushed sample pooled from several places, with a halogen analyser at 105 °C.
- Batch 500,000 tablets. Standard practice assumed: mixing and drying times, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | dispensing from % w/w (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: an over-dried granule cannot be re-wetted in the same step. F3 then raises a deviation (C1 low limit), and F2 only covers the upper limit.

Counts: 62 rows; FITS 59, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0022 gemfibrozil, film-coated IR, wet granulation (close variant of foam granulation), 600 mg

Source: US 5,281,421 A, typical formulation and process, https://patents.google.com/patent/US5281421A/en. Close variant: aqueous surfactant granulation; no foam-granulation source was found.

- Per 1,000 tablets: gemfibrozil 600 g, silicon dioxide 12 g, hydroxypropyl cellulose 16 g, pregelatinised starch 141 g, and surfactant (polysorbate 80 or SLS, 0.5-2 % of gemfibrozil) in 100 ml water. Then silicon dioxide 10 g, granular MCC 64.8 g and calcium stearate 10 g. Tablet 860 mg.
- Process: mill API with additives, blend with starch, granulate, dry, add silica, remill, blend, compress on elliptical punches. Hardness 12-16 kp, thickness about 0.300 in.
- Standard practice assumed: film coat (the marketed tablet is film-coated; the patent describes no coat), coat solids %, weight gain, IPC frequency. Batch 300,000 tablets.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | surfactant as % of the gemfibrozil quantity (T8 "% of" a recorded/formula weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the source lists pregelatinised starch 141 g in the formula and then says "blend with 141 g". This reads as the same portion, because the solids add up to the 860 mg tablet weight only if the starch is counted once.

Counts: 66 rows; FITS 63, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0023 imidapril hydrochloride, uncoated IR, fluid-bed granulation (close variant of direct compression), 5 mg

Source: JP 2007-284390 A, Example 1, https://patents.google.com/patent/JP2007284390A/en. Close variant: fluid-bed granulation at 5 mg; the listed variant is direct compression at 10 mg.

- Per tablet: imidapril HCl 5.0, lactose 71.8, polyvinyl alcohol (partly saponified) 1.6, hardened oil 1.6; 80.0 mg.
- Process: fluid-bed granulation (POWREC MP-01) of API (about 20 µm) with lactose, sprayed with 5 % w/w PVA solution; blend with hardened oil; rotary press.
- The example batch (30 g API, 6,000 tablets) checks: 430.8 g lactose, 9.6 g PVA from 192 g of solution, 9.6 g oil. Commercial batch 1,000,000 tablets. Standard practice assumed: LOD, RH limits (ACE inhibitor that cyclises in moisture), IPC.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 60 rows; FITS 58, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0024 lacidipine, film-coated IR, solvent (ethanol) fluid-bed granulation, 6 mg

Source: FR 2 995 212 A1, Example 1, tablet no. 2 (invention), https://patents.google.com/patent/FR2995212A1/en. Close variant: 6 mg (listed 4 mg).

- Per tablet: lacidipine 6.00 and povidone 54.00 (ratio 1:9) dissolved in ethanol (126 mg, removed), sprayed onto lactose monohydrate 273.00 in a fluid bed at a product temperature of 30-40 °C. Extragranular spray-dried lactose 114.50 and Mg stearate 2.50. Core 450.0 mg; Opadry (HPMC) 11.30 in water. Total 461.3 mg.
- Batch 500,000 tablets. Light-sensitive: low-actinic light. Flammable solvent: area and equipment checks. Standard practice assumed: residual ethanol limit, LOD, IPC, coat solids %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 66 rows; FITS 64, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0025 nitrendipine, scored IR, aqueous wet granulation, 20 mg

Source: US 4,724,141 A, Example 1, https://patents.google.com/patent/US4724141A/en

- Per 1,000 tablets: nitrendipine 20 g, corn starch 27 g, lactose 9 g, MCC 14.7 g, granulated with PVP 25,000 15 g + SLS 4 g in water 10 g; Mg stearate 0.3 g. That gives 90 mg per tablet (implied; the tablet weight is not stated).
- Process: dry mix, granulate (planetary mixer; the patent also allows fluid bed), rasp, dry, sieve, lubricate, compress.
- Standard practice assumed: high-shear mixer, score and its subdivision test, light protection, IPC. Batch 1,000,000 tablets.

| Template | Result | Step |
|---|---|---|
| C3 | FITS WITH SETTING | subdivision of scored tablets: each half within +/- % of the mean half mass (C3 limits as +/- % of the series mean) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 62 rows; FITS 59, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0026 perindopril arginine, film-coated IR, high-shear granulation (close variant of roller compaction), 5 mg

Source: EP 3 842 035 A1, Examples 1A and 2A, https://data.epo.org/publication-server/rest/v1.2/patents/EP3842035NWA1/document.html. Close variant: wet granulation; no roller-compaction source with a formula was found.

- Granules per tablet: perindopril arginine 5.000, CaCl2 0.608 (weighed as CaCl2·6H2O), MCC 102 36.580; 42.188 mg. The API and the hexahydrate are dissolved in water at 40 °C, with a water rinse, and sprayed at about 1,500 g/min onto MCC in a high-shear mixer. The granules are fluid-bed dried at 50-65 °C to an LOD of 0.5-1.5 % and sieved at 18 mesh.
- Tablet 2A: granules 42.188, MCC 37.611, mannitol 19.031, colloidal silica 0.270, Mg stearate 0.900; 100.0 mg. Compression force 2-4 kN, about 80 N. Coated in the source's later examples.
- The source batch is 373,810 tablets (1,869.05 g API), a realistic commercial size. Moisture-sensitive: RH limit, Alu-Alu.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | excipient weighed as hexahydrate, formula as anhydrous CaCl2 (T11 any two named forms) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 449 g CaCl2·6H2O is stated as 227.3 g CaCl2. By molecular weight it is about 227.5 g (0.07 % apart), so the master should compute this, not copy it.

Counts: 64 rows; FITS 61, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0027 sotalol hydrochloride (non-racemic 3:1), uncoated IR, direct compression, 40 mg

Source: US 2001/0004643 A1, Example 1, https://patents.google.com/patent/US20010004643A1/en. Close variant: a 40 mg tablet with a (+):(-) isomer ratio of 3:1, not scored (listed: 80 mg scored).

- Per tablet: sotalol HCl (+):(-) 3:1 40 mg, starch 60, MCC 10, crospovidone 2.5, Mg stearate 0.5, talc 2.0; 115 mg.
- Standard practice assumed: the whole process (the patent gives formula only). That covers direct compression, sieving, blend times and IPC, and making the 3:1 ratio by adding d-sotalol HCl to racemate (T26, round 3), with chiral HPLC on each lot and on the blend. Batch 500,000 tablets.

| Template | Result | Step |
|---|---|---|
| T26 | NEW SETTING | basis check on T26: each lot's isomer fraction must be a fraction of total sotalol HCl on the same assay basis, not % w/w of the lot. Refused otherwise (see safety rule) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 56 rows; FITS 53, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0028 spironolactone, mini-tablet IR, direct compression, 4 mg

Source: CN 119112814 A, Example 1, https://patents.google.com/patent/CN119112814A/en. Close variant: 4 mg (listed 2.5 mg).

- Per mini-tablet: spironolactone 4, MCC 102 16, lactose (Granulac 200) 4, HPMC E3 4, Mg stearate 0.28; 28.28 mg.
- Process: mix in a multi-directional mixer, add Mg stearate, mix 3 min, compress (high-speed rotary, multi-tip tooling).
- Standard practice assumed: micronised API PSD, balance minimum weight (equipment record), CU, friability sample (about 230 mini-tablets for 6.5 g), disintegration, paediatric labelling. Batch 2,000,000 mini-tablets.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 56 rows; FITS 54, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0029 deucravacitinib, film-coated IR, direct compression, 6 mg

NO SOURCE: the FDA review and trial protocols name the excipients only (the chemistry review's composition is not readable); patents are on crystal forms and dispersions with no tablet formula. Not counted.

## F0030 dapagliflozin + saxagliptin, film-coated IR, drug layering, 10 + 5 mg

Source (partial): WO 2012/031124 A2, https://patents.google.com/patent/WO2012031124A2/en. It covers a dapagliflozin (propanediol hydrate) core with three PVA coats, saxagliptin in the second, Opadry II at 17.5 % w/w adjusted to pH 2.0 +/- 0.3, and suspension hold at most 72 h. Layering process and quantities: EP 2 298 288 B2, Example (same applicant and technology), https://data.epo.org/publication-server/rest/v1.2/patents/EP2298288NWB2/document.html

- Layers per tablet (EP example, 2.5 mg potency): seal coat Opadry HP 4 mg; middle layer saxagliptin 2.5 mg + Opadry HP 20 mg; outer coat Opadry HP 4 mg.
- Layering: weigh 30 tablets every 30 min, then every 15 min, until the target weight (the patent's equation). Drug deposited is checked by HPLC/NIR and coating stops at target. Dry until the weight is constant.
- Not in the source: the dapagliflozin core quantities (no numbers in the WO text) and the 5 mg layer quantities. The master would take them from the product's own development; no numbers are assumed here. Batch 300,000 tablets.
- Two incompatible APIs: kept apart by the seal coat. Salt/solvate factors: dapagliflozin propanediol monohydrate, saxagliptin HCl.

| Template | Result | Step |
|---|---|---|
| F6 | NEW SETTING | periodic check whose interval changes during the stage: every 30 min, then every 15 min as the target nears (or after a set time or value) |
| T14 | FITS WITH SETTING | saxagliptin content uniformity by individual results only (drug in coat) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability of the core (T5 loss mode) |

Counts: 74 rows; FITS 70, FITS WITH SETTING 3, NEW SETTING 1, GAP 0.

## F0031 gliquidone, uncoated IR, wet granulation, 30 mg

Source: CN 105997913 A, Embodiment 1, https://patents.google.com/patent/CN105997913A/en

- Parts: lactose 35, MCC 5, ethylcellulose 35, poloxamer 1.9 (in 30 % v/v ethanol), magnesium aluminium silicate 10, talc 2.0. 30 mg tablet at 25 % drug load, so 120 mg.
- Process: excipients sieved at 150 mesh; geometric dilution of API with lactose and MCC; poloxamer solution sprayed while stirring; 20-mesh wet screen; dry at 60 °C; size; add talc; compress. Weight variation +/-5.4 %, hardness and friability pass.
- Standard practice assumed: fluid-bed drier instead of the oven (listed fluid-bed), LOD, IPC limits. Batch 500,000 tablets.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | 30 % v/v ethanol made by volume via density |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the excipient parts add up to 88.9, but a 25 % load of 30 mg leaves 90 mg for excipients. The tablet is either 118.9 mg (25.2 %) or the parts are rounded.

Counts: 60 rows; FITS 57, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0032 tofogliflozin hydrate, IR tablet, direct compression (close variant of fluid-bed granulation), 20 mg

Source: US 2016/0324786 A1, Example 3 (Tables 7-1, 7-2), https://patents.google.com/patent/US20160324786A1/en. Close variant: the source shows that direct compression gives faster disintegration than wet granulation (its comparative example), so direct compression was used.

- % w/w (tofogliflozin as anhydrous): tofogliflozin 20.0, lactose hydrate 55.0, MCC 20.0, croscarmellose 2.0, hydrogenated oil 1.5, Mg stearate 1.5; 100 mg R tablet, 6.0 mm, 5 kg batch.
- The hydrate quantity is raised to give the stated anhydrous amount, and lactose hydrate is reduced to keep 100 %.
- Rotary drum mixer, then lubricants, rotary press at 6-14 kN. Standard practice assumed: film coat (marketed coated), IPC limits. Commercial batch 1,000,000 tablets.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | hydrate to anhydrous molar factor (T11 any two named forms), then T10 on lactose |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 60 rows; FITS 57, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0033 voglibose, uncoated IR, fluid-bed granulation (API in binder solution), 0.2 mg

Source: WO 2025/016223 A1, preferred formula and Examples 1-7, https://patents.google.com/patent/WO2025016223A1/en

- Parts by weight: voglibose 1, lactose 520, HPC 27, Mg stearate 2, corn starch 117. At 0.2 mg the tablet is 133.4 mg.
- Process: lactose and starch sieved (0.8 mm, 750-1,000 rpm), premixed in the fluid bed. When the product reaches 28-43 °C, the API dissolved in the HPC solution is sprayed: air 20-80 m³/h, fan 40 Hz, inlet 60-80 °C, pump 9-16 rpm, atomising 0.6-1.4 bar, inlet air humidity 6-9 g/m³. Then dry to 1-3 % moisture, lubricate, compress.
- The source checks granule content RSD below 3 % across locations. Batch 1,000,000 tablets.

| Template | Result | Step |
|---|---|---|
| T25 | NEW SETTING | absolute humidity per volume of air (g/m³) as well as g/kg: read from the air handler or computed from RH, temperature (and pressure) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 64 rows; FITS 61, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0034 betamethasone sodium phosphate, soluble tablet, direct compression, 0.5 mg

NO SOURCE: SmPCs and Vidal list the excipients (sodium bicarbonate, sodium acid citrate, povidone, saccharin) without quantities; no patent or article formula was found. Not counted.

## F0035 oxandrolone, uncoated IR, fluid-bed granulation, 2.5 mg

NO SOURCE: patents are on uses and synthesis; one names the 2.5 mg tablet's excipients without quantities. Not counted.

## F0036 diphenoxylate hydrochloride + atropine sulfate, uncoated IR, wet granulation (fluid-bed drying), 2.5 mg + 25 µg

Source: CN 103040828 A, formula and Embodiment 2, https://patents.google.com/patent/CN103040828A/en

- Per 10,000 tablets: diphenoxylate HCl 25 g, atropine sulfate 0.25 g, starch 152-168 g, lactose 522.5-577.5 g, calcium hydrogen phosphate 47.5-52.5 g, 40 % ethanol 76-84 g, Mg stearate 6.65-7.35 g (each range is the target +/- 5 %). At target the tablet is about 79.2 mg.
- Process: API diluted geometrically with equal weights of starch (two steps, 80 mesh). Atropine dissolved in the 40 % ethanol. Dry mix 10-15 min in a high-shear mixer, add the atropine solution, wet mix 5-10 min, chopper 10-12 Hz. Fluid-bed dry (inlet about 80 °C, outlet about 45 °C, 5-10 min) to 3-5 % moisture, discharge at about 37 °C, size at 16-18 mesh, blend Mg stearate 10-15 min, compress.
- Controlled substance: witnessed dispensing and residue destruction, and the API accounted to the mg. Batch 1,000,000 tablets.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | 40 % ethanol by volume via density |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the formula gives +/- 5 % ranges for each excipient. The master fixes the target and uses only the stated range as the T10 limit (C1 on the T10 result).

Counts: 70 rows; FITS 67, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0037 famotidine, orodispersible lyophilisate, freeze-drying, 20 mg

Source: CN 101134033 A, Example one, https://patents.google.com/patent/CN101134033A/en

- Per 200 units: famotidine 4 g and aspartic acid 1.5 g in 20 ml water (solution A); gelatin 2 g, gelatin hydrolysate 0.4 g, mannitol 4 g, aspartame 0.2 g, NHDC 0.1 g in 50 ml water (solution B). Mix, make up to 100 ml, fill 0.5 ml per mould, freeze at -20 to -30 °C, freeze-dry, seal.
- Dry unit about 61 mg. Standard practice assumed: fill by weight (volume x density) in blister pockets, cycle set points, residual moisture, disintegration, cosmetic inspection. Batch 400,000 units (200 l solution).

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | solution made up to a final volume (% w/v) |
| T17 | FITS WITH SETTING | fill weight per pocket from fill volume x measured density |
| C1 | FITS WITH SETTING | mean fill weight within +/- % of target |

Counts: 58 rows; FITS 55, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0038 ilaprazole, enteric-coated (film-coated) tablet, direct compression, 10 mg

Source: CN 111686083 B, claims 1-8 and Example 1 method, https://patents.google.com/patent/CN111686083B/en (text read from the patentimages PDF).

- % w/w core: ilaprazole 3-5, stabiliser (Mg hydroxide etc.) 1-5, filler 90-95 (granular lactose : starch 1:1 to 3:1), lubricant 0.5-3. Seal coat gains 5-6 % and enteric coat 11-12 %, both on the core weight. Seal coat polymer : plasticiser : opacifier from 10:1:0.14 to 10:2:0.3; enteric polymer : plasticiser from 10:1 to 10:2.
- Process (10,000 tablets): API and Mg hydroxide mixed by sieving 10 times. The filler is added by equal amounts and sieve-mixed 10 times, then Mg stearate (5 passes). Rotary press, hardness 9 kg. Seal coat, then enteric coat. CU by ChP (A + 2.2S under 15).
- The tablet weight is not in the text (its tables are images). At 4 % the core is 250 mg. Batch 500,000 tablets; moisture-sensitive.

| Template | Result | Step |
|---|---|---|
| T5 | FITS WITH SETTING | enteric-coat gain on the uncoated core, not on the seal-coated tablet (T5 base: a named earlier stage) |
| F7 | FITS WITH SETTING | mixing by N sieve passes on the same lot (F7 N cycles, no split) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 68 rows; FITS 64, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0039 mesalazine, uncoated MUPS tablet (coated compacted particles), 500 mg

Source: EP 1 146 862 B1, Example 1, https://patents.google.com/patent/EP1146862B1/en (PDF via patentimages). Close variant: 500 mg (listed 1 g).

- Per tablet: 5-ASA 500.00, Eudragit RS 25.00, triethyl citrate 5.00 (compactate 530.00); Eudragit NE 23.85, talc 12.67, simethicone 0.48 (coated particles 567.00); MCC 144.06, Kollidon K90 8.94 (fluid-bed granulate); Kollidon CL 40.00. Total 760.00 mg.
- Process (350,000 tablets): 175 kg API compacted with an Eudragit RS30D dispersion (8.750 kg polymer) in a 400 l vacuum granulator. Dried to under 1 % water. Roller compacted at 15-20 kN/cm with a 2.0 +/- 0.5 mm gap; ribbon milled and sized to 0.6-1.25 mm. The particles are coated with NE40D, talc and 33 % simethicone emulsion, with talc added from time to time against static. The coated particles (198.450 kg) are blended with the granulate (53.550 kg) and Kollidon CL (14.000 kg). Compressed at 25-45 kN to 13.5 x 4.5 mm round tablets, with hardness over 0.8 N per mm² of fracture area.

| Template | Result | Step |
|---|---|---|
| T23 | NEW SETTING | strength as breaking force per fracture area, F / (D x H), not the 2F/(pi D T) tensile formula |
| T14 | FITS WITH SETTING | individual results only (drug in coated particles; no weight-variation option) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the 2.765 kg of talc added during coating is missing from the per-tablet formula. Talc 12.67 mg matches the 4.435 kg in the suspension only, and the coated-particle total (567 mg, 198.45 kg) also leaves it out. With it, the coated particles would be about 575 mg.

Counts: 78 rows; FITS 74, FITS WITH SETTING 3, NEW SETTING 1, GAP 0.

## F0040 methylnaltrexone bromide, IR tablet, wet granulation (close variant of direct compression), 150 mg

Source: US 10,376,505 B2, Example 5 (Table 5-1), https://patents.google.com/patent/US10376505B2/en. Close variant: wet granulation; no direct-compression source was found.

- Granulation (mg): methylnaltrexone bromide 150.00, MCC 58.54, SDS 50.00, crospovidone 9.48, polysorbate 80 10.73, edetate calcium disodium dihydrate 1.46 (water 40.03, removed). Blend: silicified MCC 150.00, crospovidone 15.52, sodium bicarbonate 58.54, talc 10.00, colloidal silica 2.50. Final: Mg stearate 1.28. Total 518.05 mg.
- API weighed against actual potency with MCC compensation. Water may be added for a proper granule, and sub-batches are allowed. The milling yield is recorded and the final-blend excipients are adjusted to it. Silica and Mg stearate are bag-premixed with a portion of the blend; the Mg stearate premix "may not be required" above 50 kg.
- Standard practice assumed: film coat (the source tablet is uncoated; the marketed one is coated), LOD, IPC. Batch 200 kg (about 386,000 tablets).

| Template | Result | Step |
|---|---|---|
| F4 | NEW SETTING | step included or skipped by a rule on a recorded value (the premix step only when the batch is at most 50 kg), decided by the master, not by the operator |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 68 rows; FITS 65, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## Totals for F0021-F0040

Counted 17 formulations, 1,092 rows: FITS 1,041, FITS WITH SETTING 46, NEW SETTING 5, GAP 0. NO SOURCE 3 (F0029, F0034, F0035).

New settings:
- T26 basis check (F0027): when two lots are mixed to a target isomer ratio, each lot's fraction must be a fraction of total active on the same assay basis. Variant of T26 (and of C5).
- F6 with an interval that changes (F0030): weigh every 30 min, then every 15 min near the end point. Variant of F6.
- T25 in g/m³ (F0033): limits on inlet air humidity per volume of air. Variant of T25.
- T23 force per fracture area (F0039): hardness limit as N/mm² of the broken face, F / (D x H). Variant of T23.
- F4 decided by a rule (F0040): the master includes or skips a step from a recorded value (batch size), with no operator choice. Variant of F4.

Safety rules:
- Isomer-ratio mixing (F0027): the l-isomer carries the beta-blockade. If T26 uses a lot's isomer % of lot weight (as-is), or a % on the base basis against an HCl assay, the 3:1 target drifts and the beta-blocking dose changes. T26 must refuse inputs on different bases, as C5 does for T9 + T11.
- Formula ranges (F0036): a formula given as ranges (+/- 5 %) must not leave the dispensed quantity to the operator. The master fixes the target, and the range is only the limit for T10.

Sources that contradict themselves:
- EP 1 146 862 B1 (F0039): 2.765 kg of extra talc is added during coating, but it is in neither the per-tablet formula nor the coated-particle total.
- CN 105997913 A (F0031): the excipient parts add up to 88.9, against the 90 mg left by a 25 % drug load in a 30 mg-dose tablet.
- EP 3 842 035 A1 (F0026): 449 g CaCl2·6H2O is stated as 227.3 g CaCl2; by molecular weight it is about 227.5 g (minor).
