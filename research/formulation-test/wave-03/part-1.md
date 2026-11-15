# Wave 3, part 1 (F0201-F0220)

Each section lists only the rows that are not plain FITS; counts include every row of the outlined master batch record. Sources were downloaded beforehand by the source finder; this part worked from those files only.

## F0201 darunavir ethanolate, film-coated IR, direct compression (listed: continuous line), 600 mg

Source: WO 2009/013356 A2 (Tibotec), 600 mg core table and Example A, https://patents.google.com/patent/WO2009013356A2/en. Close variant: batch direct compression with bin blending, not a continuous line; the same blend-and-compress steps would run on a continuous DC line.

- Per tablet core: darunavir ethanolate 650.46 mg (= 600 mg darunavir), Prosolv SMCC HD90 554.30, colloidal silica 11.38, crospovidone 25.01, Mg stearate 9.25; 1,250.4 mg (darunavir 52.02 % w/w). Opadry II about 4 % of core; coated 1,300.4 mg.
- Example A, 115.5 kg batch: all but Mg stearate de-lumped through an 11-16 mesh screen, bin blended 10 min at 6 rpm; Mg stearate through 18-20 mesh, 5 min at 6 rpm; compressed to 92,370 cores; coated with 5.78 kg Opadry II in 23.10 kg water.
- The text reports angle of repose about 45 deg, Carr index about 16, weight RSD below 1 %, friability about 0.1 %.
- Batch as in the source (92,370 tablets). Standard practice assumed: blend uniformity, IPC limits, coating temperatures and spray rate.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | darunavir ethanolate from the parent-compound quantity (T11 any two named forms: solvate to parent, factor 1.0841) |
| T9 | FITS WITH SETTING | potency adjustment with the CoA assay basis picked (as is, or anhydrous / solvent-free: round-3 T9 bases) |
| C5 | NEW SETTING | same-basis check for a solvate: an ethanolate (solvate) molecular weight together with a solvent-free assay basis counts the ethanol twice; refuse it, as C5 does for hydrates |
| T6 | FITS WITH SETTING | angle of repose of the blend (T6 option: angle of repose) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: 5.78 kg Opadry for 92,370 cores is 62.6 mg per core (5.0 %), while each tablet gains 50 mg (4.0 %). The difference (about 25 %) is an unstated spray-loss overage; the master shows it as a T16/T17 overage.

Counts: 113 rows; FITS 107, FITS WITH SETTING 5, NEW SETTING 1, GAP 0.

## F0202 efavirenz, film-coated IR (printed), high-shear granulation with fluid-bed drying (listed: fluid-bed granulation), 600 mg

Source: US 2003/0124186 A1 (Bristol-Myers Squibb), Table 2 and paragraphs [0051]-[0058], https://patents.google.com/patent/US20030124186A1/en. Close variant: granulated in a high-shear mixer and dried in a fluid bed.

- Per tablet: efavirenz 600.0 mg, croscarmellose 48.0, MCC 240.0, SLS 12.0, HPC 38.4 (intragranular, 938.4 mg); lactose monohydrate 249.6, Mg stearate 12.0 (extragranular); core 1,200 mg. Opadry Yellow 24.0 (2 %), Opadry Clear 6.0 (0.5 %), carnauba wax 0.12, ink 0.03.
- Process: MCC, efavirenz, SLS mixed 2 min (88-108 rpm, chopper 1,242-1,518 rpm); HPC and croscarmellose added, 3 min; water sprayed at about 6 +/- 2 kg/min to a power end point of 11-13 kW, 0-2 min wet massing; wet milled; fluid-bed dried at 60 +/- 5 C inlet to LOD of not more than 2.0 %.
- Comil 0.045 in screen; V-blender 18 min with lactose, Mg stearate (US #30) 5 min; compressed; coated (exhaust 44-50 C) to 2 % with Opadry Yellow, then Opadry Clear to 0.5 %; polished with wax and printed with water-based ink.
- Batch 200,000 tablets (240 kg core blend), granulated in two sub-lots. Standard practice assumed: IPC limits, coat solids %, ink and polishing quantities per pan.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| T5 | FITS WITH SETTING | clear coat gain of about 0.5 % on a named base (T5 base option: uncoated core or colour-coated tablet); the source does not say which |

Counts: 163 rows; FITS 160, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0203 tyrothricin + benzocaine, lozenge, direct compression (composite source), 1 mg + 5 mg (listed 0.5 mg + 5 mg)

Source: EP 3 576 718 B1 (Johnson & Johnson Consumer), Example 1 Table 1, https://data.epo.org/publication-server/rest/v1.2/patents/EP3576718NWB1/document.pdf; plus Tyrozets Lozenges SmPC (HPRA, PA0330/043/001), section 2, https://assets.hpra.ie/products/Human/22247/LicenseSPC_PA0330-043-001_27032018153152.pdf. Close variant (composite): the patent lozenge holds benzocaine only; the marketed tyrothricin + benzocaine lozenge (Tyrozets, 1 mg + 5 mg, sucrose 989.19 mg) has no public process or excipient amounts.

- EP Table 1 per 600 mg lozenge: micronised benzocaine 15.0 mg (mass median size 7-18 um), mannitol 533.5, xanthan gum 12.0, PEG 6000 10.0, poloxamer 4.0, SDS 2.0, Mg stearate 12.0, mint flavour 10.00, sucralose 1.00, acesulfame K 0.50.
- Process: all sieved through 1 mm and blended (times optimised), compressed directly to oblong 600 mg lozenges in a room with controlled temperature and RH. Example 2 adds an optional HPMC film coat; not used here.
- Plant choice (not in source): actives set to the Tyrozets strength, benzocaine 5.0 mg and tyrothricin 1.0 mg; mannitol raised to 542.5 mg to keep 600 mg. Tyrothricin (a peptide mixture) goes in by geometric dilution.
- Batch 500,000 lozenges (300 kg). Standard practice assumed: blend times, BU, IPC limits; the lozenge dissolution test replaces disintegration.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | tyrothricin quantity from the lot's potency per mg on its CoA (T18 content in activity units per mass) |
| T10 | FITS WITH SETTING | mannitol takes the excess of both actives (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The Tyrozets SmPC gives sucrose 989.19 mg, so the marketed lozenge is about 1 g on a sucrose base. The 600 mg mannitol lozenge here is a different product built on the patent's process.

Counts: 105 rows; FITS 101, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0204 bacampicillin hydrochloride, film-coated IR, solvent granulation with cetyl alcohol (listed: roller compaction), about 400 mg

Source: EP 0 187 626 A1 (Astra Lakemedel), Examples 3 and 4 (Example 5 for scale), https://data.epo.org/publication-server/rest/v1.2/patents/EP0187626NWA1/document.pdf. Close variant: wet granulation in organic solvent, not roller compaction; the example tablets are uncoated.

- Example 3/4 batch: 640 g of solvent-wet bacampicillin HCl (= 500 g dry, wet with butyl and ethyl acetate) wet massed with 90 g cetyl alcohol in isopropanol (1+2 w/w; 6.1 % cetyl alcohol found); then MCC 29 g, croscarmellose 29 g, Mg stearate 7.6 g; tablets 483 mg.
- Derived per tablet (1,233 tablets from 595.6 g): bacampicillin HCl 405.5 mg, cetyl alcohol 24.3, MCC 23.5, croscarmellose 23.5, Mg stearate 6.2. If the granule keeps the stated ca. 1 % residual solvent, the API is about 402 mg.
- Process: planetary mixer 5-15 min, wet mill, fluid-bed dry 60 min at 60 C, oscillating granulator 1.2 mm; double-cone mixing with MCC, croscarmellose and Mg stearate; compression.
- Plant choices (not in source): batch 300,000 tablets (about 122 kg dry API); standard HPMC film coat 3 % with dry inlet air for the listed film-coated type; beta-lactam suite; flammable-solvent area. Standard practice assumed: IPC limits, residual-solvent limits, sieve sizes.

| Template | Result | Step |
|---|---|---|
| T12 | FITS WITH SETTING | wet-cake quantity from the dry API quantity, with the cake's solvent content (ethyl/butyl acetate) as the LOD input |
| T8 | FITS WITH SETTING | cetyl alcohol = 6 % of the dry API weight (T8 "% of" a computed weight) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The examples charge 640 g, 650 g, 140 g per 100 g and 550 g per 500 g of wet mixture for the same dry API, so the solvent content of the cake varies by lot. It must be the lot's own result (see safety rules).

Counts: 144 rows; FITS 140, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0205 cefpodoxime proxetil, dispersible, hot-melt extrudate then direct compression, 50 mg

Source: Patil PS, Suryawanshi SJ, Patil SS, Pawar AP, J Taibah Univ Med Sci (2024), doi:10.1016/j.jtumed.2023.12.004, PMC11010712, Table 1 and Methods, https://europepmc.org/article/PMC/PMC11010712. Close variant: the drug is first hot-melt extruded for taste masking; the tablet in the paper is the 100 mg strength (scaled to 50 mg here).

- Table 1 per tablet: CP extrudate granules 385 mg (30 % drug load), crospovidone 20, SiO2 4, mannitol 25, flavour 20, Mg stearate 2; 456 mg.
- Extrudate: CP and Eudragit E PO with PEG 6000 (5 %) blended through #40; co-rotating twin-screw extruder at 75 C, 150 rpm, feed 2 g/min (lab); ball milled, #60; assay of extrudate 95.3 % of theoretical; XRPD shows amorphous CP.
- Tablets: blend through #40, direct compression at 18-24 kN; hardness 3-3.5 kg, DT 30-40 s, friability 0.74-0.78 %, dispersion passes #22, 3.2 % release in simulated saliva at 2 min.
- Plant choices (not in source): 50 mg strength at half the Table 1 weights (228 mg tablet), with the extrudate per tablet set from its measured content; production extruder rate; batch 500,000 tablets in a beta-lactam suite.

| Template | Result | Step |
|---|---|---|
| C5 | FITS WITH SETTING | potency stated as cefpodoxime (as parent): no T11 factor (C5 extended) |
| T8 | FITS WITH SETTING | extrudate premix from 30 % drug load and 5 % plasticiser (T8 % w/w mode) |
| T8 | FITS WITH SETTING | extrudate made = feed rate x run time (T8 rate x time) |
| T8 | FITS WITH SETTING | extrudate content % w/w = 30 % load x assay as % of theoretical (T8 product of two readings) |
| T18 | FITS WITH SETTING | extrudate per tablet from its measured content (T18 content from in-process result) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The paper does not say whether "100 mg" is cefpodoxime or cefpodoxime proxetil (factor 1.30), and its numbers do not agree (see contradictions). The source index names the first author "Yadav"; the article's authors are Patil, Suryawanshi, Patil and Pawar.

Counts: 114 rows; FITS 107, FITS WITH SETTING 7, NEW SETTING 0, GAP 0.

## F0206 delafloxacin meglumine, uncoated IR, roller compaction, 450 mg

NO SOURCE: only a clinical protocol (649.35 mg meglumine salt = 450 mg acid; excipient names; "traditional wet granulation") and the label; no excipient amounts. Not counted.

## F0207 minocycline hydrochloride, film-coated ER hydrophilic matrix, non-aqueous wet granulation (listed: direct compression), 90 mg

Source: Keny RV, Mankame SA, Lourenco CF, Indian J Pharm Sci 2009, Table 2 formulation FC-IV and Methods, PMC2865789, https://europepmc.org/article/PMC/PMC2865789. Close variant: wet granulation with PVP in isopropanol, not DC; uncoated; 90 mg (listed 100 mg); lab batch of 50 tablets.

- FC-IV per tablet: minocycline HCl 90 mg, HPMC K15M 93.35, ethylcellulose 46.66 (2:1, 40 % matrix), lactose 91.5, PVP K30 18 (as 10 % w/v in IPA, 9 ml per 50 tablets), talc 7, Mg stearate 3.5; 350 mg; 10 mm biconvex.
- Drug, lactose, HPMC and EC mixed, wetted with the PVP/IPA solution, screened No. 12, air-dried at room temperature protected from light, re-screened, talc and Mg stearate added, compressed.
- Granule tests: bulk/tapped density, Carr index, angle of repose, KF moisture; tablets: hardness, weight variation, thickness, friability, assay, dissolution to 24 h.
- Plant choices (not in source): batch 300,000 tablets (105 kg, IPA 54 L); low-temperature tray drying under low-actinic light in place of air drying; standard HPMC film coat 3 % for the listed film-coated type. Standard practice assumed: mixer settings, drying limits, IPC limits.

| Template | Result | Step |
|---|---|---|
| T17 | FITS WITH SETTING | binder 10 % w/v PVP in IPA made up to volume (T17 % w/v made up to a final volume) |
| T6 | FITS WITH SETTING | angle of repose of granules (T6 option: angle of repose) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The paper gives 90 mg "minocycline HCl"; the reference product it compares with is labelled as 90 mg minocycline. The master must state the basis (known label-basis rule, wave 1).

Counts: 147 rows; FITS 143, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0208 ofloxacin, uncoated floating-bioadhesive gastroretentive tablet, direct compression (listed: film-coated, roller compaction), 400 mg

Source: Yashwantrao (Pawar) et al., Int J Drug Delivery 4(3):326-335 (2012), Table 5 optimised formula and "Preparation of tablets", https://ijdd.arjournals.org/index.php/ijdd/article/download/155/154/160. Close variant: direct compression; uncoated (a film coat would change the floating lag time and the bioadhesion, so none is added).

- Optimised per tablet: ofloxacin 400 mg, HPMC K100M 254.76, sodium CMC 75.27, ethylcellulose 48, sodium bicarbonate 70, Mg stearate 5, DCP 46.97; 900 mg.
- Geometric mixing, direct compression on a rotary press with 13 mm flat tooling, hardness 7-9 kg/cm2; thickness 6.7 mm.
- Tests: floating lag time (about 6-7 min found), floating over 24 h, swelling and erosion, bioadhesion, weight, friability below 0.5 %, content within 100 +/- 2 %, dissolution 24 h.
- Plant choices: batch 200,000 tablets (180 kg) at low RH (effervescent couple). Standard practice assumed: sieves, blend times, IPC limits; swelling and bioadhesion kept as development tests, not batch IPCs.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C1 | FITS WITH SETTING | hardness 7-9 kg/cm2 (round-3 unit kgf/cm2) |

Counts: 94 rows; FITS 91, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0209 dihydroartemisinin + piperaquine phosphate, film-coated IR, piperaquine wet-granulated and DHA added dry (listed: direct compression), 40 mg + 320 mg

Source: CN 101199489 A, Embodiment 3 and steps (1)-(6), https://patents.google.com/patent/CN101199489A/en (machine translation). Close variant: the piperaquine part is wet granulated; uncoated in the source.

- Per tablet (per 1,000 tablets in g): DHA 40 mg, piperaquine phosphate 320, starch 70, dextrin 25, carboxymethyl starch sodium 32.5, hyprolose 8 (binder solution), Mg stearate 4; 499.5 mg. Embodiments 1-2 give 489 and 530 mg with the same APIs.
- APIs and CMS-Na milled to 100 mesh, excipients to 100 mesh; piperaquine phosphate, starch and dextrin wet massed with the hyprolose solution, 14 mesh; oven dried, 16 mesh.
- DHA, CMS-Na and Mg stearate mixed with the dry granules (DHA kept out of the wet and heated step) and compressed; tested before packing.
- Plant choices (not in source): binder concentration, drying temperature and LOD limit; standard HPMC film coat 3 % for the listed type; batch 300,000 tablets (150 kg).

| Template | Result | Step |
|---|---|---|
| T10 | FITS WITH SETTING | starch (dispensed for the granule) takes the excess of both APIs, the extragranular DHA included (T10 several adjusted materials into one filler) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The text does not say whether 320 mg is anhydrous piperaquine tetraphosphate or the tetrahydrate. The master must state the form (C5).

Counts: 149 rows; FITS 146, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0210 levamisole hydrochloride, uncoated IR, fluid-bed granulation, 50 mg

NO SOURCE: only veterinary combination patents and a leaflet with excipient names; no human tablet formula with process. Not counted.

## F0211 nifurtimox, scored IR, fluid-bed granulation, 120 mg

NO SOURCE: bioequivalence paper, Bayer patents and the US label give no composition; the only patent found covers sustained-release beads. Not counted.

## F0212 famciclovir, film-coated IR, high-shear wet granulation (listed: MADG), 500 mg

Source: EP 0 874 632 B1 (SmithKline Beecham), Example paragraphs [0015]-[0019], https://data.epo.org/publication-server/rest/v1.2/patents/EP0874632NWB1/document.pdf. Close variant: conventional high-shear granulation with water, not moisture-activated dry granulation.

- Core % w/w: famciclovir 91.42, HPC 2.83, sodium starch glycolate 5.00, Mg stearate 0.75; no lactose (the registered tablet then had 16.25 % anhydrous lactose and 75.66 % drug).
- Per 500 mg tablet: famciclovir 500.0, HPC 15.5, SSG 27.3, Mg stearate 4.1; core about 547 mg; aqueous film coat 2.5 % to 560 mg; oval 17 x 8 mm.
- Famciclovir and HPC dry mixed, granulated with water in a high-shear granulator, screened, dried, milled, blended with SSG and Mg stearate, compressed, coated.
- Plant choices: batch 300,000 tablets (164 kg cores) in sub-lots. Not in source, standard practice: water quantity and end point, drying limits, coat formula, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The formula has no filler, so a potency adjustment cannot be compensated. The target core weight is the T2 sum of the actual quantities, as in the known rule (wave 1 T2 sum; wave 2 F0183).

Counts: 134 rows; FITS 132, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0213 maribavir, film-coated IR, high-shear granulation, 200 mg

NO SOURCE: SmPC and labels give excipient names only; the public assessment report says direct compression with no quantities; the process patents cover synthesis and milling. Not counted.

## F0214 alendronate sodium trihydrate, uncoated IR, direct compression, 70 mg

Source: US 5,358,941 A (Merck), Examples 1 and 3, https://patents.google.com/patent/US5358941A/en. Close variant: 50 mg free-acid strength (listed 70 mg once weekly), scaled.

- Example 3 per tablet: alendronate sodium trihydrate 65.5 mg (= 50 mg free acid), anhydrous lactose 110.0, MCC 120.0, croscarmellose 3.0, Mg stearate 1.5; 300 mg (21.8 / 36.7 / 40 / 1 / 0.5 %).
- Example 1 procedure: API premixed with 1/3 of the MCC and 1/2 of the lactose in a ribbon blender 5 min at 20 rpm; rest of MCC and lactose 10 min; croscarmellose 5 min; Mg stearate through 90 mesh, 5 min; direct compression. No water at any step (wet granulation with lactose discoloured in 2-4 weeks at 40 C/75 % RH).
- Plant choice: Example 3 x 1.4 for 70 mg: API 91.36 mg by the molecular-weight factor, lactose 154.34 (keeps 420.0 mg), MCC 168.0, croscarmellose 4.2, Mg stearate 2.1. Batch 500,000 tablets (210 kg). Standard practice assumed: IPC limits, low RH.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: The examples use a factor of 1.31 (6.55/5, 65.5/50); the molecular-weight factor is 1.3052 (0.37 % less). A typed factor is refused by the known wave 1 T11 rule.

Counts: 88 rows; FITS 86, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0215 ambrisentan, film-coated IR, micronised API and direct compression, 5 mg

Source: US 2011/0189243 A1 (ratiopharm), Examples 3 and 7 (coat from Example 2), https://patents.google.com/patent/US20110189243A1/en. Close variant: the direct-compression examples are uncoated; the coat is from the wet-granulation Example 2.

- Example 7 batch: ambrisentan micronised per Example 3 (ball mill 30 min, 350 rpm; d50 18 um, d90 63 um) 0.77 g, Microcelac 100 19.39 g, croscarmellose 0.63 g, Mg stearate 0.21 g; 15 min mixing, Mg stearate 3 min; 140 mg tablets stated to hold 5 mg.
- Per tablet from the batch grams: ambrisentan 5.13 mg, Microcelac 129.27, croscarmellose 4.20, Mg stearate 1.40. Used here: ambrisentan 5.00 mg and Microcelac 129.40 to keep 140 mg (T10).
- Coat (Example 2 ratio, about 3.6 % of core): HPMC 603, titanium dioxide, talc and PEG (40 : 5 : 5 : 3) from an aqueous solution in a drum coater.
- Plant choices: production micronisation in a jet mill to the same size limits; potent-compound containment (teratogen); batch 1,000,000 tablets (140 kg). Standard practice assumed: BU, CU, IPC limits, coating temperatures.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 120 rows; FITS 118, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0216 amiodarone hydrochloride, scored IR, high-shear wet granulation (listed: roller compaction), 200 mg

Source: QbD-based formulation development of amiodarone hydrochloride tablet, Pharmaceutics 2026, 18:264, Table 2 and section 2.3, PMC12944620, https://europepmc.org/article/PMC/PMC12944620. Close variant: high-shear wet granulation, not roller compaction; the score is taken from the scored reference tablet (Cordarone 200 mg), not from the paper.

- Per tablet: amiodarone HCl 200.0 mg, povidone K25 20.0 (as binder solution with 40 mg water per tablet), starch 1500 29.0, lactose monohydrate 95.0, colloidal silica 2.0, Mg stearate 4.0; 350.0 mg; 10.5 mm.
- API, starch 1500 and lactose mixed 2 min (impeller 100, chopper 1,500 rpm); binder added, 3 min at 250/1,500 rpm plus 2 min; hot-air dried at about 60 C to LOD below 2.0 %; hammer mill 1.0 mm; silica (25 mesh) and Mg stearate (35 mesh) blended; compressed.
- IPCs: Carr index not more than 20 % (15.8 % found, Hausner 1.19), disintegration under 8 min (about 6 min found), friability not more than 1.0 % (0.47 %); CU by weight variation per USP <905>.
- Plant choices: batch 500,000 tablets (175 kg) in sub-lots under low-actinic light; score-subdivision test. Standard practice assumed: compression settings, hardness limits.

| Template | Result | Step |
|---|---|---|
| C3 | FITS WITH SETTING | score subdivision: halves within +/- % of their mean (C3 limits as % of series mean) |
| T14 | FITS WITH SETTING | content uniformity by weight variation (T14 option; uncoated, 57 % API) |
| C1 | FITS WITH SETTING | mean weight within +/- % of target (C1 option: limits around computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 123 rows; FITS 119, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0217 azilsartan kamedoxomil + chlorthalidone, film-coated IR, fluid-bed granulation, 40 + 12.5 mg

NO SOURCE: the Dutch public assessment report is qualitative only (granulation of both actives, blending, compression, coating); no patent with the combination's quantities was found. Not counted.

## F0218 betaxolol hydrochloride, film-coated IR, high-shear granulation, 20 mg

NO SOURCE: SmPC gives the lactose amount only; labels list excipient names; patents cover synthesis, eye drops or another combination. Not counted.

## F0219 captopril + nifedipine + glipizide, 3D-printed IR + ER, 12.5 + 20 + 2.5 mg

NO SOURCE: the exact paper (Khaled et al., Int J Pharm 2015;494:643) is paywalled; only the abstract could be read. Not counted.

## F0220 doxazosin mesylate, uncoated IR, fluid-bed granulation, 4 mg

NO SOURCE: only sustained-release doxazosin patents and articles were found; no immediate-release formula with process. Not counted.

## Totals for F0201-F0220

| Formulation | Counted rows | FITS | FITS WITH SETTING | NEW SETTING | GAP |
|---|---|---|---|---|---|
| F0201 | 113 | 107 | 5 | 1 | 0 |
| F0202 | 163 | 160 | 3 | 0 | 0 |
| F0203 | 105 | 101 | 4 | 0 | 0 |
| F0204 | 144 | 140 | 4 | 0 | 0 |
| F0205 | 114 | 107 | 7 | 0 | 0 |
| F0207 | 147 | 143 | 4 | 0 | 0 |
| F0208 | 94 | 91 | 3 | 0 | 0 |
| F0209 | 149 | 146 | 3 | 0 | 0 |
| F0212 | 134 | 132 | 2 | 0 | 0 |
| F0214 | 88 | 86 | 2 | 0 | 0 |
| F0215 | 120 | 118 | 2 | 0 | 0 |
| F0216 | 123 | 119 | 4 | 0 | 0 |
| **Total (12)** | **1,494** | **1,450** | **43** | **1** | **0** |

Counted 12 formulations, 1,494 rows: FITS 1,450, FITS WITH SETTING 43, NEW SETTING 1, GAP 0. NO SOURCE 8 (F0206, F0210, F0211, F0213, F0217, F0218, F0219, F0220).

New settings:
- C5 for solvates (F0201), variant of C5: C5 checks hydrate factors against water corrections. The round-3 T9 "solvent-free" basis means a solvate needs the same check. If the T11 factor uses the ethanolate's molecular weight (1.0841), the assay must be used as is; a solvent-free assay basis with the solvate factor counts the ethanol twice and must be refused. The other chain is allowed: no T11 factor, and T9 on the solvent-free basis with the lot's ethanol content.

Safety rules:
- Solvate double count (F0201): darunavir ethanolate factor 1.0841 plus a solvent-free assay basis gives about 8.4 % too much darunavir. This is the new C5 setting above.
- Relative against absolute intermediate content (F0205): the extrudate assay is reported as 95.3 % of theoretical, not as % w/w. Typed into T18 as the content % it gives 100/95.3 instead of 100/28.6 per unit of drug, so the tablets get about 30 % of the dose (about 3.3 times too little). The reverse mistake gives about 3.3 times too much. T18's input must state its result type ("% w/w of the intermediate" or "% of theoretical" with the theoretical load named); the chain T8 product (load x relative assay) then T18 is correct. Existing templates do it, but the input type has to be fixed in the master.
- Solvent-wet API (F0204): bacampicillin HCl is charged as a cake wet with ethyl/butyl acetate (500 g dry in 640-650 g). Weighing 500 g of cake as if it were dry API gives about 23 % too little drug. The quantity comes from T12 with the lot's measured solvent content, and the protecting agent (6 %) is taken on the dry API weight, not the wet weight.
- Reminders of known rules: label basis (cefpodoxime as parent, F0205, factor 1.30, -23 % if the ester is read as parent; minocycline 90 mg as HCl or base, F0207); no filler for compensation (famciclovir, F0212: compressing at the standard 547 mg after adjusting for a 98 % lot gives about 1.8 % too little); API amount must match the label claim (ambrisentan Example 7 gives 5.13 mg, +2.7 %; EP 3 576 718 Example 1 table gives 15 mg benzocaine against the 8 mg it reports, F0203); typed salt factor (alendronate 1.31 against 1.3052, F0214); two APIs controlled by one granule weight (DHA added to the piperaquine granule by T15, F0209); hydrate form not named (piperaquine phosphate, F0209).

Sources that contradict themselves:
- WO 2009/013356 A2 (F0201): 5.78 kg Opadry for 92,370 cores is 62.6 mg (5.0 %) per core, but each tablet gains 50 mg (4.0 %); an unstated overage of about 25 %.
- EP 3 576 718 B1 (F0203): the Example 1 tables give 15.0 mg benzocaine, but Example 4 calls the Example 1 lozenge an 8 mg lozenge (claim 5 is 8 mg). The particle sizes are printed in mm ("7 to 18 mm", "207 mm"), which must be micrometres.
- EP 0 187 626 A1 (F0204): Example 7 says 175 kg of cetanol were used for about 60 kg of API, while the product is to hold 3-9 %; it probably means 175 kg of the 14 % solution, but the text does not say so.
- Patil et al. 2024 (F0205): the % column does not match the mg column (SiO2 4 mg of 456 is printed 0.98 %, not 0.88 %); the roxithromycin column is headed 456 mg but its lines add up to 494 mg; the text gives 348.99 mg extrudate as the dose, but Table 1 uses 385 mg (about 110 mg drug at the measured 95.3 %); it never says whether 100 mg is cefpodoxime or the proxetil ester.
- Int J Drug Delivery 2012 ofloxacin (F0208): the formula is 900 mg, but tablet weights are reported as 795-803 mg; the text says each tablet holds 300 mg of drug against 400 mg in the formula.
- CN 101199489 A (F0209): the binder is named hyprolose (HPC) in the formula but hypromellose in the explanation; it is sieved as a powder in step 2 and then used as a solution with no solvent or concentration given.
- US 5,358,941 A (F0214): Example 3 is headed "per 4,000 tablets", but its gram amounts are for 2,500 tablets; the salt amounts use a factor of 1.31, not the molecular-weight factor 1.3052.
- US 2011/0189243 A1 (F0215): Examples 6, 7 and 9-11 put 0.77 g ambrisentan in 21.0 g at 140 mg per tablet (5.13 mg), stated as 5 mg; Example 4 gives 5.52 mg (21.63 g at 155 mg), also stated as 5 mg. Examples 9-11 list calcium hydrogen carbonate but the text says calcium hydrogen phosphate.
- Pharmaceutics 2026, 18:264 (F0216): the binder is 5.71 % in the abstract and Table 2 but 5.72 % in the conclusion; the friability sample of 20 tablets of 350 mg is called about 6.5 g (it is 7.0 g).
