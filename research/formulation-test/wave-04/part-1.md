# Wave 4, part 1 (F0301-F0320)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the source finder; this part worked from those files only. Tables that exist only as page images (F0309, F0315, F0318) were checked against the page images before use.

## F0301 bictegravir sodium + emtricitabine + tenofovir alafenamide hemifumarate, film-coated bilayer IR, roller compaction, 50 + 200 + 25 mg

Source: EP 3 346 995 B1 (Gilead Sciences), Example 6 (bilayer tablet F7) and Example 8 [0339]-[0344], https://data.epo.org/publication-server/rest/v1.2/patents/EP3346995NWB1/document.pdf. Close variant: the tablet is a bilayer film-coated tablet (listed as film-coated IR, no layers named).

- Layer 1 per tablet: bictegravir sodium 52.5 mg (= 50 mg free acid), MCC 246.3, croscarmellose 19.4, Mg stearate 4.9; 323 mg. Layer 2: emtricitabine 200, TAF hemifumarate 28 (= 25 mg TAF), MCC 113.2, croscarmellose 30.2, Mg stearate 5.7; 377 mg. Core 700 mg; Opadry II Brown 21 mg; 721 mg.
- Each layer: APIs weighed with a drug content factor and the MCC reduced to match; tumble blend; intragranular Mg stearate; roller compaction (or slugging) and milling; extragranular MCC / Mg stearate. The intra/extragranular split is given only as ranges in [0262]-[0265]; the plant fixes it inside them.
- Bilayer compression: layer 1 to 323 mg, total 700 mg, hardness 17 kP (14-20). Film coat to 3 % gain (2-4 %).
- Batch 300,000 tablets. Standard practice assumed: roll force/gap, blend times, IPC limits other than those above, coat solids %.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | TAF hemifumarate to TAF with 2 drug molecules per salt unit (28.0 mg = 25 mg TAF) |
| T10 | FITS WITH SETTING | drug-content-factor excess of both FTC and TAF taken from the layer-2 MCC (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | layer-1 weight within +/- % of 323 mg (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | total bilayer weight within +/- % of 700 mg (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Expected tablets = the smaller of the two layer counts (T21, plain). Each layer carries different APIs, so a check on the total weight alone cannot show a layer-1 error (known rule, wave 3: each layer needs its own weight check).

Counts: 124 rows; FITS 119, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0302 cabotegravir sodium, film-coated IR, fluid-bed granulation, 30 mg

NO SOURCE: the FDA chemistry review redacts every quantity and the process; the crystal-form patent has no tablet example; labels are qualitative only. Not counted.

## F0303 cetylpyridinium chloride, compressed lozenge, carrier wet-granulated then compressed (listed: direct compression), 2.5 mg (listed 1.4 mg)

Source: EP 0 432 956 B1 (Marion Merrell Dow), Example I, Table I and method of manufacture, https://data.epo.org/publication-server/rest/v1.2/patents/EP0432956NWB1/document.pdf. Close variant: CPC monohydrate 2.5 mg (listed 1.4 mg); the xylitol carrier is wet-granulated with gelatin and the API is added outside the granule.

- Per lozenge: xylitol (milled) 691.1 mg, MCC PH101 37.4, gelatin 10.0 (intragranular); CPC monohydrate 2.5, citric acid monohydrate 13.0, flavour 6.0, amorphous silica 16.0, Mg stearate 24.0 (extragranular); 800.0 mg.
- Xylitol + MCC in a high-intensity mixer, granulated with a 25 % gelatin solution made at 50 C, dried to LOD about 1.5 %, milled 2 mm, dried to LOD below 1 %, milled 1.2 mm; screened pre-blend of silica, flavour and CPC added in a V-blender; Mg stearate blended; compressed to about 800 mg.
- Results: mean 802 mg, 4.5-4.6 mm thick, crushing strength 8-9.5 kp, friability 0.7 %, disintegration more than 8 min.
- Batch about 500,000 lozenges (400 kg). The intragranular batch quantities match 250,000 lozenges and the extragranular ones 500,000, so the plant runs two granulation sub-lots (F7) and combines them. Citric acid is not in the method: it is added with the extragranular pre-blend (standard practice).

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | label names CPC monohydrate while the CoA assay is anhydrous: factor to anhydrous, then water correction (C5 hydrate-labelled API, known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 103 rows; FITS 100, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0304 lactase, chewable tablet, direct compression, 9,000 FCC units

Source: US 6,057,139 (McNeil-PPC), Example 2, https://patentimages.storage.googleapis.com/8e/ac/72/84133c717af50a/US6057139.pdf; with US 6,365,208 B1, Table 1 blend D and Table 2, https://patentimages.storage.googleapis.com/bd/ad/23/4f4f7282d67930/US6365208.pdf

- % w/w: lactase (Lactase F Amano 100, 100,000 FCC units/g) 9.6, MCC PH102 30.0, granular mannitol 59.4, Mg stearate 1.0. The description names tablets of 9,000 or 3,000 FCC units; mannitol is chosen for chewing.
- Plant choice (from the source figures, no tablet weight is given): 9,000 FCC units = 90 mg of lactase at 100,000 FCC/g, so the tablet is 937.5 mg at 9.6 %. When a lot's activity differs, the lactase quantity follows the lot and mannitol compensates.
- Lactase and MCC pre-blended 15 min (gravity blender, 30 cu ft, 14-16 rpm); mannitol delumped through #10, 10 min; Mg stearate through #20, 10 min; compressed on a rotary press.
- Stability (US 6,365,208, blend D): 97, 89 and 81 % of initial activity after 1, 3 and 6 months at 35 C. Batch 320,000 tablets (300 kg) at low RH. Standard practice assumed: hardness, thickness, IPC limits; no disintegration test for a chewable tablet (decision recorded).

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | lactase quantity from the lot's activity on its CoA (T18 content in activity units per mass, FCC units/g) |
| T8 | FITS WITH SETTING | dispensing quantities from % w/w of the batch (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The 19 % loss of activity in 6 months at 35 C means the product needs a stability overage, but the source gives none, so none is set here; if one is set, it is a declared T16 overage.

Counts: 63 rows; FITS 59, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0305 cefadroxil monohydrate, dispersible / chewable scored tablet, milled API then direct compression (listed: fluid-bed granulation), 1,000 mg (listed 250 mg)

Source: EP 1 007 006 B1 (Bristol-Myers Squibb), [0032]-[0039], https://data.epo.org/publication-server/rest/v1.2/patents/EP1007006NWB1/document.pdf. Close variant: 1,000 mg strength and direct compression after milling.

- Per tablet: cefadroxil monohydrate 1,000 mg, MCC/guar gum (174 + 26) 200, anhydrous dibasic calcium phosphate 200, crospovidone 200, mannitol 350, colloidal silica 50, Mg stearate 27, aspartame 4.5, saccharin 4.5, strawberry and raspberry aromas 30 + 30; 2,096 mg. Particle-size limits are set for each excipient.
- API milled (Fitzmill, screw feeder 55 rpm, cutters 4,600 rpm) until 98 % passes 120 mesh and 70 % passes 200 mesh; API and four excipients blended 10 min; the rest added and blended 3-4 min; compressed to flat elliptical scored tablets 23.8 x 13 x 9.88 mm, density 1.2 mg/mm3; disintegrates in water in under 2 min.
- Batch 100,000 tablets (209.6 kg) in a beta-lactam suite at low RH. Standard practice assumed: blender scale-up, hardness, friability, fineness of dispersion, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency stated as cefadroxil (as parent): no T11 factor in the chain (C5 extended) |
| T23 | FITS WITH SETTING | apparent density of the elliptical tablet from length, width and thickness against 1.2 mg/mm3 (T23 shape setting) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | subdivision of the scored tablet (C3 limits as % of series mean) |

Note: The patent states the strength as 1,000 mg monohydrate, while marketed tablets state 1 g cefadroxil (anhydrous). The two differ by 4.7 % (952.8 mg cefadroxil in 1,000 mg monohydrate). The master must state the basis; this is the known label-basis rule.

Counts: 82 rows; FITS 77, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0306 fidaxomicin, tablet (film coat added), high-shear granulation with fluid-bed drying (listed: roller compaction), 200 mg

Source: EP 2 121 716 B1 (Optimer Pharmaceuticals), Examples 1-2, Tables I-III, https://data.epo.org/publication-server/rest/v1.2/patents/EP2121716NWB1/document.pdf. Close variant: wet granulation, not roller compaction; the example tablet is uncoated (coats are described only in general terms).

- Used here: Table II with antioxidant: difimicin (fidaxomicin) 200 mg, MCC 83, starch 40, SSG 6 (intragranular), HPC 16, BHT 0.3 (sprayed as a solution in isopropanol), SSG 8 (extragranular), Mg stearate 3; 356.3 mg.
- Dry mix of API, MCC, starch, SSG and HPC sprayed with the antioxidant solution, granulated with water in a high-shear mixer, fluid-bed dried; more SSG added; lubricated; compressed to capsule-shaped biconvex tablets. Dissolution not less than 85 % in 30 min (900 ml 3 % SLS, paddle 100 rpm).
- Stability at 40 C/75 % RH, with and without desiccant (Table III).
- Batch 200,000 tablets. Standard practice assumed: BHT solution strength, water quantity, drying end point, IPC limits; a non-functional film coat at 3 %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 94 rows; FITS 92, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0307 pivmecillinam hydrochloride, film-coated IR, roller compaction, 200 mg

NO SOURCE: pivmecillinam appears only in combination-tablet examples that could not be reached; the UK SmPC is qualitative only. Not counted.

## F0308 sitafloxacin hydrate, film-coated IR, fluid-bed granulation, about 250 mg (listed 50 mg)

Source: US 6,861,071 B2 (Daiichi), Preparation Example 2 (with Preparation Example 3, Table 3, for the per-unit API amount), https://eureka.patsnap.com/patent-US6861071B2. Close variant: about 250 mg strength, disc-shaped tablet.

- Batch as printed: granules of sitafloxacin hydrate 186.5 g, mannitol 33.67, crospovidone 12.60, HPC 7.910 (as about 6 % w/v aqueous solution); tableting blend of granules 240.7 g, MCC 33.67, crospovidone 53.55, d-tartaric acid 32.20, Mg stearate 3.675, talc 3.675 (367.5 g); tablets about 525 mg.
- Per tablet, derived (not printed; the per-tablet table is cut off): 367.5 g / 0.525 g = 700 tablets, so hydrate 266.4 mg (= 250 mg sitafloxacin, matching the 266.5 mg of the capsule in Table 3), mannitol 48.1, crospovidone 18.0 + 76.5, HPC 11.3, MCC 48.1, tartaric acid 46.0, Mg stearate 5.25, talc 5.25.
- Fluid-bed granulation (FLO-MINI) spraying the HPC solution, dried, sieved No. 16; blended; single-punch compression; film coated with a 10 % Opadry solution (coat weight cut off in the text).
- Batch 200,000 tablets (105 kg) under low-actinic light. Standard practice assumed: coat weight gain 3 %, fluid-bed settings, LOD end point, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | sitafloxacin sesquihydrate to anhydrous sitafloxacin (T11 any two named forms; C5 same-basis check) |
| T17 | FITS WITH SETTING | HPC binder at about 6 % w/v (T17 % w/v made up to volume) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 93 rows; FITS 89, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0309 tedizolid phosphate, film-coated IR, aqueous wet granulation (listed: direct compression), 200 mg

Source: EP 2 393 808 B1 (Trius Therapeutics), Example 13, Table 6 and Figure 7 (page image, checked), https://data.epo.org/publication-server/rest/v1.2/patents/EP2393808NWB1/document.pdf. Close variant: wet granulation, not direct compression. Torezolid is the former name of tedizolid.

- Per tablet: tedizolid phosphate 200 mg (adjusted on the lot's potency), MCC PH101 78.0, spray-dried mannitol 78.0 (adjusted to the API amount: compensating filler), povidone K29/32 16.0, crospovidone 24.0 (part intra, part extra), Mg stearate 4.0; core 400.0 mg; Opadry II Yellow 14.0 mg; 414.0 mg.
- Figure 7: MCC, API, mannitol, povidone and part of the crospovidone sieved; wet granulated with water; dried; sieved; blended with the rest of the crospovidone and the Mg stearate; compressed; film coated.
- Batch 300,000 tablets (120 kg core). Standard practice assumed: crospovidone split (50/50), water quantity, drying end point, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The marketed strength is stated as tedizolid phosphate (the ester prodrug), so no T11 factor applies. Reading 200 mg as tedizolid and applying a factor would give about 22 % too much (known label-basis rule).

Counts: 85 rows; FITS 83, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0310 posaconazole, gastro-resistant film-coated tablet, hot-melt extrusion, 100 mg

Source: EP 4 091 604 B1, [0055]-[0063] and Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP4091604NWB1/document.pdf

- Per tablet: stage A granules of methacrylic acid / ethyl acrylate copolymer type B 250 mg + triethyl citrate 20; stage B extruded with posaconazole form I 100, xylitol 28, HPC 75, propyl gallate 2 (475 mg); stage C MCC 63, HPC 30, colloidal silica 3, croscarmellose 25; stage D sodium stearyl fumarate 4; core 600 mg; Opadry II yellow 24 mg; 624 mg. The enteric polymer is in the matrix; the film coat has no function.
- Twin-screw HME (200 +/- 50 rpm on the Pharma 11 extruder, 215 +/- 10 rpm on the Pharma 24); zones 40-140 C, die 140 C; extrudate milled in a conical mill at 4,000 rpm through 32G-24R-18R screens with cooling, milling temperature not above 50 C (55 C in a comparative example slowed release and raised impurities); sieve analysis.
- Core 596-603 mg, thickness 6.38-6.40 mm, hardness 122-141 N; dissolution 2 h in 0.01 N HCl then pH 6.8 buffer with polysorbate 80 (5 % at 120 min acid, 95 % at 10 min buffer).
- Batch 200,000 tablets (120 kg core). Standard practice assumed: stage-A granulation method, feed rate, compression and coating settings.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | compression weight from the milled extrudate's assay (T18 content from in-process result; refused if T9 was already applied to the same API, known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 107 rows; FITS 104, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0311 artemether + lumefantrine (benflumetol), uncoated IR, wet granulation with starch paste, 20 + 120 mg

Source: EP 0 500 823 B1 (Ciba-Geigy / Academy of Military Medical Sciences, Beijing), Example 8, https://data.epo.org/publication-server/rest/v1.2/patents/EP0500823NWB1/document.pdf

- Per tablet: lumefantrine 120 mg, artemether 20, corn starch 100, dextrin 40, polysorbate 80 0.6, 15 % corn-starch paste "sufficient", Mg stearate 3. The stated solids add up to 283.6 mg plus the paste starch; no tablet weight is given.
- Artemether through 100 mesh, lumefantrine through 60 mesh, mixed with starch and dextrin, passed three times through 40 mesh; polysorbate 80 added to the paste; wet granulated; sized through 40 mesh; vacuum dried at 50-60 C; Mg stearate added; compressed.
- Plant handling of the q.s. paste: the paste used is weighed and its starch counted (15 %); the target tablet weight is the actual lubricated granule weight divided by the theoretical number of tablets.
- Batch 500,000 tablets. Standard practice assumed: granulator type (listed high-shear), paste preparation, drying end point, IPC limits. This is the originator patent formula, not the later marketed one.

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | excess of both lumefantrine and artemether taken from the corn starch (T10 several adjusted materials into one filler) |
| T8 | FITS WITH SETTING | starch from the paste = paste used x 15 % (T8 "% of" a recorded weight) |
| T6 | FITS WITH SETTING | target tablet weight = actual lubricated granule weight / theoretical number of tablets (T6 ratio) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The weight from the actual yield carries both APIs (known rules: compress to the actual granule yield, wave 2; two APIs controlled by one tablet weight, wave 2).

Counts: 86 rows; FITS 81, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0312 primaquine phosphate, film-coated IR, fluid-bed granulation, 15 mg

NO SOURCE: the WHO public assessment reports give excipient names only; no patent or article with quantities was found. Not counted.

## F0313 quinine sulfate, sugar-coated IR (listed: film-coated), wet granulation with starch/PVP paste, 300 mg

Source: Osyquine Tablets (Quinine Sulfate Tablets BP 300 mg), NAFDAC Greenbook SmPC file, batch formula, https://admin.greenbook.nafdac.gov.ng/uploadImage/smpc_files/2023/09/04/202309044437bc96-a556-5545-9132-da5a0c2c28d5.pdf. Close variant: sugar-coated, not film-coated; equipment not stated.

- Per tablet (batch 600,000): quinine sulfate 300 mg (assay-adjusted), dicalcium phosphate 22.0, maize starch 21.5 (changes with the API quantity); binder of maize starch 17.7, PVP K-30 10.0, sodium benzoate 1.0 in water (33 kg); talc 8.8, SSG 20.0, Mg stearate 4.0, plus extra dried maize starch 2.352 kg (10 % of the two starch lines, for moisture lost on drying); core 405 mg.
- Sugar coat per tablet: dusting (calcium carbonate 20, water 20), dusting solution (sugar 42.82, gelatin 2.0, parabens), smoothing (sugar 31.5, gelatin 0.5, TiO2 2.4, CaCO3 4.8, parabens), plain (sugar 48.0, TiO2 9.0), polish (beeswax 0.4, carnauba 0.4 in IPA); 10 % extra sugar for coating losses; coated 587 mg as stated.
- Only stage names are given. Standard practice assumed: planetary/high-shear granulation, fluid-bed drying, LOD, sieve sizes, sugar-coating rounds and IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | label names the sulfate dihydrate while the BP assay is on the dried substance: hydrate-labelled chain (known, wave 1) |
| T11 | FITS WITH SETTING | base equivalent of the 2:1 salt, 300 mg = about 248 mg quinine (T11 with 2 drug molecules per salt unit) |
| T8 | FITS WITH SETTING | extra dried starch = 10 % of the two starch lines (T8 "% of" a T2 sum) |
| C1 | FITS WITH SETTING | core mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| F2 | FITS WITH SETTING | sugar-coating rounds until the coated weight is reached (F2 high maximum) |
| T5 | FITS WITH SETTING | sugar-coat gain on the uncoated core (T5 base option) |
| T14 | FITS WITH SETTING | weight-variation route refused for sugar-coated tablets; individual content results used (T14 safety setting) |

Note: The 10 % sugar overage is a plain T16 on three lines, shown in reconciliation. The extra starch is dispensed but left out of the 243.000 kg theoretical core batch, so cores are compressed to the actual yield (T15).

Counts: 113 rows; FITS 105, FITS WITH SETTING 8, NEW SETTING 0, GAP 0.

## F0314 entecavir, film-coated IR, fluid-bed spray-on of a drug solution, 0.5 mg

Source: EP 1 267 880 B1 (Bristol-Myers Squibb), [0019]-[0031] and Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP1267880NWB1/document.pdf

- Per tablet (% w/w = mg): entecavir 0.50, lactose monohydrate 60.00, MCC 32.50, crospovidone 4.00, povidone 2.50, Mg stearate 0.50, water q.s.; 100.00 mg.
- Entecavir and povidone dissolved in water at 25-80 C; sprayed onto the lactose/MCC carrier in a fluid bed (air-stream route; spray pattern kept on the carrier, atomising 0-2 bar); solvent removed at 50-80 C in the same unit; mixed with crospovidone and Mg stearate; compressed; optional aqueous film coat (HPMC, PEG, TiO2, iron oxides, polysorbate 80).
- Batch 1,000,000 tablets (100 kg) with potent-API containment. Standard practice assumed: solution strength and temperature, solution overage for line losses, spray rate, LOD end point, coat at 3 %, IPC limits.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | entecavir + povidone solution made to a stated % w/v at temperature (T17 % w/v made up to volume) |
| T11 | FITS WITH SETTING | entecavir monohydrate to anhydrous entecavir (T11 any two named forms; C5) |
| T14 | FITS WITH SETTING | stratified content uniformity at start, middle, end (known, wave 3) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The example does not say whether 0.50 mg is anhydrous or the monohydrate; the marketed tablet states the anhydrous amount. The two differ by 6.5 % (known rule: salt or hydrate not named).

Counts: 97 rows; FITS 92, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0315 letermovir (amorphous), film-coated IR, dry granulation by roller compaction (listed: direct compression), 240 mg

Source: EP 3 010 891 B1 (AiCuris), Table 19 (page image, checked), Table 20, Tables 13-17, Table 21 and [0237]-[0250], https://data.epo.org/publication-server/rest/v1.2/patents/EP3010891NWB1/document.pdf. Close variant: roller compaction, not direct compression.

- Granulate per tablet: precipitated amorphous letermovir 240.000 mg, MCC 132.00, colloidal silica 4.000, povidone 25 20.000, croscarmellose 12.00, Mg stearate 2.400 (410.400). Final blend: MCC 160.000, croscarmellose 18.000, silica 8.000, Mg stearate 3.600; core 600.00 mg.
- Coat: macrogol 6000 3.600, hypromellose 10.800, TiO2 2.880, yellow iron oxide 0.720 (in two water portions, removed); 618.000 mg. The extragranular MCC is the coarse grade, as in the optimised formula of Table 20.
- Slugging trials, then a roller compactor scaled to 12 kg; content uniformity at start, middle and end of compression. IPC for the 30 mg size: mass 75 +/- 3 %, friability not more than 1.0 %, disintegration in water not more than 30 min. Dissolution Q = 80 % in 30 min.
- Batch 200,000 tablets (120 kg core). Standard practice assumed: roll settings, blend times, IPC limits for the 240 mg size, coating settings.

| Template | Result | Step |
|---|---|---|
| T9 | FITS WITH SETTING | amorphous API assay on the anhydrous basis, corrected with the lot's water (round-3 T9 bases) |
| T14 | FITS WITH SETTING | stratified content uniformity at start, middle, end of compression (known, wave 3) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 92 rows; FITS 88, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0316 bazedoxifene acetate, film-coated IR, direct compression, 20 mg

Source: US 7,771,744 B2 (Wyeth), Example 1, https://eureka.patsnap.com/patent-US7771744B2

- Per tablet: bazedoxifene acetate 22.56 mg (88.68 % free base, = 20 mg bazedoxifene), MCC PH101 32.76, lactose fast flow 32.76, ascorbic acid 6.80, SSG 4.12, Mg stearate 1.00; 100.00 mg. Batch as printed: 10 kg (100,000 tablets).
- Footnote: the API amount follows the lot's potency and MCC is adjusted to match (compensating filler).
- Tumble blend of API, MCC, lactose, ascorbic acid and SSG; Mg stearate added and blended; compressed to 100 mg. Dry process keeps polymorph form A.
- Batch 1,000,000 tablets (100 kg). Standard practice assumed: blend times, press settings, IPC limits, and an HPMC film coat at 3 % (the example is uncoated).

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | acetate to base given as 88.68 % base content, checked against the molecular weights (T11 named forms; typed-factor check, known wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The footnote does not say whether the lot's potency is given as acetate or as bazedoxifene base. If it is as base and T11 is also applied, the tablets get 12.8 % too much (known C5 "as parent" rule).

Counts: 64 rows; FITS 61, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0317 celiprolol hydrochloride, film-coated IR, fluid-bed granulation, 200 mg

NO SOURCE: the only patent found describes an API-only granulate (no tablet composition); SmPCs are qualitative. Not counted.

## F0318 chlorthalidone, uncoated IR, solvent fluid-bed spray-on dispersion then direct compression (listed: foam granulation), 25 mg

Source: EP 0 125 420 B1 (Boehringer Ingelheim), Examples 1-4 (tables on page images, checked), https://data.epo.org/publication-server/rest/v1.2/patents/EP0125420NWB1/document.pdf. Close variant: methanol spray-on dispersion on lactose, not foam granulation.

- Dispersion (Example 2): PVP 22.5 kg dissolved in 363 l methanol FIRST, then chlorthalidone 45 kg added; heated to 55 C, held 1 h, cooled, 18 h at room temperature; sprayed onto 112.5 kg lactose in a Glatt WSG-120 (inlet 60 C, 1.0 l/min, product 49 C, final 75 C, then 10 min at 84 C inlet). Theoretical 250 mg/g; assayed 240 mg/g; residual methanol 1.8 %.
- Water treatment (Example 3): 139.3 kg dispersion sprayed with 300 kg water (inlet 85 C, 1,800 ml/min, 3.25 h); methanol 7,400 to 172 ppm; content 231 to 248 mg/g.
- Tablet (Example 4): dispersion 100.00 mg (250 mg/g), MCC 44.5, SSG 6.0, colloidal silica 2.0, Mg stearate 0.5; 153.0 mg; direct compression.
- Example 1: adding chlorthalidone before the PVP turned about 37 % of it into the methyl ether, against 0.8 % in the right order. Batch 1,000,000 tablets (153 kg) from one dispersion lot. Standard practice assumed: blend times, IPC limits, methanol limit (ICH Q3C).

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | methanol given by volume, converted by density (T17 liquids by volume) |
| T8 | FITS WITH SETTING | water for the methanol-removal spray scaled per kg of dispersion (T8 "% of" a recorded weight) |
| T18 | FITS WITH SETTING | dispersion quantity from its measured content after water treatment (T18 in-process content) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The measured contents (231-248 mg/g) are 0.8-7.6 % below the 250 mg/g used in Example 4, so the 100 mg line is T18 from the lot, with MCC compensating (T10).

Counts: 91 rows; FITS 86, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0319 cilnidipine, porous orodispersible tablet, spherical agglomerates then direct compression and sublimation (listed: film-coated DC), 10 mg

Source: Formulation and Evaluation of Polymeric Spherical Agglomerates-Based Porous Orodispersible Tablets of Cilnidipine, Pharmaceutics 2025 (PMC11859621), Tables 1, 2, 4, 7, 8 and sections 2.3, 2.5, https://europepmc.org/article/PMC/PMC11859621. Close variant: uncoated porous ODT made from a drug agglomerate (listed film-coated IR); lab scale.

- Agglomerate F4: cilnidipine 100 mg in ethanol, PEG 6000 100 mg and talc 20 mg in dichloromethane, poured into 120 ml water at 1,200 rpm for 1 h; filtered, air-dried; drug content 97.49 % (of theory), yield 84 %.
- Tablet T3: agglomerate 15 mg (stated as about 10 mg drug), DC mannitol 19, MCC PH102 20, croscarmellose 4, crospovidone 4, ammonium bicarbonate 15, Mg stearate 2, talc 1; 80 mg. Mixed in a bag, #44 sieve, compressed (6 mm flat, 3-4 kg), vacuum dried at 60 C / 250 mm Hg overnight to sublime the ammonium bicarbonate.
- Results T3: weight 73.94 mg, hardness 3.5 kg, friability 0.28 %, disintegration 6.3 s, content 93.1 %; stable 3 months.
- Batch 500,000 tablets under light protection. Standard practice assumed: agglomeration scale-up, solvent limits, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | agglomerate quantity from its measured % w/w drug content (T18 in-process content) |
| T6 | FITS WITH SETTING | Carr index, Hausner ratio and angle of repose of the agglomerates (T6, angle of repose option) |
| T5 | FITS WITH SETTING | weight loss on vacuum drying (T5 loss mode) |
| C1 | FITS WITH SETTING | weight loss within limits of the ammonium bicarbonate share computed from the formula (C1 option: limits around computed value) |
| F2 | FITS WITH SETTING | vacuum drying repeated until there is no further weight change (round-3 repeat-until option) |
| C1 | FITS WITH SETTING | compression mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: "About 10 mg in 15 mg of agglomerate" does not follow from Table 1: at 100:100:20 and 97.5 % of theory, 15 mg holds about 6.6 mg. The quantity must come from the measured % w/w content, not from the claim or from a "% of theory" figure (known rules, waves 1 and 3). The weight targets must name their stage, before or after sublimation (known, wave 2).

Counts: 85 rows; FITS 78, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0320 eplerenone (micronised), film-coated IR, high-shear granulation with fluid-bed drying (listed: direct compression), 25 mg

Source: EP 1 135 139 B1 (G.D. Searle / Pharmacia), Example 1, Table 1, and general process [0195]-[0203], https://data.epo.org/publication-server/rest/v1.2/patents/EP1135139NWB1/document.pdf. Close variant: wet granulation; the patent prefers it and gives no direct-compression example.

- Per tablet: eplerenone 25.00 mg, lactose monohydrate 35.70, MCC PH101 15.38 (7.50 % intra + 10.59 % extra), croscarmellose 4.25, HPMC 603 2.55, SLS 0.85, talc 0.85, Mg stearate 0.42; core 85 mg (7/32 in tooling). Opadry White 2.55 mg (3 %).
- Dry mix in a high-shear granulator (3 min is enough); water added over 3-5 min to 25-45 % water in the wet mass, 1-3 min more mixing; wet milled; fluid-bed dried (2-4 % moisture changes hardness); sized; blended 5-25 min with talc and extragranular MCC to a blend-uniformity RSD of about 6 % or less; Mg stearate; compressed (25 mg: 3.5-9 kP); coated about 3 %.
- Batch 1,000,000 tablets (85 kg core). Standard practice assumed: equipment sizes, drying temperatures, IPC limits other than those above.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | granulating water from a target of 25-45 % water in the wet mass (T17 target % solids) |
| T5 | FITS WITH SETTING | coat gain of 3 % on a named base (T5 base option; the source gives both core and coated tablet) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 93 rows; FITS 89, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## Totals for F0301-F0320

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0301 | 124 | 119 | 5 | 0 | 0 |
| F0303 | 103 | 100 | 3 | 0 | 0 |
| F0304 | 63 | 59 | 4 | 0 | 0 |
| F0305 | 82 | 77 | 5 | 0 | 0 |
| F0306 | 94 | 92 | 2 | 0 | 0 |
| F0308 | 93 | 89 | 4 | 0 | 0 |
| F0309 | 85 | 83 | 2 | 0 | 0 |
| F0310 | 107 | 104 | 3 | 0 | 0 |
| F0311 | 86 | 81 | 5 | 0 | 0 |
| F0313 | 113 | 105 | 8 | 0 | 0 |
| F0314 | 97 | 92 | 5 | 0 | 0 |
| F0315 | 92 | 88 | 4 | 0 | 0 |
| F0316 | 64 | 61 | 3 | 0 | 0 |
| F0318 | 91 | 86 | 5 | 0 | 0 |
| F0319 | 85 | 78 | 7 | 0 | 0 |
| F0320 | 93 | 89 | 4 | 0 | 0 |
| **Total (16)** | **1,472** | **1,403** | **69** | **0** | **0** |

Counted 16 formulations, 1,472 rows: FITS 1,403, FITS WITH SETTING 69, NEW SETTING 0, GAP 0. NO SOURCE 4 (F0302, F0307, F0312, F0317).

New settings and gaps: none. Every non-FITS row uses a setting from version 2, the round-3 additions or a known wave 1-3 finding.

Safety rules:
- Order of addition decides the dose (F0318, new): the PVP must be dissolved in the methanol before the chlorthalidone goes in. In the reverse order about 37 % of the drug became the methyl ether, against 0.8 %. Existing templates cover it (F1 steps in order, a C4 confirmation for each addition), but the master must hold the additions as separate ordered steps and must not allow them to be merged or reordered.
- Batch column written for two batch sizes (F0303, new): the intragranular batch quantities are for 250,000 lozenges and the extragranular ones for 500,000. One granulation lot blended with the printed extragranular amounts gives about 4.8 mg CPC per 800 mg lozenge, about 1.9 times the 2.5 mg. Batch quantities must always come from T8 (per unit x one batch count). A master must refuse batch quantities copied from a source column, and the author is shown which lines imply a different count.
- Reminders of known rules, with their size here:
  - Label basis: cefadroxil monohydrate against cefadroxil, 4.7 % (F0305); entecavir monohydrate against anhydrous, 6.5 % (F0314); tedizolid phosphate read as tedizolid, about 22 % (F0309).
  - Hydrate-labelled quinine sulfate with a dried-basis assay, 4.8 % too much without the hydrate factor (F0313).
  - Bazedoxifene potency "as base" with T11 also applied, 12.8 % too much (F0316).
  - Content of an in-house intermediate:
    - The chlorthalidone dispersion is 231-248 mg/g against 250 theoretical. Using the pre-treatment 231 mg/g for treated material at 248 mg/g gives 7.4 % too much (content taken at the wrong stage) (F0318).
    - The cilnidipine agglomerate's "about 10 mg" claim against about 6.6 mg from its make-up is 34 % less (F0319).
  - Granule assay used again after T9 (F0310).
  - Weight from the actual yield: q.s. paste solids that stay in the tablet (F0311); extra dried starch outside the theoretical batch (F0313).
  - Each layer weighed separately in a bilayer tablet (F0301).
  - Process-critical limits not to be widened without QA: extrudate milling at no more than 50 C (F0310); residual methanol and methyl ether (F0318).

Sources that contradict themselves:
- EP 3 346 995 B1 (F0301): [0262] prints croscarmellose 19.4 mg as 8.00 % of the 323 mg layer (it is 6.0 %). It gives TAF hemifumarate as 28.1 mg against 28 mg in F7. The layer lines add up to 323.1 and 377.1 mg against 323 and 377 mg (rounding).
- EP 0 432 956 B1 (F0303):
  - The intragranular batch quantities match 250,000 lozenges and the extragranular ones 500,000, while the text says about 500,000 were made.
  - Citric acid is in Table I but not in the method.
  - The xylitol batch quantity (172.755 kg) does not match 691.1 mg x 250,000 (172.775 kg).
- EP 1 007 006 B1 (F0305):
  - A flat ellipse of 23.8 x 13 x 9.88 mm at 1.2 mg/mm3 weighs about 2.9 g, against the 2,096 mg formula.
  - Claim 1 asks for 10-12 % MCC/guar and 2.5-10 % silica, but the example has 9.5 % and 2.4 %.
  - Claim 2 says sodium saccharin; the example says saccharin.
- EP 2 121 716 B1 (F0306):
  - Example 1 says more SSG was added after drying, but Table I has one SSG line and no total (it sums to 342.0 mg). Table II has 6 + 8 mg SSG and MCC 83 mg (356.3 mg).
  - HPC is in the dry mix and is also named as the granulating agent in water.
  - The antioxidant solvent is methanol in Example 1 and isopropanol in Table II.
- EP 2 393 808 B1 (F0309): the 14.0 mg coat is printed as 3.4 % (3.5 % of the 400 mg core). The granulating water carries the mannitol footnote marker.
- EP 4 091 604 B1 (F0310): the screen openings and sieve sizes are printed in mm (32G "813 mm", #60 "250 mm"), which must be micrometres. Example 1's stage C is headed "Lubrication" but holds the fillers and disintegrant.
- Osyquine batch formula, NAFDAC (F0313):
  - The coat gain of 182 mg counts the 20 mg dusting water as solid; the solids add up to 162 mg, so the coated tablet is 567 mg, not 587 mg.
  - The batch column of the coat gain repeats 243.000 kg.
  - The dispensed core lines add up to 245.352 kg against 243.000 kg stated.
  - Section 3 describes an uncoated tablet.
  - The extra-starch remark is marked **** but the line is marked ***.
- EP 1 267 880 B1 (F0314): Example 2 is called a tablet, but its table is headed "per capsule". Example 1 does not say whether 0.50 mg is anhydrous entecavir or the monohydrate.
- EP 3 010 891 B1 (F0315):
  - Table 19 prints the 120 mg final-blend sum as 30.000 (it is 300.000).
  - The 30 mg column's coat (2.30 mg) and water amounts are not proportional to the other strengths (2.25 mg).
  - Table 21 sets "absence of E. coli" with a limit of not more than 100 cfu/g.
  - Forced degradation is reported for a 20 mg strength that the series does not have.
- EP 0 125 420 B1 (F0318): water treatment that removes 0.74 % methanol raises the content from 231 to 248 mg/g (+7.4 %), where about 232.7 mg/g would be expected. Example 1B gives the methanol as "25" with no unit.
- Pharmaceutics 2025 cilnidipine (F0319):
  - Table 2 states the T4 total as 80 mg, but its lines add up to 75 mg.
  - 15 mg of agglomerate cannot hold about 10 mg of drug at the Table 1 ratio (about 6.6 mg).
  - The tablets weigh 66.1 mg (T1) and 73.9 mg (T3) after vacuum drying. Compression weight minus the ammonium bicarbonate is 60 and 65 mg, so either sublimation was incomplete or the weights were taken at another stage.
- EP 1 135 139 B1 (F0320): [0204] puts the coat at about 3 % of the coated tablet's weight, while Table 1 gives 2.55 mg, which is 3 % of the 85 mg core.
