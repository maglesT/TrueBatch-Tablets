# Wave 2, part 5 (F0181-F0200)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

Note on this part: the web-search limit shared by all helpers ran out after F0193. F0194-F0200 were not searched at all. They are marked NOT RESEARCHED, are not counted, and should be given to a later run. They are not real NO SOURCE results.

## F0181 maralixibat chloride, IR tablet, direct compression (close variant: DC blend, not high-shear wet granulation; listed film-coated)

Source: US 12,296,050 B2, Table 2.42 (Formulation 15) and Table 2.43, https://patents.google.com/patent/US12296050B2/en

- Per 10 mg tablet: maralixibat chloride (loop milled) 10.53 mg (= 10 mg free base), lactose monohydrate (FastFlo 316) 24.97, MCC (Avicel PH302) 50.00, colloidal silica 0.50, crospovidone 5.00, glyceryl palmitostearate 9.00; 100.0 mg. The 30 mg and 50 mg tablets use the same blend at 300 and 500 mg.
- The source gives a factor of 0.95 to convert the chloride to the free base. Lubrication with 9 % glyceryl palmitostearate was chosen after magnesium stearate blends stuck or picked at the punches.
- Compression study at 10 mg: 1.8-5.7 kN, mean mass 100.1-100.6 mg (RSD 0.50-0.70 %), hardness 3.2-7.5 kp, friability 0.08-0.49 %, disintegration 20 s to 5 min.
- Batch 1,000,000 tablets (100 kg). The lab process is shown only as a figure. Standard practice assumed for blend order and times, IPC limits, and a PVA film coat at 3 % for the listed film-coated type. Paediatric product.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | the typed factor 0.95 is checked against the molecular weights (cation 674.97, chloride 710.42) (known, wave 1: typed factor checked) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source corrected sticking during runs by adding lubricant (+0.25 %, then +5 %, +1.5 %) and crospovidone (+5 %) to the blend that was left. A master record must not allow this without a new target weight (see Safety rules). The claims say "based on the free base weight", but maralixibat is a quaternary ammonium, so the 0.95 factor is the cation-to-chloride ratio.

Counts: 66 rows; FITS 63, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0182 risdiplam, film-coated IR, direct compression, 5 mg

NO SOURCE. The SmPC and PI list only excipient names (tartaric acid, mannitol, MCC, silica, crospovidone, sodium stearyl fumarate, flavour; PVA coat). No Roche tablet patent example was found, and the EMA assessment report could not be retrieved (HTTP 429). Not counted.

## F0183 ferric citrate, film-coated IR (close variant: 500 mg anhydride-equivalent, fluid-bed granulation, not 1 g by roller compaction)

Source: EP 2 594 277 A1 (Japan Tobacco), Example 12A and Reference Example 1-4, https://data.epo.org/publication-server/rest/v1.2/patents/EP2594277NWA1/document.pdf

- Per tablet: ferric citrate 584.1 mg (= 500.0 mg anhydride equivalent after subtracting 84.1 mg Karl Fischer water), partially pregelatinised starch 60.0 (12 parts per 100 parts anhydride), calcium stearate 13.5; plain tablet 657.6 mg (573.5 mg water-free). Coat: Opadry II 29.5 and yellow iron oxide 0.5 (30.0 mg).
- Binder: Starch 1500G dispersed in purified water with a propeller mixer, sieved, and made up to 10 % w/w.
- Granulation (one sub-lot): 19.2757 kg ferric citrate (= 16.5 kg anhydride) is fluidised in a WSG-60, sprayed with 19,800 g of binder at 170-200 g/min with 70 °C inlet air, dried at 70 °C and screen-milled. This is done 3 times and the sub-lots are combined (62.0441 kg).
- The combined granules are blended with 1,300.4 g calcium stearate and compressed to 17.5 x 8 mm caplets with hardness of at least 150 N. Cores are coated in 10.38 kg pan loads with 15 % solids Opadry II suspension (1,770 g Opadry II, 30 g oxide, 10,200 g water) to about 30 mg per tablet.
- Batch: 3 granulation sub-lots, about 96,300 tablets. Standard practice assumed for LOD and IPC limits and for friability.

| Template | Result | Step |
|---|---|---|
| T12 | FITS WITH SETTING | as-is ferric citrate from the anhydride-basis quantity, using the lot's Karl Fischer water as the "LOD" input |
| T8 | FITS WITH SETTING | binder starch = 12 % of the computed anhydride quantity (T8 "% of" a computed weight, not the as-is weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of the target recomputed from the lot's water (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The formula has no filler that could absorb a change in lot water, so the target tablet weight changes with every lot. The theoretical weight is the T2 sum of the actual quantities, as in the wave 1 rule for mixed bases.

Counts: 72 rows; FITS 68, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0184 roxadustat, film-coated IR, fluid-bed granulation, 70 mg

NO SOURCE. EP 3 003 284 B1 (FibroGen) gives only coat colourant loadings per cm2 and core % ranges, with no core formula or process. The SmPCs give lactose and colourant mg only. RU 2 756 312 C1 could not be read in full. Not counted.

## F0185 bambuterol hydrochloride, uncoated IR (fast-dissolving), direct compression

Source: Gohil DY, Savaliya RP, Desai SD, Patel DJ, Int J Pharm Sci Res 2011;2(1):84-89, batch D4, doi:10.13040/IJPSR.0975-8232.2(1).84-89, https://ijpsr.com/wp-content/uploads/2014/12/13-Vol.-2-1IJPSR2011-Paper-11.pdf

- Per tablet (D4): bambuterol HCl 10 mg, mannitol 50, MCC 40, crospovidone 10, colloidal silica (Cabosil) 3, Mg stearate 2, aspartame 5, vanilla q.s.; 120 mg, 8 mm convex punches on a 10-station rotary press.
- Process: all materials sieved through #60, blended (co-ground in a mortar at lab scale), Mg stearate added for 5 min, compressed.
- Blend: bulk 0.421 and tapped 0.468 g/ml, Carr index 10.04 %, Hausner ratio 1.11, angle of repose 29.4°.
- Tablets: 121 +/- 1 mg, 3.57 mm, friability 0.53 %, hardness 3.3, disintegration 17 s, assay 98.7 %.
- Batch 1,000,000 tablets (120 kg). Standard practice assumed: bin blending in place of mortar co-grinding, a fixed vanilla quantity, IPC limits.

| Template | Result | Step |
|---|---|---|
| T6 | FITS WITH SETTING | angle of repose for the blend (round-3 T6 option) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C1 | FITS WITH SETTING | hardness in kgf (round-3 unit; the source writes "kg/cm2") |

Counts: 58 rows; FITS 54, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0186 bromhexine hydrochloride, orodispersible, direct compression (close variant: ODT, listed plain uncoated)

Source: Woyna-Orlewicz K, Brniak W, Tatara W et al., Pharm Res 2023, Table II (MIX formula) and Table VII, doi:10.1007/s11095-023-03605-x, https://www.pharmaexcipients.com/wp-content/uploads/2023/10/Investigating-the-Impact-of-Co-processed-Excipients-on-the-Formulation-of-Bromhexine-Hydrochloride-Orally-Disintegrating-Tablets-ODTs.pdf

- Per 100 mg tablet (% = mg): bromhexine HCl 8, MIX 84, sodium stearyl fumarate 4, lemon flavour 2, sucralose 2. MIX is an in-house premix of D-mannitol, MCC, crospovidone and colloidal silica, but the paper does not give its amounts.
- MIX is made in two stages: the four excipients are blended 15 min in a cube mixer at 10 rpm, then the lubricant is added for 5 min. Tablets are 7 mm flat bevel-edged, made on a rotary press.
- Production scale: 2 lots of 540,000 tablets each, blended in a bin blender and compressed on a Kilian S250. Appearance, mass, hardness, thickness, friability and disintegration are checked periodically; content uniformity, assay, LOD and dissolution are tested at the beginning, middle and end; yield is recorded.
- Results for lots 1 and 2: mass 102.0 and 101.5 mg, hardness 36.7 and 42.7 N, tensile strength 1.46 and 1.72 MPa, friability 0.1 and 0.3 %, disintegration 10 and 12 s, LOD 1.6 and 1.2 %, yield 92.5 and 93.5 %.
- Standard practice assumed: the MIX quantities (the master must fix them), IPC limits and frequencies.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 60 rows; FITS 58, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0187 phenylephrine hydrochloride + chlorphenamine maleate, chewable, drug-layered particles then direct compression (close variant: 7.5 + 3 mg chewable, listed 10 + 4 mg film-coated)

Source: EP 2 246 045 A1 (McNeil), Example 11, https://data.epo.org/publication-server/rest/v1.2/patents/EP2246045NWA1/document.pdf

- Layering solution (500 mL): phenylephrine HCl and chlorphenamine maleate in a 71.4 : 28.6 ratio, HPMC E15 10.0 g, water 350 mL plus 50 mL of 0.75 mg/mL citric acid. The pH is adjusted to 5.0 with 85 % ammonium hydroxide. Phenylephrine and maleate form adducts outside about pH 4.5-6.0.
- Layering: 1,000 g MCC PH200 in a Wurster insert, spray rate about 10 g/min, product 30-34 °C, atomising air 2.0 bar. The particles contain 6.43 % phenylephrine HCl and 2.58 % chlorphenamine maleate.
- Per tablet: layered particles 115.6 mg (= 7.5 mg phenylephrine HCl + 3 mg chlorphenamine maleate), sucralose 7.7, crospovidone 4.0, orange flavour 8.5, stearic acid 6.2, coarse mannitol 628.0; 770 mg.
- All materials except the particles pass a #30 screen and are V-blended with the particles for 5 min. Compression at 60 rpm with 1/2" flat bevel-edged tooling gives 4-7 kp hardness and 5.4-5.9 mm thickness.
- Batch 1,000,000 tablets, with layering in Wurster sub-lots (F7). Standard practice assumed: layering end point, particle assay and LOD, IPC limits. No disintegration test for a chewable (decision recorded).

| Template | Result | Step |
|---|---|---|
| F2 | FITS WITH SETTING | add ammonium hydroxide and re-measure until pH is 5.0 +/- limit (F2 with C1 each round) |
| T18 | FITS WITH SETTING | particle quantity from the in-process assay (T18 content from in-process result) |
| T18 | NEW SETTING | one intermediate carries two APIs: the quantity is set on one API's assay, and the other API's resulting content must be shown and checked; refused if it falls outside limits |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The example states the layering solution as "71.4 mg" and "28.6 mg". Particle contents of 6.43 % and 2.58 % on 1,000 g MCC are only possible if these are grams.

Counts: 82 rows; FITS 77, FITS WITH SETTING 4, NEW SETTING 1, GAP 0.

## F0188 salbutamol sulfate, osmotic (single-compartment), film-coated, wet granulation

Source: EP 2 478 919 A1 (= US 9,005,661 B2), Examples 2A and 2B, https://data.epo.org/publication-server/rest/v1.2/patents/EP2478919NWA1/document.pdf

- Core per 1,000 tablets: salbutamol sulfate 8 g, lactose 150, starch 60, mannitol 30, 6 % PVP K30 in 80 % ethanol q.s., Mg stearate 2 g (250 mg plus binder solids).
- Core process: API through 100 mesh, mixed, wet-massed, granulated through 24 mesh, dried at 40 °C, sized through 24 mesh. The theoretical tablet weight is calculated, then 9 mm shallow concave cores are compressed.
- Membrane: Example 2A uses cellulose acetate 30 g with PEG 4000 10 g in acetone 800 mL and water 200 mL, gain 9.0-10.5 %. Its release failed by 12 months. Used here is Example 2B formula 3: ethylcellulose N-100 30 g with PVP K30 15 g in ethanol 950 mL and water 50 mL, gain 15.2 %, cured 40 °C for 16 h.
- Finishing: a laser-drilled orifice of 0.3-0.7 mm on one face, then a film coat (10 g coating powder in 100 mL water) to 4.0-5.0 % gain.
- Release limits at 3, 6 and 8 h: 25-50 %, 45-85 % and more than 80 %. Formula 3 gave 40.8, 80.3 and 97.3 % at the start.
- Batch 500,000 tablets. Standard practice assumed: high-shear mixer in place of hand screening, a fixed binder quantity, orifice vision inspection, solvent coating safety, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | sulfate to salbutamol base with 2 drug molecules per salt unit (576.7 / (2 x 239.3) = 1.205), when the strength is stated as base |
| T26 | FITS WITH SETTING | 80 % ethanol made by % v/v with the alcohol-strength table (known, wave 1) |
| T8 | FITS WITH SETTING | PVP solids = 6 % of the binder solution actually used, which feeds the theoretical core weight (T8 "% of" a recorded weight) |
| T13 | FITS WITH SETTING | curing 16 h counted only while the tray temperature is in limits (T13 setting with F6 rounds) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability of cores (T5 loss mode) |

Note: The source lists "salbutamol sulfate 8 g" for 1,000 tablets and does not say whether 8 mg is the salt or the base. The marketed 8 mg osmotic tablet is 8 mg salbutamol (about 9.6 mg sulfate).

Counts: 90 rows; FITS 84, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0189 theophylline, ER matrix (hydroxyethylcellulose + cetostearyl alcohol), wet granulation then melt granulation, uncoated

Source: EP 0 344 960 A2 (Euroceltique), Example 3 (made by the Example 1 procedure), https://data.epo.org/publication-server/rest/v1.2/patents/EP0344960NWA2/document.pdf

- Per tablet: theophylline monohydrate 440.0 mg (= 400 mg anhydrous), hydroxyethylcellulose 25.0, povidone 5.0, cetostearyl alcohol 40.0, PEG 6000 50.0, Mg stearate 10.0, talc 10.0; 580.0 mg. Tablet water by Karl Fischer 6.5 % (the claims allow 3-10 %).
- Wet stage: drug and HEC are dry-mixed and granulated with povidone in water. The water is 2-30 times the polymer weight, preferably 4-20 times. The granules are fluid-bed dried, passed through 12 mesh, dried again, passed through 16 mesh and cooled.
- Melt stage: cetostearyl alcohol and PEG 6000 are melted together, added to the granules and granulated. The wax-coated granules are cooled, passed through 16 mesh, blended with Mg stearate and talc, and compressed.
- Batch 300,000 tablets (174 kg). Narrow therapeutic index. Standard practice assumed: melt temperature, jacket and impeller settings, IPC limits, dissolution S1-S3.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | monohydrate weighed for an anhydrous claim (198.2 / 180.2 = 1.100); no further water correction (C5 built in) |
| T8 | FITS WITH SETTING | granulating water as a multiple of the recorded HEC weight (T8 "% of" a recorded weight) |
| F2 | FITS WITH SETTING | dry until the Karl Fischer water is inside a two-sided window (3-10 %, tighter in-house), going to F3 if too dry (two-sided, known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The monohydrate alone brings 6.9 % water to the tablet (40 of 580 mg), but Example 3 tablets hold 6.5 % and Example 1 tablets 5.5 %. Part of the hydrate water is lost on drying, so the compression weight must come from the actual granule yield (T15), not from the 580 mg formula weight.

Counts: 80 rows; FITS 75, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0190 delamanid, IR tablet with a solid dispersion (close variant: 50 mg, spray-dried dispersion, not 25 mg dispersible by fluid bed)

Source: EP 1 906 926 B1 (Otsuka), Formulation Example 1 and Examples 1 and 6, https://data.epo.org/publication-server/rest/v1.2/patents/EP1906926NWB1/document.pdf. The wave 1 delamanid entry (F0091) used EP 4 563 147 A1; this is a different document.

- Per tablet: delamanid 50 mg, HPMC phthalate HP-50 150, lactose (SuperTab HP-01) 100, MCC (PH 301) 100, sodium starch glycolate 40, carmellose calcium 40, light anhydrous silicic acid 6, Mg stearate 6; 492 mg. No tablet process is given.
- Dispersion (Example 1): drug 1 part and HPMCP 3 parts dissolved in methylene chloride/ethanol 8:2 by weight (1 g + 3 g per 100 mL), spray dried, then vacuum dried at 60 °C for more than 12 h. Example 6 adds dl-alpha-tocopherol as an antioxidant.
- Batch 200,000 tablets. Light-protected handling. Standard practice assumed for all tablet steps (blend, lubricate, compress), residual solvent limits and IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | dispersion quantity from its measured drug content (T18 in-process content; known wave 1 safety rule) |
| T17 | FITS WITH SETTING | spray solution made up to volume, with solvent parts by weight converted through density (T17 % w/v to final volume) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 70 rows; FITS 66, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0191 avanafil, uncoated IR, direct compression, 100 mg

NO SOURCE. The SmPC and US label list only excipient names (mannitol, fumaric acid, hydroxypropyl cellulose, L-HPC, calcium carbonate, Mg stearate, iron oxide). WO 2015/176008 is an ODT and could not be opened. No example with a formula. Not counted.

## F0192 propiverine hydrochloride, sugar-coated IR, wet granulation, 15 mg

NO SOURCE. The SmPCs give lactose 63 mg, sucrose 49 mg, glucose 0.6 mg and the colour only. The propiverine patents found (EP 3 796 908 B1, US 2004/0258749) are extended-release and have no sugar-coated example. Not counted.

## F0193 sildenafil citrate, orodispersible, direct compression, 50 mg

NO SOURCE. The papers found are a 20 mg sublingual solid dispersion (Acta Pharm 2012), a 50 mg sublimation ODT (full text not reachable) and a DC ODT (Int J Pharm 2020, paywalled, no amounts seen). Searching stopped at the shared limit. Not counted.

## F0194 ascorbic acid, chewable, slugging, 500 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## F0195 levomefolate calcium, film-coated IR, direct compression, 15 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## F0196 magnesium bisglycinate, film-coated IR, direct compression, 100 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## F0197 magnesium citrate, effervescent, solvent wet granulation, 300 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## F0198 estriol, uncoated IR, fluid-bed granulation, 2 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## F0199 linzagolix choline, film-coated IR, direct compression, 100 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## F0200 medroxyprogesterone acetate, uncoated IR, single-pot granulation, 10 mg

NOT RESEARCHED (shared web-search limit reached). Not counted.

## Totals for F0181-F0200

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0181 | 66 | 63 | 3 | 0 | 0 |
| F0183 | 72 | 68 | 4 | 0 | 0 |
| F0185 | 58 | 54 | 4 | 0 | 0 |
| F0186 | 60 | 58 | 2 | 0 | 0 |
| F0187 | 82 | 77 | 4 | 1 | 0 |
| F0188 | 90 | 84 | 6 | 0 | 0 |
| F0189 | 80 | 75 | 5 | 0 | 0 |
| F0190 | 70 | 66 | 4 | 0 | 0 |
| **Total** | **578** | **545** | **32** | **1** | **0** |

Counted 8 formulations, 578 rows: FITS 545, FITS WITH SETTING 32, NEW SETTING 1, GAP 0.

- NO SOURCE (searched, nothing usable): 5 (F0182, F0184, F0191, F0192, F0193).
- NOT RESEARCHED (search limit; to redo): 7 (F0194, F0195, F0196, F0197, F0198, F0199, F0200).

New settings:
- T18 for an intermediate with two APIs (F0187). The layered particles carry phenylephrine and chlorphenamine in a fixed ratio. One quantity can be set on only one API's assay, so T18 must also compute the second API's resulting content and refuse the step if it is outside its limits, or say which API sets the quantity. Variant of T18.

Safety rules:
- Additions to the blend during compression (F0181). The source added lubricant (+0.25 %, +5 %, +1.5 %) and crospovidone (+5 %) to the blend left in the hopper to stop sticking. This dilutes the drug, so tablets kept at the old target weight are low by the added fraction (about 4.8 % for a 5 % addition). The master must refuse such an addition, or force a new target weight by T15 from the new blend mass under an F3 deviation.
- Two APIs in one intermediate (F0187). If the particle quantity is set on one API's assay, the other API's dose follows that API's own assay. When the two assays depart from the theoretical 2.5:1 ratio, one API drifts off target. The second API must be checked and the step refused when it is out of limits (the new setting above).
- Hydrate water lost on drying, with a narrow therapeutic index (F0189).
  - Theophylline monohydrate brings 6.9 % water to the tablet, but finished tablets hold 5.5-6.5 % (Examples 1 and 3), so part of the hydrate water is driven off.
  - Compressing to the 580 mg formula weight instead of the actual granule yield (T15) gives up to about 1.4 % more drug per tablet.
  - Leaving out the 1.100 hydrate factor gives about 9 % too little.
- Dose basis for ferric citrate (F0183). The strength is anhydride-equivalent (Karl Fischer corrected). Weighing 500 mg as-is gives 14.4 % less ferric citrate. Other markets state ferric citrate products by ferric iron content. This is covered by T12/T9 and C5 "as element" when the master names the basis (reminder).
- Salt basis for salbutamol (F0188). The source lists "salbutamol sulfate 8 g" per 1,000 tablets, but the marketed 8 mg osmotic tablet is 8 mg base (about 9.6 mg sulfate). Using the patent quantity for a base-labelled product underdoses by about 17 %. This is covered by T11 with 2 drug molecules per salt unit when the master states the basis (reminder).
- Spray-dried dispersion content (F0190): take it from the measured content, never from the 1:3 preparation ratio (known, wave 1; reminder).

Sources that contradict themselves:
- EP 2 594 277 A1 (F0183): the sieve and screen apertures are printed as "250 mm" and "1143 mm", which must be micrometres.
- EP 2 246 045 A1 (F0187):
  - Example 11 gives the layering drugs as 71.4 mg and 28.6 mg in 500 mL, but the stated particle contents (6.43 % and 2.58 % on 1,000 g MCC) need grams.
  - Table 2 lists "Spray Dried Phenylephrine HCl 5.00" without saying whether that is drug content or spray-dried mass (about 20 % drug).
  - Claim 7 names phenylephrine as an additional ingredient of the phenylephrine composition.
- Gohil et al., IJPSR 2011 (F0185):
  - The text gives 6 % and 12 % pregelatinised starch and 12 % crospovidone, but the table has 5 and 10 mg in a 120 mg tablet (4.2 % and 8.3 %).
  - Vanilla q.s. is listed on top of lines that already add up to 120 mg.
  - Hardness is reported in kg/cm2.
- EP 0 344 960 A2 (F0189): dissolution with the USP paddle is stated at "1000rpm".
- US 12,296,050 B2 (F0181): strengths are defined "based on the free base weight" of a quaternary ammonium, which has no free base. The 0.95 factor is the cation-to-chloride ratio (674.97 / 710.42).
