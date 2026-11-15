# Wave 4, part 3 (F0341-F0360)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.
Sources were downloaded beforehand by the wave's source finder; this part worked only from those files.

## F0341 hyoscine butylbromide, sugar-coated IR, high-shear wet granulation, 10 mg

NO SOURCE: the Canadian product monograph and UK/IE SmPCs give the core and sugar-coat ingredients only (sucrose amount but no full formula, no process); no patent example could be read. Not counted.

## F0342 magaldrate, chewable IR, direct compression (listed: roller compaction, 800 mg)

Source: US 5,665,782 A (Miles Inc.), the single Example (chewable antacid tablet), https://patentimages.storage.googleapis.com/dd/c0/9c/b6c842a4f65c3e/US5665782.pdf. Close variant: 500 mg magaldrate, blended and directly compressed, not roller compacted.

- Per tablet: magaldrate 500 mg, starch 120, sweetener 360, flavour 8, lubricant 15, hydrolysed gelatin (type B) 3; about 1,006 mg.
- Process in the source: all ingredients sieved, mixed in a blender and tableted by standard methods; nothing else.
- The sweetener, flavour and lubricant are not named: mannitol and Mg stearate are assumed. Batch 500,000 tablets (503 kg). Standard practice assumed: sieve sizes, blend times, tooling, hardness and friability limits, acid-neutralising capacity test; no disintegration test for a chewable (decision recorded).

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the patent does not say whether 500 mg magaldrate is as-is or on the dried basis. The magaldrate assay is on the dried basis, so the master must state the basis before T9 is applied (known C5 / T9 basis rule).

Counts: 86 rows; FITS 84, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0343 mosapride citrate, film-coated IR, high-shear wet granulation (listed: roller compaction)

Source: CN 107744509 B, Example 1 (Chinese with machine translation), https://patents.google.com/patent/CN107744509B/en. Close variant: wet granulation with an HPMC solution, not roller compaction; the source has no film coat.

- Per batch (g): mosapride citrate dihydrate (15 um) 26.50, lactose 295.00, maize starch 160.00, HPMC 12.00 in purified water 188.00 (binder), then L-HPC 140.00, Mg stearate 6.50, colloidal silica 8.25 (extragranular); 648.25 g of solids.
- Excipients through 60 mesh; HPMC dissolved in the water; lactose, API and starch premixed and granulated in a high-shear granulator with the solution; dried; sized through 30 mesh; final blend with L-HPC, Mg stearate and silica; compressed.
- Strength and tablet count are not stated. Assumed here: 5 mg labelled as anhydrous mosapride citrate (MW 614.0 against 650.05 for the dihydrate), so 5.29 mg dihydrate per tablet; 26.50 g then makes about 5,000 tablets of about 129.7 mg.
- Batch 500,000 tablets (100 times Example 1; 64.8 kg cores). Standard practice assumed: drying conditions and LOD limit, tooling, IPC limits, an aqueous HPMC film coat at 3 %.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the API lot's assay is on the anhydrous basis with a water result, so T9 with the water correction gives the dihydrate quantity directly. Adding a dihydrate factor as well would count the water twice (+5.9 %); this is the built-in C5 refusal. Reading 5 mg as mosapride base would give 7.70 mg dihydrate (+45 %), so the master must state the label basis (known rule).

Counts: 155 rows; FITS 153, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0344 tegoprazan, orally disintegrating tablet, direct compression

Source: US 2023/0381109 A1 (HK inno.N), Comparative Example 1, Table 1, https://patents.google.com/patent/US20230381109A1/en. Wave 1 (F0042) used Example 2 of the same patent (fluid-bed granulated ODT); this is the direct-compression example.

- Per tablet: tegoprazan 50.0 mg, mannitol 200SD 50.0, Pearlitol Flash 195.0, crospovidone CL-SF 17.0, maltitol 17.0, sucralose 3.5, enzymatically modified stevia 1.5, peppermint flavour 3.0, colloidal silica 3.0, Mg stearate 10.0; 350.0 mg.
- All materials through 25 mesh, mixed, compressed on a conventional press to 350 mg at 5-8 kP.
- Results: 6 kP; disintegration 18 s (colour-wetting test on filter paper), 20 s in the mouth, 23 s in the tester.
- Batch 300,000 tablets (105 kg). Standard practice assumed: blend times, premix of the small sweetener and flavour lines, lubrication time, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the patent shows this direct-compression tablet tastes strongly bitter (4.6 of 5). A plant would choose a granulated example; the mapping does not change.

Counts: 111 rows; FITS 109, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0345 tenapanor hydrochloride, film-coated IR, dry blend and compression

Source: EP 4 255 397 B1 (Ardelyx / AstraZeneca), paragraph [0044] with [0009], [0021]-[0022], [0034] and claims 1-9, https://data.epo.org/publication-server/rest/v1.2/patents/EP4255397NWB1/document.pdf

- Per tablet: tenapanor HCl (amorphous bis-HCl) 53.2 mg (= 50 mg tenapanor), propyl gallate 1.0, tartaric acid 5.0, stearic acid 10.0, L-HPC 25.0, colloidal silica 1.3, MCC 404.8; 500.3 mg core.
- Process: tenapanor, propyl gallate and tartaric acid blended with L-HPC; milled to remove lumps; stearic acid added during or after milling; blended; compressed (roller compaction is optional and not used here). IR film coat based on polyvinyl acetate.
- The API lot must carry more chloride than the 2:1 salt (5.82 %); 6.0-6.8 % is preferred for stability. A desiccant with oxygen absorber protected the tablets.
- Batch 200,000 tablets (100 kg). Standard practice assumed: where MCC and silica join (here the first blend), mill screen, blend times, coat at 3 %, IPC limits.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency as tenapanor free base: no T11 factor in the same chain (C5 extended, as parent) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: because the lot carries excess HCl, the fixed factor 53.2/50 = 1.064 is right only at exactly 2:1. The quantity must come from the lot's assay as free base (T9); the chloride limit is a C1 check on the CoA.

Counts: 129 rows; FITS 126, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0346 tranexamic acid, film-coated modified-release (HPMC matrix), wet granulation (listed: roller compaction)

Source: US 7,947,739 B2 (Xanodyne; Lysteda family), Example 3 / Table 3 and Example 1 steps, text via https://eureka.patsnap.com/patent-US7947739B2. Close variant: aqueous wet granulation with povidone, not roller compaction.

- Per tablet / per batch of 130,000: tranexamic acid 650.0 mg / 84.50 kg, MCC PH101 44.25 / 5.753, colloidal silica 0.75 / 0.0975, pregelatinised maize starch 49.50 / 6.435, HPMC K3 Premium LV 147.00 / 19.110, povidone K29-32 36.00 / 4.680, stearic acid 18.00 / 2.340, Mg stearate 4.50 / 0.585; purified water 135.00 / 17.550 (removed); 950.0 mg core, 123.5 kg.
- Coat: Opadry White YS-1-7003 4.305 kg in water 38.750 kg, including 6 kg excess for transfer losses (net about 28.5 mg per tablet, 3.0 %, derived).
- Steps in the downloaded text: ingredients kept in moisture-resistant containers; povidone dissolved in the water; tranexamic acid, MCC, starch and silica granulated with it. The rest of Example 1 was cut off by the site: drying, milling, where HPMC joins (assumed extragranular), lubrication, compression and coating are standard practice.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T2 | FITS WITH SETTING | coating suspension total includes a fixed 6 kg transfer excess (T2 with a typed constant, then T17); the excess shows in the T4 reconciliation |

Counts: 152 rows; FITS 149, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0347 Bacopa monnieri herb dry extract, film-coated IR, direct compression, 300 mg

NO SOURCE: only supplement labels and certificates (excipient names, bacoside content) and pharmacology papers; no quantitative formula with process. Not counted.

## F0348 Chitrakadi vati (Plumbago zeylanica + 10 ingredients), hand-rolled pills (listed: fluid-bed granulated uncoated tablet)

Source: Patel S et al., Preparation and standardization of Chitrakadi vati, J Pharm Sci Innov 2022;11(3):28-35, laboratory formulation and Tables 1, 4 and 10, doi:10.7897/2277-4572.113230, https://www.jpsionline.com/articles/preparation-and-standardization-of-chitrakadi-vati.pdf. Close variant: pills rolled from a dough with pomegranate juice and air-dried, not granulated and compressed; 200 mg, not 250 mg.

- Composition by parts: Chitraka root, Pippali root, Shunthi, Maricha, Pippali, Hingu, Ajamoda, Chavya, Yavakshara and Sarjikshara 1 part each; Panchalavana 5 parts (15 parts). At 200 mg: about 13.3 mg of each and 66.7 mg Panchalavana (derived).
- Fine powders mixed; pomegranate juice q.s. to a dough; pills rolled to 0.20 g; air-dried 24 h; packed airtight.
- Tests: weight variation (20), disintegration (6), Monsanto hardness (5), friability (10); HPTLC plumbagin 0.84 %, piperine 0.92 %, zingiberene 0.71 %.
- Batch 50 kg (250,000 vati). Standard practice assumed: mesh size, pill-rolling machine, a limit for juice added, drying limit.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from parts: part / sum of parts x batch (T6 ratio into T8 % w/w mode) |
| F2 | FITS WITH SETTING | add juice q.s. until the dough rolls (F2 with C4 each round; total added by T2) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the method gives 0.20 g per vati, but Table 4 reports 2,057 mg for the same laboratory pills. The master takes 200 mg from the formula and checks it against the tooling (known wave 2 rule).

Counts: 88 rows; FITS 84, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0349 Kanchanara guggulu (Bauhinia variegata + 11 ingredients), tablet 1 g, paste granulation (listed: 250 mg film-coated, high-shear)

Source: Sunny SE, Thara Lakshmi S, Analytical profile of Kanchanara guggulu tablets prepared as per Sharangadhara Samhita and Bhaishajya Ratnavali, Int J Ayurveda Pharma Res 2022;10(6):29-35, Table 3 (Sharangadhara column) and preparation section, https://ijapr.in/index.php/ijapr/article/download/2417/1670. Close variant: 1 g tablets, wet massed by hand and dried in a dryer; 12 classical ingredients.

- Per batch (g): Kanchanara bark 80, Haritaki 16, Vibhitaki 16, Amalaki 16, Pippali 8, Maricha 8, Nagara 8, Varuna 8, Twak 2, Ela 2, Tejapatra 2 (herbs 166 g); Shuddha Guggulu 166 g, equal to all the herbs together.
- Added: CMC sodium 1 % w/w, then a paste of gum acacia 5 % and liquid glucose 5 % in water; dried, powdered to granules; Aerosil 0.5 %; compressed to 1 g.
- Guggulu purified by dolayantra swedana in Triphala decoction (AFI method; more than 50 % of the guggulu was lost). Batches gave 285-289 tablets.
- Plant batch: 300 times Table 3 (about 111 kg, about 111,000 tablets). Standard practice assumed: decoction ratios, granulation and drying limits, tooling, IPC limits, and an aqueous HPMC film coat at 2 % for the listed coated type.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | Triphala decoction water as a multiple of the herb weight (T8 "% of" a recorded weight) |
| T8 | FITS WITH SETTING | Shuddha guggulu = total herb powder weighed (T8 "% of" a recorded weight, 100 %) |
| T8 | FITS WITH SETTING | CMC, acacia, liquid glucose and Aerosil as % w/w of the recorded powder mass (T8 "% of" a recorded weight) |
| T6 | FITS WITH SETTING | angle of repose (T6 option, round 3) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the guggulu line is purified guggulu. The master must weigh purified material after the purification yield is recorded, never raw guggulu against this line (known herbal basis rule, wave 1). The paper does not say whether the excipient % are of the powder or of the final mass; the powder mass is assumed.

Counts: 161 rows; FITS 155, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0350 Lavangadi vati (clove + 3 ingredients), compressed vati from wet granules (listed: moulded lozenge, 125 mg)

Source: Dudhal NM, Mane TN, Lokapure SG et al., Standardization of marketed ayurvedic formulation Lavangadi vati, J Pharmacogn Phytochem 2018;7(5):1082-1085, Tables 1-2 and section 2.2, https://www.phytojournal.com/archives/2018/vol7issue5/PartS/7-4-608-395.pdf. Close variant: granulated and compressed with an 8 mm punch, not moulded; tablet weight not stated.

- Per vati: clove 10 mg, black pepper 10, Vibhitaki 10, Khadira (Acacia catechu) 30; Acacia arabica bark decoction q.s. as binder (60 mg of herbs plus binder solids).
- Powders triturated with the decoction to a semisolid paste, pressed through sieve no. 12, granules dried; granules tested (moisture 2.3 %, bulk 0.58 and tapped 0.62 g/ml, Carr 6.45 %, Hausner 1.06, angle of repose about 32.6 degrees); compressed on a 10-station rotary press.
- Batch 100,000 vati (6.0 kg of herbs). Standard practice assumed: decoction ratio, drying temperature (clove oil is volatile), lubricant, target weight from the granule yield, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | decoction water as a multiple of the bark weight (T8 "% of" a recorded weight) |
| F2 | FITS WITH SETTING | triturate with decoction q.s. until a semisolid paste forms (F2 with C4 each round) |
| T6 | FITS WITH SETTING | angle of repose (T6 option, round 3) |
| T15 | FITS WITH SETTING | target vati weight = 60 mg herbs x dried granule weight / herb weight charged (T15 on the recorded granule weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 90 rows; FITS 84, FITS WITH SETTING 6, NEW SETTING 0, GAP 0.

## F0351 Tinospora cordifolia stem (Guduci sattva) tablets, 500 mg, sieved granules compressed (listed: roller compaction)

Source: Sharma R, Amin H, Galib, Prajapati PK, Validation of standard manufacturing procedure of Guduci sattva and its tablets, Anc Sci Life 2013;33(1):27-34 (PMC4140018), methods and results text, https://europepmc.org/article/PMC/PMC4140018. Close variant: sattva (the starchy sediment of a cold aqueous maceration), not a concentrated extract; sieved and compressed, not roller compacted.

- Sattva per sub-batch: 5 kg fresh stem (1.6-2.0 cm thick) chopped and pounded, soaked 12 h in 4 times its weight of water (w/v), macerated by hand about 1 h, filtered through four-fold cloth, settled 4 h, supernatant siphoned, sediment air-dried; mean yield 3.8 % over 15 batches.
- Tablets: sattva through 20 mesh, oven-dried at 50 C until dry, mixed with 1 % gum acacia, compressed at 500 mg on a 16-station press (about 495 mg sattva + 5 mg acacia, derived). Results: hardness 1.75 kg/cm2, mean weight 501.10 mg, disintegration 5.18 min, friability 0.51 %.
- Hygroscopic: stored airtight with cotton. Batch 100,000 tablets (49.5 kg sattva from about 1,300 kg fresh stem, run as sub-batches; plant choice).
- Tables 1-7 are images in the article and were not in the download; only numbers from the text are used.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | soaking water = 4 x stem weight, by volume (T8 "% of" a recorded weight, liquid by volume) |
| T8 | FITS WITH SETTING | gum acacia = 1 % of the recorded sattva granule weight (T8 "% of" a recorded weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 78 rows; FITS 74, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0352 Vertigoheel (Anamirta cocculus D4 + 3 homeopathic triturations), uncoated tablet, direct compression

Source: Fachinformation Vertigoheel Tabletten (Biologische Heilmittel Heel GmbH), sections 2 and 6.1, https://www.fachinfo.de/fi/pdf/014648, with the package leaflet (process statement), https://static.shop-apotheke.com/pdf/Beipackzettel-vertigoheel-tabletten-100-st-06979686-bz.pdf

- Per tablet: Anamirta cocculus trituration D4 210 mg, Conium maculatum trit. D3 30 mg, Ambra grisea trit. D6 30 mg, Petroleum rectificatum trit. D8 30 mg (300 mg of lactose triturations); Mg stearate (amount not stated).
- Process stated: joint potentisation over the last two decimal steps per HAB method 40c, then tableting. So the four components are mixed at two steps below the label (D2, D1, D4, D6) in the ratio 2.1 : 0.3 : 0.3 : 0.3 mg per tablet, then triturated twice with 9 parts lactose each.
- Batch 500,000 tablets: joint mix 1.5 kg, plus 13.5 kg lactose (15 kg), plus 135 kg lactose (150 kg trituration).
- Standard practice assumed: starting triturations bought or made per HAB, trituration in three lactose portions with HAB grinding and scraping times, Mg stearate at 1 % (not in the source), tooling and IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | joint mix 2.1 : 0.3 : 0.3 : 0.3 per tablet = label mg x 1/100 x tablets (T8 product of a reading and constants) |
| F7 | FITS WITH SETTING | two decimal steps on the same lot, 1 part + 9 parts lactose each (F7 N cycles, no split) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: each label line is a trituration mass, not drug substance (known wave 2 rule for diluted lines). The potency of each starting lot is checked against the master (C4 from a fixed list).

Counts: 88 rows; FITS 84, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0353 Yogaraj guggulu, sugar-coated IR, high-shear wet granulation, 250 mg

NO SOURCE: only clinical and docking papers. The nearest formula (Maha Yogaraja Guggulu, J Evid Based Integr Med 2018) is a different preparation with metal and mineral bhasmas in uncoated pills. Not counted.

## F0354 filgotinib maleate, film-coated IR, high-shear wet granulation

Source: EP 3 595 667 B1 (Galapagos), Example 3, Table 3 and paragraph [0018], https://data.epo.org/publication-server/rest/v1.2/patents/EP3595667NWB1/document.pdf

- Composition (% w/w): filgotinib maleate Form I 31.81, MCC 35.69, lactose monohydrate 20.00, pregelatinised starch 5.00, colloidal silica 1.00, Mg stearate 1.50, fumaric acid 5.00. With 254.48 mg maleate per 200 mg tablet, the core is 800 mg (derived).
- The source gives no process. Assumed: API, lactose, part of the MCC, starch and fumaric acid granulated with water in a high-shear mixer, fluid-bed dried, milled; rest of the MCC, silica and Mg stearate added; compressed; aqueous film coat at 3 %.
- Batch 200,000 tablets (160 kg cores) under potent-compound containment. All process parameters and IPC limits are standard practice.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w x 800 mg core (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the API lot must be Form I on its CoA (known wave 3 crystal-form rule).

Counts: 163 rows; FITS 160, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0355 betahistine dihydrochloride, orally disintegrating tablet, direct compression (listed: uncoated IR)

Source: EP 2 314 296 A1 (Abdi Ibrahim), Example 4, Table 5 and paragraphs [0028]-[0033], [0047], [0056]-[0058], https://data.epo.org/publication-server/rest/v1.2/patents/EP2314296NWA1/document.pdf. Close variant: ODT; excipients are given only by function.

- Composition (% w/w): betahistine 2HCl 4.57, direct-compression agent 59.14, diluent 20.00, disintegrant 7.14, sweetener 2.86, flavour 1.43, stabilising agent 1.71, lubricant 2.29, glidant 0.86. Every line is a whole mg number of a 350 mg tablet, so this is 16 mg in 350 mg (derived).
- Identities assumed from the patent's preferred lists: DC mannitol, MCC, crospovidone, sucralose, citric acid as stabiliser, sodium stearyl fumarate, colloidal silica.
- Process [0056]: API mixed with glidant and sieved (it sticks to sieves alone), DC agent, disintegrant and diluent added, then sweetener, flavour and stabiliser, then lubricant; blended; compressed at 25-65 N. Tablet pH below 3; low room humidity; no more than 1 h of light exposure; moisture-protective blister.
- Batch 500,000 tablets (175 kg). Standard practice assumed: sieve sizes, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w x 350 mg (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 117 rows; FITS 114, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0356 clonazepam, fast-dissolving tablet, direct compression (listed: scored IR 0.5 mg)

Source: Shirsand SB et al., Formulation design and optimization of fast dissolving clonazepam tablets, Indian J Pharm Sci 2009 (PMC2866354), Table 1 formulation F3 and methods, https://europepmc.org/article/PMC/PMC2866354. Close variant: 2 mg fast-dissolving flat tablet with no score.

- Per tablet (F3): clonazepam 2 mg, crospovidone 3, MCC PH102 60, aspartame 3, sodium stearyl fumarate 1.5, pineapple flavour 1.5, talc 3.0, DC mannitol (Pearlitol SD200) 76; 150 mg.
- Every ingredient through #60, weighed, mixed in geometric order; lubricant and glidant (#200) added, mixed 5 min; 7 mm flat punches. Results: hardness 2.7 kg/cm2, friability 0.46 %, dispersion time 16 s.
- Batch 1,000,000 tablets (150 kg; 2.0 kg API) as a controlled drug (dual-signed issue, API reconciliation). Standard practice assumed: geometric dilution steps, blend uniformity, content uniformity on individual tablets.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 110 rows; FITS 108, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0357 gabapentin, gastroretentive swelling matrix (PEO + HPMC), dry blend and compression (listed: film-coated, high-shear granulation)

Source: EP 1 446 106 B1 (Depomed), Example 2, Table 2.1 Lot E, with the Example 1 procedure, https://data.epo.org/publication-server/rest/v1.2/patents/EP1446106NWB1/document.pdf. Close variant: dry blended (the source says no binders were used), uncoated.

- Lot E (% w/w): gabapentin 60.0, PEO Coagulant 24.3, HPMC K100M 14.7, Mg stearate 1.0; 1,000 mg tablets (Example 1), so 600 mg gabapentin.
- Example 1 procedure: dry blend; Carver press, 0.7086 x 0.3937 inch modified oval die, 4,000 lbs force, zero dwell. Dissolution in water: 14.8 % at 1 h, 37.4 % at 4 h, 57.8 % at 8 h.
- Batch 300,000 tablets (300 kg). Standard practice assumed: blend times, rotary-press force in kN, IPC limits, and an aqueous HPMC film coat at 3 % for the listed coated type.

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | quantities from % w/w x 1,000 mg (T8 % w/w mode) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 111 rows; FITS 108, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0358 lamotrigine, uncoated IR, 3D printing, 25 mg (paediatric)

NO SOURCE: only reviews and a secondary mention of 3D-printed lamotrigine gummies. The lamotrigine EP documents found are dispersible tablets or a dry suspension, and the 3D-printing patents could not be reached. Not counted.

## F0359 rizatriptan benzoate, mouth-disintegrating tablet, direct compression (listed: uncoated IR 10 mg)

Source: Keny RV et al., Formulation and evaluation of rizatriptan benzoate mouth disintegrating tablets, Indian J Pharm Sci 2010 (PMC2883231), Table 1 F8 and methods, https://europepmc.org/article/PMC/PMC2883231. Close variant: 5 mg mouth-disintegrating tablet.

- Per tablet (F8): rizatriptan benzoate 7.265 mg (= 5 mg rizatriptan), crospovidone 3, Indion 234 3, Avicel PH102 112, mannitol 15, Mg stearate 0.75, talc 1.5, aspartame 3, mixed fruit powder 3, mint flavour 1.5; 150.015 mg (stated 150 mg).
- All through 40 mesh; blended 20 min without Mg stearate and flavours; those added and mixed 2 min; single-punch press, 8 mm concave. Results: 150.8 mg, hardness 2.30 kg/cm2, friability 0.131 %.
- Batch 1,000,000 tablets (150 kg). Standard practice assumed: blend uniformity, rotary-press tooling and IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 107 rows; FITS 105, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0360 sodium valproate, gastro-resistant film-coated, wet granulation with citric acid (listed: direct compression, 200 mg)

Source: EP 1 233 758 B1 (Gerot Pharmazeutika), Beispiel 1, paragraphs [0026]-[0031] (German), https://data.epo.org/publication-server/rest/v1.2/patents/EP1233758NWB1/document.pdf. Close variant: 500 mg valproic acid strength, wet granulated.

- Per batch of about 5,000 tablets (g): citric acid monohydrate 435 dissolved in 350 ml water; povidone 25 100, sodium valproate 2,881.5, amorphous silica 160, MCC 200 (inner phase); outer phase sodium CMC 120, Mg stearate 30, talc 75, amorphous silica 200; core 840.3 mg (576.3 mg sodium valproate = 500 mg valproic acid).
- Coat suspension: Eudragit L30D 525 g, povidone 6, dibutyl phthalate 15.75, PEG 6000 3, talc 37, titanium dioxide 3; film tablet 885 mg. Disintegration: more than 2 h in dilute HCl, less than 20 min in pH 6.8 buffer; water uptake at 25 C / 60 % RH lower than Depakote.
- Wet granulated with the acid solution, dried on trays or in a fluid bed, broken through a 1 mm sieve, outer phase blended, compressed, coated in a pan or film coater.
- Batch 300,000 tablets (60 times; 172.9 kg sodium valproate). Standard practice assumed: low-RH rooms, drying limit (Beispiel 3 gives 1.5-2 % at 70 C), coating parameters, IPC limits. Dibutyl phthalate is now restricted; a real master would need a change of plasticiser.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | Eudragit dry polymer per tablet = mg/cm2 x tablet surface area from the tooling record (round-3 per-area coat dosing) |

Note: the patent says the coat gives 4-5 mg of Eudragit dry substance per tablet. But the suspension made holds 31.5 mg per tablet (157.5 g dry polymer for 5,000 tablets), and the 885 mg film-tablet weight (+44.7 mg) fits applying all of it (44.5 mg of solids per tablet). The master here sets the coat from the weight gain and checks the polymer per area.

Counts: 187 rows; FITS 184, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## Totals for F0341-F0360

Counted 16 formulations, 1,933 rows: FITS 1,881, FITS WITH SETTING 52, NEW SETTING 0, GAP 0. NO SOURCE 4 (F0341, F0347, F0353, F0358).

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0342 magaldrate | 86 | 84 | 2 | 0 | 0 |
| F0343 mosapride citrate | 155 | 153 | 2 | 0 | 0 |
| F0344 tegoprazan ODT | 111 | 109 | 2 | 0 | 0 |
| F0345 tenapanor HCl | 129 | 126 | 3 | 0 | 0 |
| F0346 tranexamic acid MR | 152 | 149 | 3 | 0 | 0 |
| F0348 Chitrakadi vati | 88 | 84 | 4 | 0 | 0 |
| F0349 Kanchanara guggulu | 161 | 155 | 6 | 0 | 0 |
| F0350 Lavangadi vati | 90 | 84 | 6 | 0 | 0 |
| F0351 Guduci sattva | 78 | 74 | 4 | 0 | 0 |
| F0352 Vertigoheel | 88 | 84 | 4 | 0 | 0 |
| F0354 filgotinib maleate | 163 | 160 | 3 | 0 | 0 |
| F0355 betahistine 2HCl | 117 | 114 | 3 | 0 | 0 |
| F0356 clonazepam | 110 | 108 | 2 | 0 | 0 |
| F0357 gabapentin GR | 111 | 108 | 3 | 0 | 0 |
| F0359 rizatriptan benzoate | 107 | 105 | 2 | 0 | 0 |
| F0360 sodium valproate | 187 | 184 | 3 | 0 | 0 |
| **Total** | **1,933** | **1,881** | **52** | **0** | **0** |

NO SOURCE: F0341, F0347, F0353, F0358.

New settings and gaps: none. The new kinds of work in this part fitted existing settings:
- Formula by parts (F0348): T6 ratio into T8 % w/w mode.
- Excipients and guggulu as % of a recorded mass (F0349, F0351): the round-3 T8 "% of" option.
- Binder q.s. until a dough or paste forms (F0348, F0350): F2 with C4.
- Fixed-kg transfer excess on a coating suspension (F0346): T2 with a typed constant.
- Homeopathic joint potentisation (F0352): T8 and F7 N cycles.
- Per-area enteric coat (F0360): round-3 setting.

Safety rules:
- Decimal potency steps (F0352, new): the label potency (D4, D3, D6, D8) is set by the number of 1:10 trituration steps from the starting lot. Each missed step leaves 10 times the starting material in the tablet, and Conium and Anamirta are toxic plants at low potencies; each extra step gives a tenth. The master must fix the step count (F7 N cycles with C2) and check each starting lot's potency against it (C4). The formula lines are trituration masses, not drug substance (known wave 2 rule).
- Enteric polymer per tablet must agree with the suspension made (F0360, new): the source states 4-5 mg Eudragit per tablet, but makes 31.5 mg per tablet, and its film-tablet weight fits the whole suspension. A coat run to the stated 4-5 mg would hold about a seventh of the polymer, and acid resistance could fail. The valproate would then be released in the stomach, the failure the coat is there to prevent. The master must set the coat by weight gain or per-area dose, compare it with the suspension made (T17 / T8), and refuse a gap larger than the stated excess.
- Reminders of known rules, with their size:
  - Non-stoichiometric salt (F0345, C5 "as parent"): a lot at 6.4 % chloride weighed with the fixed 1.064 factor gives about 0.6 % less tenapanor; across 6.0-6.8 % chloride it is 0.3-1.1 %. The paragraph calling the 50 mg base amount "tenapanor hydrochloride" would give 6 % less if typed.
  - Hydrate label basis (F0343): a dihydrate factor plus a water correction counts the water twice (+5.9 %); reading 5 mg as base gives +45 %.
  - Label claim against batch arithmetic (F0360): Beispiel 2 is headed 500 mg sodium valproate, but its batch gives 557 mg per tablet (+11 %). Beispiel 1's 500 mg is valproic acid (576 mg salt, factor 1.152).
  - Dried-basis assay (F0342): magaldrate's assay is on the dried basis and the formula does not state its basis.
  - Purified against raw guggulu (F0349): more than 50 % is lost in purification.
  - Target weight from the recorded granule weight when the binder is q.s. (F0350, T15).
  - A pooled assay is not content uniformity (F0356).
  - Light (no more than 1 h) and tablet pH (below 3) are stability-critical limits (F0355).
  - A stated vati weight 10 times the formula (F0348).

Sources that contradict themselves:
- US 5,665,782 A (F0342): claims 3 and 4 give the same 2-20 mg gelatin range, so claim 4 does not narrow claim 3. The excipient lines are generic and unnamed.
- CN 107744509 B (F0343): the binder uses 188 g water for 12 g HPMC (15.7:1, Example 2 12.5:1), but the text says 6-10:1 with 8:1 preferred. No strength, tablet count or tablet weight is given.
- EP 4 255 397 B1 (F0345):
  - The 50 mg tablet's lines add up to 500.3 mg.
  - Paragraphs [0037], [0039], [0041] and [0043] call the free-base amounts (10, 20, 30, 50 mg) "tenapanor hydrochloride", while the next paragraphs give 10.64, 21.28, 31.92 and 53.2 mg of the HCl salt.
  - The 10-30 mg strengths use L-HPC 3 mg and stearic acid 1.2 mg per 10 mg (about 3 % and 1.2 %), while [0036] gives 5 % and 2 %.
  - L-HPC is said to be "also referred to as hydroxypropyl methylcellulose".
- US 7,947,739 B2 (F0346): Table 2 (IR comparator) gives croscarmellose as 19.50 kg per 130,000 tablets but 15.00 mg per tablet. 15 mg needs 1.95 kg, so one column is out by a factor of 10.
- Patel et al. 2022 (F0348): the method gives 0.20 g per vati, but Table 4 gives 2,057 mg for the laboratory pills (10 times). Two tables are numbered 8.
- Sunny and Thara Lakshmi 2022 (F0349):
  - 332 g of powders plus 11.5 % excipients should give about 370 tablets of 1 g, but each batch gave 285-289 (240-243 from 355 g for the second text); the loss is not explained.
  - The method is called "dry compression" although the mass is wet-granulated with a paste.
- Dudhal et al. 2018 (F0350):
  - The water-soluble ash (8-9.5 %) is larger than the total ash (2.5-4 %), and one acid-insoluble ash (6 %) is larger than its total ash (2.5 %); both are impossible.
  - The procedure compresses "Tulasi granules" (text from another paper).
  - The weight-variation limit quoted is for 130-324 mg tablets, against 60 mg of herbs plus binder.
- EP 2 314 296 A1 (F0355): particle sizes are printed as "750P" and "250P" (micrometres). Excipients are named only by function in every example.
- Shirsand et al. 2009 (F0356): the test called content uniformity is an assay of 10 pooled tablets. Sodium stearyl fumarate is printed as "sodium steady fumarate".
- EP 1 446 106 B1 (F0357): GR-A and GR-B have the same mg per tablet but different wt % (gabapentin 46.15 against 46.13, MCC 7.61 against 7.63).
- Keny et al. 2010 (F0359): every column adds up to 150.015 mg against the stated 150 mg (minor). The HPLC aliquot is "5 mg of rizatriptan benzoate", while the UV assay uses "equivalent to 5 mg of rizatriptan".
- EP 1 233 758 B1 (F0360):
  - Beispiel 1 states 4-5 mg Eudragit dry per tablet against 31.5 mg in the suspension made, with an 885 mg film tablet that fits the whole suspension.
  - Beispiel 3 states 1 mg against about 4.5 mg made (382.5 g for about 85,000 tablets).
  - Beispiel 2 is headed 500 mg sodium valproate, but its 1,531 g batch at 822 mg holds 557 mg per tablet.
  - Beispiel 1 is headed by valproic acid, Beispiele 2 and 3 by the sodium salt.
