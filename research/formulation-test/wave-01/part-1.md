# Wave 1, part 1 (F0001-F0020)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

## F0001 abacavir sulfate (hemisulfate), film-coated IR, wet granulation

Source: US 6,294,540 B1, Example 1, Formulations A and D, https://patents.google.com/patent/US6294540B1/en

- Formulation A (wet granulation with povidone solution, then Mg stearate and compression): active 250, lactose 210, povidone 15, sodium starch glycolate 20, Mg stearate 5; 500 mg.
- Formulation D (direct compression, film-coated): hemisulfate 351.0 (= 300 mg abacavir), MCC 414.6, SSG 24.0, Mg stearate 8.0, colloidal silica 2.4; core 800.0 mg; Opadry yellow 24.0; 824.0 mg.
- Used here: Formulation A process with the 300 mg strength and the Formulation D coat (Opadry at 3 %). Batch 300,000 tablets.
- Standard practice assumed: high-shear granulation, fluid-bed drying, sieve sizes, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | hemisulfate to base with 2 drug molecules per salt unit (351.0/300 = 1.17, MW 670.8/2 over 286.3) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: Formulation A states "active ingredient 250" without saying whether this is base or hemisulfate; D states both. The master must state the basis (C5).

Counts: 75 rows; FITS 72, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0002 rilpivirine hydrochloride, film-coated IR, direct compression

Source: WO 2013/153162 A1, Example 5, https://patents.google.com/patent/WO2013153162A1/en

- Core: rilpivirine HCl form G 25.0 mg (stated as free base, i.e. about 27.5 mg salt), lactose monohydrate 55.145, silicified MCC 16.605, croscarmellose sodium 6.05, Mg stearate 1.10.
- Coat: Opadry II white 4.4 mg in water. Direct compression: dry blend of API, croscarmellose and Mg stearate with lactose and silicified MCC, compress, coat.
- Batch 1,000,000 tablets. Light-sensitive API: low-actinic light. Standard practice assumed: blend times, IPC limits, coat solids %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The API line is on the base basis while the other lines are weighed mg and no core total is given: the core is 103.9 mg if read literally, 106.4 mg on the salt actually weighed.

Counts: 64 rows; FITS 62, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0003 dextromethorphan hydrobromide, hard-candy lozenge, cooked and formed on a continuous line

Source: US 5,302,394 A, Example, https://patents.google.com/patent/US5302394A/en. Close variant: 10 mg DXM HBr per 2.5 g lozenge (listed 15 mg); candy rope formed, not cast in moulds.

- Per lozenge, dried basis: DXM HBr adsorbate 10 % on magnesium trisilicate 100 mg (= 10 mg DXM HBr), corn syrup solids 840, sugar 1,560; 2,500 mg (4 % adsorbate, sugar:corn syrup solids 65:35).
- Adsorbate suspended in No. 2 sugar syrup (67 Brix) at 27.78 % w/w (100 mg + 260 mg per lozenge) with a homomixer, kept stirred.
- Pumps set to a volumetric ratio 6.19 : 2.91 : 1 (sugar syrup : corn syrup 42/43 : suspension); pre-cooker, then main cooker at 145 C under 0.93 bar vacuum; rope formed into 2.5 g lozenges; final moisture 0.5-2.0 %.
- Run of 1,000 kg candy (400,000 lozenges). Standard practice assumed: rope sizing, cooling tunnel, wrapping, IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | syrup quantities from lot's % solids (Brix / dry substance) for a dried-basis formula |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T8 | FITS WITH SETTING | feed mass rate = volumetric flow x density (T8 product of readings) |
| T6 | FITS WITH SETTING | three-feed pump ratio checked as two ratios against 6.19:2.91:1 (T6 ratio used twice) |
| T12 | FITS WITH SETTING | dry-solids accountability: wet feeds converted to solids (T12 reverse) for T4 |

Counts: 55 rows; FITS 50, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0004 glutathione (reduced), tablet, fluid-bed granulated (listed: DC film-coated 500 mg)

Source: US 11,654,125 B2, Examples 1 and 2, https://patents.google.com/patent/US11654125B2/en. Close variant: fluid-bed granulation instead of DC; tablet weight not stated.

- Batch: reduced glutathione 120 kg, cyclic oligosaccharide 19 kg, cellulose 57 kg, pullulan 1 kg granulated in a fluid-bed granulator-dryer; then calcium stearate 3 kg in a conical blender; rotary compression. 200 kg batch, glutathione 60 % w/w.
- Example 2 coats these tablets with shellac (enteric); here a standard HPMC film coat is assumed for the listed IR film-coated type.
- Plant choice (not in source): 500 mg glutathione per tablet gives 833 mg cores, about 240,000 tablets. Standard practice assumed: pullulan solution strength, spray rate, temperatures, coat %, nitrogen protection for an oxidisable API.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w of a 200 kg batch (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 78 rows; FITS 75, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0005 amoxicillin trihydrate, chewable, roller compaction

Source: WO 00/66169 A1, Example 1, https://patents.google.com/patent/WO2000066169A1/en. Close variant: 200 mg strength (listed 250 mg).

- Per tablet: amoxicillin trihydrate 232.56 mg (86 % potency, = 200 mg amoxicillin), granular mannitol 190.93 (adjusted to keep weight), crospovidone 7.02, aspartame 3.24, Mg stearate 4.50, colour 0.27, flavours 11.48; 450 mg.
- API, crospovidone, colour, aspartame, mannitol and half the Mg stearate blended, roller compacted and milled; flavours and the other half of Mg stearate blended in; compressed.
- Batch 500,000 tablets in a beta-lactam segregated suite. Standard practice assumed: roll settings, screens, blend times, hardness limits; no disintegration test for a chewable (decision recorded).

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency stated as amoxicillin (as parent): no T11 factor allowed (C5 extended) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 62 rows; FITS 59, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0006 cefotiam hexetil hydrochloride, film-coated, dry granulation (slugging)

Source: US 4,616,008 A / EP 0 163 433 B1 (Takeda), Examples 1, 2 and 8, https://patents.google.com/patent/US4616008A/en. Close variant: 125 mg strength by slugging (listed 200 mg, roller compaction).

- Example 2(a) per tablet: cefotiam hexetil dihydrochloride 183 mg (= 125 mg cefotiam, non-ester), alpha-cyclodextrin 50, citric acid 50, Mg stearate 3; 286 mg.
- Process (Example 1 route): API with half the cyclodextrin and half the Mg stearate slugged, slugs milled, rest added, compressed; film coat sprayed at 2-5 % of tablet weight.
- Batch 300,000 tablets in a beta-lactam suite. Standard practice assumed: slug press settings, mill screen, coat formula, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency as cefotiam (non-ester, as parent): no T11 factor (C5 extended) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 69 rows; FITS 66, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0007 norfloxacin, film-coated IR, wet granulation

Source: EP 1 459 739 A1, Example 2 and paragraphs 0017-0019, https://data.epo.org/publication-server/rest/v1.2/patents/EP1459739NWA1/document.pdf

- Per tablet: norfloxacin 400 mg, anhydrous citric acid 200 (stabiliser, dissolved in the granulating water), sodium starch glycolate 23, Mg stearate 7; 630 mg core.
- Granulate API with the citric acid solution (water, or water/ethanol 50/50), dry at 55-65 C to water below 3 %, size, add disintegrant and lubricant, compress, aqueous film coat.
- Batch 300,000 tablets. Standard practice assumed: high-shear equipment settings, coat formula and 3 % gain, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T17 | FITS WITH SETTING | granulating liquid from stabiliser at about 50 % w/v (T17 % w/v made up to volume) |

Counts: 74 rows; FITS 71, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0008 prulifloxacin (levo-isomer), film-coated IR, wet granulation

Source: US 8,501,741 B2, Example 14, https://patents.google.com/patent/US8501741B2/en. Close variant: levo-prulifloxacin (S-isomer of the same prodrug) 132.1 mg (listed racemate 600 mg).

- Per 1,000 tablets: levo-prulifloxacin 132.1 g, lactose 25, MCC 10, starch 5, HPC 6, croscarmellose 4, colloidal silica 0.4, Mg stearate 1 g; binder 85-90 g of 3 % HPMC in 75 % ethanol; tablet stated as about 200 mg.
- Sieve 80 mesh, wet mass with binder, granulate 16 mesh, dry 55 +/- 5 C, size 16 mesh, add HPC, croscarmellose, silica, Mg stearate; assay granule, then compress (8.5 mm, 200 mg, 8-11 kg).
- Coat per kg cores: Opadry white 35 g in 402.5 g 95 % ethanol, pan preheated 60 C, spray at about 45 C until the liquid is used.
- Batch 500,000 tablets. Standard practice assumed: mixer type, drying end point, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T18 | FITS WITH SETTING | compression weight from the granule assay (T18 content from in-process result) |
| T26 | NEW SETTING | 75 % ethanol made from 95 % ethanol and water by % v/v: needs the alcohol-strength table (volume contraction), not a straight mass balance |

Counts: 89 rows; FITS 85, FITS WITH SETTING 3, NEW SETTING 1, GAP 0.

## F0009 trimethoprim, scored IR, MADG, 200 mg

NO SOURCE: only labels with excipient names and co-trimoxazole patents found; no trimethoprim-alone formula with process. Not counted.

## F0010 diloxanide furoate + metronidazole, uncoated, roller compaction, 250 + 200 mg

NO SOURCE: only labels and pharmacy listings; no quantitative formula. Not counted.

## F0011 mefloquine hydrochloride, tablet (scored), two-stage wet granulation

Source: US 4,579,855 A, Example 6, https://patents.google.com/patent/US4579855A/en. Close variant: wet granulation (listed roller compaction); score per the marketed Lariam tablet.

- Per tablet: mefloquine HCl modification E 274.12 mg (= 250 mg base), poloxalkol 2.94, MCC 63.02, crospovidone 40.0 (two portions), ammonium calcium alginate 11.76, maize starch 28.88, lactose 50.58, talc 11.0, Mg stearate 11.0; 493.3 mg.
- Stage 1: API (modification D) wetted with an alcoholic poloxalkol solution, kneaded, dried, sieved: converts to modification E. Stage 2: blended with fillers and first crospovidone portion, wetted with water/alcohol, kneaded, granulated, dried, sieved; second crospovidone portion and talc/Mg stearate added; compressed.
- Batch 200,000 tablets. Standard practice assumed: portion split of crospovidone, liquid amounts, drying limits, score subdivision test.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | score subdivision: halves within +/- % of their mean (C3 limits as % of series mean) |

Counts: 81 rows; FITS 78, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0012 secnidazole, film-coated IR (scored caplet), wet granulation with starch paste

Source: BACTROSEC 500 mg, Globela Pharma, Module 1 quantitative declaration (Nigeria NAFDAC SmPC file), https://admin.greenbook.nafdac.gov.ng/uploadImage/smpc_files/2023/12/17/20231217426c44cd-2d96-5fba-b780-b6eac1f75814.pdf

- Per tablet / per batch of 100,000: secnidazole 500 mg / 50 kg, maize starch 109.34, MCC 50, sodium starch glycolate 15 (dry mix); paste of maize starch 35 with methyl paraben 0.6 and propyl paraben 0.06 in water q.s.; colloidal silica 8, SSG 15, Mg stearate 10, talc 7 (lubrication); 750 mg.
- Coat: HPMC E15 10, talc 2, titanium dioxide 2 in isopropanol 140 and dichloromethane 196 (removed); 764 mg. API calculated on assay basis.
- Process implied by the formula headings (dry mix, paste, granulate, lubricate, compress, coat); equipment settings, drying limits and IPC limits are standard practice.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C3 | FITS WITH SETTING | score subdivision test (C3 limits as % of series mean) |

Counts: 93 rows; FITS 90, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0013 favipiravir, film-coated IR, high-shear wet granulation

Source: RU 2 751 108 C1, Example 1 and claim 2, https://patents.google.com/patent/RU2751108C1/en

- Core per tablet: favipiravir 200.00 mg, MCC 135.00 (half intra, half extra), L-HPC 60.00, crospovidone 14.00, povidone 15.00 (as 10 % binder solution), colloidal silica 8.00, stearic acid 3.00; 435 mg. Coat: Opadry yellow.
- Mixer: L-HPC, API, half MCC 5 min at 100 rpm; binder at 5 ml/min (impeller 150, chopper 900 rpm); granulate 10 min (200/1500 rpm); fluid-bed dry at 45 C product, 35 m3/h to moisture not more than 2 %; 1 mm screen; blend 10 min with rest of MCC, crospovidone, silica; stearic acid 2 min.
- Coating: perforated pan, air 140 m3/h, bed 35 C, spray 3 ml/min, 8 rpm. Batch 500,000 tablets; teratogenic API handled as potent. Coat weight gain not stated: 3 % assumed.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 81 rows; FITS 79, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0014 nirmatrelvir, film-coated IR, dry granulation (listed: continuous line)

Source: Indian application 202241004939 (Optimus Pharma), Example, https://www.quickcompany.in/patents/pharmaceutical-compositions-of-nirmatrelvir. Close variant: batch roller compaction, not a continuous line.

- Intragranular per tablet: nirmatrelvir 150.00 mg (D90 below 200 um), MCC 101 185.00, lactose monohydrate 100.00, croscarmellose 22.50, colloidal silica 7.50, sodium stearyl fumarate 7.50; extragranular SSF 7.50; core 480.0 mg.
- Coat: Opadry pink 22.50 mg, 3.0 % gain at 15 % solids; 502.5 mg.
- Co-sift #30 (MCC in two halves), blend 20 min, add SSF 5 min, roller compact, mill 1.0 mm, re-compact and mill until all passes #30; lubricate 5 min; compress; coat. Batch 500,000 tablets.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| F2 | FITS WITH SETTING | re-compact and mill until all granules pass #30 (F2 with C4 on every round) |

Counts: 73 rows; FITS 70, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0015 etidronate disodium, uncoated, roller compaction, 200 mg

NO SOURCE: labels and USP monograph only; bisphosphonate patents found are for alendronate. Not counted.

## F0016 acenocoumarol, scored, fluid-bed granulation, 4 mg

NO SOURCE: SmPCs give lactose content only; no formula with process. Not counted.

## F0017 amlodipine besylate, orally disintegrating tablet, direct compression

Source: Behin Sundara Raj et al., J. Appl. Pharm. Sci. 2(8):118-123 (2012), formulation F3, doi:10.7324/JAPS.2012.2819, https://japsonline.com/admin/php/uploads/601_pdf.pdf. Close variant: 10 mg strength (listed 5 mg).

- Per tablet (F3): solid dispersion equivalent to 10 mg drug 30 mg, MCC PH101 55, lactose 37.3, crospovidone 7.0, sodium starch glycolate 4.2, colloidal silica 2.8, vanilla 1.0, sodium saccharin 1.0, talc 1.0, Mg stearate 0.7; 140 mg, 6 mm flat punches.
- Solid dispersion mixed with silica, then MCC, SSG, lactose, talc; flavour and saccharin by geometric dilution; Mg stearate not more than 3 min; direct compression.
- The paper does not name the dispersion carrier and does not say whether 10 mg is besylate or base; batch 1,000,000 tablets assumed; standard practice for blend times and IPC limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | dispersion quantity from its own in-process assay (T18 content from in-process result) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 63 rows; FITS 60, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0018 atorvastatin calcium (amorphous, HP-beta-CD complex), orally disintegrating tablet, freeze-dried complex then direct compression

Source: Lv H-X et al., Pharmazie 67:46-53 (2012), Table 8 F2 and section 4.2.3, doi:10.1691/ph.2012.1082, https://storage.imrpress.com/IMR/pharmazie/application/67_01_S46_53.pdf. Close variant: 10 mg (listed 20 mg).

- Per tablet (F2): AT/HP-beta-CD inclusion complex 67 mg (drug content 14.9 %, = 10 mg AT), mannitol 115, L-HPC 10, croscarmellose 10, calcium carbonate 10, aspartame 2, Mg stearate 1; 215 mg; 8 mm flat punch, 2 mm thick.
- Complex: AT and HP-beta-CD (stated molar ratio 1:6) dispersed in ethanol, sonicated 30 min, ethanol removed by rotary evaporation, redissolved in water, filtered 0.22 um, frozen and lyophilised.
- Result: disintegration 27 s, hardness 5 kg. Batch 200,000 tablets; lyophiliser cycle parameters, filter test, blend times are standard practice.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | complex quantity from its measured drug content (T18 in-process content) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T11 | FITS WITH SETTING | HP-beta-CD quantity from AT moles x 6 (T11 molar factor between species) |
| T11 | NEW SETTING | HP-beta-CD average molecular weight taken from the lot's CoA (degree of substitution varies by lot), not a fixed constant |

Counts: 65 rows; FITS 60, FITS WITH SETTING 4, NEW SETTING 1, GAP 0.

## F0019 bendroflumethiazide + nadolol, uncoated IR, two separate granulations

Source: US 4,327,080 A / EP 0 070 178, Example 5 (nadolol:BFZ 80:5), https://patents.google.com/patent/US4327080A/en

- Per tablet (parts = mg): BFZ granulation 100 (BFZ 5, PVP 5, pregelatinised starch 10, anhydrous lactose 80), nadolol granulation 120 (nadolol 80, MCC 40), MCC PH102 95.5, sodium carboxymethyl starch 10, blue lake 21, Mg stearate 3.5; 350 mg.
- BFZ granulation: BFZ, lactose and starch wetted with PVP in ethanol (BFZ:ethanol 1:25 w/v), tray or fluid-bed dried, screened below 500 um. Nadolol granulation: nadolol with MCC 2:1, precompacted.
- Both granulations blended with the other excipients and compressed. Batch 500,000 tablets; standard practice for drying limits, precompaction settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | ethanol volume = 25 ml per g BFZ (T8 "% of" a recorded weight, liquid by volume) |
| T18 | FITS WITH SETTING | quantity of each granulation for the final blend from its in-process assay (T18 in-process content) |

Counts: 88 rows; FITS 84, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0020 colesevelam hydrochloride, film-coated IR, roller compaction

Source: US 9,566,299 B2, Examples 1 and 4, https://patentimages.storage.googleapis.com/a5/68/e8/99b9a0fd8f1c0a/US9566299.pdf

- Intragranular per tablet: colesevelam HCl 625.0 mg, MCC PH102 50.0, colloidal silica 4.5, Mg stearate 1.0; extragranular MCC 153.0, silica 4.5, Mg stearate 2.0; core 840.0 mg.
- Co-sift #30, Mg stearate #60, blend 5 min, roll compact, mill #25, sift #60: fines below #60 re-compacted until 50-60 % of granules are above #60; blend 5 min with MCC and silica, lubricate 3 min, compress.
- Coat (Example 4, composition I): HPMC 15 cP 32.85, HPMC 5 cP 32.85, diacetylated monoglycerides 1.49 mg in water, 8 % weight gain, dispersion stirred 40 min.
- Batch 300,000 tablets; hygroscopic polymer handled at low RH; standard practice for roll settings and IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| F2 | FITS WITH SETTING | re-compact fines until 50-60 % above #60 (F2 stop when all named checks pass, T22 % retained) |

Counts: 77 rows; FITS 74, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## Totals for F0001-F0020

Counted 16 formulations, 1,187 rows: FITS 1,135, FITS WITH SETTING 50, NEW SETTING 2, GAP 0. NO SOURCE 4 (F0009, F0010, F0015, F0016).

New settings:
- T26 by % v/v (F0008): diluting 95 % ethanol to 75 % needs the alcohol-strength table because volumes contract. A plain mass balance gives the wrong strength. Variant of T26.
- T11 with a lot-specific molecular weight (F0018): HP-beta-CD's average molecular weight depends on its degree of substitution, so it must come from the lot's CoA rather than be a fixed constant. Variant of T11.

Safety rules:
- Double adjustment (F0008): the source sets the compression weight from the granule assay. If the API was already potency-adjusted at dispensing, using the assay again doses twice. The master must refuse an in-process T18 weight adjustment when T9 was applied to the same API, unless the adjustment is limited to a stated band.
- Complex/dispersion content (F0018, F0017): the amount of an in-house complex or dispersion must come from its measured drug content. The preparation ratio must not be used. The theoretical 1:6 molar content (about 6 %) against the measured 14.9 % would put about 2.3 times the drug into each tablet.
- Mixed bases in a formula (F0002): when one formula line is on the base basis and the others are weighed mg, the theoretical tablet weight must be the T2 sum of the weighed (salt) quantities. Reading the lines literally gives 103.9 mg against 106.4 mg actually weighed, so tablets compressed to 103.9 mg would hold about 2.3 % less drug.

Sources that contradict themselves:
- EP 1 459 739 (F0007): it says the stabiliser is about 50 % w/v of the solvent, "i.e. 200 mg citric acid in 400 ml water", which is 0.05 % w/v.
- US 8,501,741 Example 14 (F0008): the solids add up to 183.5 g per 1,000 tablets, plus about 2.6 g HPMC from the binder (about 186 mg per tablet), but the tablet is stated as about 200 mg.
- IN 202241004939 (F0014):
  - The % w/w column does not match the mg column; it sums to 98.5 % and gives 31.00 % for 150 of 480 mg.
  - The 300 mg column totals 940 mg, but its lines sum to 960 mg.
  - Both strengths get the same 22.5 mg coat, although the coat is stated as 3 %.
  - Claim 5 gives a 1:10 ratio of drug to croscarmellose, but the example is about 6.7:1.
- Pharmazie 67:46 (F0018): the 1:6 complex shows an entrapment efficiency of 104.3 %. Its drug content of 14.9 % fits a 1:6 weight ratio, not the stated 1:6 molar ratio.
- WO 2013/153162 (F0002): the API is stated "calculated as free base" with no core total, so the core weight is ambiguous.
- US 9,566,299 (F0020): Example 5 uses isopropanol and dichloromethane, but its process is headed "aqueous dispersion".
- Bactrosec Module 1 (F0012): the weight tolerance "750.00 +/- 5.00" sits in the kg-per-batch column, so its unit is unclear.
