# Wave 3, part 4 (F0261-F0280)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the shared source finder; this part worked from those files only (no new searches).

## F0261 bicalutamide, film-coated IR, single-pot wet granulation

Source: US 2005/0008691 A1 (Synthon), Example 1, Tablets A, https://patents.google.com/patent/US20050008691A1/en

- Per tablet (Tablets A): micronised bicalutamide 50.0 mg, lactose monohydrate 61.0, povidone 5.0, crospovidone 7.5 (half intragranular, half extragranular), Mg stearate 1.5; 125 mg, 6 mm round punches.
- Single-pot granulator: API, lactose, povidone and half the crospovidone mixed, purified water 0.27 ml per g API; dried in the same pot by microwave (50-200 W), vacuum below 100 mbar and hot air 50-60 C; milled and sieved below 500 um; rest of crospovidone and Mg stearate added; compressed at 2.4-6.7 kN (release falls from 100 % to about 70 % at 30 min as force rises).
- API particle size / specific surface area controls dissolution (0.5 m2/g gave about 25 % at 30 min): lot SSA checked at dispensing.
- No film coat in the example: a standard HPMC coat at about 3 % assumed for the listed film-coated type. Batch 1,000,000 tablets in a hormone / potent-compound suite. Standard practice assumed: blend and wet-massing times, LOD limit, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granulating water 0.27 ml per g of API (T8 "% of" a recorded weight, liquid by volume) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 1 gives no disintegrant amount for Tablets D, although the text adds crospovidone; without it the D lines sum to 117.5 mg against the stated 125 mg (7.5 mg crospovidone closes the gap).

Counts: 118 rows; FITS 115, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0262 osimertinib mesylate, film-coated IR (listed: direct compression)

Source: EP 3 089 741 B1 (AstraZeneca), Example 9 with the process of Examples 8A/8B, https://data.epo.org/publication-server/rest/v1.2/patents/EP3089741NWB1/document.pdf. Close variant: the 80 mg tablet is made by dry mixing and roller compaction; the patent's direct-compression examples are 20 mg only.

- Core per tablet (80 mg): osimertinib mesylate 95.36 mg (= 80 mg base), mannitol 294.65, MCC 75.00, L-HPC 25.00, sodium stearyl fumarate 10.00; 500 mg, 14.5 x 7.25 mm punches.
- Blend API, mannitol, MCC, L-HPC (drum blender 15 rpm, 58 min); add SSF equal to 0.5 % of the batch weight, mix 9.5 min; roller compact (40 bar, 2 mm gap, rolls 10.1-10.2 rpm, screw 22.4-22.9 rpm); mill (Comil, 1.27 mm screen); add the rest of the SSF, mix 5 min; compress (turret 20 rpm).
- Film coat Opadry II beige at 4 % of core weight (520 mg). Batch 300,000 tablets (150 kg) in a cytotoxic suite. Standard practice assumed: ribbon density limits, coat solids %, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | mesylate to base (95.36/80 = 1.192; checked against the molecular weights, about 1.192; known typed-factor check, wave 1) |
| T8 | FITS WITH SETTING | intragranular SSF = 0.5 % of the batch weight (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Check: 80 mg x 595.7 / 499.6 = 95.39 mg mesylate (factor 1.1923), matching 95.36 within rounding. The 20 mg strength is written 23.80 mg in Examples 2-5 but 23.84 mg in Example 8A (0.2 % apart).

Counts: 118 rows; FITS 114, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0263 trifluridine + tipiracil hydrochloride, film-coated IR, direct compression

Source: US 11,730,753 B2 (Natco Pharma), Example 1, https://patents.google.com/patent/US11730753B2/en. Close variant: 20 mg + 9.42 mg tipiracil HCl strength (listed 15 mg + 6.14 mg tipiracil, i.e. 7.065 mg HCl); same ratio, so the 15 mg tablet is the same blend at 90 mg.

- Core per tablet (20 mg strength): trifluridine 20.00 mg, tipiracil HCl 9.42 (= 8.19 mg tipiracil), MCC 64.73, partially pregelatinised starch 24.00, stearic acid 1.60, Mg stearate 0.25; 120.00 mg; Opadry 2.60 mg (122.60 mg).
- Used here at 15 mg: weight-proportional 90.0 mg core (trifluridine 15.00, tipiracil HCl 7.065, MCC 48.55, starch 18.00, stearic acid 1.20, Mg stearate 0.19), coat 1.95 mg.
- Process: sift each material, blend, lubricate with stearic acid then Mg stearate, compress, Opadry film coat. Batch 500,000 tablets in a cytotoxic suite. Standard practice assumed: blend times, blend uniformity, compression and coat parameters (none given).

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | both APIs' potency excesses taken from one MCC line (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Two APIs are fixed by one tablet weight: the master names trifluridine as the controlling API and checks tipiracil at the chosen weight (known, wave 2). Tipiracil strength is stated as base on the label and the HCl is weighed (factor 279.1 / 242.7 = 1.150); the master states the basis per line (known label-basis rule, wave 1).

Counts: 113 rows; FITS 110, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0264 tucatinib, film-coated IR, spray drying, 150 mg

NO SOURCE: label and trial protocol give only the qualitative composition (amorphous dispersion in copovidone); no example with mg and spray-drying process. Not counted.

## F0265 vandetanib, film-coated IR (listed: roller compaction)

Source: US 8,067,427 B2 (AstraZeneca), Example 1, https://patents.google.com/patent/US8067427B2/en. Close variant: high-shear wet granulation; the description names roller compaction only as an alternative, with no example.

- Core per tablet: vandetanib (anhydrous free base) 300.0 mg, dibasic calcium phosphate 315, MCC 75, crospovidone 37.5, povidone 15, Mg stearate 7.5; 750.0 mg, 16 x 7.8 mm pillow shape.
- Coat: HPMC 2910 14.7, PEG 300 3.0, TiO2 4.8 mg (3 % gain), TiO2 and part of the HPMC supplied as a ready-made white paste.
- High-shear dry mix 5 min, water 34 % w/w added with 6 min total mixing, wet screen, dry, screen, blend with 1 % w/w pre-milled Mg stearate 2.5 min, compress on a high-speed rotary press (mean hardness 37.2 kp, friability 0.13 %, disintegration 6 min), pan coat.
- Batch 200,000 tablets (150 kg) in a cytotoxic suite. Standard practice assumed: drying conditions (not given), screens, coat parameters.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granulating water = 34 % w/w of the dry powder charge (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T1 | FITS WITH SETTING | HPMC to add as powder = total HPMC minus the HPMC in the paste (T1 named Difference) |

Counts: 123 rows; FITS 119, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0266 venetoclax, film-coated IR, hot-melt extrusion

Source: US 11,369,599 B2 (AbbVie), Examples 1-2 and claims 1-4, https://patents.google.com/patent/US11369599B2/en

- Extrudate (% w/w): API 12, copovidone 80, polysorbate 80 7, colloidal silica 1. Tablet: extrudate 78.5 %, dicalcium phosphate 20.0 %, sodium stearyl fumarate 0.5 %, colloidal silica 1.0 %, so 9.42 % venetoclax (claim 1).
- Process (FIG. 1): copovidone granulated with the surfactant and silica, blended and sieved with the API; twin-screw extrusion (zone 1 95 C, zones 2-5 155 C, die 140 C, 150 rpm, 1.5 kg/h, vacuum 200 mbar) and calendering; cool, mill, blend with the extragranular parts, compress, film coat.
- 100 mg tablet: 1,061.6 mg (833.3 mg extrudate). Batch 150,000 tablets (about 159 kg) in a cytotoxic suite at a plant-scale feed rate. Standard practice assumed: film-coat composition and gain (not given), mill screen, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | API stated as anhydrous parent compound: no T11 salt factor in the chain (C5 extended, as parent) |
| T8 | FITS WITH SETTING | material extruded = feed rate x run time (T8 rate x time) |
| T18 | FITS WITH SETTING | milled extrudate quantity per batch from its own measured venetoclax content (T18 content from in-process result; known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The examples call the drug "API" added as the anhydrous parent compound; its identity as venetoclax comes from the claims. A surfactant may instead be pumped into the extruder; the pump-to-powder feed ratio is then a plain T6 + C1 check.

Counts: 146 rows; FITS 141, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0267 vorasidenib, film-coated IR, high-shear wet granulation, 40 mg

NO SOURCE: label / assessment report give qualitative excipients only; no patent example with quantities and process. Not counted.

## F0268 metamizole sodium monohydrate + pitofenone hydrochloride + fenpiverinium bromide, uncoated IR, roller compaction

NO SOURCE: registrations and leaflets give the API amounts only (e.g. 527 mg + 5.25 mg + 0.1 mg), no excipient amounts or process. Not counted.

## F0269 methadone hydrochloride, dispersible IR, direct compression, 40 mg

NO SOURCE: dispersible-tablet labels give qualitative excipients only; no formula with mg or process. Not counted.

## F0270 oxycodone hydrochloride + naloxone hydrochloride, film-coated ER hydrophobic matrix, spray granulation then melt granulation

Source: EP 1 492 506 B1 (Euro-Celtique / Mundipharma), Example 1, preparation Oxy/Nal-10, https://data.epo.org/publication-server/rest/v1.2/patents/EP1492506NWB1/document.pdf. Close variant: 20 mg + 10 mg strength (listed 10 mg + 5 mg; same 2:1 ratio, so a 61.5 mg core of the same blend); film coat not described.

- Core per tablet (20 + 10 mg): oxycodone HCl 20.0, naloxone HCl 10.0, lactose (Flow Lac 100) 49.25, povidone 30 5.0, Surelease 10.0 (solids), stearyl alcohol 25.0, talc 2.5, Mg stearate 1.25; 123 mg "based on dry substance". The 0 and 5 mg naloxone versions replace naloxone by lactose.
- Tumble mix APIs, lactose and povidone; spray-granulate with Surelease (ethylcellulose dispersion) in a fluid bed; sieve 1.4 mm; granulate again with molten stearyl alcohol in a high-shear mixer; cool, sieve, lubricate, compress.
- Release (12 h, basket, pH 1.2) is the same for each API whatever the other's amount. Batch 1,000,000 tablets (61.5 kg) in a controlled-substance suite. Standard practice assumed: melt temperatures (not given), fluid-bed settings, film coat and gain, IPC limits.

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | both APIs' potency excesses taken from one lactose line (T10 several adjusted materials into one filler) |
| T12 | FITS WITH SETTING | core target 123 mg stated on dry substance: as-is target from the final blend's measured LOD (T12, LOD from an earlier step) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Example 2 gives the same core made by melt extrusion (zones 25-65 C, melt 87 C, 150 rpm, 1.5 kg/h); not used here. Two APIs under one tablet weight: the master names the controlling API (known, wave 2).

Counts: 147 rows; FITS 143, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0271 salsalate, IR tablet without discrete film coat (listed: film-coated, foam granulation)

Source: EP 0 384 600 B1 (3M Riker; = US 5,225,201), Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP0384600NWB1/document.pdf. Close variant: conventional aqueous granulation, not foam; the hydroxypropyl cellulose in the granule replaces the usual film coat (taste and oesophageal irritation masked), so no coating stage.

- Per tablet: salsalate 750.0 mg, corn starch 34.0, hydroxypropyl cellulose 12.0, MCC PH101 50.0, Mg stearate 1.5; 847.5 mg, 12.7 mm flat bevelled tooling.
- Lab batch: 3,750 g salsalate + 170 g starch blended 5 min; 60 g HPC dissolved in 294.4 g water added, granulated 5 min; fluid-bed dried 45 min at 60 C; oscillated through 12 mesh (bulk density 0.671 g/ml); 1,592 g of granulation blended 5 min with 100 g MCC; a quarter of this premixed with 3.0 g Mg stearate, returned, mixed 1 min; compressed at about 1,320 kgf.
- Plant scale 200,000 tablets (169.5 kg) with the MCC and Mg stearate re-scaled to the granule weight. Standard practice assumed: IPC limits, drying end point.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The patent's axial tensile strength (tablet glued between bolts and pulled apart, 4F / pi D2) is a development test, not a batch IPC, and is not in the master; if a plant ever recorded it, T23 would need an axial mode. The source text writes "3.750 of SSA"; 3,750 g follows from Table 1.

Counts: 96 rows; FITS 94, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0272 thiocolchicoside, uncoated IR, wet granulation

Source: EP 2 566 463 B1 (A. Bulgur), Example 1, Table 1.1 (immediate-release part), https://data.epo.org/publication-server/rest/v1.2/patents/EP2566463NWB1/document.pdf. Close variant: the granulate is the IR part of a two-part ER tablet and holds 8 mg; here it is compressed alone at half weight (113 mg) to give the listed 4 mg; granulator type not stated (high-shear assumed).

- IR part per 226.0 mg: thiocolchicoside 8.0, lactose monohydrate 161.2, pregelatinised starch 40.0, sucrose 5.0, gelatin 2.5, talc 8.0, Mg stearate 1.3.
- Sieve and mix API, lactose, starch; dissolve sucrose and gelatin in hot water; granulate; dry at 60 C; sieve 30 mesh; add sieved talc and Mg stearate, mix 5 min.
- Used here: 113.0 mg tablets (4 mg), batch 1,000,000 tablets (113 kg). Low dose (3.5 %): API pre-mixed with part of the lactose. Standard practice assumed: granulator, binder amount, drying end point, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The strength comes from the plant's choice of weight; compressing the granulate at the source's 226 mg would give 8 mg. The master checks API per tablet against the label claim (known, wave 2).

Counts: 116 rows; FITS 114, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0273 tolperisone hydrochloride, film-coated floating ER hydrophilic matrix (listed: high-shear wet granulation, 450 mg)

Source: EP 2 228 056 A2 (Sanochemia), Example 1 (SB080123), https://data.epo.org/publication-server/rest/v1.2/patents/EP2228056NWA2/document.pdf. Close variant: drug and citric acid pre-compacted (dry), not wet granulated; gastroretentive floating matrix; tablet weight, lubricant and coat amount not stated.

- Formula (% w/w): tolperisone HCl 50, anhydrous citric acid 10, HPMC K4M 11.6, HPMC K15M 11.6, microporous polypropylene powder 16.6 (sums to 99.8 %; no lubricant).
- Pre-compact API with citric acid; mix with both HPMC grades and polypropylene; compress above 50 kN to a floating CR tablet; spray a methacrylate (Eudragit) film coat.
- Plant choices (not in source): 450 mg tolperisone HCl in a 900 mg core; Mg stearate added as lubricant and the lines re-based; coat at 3 % gain; 200,000 tablets (180 kg). Floating lag time and floating duration checked as IPC.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from the % w/w formula on the batch weight (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source says the product has a "41.3 % active substance content", which matches neither the 50 % tolperisone HCl of the formula nor its 43.5 % as base; the master must state whether 450 mg is the HCl (C5 / label basis, known wave 1).

Counts: 117 rows; FITS 114, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0274 aripiprazole, orodispersible tablet (listed: direct compression)

Source: CA 2 773 003 A1 (ratiopharm), Example 2, Table 2, https://patents.google.com/patent/CA2773003A1/en. Close variant: the intragranular part is high-shear wet granulated; the description allows direct compression but gives no DC example.

- Intragranular per tablet: aripiprazole (anhydrous) 10.00 mg, MCC 38.75, silicified MCC 55.00, colloidal silica 3.00, HPC 2.00 (as aqueous binder solution, stirred 1 h).
- Extragranular: carmellose 20.00, crospovidone 5.00, xylitol 5.00, aspartame 3.00, acesulfame K 3.00, tartaric acid 3.00, pineapple flavour 0.75, Mg stearate 1.50; 150.0 mg, 7.1 mm flat bevelled punches.
- Sieve ASTM 40; high-shear granulate with the HPC solution; dry at 80 C for 25 min; mill through ASTM 30; co-sift and blend the extragranular parts; lubricate; compress. Hardness 51-59 N, disintegration 12 s.
- Batch 1,000,000 tablets (150 kg). Standard practice assumed: binder concentration, LOD limit, ODT packing at low RH.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 148 rows; FITS 146, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0275 clomipramine hydrochloride, sugar-coated IR, high-shear wet granulation, 25 mg

NO SOURCE: leaflets and one partial, garbled SmPC excipient table only; no full formula, no process. Not counted.

## F0276 mixed amphetamine salts (dexamfetamine saccharate, amfetamine aspartate monohydrate, dexamfetamine sulfate, amfetamine sulfate), scored IR (listed: high-shear wet granulation)

Source: US 6,384,020 B1 (Shire / Richwood), Example 2 (10 mg) and the general process, https://patents.google.com/patent/US6384020B1/en. Close variant: direct compression; the score is not described (standard practice, as on the marketed 10 mg tablet).

- Example 2 (% w/w, 75 kg batch): each of the four salts 1.23 % (919 g), FD&C Blue 1 lake 0.39 %, lactitol 40.00 % + 33.45 % (two portions), MCC 20.00 %, colloidal silica 0.24 %, Mg stearate 1.01 %; 208.0 mg tablet, about 360,600 tablets per batch.
- From the % and batch grams each salt is about 2.55 mg per tablet (10.2 mg of salts); the printed mg column says 1.3 mg (see Note).
- Process: sieve drug, colour and lactitol through 20 mesh, blend 10 min; add the other materials (not Mg stearate) through 20 mesh, blend 20 min; Mg stearate through 40 mesh, 5 min; compress on a rotary press; optional coat.
- Batch 75 kg as in the source, controlled-substance (Schedule II) suite. Standard practice assumed: score subdivision test, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | d-amphetamine sulfate to amphetamine base, 2 drug molecules per salt unit (for the assay-as-base check) |
| T11 | FITS WITH SETTING | d-amphetamine saccharate to base, 2 drug molecules per salt unit |
| T11 | FITS WITH SETTING | d,l-amphetamine sulfate to base, 2 drug molecules per salt unit |
| T10 | FITS WITH SETTING | the four salts' potency excesses taken from one lactitol line (T10 several adjusted materials into one filler) |
| T6 | FITS WITH SETTING | d- to l-amphetamine ratio from the four salts (about 3.15 : 1), every input on the base basis, checked by C1 (ratio names its basis; known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | score subdivision: halves within +/- % of their mean (C3 limits as % of series mean) |

Note: The label claim is per salt (2.5 mg each), while assay and content uniformity report amphetamine base: 10 mg of the four salts is about 6.26 mg base, d : l about 3.15 : 1. The aspartate is not named as the monohydrate in the patent; the master names the form (C5, known).

Counts: 121 rows; FITS 113, FITS WITH SETTING 8, NEW SETTING 0, GAP 0.

## F0277 disulfiram, effervescent, solvent wet granulation, 400 mg

NO SOURCE: package leaflet gives the excipients qualitatively; no quantities or process found. Not counted.

## F0278 phenelzine sulfate, film-coated IR, fluid-bed granulation, 15 mg

NO SOURCE: labels and SmPCs give qualitative excipients only. Not counted.

## F0279 tianeptine sodium, film-coated IR (listed: sugar-coated)

Source: EP 2 561 864 B1 (Krka), Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP2561864NWB1/document.pdf. Close variant: PVA film coat, not a sugar coat; ethanolic wet granulation (granulator not named, high-shear assumed).

- Core per tablet (9.2 kg batch, 55,791 tablets): tianeptine sodium 12.5 mg (697.5 g), mannitol 135.0, talc 6.8, maize starch 6.0, ethylcellulose 2.2 (as ethanol solution), Mg stearate 2.4; 164.9 mg.
- Coat: PVA 8.0, TiO2 4.92, PEG 3350 4.04, quinoline yellow lake 0.072, ponceau 4R lake 0.008, stated total 20.0 mg; coated 184.9 mg.
- Blend API, mannitol, talc, starch; wet granulate with ethylcellulose in ethanol; blend with Mg stearate; compress; spray an aqueous PVA (Opadry-type) dispersion in a pan.
- Batch 10 x source (92.0 kg cores, 557,914 tablets). Hygroscopic API: room RH checked through open stages, tablets packed with desiccant. Standard practice assumed: drying limits, residual ethanol, coating parameters.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The coat lines add up to 17.04 mg, not the stated 20.0 mg; the master's coat suspension must follow the supplier's full composition (talc likely left out), not the listed lines.

Counts: 132 rows; FITS 130, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0280 tranylcypromine sulfate, film-coated IR, direct compression, 10 mg

NO SOURCE: a Dutch public assessment report gives the salt amount (27.37 mg sulfate = 20 mg base, a different strength), qualitative excipients and one sentence on the process; no quantitative formula. Not counted.

## Totals for F0261-F0280

Counted 12 formulations, 1,495 rows: FITS 1,453, FITS WITH SETTING 42, NEW SETTING 0, GAP 0. NO SOURCE 8 (F0264, F0267, F0268, F0269, F0275, F0277, F0278, F0280).

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0261 | 118 | 115 | 3 | 0 | 0 |
| F0262 | 118 | 114 | 4 | 0 | 0 |
| F0263 | 113 | 110 | 3 | 0 | 0 |
| F0265 | 123 | 119 | 4 | 0 | 0 |
| F0266 | 146 | 141 | 5 | 0 | 0 |
| F0270 | 147 | 143 | 4 | 0 | 0 |
| F0271 | 96 | 94 | 2 | 0 | 0 |
| F0272 | 116 | 114 | 2 | 0 | 0 |
| F0273 | 117 | 114 | 3 | 0 | 0 |
| F0274 | 148 | 146 | 2 | 0 | 0 |
| F0276 | 121 | 113 | 8 | 0 | 0 |
| F0279 | 132 | 130 | 2 | 0 | 0 |
| Total | 1495 | 1453 | 42 | 0 | 0 |

NO SOURCE: F0264, F0267, F0268, F0269, F0275, F0277, F0278, F0280.

New settings and gaps: none. Every non-FITS row uses an existing setting or a finding already known (typed salt factor checked against the molecular weights, wave 1; in-process content and the double-adjustment rule, wave 1; ratios naming their basis, wave 1; "as parent" potency, round 3).

Safety rules (reminders of known rules unless marked):
- Mixed amphetamine salts (F0276): the label is on the four salts (10 mg = about 6.26 mg amphetamine base), the assay and content uniformity are on base. A CU or assay limit set on 10 mg against base results would fail good batches by about 37 %; dispensing 10 mg as base would give about 60 % too much. Each line and each limit must name its basis (known label-basis rule, wave 1; T11 with 2 drug molecules per salt unit for the sulfates and the saccharate).
- Copied mg column (F0276; covered by known rules): a master built from the printed Example 2 mg column (1.3 mg per salt) would make the "10 mg" tablet with about 5.2 mg of salts, about half the dose; the % and batch grams give 2.55 mg. The T2 sum of the lines (203.0 mg) against the stated 208.0 mg exposes it (known T2-sum rule, wave 1). The source also carries about 1.9 % (10 mg) and 3.9 % (5 mg) more of each salt than the label, not declared as overage (known label-claim rule, wave 2).
- Tipiracil stated as base (F0263): 6.14 mg tipiracil is 7.065 mg of the HCl; weighing 6.14 mg of the HCl gives about 13 % too little tipiracil (known label-basis rule).
- Dry-basis target weight (F0270): the 123 mg core is stated "based on dry substance". Compressing the as-is blend to 123 mg gives tablets low in drug by about the blend's LOD in %; the target must name its basis (T12; known "weight targets name their stage", wave 2).
- Strength set by the chosen weight (F0272, F0273, F0266): the 8 mg IR granulate gives 4 mg only at 113 mg; the % formula of F0273 and the 9.42 % venetoclax tablet (1,061.6 mg for 100 mg) fix the dose only through the stated weight. The master checks API per tablet against the label claim (known, wave 2).
- Extrudate content (F0266): the tablet blend uses the milled extrudate's measured venetoclax content; if the API was already potency-adjusted at the extruder feed, a second adjustment doses twice (known double-adjustment rule, wave 1).

Sources that contradict themselves:
- US 6,384,020 B1 (F0276): Example 2 prints 1.3 mg per salt (the 5 mg Example 1 value) beside 1.23 % of a 208 mg tablet (2.55 mg); the mg column sums to 203.0 mg against the stated 208.0 mg.
- CA 2 773 003 A1 (F0274): in Example 4, Table 3, the 3,000-tablet column lists colloidal silica 3.00 g and HPC 2.00 g (the per-tablet mg values; 9.00 g and 6.00 g expected), so the column sums to 440 g against the stated 450 g.
- EP 2 561 864 B1 (F0279): the coat lines add up to 17.04 mg (950.8 g per batch) but the coat is stated as 20.0 mg (1,115.8 g); the 2.96 mg gap is 14.8 % of the coat, likely the talc of the commercial PVA coating system left out of the list.
- EP 2 566 463 B1 (F0272): one paragraph puts 35-45 % of the dose in the IR part (55-56 % in the ER part), another says 35-65 %; Example 1 puts 8 of 16 mg (50 %) in the IR part.
- EP 2 228 056 A2 (F0273): the formula sums to 99.8 % with no lubricant; 2.50 of 4.99 g is reported as "50.00 %" measured; the "41.3 % active substance content" fits neither 50 % HCl nor 43.5 % base; a "pressure higher than 50 kN" is a force.
- US 2005/0008691 A1 (F0261): Tablets D have no disintegrant amount in Table 1 although the text adds crospovidone (lines 117.5 mg against 125 mg).
- EP 3 089 741 B1 (F0262): the same 20 mg base is 23.80 mg mesylate in Examples 2-5 and 23.84 mg in Example 8A (minor, 0.2 %).
- EP 0 384 600 B1 (F0271): "3.750 of SSA" for 3,750 g (typo).
