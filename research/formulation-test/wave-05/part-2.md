# Wave 5, part 2 (F0421-F0440)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.
Sources were mapped offline from the files downloaded by the source finder.

## F0421 furosemide, uncoated IR, 3D printed (semi-solid extrusion), 10 mg

Source: Lafeber I. et al., Int J Pharm 2021;603:120694 (author copy, Leiden University repository), sections 2.2.1-2.2.5 and 3.1, https://scholarlypublications.universiteitleiden.nl/download/1887/3196262/1?col=81522199330002711 (doi 10.1016/j.ijpharm.2021.120694)

- Per tablet: furosemide 10 mg in a Gelucire 48/16 carrier with polysorbate 80 as plasticiser; mean tablet mass 141.1 mg (RSD 1.26 %), so about 7.1 % w/w drug. The Gelucire / polysorbate split is not given (authors offer it on request).
- Melt at 50 C for 15 min, stir, fill and cool the stainless-steel cartridge, rest 60 min, heat the cartridge and nozzle to 41 C; piston-driven semi-solid extrusion printer, nozzle 0.4 mm, 6.5 mm tablets of 7 layers of 0.43 mm at 100 % infill.
- Printed in two rows of 12 (24 per run) because single-row printing made the first tablet 13 % light; the 8 mL cartridge holds about 40 tablets.
- QC: uniformity of mass on every tablet, content uniformity (AV 4.8-8.9 for 10 mg), dissolution S1/S2, XRPD; adjusted friability and crushing strength proposed.
- Batch: one print run of 24 tablets (hospital point-of-care scale, as in the source). Standard practice assumed: packaging, room limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | melt quantities as % w/w of the melt batch for one cartridge (T8 % w/w mode) |
| T6 | FITS WITH SETTING | cartridges needed = tablets ordered / tablets per cartridge, rounded up (known, wave 1, F0087) |
| T18 | FITS WITH SETTING | target print mass = dose x 100 / melt drug content (T18 content from in-process result) |
| C1 | FITS WITH SETTING | number weighed = number printed (C1 option: limit is a value computed earlier) |
| C3 | FITS WITH SETTING | each tablet within +/- 7.5 % of the mean (C3 limits as +/- % of series mean) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T7 | FITS WITH SETTING | per-tablet concentration = content / tablet mass (T7 per-unit value from two readings) |

Note: Thin formula: the record keeps separate rows for Gelucire and polysorbate 80, but their quantities must come from the developer's formula; none were assumed here. All three 10 mg batches averaged 94-96 % of the declared content while the masses were on target (see safety rules).

Counts: 61 rows; FITS 53, FITS WITH SETTING 8, NEW SETTING 0, GAP 0.

## F0422 glyceryl trinitrate, buccal ER hydrophilic matrix, direct compression (listed 3 mg)

Source: US 4,369,172 A (Forest Laboratories), Examples 8 and 9, https://patents.google.com/patent/US4369172A/en. Close variant: 6.5 mg strength (listed 3 mg; marketed buccal tablets 1-5 mg).

- Per tablet (Example 9): nitroglycerin 10 % triturate in lactose 71.5 mg, anhydrous lactose 40, HPMC (10.3 % hydroxypropoxyl) 22, sodium CMC 22, stearic acid 3, Syloid 244 1; 159.5 mg (mean found 159 mg).
- Process (Example 8, applied to Example 9): blend the first ingredients 15 min, add stearic acid and Syloid, blend 5 min, compress with 9/32 inch tooling on a rotary press.
- Results: hardness 2.3 kg, friability 0.3 %, release 61 / 94 / 100 % at 15 / 30 / 45 min.
- Batch 1,000,000 tablets (159.5 kg). Standard practice assumed: blender size, IPC limits, packaging.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness in kg (kgf) (round-3 unit) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 71.5 mg of a 10 % triturate is 7.15 mg nitroglycerin, not the stated 6.5 mg (no overage declared); the master uses T18 on the label claim with lactose compensating. The gram column (143 g per 71.5 mg) is 2,000 tablets, but the text compresses 500.

Counts: 75 rows; FITS 72, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0423 labetalol hydrochloride, film-coated, 200 mg (listed IR, foam granulation)

Source: EP 0 266 707 B1 (Schering Corporation), Examples 1 and 6, https://data.epo.org/publication-server/rest/v1.2/patents/EP0266707NWB1/document.pdf. Weak variant: sustained-release HPMC / tartaric acid matrix by conventional aqueous granulation (listed IR, foam granulation); same API, salt, 200 mg strength and film-coated, polished tablet.

- Per tablet (Example 6): labetalol HCl 200 mg, tartaric acid 105, HPMC E4M 34, povidone 17, Mg stearate 4, silica gel 1, 'colour solids' 10; 371 mg.
- Process (Example 1): blend drug, acid and HPMC; granulate with an aqueous povidone solution; dry, mill; add Mg stearate and silica; compress; aqueous HPMC / PEG 3350 / paraben colour coat, then carnauba wax polish.
- Dissolution 1 h SGF then SIF: 13 % at 1 h to 87 % at 8 h (Example 6).
- Batch 300,000 tablets (about 108 kg cores). Standard practice assumed: binder strength, mixer and dryer settings, coat solids %, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | carnauba wax as % of the coated load (T8 "% of" a recorded weight) |

Note: Counted because the record needs no invented number except the binder strength (the source's '75 % w/w' povidone solution is not workable; standard practice used). The 'colour solids' line equals the Example 1 coat solids (10.64 + 2.64 + 0.06 + 6.64 = 19.98 mg, about 20), so it is the coat, not a core line: the core is 361 mg, not 371 mg. The formula has no filler, so T10 cannot compensate; the core weight follows the potency-adjusted blend.

Counts: 134 rows; FITS 131, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0424 lisinopril dihydrate, uncoated IR (listed MADG, 10 mg)

Source: NAFDAC Greenbook SmPC, Rinosil 5 (Lisinopril Tablets BP 5 mg), section 2.1 batch formula, https://admin.greenbook.nafdac.gov.ng/uploadImage/smpc_files/2025/07/25/20250725aae2058a-4af5-589e-b8d4-cbceb9af7766.pdf; Lisiofil 5 SmPC as a cross-check. Close variant: 5 mg and hydro-alcoholic wet granulation (listed 10 mg, MADG).

- Per tablet: lisinopril dihydrate 5.44 mg (= 5 mg lisinopril; adjusted for assay and LOD), maize starch 49.97 (carries 10 % extra for drying loss and changes with the API quantity), DCP dihydrate 20.04, pregelatinised starch 22.50, mannitol 30.00, croscarmellose 7.50 + 9.00, PVP K-30 3.75, Mg stearate 1.80; 150.0 mg.
- Batch 800,000 tablets, 120 kg stated: binder PVP 3.0 kg in 6.4 kg water + 25.6 kg isopropyl alcohol; stages dry mixing, binder, lubrication.
- Standard practice assumed: mixer and dryer settings, LOD limit, screens, IPC limits (the SmPC gives only stage headings).

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The batch lines add up to 124.0 kg against the stated 120 kg, because the starch line carries the 10 % drying overage (39.98 kg needed, 43.97 kg weighed). Theoretical yield must exclude the overage (T16 shown in reconciliation). 'Assay and LOD' on a dihydrate must not correct the hydrate water a second time (C5, see safety rules).

Counts: 114 rows; FITS 112, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0425 pemafibrate, film-coated IR (listed fluid-bed granulation), 0.1 mg

Source: EP 3 646 863 B1 (Kowa), Test Example 1, Table 1 Example 5 and [0119]-[0123], https://data.epo.org/publication-server/rest/v1.2/patents/EP3646863NWB1/document.pdf. Close variant: direct compression, uncoated in the source (listed fluid-bed wet granulation, film-coated).

- Per tablet (Example 5; Table 1 is an image, checked against the page): pemafibrate 0.1 mg, HPMC TC-5E 2.4, lactose monohydrate 92.3, MCC 24, Mg stearate 1.2; 120 mg (drug 0.083 % w/w).
- Mix drug with the cellulose ether 30 s, add lactose and MCC 30 s, add Mg stearate 30 s, compress 7 mm. Without the cellulose ether (comparative example) the content RSD was 140 %; with it 1.4-4.9 %.
- Batch 1,000,000 tablets (120 kg). Standard practice assumed: scale-up mixing times, blend uniformity sampling, HPMC film coat (not in the source), IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The text file shows particle sizes as 'mm', but the PDF page prints micrometres; this is a text-extraction artifact, not a source error.

Counts: 96 rows; FITS 94, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0426 pindolol, uncoated IR, steam granulation, 5 mg

NO SOURCE: only US labels with excipient names (no amounts, no process); no formulation patent or article found. Not counted.

## F0427 ticagrelor, film-coated IR, direct compression, 90 mg

Source: EP 2 515 871 B1 (ratiopharm), Example 1 [0051]-[0052] and Example 6 [0062], https://data.epo.org/publication-server/rest/v1.2/patents/EP2515871NWB1/document.pdf

- Per tablet: ticagrelor 90.0 mg, mannitol 72.0, povidone 9.0, crospovidone 7.2, Mg stearate 1.8; 180.0 mg core (50 % drug).
- Ticagrelor dry-ground with part of the mannitol in a ball mill; other excipients added in a free-fall mixer (10 min, Example 6); Mg stearate through 0.5 mm, 3 min; compress; optionally coat with Opadry.
- Claims: at least 90 % by volume of drug particles 1-150 um, D50 30-70 um (laser diffraction).
- Batch 1,000,000 tablets (180 kg cores). Standard practice assumed: mannitol portion for co-milling, mill settings, Opadry at 3 % gain, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 102 rows; FITS 100, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0428 trimetazidine dihydrochloride, film-coated IR, fluid-bed granulation, 20 mg

Source: EP 1 108 424 B1 (Servier), [0032] (immediate-release reference tablet) and [0025] (process, stage A for the matrix tablets), https://data.epo.org/publication-server/rest/v1.2/patents/EP1108424NWB1/document.pdf. Close variant: IR formula given without its own process; no coat in the source.

- Per tablet (IR 20 mg): trimetazidine dihydrochloride 20 mg, maize starch 26, mannitol 34, povidone 4, Mg stearate 1, talc 5; 90 mg core. Strength is stated as the salt.
- Process taken from the patent's stage A (drug, povidone and filler wetted with water, granulated, dried) and stage C (lubrication), then compression; coating 'by a classical technique' ([0024]).
- Batch 1,000,000 tablets (90 kg cores). Standard practice assumed: fluid-bed granulation with povidone solution, LOD limit, HPMC film coat at 3 %, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 120 rows; FITS 118, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0429 ubidecarenone (coenzyme Q10), film-coated IR (listed fluid-bed granulation, 10 mg)

Source: EP 4 101 442 B1 (Tradichem), Examples 1, 2 and 4, https://data.epo.org/publication-server/rest/v1.2/patents/EP4101442NWB1/document.pdf. Close variant: 30 mg; drug roller-compacted alone, then direct compression; uncoated in the source.

- Per tablet (Example 4): compacted CoQ10 30 mg, calcium phosphate 75, MCC 100, Mg stearate 2, silica 2; 209 mg (total not printed).
- CoQ10 (bulk density 0.22 g/ml) roller-compacted: roll speed 7-8 rpm, screw 15 rpm, roll force 17.2-18.6 kN, gap 0.5 mm, roll surface kept at 20-25 C; milled at 70 rpm through 800 um; bulk density 0.52 g/ml, Carr index 35.3 to 8.8 %, Hausner 1.55 to 1.10; purity above 99 % before and after.
- Tablets: all ingredients mixed about 15 min and compressed.
- Batch 500,000 tablets (104.5 kg cores). Standard practice assumed: scale-up mixing, IPC limits, opaque film coat for light and oxygen protection (not in the source).

| Template | Result | Step |
|---|---|---|
| T6 | FITS WITH SETTING | angle of repose = arctan(height / radius) (round-3 T6 option) |
| T18 | FITS WITH SETTING | quantity from the compacted intermediate's assay (T18 content from in-process result) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The angle of repose of the compacted CoQ10 is given as 10 degrees, which is unusually low for a powder.

Counts: 107 rows; FITS 103, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0430 bromocriptine mesylate, scored IR (listed fluid-bed granulation), 2.5 mg

Source: EP 0 391 374 B1 (Poli Industria Chimica), Examples 2 and 5, https://data.epo.org/publication-server/rest/v1.2/patents/EP0391374NWB1/document.pdf. Close variant: excipients kneaded and dried at 50 C (dryer type not named); drug added outside the granule by progressive dilution.

- Per tablet: bromocriptine mesylate 2.87 mg (= 2.5 mg base), maize starch 14.0, lactose 115.82, maleic acid 2.0, povidone 4.20, colloidal silica 0.35, Mg stearate 0.70; 140 mg (lines add to 139.94).
- Example 5 per 10,000 tablets: drug 28.7 g premixed with 258.2 g lactose; starch 140 g + lactose 900 g + maleic acid 20 g kneaded with a povidone (42 g) solution, dried at 50 C to residual solvent below 1 %, sieved; combined with premix, silica and Mg stearate; 7 mm flat punches with breaking groove.
- Residual moisture 1.6 %; excipients for the premix not above 1 % moisture (claim 2).
- Batch 1,000,000 tablets (140 kg). Standard practice assumed: mixer and dryer settings, screens, subdivision test for the score, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | each half within 85-115 % of the mean half (C3 limits as +/- % of series mean) |

Counts: 117 rows; FITS 114, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0431 luseogliflozin hydrate, film-coated IR, fluid-bed granulation, 2.5 mg

NO SOURCE: only Japanese labels with excipient names; no formulation patent with amounts and process could be retrieved. Not counted.

## F0432 miglitol, uncoated quick-disintegrating IR, direct compression, 50 mg

Source: WO 2015/007676 A1 (= EP 3 021 837 A1, Bayer), 'Example of production by direct tableting' (printed page 6; tables are images, checked against the pages), https://patents.google.com/patent/WO2015007676A1/en

- Per tablet: crystalline miglitol 50.00 mg, maize starch (as is) 78.50, magnesium trisilicate 30.00, crospovidone (Kollidon CL-SF) 20.00, Mg stearate 1.35, sucralose 0.16; 180.01 mg (target 180.00).
- Mix 5 min, optional forced sieve (e.g. 0.8 mm), mix 15-25 min, add Mg stearate through 1 mm and mix 5 (2-10) min; 8.5 mm flat facetted tooling, disintegration not more than 90 s, strength at least 45 N, thickness 2.5-2.9 mm.
- A flexible foil tube between the blend container and the press feeder reduces segregation; insoluble components 65-78 % of the tablet.
- Batch 1,000,000 tablets (180 kg). Standard practice assumed: blender scale, IPC frequency, friability limit.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The composition table on printed page 5 has Mg stearate 2.70 mg and starch 77.115 mg; the production example halves the lubricant and moves the difference into starch. The master takes one version.

Counts: 84 rows; FITS 82, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0433 vildagliptin, uncoated IR, direct compression, 50 mg

Source: EP 1 715 893 B1 (Novartis), Examples 1-3 [0124]-[0127], https://data.epo.org/publication-server/rest/v1.2/patents/EP1715893NWB1/document.pdf

- Per tablet (Example 2): vildagliptin 50.00 mg, MCC PH102 95.68, anhydrous lactose 47.82, sodium starch glycolate 4.00, Mg stearate 2.50; 200.0 mg. Batch 260.0 kg (65.0 kg drug, 1.3 million tablets).
- Pre-blend in a bin blender, sieve 500 or 850 um, blend again, add Mg stearate, blend; each blend about 150-450 revolutions; compress.
- Tests: mean of 20 weights, breaking strength of 5 (kp), friability 10 tablets 10 min, BP dispersion test at 19-21 C, LOD by moisture analyser at 90 C, weight median diameter by sonic sifter.
- Batch as in the source. Standard practice assumed: room RH limit and pack for the moisture-sensitive API, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | pre-blend revolutions = blender rpm x time (T8 product of readings), checked 150-450 |
| T8 | FITS WITH SETTING | second blend revolutions (T8 product of readings) |
| T8 | FITS WITH SETTING | final blend revolutions (T8 product of readings) |
| T22 | FITS WITH SETTING | weight median diameter from cumulative % undersize (T22 median by interpolation) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness in kp (kgf) (round-3 unit) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Example 1 says a 50 mg tablet weighs 160 mg (scaled from its 80 mg / 25 mg blend), while Example 2 gives 200 mg for 50 mg 'by the same process'. These are two blends; the master must not pair one blend with the other's target weight.

Counts: 80 rows; FITS 73, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0434 desmopressin acetate, uncoated IR (listed fluid-bed granulation), 0.2 mg

Source: EP 1 500 390 B1 (Ferring), Example 1 [0050] and [0028], https://data.epo.org/publication-server/rest/v1.2/patents/EP1500390NWB1/document.pdf. Close variant: granulated and dried in a single-pot mixer with warm air (listed fluid-bed); per-tablet amounts derived from the batch and the stated 200 mg tablet.

- Batch: desmopressin acetate 200 g (or 100 g for 0.1 mg), povidone 1.9 kg dissolved with the drug in water / ethanol 1:3, potato starch 73.4 kg, lactose 123.7 kg, Mg stearate 0.51 kg (stated as 0.25 %); about 199.7 kg, about 1,000,000 tablets of 200 mg.
- Per tablet (derived): desmopressin acetate 0.2 mg, povidone 1.9, potato starch 73.4, lactose 123.7, Mg stearate 0.51 mg.
- Drug solution sprayed on starch + lactose in the single-pot mixer, dried with warm air (150 C) while mixing, sieved 2 mm; Mg stearate through 1 mm in a double-cone mixer; rotary press (about 250,000 tablets/h). Granulate at least 50 % by volume of 100 um or larger.
- Batch as in the source. Standard practice assumed: mixing times, LOD limit, peptide content correction, IPC limits.

| Template | Result | Step |
|---|---|---|
| T9 | FITS WITH SETTING | peptide content on the anhydrous, acetic-acid-free basis (round-3 T9 solvent-free basis) |
| C5 | FITS WITH SETTING | label as acetate, assay as base: the acetate-to-base factor (below 1) is valid, not a double count (known, wave 1 F0088 chain; label basis known wave 2) |
| T8 | FITS WITH SETTING | Mg stearate = 0.25 % of the actual granulate weight (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 0.51 kg Mg stearate in about 199.7 kg is 0.255 %, not 0.25 %; the master sets it as a % of the actual granulate (T8).

Counts: 102 rows; FITS 97, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0435 thyroid (desiccated porcine), uncoated IR, direct compression, 60 mg

NO SOURCE: only levothyroxine / liothyronine patents (synthetic, already tested) and clinical papers; no desiccated thyroid tablet formula. Not counted.

## F0436 activated charcoal (medicinal carbon), uncoated IR (listed high-shear granulation), 250 mg

Source: Yamamoto K. et al., Chem Pharm Bull 2006;54(3):359-362, 'Preparation of Tablets' and Table 1, https://www.jstage.jst.go.jp/article/cpb/54/3/54_3_359/_pdf. Close variant: lab hand kneading and a manual press (listed high-shear granulation).

- Batch: medicinal carbon (JP, 150-200 mesh fraction) 10 g kneaded with 17 ml of a 60 % w/v maltitol solution (10.2 g maltitol); 500 mg granule per tablet holds about 250 mg carbon.
- Wet mass through a 9 mesh sieve, dried at 60 C overnight, 500 mg compressed at 4 kN for 30 s in a 1 cm die.
- Results: height 6.1 mm, hardness 6.0 kg, disintegration 3.4 min (modified basket apparatus).
- Batch 400,000 tablets (100 kg carbon, 200 kg granule). Standard practice assumed: high-shear kneading, dryer, LOD limit, rotary press settings.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | maltitol 60 % w/v solution made up to volume (T17 % w/v) |
| T18 | FITS WITH SETTING | carbon content of the dried granule from composition and LOD sets the tablet weight (T18 in-process content) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness in kg (kgf) (round-3 unit) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The source has no lubricant or disintegrant; none was added here because the amount would have to be invented. A rotary-press run may need one.

Counts: 76 rows; FITS 71, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0437 budesonide, colon-targeted film-coated (MMX), high-shear granulation, 9 mg

Source: US 9,132,093 B2 (Cosmo Technologies), Examples 1 and 2, https://patentimages.storage.googleapis.com/14/f9/55/43d9f81cf0d935/US9132093.pdf

- Core per tablet (Example 2): budesonide 9.0 mg, stearic acid 10.0, lecithin 10.0, MCC 156.0, hydroxypropylcellulose 60.0, lactose monohydrate 50.0, silicon dioxide 2.0, Mg stearate 3.0; 300 mg.
- Coat per tablet: Eudragit L100 14.0, Eudragit S100 12.0, talc 7.9, titanium dioxide 4.5, triethyl citrate 1.6 mg in alcohol; about 340 mg (industrial batch MV084: 8.0 + 8.0 mg Eudragit, about 330 mg).
- Process (Example 1, 300,000 tablets): budesonide 2.7 kg with lecithin 3.0 and stearic acid 3.0 kg; add 39.0 kg excipients and 9.0 kg HPC binder, mix 10 min, knead with water, rotating granulator, fluid-bed dry below 3 %, sieve; add 9.0 kg HPC and MCC / lactose / silica, mix 15 min; add Mg stearate; compress about 300 mg; coat in alcohol.
- Dissolution: below 5 % at pH 1 (2 h) and pH 6.4 (1 h); 15 / 37 / 91 % at 2 / 4 / 8 h at pH 7.2.
- Batch 300,000 tablets (90 kg cores). Standard practice assumed: which of MCC / lactose are in the 39 kg, coat solids %, coating settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Three coat amounts for the same 9 mg tablet: 26 mg Eudragit (Example 2), 16 mg (industrial MV084) and about 19 mg (Example 1, 5.8 kg per 300,000). The master fixes one, as a weight gain on the core.

Counts: 148 rows; FITS 146, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0438 doxylamine succinate + pyridoxine HCl, film-coated IR + delayed release (drug layering), 20 + 20 mg

Source: EP 3 185 856 B1 (Duchesnay), Example 1 [0096]-[0102], Tables 1-3, https://data.epo.org/publication-server/rest/v1.2/patents/EP3185856NWB1/document.pdf. Close variant: IR drug layer over an enteric (delayed-release) core, the marketed 'extended-release' design.

- Core per tablet: doxylamine succinate 10.00 mg, pyridoxine HCl 10.00, MCC 102 90.0, magnesium trisilicate 26.4, croscarmellose 3.6, colloidal silica 1.0, Mg stearate 4.0; 145 mg; clear coat Opadry clear 4.35; enteric coat Acryl-EZE 14.26, triethyl citrate 1.66, simethicone emulsion 0.01 mg.
- Seal coat (water 93.4 / PlasAcryl T20 0.6 / HPMC E5 6.0 % w/w) to 2.67 % gain; IR layer suspension (water 78.1, each API 5.0, HPMC E5 6.0, PlasAcryl T20 5.9 % w/w; 17.18 % solids) for 10 + 10 mg; 26.2 mg APIs 'applied' per tablet including overage.
- Over-coat Opadry white to 1.4 % gain from a 5 % suspension; carnauba wax 0.1 %. Two-stage dissolution (0.1 N HCl, then pH 6.8).
- Batch 300,000 tablets. Standard practice assumed: core blending and compression (not in the example), coating settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | both API adjustments into MCC (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | seal coat gain 2.67 % on the enteric-coated tablet (round-3 T5 base: named earlier stage) |
| T8 | FITS WITH SETTING | deposited API = layer gain x API share of layer solids (58.2 %) (T8 "% of" a recorded weight) |
| T18 | FITS WITH SETTING | two APIs in one layer at 1:1: set on one, show and check the other (known, wave 2, F0187) |
| T8 | FITS WITH SETTING | carnauba wax 0.1 % of the coated load (T8 "% of" a recorded weight) |

Note: Table 2 heading prints 'SC 20 mq' (typo). Content at T = 0 was about 101-113 % of label for the two APIs, so part of the 31 % layer overage reached the tablets (see safety rules).

Counts: 204 rows; FITS 197, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0439 lafutidine, uncoated IR, fluid-bed granulation, 10 mg

Source: Kim HI, Song SH. J Korea Academia-Industrial cooperation Society 2022;23(1):660-669, sections 2.2-2.7 and the optimised formula, doi 10.5762/KAIS.2022.23.1.660, https://www.kais99.org/jkais/journal/Vol23No01/vol23no01p075.pdf. Close variant: lab scale, dryer type not stated.

- Per tablet: lafutidine 10 mg, HPC-L 9.79, croscarmellose sodium 6.03, Mg stearate 1.21 (1 min mixing), granulating water 90 mg (removed); lactose monohydrate and MCC PH-101 make up 250 mg (222.97 mg together; the split is not stated).
- Drug through #100, mixed with lactose, MCC, HPC-L and croscarmellose, through #20; kneaded with water, wet-screened #16, dried at 50 C, sized #18, lubricated, compressed to 250 mg.
- Targets: dissolution at least 85 % in 15 min (pH 1.2); tensile strength 3.37 MPa and ejection stress 0.68 MPa at 200 MPa; Carr index about 15 %.
- Batch 1,000,000 tablets (250 kg). Standard practice assumed: high-shear and fluid-bed settings, LOD limit, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The lactose / MCC split is not in the source; the record has a row for each, with quantities from the developer's formula (none assumed). Ejection stress is a development measure; the plant records ejection force.

Counts: 98 rows; FITS 96, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0440 loperamide HCl + simethicone, chewable IR (listed fluid-bed granulation), 2 + 125 mg

Source: EP 0 571 217 B1 (McNeil-PPC), Examples II and III (aqueous), https://data.epo.org/publication-server/rest/v1.2/patents/EP0571217NWB1/document.pdf. Close variant: the final granulation is planetary-mixer kneading with oven drying; only the loperamide granule is made in a rotor (fluid-bed) granulator.

- Per tablet (Example III, aqueous): simethicone 125.0 mg and povidone 25.0 in water 87.51 (removed) as the granulating liquid; coated loperamide granules 72.0 (to deliver 2 mg loperamide HCl), mannitol 540.0, lactose Fast-Flo 538.2, MCC PH-101 30.0; 1,330.2 mg.
- Coated granule (Example II): loperamide HCl 2.0, confectioners sugar 52, MCC 5.8 mg rotor-granulated with water, then roto-coated with cellulose acetate 4.57 + Eudragit E-100 6.86 mg from acetone / methanol.
- Blend mannitol, MCC, granules and lactose 3.5 min; add the liquid, mix 7.5 min; 10 mesh; oven dry 1 h 45 min at 60 C; compress. Compression limits taken from Example II: group weight of 10 within about +/- 2 %, thickness, hardness 2.9-4.9 kp, friability not more than 5 % after 100 drops, defoam time below 45 s.
- Batch 300,000 tablets (about 400 kg). Standard practice assumed: rotor settings, coat solution strength, LOD limits, lubricant not added (none in Example III).

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | quantity to deliver 2 mg from the coated granule assay (T18 content from in-process result) |
| C1 | FITS WITH SETTING | group weight within 12.64-13.16 g, i.e. +/- 2 % of 10 x target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness 2.9-4.9 kp (kgf unit) |
| T5 | FITS WITH SETTING | friability after 100 drops (T5 loss mode) |

Note: The coated granule parts add up to 71.23 mg, Example II uses 71.4 mg and Example III 72.0 mg for the same 2 mg, so the granule quantity comes from its assay (T18), with mannitol compensating. The Example III solvent column has simethicone 225.0 mg but the same 1,330.2 mg total (its lines add to 1,430.2 mg).

Counts: 144 rows; FITS 140, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.
## Totals for F0421-F0440

Counted 17 formulations, 1,862 rows: FITS 1,799, FITS WITH SETTING 63, NEW SETTING 0, GAP 0. NO SOURCE 3 (F0426, F0431, F0435).

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0421 | 61 | 53 | 8 | 0 | 0 |
| F0422 | 75 | 72 | 3 | 0 | 0 |
| F0423 | 134 | 131 | 3 | 0 | 0 |
| F0424 | 114 | 112 | 2 | 0 | 0 |
| F0425 | 96 | 94 | 2 | 0 | 0 |
| F0427 | 102 | 100 | 2 | 0 | 0 |
| F0428 | 120 | 118 | 2 | 0 | 0 |
| F0429 | 107 | 103 | 4 | 0 | 0 |
| F0430 | 117 | 114 | 3 | 0 | 0 |
| F0432 | 84 | 82 | 2 | 0 | 0 |
| F0433 | 80 | 73 | 7 | 0 | 0 |
| F0434 | 102 | 97 | 5 | 0 | 0 |
| F0436 | 76 | 71 | 5 | 0 | 0 |
| F0437 | 148 | 146 | 2 | 0 | 0 |
| F0438 | 204 | 197 | 7 | 0 | 0 |
| F0439 | 98 | 96 | 2 | 0 | 0 |
| F0440 | 144 | 140 | 4 | 0 | 0 |
| **Total (17)** | **1,862** | **1,799** | **63** | **0** | **0** |

NO SOURCE: F0426, F0431, F0435.

Weak variants: F0423 (labetalol) is counted as a sustained-release variant of the same API, salt, strength and film-coated tablet; the record needs no invented number apart from the binder strength, which is standard practice. F0421 and F0439 are counted, but each leaves one excipient split to the developer's formula (no value assumed).

New settings and gaps (merged): none. Every non-FITS row uses an existing setting or a known finding:
- C1 limits around a computed value (mean weight, group weight of 10, count weighed = count printed); T5 loss mode (friability, also after 100 drops); kgf / kp units.
- T8 % w/w mode, T8 "% of" a recorded weight (wax polish, Mg stearate as 0.25 % of the granulate, deposited drug from layer gain), T8 product of readings (blender revolutions = rpm x time, F0433).
- T18 content from an in-process result (melt concentration F0421, compacted CoQ10 F0429, carbon granule F0436, coated loperamide granule F0440); T17 % w/v; T10 several adjusted APIs into one filler; T22 median by interpolation; T6 angle of repose; T7 per-unit value from two readings; C3 limits as +/- % of the series mean (EP uniformity of mass, subdivision of scored halves); T5 gain on a named earlier stage; T9 solvent-free basis.
- Known findings: whole containers rounded up (wave 1, F0087: cartridges for 3D printing), the hydrate-labelled C5 chain (wave 1, F0088, here for a salt-labelled peptide), two APIs in one layer in a fixed ratio (wave 2, F0187), the 3D print design-file check (wave 2, F0154).

Safety rules:
- **Drug layer sprayed with an overage** (F0438; extends the known wave-2 rule on undeclared overages). The source applied 26.2 mg of APIs per tablet for a 20 mg target (+31 %), and content at T = 0 was about 101-113 % of label. The end point of a drug layer must be the deposited drug: layer gain x drug share of the layer solids, confirmed by the layer assay. A spray-loss overage (T16) increases only the suspension made, never the target gain. If all of it reached the tablet, the IR layer would carry 31 % more drug (the whole tablet about 15 % more).
- **Salt-labelled peptide, base assay** (F0434; extends the known wave-1 F0088 chain from hydrates to salts). Desmopressin is labelled as the acetate, but its content is assayed as desmopressin on the anhydrous, acetic-acid-free basis. The acetate-to-base factor (1069.2 / 1129.3 = 0.947 for the nominal monoacetate) is then required. If C5 refused it as an 'as parent' double count, each tablet would get about 5.6 % too much desmopressin. C5 must refuse only the factor that runs the other way (base to salt with a base assay).
- Reminders of known rules, with their size here:
  - Mass-dosed 3D printing (F0421; wave-2 F0157 and wave-3 F0288 rules for doses set by fill). All three 10 mg batches averaged 94-96 % of the declared content while the masses were on target (RSD 1.26 %), so the error was in the melt's drug concentration. Weight checks cannot catch this. The melt or cartridge needs an assay before printing, and the print mass comes from the measured concentration (T18).
  - Hydrate plus 'assay and LOD' (F0424, C5). 5.44 mg lisinopril dihydrate already includes the hydrate water (factor 1.089). Correcting it again for the dihydrate's 8.2 % theoretical water gives about 5.9 mg, about 9 % too much lisinopril.
  - Coat listed among the core lines (F0423; wave-2 stage-named weights). 'Colour solids' 10 mg is the film coat. Compressing the core to 371 mg instead of 361 mg gives about 2.8 % more labetalol.
  - Triturate (F0422, known wave 2). A 10 % triturate read as pure nitroglycerin gives 10 times the dose. The example's 71.5 mg of triturate holds 7.15 mg against a 6.5 mg claim (+10 %, undeclared).
  - Two blends for one strength (F0433; wave-3 F0225). The Example 2 blend (25 % drug) compressed to the Example 1 weight of 160 mg gives 40 mg (-20 %). The Example 1 blend (31.25 %) compressed at 200 mg gives 62.5 mg (+25 %).
  - Label basis (F0430). 2.87 mg mesylate = 2.5 mg base; a mesylate line read as base gives 14.8 % too much.
  - Dry basis for an antidote (F0436; T12, wave-3 dry-basis rule). Carbon weighed as is without the lot's LOD, or a tablet weight set without the granule's water, each lowers the carbon per tablet by that water %.
  - Granule potency (F0440; T18, and the wave-1 double-adjustment rule). The coated-granule quantity comes from its assay (71.4 against 72.0 mg for the same 2 mg); compression weight is not adjusted a second time.
  - Functional coat amount (F0437; wave-3 F0238). The same 9 mg tablet appears with 16, about 19 and 26 mg of Eudragit. Colon release depends on it, so the master fixes it as a dry-polymer weight gain on the core.
  - Premix order at 0.083 % drug (F0425). Without the cellulose-ether premix the content RSD was 140 %. The premix and its uniformity check are fixed steps, never an optional (F4) step.

Sources that contradict themselves:
- US 4,369,172 A (F0422): 71.5 mg of a 10 % triturate is 7.15 mg nitroglycerin, but the tablet is called 6.5 mg. The gram column (143 g at 71.5 mg per tablet) makes 2,000 tablets, but the text compresses 500.
- EP 0 266 707 B1 (F0423): povidone is dissolved 'to produce a 75 % w/w solution', which cannot granulate the blend. 'Colour solids' appears among the core lines but equals the film-coat solids (19.98 mg in Example 1).
- Rinosil 5 SmPC (F0424): the batch is headed 120.00 kg, but the lines add up to 124.0 kg because the starch carries a 10 % drying overage.
- WO 2015/007676 A1 (F0432): the composition table has Mg stearate 2.70 mg and starch 77.115 mg; the 'rounded' production example has 1.35 mg and 78.50 mg.
- EP 1 715 893 B1 (F0433): the 50 mg tablet weighs 160 mg in Example 1 but 200 mg in Example 2, which is said to use 'the same process'.
- US 9,132,093 B2 (F0437): the 9 mg tablet has 26 mg Eudragit (Example 2), 16 mg (industrial batch MV084) and about 19 mg (Example 1, 5.8 kg per 300,000 tablets).
- EP 3 185 856 B1 (F0438): 26.2 mg of APIs 'applied' for a 20 mg target with no stated overage %; the Table 2 heading prints 'SC 20 mq'.
- EP 0 571 217 B1 (F0440): the Example III solvent column has 225.0 mg simethicone but the same 1,330.2 mg total (its lines add to 1,430.2 mg). The coated granule parts add up to 71.23 mg, while 71.4 and 72.0 mg are used for the same 2 mg.
- Minor: EP 0 391 374 B1 (F0430) Example 2 lines add up to 139.94 mg against 140 mg. EP 1 500 390 B1 (F0434) calls 0.51 kg of Mg stearate in about 199.7 kg '0.25 %' (0.255 %). EP 4 101 442 B1 (F0429) gives an angle of repose of 10 degrees for the compacted powder, which is implausibly low.
- Not a source error: EP 3 646 863 B1 (F0425) shows particle sizes as 'mm' in the extracted text, but the PDF page prints micrometres. This is a text-extraction artifact from data.epo.org PDFs, so 'um printed as mm' should be checked against the page image before it is listed as a contradiction.
