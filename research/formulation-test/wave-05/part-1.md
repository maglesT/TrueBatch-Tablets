# Wave 5, part 1 (F0401-F0420)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the source finder; this part worked from those files only.

## F0401 raltegravir potassium, film-coated IR, roller compaction, 400 mg

Source: EP 1 904 067 B1 (Merck Sharp & Dohme), Example 3 [0087]-[0088], coat from [0030] and the process claims, https://data.epo.org/publication-server/rest/v1.2/patents/EP1904067NWB1/document.pdf

- Per tablet: raltegravir potassium 434.4 mg (= 400 mg as free phenol; factor 1.086 stated, which matches the molecular weights 482.5/444.4), MCC PH102 112.9, spray-dried lactose 26.06, anhydrous dibasic calcium phosphate 73.85, HPMC K4M 26.06, micronised poloxamer 407 173.8, sodium stearyl fumarate 8.69, Mg stearate 13.03 (1.0 % intragranular + 0.5 % extragranular); core 868.8 mg (the % column adds to 100).
- Process: poloxamer and lubricants pre-screened #30 then #60; V-blend 5 min, screen #35, blend 15-20 min; roller compaction at 40 kgf/cm2, roll 3 rpm, screw 10 rpm; Comil 39R at 1,700 rpm; 0.5 % extragranular Mg stearate 5 min; compress to 16-20 kp.
- Coat: Opadry II HP (PVA-based) at 2-4 % gain per the claims; 3 % used here (about 26 mg).
- Batch 200,000 tablets (173.8 kg core blend). Standard practice assumed: commercial compactor settings, BU, IPC limits, coat solids % and pan settings.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | roll pressure 40 kgf/cm2 (round-3 unit kgf/cm2) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness 16-20 kp (round-3 unit kgf; kp as its alias) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The release-controlling poloxamer melts at about 52-57 C, so roll and room temperature limits are kept (plain C1).

Counts: 150 rows; FITS 146, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0402 raltegravir potassium, chewable IR (paediatric), Wurster-granulated and taste-masked, then compressed, 100 mg

Source: CA 2 833 006 A1 (Merck Sharp & Dohme), Tables 2, 3 and 5 and the granulation and coating text, https://patents.google.com/patent/CA2833006A1/en. Close variant: the API is Wurster-granulated and coated before a direct-compression blend (listed: direct compression).

- Per tablet (Table 5, 100 mg column): raltegravir potassium 108.6 (= 100 mg free base, factor 1.086), HPC 9.438, ethylcellulose (Surelease solids) 10.633, Opadry clear 7.088 = coated granule 135.8; extragranular saccharin sodium 14.0, sucralose 4.667, banana flavour 9.334, orange flavour 14.0, monoammonium glycyrrhizinate 4.667, masking flavour 9.334, sodium citrate dihydrate 2.333, mannitol 239.6, crospovidone 23.34, yellow iron oxide 2.333, red iron oxide 0.28, sodium stearyl fumarate 4.667, Mg stearate 2.334; 466.6 mg.
- Granulation: 10 % HPC-SL in hot water sprayed onto the API in a Wurster (inlet about 40 C, exhaust RH 70-80 %, 15-18 ml/min, 20 psi), dried until the exhaust RH is back to its starting value; D50 130-150 um.
- Coating: 10 % w/w Surelease/Opadry dispersion (Opadry dissolved first, Surelease added, stirred 15-20 min), inlet about 60 C, exhaust RH 40-50 %, 12-15 ml/min, 25 psi; same RH end point; coated D50 170-220 um; peak LOD 0.5-1.2 %.
- Coated granules blended with the screened extragranular powders and compressed (process flow figure is an image). Batch 200,000 tablets (93.3 kg); Wurster run in sub-batches. Standard practice assumed: compression settings, hardness limits, BU and IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | atomisation air 20 psi (psi unit; known, wave 1) |
| C1 | FITS WITH SETTING | drying end point: exhaust RH back to the initial exhaust RH of the same batch (C1 limits around an earlier recorded value) |
| T22 | FITS WITH SETTING | uncoated granule D50 130-150 um (T22 median by interpolation) |
| C1 | FITS WITH SETTING | atomisation air 25 psi (psi unit; known, wave 1) |
| C1 | FITS WITH SETTING | coating end point: exhaust RH back to the initial value (C1 limits around an earlier recorded value) |
| T22 | FITS WITH SETTING | coated granule D50 170-220 um (T22 median by interpolation) |
| T18 | FITS WITH SETTING | coated granule per tablet from its assay (T18 content from an in-process result; known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The API is potency-adjusted (T9) at the Wurster stage, so the T18 adjustment of the coated granule from its assay is limited to a stated band (known wave-1 double-adjustment rule).

Counts: 176 rows; FITS 167, FITS WITH SETTING 9, NEW SETTING 0, GAP 0.

## F0403 benzydamine hydrochloride, lozenge, moulding, 3 mg

NO SOURCE: only labels with the main sugar-alcohol amount (isomalt) and no process; no patent or report with the lozenge formula was found. Not counted.

## F0404 amoxicillin trihydrate, film-coated IR, direct compression (listed: solvent wet granulation, 1,000 mg), 500 mg

Source: EP 1 610 766 B1 (DSM), Example IX [0154]-[0156], https://data.epo.org/publication-server/rest/v1.2/patents/EP1610766NWB1/document.pdf. Thin variant: direct compression, uncoated, 500 mg; the film coat is standard practice.

- Per tablet: amoxicillin trihydrate 581.7 mg (= 500 mg amoxicillin), MCC PH200 190.3, croscarmellose 20, colloidal silica 2, Mg stearate 6; 800 mg.
- Process: all but the lubricant blended 10 min, Mg stearate 2 min, compressed. The trihydrate is specified by its free water (below 0.1 % at 30 % equilibrium RH) and water activity.
- Plant choice (not in source): HPMC film coat at 3 % gain. Batch 300,000 tablets in a segregated beta-lactam suite at low RH. Standard practice assumed: blend times at scale, BU, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency as amoxicillin (as parent, ug/mg): no T11 factor allowed (C5 extended; known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 581.7/500 = 1.163 is a potency allowance (about 86 % as amoxicillin), not the trihydrate molecular-weight factor (1.148).

Counts: 110 rows; FITS 107, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0405 cefetamet pivoxil hydrochloride, film-coated IR, roller compaction, 500 mg

NO SOURCE: the only patent found (EP 2 566 450 A2) gives generic process text with no quantities; papers cover analysis or a powder for suspension. Not counted.

## F0406 dapsone, uncoated IR, fluid-bed solvent granulation with a PEG co-former (listed: high-shear wet granulation), 100 mg

Source: Pharmaceutics 2023;15:2330 (PMC10535358), Tables 2, 3 and 10 and sections 2.2.2 and 2.4.2, https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10535358/fullTextXML. Thin lab variant: in-situ co-crystal granulation, granules compressed at 100 mg dapsone per tablet.

- Granule F5 (w/w): MCC 65, HPMC 5, (dapsone + PEG 600 at 55:45) 30; dapsone, PEG and HPMC dissolved in acetone/methanol 1:1 v/v (200 ml per 50 g batch) and bottom-sprayed onto MCC (20 m3/h, 40 C, 0.5 bar, 3.0 ml/min).
- Measured dapsone loading 28.1 % (co-crystal 51.1 %), not the nominal 16.5 %, because filler was lost to the filter; residual solvent about 1 %.
- Tablets: granules equal to 100 mg dapsone (about 356 mg at 28.1 %) on 8 mm flat tooling at 200 MPa; BP dissolution not less than 70 % at 45 min (basket, 0.1 M HCl).
- Plant choice (not in source): 60 kg granulation sub-lots in a solvent-rated fluid bed, 0.5 % Mg stearate added on the actual granule weight. Standard practice assumed: lubricant, scale-up settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | DAP + PEG + HPMC solution in acetone/methanol 1:1 v/v (T17 liquids by volume via density) |
| T18 | FITS WITH SETTING | granule per tablet = 100 mg DAP from the measured granule loading (T18 content from an in-process result; known, wave 1) |
| T8 | FITS WITH SETTING | expected tablets = granule weight x measured loading / 100 mg (T8 product of readings) |
| T6 | FITS WITH SETTING | compaction pressure (MPa) = force / punch face area from the tooling record (equipment-record input) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The tablet weight is set by the batch's own loading result; see the safety reminder below.

Counts: 111 rows; FITS 105, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0407 erythromycin base (dihydrate), enteric film-coated (HPMCP), wet granulation, 250 mg (listed 333 mg)

Source: US 4,340,582 A (Abbott Laboratories), Example, Tablet A, https://patentimages.storage.googleapis.com/1a/26/c0/f59a0d1dbb2e14/US4340582.pdf. Close variant: 250 mg strength; wet mass tray-dried in the source (high-shear wet massing and fluid-bed drying used here as standard practice).

- Core per tablet (from the 1,000-tablet batch): erythromycin base dihydrate 277.8 mg (= 250 mg base), MCC 25, sodium citrate 41, PVP 3 (in 60 ml water per 1,000); extragranular soy polysaccharide 40.2, talc 5, Mg stearate 6; 398 mg.
- Enteric coat per 1,000: HPMCP 19.1 g, acetylated monoglyceride 1.5, TiO2 1.8, red lake 0.12 in ethanol/water (191 + 48 ml), made up to 239 ml; pan at 60 C (about 22.5 mg per tablet if all applied). Claims: at least 16 mg HPMCP per tablet.
- Clear overcoat per 1,000: HPMCP 3.2 g, acetylated monoglyceride 0.3, vanillin 0.3 in ethanol 64 ml + water 16 ml.
- Batch 500,000 tablets. Standard practice assumed: drying limits, screen sizes at scale, spray rates, gain targets, enteric dissolution stages.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency as erythromycin base (ug/mg, as parent): no T11 dihydrate factor (C5 extended; known) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T17 | FITS WITH SETTING | ethanol 191 ml + water 48 ml for the coating vehicle (T17 liquids by volume via density) |
| T17 | FITS WITH SETTING | enteric solution made up to 239 ml per 1,000 tablets (T17 made up to a final volume) |
| T8 | FITS WITH SETTING | HPMCP applied per tablet = coat gain x HPMCP share of coat solids (T8 % of a recorded weight) |
| T17 | FITS WITH SETTING | clear coat in ethanol 64 ml + water 16 ml (T17 liquids by volume via density) |
| T5 | FITS WITH SETTING | clear coat gain on the enteric-coated tablet (T5 base option: named earlier stage) |

Note: 277.8/250 = 1.111 is a potency allowance (900 ug/mg), not the dihydrate/base factor (769.96/733.93 = 1.049).

Counts: 188 rows; FITS 180, FITS WITH SETTING 8, NEW SETTING 0, GAP 0.

## F0408 sulfadiazine, uncoated IR, fluid-bed granulation, 500 mg

NO SOURCE: only US labels with excipient names; no single-agent tablet formula with amounts and process. Not counted.

## F0409 ibrexafungerp citrate, film-coated IR, roller compaction, 150 mg

NO SOURCE: the FDA quality review is scanned with the composition not readable; protocols list excipient names only; the patents cover salts and polymorphs. Not counted.

## F0410 artesunate + mefloquine hydrochloride, film-coated IR, 100 mg + 220 mg

NO SOURCE: the WHO public assessment report is qualitative only (it also says the real product is roller-compacted, with artesunate added outside the granule, because artesunate is unstable in wet granulation). Not counted.

## F0411 diethylcarbamazine citrate, uncoated IR, direct compression, 100 mg

NO SOURCE: the WHO public assessment report names the excipients and a wet-granulation process with no amounts. Not counted.

## F0412 levo-ornidazole (listed: ornidazole), film-coated IR, wet granulation with starch paste, 250 mg (listed 500 mg)

Source: EP 1 902 712 B1 (Nanjing Sanhome), Example 1 [0012]-[0013], https://data.epo.org/publication-server/rest/v1.2/patents/EP1902712NWB1/document.pdf. Close variant: the S-enantiomer at 250 mg; mixer type, paste amount, drying and coat gain not stated.

- Per tablet: L-ornidazole 250 mg, pregelatinised starch 80 (intragranular), sodium starch glycolate 4 and Mg stearate 3 (extragranular); 337 mg plus the starch from the paste.
- Process: all through 100 mesh; drug and starch mixed, wet-massed with 8 % starch paste (quantity not stated), granulated, dried, sized; SSG and Mg stearate added; compressed; coated with 8 % Opadry in 95 % ethanol.
- Batch 300,000 tablets. Standard practice assumed: high-shear wet massing, paste added to end point, fluid-bed drying to LOD not more than 2 %, coat gain 3 %, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | binder starch solids added = slurry used x 8 % (T8 % of a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The paste is added to an end point, so the core weight is the sum of dry solids charged (including the paste solids) over the theoretical tablet count. See the new safety rule.

Counts: 139 rows; FITS 136, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0413 ensitrelvir fumaric acid (cocrystal), film-coated IR, fluid-bed granulation, 125 mg

Source: EP 4 289 432 A1 (Shionogi), Example 6A, Table 10 and [0177]-[0179], https://data.epo.org/publication-server/rest/v1.2/patents/EP4289432NWA1/document.pdf. Close variant: the granulation method is not named and the example tablets are uncoated.

- Per tablet: cocrystal Form I 152.3 mg (= 125.0 mg ensitrelvir), D-mannitol 103.8, croscarmellose sodium 31.3, HPC 17.2, light anhydrous silicic acid 3.2, crystalline cellulose 15 (extragranular), Mg stearate 9.2 (intra- and extragranular, split not given); 332 mg, 9.0 mm round.
- Process: all but MCC sieved through 30 mesh, mixed, granulated and milled; MCC and Mg stearate added and mixed; compressed. Dissolution by JP paddle 50 rpm.
- Plant choice (not in source): water sprayed in a fluid bed with HPC as dry binder ([0177] prefers wet granulation), half of the Mg stearate intragranular, HPMC film coat at 3 %. Batch 300,000 tablets. Standard practice assumed: spray and drying settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | cocrystal to parent factor 152.3/125.0 = 1.218 (T11 molar factor between species / any two named forms) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 152.3/125.0 = 1.218 matches the 1:1 cocrystal molecular weights (647.9/531.9).

Counts: 145 rows; FITS 142, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0414 clodronate disodium tetrahydrate, film-coated IR, roller compaction, 800 mg

Source: EP 1 027 037 B1 (Schering Oy), Example 1 [0023]-[0026], https://data.epo.org/publication-server/rest/v1.2/patents/EP1027037NWB1/document.pdf; roller compaction from EP 0 727 983 B1 (Leiras), [0020] and [0034], https://data.epo.org/publication-server/rest/v1.2/patents/EP0727983NWB1/document.pdf

- Per tablet: disodium clodronate tetrahydrate 1,000 mg (= 800 mg anhydrous; molecular-weight factor 1.249), silicified MCC 205, carmellose sodium 22, stearic acid 15, Mg stearate 8; lines add to 1,250 mg, stated mean tablet weight 1,177 mg +/- 2.5 %.
- API roller-compacted alone at 50-65 bar, rolls about 8 rpm, 20-30 C (not above 40-50 C) to keep the tetrahydrate; granules over 0.5 mm to a bulk density target.
- Granules moistened with stearic acid in ethanol, dried at about 30 C to 18.5-20 % moisture, through 1.5 mm; mixed with carmellose, SMCC and Mg stearate; 9 x 20 mm punches, 4-10 kg.
- Plant choice: standard HPMC film coat at 4 % (the patent's optional coat is an HPMCP, gastro-resistant type, which would change the release type). Batch 200,000 tablets. Standard practice assumed: blend times, IPC limits, coat settings.

| Template | Result | Step |
|---|---|---|
| T15 | FITS WITH SETTING | target tablet weight on the dried granule weight (water/ethanol change), losses excluded (known, wave 2; see safety rule) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| C1 | FITS WITH SETTING | hardness 4-10 kg (round-3 unit kgf) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The drying step has a lower limit as well as an upper one: drying below about 18.5 % starts to remove crystal water.

Counts: 151 rows; FITS 147, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0415 bempedoic acid + ezetimibe, film-coated IR, high-shear (bempedoic acid) and fluid-bed (ezetimibe) granulation, 180 mg + 10 mg

Source: US 2018/0338922 A1 (Esperion Therapeutics), Tables 31, 34, 35, 39, 47 and 49, https://patents.google.com/patent/US20180338922A1/en (full text also on TREA)

- Ezetimibe granules 80.00 mg: ezetimibe 10, lactose monohydrate 50, MCC 11, SSG 6, povidone K30 1, SLS 2; ezetimibe homogenised 30 min in the povidone/SLS solution and top-sprayed onto the excipients in a fluid bed (bed 30-45 C), dried 45-60 C to LOD not more than 2 % (105 C), #30.
- Bempedoic acid granules 205.10 mg: bempedoic acid 180, colloidal silica 3.5, MCC 9.6, HPC-L 12; silica surface treatment by dry mixing 45 min against sticking, HPC-L solution added in 1.5 min in a high-shear granulator, kneaded 2.5 min, wet sized #18, dried at 45 C to LOD not more than 1 % (50 C), #30.
- Extragranular: SSG 21, lactose 25, MCC 40, silica 0.5, Mg stearate 4; core 375.60 mg; Opadry AMB II 9.40 mg (2.5 %); 385.00 mg. Table 49: weights 368-380 mg, hardness 80-90 N, thickness 4.50-4.55 mm, disintegration 2-4 min.
- Plant choice (not in source): HPC-L and silica split between the premix and the binder solution in equal parts. Batch 300,000 tablets. Standard practice assumed: scale-up settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | ezetimibe granule quantity from its assay (T18 content from an in-process result; known, wave 1) |
| T18 | FITS WITH SETTING | bempedoic acid granule quantity from its assay (T18 content from an in-process result; known, wave 1) |
| T10 | FITS WITH SETTING | extragranular lactose takes both granulations' excess (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The two granulations are separate preparation stages that run alongside each other and both finish before the final blend.

Counts: 220 rows; FITS 215, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0416 benazepril hydrochloride, film-coated IR, fluid-bed granulation, 10 mg

NO SOURCE: only combination or veterinary patents and US labels with excipient names; no formula with amounts. Not counted.

## F0417 bosentan monohydrate, film-coated IR, high-shear granulation and fluid-bed drying, 125 mg (listed 62.5 mg)

Source: CA 2 671 778 A1 (Pharmascience), Example I and Table I, https://patents.google.com/patent/CA2671778A1/en. Close variant: 125 mg strength stated as the monohydrate; the example tablet is uncoated (film coat is standard practice).

- Per tablet: bosentan monohydrate 125.0 mg, pregelatinised starch 16.949, povidone K30 5.1 (dry) + 5.1 (in the binder solution), SSG 8.5 (intragranular); extragranular pregelatinised starch 8.5, Mg stearate 0.85; 170.0 mg (sum; not stated).
- Process: API, starch, povidone and SSG through 20 mesh, dry-mixed 3 min in a high-shear mixer; povidone in water stirred 30 min to a clear solution; granulated; dried in a fluid bed about 45 min; Comil 0.045 in screen; extragranular starch blended 2 min; Mg stearate (40 mesh) 3 min; compressed.
- Plant choice: HPMC film coat at 3 %. Batch 300,000 tablets in a contained suite (teratogenic API). Standard practice assumed: LOD end point, hardness, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | 125 mg stated as monohydrate with an anhydrous CoA assay: monohydrate-to-anhydrous factor then water correction is valid (C5 hydrate-labelled API; known, wave 1) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The marketed 62.5 and 125 mg strengths are stated as anhydrous bosentan; 125 mg of monohydrate is 121.0 mg anhydrous.

Counts: 148 rows; FITS 145, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0418 cilostazol, uncoated IR, fluid-bed granulation (listed: high-shear), 100 mg

Source: EP 3 409 294 A1 (Lek-AM), Example 4 [0047], [0043] and Table 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP3409294NWA1/document.pdf. Close variant: fluid-bed granulation.

- Per tablet: cilostazol 100.00 mg, MCC 39.40 (type 101 intragranular, type 102 extragranular; split not given), pregelatinised starch 11.05, croscarmellose sodium 13.60 (part intra-, part extragranular; split not given), hypromellose 5.10 (binder solution), Mg stearate 0.85; 170.00 mg.
- Process: API through 1.0 mm; blended 3 min with MCC 101, starch and part of the croscarmellose in the fluid bed, pre-heated (product about 30 +/- 10 C); HPMC solution sprayed; dried below 3.0 % moisture; 1.0 mm screen; MCC 102 and the rest of the croscarmellose, 20 min cubic blender; Mg stearate 2 min; round flat punches.
- API particle size is critical: claim D0.5 10-30 um, D0.9 40-70 um. In Table 1 the bioequivalent batch used two API lots mixed 93.3 : 6.7 (D0.9 57.0 um); a single coarse lot (D0.9 76.7 um) failed on Cmax.
- Plant choice (not in source): MCC and croscarmellose split in equal parts. Batch 500,000 tablets. Standard practice assumed: binder solution strength, spray settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| T22 | NEW SETTING | predicted PSD of a mix of API lots: mass-weighted cumulative % undersize of each lot's laser-diffraction table, then D0.5 / D0.9 by interpolation (variant of T22) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Mixing two API lots to a target D0.9 cannot be done with T26 (percentiles do not mix by mass); see the new setting and safety rule.

Counts: 136 rows; FITS 133, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0419 dipyridamole, sugar-coated IR, high-shear granulation, 75 mg

NO SOURCE: EP 0 068 191 B1 gives the excipients only as an unspecified balance ("tablet excipients to 250 mg") and uses an HPMC coat; labels give names only. Not counted.

## F0420 fosinopril sodium, uncoated IR, dry blend and hammer mill (listed: roller compaction, 10 mg), 5 mg

Source: EP 0 408 273 B1 (E.R. Squibb & Sons), Example 15 (checked against the page image), https://data.epo.org/publication-server/rest/v1.2/patents/EP0408273NWB1/document.pdf. Close variant: 5 mg strength made by a dry blend-and-mill route, not roller compaction; the 10 mg example (13) is alcohol-granulated.

- Per tablet: fosinopril sodium 5.0 mg, lactose 143, MCC 40.0, crospovidone 7.0, povidone 4.0, sodium stearyl fumarate 1.0; 200 mg. The 200,000-tablet batch in grams matches (1,000 / 28,600 / 8,000 / 1,400 / 800 / 200 g).
- Process: all but the lubricant mixed 5-10 min in a planetary or high-shear mixer, hammer-milled (0.04-0.08 in round-hole screen, medium speed, knives forward), sodium stearyl fumarate 1-3 min, compressed to 200 mg. Example 16: Mg stearate degrades fosinopril, so the lubricant choice is a recorded check.
- Batch 200,000 tablets as in the source; low RH for a moisture-sensitive API. Standard practice assumed: geometric premix for 2.5 % API, BU, IPC limits, desiccated packing.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 102 rows; FITS 100, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## Totals for F0401-F0420

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0401 | 150 | 146 | 4 | 0 | 0 |
| F0402 | 176 | 167 | 9 | 0 | 0 |
| F0404 | 110 | 107 | 3 | 0 | 0 |
| F0406 | 111 | 105 | 6 | 0 | 0 |
| F0407 | 188 | 180 | 8 | 0 | 0 |
| F0412 | 139 | 136 | 3 | 0 | 0 |
| F0413 | 145 | 142 | 3 | 0 | 0 |
| F0414 | 151 | 147 | 4 | 0 | 0 |
| F0415 | 220 | 215 | 5 | 0 | 0 |
| F0417 | 148 | 145 | 3 | 0 | 0 |
| F0418 | 136 | 133 | 2 | 1 | 0 |
| F0420 | 102 | 100 | 2 | 0 | 0 |
| **Total (12)** | **1,776** | **1,723** | **52** | **1** | **0** |

Counted 12 formulations, 1,776 rows: FITS 1,723, FITS WITH SETTING 52, NEW SETTING 1, GAP 0. NO SOURCE 8 (F0403, F0405, F0408, F0409, F0410, F0411, F0416, F0419).

New settings:
- T22 for a mix of API lots (F0418), variant of T22. Cilostazol's bioavailability follows the API's particle size: a single coarse lot (D0.9 76.7 um) failed bioequivalence on Cmax, while two lots mixed 93.3 : 6.7 (D0.9 57.0 um) passed. To choose or check a lot ratio, the master needs the predicted size distribution of the mix: each lot's cumulative % undersize per size class (laser diffraction, from the CoA) weighted by its mass in the mix, then D0.5 / D0.9 by interpolation. T22 now takes one set of sieve weights and gives d50 only. The measured PSD of the combined API is then checked with C1.

Safety rules:
- New: target tablet weight must come from what was charged, not from what was recovered (F0412, F0414). When a binder paste is added "q.s." or water or solvent leaves the granule, the target core weight changes with the composition. Correct chain: dry solids charged, including the paste solids from the recorded paste weight (T8, T2), at the granule's measured LOD, divided by the theoretical tablet count (T6). Dividing the recovered granule weight by the theoretical tablet count builds physical losses (dust, filter fines, samples) into the target: a 3 % granulation loss gives tablets 3 % low in drug. Leaving out the paste solids underdoses by their share. This sharpens the known wave-2 T15 rule (compress to the actual granule yield): T15 is right for losses that change the composition, never for losses that do not. For clodronate (F0414), compressing at the stated 1,177 mg a blend that still weighs 1,250 mg per tablet would give 753 mg instead of 800 mg (-5.8 %).
- New: T26 must refuse properties that do not mix by mass (F0418). Particle size percentiles (D50, D90), hardness and pH do not average linearly. Mixing API lots to a D0.9 target with the mix-to-target formula gives the wrong ratio, and here the PSD decides bioavailability (Cmax below 80 % of the reference with the coarse lot). Use the T22 mix setting above, then C1 on the measured PSD of the combined API.
- Reminder, known wave 1 (complex or dispersion content from its measured content), with its size here (F0406): the granule was planned at 30 % co-crystal = 16.5 % dapsone, but measured 28.1 % because filler was lost to the filter. Compressing to the planned weight (606 mg) would give about 170 mg dapsone (1.7 times the dose). Reading "30 %" as the dapsone content (333 mg tablets) would give about 94 mg (-6 %).
- Reminder, known C5 (hydrate double count), size 25 % (F0414): the tetrahydrate's 20 % water is crystal water. T11 factor 1.25 plus a water correction from the lot's water content gives 1,250 mg instead of 1,000 mg of the tetrahydrate.
- Reminder, known typed-factor and "as parent" rules (F0407, F0404): erythromycin 277.8/250 = 1.111 and amoxicillin 581.7/500 = 1.163 are potency allowances (900 ug/mg; about 86 %), not molecular-weight factors (1.049; 1.148). Typed as T11 factors and then corrected again by the lot potency, they would add about 11 % and 16 %.
- Reminder, known label basis (F0417): the patent doses 125 mg of bosentan monohydrate; the marketed 125 mg is anhydrous (129.1 mg monohydrate), so the patent tablet holds 3.2 % less. A master must state the basis.
- Reminder, known API quantity against label claim (F0404): the batch grams give 595 mg trihydrate per tablet against 581.7 mg in the per-tablet table. On a lot at the implied potency that is +2.3 % amoxicillin.
- Reminder, known stated total below the sum of the lines (F0420): the Example 12 batch already weighs 199 mg per tablet before its lubricant. Adding the 4.0 mg sodium stearyl fumarate of the table (203 mg) and compressing at 200 mg would give about 1.5 % less drug.

Sources that contradict themselves:
- EP 1 904 067 B1 (F0401): comparative Examples 4 and 5 give the Opadry as 16.02 mg = "4.02 %" target gain on the core, but 16.02 mg is 2.0 % of the 800 mg core (the text says about 4 %). The poloxamer median size is printed "50 mm" (um).
- CA 2 833 006 A1 (F0402): Table 3 puts 869.6 mg uncoated granule + 90 mg Surelease + 60 mg Opadry "per g" (1,019.6 mg). Table 5 has the coat at about 130 mg per g, which is 15 % of the uncoated granule (same 1.5 : 1 ratio). The Table 5 columns add to 466.69 and 233.44 mg against 466.6 and 233.3 mg stated.
- EP 1 610 766 B1 (F0404): the Example IX batch (297.5 g trihydrate, 88.5 g MCC for 500 tablets of 800 mg) is 595 mg + 177 mg per tablet, but the per-tablet table gives 581.7 mg + 190.3 mg.
- US 4,340,582 A (F0407): the coating vehicle is made from 191 ml ethanol + 48 ml water, and the solution is then "adjusted to 239 ml" with the rest of that same mixture. After volume contraction and with the dissolved solids, that volume is not exact.
- EP 4 289 432 A1 (F0413): API particle sizes are printed in mm (D50 3.44 mm, D90 10.80 mm), which must be um. Mg stearate is both in the granulated premix and added after granulation, with only one total given.
- EP 1 027 037 B1 (F0414): the Example 1 lines add to 1,250 mg, but the stated mean tablet weight is 1,177 mg +/- 2.5 %; the difference is not explained.
- EP 0 727 983 B1 (F0414): Example 4 names the API "anhydrous disodium clodronate tetrahydrate 400.00 mg", and its lines add to 550 mg against "MCC ad 650 mg". The total works only if the 400 mg is anhydrous and about 500 mg of tetrahydrate is weighed. Capsule Example 1 has the same pattern (470 mg of lines, ad 570 mg).
- US 2018/0338922 A1 (F0415): the bempedoic acid granulation batch is 4759-S1-093 in Tables 34-35 but 4490-S1-093 in Table 47 (minor).
- CA 2 671 778 A1 (F0417): the process adds sodium starch glycolate both before granulation and again with the extragranular starch, while Table I lists SSG only once, as intragranular. The tablet total is not stated (the lines add to 170.0 mg).
- EP 3 409 294 A1 (F0418): the general method puts part of the croscarmellose into the granule and sizes at 2.5-3.5 mm; Example 1 adds all of it after drying and sizes at 1.0 mm. Particle sizes are printed in mm (um meant).
- EP 0 408 273 B1 (F0420): the Example 12 table (lactose 139.5, povidone 4.5, sodium stearyl fumarate 4.0 mg) does not match its own batch (lactose 28,600 g = 143 mg, povidone 800 g = 4.0 mg, lubricant amount not given). The batch is the Example 15 formula.
