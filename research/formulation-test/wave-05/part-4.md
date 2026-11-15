# Wave 5, part 4 (F0461-F0480)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the source finder; this part worked from those files only.

## F0461 tiagabine hydrochloride (monohydrate), film-coated IR, high-shear melt granulation (listed: direct compression, 5 mg), 10 mg

Source: EP 0 830 132 B1 (Novo Nordisk), Example 3 [0037]-[0040], https://data.epo.org/publication-server/rest/v1.2/patents/EP0830132NWB1/document.pdf. Close variant: melt granulation with PEG 6000 (direct compression is only named as an alternative, with no example); 10 mg strength.

- Per tablet: tiagabine HCl monohydrate 11.5 mg (= 10 mg tiagabine; factor 1.145 matches the monohydrate/base molecular weights 430.0/375.5), PEG 6000 20.0, alpha-tocopherol 1.10, talc 16.0, anhydrous lactose to 320 mg (about 271.4).
- Process: API, tocopherol, PEG and lactose blended in a high-speed mixer and melt-granulated; cooled; blended with talc; compressed. Low-water excipients (anhydrous lactose, dried by heating if needed).
- Coat for light protection at 5 mg/cm2: about 4.34 mg HPMC, 5.20 PEG 6000 and 1.73 TiO2 per tablet in water; talc polish at 0.5 % of core weight (uptake not quantified).
- Batch 1,000,000 tablets (320 kg). Standard practice assumed: melt temperatures and times, screen sizes, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | coat solids = 5 mg/cm2 x tablet surface area from the tooling record (round-3 per-area coat dosing) |
| T8 | FITS WITH SETTING | polishing talc = 0.5 % of the recorded core batch weight (T8 '% of' a recorded weight; round 3) |

Note: The same "tablet strength" row is on two bases in this patent: Example 1 has 8 mg with 8.35 mg monohydrate (factor 1.044, anhydrous HCl basis), Example 3 has 10 mg with 11.5 mg (factor 1.145, base basis). See the safety reminders.

Counts: 139 rows; FITS 135, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0462 abemaciclib, film-coated IR, continuous line, 150 mg

NO SOURCE: no formulation patent or report was found; the EU product information gives only the lactose amount (42 mg) and names the other excipients, with no process. Not counted.

## F0463 chlorambucil, film-coated IR, direct compression (listed: fluid-bed wet granulation), 2 mg

Source: US 2004/0034099 A1 (SmithKline Beecham), Example 2, Table A2 [0069]-[0081], https://patents.google.com/patent/US20040034099A1/en (footnotes from the second copy, https://eureka.patsnap.com/patent-US20040034099A1). Close variant: direct compression; the patent says the earlier product was wet-granulated.

- Per tablet: chlorambucil 2.10 mg (includes a declared 5 % overage), MCC 29.00, anhydrous lactose 67.65, colloidal silica 0.25, stearic acid 1.00; core 100.0 mg. Coat: Opadry brown 3 mg as a 12 % w/w suspension in ethanol 96 % (9.8 mg) and water (12.2 mg), both removed.
- Process: excipients and API screened (typically 850 um) into a tumble blender, 30 min (20-40); stearic acid 2 min (2-5); 6.5 mm standard concave tooling with IPC for weight, uniformity, hardness, friability and DT.
- Coating: suspension stirred at least 45 min; pan warmed to an exhaust of at least 30 C, sprayed at about 32 C (28-36 C) until 2.5-3.0 % theoretical dry coat, dried 10-20 min at 30-40 C.
- Batch 1,000,000 tablets (100 kg) in a contained suite. Standard practice assumed: 2-8 C storage of API and bulk (the marketed tablet is refrigerated), BU limits, pan settings.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | theoretical dry coat applied = suspension sprayed x 12 % solids / core batch weight, stop within 2.5-3.0 % (T8 product of readings) |

Note: In the Google text the footnote markers run into the numbers (2.101, 32, 9.82,3 for 2.10, 3 and 9.8). See the safety reminders.

Counts: 128 rows; FITS 125, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0464 megestrol acetate, uncoated IR, single-pot wet granulation, 160 mg

NO SOURCE: the only example (US 3,356,573 A, Example 19) is a 0.5 mg tablet in a 1967 synthesis patent, 320 times below the listed strength, with Mg stearate and starch paste only "q.s."; a record would need invented numbers (weak variant, treated as NO SOURCE). Not counted.

## F0465 olaparib, film-coated IR, hot-melt extrusion (copovidone dispersion), 150 mg

Source: EP 2 346 495 B1 (AstraZeneca / KuDOS), sections 4.6.2 and 4.8, Table 17 [0118]-[0120], https://data.epo.org/publication-server/rest/v1.2/patents/EP2346495NWB1/document.pdf; barrel temperature range from EP 4 108 236 A1 (Sinotherapeutics) [0067], https://data.epo.org/publication-server/rest/v1.2/patents/EP4108236NWA1/document.pdf. Close variant: Table 17 gives 25 and 100 mg (Table 13 an uncoated 200 mg) at the same %; 150 mg = 600 mg core by T8.

- Core (% of core): olaparib 25.00, copovidone 57.50, colloidal silica 1.83 (extruded together); mannitol 14.67 and sodium stearyl fumarate 1.00 (added to the milled extrudate); 600 mg core for 150 mg.
- Process: API, copovidone and silica blended, twin-screw extruded with vacuum degassing, calendered between counter-rotating rolls, cooled, milled, blended with mannitol and SSF, compressed on a rotary press (at least 25 N).
- Coat: Opadry green at 130 g/kg in water, 35 g per kg of cores (3.5 %; HPMC 62.5 %, TiO2 25.05 %, PEG 400 6.25 %, iron oxides 6.2 %), 21 mg per tablet.
- Batch 200,000 tablets (120 kg core). Standard practice assumed: extruder set points (source 2 gives 120-190 C for a related olaparib extrudate), mill screen, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | 150 mg strength: quantities from the Table 17 % of core for a 600 mg core (T8 % w/w mode) |
| T8 | FITS WITH SETTING | expected extrudate = feed rate x run time (T8 rate x time) |
| T18 | FITS WITH SETTING | extrudate per tablet from its assay (T18 content from an in-process result; known, wave 1), limited to a band as T9 was applied at dispensing |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | Opadry = 35 g per kg of the recorded core weight (T8 '% of' a recorded weight; round 3) |

Counts: 146 rows; FITS 140, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0466 pirtobrutinib, film-coated IR, spray-dried dispersion then slugging, 100 mg

Source: WO 2020/028258 A1 (Loxo Oncology), Examples 4-8, Tables 18 and 20 (typed copy checked against the page images), https://patents.google.com/patent/WO2020028258A1/en and https://patentimages.storage.googleapis.com/ad/6d/64/6897ed43069ea1/WO2020028258A1.pdf

- SDI: pirtobrutinib and HPMCAS-MG 50:50 on the pure-API basis (lab run: 995 g API corrected for its 98.8 % assay with 984 g polymer). Scale-up D: 5.9 kg API and 5.9 kg HPMCAS in 62.0 kg methanol, dried 21 h in an oven at 40 C / 15 % RH to methanol below 0.3 %, 9.96 kg SDI (84 %).
- Blend B (% of final blend): SDI 43.76, MCC PH101 25.41, mannitol M100 25.41, SSG 2.43, Mg stearate 0.24 (intragranular, 97.25 %); SSG 2.50 and Mg stearate 0.25 extragranular.
- Process: half the fillers, the SDI and SSG, the other half; Turbula (V-blender at scale), 850 um, again, Mg stearate; slugged on 0.7 inch flat tooling at 2,200 psi, broken and sieved 1 mm then 850 um until all passes; extragranular blend 5 min, 850 um, 5 min, Mg stearate 2 min; 0.3750 inch round tooling; coated with 15 % Opadry in water.
- The tablet weight is not stated: 100 mg / (0.9725 x 0.45 x 0.5) = 457 mg core. Batch 100,000 tablets (about 45.7 kg; two SDI runs). Standard practice assumed: spray-dryer set points (image tables not typed), slugging at scale, hardness, 3 % coat gain.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | solids sprayed = solution sprayed x solids fraction, the base of the SDI yield (T8 product of readings) |
| T18 | FITS WITH SETTING | SDI per tablet from its assay (T18 content from an in-process result; known, wave 1), limited to a band as T9 was applied at the spray solution |
| T10 | FITS WITH SETTING | MCC PH101 and mannitol M100 take the SDI excess in a 1:1 ratio (T10 spread over two fillers; v2 setting) |
| C1 | FITS WITH SETTING | slugging force 2,200 psi on 0.7 inch flat tooling (psi unit; known, wave 1) |
| F2 | FITS WITH SETTING | break slugs and sieve 1 mm then 850 um until everything passes (F2 with C4 each round; known, wave 1) |
| T8 | FITS WITH SETTING | target core weight = 100 mg / (0.9725 x 0.45 x SDI assay fraction), about 457 mg (T8 product of readings) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 18 already gives the intragranular lines as % of the final blend. Multiplying 43.76 % again by the 97.25 % intragranular share gives 470 mg instead of 457 mg (see the safety reminders).

Counts: 192 rows; FITS 184, FITS WITH SETTING 8, NEW SETTING 0, GAP 0.

## F0467 ponatinib hydrochloride, film-coated IR, high-shear wet granulation, 45 mg

NO SOURCE: the patents found cover crystal forms or uses only; the EU product information gives only the lactose amount (120 mg per 45 mg tablet). Not counted.

## F0468 sorafenib tosylate, film-coated IR, high-shear wet granulation (listed: direct compression), 200 mg

Source: EP 1 868 579 B1 (Bayer), Example 1, Tablet C [0091]-[0094], https://data.epo.org/publication-server/rest/v1.2/patents/EP1868579NWB1/document.pdf. Close variant: high-shear granulation; direct compression is only named as an alternative.

- Core: sorafenib tosylate micronised 274.0 mg (= 200 mg base; factor 1.370 matches 637.0/464.8), MCC 16.0, croscarmellose 36.4 (part in the granule, part added after), HPMC 5 cP 10.2, Mg stearate 1.70-2.55, SLS 1.7; 340.0-340.85 mg.
- Process: dry mix 2 min in a high-shear mixer, granulate with SLS in water to a "snow ball" end point, 4 mm rasp, fluid-bed dry at 80-100 C inlet to LOD 0.3-0.7 %, 2 mm sieve; tumble 5-10 min with Mg stearate and croscarmellose; rotary press; above 100 N, water below 1.5 %.
- Coat (alternative i): HPMC 6.00, PEG 3350 2.00, TiO2 1.73, red iron oxide 0.27 mg in water (fixed ratio; 8-12 mg).
- Batch 300,000 tablets (about 102 kg). Plant choice: Mg stearate fixed at 2.55 mg, croscarmellose split 50:50. Standard practice assumed: water amount, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The Mg stearate range is left to "manufacturing conditions"; the master fixes one value (known wave-1 formula-range rule).

Counts: 162 rows; FITS 160, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0469 methazolamide, uncoated IR, fluid-bed wet granulation, 50 mg

NO SOURCE: US labels list excipient names only; no patent or article with amounts and process. Not counted.

## F0470 aceclofenac + thiocolchicoside, film-coated bilayer, direct compression, 100 mg + 4 mg

NO SOURCE: nothing for this pair; the nearest patent (EP 3 173 077 B1) is nimesulide + thiocolchicoside in one layer, and the only paper on the combination tablet is an HPLC method. Not counted.

## F0471 hydromorphone hydrochloride, push-pull osmotic tablet with plant colour coat (listed: 8 mg), 35 mg

Source: EP 0 769 949 B1 (ALZA), Example 3 [0014]-[0019], https://data.epo.org/publication-server/rest/v1.2/patents/EP0769949NWB1/document.pdf. Close variant: 35 mg per unit; the drug layer is alcohol-granulated in a planetary mixer (high-shear here); no colour coat in the source.

- Drug layer 176 mg: hydromorphone HCl 35.20, PEO 200,000 130.24, PVP 8.80, Mg stearate 1.76 (batch 175 / 647.5 / 43.75 / 8.75 g, wetted with 331 g denatured anhydrous alcohol, 20 mesh, dried 20 h at room temperature, 16 mesh).
- Push layer 135 mg: PEO 7,000,000 85.96, NaCl 40.50, HPMC 6.75, red ferric oxide 1.35, Mg stearate 0.34, BHT 0.10. NaCl milled 21 mesh, oxide 40 mesh, fluidised with PEO and 2.5 kg HPMC, sprayed at 800 g/min (inlet 43 C, 4,300 m3/h) with 3.91 kg HPMC in 45.34 kg water plus 101 g BHT in 650 g alcohol, of which 45,033 g sprayed; dried 35 min, milled 8 mesh, Mg stearate 281.7 g.
- Bilayer at 3 t on 11/32 inch tooling; wall 38.6 mg cellulose acetate (39.8 % acetyl) from 4 % in acetone:water 95:5; one 0.508 mm orifice on the drug face; dried 72 h at 45 C / 45 % RH, then 4 h at 45 C.
- Batch 880,000 units (one push granulation of about 120 kg; drug layer in four sub-batches). Plant choice: HPMC colour coat at 3 %. Standard practice assumed: press and laser settings, IPC and release-rate limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | drug-layer granule per tablet from its assay (T18 content from an in-process result; known, wave 1), limited to a band |
| T8 | FITS WITH SETTING | push solids applied = binder solution sprayed (45,033 g of 50,000 g made) x its solids fraction, the base of the theoretical push-granule weight (T8 product of readings) |
| C1 | FITS WITH SETTING | drug-layer fill weight within +/- % of the T18 target (C1 limits around a computed value) |
| C1 | FITS WITH SETTING | layer press force 3 metric tons (round-3 unit kgf, x 1,000) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T13 | FITS WITH SETTING | 72 h at 45 C / 45 % RH counted only while both are inside limits (T13 time inside limits; v2 setting) |

Note: The per-unit push composition matches the batch only on the 45,033 g of binder actually sprayed (85.96 mg PEO, 6.77 mg HPMC, 0.10 mg BHT); the full 50,000 g made up would give 85.67 mg PEO and 7.19 mg HPMC.

Counts: 246 rows; FITS 239, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0472 morphine sulfate (pentahydrate), ER hydrophobic matrix of melt-granulated particles, plant film coat (listed: 30 mg), 60 mg

Source: EP 0 636 370 B1 (Euro-Celtique), Examples 9-13 and Table VI, tablet 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP0636370NWB1/document.pdf. Close variant: 60 mg uncoated tablet; the film coat is a plant choice.

- Particles (Example 13): morphine sulfate 55.0 %, hydrogenated vegetable oil 44.7 %, PEG 6000 0.3 %; per tablet 60.00 + 48.77 + 0.33 = 109.1 mg; tablet 1 adds Mg stearate 1.42 and talc 2.18 (112.7 mg); 7.1 mm normal concave.
- Particles (Examples 9-12 process): about 20 kg in a 75 L heated high-speed mixer (bowl about 60 C), 150-350 rpm until agglomerated; classified through a mill; re-warmed with a second wax portion (about 15 min) until particles of the set size form, yield above 80 %; sieved 0.5-2 mm; cooled.
- Blended with Mg stearate and talc in a Y-cone or bin blender and compressed.
- Batch 500,000 tablets (three 20 kg particle sub-batches). Plant choice: wax split as in Example 9 (about 78:22); HPMC colour coat 3 % with the bed well below the wax melting range. Standard practice assumed: hardness, IPC, dissolution limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | Ph. Eur. assay on the anhydrous basis while the line names the sulfate pentahydrate: hydrate-to-anhydrous factor then water correction allowed, the reverse refused (C5 hydrate-labelled chain; known, wave 1) |
| T18 | FITS WITH SETTING | particles per tablet from the 0.5-2 mm fraction's assay (T18 in-process content; known wave 3 size-fraction rule) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Compression slows release a lot (particles 88 % at 12 h, tablet 1 50 %), so the force and hardness limits are release-critical. The source says "morphine sulphate" without naming the hydrate.

Counts: 141 rows; FITS 137, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0473 nefopam hydrochloride, orally disintegrating tablet from drug-layered, taste-masked pellets (listed: film-coated, roller compaction), 30 mg

Source: EP 3 854 386 B1 (Athena Pharmaceutiques), Example 1, Table 1 and [0047]-[0054], https://data.epo.org/publication-server/rest/v1.2/patents/EP3854386NWB1/document.pdf

- Drug pellets: non-pareils 250-355 um 97.0 mg layered with nefopam HCl 30.0 and HPMC 8.0 from IPA and water; taste-mask coat Eudragit NE 30D 30.6 (as dry polymer: only then do the lines add to 350 mg), HPMC 7.65, colloidal silica 6.75 from water.
- Outer phase: mannitol 13.00, MCC 105.00, crospovidone 35.00, sucralose 7.00, silica 3.50, orange flavour 3.00, Mg stearate 3.50; 350.00 mg.
- Process: fluid-bed drug layering, dry, sift; fluid-bed taste-mask coat, dry, sift; blend with the sifted outer phase, lubricate, compress. IPC: 20 tablets 7.00 g, 4.0 mm, 35 N, DT not more than 3 min without disc, friability not more than 1.0 %; Alu-Alu blister.
- Batch 300,000 tablets (105 kg). Standard practice assumed: Wurster settings, coat curing, sieve sizes, IPC ranges.

| Template | Result | Step |
|---|---|---|
| T5 | FITS WITH SETTING | taste-mask coat gain on the drug-pellet weight (T5 base: a named earlier stage; round 3) |
| T18 | FITS WITH SETTING | taste-masked pellets per tablet from their assay (T18 content from an in-process result; known, wave 1), limited to a band |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source also "mills" the pellets after each coating, which would break a taste-mask coat; read here as de-lumping.

Counts: 174 rows; FITS 170, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0474 nimesulide, dispersible (source: orodispersible) IR, direct compression, 100 mg

Source: Malik K, Arora G, Singh I. Int J Pharm Investig 2011;1(3):192-198 (PMC3465134), Table 1 batch B4 (checked against the table image) and Methods, https://europepmc.org/article/PMC/PMC3465134. Close variant: orodispersible tablet, lab batches of about 300 tablets.

- Per tablet (B4): nimesulide 100 mg, croscarmellose 25, Avicel PH101 120, talc 2.5, Mg stearate 2.5; 250 mg (the A batches use powdered Lallemantia seed in place of croscarmellose).
- All through 60 mesh, mixed, compressed on 8.40 mm flat-faced punches, die and punch faces also dusted with Mg stearate. Across batches: hardness 2.84-4.80 "kg/cm2", friability 0.24-0.59 %, tensile strength 0.46-0.76 MN/m2, DT 12-20 s.
- Batch 1,000,000 tablets (250 kg). Standard practice assumed: blend times, BU, press settings, dispersible tests (disintegration in water at 15-25 C within 3 min, fineness of dispersion).

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness printed as 4-5 kg/cm2, recorded as kgf (round-3 unit kgf) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 89 rows; FITS 86, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0475 tramadol hydrochloride + dexketoprofen trometamol, film-coated IR, fluid-bed granulation (listed: direct compression), 75 mg + 25 mg

Source: EP 2 956 129 B1 (Menarini), Example 4 [0078]-[0081] (Examples 1-3 for detail), https://data.epo.org/publication-server/rest/v1.2/patents/EP2956129NWB1/document.pdf. Close variant: fluid-bed granulation.

- Per tablet: dexketoprofen trometamol 36.90 (= 25.0 mg dexketoprofen; factor 1.476 matches 375.4/254.3), tramadol HCl 75.00, MCC 179.70, pregelatinised maize starch 29.20, croscarmellose 11.02 inner + 22.04 outer, SSF 1.83, colloidal silica 7.37; core 363 mg +/- 2 %; PVA coat 7.30 mg; 370 mg.
- Process: APIs, MCC and inner croscarmellose sieved 1.0 mm into the fluid bed; starch slurry stirred about 60 min; granulated, dried to LOD 2.5-3.5 %, sieved 1.0 mm, mixed 10 min with outer croscarmellose and silica; second 100 kg sub-batch the same; SSF added to both; 14 x 6 mm oblong, 115-150 N, DT under 5 min.
- Batch as in the source: 223 kg, about 602,700 tablets, two granulation sub-batches. Standard practice assumed: fluid-bed and coater settings, BU limits.

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | MCC takes the excess of both potency-adjusted APIs (T10 several adjusted materials into one filler; v2 setting) |
| T18 | FITS WITH SETTING | core weight set from the controlling API's blend assay; the other API checked at that weight (two APIs on one tablet weight; known, wave 2) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The batch column swaps two lines (SSF 4.442 kg, silica 1.103 kg); the per-tablet column (1.83 and 7.37 mg) gives 1.103 kg SSF and 4.442 kg silica. Batch quantities come from T8, never from the source's batch column.

Counts: 179 rows; FITS 175, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0476 amfetamine sulfate, orodispersible IR, taste-masked microcapsules in a common blend, direct compression with external lubrication, 5 mg

Source: US 11,160,772 B2 (Adare Pharma), Examples 3-4 and Tables 9-12 (text via TREA), https://trea.com/information/oral-amphetamine-composition/patentgrant/d4e6113c-97eb-4f76-b17f-7cbf3d864595. Close variant: drug microencapsulated and coated before a direct-compression blend; 5 mg is one of the dose-proportional strengths from the common blend.

- Microcapsules (48 kg): mannitol 32.2 kg, racemic amphetamine sulfate 11.04 kg and ethylcellulose 100 cP 4.80 kg in 125 gallons of cyclohexane with polyethylene 6.0 kg (phase-separation aid, rinsed out); heated to 80 C, cooled to 30 C at 75 rpm; rotary vacuum filter, fluid-bed dried, 20 mesh.
- Taste-mask coat (56 kg batch): Eudragit EPO 5.6, ethylcellulose 10 cP 5.6, dibutyl sebacate 1.4 and Mg stearate 1.4 kg in acetone 113.4 and water 12.6 kg; 18 inch Wurster, 600 cfm, 45 C, 550 g/min, product 29-31 C; 20 and 120 mesh.
- Blend (124 kg): coated microcapsules 29.0 %, mannitol/crospovidone 95:5 granules 53.4 %, silicified MCC 10.0 %, crospovidone 5.0 %, citric acid 1.3 %, malic acid 0.7 %, sucralose 0.6 % (5.0 % amphetamine sulfate); 21 min at 10 rpm.
- Compression with Mg stearate sprayed on punches and dies at about 3.0 g/min; de-duster and metal detector. 30 mg = 600 mg, so 5 mg = 100 mg. Batch: one 124 kg blend, about 1,240,000 tablets. Standard practice assumed: 5 mg tooling, force, hardness and friability limits.

| Template | Result | Step |
|---|---|---|
| T17 | NEW SETTING | cyclohexane charged as about 125 US gallons and converted to mass by density: US gallon not in the unit list, and an imperial gallon is 20 % larger (variant of the unit list) |
| T8 | FITS WITH SETTING | polyethylene at 1.6 % w/w of the solvent mass (T8 '% of' a recorded weight; round 3) |
| C1 | NEW SETTING | process air volume 600 cfm (472-800 cfm): cubic feet per minute not in the unit list (variant of the unit list) |
| T5 | FITS WITH SETTING | coat level 25 % of the coated Microcaps (T5 base: final weight; round 3) |
| T18 | FITS WITH SETTING | coated Microcaps quantity for a 5.0 % blend from their assay (T18 content from an in-process result; known, wave 1), limited to a band |
| C1 | FITS WITH SETTING | conical mill drive at about 60 Hz (Hz unit; known, wave 3) |
| T8 | FITS WITH SETTING | 5 mg tablet weight = 5 mg / blend assay, about 100 mg (one blend for several strengths; known, wave 3) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The theoretical microcapsule content (23.0 % amphetamine sulfate) leaves out the rinsed-out polyethylene; on the charged total (54.04 kg) it would be 20.4 %. See the safety rule.

Counts: 199 rows; FITS 190, FITS WITH SETTING 7, NEW SETTING 2, GAP 0.

## F0477 clozapine, scored IR, roller compaction, 100 mg

NO SOURCE: only a suspension, ER pellet capsules and the ODT paper already used for F0379 were found; IR generic labels give excipient names only. Not counted.

## F0478 desvenlafaxine succinate (monohydrate), ER hydrophilic matrix, high-shear granulation (listed: direct compression, film-coated, 50 mg), 75 mg

Source: EP 1 360 169 B1 (Wyeth), Example 15, ODV succinate formulation #2 [0168]-[0169], https://data.epo.org/publication-server/rest/v1.2/patents/EP1360169NWB1/document.pdf. Close variant: 75 mg (as base), wet granulated, uncoated; film coat is a plant choice. EP 3 677 254 B1 (direct compression, lipid/PVA matrix, % only) was not used.

- Per tablet: ODV succinate 113.81 mg (= 75.00 mg base), HPMC 2208 100,000 cP 170.44, MCC PH200 7.50, talc 6.75, Mg stearate 1.50; the lines add to 300.0 mg (stated total 295.44).
- Process: API through 400 um, dry mixed with HPMC, MCC and talc in a high-shear mixer, granulated with water, dried in an oven or fluid bed, blended with more HPMC and talc, then Mg stearate, compressed (the HPMC and talc split is not given).
- Batch 300,000 tablets (90 kg). Plant choice: HPMC and talc 80:20 inside/outside, HPMC film coat 3 %. Standard practice assumed: water amount, drying limits, IPC and ER dissolution limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | factor 1.517 from the succinate monohydrate and base MWs; the patent's other line (116.70 mg = 1.556) is refused as a typed factor matching no form (known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The core target is the T2 sum (300.0 mg), not the stated 295.44 mg; see the safety reminders.

Counts: 141 rows; FITS 138, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0479 diazepam, scored IR, roller compaction, 5 mg

NO SOURCE: only microemulsion and buccal-spray patents and excipient lists were found; no tablet formula with process. Not counted.

## F0480 mirtazapine (hemihydrate), orally disintegrating, ethanolic wet granulation (listed: pellets compressed), 15 mg

Source: EP 2 377 522 B1 (Sanovel), Example 1 [0045]-[0047] and Table 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP2377522NWB1/document.pdf. Close variant: drug granulated with mannitol, no pellets; % w/w only.

- % w/w: mirtazapine hemihydrate 4.84, sucralose 0.20, orange flavour 1.00, MCC CE-15 5.00, mannitol 48.13, MCC PH-301 23.77, crospovidone 15.00, BHA 0.03, BHT 0.03, SSF 2.00.
- Process: BHA and BHT dissolved in alcohol; API and two thirds of the mannitol sieved, mixed, granulated with the solution, wet sieved, dried, milled; rest of the mannitol, crospovidone, MCC, sucralose and flavour added; SSF; compressed. Table 1: 38 N (20-50 N), friability 0.48 %, DT 12 s, content 14.925 mg (14.25-15.75).
- Plant choice: 310 mg tablet (15 mg as hemihydrate at 4.84 %). Batch 500,000 tablets (155 kg). Standard practice assumed: ethanol amount, drying limits, tooling, IPC.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | strength basis named: 15 mg as mirtazapine hemihydrate (source Table 1); an anhydrous label needs T11 1.034 (known, wave 1 label basis) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 1 states the content as hemihydrate; if the 15 mg label is anhydrous mirtazapine (factor 1.034) the tablet would be 320 mg.

Counts: 132 rows; FITS 129, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## Totals for F0461-F0480

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0461 | 139 | 135 | 4 | 0 | 0 |
| F0463 | 128 | 125 | 3 | 0 | 0 |
| F0465 | 146 | 140 | 6 | 0 | 0 |
| F0466 | 192 | 184 | 8 | 0 | 0 |
| F0468 | 162 | 160 | 2 | 0 | 0 |
| F0471 | 246 | 239 | 7 | 0 | 0 |
| F0472 | 141 | 137 | 4 | 0 | 0 |
| F0473 | 174 | 170 | 4 | 0 | 0 |
| F0474 | 89 | 86 | 3 | 0 | 0 |
| F0475 | 179 | 175 | 4 | 0 | 0 |
| F0476 | 199 | 190 | 7 | 2 | 0 |
| F0478 | 141 | 138 | 3 | 0 | 0 |
| F0480 | 132 | 129 | 3 | 0 | 0 |
| **Total (13)** | **2,068** | **2,008** | **58** | **2** | **0** |

Counted 13 formulations, 2,068 rows: FITS 2,008, FITS WITH SETTING 58, NEW SETTING 2, GAP 0. NO SOURCE 7 (F0462, F0464, F0467, F0469, F0470, F0477, F0479).

New settings (no gaps):
- Units: US customary process units (F0476), a variant of the unit list, like psi (wave 1) and Hz (wave 3). The commercial Wurster run records process air volume in cfm (600 cfm, 472-800). The coacervation solvent is charged in US gallons (about 125 gal cyclohexane), which are turned into mass by density for the 1.6 % w/w polyethylene level. The unit list needs cfm (with scfh), converted to m3/h, and a US gallon marked as US. An imperial gallon is 20 % larger: 442.7 kg instead of 368.6 kg of cyclohexane, which would move the polyethylene level from 1.63 % to 1.36 %. The lab spray-dried dispersion in F0466 also uses inHg (vacuum gauge) and scfh (nitrogen purge). The outlined record does not use them, because the scale-up dries without vacuum.
- Everything else uses existing settings or known findings: C1 limits around a computed value, T5 loss mode and base options, T8 % w/w, rate x time, product of readings and "% of" a recorded weight, T10 several materials and two fillers, T13 time inside limits, T18 in-process content, per-area coat dosing, psi, kgf, Hz, the C5 hydrate-labelled chain, one blend for several strengths, two APIs on one weight, the size-fraction rule.

Safety rules:
- New (it sharpens the known wave-2 rule that weights name their stage): solid processing aids that leave the product (F0476). Polyethylene is charged at 6.0 kg with the 48 kg of microcapsule solids and rinsed out afterwards. Only 0.4-1.25 % is left, and that residue is checked with C1. The master must flag such a material as "removed": the intermediate's theoretical content (T2) leaves it out, and the yield (T3) and the reconciliation (T4) are based on the retained solids. On the charged total, the theoretical content is 20.4 % instead of 23.0 % amphetamine sulfate. Microcapsules dosed on that number would put about 12.5 % too much drug into each tablet. The same applies to washed-out pore formers and sublimed agents. Normally the content is taken from the measured assay (known, wave 1); the flag stops the wrong theoretical value being used as the band centre or the yield base.
- Reminder, known wave-1 basis rule (F0466), size 2.8 %: a % given "of the final blend" for an intragranular line must not be multiplied again by the intragranular share. That gives a 470 mg instead of a 457 mg core, so about 2.8 % more drug per tablet.
- Reminder, known label basis (F0461, F0471, F0480): one patent gives "tablet strength" on two bases (tiagabine 8 mg on the anhydrous hydrochloride basis, 10 mg on the base basis). A master copied across strengths would be 9.7 % off. Hydromorphone "35.20 mg of hydromorphone" is the hydrochloride, a 12.8 % difference if read as base. Mirtazapine 15 mg as hemihydrate against anhydrous is 3.4 %.
- Reminder, known C5 hydrate rule (F0472): morphine sulfate is the pentahydrate, and the Ph. Eur. assay is on the anhydrous basis. A water correction applied to a quantity that already names the pentahydrate counts the water twice: 13.5 % too much morphine.
- Reminder, known typed-factor rule (F0478): 116.70 mg ODV succinate for 75 mg base (factor 1.556) matches no form. The monohydrate factor is 1.517 (113.76 mg), so the typed factor gives 2.6 % too much.
- Reminder, known stated-total rule (F0478): formulation #2 lines add to 300.0 mg but the stated total is 295.44 mg. Compressing at the stated total gives 1.5 % less drug.
- Reminder, known declared-overage rule (F0463): the 2.10 mg line already includes a 5 % overage. Entered as the label quantity with a T16 5 % added on top, it would carry 10.25 %. The master enters 2.00 mg plus T16 5 %.
- Reminder, known unit-error class (F0463): some text copies run footnote markers into the values ("32" for 3 mg Opadry plus footnote 2, "2.101" for 2.10 plus footnote 1). A coat line typed as 32 mg would be 10.7 times the coat. Values are taken from the patent itself or checked against the stated totals.
- Reminder (F0475): the batch quantities come from T8 on the per-tablet column. The source's batch column swaps the lubricant and the glidant (SSF at 2.0 % instead of 0.5 % of the blend), which changes the dissolution, not the dose.

Sources that contradict themselves:
- EP 0 830 132 B1 (F0461): "tablet strength" 8 mg = 8.35 mg monohydrate (anhydrous HCl basis), but 10 mg = 11.5 mg monohydrate (base basis).
- WO 2020/028258 A1 (F0466): the Table 18 column C intragranular lines add to 97.26 %, but Table 20 gives 97.25 %. The Table 19 footnote says 8 % API, but 35 % x 45 % SDI x 50 % = 7.875 %. No tablet weight is stated for any strength.
- EP 1 868 579 B1 (F0468): Tablet D (696.7 mg) carries Tablet C's total-weight range (348.0-352.85 mg). Used as limits, it would reject every tablet.
- EP 0 769 949 B1 (F0471): a mean release of 1.6 mg/h over 28 h is 44.8 mg from a unit that holds 35.2 mg. "35.20 mg of hydromorphone" is the hydrochloride. The sprayed binder is printed "45.033 g" for 45,033 g. The push layer has "2500 g" of HPMC powder and also "2.5 kg of the HPMC solution". The per-unit Mg stearate (0.34 mg) does not match the batch (0.32 mg).
- EP 3 854 386 B1 (F0473): the pellets are "milled" after drug layering and again after taste-masking. The process steps point to "step b" where step c is meant. The Eudragit NE 30D line is not marked as dry polymer, although only that reading adds up to 350 mg.
- Int J Pharm Investig 2011;1:192 (F0474): it uses a +/- 5 % weight limit at 250 mg, where the IP allows +/- 7.5 %. Hardness is given in kg/cm2. Mg stearate is both in the formula and dusted on the tooling.
- EP 2 956 129 B1 (F0475): the Example 4 batch column swaps SSF (4.442 kg) and silica (1.103 kg) against the per-tablet column. Friability is stated as "not more than 0.05 %".
- US 11,160,772 B2 (F0476): Example 4 gives the process air as "450 C" (45 C, 30-60 C, in Example 3). The coating-solution agitator runs at 750 +/- 25 rpm in Example 3 and 250 +/- 25 rpm in Example 4 for the same step. The robustness text gives a 54 C inlet target against 45 C in the set-up table.
- EP 1 360 169 B1 (F0478): 75 mg base appears as 113.81, 113.9 and 116.70 mg of ODV succinate. Formulation #2 lines add to 300.0 mg, but the stated total is 295.44 mg (the capsule's total). The capsule tables are headed "mg per tablet".
- EP 2 346 495 B1 (F0465, minor): the 100 mg coat lines add to 14.01 mg against 14.00 mg (rounding).
