# Wave 3, part 3 (F0241-F0260)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.
Sources were downloaded beforehand by the wave's source finder; this part worked only from those files.

## F0241 rebamipide, film-coated IR, roller compaction (listed: fluid-bed wet granulation)

Source: Brovchenko B.V., Trusov G.V., Technology criteria for the manufacturing of rebamipide film-coated tablets, Drug development & registration 2023;12(4):165-172, Table 2 formulation No. 1 and Methods, doi:10.33380/2305-2066-2023-12-4-1467, https://www.pharmjournal.ru/jour/article/download/1663/1199. Close variant: dry granulation by roller compaction (the paper compares direct compression and roller compaction; no wet granulation).

- Core per tablet (No. 1): rebamipide 100.00 mg, MCC-102 64.80, pregelatinised starch 39.70, Kollidon SR 19.20, croscarmellose sodium 4.80 (half intra-, half extragranular), anhydrous citric acid 2.30, SLS 2.00, sodium stearyl fumarate 4.80 (intragranular), calcium stearate 2.40 (extragranular); 240.0 mg. Film coat Vivacoat PA-1P-000 in water 7.20 mg (3 %); 247.2 mg.
- Y-blender in sequence (API + fillers, then binder, disintegrant, SLS, then SSF), roll compactor with a 1.5 mm granulating screen, extragranular croscarmellose and calcium stearate, 9 mm tooling, then pan coating.
- IPC from the paper: core weight 222-258 mg (240 +/- 7.5 %), crushing strength at least 80 N, compression force NMT 20 kN, friability NMT 1 %, disintegration NMT 15 min for cores and 30 min for coated tablets.
- Batch 500,000 tablets (120 kg cores). Standard practice assumed: roll force, gap and speed, ribbon density, blend times, coat solids %.

| Template | Result | Step |
|---|---|---|
| T23 | FITS WITH SETTING | ribbon solid fraction by envelope density (T23 ribbon option; standard practice) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Tables 1 and 3 swap the Carr index and Hausner ratio values (API: "Carr 1.42 %, Hausner 29.0" from bulk 0.12 and tapped 0.17 g/ml, which give Hausner 1.42 and Carr 29 %). The paper's own formulas are right, so T6 computes the correct pair; any limit copied from the tables must be checked.

Counts: 125 rows; FITS 122, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0242 aminocaproic acid, uncoated IR, slugging, 500 mg

NO SOURCE: no tablet formula with process found; US labels name the excipients only. Not counted.

## F0243 Asparagus racemosus root dry extract, uncoated, high-shear wet granulation, 500 mg

NO SOURCE: only polyherbal tablets containing Shatavari among other extracts; no single-extract tablet with formula and process. Not counted.

## F0244 Chandraprabha vati, film-coated, high-shear wet granulation, 250 mg

NO SOURCE: the only formula found (IJPPS 2014, 37 ingredients in g) has no process and no tablet weight. Not counted.

## F0245 escin, sugar-coated enteric, high-shear wet granulation, 20 mg

NO SOURCE: leaflets are qualitative only; EP 0 900 563 B1 is a sustained-release pellet / matrix form at 50 mg escin, not a sugar-coated enteric tablet. Not counted.

## F0246 gentian + Primula + Rumex + Sambucus + Verbena dry extract, film-coated, roller compaction

NO SOURCE: US 6,117,430 A gives the five powdered herbs of a sugar-coated tablet with a qualitative excipient list only; no 160 mg dry-extract film-coated formula. Not counted.

## F0247 Khadiradi vati (Acacia catechu + 4 ingredients), vati for sucking (listed: moulded lozenge), granulated

Source: Adarsha B.P. et al., Formulation and standardization of Khadiradi vati and comparative study with marketed formulation, J Pharmacogn Phytochem 2019;8(3):2299-2301, Table 1 and sections 2.2-2.7, https://www.phytojournal.com/archives/2019/vol8issue3/PartAE/8-2-491-350.pdf. Close variant: granulated and compressed vati made by the Ayurvedic Formulary of India method, not a moulded lozenge; 5 listed ingredients, not 10.

- Per vati: Khadira (Acacia catechu) 125 mg, Javitri (mace) 31.5, Kankol (cubeb) 31.5, Supari (areca nut) 31.5, Karpura (camphor) 31.5; 251 mg of herbs (no excipients listed).
- Process given only by reference to the AFI method via granules; tests: granule bulk/tapped density, Carr, Hausner, angle of repose; vati weight variation (20), hardness, friability, disintegration, ash, extractives, LOD 5.15 %.
- Standard practice assumed (not in the source): binder and its amount, granulation, drying limit, camphor added after drying (volatile), compression settings and IPC limits. Batch 100,000 vati (25 kg).

| Template | Result | Step |
|---|---|---|
| T6 | FITS WITH SETTING | angle of repose (T6 option, round 3) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 1 says "Khadira (Acacia catechu)" without saying heartwood powder or khadira extract (katha). The master must state which one is weighed (known herbal basis rule, wave 1).

Counts: 92 rows; FITS 89, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0248 valerian root dry extract, sugar-coated, 450 mg

NO SOURCE: the Dutch public assessment report (RVG 118675) and labels give qualitative excipients and "tabletting, coating" only. Not counted.

## F0249 baricitinib, film-coated IR, direct compression, 4 mg

NO SOURCE: labels only; the compound patent has no tablet example. Not counted.

## F0250 benzbromarone, uncoated IR, fluid-bed API pre-treatment then high-shear wet granulation

Source: CN 102429881 A, Embodiment 1 (machine translation), https://patents.google.com/patent/CN102429881A/en. Close variant: 50 mg strength (listed 100 mg); the API is first sprayed with part of the binder in a fluid bed.

- Per 10,000 tablets: benzbromarone 500 g (jet-milled, D50 below 5 um), MCC 200 g, lactose 750 g, HPC 250 g, Mg stearate 20 g; binder 400 ml of 1-3 % HPMC in 30 % ethanol with 25 ml polysorbate 80 and 10 g SLS; tablet 180 mg (50 mg API).
- One third of the binder sprayed onto the API in a fluid bed (inlet 65 C, atomising pressure "3 Kg"), dried at 75 C 10-15 min, 80 mesh; high-shear dry mix 10 min, chopper 10-12 Hz, rest of the binder within 2 min, wet mass 5 min; fluid-bed drying inlet 80 C 10 min, granule water 2-5 %; size 18 mesh; Mg stearate 10 min in a 3D mixer; compress at 180 mg.
- Dissolution: 6 tablets, pH 7.5 phosphate with SLS, 100 rpm, 45 min, mean 91.3 %.
- Batch 1,000,000 tablets (100 times the patent quantities). Standard practice assumed: HPMC strength fixed at one value, IPC limits, BU.

| Template | Result | Step |
|---|---|---|
| T26 | FITS WITH SETTING | 30 % ethanol from 95 % ethanol and water by % v/v (known, wave 1: T26 % v/v with the alcohol table) |
| T17 | FITS WITH SETTING | HPMC % w/v made up to 400 ml per 10,000; polysorbate 80 by volume via density (T17 % w/v, liquids by volume) |
| C1 | FITS WITH SETTING | atomising pressure "3 Kg" read as kgf/cm2 (round-3 unit) |
| T1 | FITS WITH SETTING | binder sprayed in the fluid bed = vessel weight before - after (T1 Difference) |
| C1 | NEW SETTING | chopper speed 10-12 Hz: drive frequency, not rpm. The unit list needs Hz, with conversion to rpm only through a factor from the equipment record |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Step 1 weighs 570 g HPC but step 4 charges 250 g. With 250 g, the lines plus binder solids come to about 176-177 mg per tablet, not the stated 180 mg. The theoretical weight is the T2 sum of the weighed lines (known wave-1 rule).

Counts: 115 rows; FITS 108, FITS WITH SETTING 6, NEW SETTING 1, GAP 0.

## F0251 clobazam, uncoated IR, fluid-bed granulation, 10 mg

NO SOURCE: SmPC excipient lists only (two lactose amounts); the one formulation paper is an ODT by direct compression. Not counted.

## F0252 felbamate, scored IR, high-shear wet granulation, 600 mg

NO SOURCE: labels only; US 2009/0111871 A1 covers crystallisation, with no tablet formula. Not counted.

## F0253 frovatriptan succinate, film-coated IR, 2.5 mg

NO SOURCE: SmPC excipient lists only; no formula with process. Not counted.

## F0254 galantamine hydrobromide, film-coated IR, direct compression (listed: fluid-bed wet granulation)

Source: US 6,099,863 A (Janssen), Example 5, formulation F7b, and process steps (i)-(iv), https://patents.google.com/patent/US6099863A/en. Close variant: direct compression; the patent's background gives wet-granulated prior-art tablets as composition only.

- Core per tablet (F7b): galantamine HBr 10.253 mg (= 8 mg base), spray-dried lactose monohydrate/MCC 75:25 102.907, crospovidone 6, colloidal anhydrous silica 0.24, Mg stearate 0.6; 120 mg.
- Coat: HPMC 2910 5 mPa.s 4, propylene glycol 0.965 ul, talc 0.8, titanium dioxide 1.2, colorant 0.013, water 43 (removed); film coat 6.978 mg (5.8 %); 126.978 mg.
- Dry blend in a planetary mixer, compress, film-coat in a coating pan. Dissolution: 500 ml water, paddle 50 rpm, Q = 80 % at 30 min (F7b 93.5 % at 30 min).
- Batch 1,000,000 tablets (120 kg cores). Standard practice assumed: blend times, BU, IPC limits, coating parameters.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T17 | FITS WITH SETTING | propylene glycol given in ul per tablet: mass via density (T17 liquids by volume) |

Note: The coat weight of 6.978 mg adds the 0.965 ul of propylene glycol as if it were 0.965 mg. At a density of about 1.04 this is 1.00 mg (a minor error).

Counts: 106 rows; FITS 103, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0255 lacosamide, film-coated IR, high-shear wet granulation (listed: direct compression)

Source: EP 2 468 261 A1 (UCB Pharma), Example 6 (Vimpat IR tablets), paragraph [0208] and steps 1-14, https://data.epo.org/publication-server/rest/v1.2/patents/EP2468261NWA1/document.pdf. Close variant: the marketed product is wet-granulated, not directly compressed; same API, strength and tablet type.

- Per tablet, 100 mg: lacosamide 100.0, MCC 102 28.0, L-HPC 25.0, HPC 2.0 (binder solution) intragranular; silicified MCC 62.6 and crospovidone 20.0 extragranular; Mg stearate 2.4; core 240.0 mg; Opadry II (PVA) 9.6 mg (4 %); 249.6 mg.
- HPC dissolved in water until clear; API, MCC, L-HPC through 2 mm, high-shear mix 5 min, binder over less than 15 min; fluid-bed dry, inlet about 70 +/- 5 C, product NMT 50 C, to LOD NMT 3.0 %; 1 mm; blend with SMCC and crospovidone 10-20 min; Mg stearate premixed with part of the blend, final blend 3-5 min; compress; Opadry stirred at least 45 min, coat to the target mean weight.
- Batch 1,250,000 tablets (300 kg cores; the source states 1-750 kg). Standard practice assumed: binder concentration, impeller settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 123 rows; FITS 121, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0256 pitolisant hydrochloride, film-coated IR, 18 mg

NO SOURCE: EP 1 690 858 B1 gives 20/40 mg coated-tablet formulas but no manufacturing process. Not counted.

## F0257 pramipexole dihydrochloride monohydrate, uncoated IR, fluid-bed granulation with the API sprayed as a solution, 0.25 mg

Source: US 2008/0254118 A1, Table 2 (0.25 mg column) and Example 2, https://patents.google.com/patent/US20080254118A1/en

- Per tablet, 0.25 mg: API 0.25 mg, mannitol-D 61.00, corn starch dried 30.90, corn starch undried 9.00, colloidal silica 1.20, povidone K25 1.15, Mg stearate 1.50; 105.00 mg. The 0.25 mg column is exactly half the 0.5 mg (210 mg) blend.
- Example 2 (0.5 mg, 1,000,000 tablets): mannitol, silica and starch through a 1.4 mm comil into a fluid bed. The API (500 g) and povidone are dissolved in water and sprayed. A starch paste (starch in 15 L, into 38 L at 95 C, plus 21 L, cooled to about 60 C) is sprayed. The granulate is dried to 2.3 % (claim range 1.0-2.5 %, LOD at 95 C). Extragranular Mg stearate, silica and starch are blended with 187.0 kg granulate in a 1.1 mm comil for 30 min, then compressed. The process runs in a closed system.
- Used here: the same blend compressed at 105 mg gives 2,000,000 tablets of 0.25 mg (500 g API). Light-sensitive in solution: low-actinic light. Standard practice assumed: spray rates, temperatures, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | strength basis per market: 0.25 mg is the salt monohydrate (US), about 0.18 mg base (EU, factor 1.43) (known, wave 1) |
| T1 | FITS WITH SETTING | API solution sprayed = vessel weight before - after, including rinse (T1 Difference) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: In Example 2 the extragranular quantities are fixed for 187.0 kg of granulate, while the intragranular solids add up to about 190.9 kg. The master re-scales them on the recorded granulate weight (T15; known wave-2 reminder).

Counts: 115 rows; FITS 111, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0258 pregabalin (SR layer) + methylcobalamin (IR layer), bilayer, wet granulation + direct compression (listed: film-coated bilayer DC, 75 mg + 750 ug)

Source: Rathnam G., Nivetha N., Formulation and evaluation of bilayer tablets of sustained release pregabalin and immediate release methylcobalamin, Am J PharmTech Res 2024;14(3), Tables 1-2 (IR F2, SR F1) and Methods, https://zenodo.org/records/12513122/files/AJPTR143002.pdf. Close variant: methylcobalamin 1 mg (listed 750 ug); the pregabalin layer is sustained release and wet-granulated; the source is uncoated and lab scale.

- IR layer (F2): methylcobalamin 1, lactose 22, MCC 33, sodium starch glycolate 15, talc 3, Mg stearate 1; 75 mg; iron oxide red 0.125 % w/w added (not in the table). Sieved (#40), mixed, lubricated, colour through #100.
- SR layer (F1): pregabalin 75, HPMC K4M 67.5, HPMC K100M 90, PVP K30 45, lactose 157, colloidal silica 8, Mg stearate 7.5; 450 mg. Granulated with 5 % PVP K30 in IPA, wet screened #10, dried 50 C 30 min, #14, 10 % fines added back, lubricated 5 min.
- Bilayer press, 12 mm flat: the SR layer is compressed first at light force, then the IR layer at full force; hardness 5-8 kg/cm2. Dissolution: 2 h in 0.1 N HCl, then pH 6.8 to 12 h.
- Batch 300,000 tablets (135 kg SR, 22.5 kg IR). Assumed for the listed type: HPMC film coat with an opacifier at 3 %; light protection for methylcobalamin; pregabalin handled as a controlled substance.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | iron oxide red 0.125 % w/w of the IR blend (T8 % w/w mode) |
| T17 | FITS WITH SETTING | PVP K30 5 % w/v in IPA (T17 % w/v made up to volume) |
| T8 | FITS WITH SETTING | fines added back = 10 % of the recorded granule weight (T8 "% of" a recorded weight) |
| T6 | FITS WITH SETTING | SR blend angle of repose (T6 option, round 3) |
| T6 | FITS WITH SETTING | IR blend angle of repose (T6 option, round 3) |
| C1 | FITS WITH SETTING | SR layer mean weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | IR layer mean weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | bilayer mean weight within +/- % of target (C1 option) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C1 | FITS WITH SETTING | hardness 5-8 kg/cm2, read as kgf/cm2 (round-3 unit) |

Note: The paper's friability formula divides by the final weight. T5 loss mode uses the starting weight, as the pharmacopoeia does.

Counts: 172 rows; FITS 162, FITS WITH SETTING 10, NEW SETTING 0, GAP 0.

## F0259 ropinirole hydrochloride, double-layer controlled release, film-coated (listed: trilayer, high-shear wet granulation, 4 mg)

Source: WO 2005/018605 A2 (Glaxo Group), description [0065] / claim 29 (per-layer formula) and Example 8 (process), https://patents.google.com/patent/WO2005018605A2/en. Close variant: double layer, not the Geomatrix three-layer tablet; 0.5 mg (as base) for restless legs; dry blending, not wet granulation. No public trilayer formula was found.

- Layer 1: ropinirole HCl 0.143 mg, MCC 20.756, lactose monohydrate 10.376, HPMC 5.625, Mg stearate 0.375, colloidal silica 0.188; 37.463 mg. Layer 2: ropinirole HCl 0.428, HPMC 45, MCC 43.594, lactose 21.791, Mg stearate 1.125, silica 0.563; 112.501 mg. Core 150 mg, 0.571 mg HCl (= 0.50 mg base).
- Example 8: all ingredients through 900 um. Each blend: drug high-shear premixed with part of the MCC (blend A with yellow iron oxide), then low-shear mixed with the rest (HPMC Pharmacoat 603 in A, Methocel K4M in B), then Mg stearate. Rotary double-layer press. Opadry White to a 4 % gain (about 6 mg on a 150 mg core).
- Batch 1,000,000 cores (37.5 kg blend A, 112.5 kg blend B). Standard practice assumed: blend times, BU per blend, layer-weight IPC, coating parameters.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | layer A mean weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | layer B mean weight within +/- % of target (C1 option) |
| C1 | FITS WITH SETTING | core mean weight within +/- % of target (C1 option) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | dose per core = layer A weight x A content + layer B weight x B content (T8 product of readings, then T2) |

Note: The text gives the Example 8 batch as two blends of about 15.6 kg each for 142,200 cores. The [0065] split (37.5 + 112.5 mg) would need 5.3 kg and 16.0 kg. The per-tablet tables are images that were not available, so the per-layer text formula is used.

Counts: 162 rows; FITS 157, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0260 adagrasib, film-coated IR, roller compaction (listed: fluid-bed wet granulation), 200 mg

Source: US 12,383,503 B2 (Mirati Therapeutics), Example 1, Table 1, and process steps (a)-(i), https://patents.google.com/patent/US12383503B2/en. Close variant: dry granulation by roller compaction; same API, strength and tablet type.

- Per tablet: adagrasib 200 mg (33.33 %), MCC 307 (51.17 %), mannitol 60 (10 %), crospovidone 18 (3 %), colloidal silica 6 (1 %), Mg stearate 9 (1.5 %); core 600 mg; film coat 18-30 mg (3-5 %). "No overages".
- Pre-blend of diluents, glidant and API; de-lump in a screening mill; blend with disintegrant and glidant; intragranular lubrication; roller compaction; extragranular diluent, disintegrant and glidant; extragranular lubrication; rotary press; pan film coating.
- Batch 300,000 tablets (180 kg cores) in a potent-compound suite. Standard practice assumed: intra/extragranular split, roll settings, ribbon density, coat target fixed at 4 %.

| Template | Result | Step |
|---|---|---|
| T23 | FITS WITH SETTING | ribbon solid fraction by envelope density (T23 ribbon option; standard practice) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The coat is given as a 3-5 % range; the master fixes one target, and the range only sets the limits (known wave-1 rule for formula ranges).

Counts: 138 rows; FITS 135, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## Totals for F0241-F0260

Counted 9 formulations, 1,148 rows: FITS 1,108, FITS WITH SETTING 39, NEW SETTING 1, GAP 0. NO SOURCE 11 (F0242, F0243, F0244, F0245, F0246, F0248, F0249, F0251, F0252, F0253, F0256).

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0241 rebamipide | 125 | 122 | 3 | 0 | 0 |
| F0247 Khadiradi vati | 92 | 89 | 3 | 0 | 0 |
| F0250 benzbromarone | 115 | 108 | 6 | 1 | 0 |
| F0254 galantamine HBr | 106 | 103 | 3 | 0 | 0 |
| F0255 lacosamide | 123 | 121 | 2 | 0 | 0 |
| F0257 pramipexole 2HCl H2O | 115 | 111 | 4 | 0 | 0 |
| F0258 pregabalin + methylcobalamin bilayer | 172 | 162 | 10 | 0 | 0 |
| F0259 ropinirole HCl double layer | 162 | 157 | 5 | 0 | 0 |
| F0260 adagrasib | 138 | 135 | 3 | 0 | 0 |
| **Total** | **1,148** | **1,108** | **39** | **1** | **0** |

NO SOURCE: F0242, F0243, F0244, F0245, F0246, F0248, F0249, F0251, F0252, F0253, F0256.

New settings and gaps:
- Unit Hz (F0250), variant of the unit list (as psi in wave 1). Machine settings such as chopper or fan speed are often given as drive frequency (10-12 Hz). C1 must accept Hz as its own unit. It may convert to rpm only through a factor taken from the equipment record, never through a fixed constant.
- No gaps.

Safety rules:
- One material, two quantities in one example (F0250): HPC is weighed as 570 g but charged as 250 g. Compressed at the stated 180 mg, the 570 g reading gives about 43 mg instead of 50 mg (-14 %); the 250 g reading gives about 51 mg (+2 %). The master check must refuse a material that has two different quantities. The theoretical weight is the T2 sum of the weighed lines (known wave-1 rule).
- Same API in two layers (F0259): the dose per core is the sum of each layer weight x that blend's content. A C1 check on total weight alone can pass while the 25:75 layer split drifts, which shifts the fast/slow release share. Each layer weight needs its own C1 check, plus the T6 ratio. This uses existing templates; recorded as a rule for bilayer masters.
- Crystal form (F0260): Form 2 tablets showed about 89 % relative bioavailability against mixed-form capsules, and bioequivalence was not met. The API lot's form must match the form named in the master (C4 on the CoA). This is not a calculation, but a wrong lot changes exposure by about 10 %.
- Reminders of known rules: label basis per market (pramipexole 0.25 mg as salt monohydrate = about 0.18 mg base, F0257); typed salt quantity against the MW factor (F0254: the text pairs 4 mg galantamine with 5.026 mg HBr, but the factor gives 5.126 mg, 2 % low if typed); T15 on the recorded granulate weight (F0257); methylcobalamin assay basis and water (T9 / C5, F0258); herbal line basis, powder against extract (F0247); formula ranges fixed by the master (F0260 coat, F0250 HPMC 1-3 %).

Sources that contradict themselves:
- Brovchenko and Trusov 2023 (F0241): Tables 1 and 3 swap the Carr index and Hausner ratio values (e.g. "Carr 1.42 %, Hausner 29.0"), while the paper's formulas are correct. Table 4 sets crushing strength at 80 N minimum, but reports Formulation 1 (compacted) from 73 N and marks it as conforming.
- Adarsha et al. 2019 (F0247): bulk 0.572 and tapped 0.647 g/ml give Hausner 1.13 and Carr 11.6 %, but the paper reports 1.21 and 35.8 %. Neither reported value fits the other.
- CN 102429881 A (F0250): HPC is 570 g in step 1 but 250 g in step 4. The lines plus binder solids come to about 176-177 mg against the stated 180 mg tablet. The binder strength is a range (1-3 %) in the worked embodiment, and the atomising pressure is given as "3 Kg".
- US 6,099,863 A (F0254): "4 to 16 mg galanthamine (5.026 to 20.506 mg HBr)": 4 mg is 5.126 mg by the patent's own factor. Coat weights add the propylene glycol value in ul as mg.
- US 2008/0254118 A1 (F0257):
  - The third Table 2 column is headed 1.5 mg, but it adds up to 210 mg only with 0.5 mg, which is Example 2's tablet.
  - Povidone is "2,300 mg" where the batch needs 2,300 g.
  - Intragranular plus paste starch is 64.89 kg against 61.8 kg "dried" starch in Table 2, unless that line is on a dry basis.
  - The extragranular quantities are fixed for 187.0 kg of granulate, while the intragranular solids add up to about 190.9 kg.
- Rathnam and Nivetha 2024 (F0258):
  - The bilayer tablet is reported at 530 +/- 3.04 mg, but the layers add up to 525 mg (also 525 mg in the stability table).
  - Table 5 (IR layer) repeats Table 6 F1-F4 for hardness, friability and drug content.
  - The text says zero order fits best (R2 0.9871), but Table 7 gives 0.9071 for zero order and 0.9943 for Higuchi; Table 7 is titled "dorzolamide hydrochloride".
  - Iron oxide 0.125 % is added in the method but is not in Table 1.
  - Friability is divided by the final weight, and storage is given as "40 +/- 20 C".
- WO 2005/018605 A2 (F0259): the per-layer formula in [0065] (37.5 + 112.5 mg) cannot be the Example 8 batch of two equal 15.6 kg blends for 142,200 cores. The per-tablet tables are images and were not checked.
- US 12,383,503 B2 (F0260): Table 1 cites footnotes a-c, but the text does not give them, so any potency or compensation rule for the API line is unstated.
