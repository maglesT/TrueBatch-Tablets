# Wave 3, part 5 (F0281-F0300)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

All sources in this part were read from files downloaded beforehand by the source finder (no web access during mapping).

## F0281 zuclopenthixol dihydrochloride, film-coated IR, fluid-bed granulation, 10 mg

NO SOURCE: only the SmPC and leaflet (10 mg as 11.82 mg dihydrochloride, lactose monohydrate 21.6 mg, other excipients named only). No formula with a process found in patents or articles. Not counted.

## F0282 levocarnitine, uncoated IR, ethylcellulose microcapsules compressed by direct compression, 330 mg

Source: Hegazy MM et al., Heliyon 2024;10:e23637, doi:10.1016/j.heliyon.2023.e23637, Table 4 formulation C6 (microcapsules F14), https://europepmc.org/article/PMC/PMC10851296. Close variant: the drug is first microencapsulated with ethylcellulose against moisture, then the microcapsules are compressed as a multiple-unit tablet.

- Microcapsules F14: L-carnitine base and Ethocel Std 20 at 3:1, colloidal silica as anti-coalescent (the table quantities fit 10 % of the drug weight), Span 80 0.1 %. Solid-in-oil-in-oil solvent evaporation: polymer 1 g per 25 ml acetone, drug dispersed and sonicated 2 min, poured into 100 ml liquid paraffin at 10 C, stirred 30 min at 1,000 rpm, warmed to 40 C for 30 min, filtered on 35 um, washed with n-hexane 1 + 5 times, oven dried 50 C 1 h.
- Microcapsule results: water 1.11 %, encapsulation efficiency 98.3 %, yield 96.9 %, Carr index 4.9, angle of repose 26.3 degrees.
- Tablet C6 per tablet: microcapsules 473 mg (= 330 mg base), MCC PH 112 457, croscarmellose sodium 50, Mg stearate 20; 1,000 mg (MCC adjusted to keep 1,000 mg). Hardness 19.6 kp, disintegration 2 min, 95 % dissolved at 30 min.
- Batch 300,000 tablets (300 kg); microcapsules made in sub-batches. Standard practice assumed: scale-up vessels, solvent recovery, residual solvent limits, blend times, press settings, low-RH room limits for a hygroscopic drug.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | microcapsule quantity from their measured carnitine content (T18 in-process content), not from the 3:1 preparation ratio (known, wave 1) |
| T17 | FITS WITH SETTING | ethylcellulose solution 1 g per 25 ml acetone (T17 % w/v made up to volume) |
| T8 | FITS WITH SETTING | liquid paraffin 100 ml per g polymer and Span 80 0.1 % of it (T8 "% of" a recorded weight, liquid by volume) |
| F7 | FITS WITH SETTING | six n-hexane washes on the same lot (F7 N cycles on the same lot) |
| T6 | FITS WITH SETTING | angle of repose of the microcapsules (round-3 T6 option) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The 473 mg in Table 4 is exactly 330 mg x 4/3 plus 33 mg silica, i.e. the theoretical microcapsule mass. At the measured 98.3 % encapsulation efficiency it holds about 324 mg base (-1.7 %).

Counts: 86 rows; FITS 79, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0283 tiopronin, enteric-coated (isolation coat + enteric coat), wet granulation with starch paste

Source: CN 101590026 A, Example 1 (Example 2 for comparison), https://patents.google.com/patent/CN101590026A/en (Chinese, read with the machine translation). Close variant: granulation through a 20-mesh sieve, not high-shear; tablet weight and count not stated; coat powders named only by type.

- Batch parts: tiopronin 100, starch 100, MCC 40 (mixed and milled together), 10 % starch paste q.s., Mg stearate 2. Isolation coat (water-soluble film powder) 2.1 % gain; enteric coat powder 10.3 % gain (Example 2: starch 80, MCC 60, Mg stearate 1; gains 1.8 % and 12.1 %).
- Process: wet mass with the paste, granulate 20 mesh, air dry 50 C 4 h, size 18 mesh, add Mg stearate, compress; isolation coat; enteric coat; Al-plastic blister. Dissolution: no change in 0.1 M HCl for 2 h, 98.3 % in pH 6.8 buffer at 45 min.
- Plant choice: 300 mg strength at the example ratios (core 726 mg plus the paste starch). Batch 200,000 tablets. Standard practice assumed: paste quantity, coat formulas and solids, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | dry starch added by the paste = recorded paste mass x 10 % (T8 "% of" a recorded weight), carried into the T2 theoretical granule weight |
| T5 | FITS WITH SETTING | enteric coat gain on the isolation-coated tablets (T5 gain on the layer's own starting weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of the target recomputed with the paste starch (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The paste is "q.s.", so the core weight is known only after granulation (known wave-1 rule: theoretical weight = T2 sum of the actual quantities).

Counts: 82 rows; FITS 78, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0284 sevelamer carbonate, film-coated IR, roller compaction, 800 mg

Source: US 2011/0189121 A1 (ratiopharm; = WO 2009/156014), Example 2.1 and the coating paragraph, https://patents.google.com/patent/US20110189121A1/en

- Per tablet: intragranular sevelamer carbonate 800, copovidone 30, colloidal silica (1) 4, stearic acid (1) 5; extragranular colloidal silica (2) 4, crospovidone 16, stearic acid (2) 5; core 864 mg, oblong 22.0 x 9.4 mm, height 5.8 mm. Optional aqueous film coat (HPMC, talc, PEG, TiO2) 28 mg per tablet in a perforated drum; core moisture 2.7 %, film-coated 2.8 %.
- Process: API and copovidone in a high-speed mixer; sieved silica (1) and stearic acid (1) in a free-fall mixer; roller compaction; 1.5 mm crushing sieve; silica (2) and crospovidone, then stearic acid (2); high-performance rotary press. IPC hardness 100-123 N, disintegration 4-7 min; disintegration below 15 min after 3 weeks.
- Description: compact density preferably 1.18-1.50 g/cm3, compact temperature not above 55 C (cooled rolls), sieve 0.75-2 mm, repeat compaction allowed; polymer water 1-15 %.
- Batch 300,000 tablets (259 kg cores). Standard practice assumed: roll force and gap (Example 1 gives a 2 mm gap), LOD limits, coat solids %, friability.

| Template | Result | Step |
|---|---|---|
| T12 | FITS WITH SETTING | API quantity on a dry basis from the lot's water (T12), when the 800 mg claim is anhydrous (known, wave 2 F0183) |
| T23 | FITS WITH SETTING | compact (ribbon) density by envelope density against 1.18-1.50 g/cm3 |
| C1 | FITS WITH SETTING | mean weight within +/- % of the target recomputed from the lot's water (C1 option, known wave 2 F0183) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The formula has no filler that could absorb a change in polymer water, so the target weight changes with each lot (known wave-2 rule).

Counts: 78 rows; FITS 74, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0285 birch pollen allergen extract, sublingual oral lyophilisate, freeze-drying (variant: grass pollen extract)

Source: EP 2 436 395 B1 (ALK-Abello), Example 3 (Table 9) with the Example 1 process and test methods, https://data.epo.org/publication-server/rest/v1.2/patents/EP2436395NWB1/document.pdf. Close variant: Phleum pratense grass extract at 75,000 SQ-U, not Betula verrucosa at 12 SQ-Bet; same fish-gelatine / mannitol freeze-dried platform.

- Per unit: grass extract 75,000 SQ-U (0.141 mg extract, about 532,000 SQ-U per mg), fish gelatine 16 mg, mannitol 14 mg, sodium hydroxide q.s. to pH 7.5, purified water q.s. to 250 mg dosing solution; unit about 30 mg, 12 mm.
- Process: mannitol dissolved in at least 50 % of the water; gelatine dissolved; extract reconstituted in its vials with not more than 35 % of the water and added; pH 7.5 with freshly made 3 % w/w NaOH; the remaining water calculated and added; dosed at ambient temperature into pre-formed blisters; liquid-nitrogen freeze tunnel; frozen storage; freeze-dried; lidding foil sealed; sachet.
- Tests: identity by SDS-PAGE; major allergen (ELISA) 94 %; total allergenic activity (LIA) 95 %; disintegration 1 s; water (Karl Fischer) 5.2 %; uniformity of allergen content on 10 units (Example 5); friability as allergen found in loose residue after 100 turns (ELISA).
- Batch 300,000 units (75 kg dosing solution). Standard practice assumed: freeze-drying cycle (the patent says "standard conditions"), dosing pump checks, hold times, room conditions.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | extract quantity from the lot's SQ-U per mg (T18 content in activity units per mass) |
| T17 | FITS WITH SETTING | final water to add = target bulk mass minus everything added, including the q.s. NaOH solution (T17 water to add, with a liquid ingredient's own mass) |
| T12 | FITS WITH SETTING | dry-solids reconciliation of units (T12 reverse, water leaves in the freeze-dryer) |
| C1 | FITS WITH SETTING | mean unit mass within +/- % of the computed target (C1 option) |

Note: The bulk make-up must pass before dosing starts (known wave-2 rule for solutions dosed by fill weight; F5 hold).

Counts: 74 rows; FITS 70, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0286 diphenhydramine hydrochloride, printed IR, fluid-bed granulation, 25 mg

NO SOURCE: only the UK SmPC (lactose 70.00 mg) and NDC listings; no quantitative formula, no printing ink or granulation details. Not counted.

## F0287 ebastine, film-coated IR, wet granulation, 10 mg

Source: EP 0 614 362 B1, Example 2 with the micronisation and compression sections, https://data.epo.org/publication-server/rest/v1.2/patents/EP0614362NWB1/document.pdf (French text). Close variant: planetary-mixer granulation with oven drying (listed fluid-bed); the patent tablet is uncoated.

- Per tablet: micronised ebastine 10.0 mg, MCC 20.0, lactose monohydrate 88.5, pregelatinised starch 5.2, croscarmellose sodium 5.0, Mg stearate 1.3; 130.0 mg, 7 mm punches (8 mm radius), breaking force 50 N.
- Micronisation in an air-jet micronizer with chilled dry air: micronised powder 100 % below 80 um, 90.3 % below 10 um.
- Process (520 g trial): MCC, lactose, starch and API mixed 10 min; wetted with water at 23 % of the total mass; granulated 10 min; ventilated oven 6.5 h at 50 C; 0.8 mm screen; croscarmellose and Mg stearate through 0.5 mm; blended 10 min; compressed. Dissolution 94 % at 45 min (0.1 N HCl 1,000 ml, paddle 100 rpm).
- Batch 1,000,000 tablets (130 kg). Standard practice assumed: HPMC film coat at 3 % for the listed film-coated type, drying end point, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granulating water = 23 % of the total mass charged (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 72 rows; FITS 69, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0288 ebastine, oral lyophilisate (ODT), freeze-dried in blister pockets

Source: EP 0 614 362 B1, Example 3, https://data.epo.org/publication-server/rest/v1.2/patents/EP0614362NWB1/document.pdf. Close variant: 5 mg strength (listed 10 mg).

- Per unit: micronised ebastine 5.00 mg, xanthan gum 0.12, aspartame 5.00, docusate sodium 0.25, dextran 70 20.00, mannitol 669.63, water 525.00 (removed); dry unit 700 mg (paste 1,225 mg).
- Process: docusate dissolved in 90 % of the water 30 min; xanthan added 30 min; dextran until clear. Ebastine, aspartame and mannitol mixed 30 min under reduced pressure (0.2 bar) in a planetary mixer; solution added, container rinsed with the rest of the water; paste stirred 30 min; divided into 1.6 ml PVC pockets; freeze-dried.
- Results: mean mass 700 mg, ebastine 4.90 mg per unit, water 0.26 %, spoon disintegration 45 s (200 ml water at 20 C, 200 rpm).
- Batch 200,000 units (245 kg paste). Standard practice assumed: freeze-drying cycle (not given), dosing by weight, stirring and hold time during dosing.

| Template | Result | Step |
|---|---|---|
| T12 | FITS WITH SETTING | dry unit mass from the paste fill and its solids fraction 700/1,225 (T12 reverse) |
| C1 | FITS WITH SETTING | mean unit mass within +/- % of target (C1 option: limits around computed value) |

Note: The paste is a suspension of micronised drug (0.41 % of the paste), so settling during dosing changes each unit's dose; see Safety rules.

Counts: 66 rows; FITS 64, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0289 terbutaline sulfate, uncoated IR, fluid-bed granulation, 5 mg

NO SOURCE: only the Bricanyl SmPC (lactose monohydrate 104 mg, other excipients named only); patents and articles found are pulsatile, SR or buccal forms. Not counted.

## F0290 ethambutol hydrochloride, film-coated IR, steam granulation, 400 mg

NO SOURCE: WHOPAR TB177 part 6 gives the excipients by name and the steps "wet granulation, lubrication, compression, coating" only; no quantities and no steam-granulation source. Not counted.

## F0291 pretomanid, uncoated IR, direct compression, 200 mg

NO SOURCE: the Dovprela product information gives only pretomanid 200 mg and lactose monohydrate 294.4 mg with the other excipients named; no process; the WHOPAR part 6 is not available. Not counted.

## F0292 flavoxate hydrochloride, film-coated, HPMC matrix controlled release (weak variant of the listed IR tablet)

Source: EP 0 393 572 A2 (Recordati), Examples 1 and 2, https://data.epo.org/publication-server/rest/v1.2/patents/EP0393572NWA2/document.pdf. Weak variant: controlled-release matrix at 400 mg (listed IR 200 mg); granulation equipment not stated (listed fluid-bed). No quantitative IR source was found.

- Core % w/w: flavoxate HCl 76.9, HPMC K15M 7.7, polyvinyl alcohol 3.8 (as aqueous solution), tartaric acid 9.6, talc 1.2, Mg stearate 0.8. For 400 mg the core is 520 mg (derived: 400 / 0.769).
- Process: API and HPMC mixed, made into a paste with the aqueous PVA solution, granulated, dried to water below 3 %, blended with tartaric acid, talc and Mg stearate, compressed on a rotary press (5, 10 and 16 kN gave the same dissolution).
- Coat (Example 2) %: HPMC E5 5.7, talc 7.4, TiO2 5.0, sucrose 1.1, PEG 6000 1.1, water 79.6; sprayed in a pan on tablets preheated to 45 C. Gain not given (3 % assumed).
- Batch 300,000 tablets (156 kg cores). Standard practice assumed: PVA solution strength, mixer and dryer settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | dispensing quantities from % w/w of the batch (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 70 rows; FITS 67, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0293 imidafenacin, orally disintegrating tablet, drug-layered and coated granules then compression, 0.1 mg

Source: EP 2 246 051 B1 (Kyorin), Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP2246051NWB1/document.pdf. Close variant: the drug is sprayed onto starch and coated in a fluid bed before the final blend is compressed (listed plain direct compression).

- Drug granules: imidafenacin 25.0 g and povidone (Kollidon 90F) 12.5 g in water 738.75 g + ethanol 1,723.75 g, top-sprayed onto Starch 1500G 4,962.5 g (5,000 g, 0.5 % drug; d50 128 um).
- Coated granules: Eudragit EPO 750 g and Mg stearate 375 g in water 3,412.5 g + ethanol 7,962.5 g, sprayed onto 3,750 g drug granules (theoretical 4,875 g, 0.385 % drug; d50 117 um). FL-5 fluid bed, 100 g/min, 0.3 MPa, inlet 70 C (layering) and 80 C (coating).
- Final blend: coated granules 2,600 g, mannitol 14,640, crospovidone 540, hydrated silica 40, Mg stearate 180; 18,000 g = 100,000 tablets of 180 mg with 0.1 mg drug; rotary press 9 kN; hardness 5.6 kg, disintegration 12 s. Photostability tested.
- Batch 1,000,000 tablets (180 kg; layering and coating in fluid-bed sub-batches). Standard practice assumed: LOD limits, blend times, blend uniformity, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | coated granule quantity from the coated granules' measured drug content (T18 in-process content); mannitol compensates (T10) |
| T22 | FITS WITH SETTING | granule d50 by interpolation (T22 median) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 84 rows; FITS 80, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0294 sildenafil citrate, orodispersible mini-tablet, fluid-bed granulation

Source: Development and Optimization of Sildenafil Orodispersible Mini-Tablets, Pharmaceutics 2023;15:923, Table 3 at the optimised levels (Table 11: MCC 10 %, partially pregelatinised starch 10 %), https://europepmc.org/article/PMC/PMC10056513. Close variant: fluid-bed granulation (listed direct compression); 5 mg per 15 mg mini-tablet (listed 1 mg).

- Per mini-tablet: sildenafil citrate 5.0 mg (33.33 %), MCC PH-105 1.5, partially pregelatinised starch 1.5, mannitol to 15 mg (6.7, flavour q.s. inside it), sodium saccharin 0.15, sodium stearyl fumarate 0.15; 15 mg, 3 mm.
- Process (600 g): all but SSF in a V-blender 10 min at 65 rpm; top-spray fluid-bed granulation with 225 ml water at 3 g/min, air 50 m3/h; dried at 65 C to 2 % moisture; SSF 2 min at 40 rpm; Korsch XL 100 with 3 mm five-tip tooling, 30 rpm, 8 kN.
- Optimised result: 4.72 kp, friability 0.71 %, disintegration 39 s, 86 % released at 30 min.
- Batch 2,000,000 mini-tablets (30 kg). Paediatric product. Standard practice assumed: blend uniformity, weight checks per tip, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | granulating water 225 ml per 600 g powder (T8 "% of" a recorded weight, liquid by volume) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Table 3 says "sildenafil citrate 5 mg". A base-labelled product would need 7.02 mg citrate (factor 1.405); see Safety rules.

Counts: 68 rows; FITS 65, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0295 calcium lactate gluconate + calcium carbonate, effervescent, 2,940 + 300 mg

NO SOURCE: the only source (US 4,867,977 A, Example 1) is an effervescent powder for sachets made by dry mixing, with the same two calcium salts at the listed amounts. It has no tablet formula, no lubricant and no granulation or compression process; a tablet record would need invented numbers. The source finder marked it a weak variant; it is not counted here.

## F0296 ferrous fumarate, film-coated IR, direct compression, 200 mg

NO SOURCE: only listings and the BP monograph (strength and iron content); no excipient amounts or process. Not counted.

## F0297 sodium fluoride, chewable, direct compression, 1.1 mg

NO SOURCE: only the Fluor-a-Day label (sodium fluoride 1.1 mg, xylitol 236.79 mg, the rest unquantified); US 4,284,650 is a chewing gum. Not counted.

## F0298 chlormadinone acetate (+ ethinylestradiol), film-coated IR, solvent wet granulation, 2 mg

Source: US 9,107,840 B2 (Grunenthal), Example 1 (coat recipe from Example 2), https://patents.google.com/patent/US9107840B2/en. Close variant: the example also holds ethinylestradiol 0.020 mg (listed CMA alone); ethanolic high-shear granulation with vacuum drying (listed fluid-bed).

- Per tablet: chlormadinone acetate 2.000 mg (90 % below 50 um), ethinylestradiol 0.020, povidone K30 3.000, lactose 31.980, maize starch 12.000, Mg stearate 0.500, colloidal silica 0.500; 50 mg core, 5 mm punches. Coat (HPMC-based Opadry) 2 mg per tablet; Example 2 coat recipe HPMC 6 mPa s 0.1351 kg, PEG 6000 0.0395, propylene glycol 0.0054, water 1.6200 kg.
- Process: EE and povidone dissolved in 600 ml ethanol; CMA, lactose and maize starch mixed 5 min in a Diosna P25, wetted with the ethanolic solution; 3 mm screen; vacuum drying cabinet; 0.6 mm screen; Mg stearate and silica; compressed to 50 mg; coated.
- Batch 1,000,000 tablets (50 kg cores), hormone containment. Standard practice assumed: batch size for the 600 ml of ethanol, drying limits, blend uniformity, IPC limits. For a CMA-only product the EE line and its solution drop out and lactose takes up 0.020 mg (T10).

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | ethanol volume scaled per kg of powder from the source ratio (T8 "% of" a recorded weight, liquid by volume) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 80 rows; FITS 77, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0299 levonorgestrel, uncoated IR, fluid-bed granulation, 1.5 mg

Source: EP 1 448 207 B1 (Richter Gedeon), Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP1448207NWB1/document.pdf

- Per tablet: levonorgestrel 1.5 mg, colloidal silica 0.5, maize starch 23.5, potato starch 0.5, talc 2.5, Mg stearate 1.0, lactose monohydrate 70.5; 100 mg.
- Process: the drug is mixed into lactose and maize starch, or sprayed onto them as a solution in alcohol (or alcohol:chloroform), in a fluid-bed granulator; a paste made from part of the maize starch is sprayed and the granules dry at the same time; regranulated if needed; silica, talc and Mg stearate added; compressed.
- Plant choice: drug sprayed as an ethanolic solution (no chloroform) for a 1.5 % load. Batch 1,000,000 tablets (100 kg). Standard practice assumed: paste portion and strength, temperatures, LOD, blend uniformity, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Claim 1 allows 1.5 +/- 0.2 mg; the master fixes 1.5 mg (known wave-1 rule on formula ranges).

Counts: 72 rows; FITS 70, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0300 ospemifene, film-coated IR, wet granulation, 60 mg

Source: RU 2 675 624 C2 (= WO 2005/079777 A1, Hormos Medical), Experimental Section, https://patents.google.com/patent/RU2675624C2/en and https://patents.google.com/patent/WO2005079777A1/en. Close variant: wet granulation (listed roller compaction; dry granulation is claimed but has no example); no coat in the source.

- % w/w: ospemifene 30, pregelatinised starch 38, maize starch 25, povidone 2, sodium starch glycolate 4, Mg stearate 1; purified water 25 (removed). At 60 mg the core is 200 mg (derived).
- Process: only "granulates made by the wet method", then compressed. Dissolution: USP paddle, 900 ml 2 % SDS at pH 9.8, 12 vessels, 5-240 min; the granulated tablet dissolved much faster than the same formula by direct compression. Preferably 90 % of the drug below 250 um.
- Batch 500,000 tablets (100 kg cores). Standard practice assumed for nearly all of the process: high-shear granulation with povidone in the water, fluid-bed drying, sizing, SSG and Mg stearate added outside the granules, IPC limits, HPMC film coat at 3 %.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w; granulating water 25 % of the solids (T8 % w/w mode and "% of") |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 70 rows; FITS 67, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## Totals for F0281-F0300

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0282 | 86 | 79 | 7 | 0 | 0 |
| F0283 | 82 | 78 | 4 | 0 | 0 |
| F0284 | 78 | 74 | 4 | 0 | 0 |
| F0285 | 74 | 70 | 4 | 0 | 0 |
| F0287 | 72 | 69 | 3 | 0 | 0 |
| F0288 | 66 | 64 | 2 | 0 | 0 |
| F0292 | 70 | 67 | 3 | 0 | 0 |
| F0293 | 84 | 80 | 4 | 0 | 0 |
| F0294 | 68 | 65 | 3 | 0 | 0 |
| F0298 | 80 | 77 | 3 | 0 | 0 |
| F0299 | 72 | 70 | 2 | 0 | 0 |
| F0300 | 70 | 67 | 3 | 0 | 0 |
| **Total** | **902** | **860** | **42** | **0** | **0** |

Counted 12 formulations, 902 rows: FITS 860, FITS WITH SETTING 42, NEW SETTING 0, GAP 0.

NO SOURCE: 8 (F0281, F0286, F0289, F0290, F0291, F0295, F0296, F0297).

New settings and gaps: none. Every non-FITS row uses an existing setting or a known finding: C1 limits around a computed value, T5 loss mode and gain on the layer's own start, T8 % w/w mode and "% of" a recorded weight, T12 dry basis and reverse, T17 % w/v and water to add, T18 in-process content and activity units per mass, T22 median, T23 envelope density, T6 angle of repose, F7 cycles on the same lot.

Safety rules:
- Suspension dosed by fill (F0288). The ebastine paste is a suspension (0.41 % micronised drug in a mannitol paste) dosed into pockets. Settling during a long dosing run changes each unit's dose even when fill weights are right. The master needs stirring confirmed and a maximum hold time from end of mixing to end of dosing (C4, T13), fill weights by F6 rounds, and per-unit content at start, middle and end (T14). This extends the known wave-2 rule for solutions dosed by fill weight; no new template.
- Allergen extract potency per mg varies by lot (F0285). The patent says 1 mg of extract holds 100,000 to 1,000,000 SQ-U; the example works at about 532,000 SQ-U/mg. Weighing the example's 0.141 mg from another lot would give 19 % to 188 % of the 75,000 SQ-U dose. The quantity must come from the lot's SQ-U per mg (T18 activity units per mass, round 2); a reminder, recorded because of the size of the error.
- Intermediate content must be taken at its last stage (F0293). The drug granules hold 0.5 % imidafenacin, the coated granules about 0.385 %. Setting the coated-granule quantity on the uncoated content gives 2,000 g instead of 2,600 g and 0.077 mg per tablet (-23 %). Covered by T18 in-process content measured on the coated granules (known wave-1 and wave-2 rules); a reminder.
- Microcapsules from the preparation ratio (F0282): 473 mg is the theoretical mass; at 98.3 % encapsulation the tablet holds about 324 mg instead of 330 mg (-1.7 %). Known wave-1 rule; a reminder.
- Salt basis (F0294): "sildenafil citrate 5 mg" is 3.56 mg base; in a base-labelled product (as paediatric sildenafil is labelled) it would be 29 % low. Known label-basis rule; a reminder.
- Variable polymer water (F0284): if 800 mg sevelamer carbonate is the anhydrous claim and the lot holds 10 % water, weighing 800 mg as-is gives 720 mg (-10 %). Known wave-2 rule (T12 with lot water); a reminder.

Sources that contradict themselves:
- Hegazy et al., Heliyon 2024 (F0282): encapsulation efficiencies of 101.06 % and 101.22 % are reported, while the tablet quantities are the theoretical microcapsule masses (330 mg x (1 + polymer ratio) + 10 % silica).
- EP 2 436 395 B1 (F0285): Table 9 gives 16 mg gelatine and 14 mg mannitol per 250 mg (6.4 % and 5.6 %), but the text after the results says 6.5 % and 5.5 %.
- EP 0 614 362 B1 (F0287, F0288): the description and claims give particle sizes in nm (largest below 200 nm, 90 % below 25 nm), but the micronisation table is in micrometres (100 % below 80 um).
- EP 0 393 572 A2 (F0292): the coating "solution" contains talc and TiO2 (it is a suspension), and its percentages add up to 99.9 %.
- EP 2 246 051 B1 (F0293): granule sizes and sieve openings are printed in mm (128 mm, sieves 75-355 mm), which must be micrometres; the HPLC packing is "5 mm".
- Pharmaceutics 2023;15:923 (F0294): the text says the weight RSD was below 2 %, but Table 7 gives SDs up to 1.31 mg on 14.86 mg (about 8.8 %).
