# Wave 4, part 4 (F0361-F0380)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the shared source finder; this part worked from those files only (no new searches).

## F0361 tetrabenazine, scored IR, high-shear wet granulation, 25 mg

NO SOURCE: the only tetrabenazine tablet application found (Biovail, release-retarding) has no text on the EPO server and could not be downloaded; the other hits are deutetrabenazine / dihydrotetrabenazine, different APIs. Not counted.

## F0362 vigabatrin, scored tablet that dissolves in water, low-shear wet granulation (listed: film-coated IR, high-shear)

Source: US 10,813,898 B2 (Orphelia Pharma), Table 3 mixture 007B, Tables 4 and 6, section A.1.b, https://patentimages.storage.googleapis.com/63/4d/5f/320a92ff23a6ab/US10813898.pdf. Close variant: uncoated scored tablet that dissolves in water, not film-coated; granulation is low-shear with water; the patent does not say whether the 500 mg tablets of mixture 007B were made by direct compression or wet granulation (wet granulation used here).

- Mixture 007B (% w/w): vigabatrin 78.7, mannitol (Pearlitol 160C) 9.9, crospovidone (Polyplasdone XL) 9.9, sodium stearyl fumarate 1.5. The 500 mg tablet is 635.3 mg (Table 4 average of 30 tablets 635.93 mg).
- Wet granulation route: low-shear premix of all but the fumarate, water added, wet mass granulated, dried in an oven, fumarate blended in a V-blender, compressed.
- Specification (Table 6): mean mass 635 mg +/- 5 %, uniformity of mass, subdivided halves (30 halves: not more than 1 outside 85-115 %, none outside 75-125 % of the mean), friability not more than 1.0 %, disintegration in water not more than 1 min at 37 C and 3 min at 20 C, hardness for information (36-41 N).
- Batch 400,000 tablets (254.1 kg). Standard practice assumed: water quantity, drying temperature and LOD limit, screens, score tooling.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w of the batch weight (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | subdivision: 30 halves against 85-115 % / 75-125 % of their mean (C3 limits as % of series mean; known, wave 1) |
| T7 | FITS WITH SETTING | loss of mass on splitting: whole tablet against its two halves (per-unit value from several readings on one unit) |

Note: Table 6 belongs to mixture 008 (79.5 % vigabatrin) but repeats the 635 mg mean mass that fits 007B (78.7 %). At 79.5 % a 635 mg tablet holds about 505 mg (+1 %); 500 mg needs 629 mg. The master takes the target weight from the blend it actually uses.

Counts: 104 rows; FITS 99, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0363 belzutifan, film-coated IR (listed: fluid-bed wet granulation): spray-dried dispersion, slugged

Source: EP 3 873 443 B1 (Peloton Therapeutics / Merck), Example 8 [0270], Example 10 Table 16 and [0291], Example 11, https://data.epo.org/publication-server/rest/v1.2/patents/EP3873443NWB1/document.pdf. Close variant: amorphous 25:75 dispersion in HPMCAS-H, dry granulated by slugging, not crystalline fluid-bed granulation; the example tablets are uncoated, so a standard HPMC coat at 3 % is assumed for the listed film-coated type.

- SDD (Example 8, 9 kg): drug 2.25 kg dissolved in acetone 103.5 kg (8 % solids with the polymer), HPMCAS-H 6.75 kg added, mixed 8 h; spray dried (inlet 76 +/- 20 C, outlet 42 +/- 5 C, feed 10 +/- 2 kg/h, gas 170 +/- 20 kg/h, atomisation 2.5 +/- 0.5 bar); tray dried 40 C about 14 h; double LDPE bags with desiccant at 2-8 C.
- Tablet (Table 16, mg): intragranular SDD 160 (= 40 mg), MCC PH101 175, mannitol 75, croscarmellose 20, Mg stearate 2.5; extragranular croscarmellose 16.25, mannitol 50, Mg stearate 1.25; 500 mg.
- Slugs to a solid fraction of about 0.7, milled through 30 mesh, extragranular parts blended, compressed with capsule tooling (about 16.5 x 8.5 mm, about 90 MPa for 15 kP; Example 11: 14 kP = 1.61 MPa tensile strength); disintegration below 1 min.
- Batch 300,000 tablets (150 kg cores; 48 kg SDD from six runs at the Example 8 scale) in a potent-compound suite. Standard practice assumed: blend times, slug press settings, coat formula, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T23 | FITS WITH SETTING | tablet tensile strength for capsule-shaped tooling (T23 shape setting) |
| T18 | FITS WITH SETTING | SDD quantity from the SDD lot's measured belzutifan content, not the 25 % preparation ratio (T18 in-process content; known, wave 1) |

Note: Example 8 recovers 8.2 kg from 9.0 kg of solids (91.1 %) but states 92 %. Table 18 prints extragranular Kollidon CL-F 28.75 mg as 5.57 % (it is 5.75 %), so its % column sums to 99.82 %.

Counts: 196 rows; FITS 192, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0364 brigatinib, film-coated IR (listed: high-shear wet granulation, 90 mg): freeze-dried amorphous dispersion on silica, blended and compressed

Source: EP 3 752 132 B1 (Sandoz), tablet Example 1 in [0107] with the dispersion of Example 2-1 [0119], https://data.epo.org/publication-server/rest/v1.2/patents/EP3752132NWB1/document.pdf. Close variant: amorphous dispersion brigatinib:Syloid 72FP 1:1 made by freeze-drying; about 30 mg brigatinib per tablet (from the 1:1 ratio; listed 90 mg); the tablet manufacturing steps are not given.

- Per tablet (printed under a [mg] header as 0,060 etc.; the values are grams): dispersion 60 mg (about 30 mg brigatinib), lactose monohydrate 20, MCC 61, sodium starch glycolate 4, Mg stearate 3, colloidal silica 2; core 150; Opadry II 5; 155 mg.
- Dispersion: brigatinib dissolved in acetonitrile/water 50:50 v/v (about 20 mg/ml), added to Syloid 72FP suspended in the same solvent, frozen in liquid nitrogen, freeze-dried at 0.02-1.0 mbar; amorphous by XRPD after 1 week at 40 C/75 % RH.
- Packaging with a water vapour transmission rate of at most 1 g/m2/day (Alu/Alu).
- Batch 200,000 tablets (30 kg cores; 12 kg dispersion from 6 kg brigatinib in about 410 l of solvent, several freeze-dryer loads). Standard practice assumed (none given): sieving, dry blending and direct compression (no water, to keep the drug amorphous), freeze-drying cycle, coat solids, IPC limits.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | 50:50 v/v acetonitrile/water measured by volume via density (T17 liquids by volume) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T18 | FITS WITH SETTING | ASD quantity from its measured brigatinib content; lab lots were 102:103, not exactly 1:1 (T18 in-process content; known, wave 1) |

Note: Unit error: the [0107] table header says mg but the values (0,060 to 0,155) are grams; a master typed from the printed numbers would be 1,000 times too small (caught by the known tooling-fit check, wave 2).

Counts: 174 rows; FITS 170, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0365 enzalutamide, film-coated IR, spray-dried dispersion and roller compaction (listed 40 mg)

Source: EP 3 725 778 B1 (Medivation / Astellas), Example 17 [0234]-[0235] and Table 16, https://data.epo.org/publication-server/rest/v1.2/patents/EP3725778NWB1/document.pdf. Close variant: 80 mg strength (40 mg is not in the source).

- Per tablet (Example 17): enzalutamide 80.0 + HPMCAS-MG 240.0 as a 1:3 spray-dried dispersion (320 mg), calcium hydrogen phosphate hydrate 160.6, croscarmellose sodium 54.0, Mg stearate 5.4; core 540.0; film coat 16.2 (3.0 %); 556.2 mg.
- 1:3 dissolved in acetone, spray dried (GEA QSD-0.8-CC); blended with the phosphate, croscarmellose and Mg stearate, roller compacted (Freund TF-MINI), granules blended with more croscarmellose and Mg stearate, compressed on a rotary press, film coated (Hi-Coater HCT-30).
- Not given, standard practice: the intra/extragranular split of croscarmellose and Mg stearate, spray-solution solids and spray conditions (Example 10 shows 18 % solids on a PSD-1 dryer for another dispersion), coat formula, IPC limits.
- Batch 300,000 tablets (162 kg cores; 96 kg dispersion) with hormone / cytotoxic containment.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T18 | FITS WITH SETTING | SDD quantity from the SDD lot's measured enzalutamide content (T18 in-process content; known, wave 1) |

Note: Table 16's tablet-size column runs the dimensions together in the text layer (read as 14.8 x 7.8 mm); the film-coat composition is not given (only "film coating agent").

Counts: 190 rows; FITS 187, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0366 glasdegib maleate, film-coated IR, continuous dry granulation line (source: 25 mg dry-granulated core)

Source: EP 3 286 176 B1 (Pfizer), Example 4 Table 4 [0057] and [0064]-[0068], https://data.epo.org/publication-server/rest/v1.2/patents/EP3286176NWB1/document.pdf. Close variant: 25 mg core of 125 mg; the process for Table 4 is not described (intra- and extragranular Mg stearate and [0064] point to dry granulation); 100 mg made as the same blend at 4 times the weight; continuous-line steps and the film coat are standard practice.

- Per 25 mg core: glasdegib maleate Form 1 32.765 mg (26.2 %; = 25 mg base), MCC 58.157, dibasic calcium phosphate anhydrous 29.078, sodium starch glycolate 3.750, Mg stearate 0.625 intragranular + 0.625 extragranular; 125.000 mg.
- Used here: 100 mg = 500 mg core (131.06 mg maleate), HPMC film coat 3 % assumed.
- The maleate needs no desiccant in the pack; the dihydrochloride monohydrate does ([0067]-[0068]): the master names salt and form.
- Line: loss-in-weight feeders, continuous blender, roller compactor, mill, extragranular Mg stearate feeder and blender, press; 200 kg run at 50 kg/h (400,000 tablets) in a potent-compound suite. Standard practice assumed: feed rates, residence times for diversion, compaction settings, IPC rounds.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | typed factor 32.765/25 = 1.3106 checked against the molecular weights (490.5/374.4 = 1.3100, 0.05 %) (known typed-factor check, wave 1) |
| T8 | FITS WITH SETTING | each feeder's delivered mass = rate x run time (T8 rate x time) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 5 gives the drug range as 16.383-32.765 %. The upper value is the mg of Table 4 (where it is 26.2 %) and the lower one is half of it, so the range looks like mg read as %.

Counts: 146 rows; FITS 142, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0367 lapatinib ditosylate monohydrate, film-coated IR, high-shear wet granulation, 250 mg

Source: EP 2 958 552 B1 (Hexal), Example 1 [0055]-[0056] and [0049], https://data.epo.org/publication-server/rest/v1.2/patents/EP2958552NWB1/document.pdf

- % of the film-coated tablet (675 mg): lapatinib ditosylate monohydrate 60.0 (405 mg = 250 mg base), povidone 7.5, sodium starch glycolate 5.5 (half intra, half extra), MCC 22.6, Mg stearate 1.4, film coat (Opadry YS-1-13065-A) 3.0; core 654.75 mg.
- Sieve 1.0 mm; API, MCC and half the SSG dry blended in a high-shear granulator; povidone dissolved in 5 parts water added with stirring, granulated at 20 C; fluid-bed dried at 35 C to water not more than 3 % (LOD 1 g, 105 C, 3 h); sieve 1.0 mm; 10 min at 25 rpm with the other half of the SSG; Mg stearate (0.5 mm) 3 min; rotary press; film coat.
- Batch 300,000 tablets (196.4 kg cores) in a cytotoxic suite. Standard practice assumed: impeller/chopper settings, end point, hardness, coat solids.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | lines from % of the coated tablet weight, 675 mg (T8 % w/w mode) |
| T11 | FITS WITH SETTING | ditosylate monohydrate to base: the source's 405 mg (factor 1.620) against the molecular weights 943.5/581.1 = 1.6237 (405.9 mg, 0.2 %) (known typed-factor check, wave 1) |
| T8 | FITS WITH SETTING | binder water = 5 x PVP weight (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | coat = 3 % of the final coated weight (T5 base option: final weight) |

Note: A master that took the % lines on the 654.75 mg core instead of the 675 mg coated tablet would weigh 392.9 mg salt per tablet (about 3 % low): the % base must be named (known pattern, wave 3: % of the coated tablet applied to the core).

Counts: 156 rows; FITS 150, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0368 mercaptopurine, scored IR tablet, fluid-bed spray granulation from an alkaline ethanol-water solution (listed: single-pot)

Source: EP 1 729 727 B1 (Hadasit), Example 2 [0079] with the spray settings of Example 3 [0083]-[0087], https://data.epo.org/publication-server/rest/v1.2/patents/EP1729727NWB1/document.pdf. Close variant: the drug is dissolved with KOH and sprayed onto lactose in a fluid bed (listed single-pot granulation); the tablets in the source are not scored (score added, as on the marketed 50 mg tablet).

- Example 2 (lab batch): citric acid 4.6 g in 69 ml ethanol/water 70:30 sprayed onto lactose 80 g; 6-MP 11.4 g with KOH 4.0 g in 430 ml ethanol/water 80:20 sprayed on; dried in the bed 55 C 30 min; 1.6 mm sieve; 100 g granulate + potato starch 26, MCC 11.4, crospovidone 7.5, colloidal silica 0.5 (8 min), Mg stearate 2.2 (2 min); 12 mm flat punches; 647 mg with 50 mg 6-MP.
- Per tablet (derived, x 50/11.4): 6-MP 50.0, lactose 350.9, citric acid 20.2, KOH 17.5, potato starch 114.0, MCC 50.0, crospovidone 32.9, silica 2.2, Mg stearate 9.6; 647.4 mg.
- Spray settings (Example 3): atomising air 1 bar, nozzle 1.0 mm, inlet 55 C, exhaust about 24 C, 9-11 g/min.
- Batch 200,000 tablets (129.5 kg; about 377 l of 80:20 and 60 l of 70:30 solution) in a cytotoxic suite with a flameproof fluid bed. Standard practice assumed: scaled spray rate, score tooling, hardness and friability limits.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | ethanol measured by volume via density 0.8 g/ml (T17 liquids by volume) |
| T18 | FITS WITH SETTING | granulate quantity from its measured 6-MP content (T18 in-process content; double-adjustment rule, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | score: halves within % of their mean (C3 limits as % of series mean; known, wave 1) |
| T26 | FITS WITH SETTING | ethanol/water 70:30 and 80:20 by volume (T26 by % v/v with the alcohol table; known, wave 1) |
| T11 | FITS WITH SETTING | KOH from the potency-adjusted 6-MP moles, about 1.1 equivalents (T11 molar factor between species) |

Note: The source does not say whether "50 mg 6-MP" is anhydrous or monohydrate (factor 170.19/152.18 = 1.118): read the wrong way, the tablet has about 11 % too much or 10.6 % too little; the master states the basis (known label-basis rule, wave 1). Example 1 reports 100 g granulate holding 13.2 g 6-MP, although only 98.2 g of solids went in (13.2 g drug + 85 g lactose).

Counts: 179 rows; FITS 172, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0369 ripretinib, uncoated IR, spray-dried dispersion and dry granulation (roller compaction)

Source: EP 4 084 779 B1 (Deciphera), [0027]-[0028], [0111], Example 1 [0209]-[0212], Table 1 [0219], https://data.epo.org/publication-server/rest/v1.2/patents/EP4084779NWB1/document.pdf

- Per tablet: intragranular ripretinib/HPMCAS-HG dispersion 200 mg (25 % = 50 mg), MCC 179, lactose monohydrate 179, crospovidone 30, silicon dioxide 3, Mg stearate 3; extragranular silicon dioxide 3, Mg stearate 3; 600 mg (intra:extra 99:1).
- Dispersion: HPMCAS-HG dissolved in water/acetone, drug suspended at 15-25 C and kept stirred; inline heat exchanger (38-51 kg/h) heats the feed to 112-124 C to dissolve it; PSD-2 dryer with nitrogen sheath 65-85 psig, gas 400-500 kg/h, outlet 50-70 C, condenser -10 C; start-up and shut-down solvent; secondary drying in an agitated vacuum dryer at 40-50 C, 40-50 mbar. Four lots assayed 24.8-24.9 %.
- The tablet granulation is not named (lubricant split intra/extra: dry granulation, as listed). Anilinic impurities not more than 3 % of the drug.
- Batch 300,000 tablets (180 kg; 60 kg dispersion) in a potent-compound suite. Standard practice assumed: compaction and mill settings, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | nitrogen sheath pressure 65-85 psig (psi unit; known, wave 1) |
| T10 | FITS WITH SETTING | SDD excess taken from MCC and lactose 1:1 (T10 spread over two fillers in a ratio) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T18 | FITS WITH SETTING | SDD quantity from the SDD lot assay (24.8-24.9 % against 25 %) (T18 in-process content; known, wave 1) |

Counts: 188 rows; FITS 183, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0370 chlorzoxazone, uncoated IR, steam granulation, 500 mg

NO SOURCE: only labels and a 250 mg extended-release matrix study (a different release type) were found; no IR formula with process. Not counted.

## F0371 diclofenac (free acid), dispersible IR, wet granulation, 46.5 mg

Source: EP 0 599 767 B1 (FAES), Example 1 [0021]-[0023], https://data.epo.org/publication-server/rest/v1.2/patents/EP0599767NWB1/document.pdf

- Per tablet: micronised diclofenac (below 10 um) 46.5 mg (= 50 mg diclofenac sodium), MCC 156.5, corn starch 30, PEG 6000 8 (in the granulating liquid), crospovidone 15, carboxymethyl starch 30 (half intra, half extra), sodium saccharin 4.5, orange flavour 10, sodium stearyl fumarate 6, colloidal silica 1.5; 308 mg.
- 5 % hydroalcoholic PEG 6000 solution; API, MCC, starch, crospovidone and half the carboxymethyl starch sieved 0.6 mm and mixed, wetted, wet mass through 1 mm, dried, 0.6 mm; flavour, sweetener and the rest of the carboxymethyl starch, then silica and fumarate (0.6 mm) added; compressed.
- Tests: disintegration below 3 min, uniformity of dispersion and uniformity of weight (BP 1988).
- Batch 500,000 tablets (154 kg). Standard practice assumed: high-shear mixer, ethanol:water ratio, drying limits, hardness.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | 46.5 mg diclofenac acid stated as 50 mg diclofenac sodium (T11 any two named forms; 50 x 296.15/318.13 = 46.55) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 170 rows; FITS 167, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0372 glucosamine sulfate potassium chloride + chondroitin sulfate sodium, film-coated IR, high-shear wet granulation, 500 + 400 mg

NO SOURCE: the one SmPC with a quantitative excipient list could not be downloaded and gives no process; patents found have no tablet example table. Not counted.

## F0373 indometacin-saccharin cocrystal, uncoated IR, direct compression

Source: Chen H, Xu H, Wang C, Kang H, Haynes CL, Mahanthappa MK, Sun CC, quasi-emulsion solvent diffusion spherical cocrystallization of indomethacin (accepted manuscript; Cryst Growth Des 2020), Table 1 and methods, https://par.nsf.gov/servlets/purl/10232322. Close variant: laboratory compaction study; about 50 mg IMC per tablet (listed 25 mg: the same blend at half the weight); the cocrystal made at lab scale.

- Formula (% w/w): IMC-SAC cocrystal 70 (= 46.3 % IMC; IMC 357.8 in cocrystal 541.0), MCC PH102 24.5, croscarmellose sodium 5.0, Mg stearate 0.5. 50 mg IMC = 75.6 mg cocrystal; tablet about 108 mg (derived).
- Cocrystal (QESD-CC): IMC 4 mmol and saccharin 5 mmol in 6 ml DMF poured within 10 s into 40 ml water or 0.01-0.5 % HPMC solution, stirred at 300 rpm for 3 h at 23.5 C, filtered, dried. The anti-solvent route needs a 3-fold saccharin excess for phase purity.
- Blended (lab: bottle rotation 15 min) and compressed; at 200 MPa the tensile strength is above 2 MPa and friability below 0.8 %; flow by ring-shear ffc.
- Batch 1,000,000 tablets (108 kg; 75.6 kg cocrystal in sub-batches). Standard practice assumed: cocrystal drying and residual DMF, blender, press settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | saccharin 1.25 mol per mol IMC in the QESD step (T11 molar factor between species) |
| T8 | FITS WITH SETTING | quantities from % w/w of the batch (T8 % w/w mode) |
| T11 | FITS WITH SETTING | cocrystal to IMC 541.0/357.8 = 1.512 (T11 any two named forms) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C5 | FITS WITH SETTING | if the cocrystal lot is assayed as IMC, no cocrystal factor in the same chain (C5 extended, as parent) |
| T18 | FITS WITH SETTING | cocrystal quantity from its measured IMC content (phase purity, excess coformer) (T18 in-process content; known, wave 1) |

Counts: 151 rows; FITS 144, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0374 milnacipran hydrochloride, film-coated IR, drug solution adsorbed onto porous calcium hydrogen phosphate

Source: EP 1 894 565 B1 (Pierre Fabre), Embodiment 1-1 [0050] with the coat of Embodiments 1-5/1-6 [0054]-[0055], https://data.epo.org/publication-server/rest/v1.2/patents/EP1894565NWB1/document.pdf. Close variant: 25 mg strength (listed 50 mg); granulation is adsorption of a drug solution in a V mixer, not high-shear wet granulation.

- Per tablet: milnacipran HCl 25 mg dissolved in water 14 mg, adsorbed onto spray-dried anhydrous calcium hydrogen phosphate 62.5 (adsorption powder 87.5), carmellose calcium 10, light anhydrous silicic acid 0.5, Mg stearate 2; 100 mg (8R punch).
- V mixer 30 min, tray dried 50 C 15 h, sieved 710 um; V-mixed 10 min with carmellose and silicic acid; Mg stearate 5 min; compressed.
- Coat (per lab batch): HPMC TC-5RW 67 g dissolved in 875 ml water, talc 30 g, titanium dioxide 10 g, Aquacoat ECD 33.35 g, triethyl citrate 8 g; 5 mg per tablet (105 mg).
- Batch 1,000,000 tablets (100 kg cores). Standard practice assumed: LOD limit, hardness, coat spray settings.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | adsorption powder taken on its measured drug content (T18 in-process content; double-adjustment rule, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T18 | FITS WITH SETTING | Aquacoat ECD line states dispersion or dry polymer (T18: master states wet or dry) |

Note: Embodiment 1-2 (fluid-bed version) leaves out the 50 g carmellose but still states 25 mg in a 100 mg tablet: its powder (437.5 + 2.5 + 10 g) gives 27.8 mg per 100 mg tablet (+11 %), or 25 mg in a 90 mg tablet (known label-claim check, wave 2).

Counts: 164 rows; FITS 160, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0375 tolperisone hydrochloride, film-coated IR, direct compression, 150 mg

Source: EP 2 150 540 B1 (Sanochemia), Beispiel 2 [0063]-[0064] with the coat of Beispiel 1 [0062] (German text), https://data.epo.org/publication-server/rest/v1.2/patents/EP2150540NWB1/document.pdf. Close variant: the direct-compression example gives % only, so the 150 mg strength and 192.3 mg weight (150/0.78) are the plant's choice; the formula has no lubricant (external punch-face lubrication used, standard practice, no formula line added); the coat amounts are not given (3 % assumed).

- % w/w: tolperisone HCl 78, anhydrous citric acid 3 (stabiliser against the 4-MMPPO impurity), sodium starch glycolate (Primojel) 2.5, anhydrous lactose (SuperTab 22AN) 16, colloidal silica (Aerosil 200) 0.5; 100 %.
- Mixed, sieved 1.8 mm, compressed directly. Coat as Beispiel 1: HPMC / HPMC phthalate in ethanol/water in a pan at 55-60 C, dried at room temperature.
- API lot of the purified grade: 4-MMPPO not more than 10 ppm.
- Batch 1,000,000 tablets (192.3 kg). Standard practice assumed: blend times, press settings, coat formula, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w of the batch (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The DC formula adds to 100 % with no lubricant. If a plant adds one, the tablet weight must be re-derived from the lines (T2 sum), or the dose falls by the added % (known T2-sum rule, wave 1). Beispiel 1 prints the tablet weight as 155.8-172.2 g (mg meant).

Counts: 109 rows; FITS 106, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0376 tramadol hydrochloride, effervescent, solvent wet granulation, 50 mg

NO SOURCE: no tramadol effervescent formula found (only other APIs' effervescent patents). Not counted.

## F0377 asenapine maleate, sublingual freeze-dried tablet in blister pockets (listed 5 mg)

Source: EP 0 746 317 B1 (Akzo Nobel / Organon), Example 1a and 1b, https://data.epo.org/publication-server/rest/v1.2/patents/EP0746317NWB1/document.pdf. Close variant: 0.10 mg asenapine maleate per unit (listed 5 mg; 5 mg would need a concentration the source does not give).

- Hydrolysed gelatin 3 % w/v: gelatin 30 g in 1 l water dissolved hot, autoclaved at 121 C for 1 h, cooled.
- Asenapine maleate 0.2 g dissolved per litre with mixing; 0.5 ml dosed into each pocket of a PVC sheet cooled with solid carbon dioxide, mixing continued; frozen; freeze-dried; sealed with aluminium foil. Unit: 0.10 mg maleate in about 15 mg gelatin.
- Batch 400 l (800,000 units). Standard practice assumed: freeze-drying cycle (none given), dosing-pump checks, residual moisture, seal integrity, disintegration limit.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | 3 % w/v gelatin made up to a final volume (T17 % w/v) |
| T8 | FITS WITH SETTING | dose per unit = fill volume x concentration (T8 product of two readings) |
| C1 | FITS WITH SETTING | mean fill weight within +/- % of target, volume converted by the solution density (C1 option; T17 liquids by volume) |

Note: Example 7 says each unit holds 10 ng, but its 0.094 g/l at the Example 1b fill of 0.5 ml gives 47 ug. Example 3 lists "1 l hydrolysed gelatin" twice. Doses are stated as the maleate, while marketed asenapine strengths are on the base (factor 1.41; known label-basis rule, wave 1).

Counts: 82 rows; FITS 79, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0378 brexpiprazole, film-coated IR, wet kneading granulation (listed: fluid-bed), 2 mg

Source: EP 2 767 285 B1 (Otsuka), Table 9 Example 4-5, method of Examples 1-1 [0061] and 3-1 [0073], https://data.epo.org/publication-server/rest/v1.2/patents/EP2767285NWB1/document.pdf. Close variant: wet kneading granulation (listed fluid-bed); no process parameters.

- Core: brexpiprazole 2.0 mg, lactose 46.4, corn starch 20.0, MCC 10.0, low-substituted HPC 10.0, HPC 1.0 (as aqueous solution), Mg stearate 0.6; 90.0 mg (6.0 mm punch). Coat: HPMC 2.1, talc 0.3, titanium dioxide 0.54, red ferric oxide 0.06; 93.0 mg.
- Powders mixed, HPC solution added, wet kneading granulation, dried, sized, Mg stearate, rotary press, spray coat. The coloured iron-oxide coat protects against light (Table 8). Strengths 0.05-6 mg differ only in lactose.
- Batch 1,500,000 tablets (135 kg cores). Standard practice assumed: HPC solution strength, mixer settings, fluid-bed drying and LOD, coat solids, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 178 rows; FITS 176, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0379 clozapine, orally disintegrating tablet, direct compression (listed 25 mg)

Source: Masareddy RS, Kadia RV, Manvi FV, Indian J Pharm Sci 2008;70(4):526-528, Table 1 formulation F1, PMC2792538, https://europepmc.org/article/PMC/PMC2792538. Close variant: 50 mg tablet (listed 25 mg); laboratory scale (mortar, hydraulic press).

- F1 per tablet: clozapine 50 mg, MCC PH102 100, mannitol 101, crospovidone (Kollidon CL) 38, sodium saccharin 5, Mg stearate 3, talc 3; 300 mg, 10 mm flat-faced punches.
- All through #60; drug, mannitol, MCC and saccharin triturated; disintegrant mixed in; Mg stearate and talc added; compressed.
- Results (ranges for all four formulations): hardness 2.38-4.16, friability below 1 %, content 99.06-99.8 %, disintegration below 30 s in simulated saliva, wetting time 16.8-25.5 s.
- Batch 500,000 tablets (150 kg), narrow-therapeutic-index handling. Standard practice assumed: geometric premix in a blender instead of a mortar, blend times, press settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness recorded in kgf (round-3 unit; the source prints kg/cm2) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The paper calls +/- 7.5 % the pharmacopoeial weight-variation limit; for 300 mg tablets it is +/- 5 %, which the master uses.

Counts: 105 rows; FITS 102, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0380 dexmethylphenidate hydrochloride, uncoated IR, fluid-bed wet granulation, 5 mg

NO SOURCE: only US labels with qualitative excipients; no formulation patent or article. Not counted.

## Totals for F0361-F0380

Counted 15 formulations, 2,292 rows: FITS 2,229, FITS WITH SETTING 63, NEW SETTING 0, GAP 0. NO SOURCE 5 (F0361, F0370, F0372, F0376, F0380).

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0362 | 104 | 99 | 5 | 0 | 0 |
| F0363 | 196 | 192 | 4 | 0 | 0 |
| F0364 | 174 | 170 | 4 | 0 | 0 |
| F0365 | 190 | 187 | 3 | 0 | 0 |
| F0366 | 146 | 142 | 4 | 0 | 0 |
| F0367 | 156 | 150 | 6 | 0 | 0 |
| F0368 | 179 | 172 | 7 | 0 | 0 |
| F0369 | 188 | 183 | 5 | 0 | 0 |
| F0371 | 170 | 167 | 3 | 0 | 0 |
| F0373 | 151 | 144 | 7 | 0 | 0 |
| F0374 | 164 | 160 | 4 | 0 | 0 |
| F0375 | 109 | 106 | 3 | 0 | 0 |
| F0377 | 82 | 79 | 3 | 0 | 0 |
| F0378 | 178 | 176 | 2 | 0 | 0 |
| F0379 | 105 | 102 | 3 | 0 | 0 |
| Total | 2292 | 2229 | 63 | 0 | 0 |

NO SOURCE: F0361, F0370, F0372, F0376, F0380.

New settings and gaps: none. Every non-FITS row uses an existing setting or a finding already known: dispersion / complex / cocrystal content measured, not taken from the preparation ratio (wave 1); typed salt factor checked against the molecular weights (wave 1); T26 by % v/v (wave 1); psi unit (wave 1); "as parent" potency (round 3); T8 product of readings, T5 final-weight base and kgf (round 3); T8 rate x time, T17 liquids by volume, T18 wet or dry (version 2).

Safety rules (all reminders of known rules; no new rule in this part):
- Cocrystal basis (F0373): the formula line "IMC-SAC 70 %" is the cocrystal; read as indometacin it would put 51 % more drug in each tablet (70 / 46.3). If the cocrystal lot is assayed as indometacin, no cocrystal factor may follow in the same chain. Its content comes from the lot's measured indometacin, because the coformer is used in excess (known C5 / T11 rules and the wave-1 complex-content rule).
- Hydrate basis not stated (F0368): "50 mg 6-MP" without naming anhydrous or monohydrate. Read the wrong way, the tablet is about 11 % high or 10.6 % low (known label-basis rule, wave 1).
- Stated strength not matching the lines (F0374): Embodiment 1-2 drops the 50 g carmellose but keeps "25 mg in 100 mg", which is 27.8 mg (+11 %) (known label-claim check, wave 2).
- Dose per fill (F0377): the unit dose is fill volume x concentration. Example 7's "10 ng" is 47 ug at the stated fill. The dose is stated as maleate, while the marketed strengths are on the base (factor 1.41) (known label-claim and label-basis rules, waves 1-2).
- Grams printed under an mg header (F0364): 1,000 times too small if typed as printed (known tooling-fit check, wave 2).
- % of the coated tablet (F0367): taking the % lines on the core weight gives about 3 % less lapatinib (known pattern, wave 3).
- Formula with no lubricant (F0375): adding one without re-deriving the tablet weight lowers the dose by the added % (known T2-sum rule, wave 1).
- Blend for several strengths (F0366): the 100 mg tablet is the 25 mg blend at 4 times the weight. API per tablet is checked against the label before compression (known, wave 3).
- Salt-equivalent label (F0371): 46.5 mg of the acid is labelled "= 50 mg diclofenac sodium". Weighing 50 mg of the acid gives 7.5 % too much (known label-basis rule).

Sources that contradict themselves:
- EP 1 729 727 B1 (F0368): Example 1 gives 100 g of granulate "containing 13.2 g 6-MP", although only 98.2 g of solids went in.
- EP 1 894 565 B1 (F0374): Embodiment 1-2 states 25 mg per 100 mg tablet, but its lines give 27.8 mg. Embodiment 1-7 dissolves 125 g of drug in "70 mg" of water (g meant). The sieve is printed as 710 mm (um meant).
- EP 0 746 317 B1 (F0377): Example 7 states 10 ng per unit, but 0.094 g/l x 0.5 ml is 47 ug. Example 3 lists 1 l of hydrolysed gelatin twice.
- EP 3 873 443 B1 (F0363): Table 18 prints 28.75 mg as 5.57 % (5.75 %), so the column sums to 99.82 %. Example 8 states a 92 % yield for 8.2 kg out of 9.0 kg (91.1 %).
- EP 0 599 767 B1 (F0371): claim 6 requires 2.5-5 % sodium stearyl fumarate, but the examples have 1.95 % (Examples 1-2) and 0.97 % (Example 3). Example 3 has no colloidal silica, although claim 1 requires it. In [0023], "polyvinylpyrrolidone" appears where the formula has crospovidone.
- US 10,813,898 B2 (F0362): Table 6 (mixture 008, 79.5 %) carries the 635 mg mean mass of mixture 007B (78.7 %); at 79.5 % it should be 629 mg.
- EP 3 286 176 B1 (F0366): Table 5's drug range of 16.383-32.765 % repeats the mg of Table 4 (32.765 mg = 26.2 %).
- EP 3 752 132 B1 (F0364): the [0107] values are in grams under an mg header.
- EP 2 150 540 B1 (F0375): the direct-compression formula has no lubricant, and Beispiel 1 prints the tablet weight in g.
- Masareddy 2008 (F0379): ±7.5 % is given as the pharmacopoeial weight-variation limit for 300 mg tablets (it is ±5 %), and hardness is printed in kg/cm2.
