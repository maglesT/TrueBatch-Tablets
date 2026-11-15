# Wave 5, part 3 (F0441-F0460)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.
Sources were downloaded first by the source finder and mapped offline.

## F0441 pinaverium bromide, film-coated IR, fluid-bed granulation, 100 mg

NO SOURCE: product monographs list the core and coat excipients without amounts or process; no patent with a formula was found. Not counted.

## F0442 vonoprazan fumarate, orally disintegrating tablet of coated particles, 10 mg

Source: EP 3 651 735 B1 (Takeda), Examples 15, 19, 20 and 21 and Table 1-5, https://data.epo.org/publication-server/rest/v1.2/patents/EP3651735NWB1/document.pdf. Close variant: the ODT is compressed from drug-layered, acid-coated and polymer-coated particles plus outer-layer granules (listed as a plain direct-compression ODT). The final step is direct compression.

- Per 10 mg tablet (Example 20, 220 mg, 8.0 mm): coated particles 89.5 mg, made of lactose/MCC spheres 38.5, vonoprazan fumarate 13.36 (= 10 mg base), HPMC 1.64, monosodium fumarate 20, succinic acid 10, Eudragit RLPO 0.6, then Eudragit RSPO 2.4, RLPO 0.6, triacetin 0.3, talc 1.5, titanium oxide 0.3, and silica 0.3.
- Also per tablet: outer-layer granules 101.3 mg (mannitol 71.3, citric anhydride 2.5, MCC 10, crospovidone 10, L-HPC 7.5); MCC 11, crospovidone 11, Neusilin 0.6, acesulfame K 2, aspartame 2, peppermint 0.4, sodium stearyl fumarate 2.2. Total 220 mg.
- Particles (Example 21, kg scale, Wurster): drug layer from an API dispersion in HPMC solution, sieved 300-132 um; organic-acid coat from water/ethanol, sieved 355-132 um; water-insoluble polymer coat from ethanol/water, then a silica coat; sieved. Outer granules made by fluid-bed spray granulation.
- [0148]: the particle quantity per tablet is set from the particles' HPLC content (as free base). Example 20 compresses the 20 mg / 440 mg blend of Example 19 at 220 mg.
- Batch 500,000 tablets (110 kg; about 45 kg coated particles, the Example 21 scale). Standard practice assumed: bin blending instead of the lab hand mixing, LOD limits, IPC limits, ODT disintegration limit.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | coated particles per batch from their HPLC content, not from the coating recipe (T18 content from an in-process result; known, wave 3 cut fraction) |
| C5 | FITS WITH SETTING | the particle content is reported as free base, so no T11 factor on the particle quantity (C5 extended, as base) |
| T8 | FITS WITH SETTING | API per tablet = tablet weight x the blend's API share, checked against 10 mg before compression; the same blend makes 20 mg at 440 mg (known, wave 3 one blend for several strengths) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 1-5 gives the Example 19/20 outer granules as crospovidone 20 (10) and L-HPC 15 (7.5) mg. The Example 19 recipe gives L-HPC 20 (10) and crospovidone 15 (7.5) mg (48 g L-HPC; 24 g plus 40 % of 30 g crospovidone). The two lines are swapped and the total is unchanged. The master takes quantities from the recipe.

Counts: 261 rows; FITS 256, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0443 avatrombopag maleate, film-coated IR, direct compression, 20 mg

Source: EP 4 599 824 A1 (Sanovel), Example 1 and process [0037]/[0039], https://data.epo.org/publication-server/rest/v1.2/patents/EP4599824NWA1/document.pdf

- % of the coated tablet: avatrombopag maleate (form A or B) 11.3, MCC 20, lactose anhydrous 58.1, croscarmellose sodium 2.9, colloidal silica 2.9, Mg stearate 1 (core 96.2), Opadry yellow 3.8.
- No tablet weight or strength is stated. Anchored on 20 mg base = 23.57 mg maleate (by molecular weight), the coated tablet is 208.6 mg and the core 200.7 mg (derived). Per tablet: MCC 41.72, lactose 121.20, croscarmellose 6.05, silica 6.05, Mg stearate 2.09, Opadry 7.93 mg.
- Process: mix fillers, disintegrant, glidant and API, sieve, add Mg stearate and mix, compress, film-coat.
- Batch 500,000 tablets (100.3 kg core). Standard practice assumed: blend times, sieve size, coat solids, all IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | core quantities as % of the coated tablet weight (T8 "% of" a named weight; known, wave 3 % of coated tablet) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | coat 3.8 % of the coated tablet = 3.95 % gain on the core (T5 base option: final weight) |

Counts: 107 rows; FITS 103, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0444 centaury + lovage + rosemary, sugar-coated IR, 18 + 18 + 18 mg

NO SOURCE: the Fachinformation quantifies only the three powdered herbs; the excipients are listed without amounts and there is no process. Not counted.

## F0445 Ferrum phosphoricum D12 trituration, uncoated tablet, 250 mg trituration

NO SOURCE: the leaflets give only 250 mg trituration (lactose) per tablet. The calcium behenate and potato starch amounts and the tablet weight are not stated, and the process is given only by reference to the HAB. A tablet record would need invented excipient numbers (a weak variant per the source finder). Not counted.

## F0446 Gasex (Terminalia chebula + 8 herbs), uncoated, fluid-bed granulation, 200 mg

NO SOURCE: no formula or process found; retailer pages give conflicting herb lists. Not counted.

## F0447 gentian + cowslip + sorrel + elder + verbena, sugar-coated IR

NO SOURCE: no quantitative formula or dragee process found (the sister product F0444 has a qualitative Fachinformation only). Not counted.

## F0448 Gymnema sylvestre leaf dry extract, film-coated, roller compaction, 400 mg

NO SOURCE: the only candidate is an uncoated direct-compression tablet of leaf powder (not dry extract, not compacted, not coated). Not counted.

## F0449 St John's wort (Hypericum) dry extract, film-coated IR, 300 mg extract

Source: EP 1 481 211 B1 (J. Rettenmaier & Soehne), Examples 3 and 7, https://data.epo.org/publication-server/rest/v1.2/patents/EP1481211NWB1/document.pdf. For the film coat and light protection: EP 1 349 543 B1 (Steigerwald), [0016]-[0018], https://data.epo.org/publication-server/rest/v1.2/patents/EP1349543NWB1/document.pdf. Close variant: the extract is co-spray-dried onto silicified MCC and the blend is directly compressed (listed roller compaction). EP 1 349 543 describes the compaction route (900 mg extract in a 1,090 mg core), but most of its excipients are given only as ranges or not at all.

- Agglomerate (Example 3, production scale): liquid extract (ethanol 60 % m/m) 216.0 kg at 48.7 % dry substance (105.2 kg extract) spray-dried with 45.1 kg Prosolv SMCC 90 fed dry into the chamber with recycled fines; yield 138.8 kg, 70 % extract / 30 % SMCC.
- Tablet blend (Example 7, % w/w): agglomerate 76.67, Prosolv SMCC 50 22.83, Mg stearate 0.50 (V-blender). For 300 mg extract: agglomerate 428.6, SMCC 50 127.6, Mg stearate 2.8; core 559.0 mg (derived; the source gives no tablet weight).
- Coat (EP 1 349 543): pre-coat then colour coat. Amounts are not given; standard practice assumed (HPMC pre-coat, opaque colour coat with titanium dioxide and iron oxide for light protection).
- Batch 320,000 tablets (178.9 kg blend; 137.1 kg agglomerate, about one spray-drying run). Standard practice assumed: spray-dryer settings, LOD and residual ethanol limits, hardness, coat amounts, marker limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | liquid extract quantity from the lot's dry-substance content (48.7 %; T18 % solids) |
| T18 | FITS WITH SETTING | agglomerate per batch from its measured extract content, not from the 70 % recipe (T18 content from an in-process result) |
| T8 | FITS WITH SETTING | Prosolv SMCC 50 from % w/w of the batch (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | pre-coat and colour-coat gains, each on its own starting weight (T5 per-layer setting) |

Counts: 121 rows; FITS 115, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0450 Rhodiola rosea root dry extract, orally disintegrating tablet, direct compression, 100 mg extract

Source: Brante et al., Development of Orally Disintegrating Tablets of Standardized Rhodiola rosea Extract, Pharmaceuticals (Basel) 2025;18:1328, Tables 2, 4 and 5 (formulation R14), https://europepmc.org/article/PMC/PMC12472554. Close variant: an uncoated ODT by direct compression with 100 mg extract (listed: film-coated, fluid-bed granulation, 200 mg); lab scale.

- Per tablet (R14, 500 mg, 11 mm): standardised dry extract (DER 3:1; 30.2 mg/g rosavin, 17.0 mg/g salidroside) 100 (20 %), dextrose 372.5 (74.5 %), citric acid 10 (2 %), croscarmellose sodium 5 (1 %), talc 10 (2 %), Mg stearate 2.5 (0.5 %).
- The extract was standardised to 3.0 % rosavin by blending extract batches, ground and sieved below 1 mm, blended, and compressed at 150 MPa.
- Reported results: angle of repose 37 deg, Hausner 1.21, Carr 17.5 %, mass 499.2 mg, thickness 5.13 mm, hardness 73 N, friability 0.17 %, disintegration about 2 min, AV by mass variation 11.25, rosavin 3.03 and salidroside 1.57 mg per tablet.
- Batch 400,000 tablets (200 kg). Standard practice assumed: plant blending and press, RH limits for dextrose, marker limits, packaging.

| Template | Result | Step |
|---|---|---|
| T26 | NEW SETTING | extract lots mixed to 3.0 % rosavin: the resulting salidroside of the mix (minimum 1 %) must be shown and checked, and the step refused if it is out of limits (variant of T26) |
| T6 | FITS WITH SETTING | angle of repose (round-3 T6 option) |
| T6 | FITS WITH SETTING | compaction pressure = force / punch face area, with the area from the tooling record (inputs from the equipment record) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T14 | FITS WITH SETTING | acceptance value by mass variation (T14 weight-variation option; uncoated) |

Note: the article says no active compounds were lost in tableting, but 100 mg of extract at 17.0 mg/g should give 1.70 mg salidroside against 1.57 mg found (92 %). Rosavin matches (3.02 against 3.03 mg).

Counts: 98 rows; FITS 92, FITS WITH SETTING 5, NEW SETTING 1, GAP 0.

## F0451 iguratimod, film-coated IR, wet granulation, 25 mg

Source: US 9,421,186 B2 (Toyama Chemical), Example 1 [0106], https://eureka.patsnap.com/patent-US9421186B2. Close variant: aqueous kneading in a mortar (lab); uncoated in the example (listed: high-shear granulation, film-coated).

- Per 100 tablets: iguratimod 2.5 g, MCC PH-101 15.9, carmellose calcium 0.7 and HPC-L 0.2 (intragranular); extragranular carmellose calcium 0.7, Mg stearate 0.04 g. Per tablet 25 mg API in 200.4 mg (stated 200 mg), 8.0 mm round.
- Knead with water, sieve 20 mesh, dry at 40 C, sieve 16 mesh, blend with the extragranular disintegrant and Mg stearate, compress on a rotary press.
- Batch 500,000 tablets (100.2 kg core). Standard practice assumed: high-shear granulator, fluid-bed drying to an LOD limit, water quantity, an HPMC film coat at about 3 %, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 115 rows; FITS 113, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0452 sulfasalazine, enteric film-coated, fluid-bed granulation, 500 mg

NO SOURCE: labels give the excipients (cellacefate enteric coat, povidone, starch) without amounts; no patent or article with a formula and process was found. Not counted.

## F0453 deutetrabenazine, film-coated IR, high-shear granulation with fluid-bed drying, 6 mg

Source: EP 4 345 100 A2 (Auspex), Example 5 (Table 5, [0319]) for the core; coat as in Examples 6-8 ([0320]-[0321]), https://data.epo.org/publication-server/rest/v1.2/patents/EP4345100NWA2/document.pdf. Close variant: 6 mg (listed 12 mg); the IR example is uncoated, so the same patent's Opadry II coat is used; granulated in a high-shear mixer and dried in a fluid bed.

- Per tablet: deutetrabenazine (milled) 6.0, mannitol powder 75.0, MCC 25.0, sodium starch glycolate 2.5, PVP K29/32 6.0, polysorbate 80 1.0 (intragranular); Mannogem EZ 5.8, sodium starch glycolate 2.5, Mg stearate 1.2; 125.0 mg.
- Dry mix 5 min, granulate with water to end point, wet screen, fluid-bed dry at 60 C to the target LOD, #20 screen and mill oversize, V-blend 15 min, Mg stearate (#30) 3 min, compress to 125 mg.
- Coat: Opadry II 85F white at 20 % solids to a theoretical 3 % gain (3.75 mg).
- Batch 1,000,000 tablets (125 kg core). Standard practice assumed: LOD limit (not given), water amount, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 125 rows; FITS 123, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0454 fingolimod hydrochloride, orally disintegrating tablet, direct compression, 0.5 mg

Source: EP 1 923 054 A1 (Novartis), Example 1 [0072]-[0073] and [0031]-[0037], https://data.epo.org/publication-server/rest/v1.2/patents/EP1923054NWA1/document.pdf. Close variant: 0.5 mg (listed 0.25 mg; no 0.25 mg example in any source).

- Per tablet (7 mm round, 127 mg): fingolimod HCl 0.56 (= 0.5 mg base by molecular weight; the source does not state the base), directly compressible mannitol 82.54, calcium silicate 36.00, crospovidone 7.00, Mg stearate 0.90.
- Targets: disintegration below 60 s (about 30 s preferred); tensile strength 30-80 N/cm2; silicate : disintegrant 2:1 to 10:1 (here 5.1:1).
- Process: blend all ingredients and compress (the only process given).
- Batch 600,000 tablets (76.2 kg; 336 g API) in a contained suite. Standard practice assumed: geometric dilution of the 0.44 % API, blend times, BU sampling, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 91 rows; FITS 89, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0455 levodopa + carbidopa, dispersible mini-tablet, 5 + 1.25 mg

NO SOURCE: the product article and PK studies give no composition; no patent was identified. Not counted.

## F0456 primidone, scored IR, fluid-bed granulation, 250 mg

NO SOURCE: SmPCs and the US label list excipients without amounts or process. Not counted.

## F0457 pyridostigmine bromide, sugar-coated IR, 60 mg

NO SOURCE: only extended-release patents (different release and tablet type) and labels (one lactose amount) were found; no formula for a sugar-coated IR tablet. Not counted.

## F0458 selegiline hydrochloride, uncoated IR, ethanol wet granulation, 5 mg

Source: EP 0 739 628 A2 (Orion), Table 2 and the preparation text, https://data.epo.org/publication-server/rest/v1.2/patents/EP0739628NWA2/document.pdf. Close variant: ethanol granulation (listed roller compaction); same strength, uncoated.

- Per tablet: selegiline HCl 5.0, lactose 57.0, povidone K30 7.0, ethanol q.s. (removed), MCC 29.0, glyceryl behenate (Compritol) 5.0; 103 mg (sum; not stated), 6 mm punches.
- Sieve and mix API, lactose and povidone, granulate with ethanol, dry, sieve, add MCC and lubricant, compress.
- Mg stearate is the incompatibility the patent removes: its stressed content fell from 95 to 88 % (1:1 mix, 1 week at 60 C / 75 % RH), and conventional tablets lost more than 14-17 %, against less than 3 % with Compritol.
- Batch 1,000,000 tablets (103 kg). Standard practice assumed: drying temperature, residual ethanol and LOD limits, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 97 rows; FITS 95, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0459 siponimod hemifumarate, film-coated IR, direct compression with pre-blending, 2 mg

Source: EP 4 074 312 B1 (Novartis), Example 1, Table 5 and [0139]-[0142], https://data.epo.org/publication-server/rest/v1.2/patents/EP4074312NWB1/document.pdf. Close variant: direct compression with a pre-blend (listed: fluid-bed wet granulation); same strength and coat.

- Per tablet: siponimod hemifumarate (X90 18 um) 2.224 (salt factor 1.112, 2 siponimod per fumaric acid), spray-dried lactose 6.025 (step 1) + 54.226 (step 3), MCC 12.750, crospovidone XL 5.100, Aerosil 200 0.425, glyceryl behenate 1.7 (step 1) + 2.55 (step 6); core 85.000 mg; coating premix 4.6; 89.600 mg.
- Lactose balances the API across 0.25-2 mg (API + lactose = 62.475 mg in every strength). Step-1 lactose is 10 % of the total lactose.
- Pre-blend API with glyceryl behenate and part of the lactose (10 min, 10 rpm), screen 800 um, add the rest (5 min), oscillating screen 800 um, mix 25 min, add sieved glyceryl behenate (10 min), compress at 6 kN, de-dust, coat in a perforated pan.
- Batch 1,000,000 tablets (85 kg core) in a contained suite. Standard practice assumed: coat suspension solids, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | hemifumarate with 2 siponimod per salt unit, factor 1.112 (T11 molecules-per-salt-unit setting) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | coat 4.6 mg = 5.41 % gain on the core; the source's 5.134 % is of the coated tablet (T5 base option: final weight) |

Counts: 119 rows; FITS 115, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0460 teriflunomide, film-coated IR, wet granulation with fluid-bed drying, 14 mg

Source: EP 4 023 215 A1 (Sanovel), Example 2 [0048] and process [0050], https://data.epo.org/publication-server/rest/v1.2/patents/EP4023215NWA1/document.pdf. Mixing times from the sister application EP 4 382 097 A1 [0052], https://data.epo.org/publication-server/rest/v1.2/patents/EP4382097NWA1/document.pdf. Close variant: aqueous granulation (listed direct compression).

- % of the coated tablet: teriflunomide 9.0, lactose monohydrate 30.6, corn starch 27.7, HPC 2.25, MCC 13.5 (half intra, half extra), sodium starch glycolate 9.67 (half / half), talc 3.5, Mg stearate 0.3, film coating agents (HPMC, titanium dioxide, macrogol, indigo carmine lake) 3.22.
- Anchored on 14 mg: coated tablet 155.6 mg (derived); lactose 47.6, starch 43.09, HPC 3.50, MCC 21.0, SSG 15.04, talc 5.44, Mg stearate 0.47, coat 5.01 mg.
- Mix API, lactose, starch, HPC and half the MCC and SSG, granulate with water, dry in a fluid bed at 45 C, sieve, add talc and the rest of the MCC and SSG (800 um) and mix 15 min, add Mg stearate and mix 3 min, compress, film-coat.
- Batch 700,000 tablets (about 105 kg core) in a contained suite. Standard practice assumed: water quantity, LOD limit, coat solids, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % of the coated tablet weight, anchored on 14 mg API (T8 "% of" a named weight; known, wave 3, and the wave-4 anchor rule) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | coat 3.22 % of the coated tablet = 3.33 % gain on the core (T5 base option: final weight) |

Note: the Example 2 percentages add up to 99.74 %, not the stated 100 % (Example 3 too; EP 4 382 097 gives 99.73 %). Anchored on 14 mg, the lines add up to 155.15 mg against 155.56 mg. The master names the balance filler (lactose, 48.0 mg) and takes the target weight as the T2 sum.

Counts: 132 rows; FITS 128, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## Totals for F0441-F0460

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0442 | 261 | 256 | 5 | 0 | 0 |
| F0443 | 107 | 103 | 4 | 0 | 0 |
| F0449 | 121 | 115 | 6 | 0 | 0 |
| F0450 | 98 | 92 | 5 | 1 | 0 |
| F0451 | 115 | 113 | 2 | 0 | 0 |
| F0453 | 125 | 123 | 2 | 0 | 0 |
| F0454 | 91 | 89 | 2 | 0 | 0 |
| F0458 | 97 | 95 | 2 | 0 | 0 |
| F0459 | 119 | 115 | 4 | 0 | 0 |
| F0460 | 132 | 128 | 4 | 0 | 0 |
| **Total (10)** | **1,266** | **1,229** | **36** | **1** | **0** |

Counted 10 formulations, 1,266 rows: FITS 1,229, FITS WITH SETTING 36, NEW SETTING 1, GAP 0. NO SOURCE 10 (F0441, F0444, F0445, F0446, F0447, F0448, F0452, F0455, F0456, F0457).

New settings:
- **T26: mix to a target on one property, with the other properties shown** (F0450; variant of T26, and of the wave-2 T18 rule for one intermediate carrying two APIs). A herbal extract is standardised to 3.0 % rosavin by blending extract batches, but it must also hold at least 1 % salidroside. T26 sets the donor quantity on one property only. For every other property that mixes by mass (here the second marker), it must show the mix's resulting value as the mass-weighted mean of the lots and refuse the step when that value is out of limits. Properties that do not mix by mass are refused (wave 5, part 1).

No gaps.

Safety rules:
- **Mixing to one marker can move the other out of limits** (F0450, new; the T26 setting above). Rosavin and salidroside do not move together between extract lots: the source's best extract has 4.70 % rosavin and 1.95 % salidroside (ratio 0.41), and the standardised blend 3.02 % and 1.70 % (ratio 0.56). A mix set on rosavin alone does not fix the salidroside. The tablets also contained 8 % less salidroside than the extract implies, so the second marker must be checked in the mix and in the product.
- **Lubricant identity decides the dose over shelf life** (F0458, new; covered by C4). With Mg stearate, stressed selegiline tablets lost 14-17 % of drug, against less than 3 % with glyceryl behenate or hydrogenated cottonseed oil. The master names the exact lubricant and checks its identity at dispensing (C4). An "equivalent lubricant" swap is not a free choice: it needs change control.
- Reminders of known rules, with their size here:
  - Coated-particle content as free base (F0442): applying the fumarate factor (1.336) to an HPLC content already on the free-base basis gives 33.6 % too much. Leaving the factor out when the content is on the fumarate basis gives 25 % too little (C5 extended). T18 takes the absolute content (mg base per g), not % of theoretical (wave 3).
  - One blend, two strengths (F0442): 10 mg at 220 mg and 20 mg at 440 mg from the same blend need a tooling and target-weight check for each strength (wave 2 and wave 3).
  - % of the coated tablet applied to the core: avatrombopag 19.2 mg base instead of 20 mg (−3.8 %, F0443); teriflunomide 13.55 mg instead of 14 mg (−3.2 %, F0460).
  - Percentages that do not add up to 100 % (F0460): 99.74 %, so the tablet weight is the T2 sum and the API is the anchor.
  - Liquid extract by dry substance (F0449): weighing the 48.7 % liquid as if it were dry extract gives about half the extract. The agglomerate is used at its measured content, not at the 70 % recipe.
  - Two drug molecules per salt unit (F0459): a 1:1 fumarate factor (1.225) instead of the hemifumarate factor (1.112) gives 10 % too much siponimod.
  - % column against the mg column (F0453, Example 9, not mapped): the drug is printed as 20 % of a 250 mg tablet (50 mg, as in the heading) against 25 mg in the mg column, a factor of 2 (wave 3, one material with two quantities).
  - Rounded salt line (F0454): 0.56 mg against 0.559 mg by molecular weight, +0.1 % (wave 4).

Sources that contradict themselves:
- EP 3 651 735 B1 (F0442): Table 1-5 swaps crospovidone and L-HPC in the Example 19/20 outer granules (20 and 15 mg printed; the recipe gives 15 and 20 mg). Sieve fractions are printed in mm ("355 mm - 105 mm"), which must be micrometres.
- EP 1 481 211 B1 (F0449): Example 1 states its agglomerate as 70 % extract, 25 % SMCC and 5 % silica, but its inputs (70.0 kg dry extract, 30.0 kg and 5.0 kg) give 66.7, 28.6 and 4.8 %.
- EP 1 349 543 B1 (F0449): the fraction below 250 um is 30-50 % in the description [0017] but 30-60 % in claim 4.
- Brante et al. 2025 (F0450): the text says no active compounds were lost, but salidroside is 1.57 mg per tablet against 1.70 mg from the extract's content (92 %). The Hausner ratio (1.21) and Carr index (17.5 %) do not quite match the printed densities 0.60 and 0.73 g/ml (1.22 and 17.8 %; rounding).
- US 9,421,186 B2 (F0451): the batch lines add up to 20.04 g per 100 tablets (200.4 mg), against a stated 200 mg tablet.
- EP 4 345 100 A2 (F0453): Example 9 is headed "50 mg" tablets but holds 25 mg in 250 mg. Its % column prints the drug as 20 % (it is 10 %) and lactose as 31.6 % (it is 41.6 %). The listed lines add up to 248.4 mg and 99.4 %, and the Mg stearate named in the process is not in the table.
- EP 4 074 312 B1 (F0459): the coating premix (5.134 %) sits in a column where the core already totals 100 %, and the coated tablet is also called 100 %. The figure is % of the coated tablet (4.6 / 89.6); on the core it is 5.41 %.
- EP 4 023 215 A1 and EP 4 382 097 A1 (F0460): the Example 2 and 3 percentages add up to 99.74 % (99.73 % in EP 4 382 097, which prints HPC 2.23 and SSG 9.68) against a stated 100 %. The sieve ("800 mm") and particle sizes ("20 mm") must be micrometres.
