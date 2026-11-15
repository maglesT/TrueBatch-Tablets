# Wave 2, part 4 (F0161-F0180)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record.

## F0161 ivosidenib, film-coated IR, spray-dried amorphous dispersion

Source: US 12,264,148 B2 (Servier), spray-dried intermediate and tablet description incl. Table 18, https://patents.google.com/patent/US12264148B2/en

- Spray-dried intermediate (SDI): ivosidenib and HPMCAS 50:50 dissolved in methanol (about 70 mg/mL ivosidenib), spray dried, then secondary drying to the residual-solvent limit; amorphous.
- Tablet (embodiment and Table 18, unspiked): SDI about 60 % w/w (= 30 % ivosidenib), MCC PH-103 21.5, croscarmellose 4, SLS 1, silica 1, Mg stearate 0.5 intragranular; MCC 8, croscarmellose 2, silica 1, Mg stearate 1 extragranular. 250 mg gives an about 833 mg core.
- Process: SDI added in two halves to HPMCAS/MCC, comil 093R, blend with CCS/SLS/silica about 22 min 50 s at 25 rpm, lubricate 4 min; roller compaction 5.0 kN/cm, gap 2.0 mm, 2 rpm, mill 1 mm; extragranular blend 22 min, lubricate 4 min; compress (hardness one of about 18, 27 or 37 kP); film coat about 5.0 % gain.
- Batch 200,000 tablets in a potent-compound suite. Standard practice assumed: spray-dryer settings (only ranges given), residual-solvent limit, IPC limits, coat formula.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T17 | FITS WITH SETTING | spray solution at about 70 mg/mL ivosidenib (T17 % w/v made up to a final volume) |
| T18 | FITS WITH SETTING | SDI quantity per batch from the SDI's own measured ivosidenib content (T18 content from in-process result; known, wave 1) |
| T8 | FITS WITH SETTING | intragranular and extragranular quantities from % w/w of the core (T8 % w/w mode) |

Note: Table 18 is a spiking study (20 % of the dose added as crystalline Form B or L). The commercial-type master uses the unspiked 60 % SDI line only.

Counts: 136 rows; FITS 131, FITS WITH SETTING 5, NEW SETTING 0, GAP 0.

## F0162 niraparib tosylate monohydrate, film-coated IR, roller compaction

Source: US 11,730,725 B2 (Tesaro), Example 3, Formulation 6 (Table 18), https://patents.google.com/patent/US11730725B2/en. Close variant: 300 mg strength (listed 100 mg).

- Intragranular per tablet: niraparib tosylate monohydrate 478.0 mg (= 300 mg base), MCC 201.0, mannitol 201.0, crospovidone 40.0, povidone 20.0, Mg stearate 5.0 (945.0 mg).
- Extragranular: crospovidone 40.0, silicon dioxide 5.0, Mg stearate 10.0 (55.0 mg); core 1,000 mg. Optional film coat.
- Process (FIG. 3 dry granulation): blend intragranular parts with the lubricant, dry granulate (roller compaction), mill, blend with extragranular parts, compress, film coat.
- Batch 150,000 tablets in a cytotoxic suite. Standard practice assumed: roll settings, screens, blend times, coat formula and gain, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C5 | FITS WITH SETTING | tosylate monohydrate factor (478.0/300 = 1.594) uses the hydrate MW: no further water correction; if the CoA assay is on the anhydrous tosylate the hydrate-to-anhydrous chain applies (known, wave 1, F0088) |

Note: Check: 300 mg base x 510.6 / 320.4 = 478.1 mg tosylate monohydrate, matching 478.0.

Counts: 105 rows; FITS 102, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0163 palbociclib, film-coated IR (listed: high-shear wet granulation)

Source: US 2018/0207100 A1 (Pfizer), Examples 3 and 4 (fluid-bed granulation tablet, used as the 125 mg FBG tablet in the clinical study), https://patents.google.com/patent/US20180207100A1/en. Close variant: top-spray fluid-bed granulation (listed high-shear).

- Dry bed (% w/w): MCC PH102 37.9, mannitol 23.3, succinic acid (hand-milled through #60) 30.0, crospovidone 8.8. Binder suspension (% w/w): palbociclib 14.24, mannitol 2.73, HPC (Klucel LF) 2.73, water 80.3; mixed at least 2 h, API added, kept stirred.
- Granulation: bed 29-31 C, spray 12-30 g/min, air 70-115 m3/h, atomisation 1.1 bar, after pre-heating until inlet dew point 12 C and bowl at least 45 C.
- Tablet per unit: FBG 400.0 mg, MCC 252.0, succinic acid 80.0, crospovidone 64.0, Mg stearate 4.0; 800.0 mg (125 mg palbociclib). Extragranular amounts adjusted to the milled granule weight.
- Dry sizing Comil 018R at 1500 rpm, #60 screen, retained material re-milled; blend 180 revolutions at 16 rpm (bulk density 0.39 g/cc); Mg stearate pre-mixed with 3-10 volumes of blend, 60 revolutions; compress. Batch 200,000 tablets; film coat and IPC limits standard practice.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | dry-bed and suspension charges from % w/w of each mix (T8 % w/w mode) |
| F2 | FITS WITH SETTING | fluid bed pre-heated until dew point 12 C and bowl >= 45 C both reached (F2 stop when all named checks pass) |
| F2 | FITS WITH SETTING | re-mill material retained on #60 until all passes (F2 with C4 each round) |
| F2 | FITS WITH SETTING | succinic acid milled and re-sieved until required quantity passes #60 (F2 with C4 each round) |
| T18 | FITS WITH SETTING | API content of the FBG from its in-process assay before the final blend (T18 in-process content; known, wave 1) |

Note: The patent gives the API content of the FBG only through the tablet strength (125 mg in 400 mg FBG); the master takes it from the FBG assay.

Counts: 125 rows; FITS 118, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0164 tioguanine, scored IR, single-pot wet granulation, 40 mg

NO SOURCE: only labels and SmPCs (excipient names, scored 40 mg tablet); no quantitative formula with process found. Not counted.

## F0165 cyclobenzaprine hydrochloride, film-coated IR, fluid-bed granulation, 10 mg

NO SOURCE: only labels (excipient names) found; the one detailed cyclobenzaprine tablet patent seen is a sublingual eutectic product, and its full text could not be retrieved. Not counted.

## F0166 diclofenac sodium + misoprostol, press-coated (core / mantle), wet granulation

Source: US 5,601,843 A, Example 3, https://patents.google.com/patent/US5601843A/en. Close variant: core granulated with water (granulator type not stated; listed fluid-bed); the product is press-coated, not film-coated.

- Core: diclofenac sodium 50.0 mg, lactose monohydrate 13.0, MCC 12.9, corn starch 8.4, povidone K-30 4.8, Mg stearate 0.9, purified water (removed); 90.0 mg.
- Aqueous enteric coat: methacrylic acid copolymer type C 3.68, sodium hydroxide 0.049, talc 1.84, triethyl citrate 0.37. Overcoat: HPMC 2.72, PEG 400 0.054 (about 3 % of core).
- Compression-coated mantle: misoprostol:HPMC dispersion 1:100 (misoprostol 0.2 + HPMC 20.0), crospovidone 10.0, silica 0.5, hydrogenated castor oil 1.0, MCC 233.3; 265.0 mg. Tablet about 363.7 mg.
- Batch 300,000 tablets, low-RH suite for the mantle. Standard practice assumed: granulation and drying settings, coating parameters, press-coater settings, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | sodium hydroxide for partial neutralisation as a ratio of the methacrylic acid copolymer (T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | overcoat gain on the uncoated core weight, about 3 % (T5 base option: named earlier stage) |
| T1 | FITS WITH SETTING | mantle weight = mean press-coated weight - mean overcoated core weight (T1 Difference) |
| C1 | FITS WITH SETTING | mean press-coated weight within +/- % of target (C1 option) |
| T14 | FITS WITH SETTING | misoprostol uniformity from individual results only; weight-variation option refused (press-coated) |

Counts: 157 rows; FITS 150, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0167 ibuprofen, printed / polished IR, direct compression

Source: US 8,846,085 B2, Examples 2-4 (Example 4 premix), https://patentimages.storage.googleapis.com/b2/4c/a9/9dd468d8426453/US8846085.pdf. Close variant: no tablet weight given; film coat, printing and polish added as standard practice for the listed type.

- Premix: ibuprofen 50 um 99 % + Aerosil 200 1 %, mixed 3 min, sieved 1.00 mm, then mixed 180 min (surface coverage of the crystals above 85 %); mix temperature kept at or below 35-50 C.
- Compression mixture (% w/w): premix 75.76, MCC 20.24, croscarmellose sodium 3.0, Aerosil 200 0.5, Mg stearate 0.5 (ibuprofen 75 %), mixed 10 min; compressed at 15 kN, 9 mm punches; no sticking after 8 h.
- Plant choice (not in source): 200 mg ibuprofen gives a 266.7 mg core; HPMC film coat 3 %, printed logo, carnauba wax polish. Batch 1,000,000 tablets.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T8 | FITS WITH SETTING | batch quantities from % w/w of the compression mixture (T8 % w/w mode) |

Note: OCR of the patent shows the Aerosil and Mg stearate lines as 'O.S'; read as 0.5 (the column then sums to 100.0).

Counts: 96 rows; FITS 93, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0168 oxymorphone hydrochloride, ER matrix, hot-melt extrusion, 10 mg

NO SOURCE: the oxymorphone HME patent seen (US 10,172,797 B2) gives only % ranges and used paracetamol and oxycodone as stand-ins; no oxymorphone formula with process found. Not counted.

## F0169 paracetamol + ibuprofen, film-coated IR, wet granulation

Source: EP 1 781 277 B1 (AFT Pharmaceuticals), Examples 1 and 2, https://data.epo.org/publication-server/rest/v1.2/patents/EP1781277NWB1/document.pdf. Close variant: high-shear granulation with fluid-bed drying (listed fluid-bed granulation).

- Core per tablet: paracetamol 500.0 mg, ibuprofen 150.0, maize starch 14.83 (dry mix), silica 1.70, maize starch 22.5 (paste), disodium EDTA 0.50, povidone 7.54, sodium benzoate 1.00, maize starch 12.50 (lubrication), silica 12.00, Mg stearate 2.45, sodium starch glycolate 25.00 (750.02 mg).
- Coat: HPMC 7.20, PEG 6000 0.80, titanium dioxide 0.21, methylparaben 0.20, propylparaben 0.02 (8.43 mg; stated total 758.45 mg). Polish: beeswax 0.1 + carnauba 0.3 mg/tablet.
- Process: APIs through #12, starch #40, silica #100, dry mix 10-11 min; starch slurry in 0.03 ml/tablet water added to boiling 0.18 ml/tablet water with EDTA/PVP/benzoate until translucent, cooled to 50-55 C; high-speed granulator, fluid-bed dry to LOD not more than 1 %; mill 2.5 mm; yield check 99-100 %; lubricate 5 min at 25 rpm; yield check; compress; coat slurry 10-12 % w/v, 3 guns at about 35 ml/min each; wax polish 10 min.
- Batch 300,000 tablets. Standard practice assumed: IPC limits, coat gain limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T17 | FITS WITH SETTING | coating slurry at 10-12 % w/v (T17 % w/v made up to a final volume) |

Counts: 144 rows; FITS 141, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0170 tenoxicam, film-coated IR, high-shear wet granulation, 20 mg

NO SOURCE: only a capsule SmPC, a polymorphism study and ODT/solid-dispersion papers found; no film-coated tablet formula with process. Not counted.

## F0171 tilidine hydrochloride + naloxone hydrochloride, film-coated ER hydrophilic matrix

Source: EP 1 685 828 A1, Example 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP1685828NWA1/document.pdf. Close variant: 100 mg / 8 mg strength by direct compression (listed 50 mg / 4 mg, roller compaction).

- Per tablet: tilidine hydrochloride hemihydrate 102.9 mg (= 100 mg tilidine HCl), naloxone hydrochloride dihydrate 8.8 mg (= 8 mg naloxone HCl), HPMC 4000 cP 55, HPMC 100 cP 35, MCC 149, colloidal silica 3, Mg stearate 2; core 355.7 mg.
- Process: all but Mg stearate through a 1000 um sieve and blended; sieved Mg stearate added, blended again; direct compression; Opadry film coat.
- Batch 300,000 tablets under controlled-substance rules (vault issue, witness, full API reconciliation). Standard practice assumed: blend times, coat gain, IPC limits, dissolution bands.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T11 | FITS WITH SETTING | tilidine HCl to hemihydrate (102.9/100 = 1.029; T11 any two named forms) |
| T11 | FITS WITH SETTING | naloxone HCl to dihydrate (8.8/8 = 1.10; T11 any two named forms) |

Note: Example 3 of the same document adds talc in the process text, but talc is not in its formula (see contradictions).

Counts: 86 rows; FITS 82, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0172 bromazepam, scored IR, high-shear wet granulation, 3 mg

NO SOURCE: only analytical and bioequivalence papers and pharmacopoeial dissolution conditions found; no formula. Not counted.

## F0173 clomipramine hydrochloride, ER hydrophilic matrix, wet granulation, 75 mg

NO SOURCE: only an abstract of an orthogonal-design SR study (three excipient amounts, process not stated) found; no full formula with process. Not counted.

## F0174 eszopiclone, film-coated IR, wet granulation

Source: EP 1 997 482 B1, Example 2 (process as Example 1), https://data.epo.org/publication-server/rest/v1.2/patents/EP1997482NWB1/document.pdf. Close variant: 1 mg strength, high-shear granulation with fluid-bed drying (listed 2 mg, fluid-bed granulation); film coat added as for the marketed tablet.

- Core per tablet: eszopiclone (d(0.5) 154 um) 1.000 mg, lactose monohydrate 88.150, povidone 1.800, corn starch 6.000, croscarmellose sodium 2.400, water 23.000 (removed), MCC 20.000, colloidal silica 0.350, Mg stearate 0.300; 120.0 mg (API 0.83 %).
- Process: triturate of API with part of the lactose, sieved 0.5 mm, rest of lactose, starch, croscarmellose, povidone added; high-shear mix; granulate with water; fluid-bed dry at 50 C to a defined moisture; oscillator 0.8 mm; blend with MCC and silica, then Mg stearate; compress, 7 mm round.
- Batch 500,000 tablets (source: 10,000) under controlled-substance rules. Standard practice assumed: LOD limit, blend times, coat formula and gain, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 114 rows; FITS 112, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0175 haloperidol, uncoated tablet (listed: IR, MADG, 5 mg)

Source: Int. J. Pharm. Pharm. Sci. 1(1) (2009), orodispersible haloperidol tablets by sublimation, batch F6, https://innovareacademics.in/journal/ijpps/Vol%201%20Issue%201/111.pdf. Close variant: 10 mg ODT by wet granulation with camphor sublimed from the tablets (listed 5 mg uncoated IR by MADG).

- Per tablet (F6): haloperidol 10 mg, camphor 15, aspartame 2.5, croscarmellose sodium 15, colloidal silica 2.5, mannitol q.s. to 150 mg; binder 10 % w/v PVP in ethanol; talc 2 % and Mg stearate 1 %.
- Process: materials through 100 mesh, mixed, wetted with the alcoholic PVP, granulated through sieve 12, dried, sized through sieve 16 (granule moisture 1-2 %, IR balance); blended with talc and Mg stearate; compressed (flat round tooling); camphor sublimed from the tablets at 60 C.
- Batch 300,000 tablets. Standard practice assumed: drying conditions for F6, sublimation end point and time, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T1 | FITS WITH SETTING | mannitol q.s. = 150 mg - sum of the other lines (T1 Difference with T2) |
| T8 | FITS WITH SETTING | talc 2 % and Mg stearate 1 % of the dried granule weight (T8 "% of" a recorded weight) |
| T5 | FITS WITH SETTING | tablet weight loss on sublimation against the 15 mg camphor (T5 loss mode, base: compressed tablet) |
| F2 | FITS WITH SETTING | sublime until weight shows no further change (F2 no further change) |
| C1 | FITS WITH SETTING | weight loss within +/- of the camphor content computed for the batch (C1 option: limits around computed value) |

Note: The final tablet weight is not stated: about 150 mg (or 154.5 mg with talc and Mg stearate on top) at compression, about 15 mg less after sublimation.

Counts: 101 rows; FITS 94, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0176 mianserin hydrochloride, film-coated IR, direct compression, 30 mg

NO SOURCE: only safety data sheets with % ranges (API and starch) found; no formula with process. Not counted.

## F0177 nalmefene hydrochloride dihydrate, film-coated IR, high-shear wet granulation, 18 mg

NO SOURCE: the dihydrate patents (EP 2 441 766 B1, US 8,754,217) cover the API form only; SmPC/EPAR give lactose content and excipient names only. Not counted.

## F0178 paroxetine hydrochloride, enteric-coated layered CR tablet (listed: trilayer, DC)

Source: US 6,548,084 B2 (SmithKline Beecham), Example 12 (process of Examples 8 and 9), https://patentimages.storage.googleapis.com/f0/f3/6d/cdeda93e44eca3/US6548084.pdf. Close variant: enteric-coated bilayer (active layer + support platform) made by wet granulation (listed trilayer by direct compression).

- Active layer: paroxetine HCl 28.61 mg (= 25 mg base), Methocel K4M 18.75, lactose monohydrate 79.14, povidone 2.50, Mg stearate 1.25, Syloid 244 0.50 (130.75 mg).
- Support platform: Compritol 888 15.04, lactose monohydrate 30.50, povidone 4.00, Mg stearate 0.80, Methocel E5 29.32, Syloid 244 0.32, iron oxide 0.02 (80.00 mg).
- Enteric coat: Eudragit 13.27, talc 3.31, triethyl citrate 1.33, water 36.25 (removed); tablet 228.66 mg.
- Process: each layer's blend wet granulated in a high-shear mixer and fluid-bed dried, Mg stearate added in a low-shear mixer; layers compressed on a Manesty triple-layer press; coated in an Accela Cota. Batch 300,000 tablets; standard practice for IPC limits and coat settings.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T11 | FITS WITH SETTING | paroxetine HCl 28.61 mg = 25 mg base (factor 1.144) checked against the named form's molecular weights (known, wave 1, F0062) |

Note: Example 12 refers to the process of Example 9 (a single-layer core on a B-type rotary press) although it is a bilayer; the bilayer process is the one in Example 8.

Counts: 160 rows; FITS 157, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0179 triazolam, uncoated IR, fluid-bed granulation, 0.25 mg

NO SOURCE: only labels with excipient names found; no formula with process. Not counted.

## F0180 venlafaxine hydrochloride, uncoated IR, high-shear wet granulation, 75 mg

NO SOURCE: only IR labels (excipient names) and ER/osmotic/press-coated studies found; no IR formula with process. Not counted.

## Totals for F0161-F0180

Counted 10 formulations, 1,224 rows: FITS 1,180, FITS WITH SETTING 44, NEW SETTING 0, GAP 0. NO SOURCE 10 (F0164, F0165, F0168, F0170, F0172, F0173, F0176, F0177, F0179, F0180).

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0161 | 136 | 131 | 5 | 0 | 0 |
| F0162 | 105 | 102 | 3 | 0 | 0 |
| F0163 | 125 | 118 | 7 | 0 | 0 |
| F0166 | 157 | 150 | 7 | 0 | 0 |
| F0167 | 96 | 93 | 3 | 0 | 0 |
| F0169 | 144 | 141 | 3 | 0 | 0 |
| F0171 | 86 | 82 | 4 | 0 | 0 |
| F0174 | 114 | 112 | 2 | 0 | 0 |
| F0175 | 101 | 94 | 7 | 0 | 0 |
| F0178 | 160 | 157 | 3 | 0 | 0 |
| Total | 1224 | 1180 | 44 | 0 | 0 |

NO SOURCE: F0164, F0165, F0168, F0170, F0172, F0173, F0176, F0177, F0179, F0180.

New settings and gaps: none. Every non-FITS row uses an existing setting or a finding already known from wave 1 (hydrate-labelled API with an anhydrous CoA, F0088; typed salt factor checked against the named forms, F0062; in-process content and the double-adjustment rule, F0008/F0017/F0018).

Safety rules:
- Two hydrates in one tablet (F0171): both APIs are weighed as hydrates (tilidine HCl hemihydrate 102.9 mg = 100 mg HCl; naloxone HCl dihydrate 8.8 mg = 8 mg HCl), and the label strength is on the anhydrous salts. Each needs its own T11 hydrate factor and C5 basis check; using the tilidine hemihydrate factor for naloxone gives about 7 % too little naloxone, and no factor about 9 % too little. Covered by T11 + C5 when the master names both forms (reminder).
- Same number, different form (F0171 and EP 0 960 619 B1): EP 0 960 619 writes '102.9 mg Tilidin x HCl' without naming the hydrate, while EP 1 685 828 shows that 102.9 mg is the hemihydrate. Reading it as anhydrous HCl and applying a hemihydrate factor again would give about 2.9 % too much tilidine. Covered by C5 if the master names the form (reminder).
- Volatile excipient removed after compression (F0175): camphor (15 of about 150 mg) sublimes from the tablets. The weight targets and the per-tablet content must name their stage (compressed or after sublimation, T5 base option). Compressing to the post-sublimation weight gives about 10 % too little drug; setting the press so that sublimed tablets meet the compression target gives about 11 % too much. No new template needed: T5 base option + C1 option cover it once the master names the stage.
- API in the spray liquid (F0163, F0161): in F0163 all of the API is in the sprayed suspension, so stopping early, or a settling suspension, under-doses the granule. The master must take the API content of the FBG (and of the SDI in F0161) from its assay (T18 in-process, known wave 1) and refuse a second potency adjustment (known wave 1 double-adjustment rule).
- Very low dose in a mantle (F0166): 0.2 mg misoprostol in a 265 mg mantle must be dosed from the dispersion lot's misoprostol content (T18) and checked by individual content uniformity only; the weight-variation option is refused for this press-coated tablet (existing T14 rule).

Sources that contradict themselves:
- US 6,548,084 B2 (F0178): Example 12 (a bilayer) says the process is as in Example 9, which is a single-layer core on a B-type press. Its factor 28.61/25 = 1.144 (and 22.89/20 in Examples 8-11) matches neither paroxetine HCl anhydrous (1.111) nor the hemihydrate (1.138). Example 9 lists granulating water of 0.024 mg per tablet, too little to granulate.
- EP 1 685 828 A1 (F0171): in Example 3 the process adds talc and Mg stearate, but talc is not in the formula.
- EP 1 781 277 B1 (F0169): the stated total of 758.45 mg leaves out the 0.4 mg wax polish that the process applies; the process sections run A, B, C, E (no D).
- Int. J. Pharm. Pharm. Sci. 1(1) (F0175): mannitol is 'q.s. 150 mg' while talc 2 % and Mg stearate 1 % are added without a stated base, so the compression weight is 150 or 154.5 mg; after sublimation it is about 15 mg lower and is not stated.
- US 12,264,148 B2 (F0161): the only tablet table (Table 18) is a spiking study with 20 % of the dose as crystalline drug, which differs from the amorphous product it describes; the commercial composition is only in the % w/w embodiments.
- US 2018/0207100 A1 (F0163): the API content of the fluid-bed granule is not stated anywhere; it follows only from the clinical use of the Example 4 tablet as 125 mg.

Searching was limited: Google Patents refused automated requests for most of this part's run and the web-search budget ran out, so several NO SOURCE ids may have usable patents (for example old originator patents) that could not be opened.
