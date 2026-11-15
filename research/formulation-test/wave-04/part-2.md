# Wave 4, part 2 (F0321-F0340)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

## F0321 fenofibric acid, uncoated IR, direct compression (listed: roller compaction)

Source: US 7,569,612 B1 (Mutual Pharmaceutical), Example 1, Tables 1 and 2, https://eureka.patsnap.com/patent-US7569612B1 (full text page; Google Patents not reachable). Close variant: the strengths shown are 30-130 mg, and 105 mg is taken by proportion. The patent text gives no process, so a blend-and-compress process is assumed. Roller compaction, as listed, has no support in the source.

- % w/w, the same for all strengths: fenofibric acid 12.50, MCC (Avicel PH102) 78.33, copovidone (Plasdone S630) 5.00, crospovidone (XL10) 3.33, Mg stearate 0.83. For example, 50 mg is 50.0 / 313.3 / 20.0 / 13.3 / 3.3 = 400 mg, and 130 mg is 1040 mg.
- 105 mg by proportion: 840 mg tablet (105 / 657.97 / 42.0 / 27.97 / 6.97 mg; my arithmetic).
- Dissolution (from the source): 900 ml pH 6.8 phosphate, paddle 50 rpm.
- Batch 300,000 tablets (252 kg). Standard practice assumed for the whole process: de-lump through a screen, bin blend, add Mg stearate last, compress uncoated, plus all IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from the % w/w formula on a 252 kg batch (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 75 rows; FITS 72, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0322 irbesartan, uncoated IR, high-shear wet granulation (listed: roller compaction)

Source: EP 0 747 050 B1 (Sanofi / Bristol-Myers Squibb), Example 1, Tables 1 and 2 and paragraphs [0026]-[0035], https://data.epo.org/publication-server/rest/v1.2/patents/EP0747050NWB1/document.pdf. Close variant: wet granulation; the API, strength and uncoated tablet are as listed.

- Per 150 mg tablet (300 mg): intragranular irbesartan 150.00, lactose hydrous 30.75, pregelatinised starch 45.00, croscarmellose 7.50 (half of 15.00), poloxamer 188 9.00. Extragranular: MCC 45.00, croscarmellose 7.50, silica 2.25, Mg stearate 3.00.
- Intragranular powders are mixed, cone-milled and re-mixed. They are wet granulated with poloxamer dissolved in water at 25 % of the total solids, plus up to 25 % more water as needed (at most 50 % in all). Dry (tray or fluid bed) to LOD of 2 % or less, size to 1-3 mm, blend with silica, MCC and the rest of the croscarmellose, then Mg stearate, and compress.
- Batch 500,000 tablets (150 kg). Standard practice assumed: mixer settings, times, drying temperatures, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granulating water = 25 % of the total solids weight, then up to 25 % more as needed (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 107 rows; FITS 104, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0323 manidipine hydrochloride + delapril hydrochloride, film-coated IR, roller compaction, 10 + 30 mg

NO SOURCE: only an Italian application with no reachable examples, plus PK and dissolution-method papers; no manidipine + delapril formula with a process. Not counted.

## F0324 molsidomine, uncoated ER matrix, direct compression

Source: EP 4 045 016 B1 (Europharmaceuticals), Example 10 (Tableau 2) and paragraphs [0060]-[0068], in French, https://data.epo.org/publication-server/rest/v1.2/patents/EP4045016NWB1/document.pdf. Close variant: 16 mg once daily (listed 8 mg). The matrix is lipophilic (glyceryl behenate), not hydrophilic as listed.

- Per tablet: molsidomine 16.0 mg, calcium hydrogen phosphate dihydrate (Emcompress Premium) 57.0, MCC PH102 30.0, colloidal silica 0.5, glyceryl behenate (Compritol 888 ATO) 45.0, Mg stearate 1.5; 150 mg, 7 mm.
- Phosphate, MCC and silica are mixed 2 min and sieved at 800 um. Molsidomine and the sieved behenate are added and mixed 10 min, then Mg stearate is added and mixed 1 min. Compressed at three gauge forces (80/60/40 kg). Result at 80 kg: 147.78 +/- 1.42 mg, hardness 51 N.
- Dissolution: 500 ml pH 6.8 phosphate, paddle 50 rpm, against Coruno. Stability: N-nitrosomorpholine at most 15 ppm, met for 24 months.
- Batch 1,000,000 tablets (150 kg) under low-actinic light. Standard practice assumed: bin blender in place of the Turbula, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C1 | FITS WITH SETTING | compression force read on the press gauge in kg (round-3 unit kgf) |

Counts: 78 rows; FITS 75, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0325 moxonidine, film-coated IR, fluid-bed wet granulation, 0.2 mg

NO SOURCE: only SmPCs (the lactose amount, other excipients without amounts) and fragments of a moxonidine + HCTZ patent; no single-agent formula with a process. Not counted.

## F0326 nisoldipine, film-coated Geomatrix trilayer (listed: press-coated), wet granulation with fluid-bed drying

Source: EP 2 063 872 B1 (Jagotec), Example 4, Table 12 (17 mg column), with the process of Example 1, [0078]-[0081], https://data.epo.org/publication-server/rest/v1.2/patents/EP2063872NWB1/document.pdf. Close variant: the core sits between two barrier layers on a multilayer press; it is not a core-in-coat press-coated tablet.

- Active core 140.80 mg: nisoldipine 17.00, lactose monohydrate 52.44, Methocel K4M 30.80, Eudragit S100 10.70, Plasdone K29-32 5.35, SLS 21.25, Mg stearate 2.51, Aerosil 0.75.
- Barrier 04B4, 100 mg: Methocel E5 25.00, HPMC phthalate HP50 13.25, lactose 38.35, Compritol 888 ATO 18.40, Plasdone 3.50, Mg stearate 1.00, Aerosil 0.50. Barrier 01B4, 100 mg: the same, with Methocel E50 in place of E5.
- Totals: uncoated 340.80 mg; Opadry II yellow at a stated 5 % gain; Opacode black imprint 0.20 mg.
- Each layer is granulated in a high-shear mixer with water (the core with a povidone/SLS binder solution) and dried in a fluid bed to LOD below 2.5 %. It is then milled (oscillating mill), sandwich-blended with silica for 20 min, and blended 10 min with Mg stearate premixed with 5 % of the blend. All three layers are pressed on a HATA multilayer press, then film coated and imprinted.
- Batch 500,000 tablets under low-actinic light. Standard practice assumed: binder amounts, granulation times, layer-weight limits, press settings, coat solids %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | core layer weight within +/- % of 140.80 mg (C1 option) |
| C1 | FITS WITH SETTING | first barrier layer weight within +/- % of 100 mg (C1 option) |
| C1 | FITS WITH SETTING | second barrier layer weight within +/- % of 100 mg (C1 option) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | Opadry II quantity = 5 % of the recorded uncoated weight (T8 "% of" a recorded weight) |

Note: Table 12 gives Opadry 7.04 mg as "5.00 % wt gain", but 5 % of 340.80 mg is 17.04 mg; the other columns are right (11.52 mg on 230.40 mg). The coat is set here from the % (T8 on the recorded uncoated weight), not from the typed mg.

Counts: 198 rows; FITS 192, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0327 pentoxifylline, ER hydrophilic (guar gum) matrix, wet granulation by kneading

Source: Kale R, Bajaj A, Mathew D, Int J Pharm Pharm Sci 2010;2(1):122-130, Table 1 formulation D2 and Methods, https://innovareacademics.in/journal/ijpps/Vol2Issue1/312.pdf. Close variant (weak): a laboratory study. The selected matrix is guar gum (Dealca P-225), because the authors' HPMC tablets released too fast. Granulation is by hand kneading with PVP in IPA, not high-shear. The source tablets are uncoated, so an HPMC film coat at 3 % is assumed for the listed type.

- Per tablet (D2): pentoxifylline 400 mg, guar gum 172.25, Mg stearate 7.5, talc 15. The PVP binder amount is not given, and no filler is listed.
- Sieve #60, knead with PVP solution, wet screen #16, dry 1 h in air then 15 min at 60 C, size #36, and lubricate with talc and Mg stearate. Compressed with capsule-shaped punches to 5-6 kg hardness.
- Tests: granule LOD, PSD, bulk/tapped density, compressibility, angle of repose, flow rate; release in 1000 ml water, paddle 100 rpm, 10 h (D2: 26.8 % at 2 h, 74.1 % at 8 h).
- Batch 200,000 tablets. The binder is PVP 5 % w/v in IPA, q.s. (the strength the paper gives for its alginate series). The target tablet weight is set from the granule assay (see Note).

| Template | Result | Step |
|---|---|---|
| T6 | FITS WITH SETTING | angle of repose of the granules (round-3 T6 option) |
| T18 | FITS WITH SETTING | target tablet weight from the granule assay (T18 content from an in-process result; known wave-1 double-adjustment band) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 1 adds up to 594.75 mg for D2, but Table 2 reports 0.766 g, and no binder amount is given. So the target weight cannot be read from the paper: it is set from the granule's drug content (T18 in-process) and never typed from Table 2 (see safety rules).

Counts: 101 rows; FITS 97, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0328 quinidine sulfate, uncoated IR, high-shear wet granulation, 200 mg

NO SOURCE: only labels with excipient names and no quantities; no patent or paper with a quinidine sulfate IR tablet formula. Not counted.

## F0329 ramipril + felodipine, film-coated bilayer (IR + ER), wet granulation per layer (listed: direct compression)

Source: EP 0 726 766 B1 (AstraZeneca), Example 12 (5/5 mg) with the processes of Example 11 [0076]-[0077] and Example 9 [0061]-[0063], https://data.epo.org/publication-server/rest/v1.2/patents/EP0726766NWB1/document.pdf. Close variant: each layer is wet granulated (aqueous for ramipril, ethanolic for felodipine), not direct compressed.

- Ramipril IR layer: ramipril 5.0 mg, HPMC 0.9, lactose 23.5, maize starch 1500 46.8, MCC 23.5, SSF at most 1.0, water q.s.
- Felodipine ER layer: felodipine 5.0, HPC 10.0, HPMC 100.0, lactose 28.0, MCC 3.0, polyoxyl 40 hydrogenated castor oil 5.0, propyl gallate 0.06, sodium aluminium silicate 47.0, SSF at most 6, ethanol q.s.
- Coat: HPMC 7.5, PEG 1.9, TiO2 0.8, iron oxides about 0.3, paraffin about 0.1, water about 65.
- Ramipril is granulated with HPMC in water, dried, sized, mixed with lactose, starch and MCC, then SSF. For felodipine, the drug, castor oil and propyl gallate are dissolved in ethanol (Solution I), and the binder in ethanol (Solution II); both are added to the powders. Dried in an oven, milled (Frewitt), lubricated 3 min. Both granulates go to a two-station layer press, then the tablets are film coated.
- Batch 1,000,000 tablets, low RH for ramipril, low-actinic light for felodipine. Standard practice assumed: water/ethanol amounts, drying limits, layer-weight limits, coat solids. SSF is set at its stated upper limits (1.0 and 6 mg), giving layer targets of 100.7 and 204.06 mg.

| Template | Result | Step |
|---|---|---|
| T2 | FITS WITH SETTING | layer targets = sum of the lines with SSF fixed at its stated upper limit (<= 1.0, <= 6 mg) (T2; known wave-1 formula-range rule) |
| C1 | FITS WITH SETTING | ramipril layer weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | felodipine layer weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 163 rows; FITS 158, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0330 treprostinil diolamine, osmotic (cellulose acetate, laser-drilled), fluid-bed granulation (listed: direct compression)

Source: US 8,747,897 B2 (United Therapeutics), Example 5 (Table 4) with Examples 1, 2, 4 and 6 (Tables 2, 5 and 6), https://trea.com/information/osmotic-drug-delivery-system/patentgrant/40599109-83c4-4048-95e0-43978c61e281. Close variant: top-spray fluid-bed granulation with the drug in the binder solution. Only % w/w is given: no tablet weight or mg strength.

- Uncoated core, % w/w: treprostinil diolamine 0.65, xylitol 43.00, Maltrin M150 1.40 (in the sprays) + 49.20 (dry), SLS 5.00, Mg stearate 0.75.
- Coat, as % of the coated tablet: cellulose acetate 2.40, triethyl citrate 0.60, sprayed from CA 5 % / TEC 1.25 % in acetone.
- Process: screen 18 mesh; top-spray fluid bed with spray 1 (Maltrin + drug) then spray 2 (Maltrin), inlet 58-63 C, product 31-33 C; dry to moisture below 3 %; screen; V-blend with Mg stearate 3-5 min. Compress with 5/16 in standard concave tooling; pan coat (inlet 38 C, 30-50 g/min), cure, cool; laser-drill one orifice.
- Strength 1 mg as treprostinil (the dose in the PK study). Core about 195 mg = 1 x 1.269 / 0.0065 (my arithmetic, diolamine 495.6 / treprostinil 390.5). Batch 300,000 tablets (about 59 kg of cores). Standard practice assumed: orifice size, coat-level target, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from the % w/w formula (Table 4) on the batch weight (T8 % w/w mode) |
| C5 | FITS WITH SETTING | the 0.65 % line and the 1 mg strength on the same basis: 1 mg treprostinil = 1.27 mg diolamine, core about 195 mg (known wave-1 rule: % involving the API names its basis) |
| T18 | FITS WITH SETTING | compression weight from the granule assay (T18 in-process content; known wave-1 band) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | coat level 3 % of the coated tablet (round-3 T5 base option: final weight) |

Counts: 122 rows; FITS 116, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0331 vorapaxar sulfate (bisulfate), film-coated IR, high-shear granulation with fluid-bed drying

Source: EP 2 034 969 B1 (Schering) = WO 2008/005353, Table 1 formulation 1C and the process in [0044]-[0045], https://data.epo.org/publication-server/rest/v1.2/patents/EP2034969NWB1/document.pdf

- Core per tablet (1C): vorapaxar bisulfate 2.5 mg (= 2.08 mg vorapaxar, the marketed strength), lactose monohydrate impalpable 68.0, MCC 20.0, croscarmellose 6.0, povidone K-30 3.0, Mg stearate 0.5; 100.0 mg. The lactose takes up the dose differences between 1A-1C.
- Povidone is dissolved in water. API, lactose, MCC and croscarmellose are screened and blended in the granulator, then the solution is sprayed on (extra water allowed). Wet mix, screen into a fluid bed, and dry to moisture of 0.5-2.0 %. Screen into a tumble blender, add Mg stearate, compress, and coat with aqueous Opadry II at 2.5-10 % (preferably 3-6 %).
- Batch 1,000,000 tablets (100 kg). Standard practice assumed: times, temperatures, a 4 % coat, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | label basis named: 2.5 mg bisulfate = 2.08 mg vorapaxar; no second factor (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 104 rows; FITS 101, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0332 sarecycline hydrochloride, film-coated IR, high-shear wet granulation, 100 mg

NO SOURCE: only Seysara labels (salt amounts, excipient names); the formulation patents could not be reached. Not counted.

## F0333 glipizide, uncoated IR, MADG, 5 mg

NO SOURCE: no glipizide IR MADG formula found (only osmotic/ER and metformin FDC patents). Not counted.

## F0334 naltrexone + bupropion hydrochloride, film-coated trilayer (two SR layers and a lactose layer), direct compression per layer

Source: EP 2 089 005 B1 (Orexigen), Tables 1 and 3 and paragraphs [0047], [0093]-[0094], https://data.epo.org/publication-server/rest/v1.2/patents/EP2089005NWB1/document.pdf. Close variant: the naltrexone layer is 5 mg (listed 8 mg). The process is given only as "wet granulation, dry granulation or direct compression" for each layer, so direct compression as listed is used, with standard practice for all steps.

- Bupropion SR layer (90 mg column): bupropion HCl 90.0 mg, MCC PH101 153.3, HPC Klucel HXF 56.7, cysteine HCl 12.5, Mg stearate 2.5; 315.0 mg.
- Naltrexone SR layer ("SR-Fast", % w/w): naltrexone 6.667 (5 mg, so a 75 mg layer), HPMC K15M 10.000, "QBQ01 placebo granulation" 81.733, Cab-O-Sil 1.000, sodium edetate 0.1, Mg stearate 0.500.
- Intermediate layer: lactose or another fast-dissolving material; its weight is not given (plant choice). The placebo granulation is treated as an in-house intermediate with its own master (composition not given). Optional coat [0034]: an HPMC film coat at 3 % is assumed.
- Batch 300,000 tablets on a three-station layer press. Standard practice assumed: blend times, layer-weight limits, press settings.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | naltrexone layer quantities from the % w/w column (SR-Fast) on a 75 mg layer (T8 % w/w mode) |
| C5 | FITS WITH SETTING | naltrexone basis named (HCl or base; label basis, known wave 1) |
| C1 | FITS WITH SETTING | bupropion layer weight within +/- % of 315 mg (C1 option) |
| C1 | FITS WITH SETTING | intermediate lactose layer weight within +/- % of its target (C1 option) |
| C1 | FITS WITH SETTING | naltrexone layer weight within +/- % of 75 mg (C1 option) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source does not say whether "Naltrexone (5 mg)" is base or hydrochloride, nor what the placebo granulation contains. A real master needs both.

Counts: 130 rows; FITS 123, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0335 nateglinide, film-coated IR, high-shear granulation with fluid-bed drying

Source: US 6,559,188 B1 (Novartis), Examples 3 and 4 and the water range in the description, https://patents.google.com/patent/US6559188B1/en

- Batch of 108,000 tablets (Example 4): nateglinide 12.960 kg, lactose 30.564, MCC 15.336, povidone 2.592, croscarmellose 3.974, colloidal silica 1.382, Mg stearate 1.231, Opadry yellow 1.944 kg, water q.s.
- Per tablet (= Example 3): 120 / 283 / 142 / 24 mg; croscarmellose 24.0 intra + 12.8 extra; silica 12.8; Mg stearate 11.4. Core 630.0 mg, coat 18.0 mg.
- MCC, povidone, part of the croscarmellose, API and lactose are granulated with water in a Collette Gral, dried in a fluid bed and screened. Silica and the rest of the croscarmellose are screened and V-blended in, then Mg stearate; compress; aqueous Opadry coat. Up to three granulator/dryer loads per batch. No milling; the granule size limit is below 1 % at 710 um and above.
- Water: about 27 % by weight for the 120 mg tablet (description). Standard practice assumed: times, temperatures, LOD limit, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granulating water about 27 % by weight of the load's dry charge (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 120 rows; FITS 117, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0336 carbimazole, film-coated IR, direct compression, 5 mg

NO SOURCE: UK SmPCs give only the lactose amount; no carbimazole formula with a process. Not counted.

## F0337 hydrocortisone, IR mini-tablet 2.5 mg, 3 mm (listed: 10 mg functional-score tablet), wet granulation

Source: Madathilethu J et al., BMJ Paediatrics Open 2018;2:e000198, Table 1 and Methods (PMC5843003), https://europepmc.org/article/PMC/PMC5843003. Close variant: the paper's own product is a 2.5 mg mini-tablet, made to replace quartering the commercial quarter-scored 10 mg tablet. No formula is given for the 10 mg tablet. The paper granulates in a planetary mixer with overnight oven drying; fluid-bed drying is assumed here.

- % w/w: hydrocortisone 16.67, MCC PH101 22.40, lactose monohydrate 51.60, HPMC 3.00, croscarmellose 5.00, colloidal silica 0.33, Mg stearate 1.00. About 15 mg per mini-tablet for 2.5 mg.
- Blend 5 min (all but glidant and lubricant). Spray water at 0.48 ml per g over 15 min, dry (40 C in the paper), screen 1 mm, and keep the 125-355 um fraction. Blend glidant 5 min and lubricant 2 min. Compress with 3 mm flat tooling at 1-2 kN (140-280 MPa).
- Results: Carr 16 %, Hausner 1.19; mean weight 16.40 mg (CV 3.93 %), tensile strength 4.45 MPa, content 2.54 mg (AV 4.37), full release within 10 min.
- Batch 2,000,000 mini-tablets (30 kg) with hormone containment. Standard practice assumed: mixer settings, drying end point, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from the % w/w formula on a 30 kg batch (T8 % w/w mode) |
| T8 | FITS WITH SETTING | water 0.48 ml per g of powder charged (T8 "% of" a recorded weight, liquid by volume) |
| T18 | FITS WITH SETTING | compression weight from the 125-355 um fraction's assay (T18 in-process content; known wave-2 size-fraction rule) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The paper's quartering test on the commercial 10 mg tablet maps to C3 with limits as % of the mean of the quarters and to the round-3 per-unit loss on splitting. It is not counted, because that tablet's formula is unknown.

Counts: 101 rows; FITS 96, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0338 prednisolone sodium phosphate, soluble IR, slugging, 5 mg

NO SOURCE: the nearest candidate (US 8,637,076) is the Orapred ODT bead tablet, already in the owner's patents, not a soluble tablet. Not counted.

## F0339 dexlansoprazole, ODT of enteric-coated fine granules (MUPS), granules compressed

Source: US 9,241,910 B2 (Takeda), Production Examples 1-5 and Example 1, https://patents.google.com/patent/US9241910B2/en

- Fine granules per tablet: lactose-MCC spheres (Nonpareil 105T) 30 mg; drug layer: dexlansoprazole 30, MgCO3 10, L-HPC 5, HPMC 10 (85 mg). Intermediate layer: HPMC 7, L-HPC 5, talc 3, TiO2 3, mannitol 7 (110 mg). Enteric layer: Eudragit S100 77, talc 38.5, TEC 15.4 (240.9 mg). Overcoat: Eudragit FS30D 24.09 (dry), polysorbate 80 0.48, GMS 1.2, TEC 1.2 (267.87 mg).
- Outer powder: mannitol 414 g, L-HPC-33 60, MCC 60, crospovidone 30, granulated in a fluid bed with mannitol 24 g in 136 g water; 573 g obtained.
- Tablet: coated granules 54.0 g + outer powder 58.8 g + Mg stearate 1.2 g, giving 565.5 mg tablets with 30 mg drug (13 mm flat bevelled).
- Each layer is sprayed in a rotary fluid-bed coater from a liquid made larger than needed, and only a set part is applied (drug suspension 971 of 1110 g on 150 g spheres; intermediate 661 of 755.8 g on 400 g; enteric 2749 of 3142.6 g on 220 g; overcoat 116 of 508.04 g on 200 g). Each layer is then vacuum-dried 16 h at 40 C and sieved to 150-500 um.
- Lab scale in the source. Batch here: 300,000 tablets (about 170 kg) at the same ratios. Standard practice assumed: commercial coater settings, blend times, hardness and disintegration limits, acid-resistance test.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | drug layer: amount to apply = 971 g per 150 g spheres of the recorded charge (T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | drug layer: weight gain on the layer's own starting weight (v2 T5 setting) |
| T8 | FITS WITH SETTING | intermediate layer: amount to apply = 661 g per 400 g drug granules of the recorded charge (T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | intermediate layer: weight gain on the layer's own starting weight (v2 T5 setting) |
| T8 | FITS WITH SETTING | enteric layer: amount to apply = 2749 g per 220 g intermediate granules of the recorded charge (T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | enteric layer: weight gain on the layer's own starting weight (v2 T5 setting) |
| T18 | FITS WITH SETTING | FS30D weighed as dispersion from the lot's % solids for 24.09 mg dry polymer per tablet (T18; known wave-3 dry-polymer rule) |
| T8 | FITS WITH SETTING | FS30D overcoat: amount to apply = 116 g per 200 g enteric granules of the recorded charge (T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | FS30D overcoat: weight gain on the layer's own starting weight (v2 T5 setting) |
| T18 | FITS WITH SETTING | polymer-coated granule quantity per batch from the granules' assay (T18 in-process content; known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T14 | FITS WITH SETTING | content uniformity by individual results only (v2 T14 setting for pellet tablets) |

Counts: 210 rows; FITS 197, FITS WITH SETTING 13, NEW SETTING 0, GAP 0.

## F0340 famotidine, chewable IR, coated rotogranules then direct compression

Source: EP 0 538 034 B1 (McNeil-PPC), Example I and the table headed Example IX (called Example III in the text), https://data.epo.org/publication-server/rest/v1.2/patents/EP0538034NWB1/document.pdf

- Coated rotogranules per tablet: famotidine 10, HPMC E5 4.62, lactose 62.31, cellulose acetate 6.65, HPC 2.85; 86.43 mg.
- Tablet: coated particles 86.43, mannitol 259.33, MCC PH-101 30, aspartame 2.5, Prosweet 1.23, Mg stearate 3.85, flavour 1.54, colour 0.12; 385 mg; batch column 77.00 kg (200,000 tablets).
- Rotogranulation of famotidine 5.2 kg + HPMC 2.4 + lactose 32.4 kg with about 14 kg water at rotor 400-500 rpm, then drying at 250 rpm to a product temperature of 30-35 C. Wurster coating with a 10 % w/w solution of CA 398-10 : HPC 70:30 in acetone/methanol 80/20, 11 % polymer applied, product about 30 C. The tablet ingredients are sieved, dry blended and compressed.
- One 40 kg rotogranule batch serves about 2.6 tablet batches. Standard practice assumed: blend times, hardness limits, residual-solvent limits; no disintegration test for a chewable (decision recorded).

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | water about 14 kg per 40 kg charge (35 %; T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | polymer applied = 11 % of the coated granules (round-3 T5 base option: final weight) |
| T18 | FITS WITH SETTING | coated-granule quantity per tablet batch from its famotidine assay (T18 in-process content; known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 129 rows; FITS 124, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## Part summary (F0321-F0340)

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0321 | 75 | 72 | 3 | 0 | 0 |
| F0322 | 107 | 104 | 3 | 0 | 0 |
| F0324 | 78 | 75 | 3 | 0 | 0 |
| F0326 | 198 | 192 | 6 | 0 | 0 |
| F0327 | 101 | 97 | 4 | 0 | 0 |
| F0329 | 163 | 158 | 5 | 0 | 0 |
| F0330 | 122 | 116 | 6 | 0 | 0 |
| F0331 | 104 | 101 | 3 | 0 | 0 |
| F0334 | 130 | 123 | 7 | 0 | 0 |
| F0335 | 120 | 117 | 3 | 0 | 0 |
| F0337 | 101 | 96 | 5 | 0 | 0 |
| F0339 | 210 | 197 | 13 | 0 | 0 |
| F0340 | 129 | 124 | 5 | 0 | 0 |
| **Total (13 counted)** | **1638** | **1572** | **66** | **0** | **0** |

Counted 13 formulations, 1,638 rows: FITS 1,572, FITS WITH SETTING 66, NEW SETTING 0, GAP 0. NO SOURCE 7 (F0323, F0325, F0328, F0332, F0333, F0336, F0338).

New settings: none. Every non-FITS row uses an existing setting or a KNOWN finding (named in the row).

No GAP.

Safety rules (new):
- Salt name that does not fix the stoichiometry (F0331, vorapaxar). The list says "sulfate"; the source and the marketed salt are the bisulfate (hydrogen sulfate, 1 drug molecule per salt unit, factor 590.7 / 492.6 = 1.199). If "sulfate" is read as the 2:1 sulfate (2 drug molecules per salt unit, factor about 1.100), each tablet gets 2.29 mg of salt in place of 2.50 mg, about 8 % too little drug. T11 already has the "drug molecules per salt unit" setting. The master must take that number and the salt's molecular weight from the lot's material record, never infer them from the salt name, and refuse the step when the record does not state them.
- Liquid made in excess on purpose, with only a set part applied (F0339, dexlansoprazole). Every layering liquid is made larger than the amount sprayed: 971 of 1,110 g of drug suspension, 2,749 of 3,142.6 g of enteric solution.
  - If the whole drug suspension is sprayed, the spheres take 180 g of drug in place of 157.5 g. Drug per gram of granules rises from 35.9 % to 37.5 %, and that carries through the later layers, which are dosed per gram of charge. Tablets made with the formula's granule quantity would then hold about 4.5 % too much drug.
  - If the whole enteric solution is sprayed, the enteric coat is about 14 % thicker, which changes release.
  - What the master must do: state the amount to apply for each charge (T8), stop when that net weight is reached (T1), and record the rest of the liquid in the API reconciliation (T4) as made but not used. A step that goes over the amount is refused under F3.
  - This is the reverse of the known wave-2 rule (F0163: stopping early under-doses).

Reminders of known rules, with their size here:
- A % line that holds the API must name its basis (F0330, known wave 1). If 0.65 % treprostinil diolamine is read as treprostinil, the core is about 154 mg in place of 195 mg and holds 0.79 mg treprostinil in place of 1 mg (-21 %).
- Label basis (F0331, F0334, known wave 1). Vorapaxar 2.5 mg bisulfate is the 2.08 mg strength: a second T11 factor on the 2.5 mg line gives 3.0 mg (+20 %). The source does not say whether "naltrexone 5 mg" is base or hydrochloride; the two differ by about 11 % (377.9 / 341.4).
- Stated weight against the sum of the lines (F0327, known wave 1/2). Pentoxifylline D2 lines add up to 594.75 mg, but the stated weight is 0.766 g. Compressing that blend to 766 mg gives about 515 mg of drug per tablet (+29 %). The target weight comes from the granule assay, within the known double-adjustment band.
- Granules cut to a size fraction (F0337, known wave 2 retries). The 125-355 um fraction holds about 15.5 % hydrocortisone (2.54 mg at 16.40 mg) against 16.67 % in the formula. Compressing to the formula weight of 15.0 mg would give about 2.32 mg (-7 %). The tablet weight comes from the fraction's own assay.
- Coat % basis (F0340, known wave 3 pattern). The 11 % polymer fits 11 % of the coated granules. Read as gain on the uncoated granules, 86.43 mg of coated granules would hold about 10.12 mg (+1.2 %). The coated-granule quantity comes from its assay (T18).
- An enteric coat stated as 5 % gain that is really 15.6 % (F0326 Formulation C, not the strength used here; known wave 3 coat-amount pattern). Coating to 5 % would apply about a third of the enteric polymer.
- API dissolved or suspended in the granulating or spray liquid (F0329 felodipine Solution I, F0330 spray solution 1, F0339 drug suspension; known wave 2). The whole liquid is added (or exactly the set part, see the new rule above), the vessel is rinsed, and the stirring is confirmed.
- Excipient given only as an upper limit (F0329 SSF "at most 1.0 / at most 6 mg", known wave-1 formula-range rule). The master fixes the target and the layer weights are the T2 sum of those targets.
- Product-specific strength (F0326): the Geomatrix 17 mg tablet matches the exposure of the older 20 mg nisoldipine tablet (about 16 % less drug for the same AUC). A master or a layer formula must never be copied across these two products at the "same" strength. This is the same kind of risk as the known wave-3 crystal-form rule (F0260).

Sources that contradict themselves:
- US 7,569,612 B1 (F0321): minor. The 50 mg column adds up to 399.9 mg against a stated 400.0 mg, and the 130 mg column to 1040.1 mg against 1040 mg.
- EP 4 045 016 B1 (F0324): the MCC grades are printed as "100mm" and "180mm" (micrometres meant).
- EP 2 063 872 B1 (F0326):
  - Table 12 (17 mg) gives Opadry 7.04 mg as a 5 % gain on 340.80 mg; 5 % is 17.04 mg.
  - Formulation C's enteric coat is said to be a 5 % gain, but Table 3 has 88 mg on a 563 mg tablet (15.6 %).
  - The barrier-layer process names Methocel E4M, which is in Formulation B but not in Formulation A (E5, E50LV).
  - [0095] points to "Tables 10-13" for what is one Table 12.
  - Povidone and SLS are put in both the dry mix and the binder solution, with no split given.
- Kale et al., IJPPS 2010 (F0327):
  - Table 1 lines (D2: 594.75 mg) do not match the Table 2 weights (0.766 g), and no filler or binder amount is given.
  - The polymer % ranges in the text (guar 23-30 %) do not match Table 1 (about 26-37 % of the listed solids).
  - Table 2 rows D3, D4 and D5 are identical except their 8 h release.
  - The HPMC series is said to use ethylcellulose in ethanol as binder, which is not in Table 1.
  - Friability is reported as 0.0026-0.0365 %, which looks like a fraction rather than a percentage.
- EP 0 726 766 B1 (F0329):
  - Example 11 makes the felodipine granulate "according to Example 8", which holds only a dissolution table; the method is in Example 9.
  - Example 9's binder is PVP 24 mg, while Examples 11 and 12 list HPC 10 mg and no PVP.
  - SSF is given only as upper limits.
- US 8,747,897 B2 (F0330):
  - The Table 1 columns add up to 99.235 % and 99.25 %, and the Table 3 enhancer column to 97.0 %: the meglumine named in Example 1's title is missing.
  - Example 3 names PEG 3350 as plasticiser, but Tables 4 and 5 use triethyl citrate.
  - Two examples point to the wrong example: "drilled as in Example 2" means Example 4, and "core tablets from Example 1" means Example 2.
- EP 2 034 969 B1 (F0331): the numbered process cross-references are wrong. Step 9 compresses "from Step 9 into a pan coater", and step 11 coats with the suspension "from Step 11".
- EP 2 089 005 B1 (F0334):
  - The Table 3 "SR-Medium" column adds up to 105.667 %, because its Mg stearate is 6.667 % against 0.5 % in the others.
  - The "QBQ01 placebo granulation" is never defined.
  - The Table 2 zonisamide 60 mg column adds up to 318 mg against 350 mg for the other two, with Klucel at 3 mg against 110 and 35 mg.
- US 6,559,188 B1 (F0335):
  - The "more preferable" water range (22-37 %) reaches below the "preferable" range (25-40 %).
  - Example 8 gives the granulating water as "5/7 L" (about 5.7 L fits 27 %).
- Madathilethu et al., BMJ Paediatr Open 2018 (F0337):
  - At the mean weight of 16.40 mg, the 16.67 % formula gives 2.73 mg, but the content found is 2.54 mg (reported as 101.7 % of target).
  - Content CV (1.72 %) is below weight CV (3.93 %), although the paper shows content following weight.
- US 9,241,910 B2 (F0339):
  - The intermediate-layer solution has TiO2 at 2 parts per 7 of HPMC (11.3 g per 39.5 g), but the composition lists 3 mg per 7 mg.
  - The applied drug suspension puts 157.5 g of drug on 150 g of spheres, against 1:1 in the composition, with no spray loss stated.
  - Example 1 compresses at "20 kN/cm2" on a 13 mm punch, while later examples give "20 kN" on the same punch (a 1.33 times difference).
- EP 0 538 034 B1 (F0340):
  - "Total coat" is defined against the uncoated rotogranule, but the table's 11 % is of the coated granules (9.50 of 86.43 mg; 12.35 % of the uncoated granules).
  - The formula table is headed Example IX, but the text calls it Example III.
  - Claim 2 gives the polymer as "from 5 to 2 percent".
