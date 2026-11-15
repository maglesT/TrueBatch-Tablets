# Wave 1, part 4 (F0061-F0080)

Each section lists only the rows that are not plain FITS. The counts include every row of the outlined master batch record.
When a source gives a batch in grams and no tablet count, the tablet weight below is worked out from the listed strength, and the text says so.

## F0061 busulfan, film-coated IR, fluid-bed wet granulation

NO SOURCE. Labels (Myleran SmPC) give only the excipient names and lactose 92.5 mg per tablet. No patent or article with a full formula and process was found. Not counted.

## F0062 capmatinib dihydrochloride, film-coated IR (listed: direct compression; source: wet granulation)

Source: US 10,085,993 B2 (Novartis), Example 1 Table 1b and Example 2, https://patents.google.com/patent/US10085993B2/en. Close variant: the patent rejects dry processes because of the drug's very low bulk density (0.085 g/mL). It uses water wet granulation.

- 200 mg strength: dihydrochloride 235.4 mg (the patent states a salt factor of 1.177), mannitol 200, MCC PH101 202.6, SLS 2, crospovidone 50 intra-granular, PVP K30 40 (intra-granular 730 mg). Extra-granular: MCC 207.5, crospovidone 50, colloidal silica 5, Mg stearate 7.5. Core 1,000 mg, coat 26 mg (Opadry-type premixes), 1,026 mg in total. The columns add up.
- Process: sieve and blend, granulate with water, dry, sieve, add the sieved external phase, lubricate, compress, film-coat.
- Batch 150,000 tablets (150 kg core). Standard practice assumed: drying LOD limit, sieve sizes, IPC limits, coat solids %, cytotoxic containment.

| Template | Result | Step |
|---|---|---|
| T11 | NEW SETTING | a salt factor typed from the dossier (1.177) is checked against the molecular weights of the form actually weighed. The marketed form is the monohydrate, factor 1.220 (183.00 mg per 150 mg). The step is refused if they differ beyond rounding |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 72 rows; FITS 69, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0063 everolimus, uncoated IR, solid dispersion (listed: spray drying; source: fluid-bed spray granulation of an ethanolic dispersion)

Source: CN 108125918 B, SD example 1 and Tablet example 3, https://patents.google.com/patent/CN108125918B/en. Close variant: the solvent dispersion is sprayed onto a fluidised lactose/crospovidone bed instead of being spray-dried.

- SD1 per 5 mg everolimus: BHT 0.015, PEG 1500 4, an alkanol 0.075, colloidal silica 1.5, all dispersed in absolute ethanol at 10 % solids and sprayed onto lactose 40 + crospovidone 10 (both through 150 mesh). The granules pass 24 mesh with more than 80 % between 50 and 120 mesh. Angle of repose 24°.
- Tablet 3, direct compression to 150 mg: SD equal to 5 mg active, croscarmellose 10 %, PVP 3 %, calcium stearate 0.8 % of tablet weight, MCC to make up 150 mg (about 68.7 mg by difference).
- Used: 5 mg strength (listed 10 mg). Batch 500,000 tablets (75 kg). Standard practice assumed: blend times, IPC limits, residual ethanol limit, cytotoxic containment.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | SD quantity from the SD lot's in-process everolimus content (same batch), not a CoA |
| T8 | FITS WITH SETTING | croscarmellose, PVP and calcium stearate as % of the target tablet weight |
| T10 | FITS | MCC to make up the weight absorbs any change in SD quantity |
| T6 | FITS WITH SETTING | angle of repose of the SD granules |
| - | FITS WITH SETTING | BHT 7.5 g per batch weighed against the balance minimum weight from the equipment record |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the patent says 10 L of suspension serves 100,000 tablets of 5 mg. At 10.59 mg solids per tablet and 10 % solids this is 10.6 kg, about 13 L of ethanol suspension (minor, the figure is approximate).

Counts: 70 rows; FITS 64, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0064 flutamide, uncoated IR, wet granulation (single-pot assumed)

Source: US 4,474,813 A, representative tablet formulation, https://patents.google.com/patent/US4474813A/en

- Per tablet: flutamide 250, anhydrous lactose 221.7, SLS 15, MCC 100, starch 162.5, silica gel 0.4, Mg stearate 0.4; 750.0 mg (it adds up). Water is listed as "(0.29)" and evaporates.
- The patent says only "wet granulation, compress by standard techniques". Single-pot granulation with vacuum drying is standard practice here, as are the water quantity per batch, the drying endpoint, the IPC limits and the containment for a potent anti-androgen.
- Batch 300,000 tablets (225 kg).

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the water line has no unit that makes sense. 0.29 mg per 750 mg tablet (0.04 %) is far too little to granulate. The master needs the real quantity of granulating liquid.

Counts: 62 rows; FITS 60, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0065 gilteritinib hemifumarate, film-coated IR (listed: DC 40 mg; source: fluid-bed granulation 10 mg)

Source: US 12,178,814 B2 (Astellas), Example 1, https://patents.google.com/patent/US12178814B2/en. Close variant: a paediatric mini-tablet made by fluid-bed granulation.

- Per tablet: hemifumarate 11.05 (equal to 10 mg base), mannitol 10.61, sweetener 8.4, isomalt hydrate 3.6 (sprayed as a 20 % solution), L-HPC 1.8, Mg stearate 0.72; core 36.18 mg. Opadry QX 1.08 mg; 37.26 mg in total.
- Batch: 2.21 kg API, 2,122 g mannitol, 1,680 g sweetener, 3,602 g binder solution. This is 200,000 tablets' worth of granule. 5,385.6 g of the 6,377.5 g granule goes forward with 288.0 g L-HPC and 115.2 g Mg stearate (160,000 tablets). All of these numbers agree.
- Standard practice assumed: inlet/product temperatures, LOD limit, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | hemifumarate to base with 2 drug molecules per salt unit (factor 1.105) |
| T4 | FITS WITH SETTING | granule reconciliation with the 991.9 g portion not taken forward as a named part (retained intermediate) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 1 names the sweetener "sucrose" but the process text says "sucralose" for the same 8.4 mg. The quantities agree, so this is a material-identity error. The master check should compare material names between the formula and the steps.

Counts: 70 rows; FITS 66, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0066 mitotane, uncoated IR, roller compaction

NO SOURCE. Labels give only the excipient names (MCC, PEG 3350, silica, starch) and they disagree between sources. No formula with a process was found. Not counted.

## F0067 nilotinib, film-coated IR with a lag coat (listed: tartrate, fluid-bed; source: hydrochloride monohydrate, roller compaction)

Source: WO 2013/074432 A1 (Novartis), Example 1 Formulation A and the manufacturing process, https://patents.google.com/patent/WO2013074432A1/en. Close variant: the same API as a different salt, made by roller compaction.

- 200 mg core: nilotinib HCl monohydrate 220.6, MCC 179.6, HPC EXF 14, crospovidone 28, Aerosil 4.6, Mg stearate (I) 4.0 and (II) 9.2; 460.0 mg (it adds up; the salt factor with the hydrate's MW is 1.103).
- Process: blend, sieve (16-35 mesh), add Mg stearate I, roller compaction at 15-40 kN, mill (10-18 mesh), add Mg stearate II, compress at a 6-10 kp window. Then a functional HPMC E50 coat at 7-13 % weight gain with an Opadry colour, so that disintegration is delayed by 4-15 minutes.
- The coat table is an image (not in the text). Standard practice assumed: coat solids %, colour/functional split, IPC limits. Batch 250,000 tablets.

| Template | Result | Step |
|---|---|---|
| T23 | FITS WITH SETTING | ribbon envelope density / solid fraction |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Coating continues (F2) until the coated disintegration time is inside 4-15 min (C1 with a low and a high limit). These are FITS.

Counts: 68 rows; FITS 65, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0068 bromelain + trypsin + rutoside, enteric-coated, fluid-bed granulation

NO SOURCE. Indian labels (Tibrolin, Chymomerg) give 90 + 48 + 100 mg and mention enzyme overages, but no formula or process. WO 2010/109257 A1 has the three only in a sachet. Not counted.

## F0069 buprenorphine hydrochloride, sublingual, direct compression

Source: WO 2005/117838 A1, Example 2, https://patents.google.com/patent/WO2005117838A1/en

- Batch: lactose 450 mesh 40 g, maize starch 10, mannitol 40, povidone 3, anhydrous citric acid 4, sodium citrate 4, ascorbic acid 0.5, EDTA 0.1, buprenorphine HCl 2.16 g (= 2.0 g base). Blend in a planetary mixer, compress.
- No tablet count or weight is given. Read here as 1,000 tablets of 103.76 mg at 2 mg base (worked out from the dose). Ascorbic acid to drug is 0.66 by moles, as the patent claims.
- Gaps filled by standard practice: no lubricant is listed (a DC blend needs one, but the source gives no quantity), the blend time, the IPC limits, controlled-substance security. Batch 500,000 tablets.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | ascorbic acid : buprenorphine molar ratio (molar factor between species) checked against 0.66 |
| - | FITS WITH SETTING | EDTA 50 g and ascorbic acid weighed against the balance minimum weight from the equipment record |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 52 rows; FITS 48, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0070 hydrocodone bitartrate, ER hydrophilic matrix, hot-melt extrusion

NO SOURCE. WO 2015/095387 A1 gives only PEO/HPMC/PEG ranges (oxycodone examples). EP 2 654 734 A2 (PEO, compression-coated, cured at 72 °C) has its composition tables only as images. Not counted.

## F0071 ketorolac tromethamine, film-coated IR, solid dispersion then direct compression

Source: WO 2020/000831 A1, Example 1, https://patents.google.com/patent/WO2020000831A1/en

- Batch: ketorolac tromethamine 10 g, poloxamer 188 10 g, PEG 4000 40 g. These are dissolved in ethanol, the solvent is removed and the dispersion is milled (60 g). Then lactose 72 g, sodium carboxymethyl starch 12 g and Mg stearate 1.2 g are added (145.2 g), and the blend is compressed and film-coated.
- Read as a 10 mg tablet of 145.2 mg core (worked out from the dose; the source gives no tablet count). Batch 1,000,000 tablets.
- Standard practice assumed: a vacuum dryer instead of the rotary evaporator, residual ethanol limit, sieve, coat, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | dispersion quantity from the milled dispersion's in-process assay (same batch) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 60 rows; FITS 57, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0072 mefenamic acid, film-coated IR, steam granulation

NO SOURCE. No steam-granulation source was found for mefenamic acid. The articles found use wet or fluid-bed granulation. Not counted.

## F0073 meloxicam, ODT (listed: DC 15 mg; source: ethanol wet granulation 7.5 mg)

Source: Draksiene G. et al., Pharmaceutics 2021, 13(6):879, formulation F2, https://doi.org/10.3390/pharmaceutics13060879 (PMC8232328). Close variant: wet granulation, not DC.

- Per tablet: meloxicam 7.5, chitosan 14 (7 intra- and 7 extra-granular), MCC 27.5, Mg stearate 2, sorbitol 120 (115.5 intra- and 4.5 extra-granular), mannitol 29; 200 mg (it adds up).
- Process: blend and pass 40 mesh, wet with ethanol, pass 30 mesh, dry at 45 °C, pass 30 mesh again, add the extra-granular part, compress at about 11 kN. Tests: bulk/tapped density, Carr, Hausner, weight of 20 tablets (±7.5 %), compact density, friability, disintegration in water and pH 7.2 buffer.
- Batch 500,000 tablets. Standard practice assumed: ethanol quantity, LOD limit, low-RH room for sorbitol.

| Template | Result | Step |
|---|---|---|
| T23 | FITS WITH SETTING | compact density m / (pi r^2 t) (apparent density only) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 58 rows; FITS 55, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0074 tapentadol hydrochloride, film-coated IR, direct compression

NO SOURCE. Labels give the excipients and 58.24 mg HCl per 50 mg base, but no quantities. The patents found are ER or tamper-resistant. Not counted.

## F0075 agomelatine, film-coated IR, wet granulation with fluid-bed drying

Source: WO 2015/096186 A1, test prescription and method, https://patents.google.com/patent/WO2015096186A1/en

- Batch: agomelatine form X 25 g, lactose 92 g, crospovidone 9 g (half intra- and half extra-granular), Mg stearate 1.3, stearic acid 2.6, silica 0.3 (130.2 g). 20 mL of protective agent (water or a 5 % HPMC/PVP K30 solution) is used.
- Read as 25 mg tablets of 130.2 mg (worked out from the dose). Process: high-shear granulation for 2 min, oscillating granulator (833 µm), fluid-bed drying (inlet 45 °C, bed 30 °C) to about 2 % moisture, yield calculated, extra-granular excipients added, compressed with 7.5 mm punches.
- Standard practice assumed: film coat (the marketed product is coated), IPC limits. Batch 400,000 tablets.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | protective-agent solution given by volume (mL per batch), converted by density |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 62 rows; FITS 59, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0076 amisulpride, IR tablet (listed: roller compaction; source: wet granulation with granule coating)

Source: US 12,653,790 B2, Example 3 Table 3, https://patents.google.com/patent/US12653790B2/en. Close variant: the same API, granules coated in a fluid bed.

- % w/w: amisulpride 54, ethylcellulose 1.5, HPC 1.5 (coat, 5 % in 95 % ethanol), crospovidone 10, Mg stearate 0.5, orange flavour 0.1, MCC 5, mannitol 25, sucralose 1.9, sodium stearyl fumarate 0.5; 100.0 (it adds up).
- Process: 3/10 of the coat solution is sprayed during wet granulation and the rest by fluid-bed top spray, dried to LOD below 3 %, sieved at 1.0 mm. Mixed with SSF for 10 min, then the other excipients for 15 min, then Mg stearate for 5 min. Compressed to 66 N (range 50-80 N).
- The strength is not stated. Read as 400 mg in a 740.7 mg tablet (worked out from the dose). Batch 150,000 tablets. Standard practice assumed: explosion-proof room for ethanol, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 64 rows; FITS 62, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0077 doxepin hydrochloride, uncoated IR, 3 mg (listed: fluid-bed granulation; source: direct compression)

Source: US 10,548,871 B2, Table 1 and the batch example, https://patents.google.com/patent/US10548871B2/en. Close variant: DC.

- 3 mg tablet, 150 mg: doxepin HCl 3.39 (= 3 mg base), SMCC 145.07, colloidal silica 0.71, FD&C Blue 1 lake 0.08, Mg stearate 0.75 (it adds up).
- Commercial batch 560 kg (about 3.73 million tablets). The 12.65 kg drug and 2.63 kg silica match the 3 mg column. Colour pre-blend in a V-blender for 20 min, hammer-milled through 80 mesh. Colour blend with silica for 30 min, discharged through 30 mesh. Drug sieved onto SMCC, dry-rinsed and pre-blended (10 min mixes, 30 mesh sieving), then main blend in an in-bin blender, lubricant, vented transfer chute.
- Limits from the source: CU 90-110 %, RSD below 5 %, hardness at least 2 kP, friability at most 1 %, disintegration under 1 min.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 66 rows; FITS 64, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0078 fluoxetine hydrochloride, dispersible, direct compression

Source: EP 0 693 281 A2 (Lilly), Example 3, https://data.epo.org/publication-server/rest/v1.2/patents/EP0693281NWA2/document.pdf

- Per tablet: fluoxetine HCl 20.1, SSG 45.0, MCC PH101 162.7, dry-flowing starch 162.7, L-HPC 22.5, saccharin sodium 3.0, peppermint 10.0, TiO2 15.0, sodium stearyl fumarate 4.5, colloidal silica 4.5; 450 mg (it adds up).
- Process: all materials screened at 1.19 mm, excipients blended, API added, the blend passed "several times" through 0.8 mm, compressed with periodic controls. Limits: tablet 450 mg ±5 %, 10 tablets 4.5 g ±3 %, about 7 kgf, height about 3.3 mm, diameter 12.25 mm. Disintegration in water at 19-21 °C under 3 min. Dispersion fineness: 2 tablets in 100 mL pass 710 µm.
- Batch 400,000 tablets.

| Template | Result | Step |
|---|---|---|
| F7 | FITS WITH SETTING | the blend screened N times on the same lot. The master fixes N, because the source's "several times" cannot stay open |
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Example 3 contains 20.1 mg of the hydrochloride, which is about 18.0 mg base. Marketed 20 mg dispersible tablets are 20 mg as base (about 22.4 mg HCl). Examples 1-2 also use 20 mg of the salt. A master built from this patent for a 20 mg label would underdose by about 10 % unless the basis is fixed (C5 / T11).

Counts: 54 rows; FITS 51, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0079 fluvoxamine maleate, film-coated IR, fluid-bed granulation

Source: CN 105832713 A, Examples 6 and 11, https://patents.google.com/patent/CN105832713A/en

- Blank granules (fluid bed, 4 % starch paste): starch 30 %, pregelatinised starch 10 %, mannitol 25 %, MCC 35 %. Inlet 68 °C, product 42 °C, outlet 52 °C; 97 % in 50-120 mesh.
- Final blend: drug premix (fluvoxamine maleate 500 g co-milled with starch 250 g) "1,500 g, 33 %", blank granules 2,900 g (64 %), stearic acid 90 g (2 %), colloidal silica 45 g (1 %). Compressed, then coated with Opadry II at 3 % weight gain.
- The strength is not stated. Read as 100 mg (5,000 tablets per 500 g of API). Standard practice assumed: paste cooking, LOD limit, IPC limits, a commercial batch of 300,000 tablets.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the premix is stated as 1,500 g, but its parts add up to 750 g. The batch is 4,535 g as stated (the % column matches) or 3,785 g from the parts. The tablet weight (907 or 757 mg) cannot be fixed until this is resolved. The 1:1.93 drug-to-granule ratio is also outside the claimed optimum of 1:2.6.

Counts: 64 rows; FITS 62, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0080 lisdexamfetamine dimesylate, chewable, direct compression

NO SOURCE. The FDA reviews (NDA 208510) and Canadian monographs give strengths only. The AAPS PharmSciTech 2023 article on a taste-masked chewable is not open. Not counted.

## Totals for F0061-F0080

Counted 13 formulations, 822 rows: FITS 782, FITS WITH SETTING 39, NEW SETTING 1, GAP 0. NO SOURCE 7 (F0061, F0066, F0068, F0070, F0072, F0074, F0080).

New settings:
- T11 typed salt factor cross-checked (F0062): when the dossier gives a salt factor as a number (1.177 for the anhydrous dihydrochloride), the template checks it against the molecular weights of the form actually weighed (monohydrate, 1.220), and refuses if they differ. Variant of T11 (and of C5).

Safety rules:
- Typed salt factor against the weighed form (F0062): a factor of 1.177 used on a monohydrate lot gives about 3.5 % too little capmatinib, unless the assay is on the anhydrous basis with a water correction. T11 must refuse a typed factor that does not match the named forms.
- Dose basis in patent examples (F0078): an example with "20 mg" of the salt carried into a 20 mg-as-base product underdoses by about 10 %. This is already covered if the master states the basis (C5 / T11). Recorded as a reminder, not a new rule.

Sources that contradict themselves:
- CN 105832713 A (F0079): the drug premix is 1,500 g, but its parts add up to 750 g.
- US 12,178,814 B2 (F0065): Table 1 says sucrose while the process says sucralose for the same quantity.
- US 4,474,813 A (F0064): granulating water is "(0.29)" per 750 mg tablet with no workable unit.
- CN 108125918 B (F0063): 10 L of suspension for 100,000 tablets against about 13 L worked out from 10 % solids (minor).
- EP 0 693 281 A2 (F0078): the API is 20 or 20.1 mg of the salt, while the claim of a 20 mg product is read as base in the market.
