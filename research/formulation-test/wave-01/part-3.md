# Wave 1, part 3 (F0041-F0060)

Each section lists only the rows that are not plain FITS. The counts include every row of the outlined master batch
record: dispensing (4 rows per material), room and line checks per stage, process, IPC, yields, holds and release.
Where a source gives no batch size, the batch size is the one stated in the summary. Where a source leaves out part
of the process, the summary says which parts follow standard practice.

## F0041 prochlorperazine maleate, uncoated IR (variant: orally disintegrating, direct compression)

Source: Indian J Pharm Sci 2010; 72(1): 130-133, DOI 10.4103/0250-474X.62244, formulation DCPC4,
https://www.ijpsonline.com/articles/formulation-design-of-fast-disintegrating-tablets-using-disintegrant-blends.html

- Variant used: the listed fluid-bed uncoated tablet has no usable source. This is the closest real formula for the same API and is not on the tested list.
- Formula per tablet (mg): prochlorperazine maleate 5.0, crospovidone 4.5, croscarmellose sodium 7.5, MCC 30, aspartame 3.0, sodium stearyl fumarate 1.5, talc 3.0, pineapple flavour 1.5, mannitol SD 200 94; total 150 mg.
- Process: each ingredient through a #60 sieve, mixed in geometric order, compressed on 8 mm flat punches. Tests: weight variation (±7.5 %), hardness, friability, dispersion time, wetting time, water absorption ratio.
- Batch 500,000 tablets (75 kg). Standard practice assumed: blend times, blend uniformity, low-actinic light, ODT disintegration limit, holds.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target (C1 option: limits around a computed value) |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Note: the label strength is the salt here (5 mg maleate). US labels give "equivalent to 5 mg prochlorperazine", so the basis differs by market (see safety rules).

Counts: 92 rows; FITS 90, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0042 tegoprazan, film-coated IR roller compaction (variant: ODT, fluid-bed granulation)

Source: US 2023/0381109 A1 (HK inno.N), Example 2, Table 1, https://ipiq.io/patents/1833701

- Variant used: no source for a roller-compacted film-coated tablet. This ODT of the same API is not on the tested list.
- Granule (mg/tablet): tegoprazan 50.0, mannitol 200SD 50.0. Binder: HPMC 0.5 and sucralose 3.5 in 75 mg water + 75 mg ethanol (50 % w/w).
- Post-mix: Pearlitol Flash 195.0, crospovidone 17.0, maltitol 17.0, stevia 1.5, peppermint 3.0, colloidal silica 3.0, Mg stearate 10.0; total 350.5 mg, hardness 5-8 kP.
- Process: binder stirred for 2 h or more until dissolved; API and mannitol through 25 mesh; fluid-bed spray granulation; size; blend; lubricate; compress.
- Batch 300,000 tablets (105 kg). Standard practice assumed: fluid-bed settings, LOD limit, residual ethanol limit, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 132 rows; FITS 130, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0043 lusutrombopag, film-coated IR

NO SOURCE. The EMA assessment report (EMA/CHMP/817852/2018) gives only the excipient names and the step list (wet
granulation, drying, milling, blending, compression, film-coating). It has no quantities, and no patent example was
found. Not counted.

## F0044 Liv.52-type polyherbal (Capparis + Cichorium + 5 herbs), uncoated

NO SOURCE. The per-tablet herb quantities appear only on the label and in reviews. No manufacturing process was found
in a patent, an assessment report or an article. Not counted.

## F0045 Triphala guggulu, uncoated (variant: high-shear granulation, not moulding)

Source: Muguli G et al., AYU 2015; 36: 318-22, DOI 10.4103/0974-8520.182748 (Himalaya R&D), Tables 1-2,
https://www.wisdomlib.org/uploads/journals/ayu/volume-36-3-2015-jul-sep/AYU-36-318.pdf

- Herbal blend 750 mg per tablet: Shuddha Guggulu 416.67, amla 83.33, haritaki 83.32, vibhitaki 83.34, pippali 83.34 (the formulary ratio of 5 : 1 : 1 : 1 : 1).
- Tablet F2 (mg): blend 750, tapioca starch 210, crospovidone 20, Mg stearate 15, colloidal silica 5; total 1,000 mg.
- Kwatha: 5 kg triphala powder boiled in 40 L water at 85-95 °C for 3 h, then filtered through 100 µm. Shodhana: 5 kg guggulu in muslin, held in the kwatha at 85-95 °C for 3 h; the filtrate is spray-dried (inlet 180 °C, outlet 110 °C).
- Granulation: RMG with water, fluid-bed drying at 60-70 °C to moisture < 5 %, milled and sifted through 20 #, then compressed. Tests: weight, Monsanto hardness, disintegration (water, 37 °C), friability (25 rpm, 4 min).
- Variant: the listed moulded vati has no quantitative source; this real tablet of the same formula is used instead. Batch 100,000 tablets. Standard practice assumed: water quantity, mix times, IPC limits, marker limits.

| Template | Result | Step |
|---|---|---|
| T18 | FITS WITH SETTING | spray-dried Shuddha Guggulu per batch from the raw-guggulu equivalent and this lot's measured extract ratio (content from an in-process result of the same batch) |
| T6 | FITS WITH SETTING | angle of repose (T6 option) |
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 135 rows; FITS 131, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0046 Crataegus leaf and flower dry extract 450 mg, film-coated

NO SOURCE. Only labels (extract ratio, solvent) were found; no excipient quantities or process. Not counted.

## F0047 Harpagophytum root dry extract, film-coated (variant: 400 mg, direct compression)

Source: EP 0 897 302 B1 (Schwabe), Beispiel 6, extract from Beispiel 5,
https://data.epo.org/publication-server/rest/v1.2/patents/EP0897302NWB1/document.pdf

- Core per tablet (mg): dry extract 400, colloidal silica 10, povidone (MW 25,000) 6, crospovidone 10, Mg stearate 4, MCC 70; total 500 mg. A 200 mg strength is half of this.
- Process: mix the components, compress, then apply a film coat based on hypromellose (coat quantity not given).
- Extract (Beispiel 5): two extractions with 80 % ethanol at 60 °C, butanol partition, vacuum drying; harpagoside 19.3 %.
- Variant: the listed 480 mg fluid-bed tablet has no source with quantities. Batch 200,000 tablets (100 kg cores). Standard practice assumed: coat at 3 % gain, blend times, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 102 rows; FITS 100, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0048 Natrium chloratum D6 trituration tablet

NO SOURCE. No patent, article or report gives a D6 trituration tablet formula with a process. The pharmacopoeia
method alone was not counted as a formula. Not counted.

## F0049 Niuhuang Jiedu (artificial bezoar + 7), sugar-coated (variant: film-coated)

Source: CN 104547071 B, Embodiment 1 (English machine translation), https://eureka.patsnap.com/patent-CN104547071B

- Per 1,500 tablets: artificial bezoar 5 g, realgar 50 g, gypsum 200 g, rhubarb 200 g, Scutellaria 50 g, Platycodon 100 g, borneol 25 g, licorice 50 g, starch 8 g.
- Process: realgar levigated with water to a fine powder; rhubarb milled; bezoar and borneol ground fine. The other four herbs are decocted twice with water (2 h each), filtered and concentrated to a paste of relative density 1.20 at 70 °C.
- Granules are made from rhubarb, realgar and starch with the paste, then dried; bezoar and borneol are added and the blend is compressed into 1,500 plain tablets, which are film-coated in a pan.
- Variant: the patent replaces the traditional sugar coat (its own background gives 50-100 % weight gain) with a film coat. The coat formula and conditions are cut off in the translation, so standard film coating is assumed. Batch 300 formula units (450,000 tablets).

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | decoction water = 8 × herb mass (T8 "% of" a recorded weight) |
| F7 | FITS WITH SETTING | decoct twice on the same herbs (F7: N cycles on the same lot) |
| C1 | FITS WITH SETTING | mean weight within ± % of a target computed as final blend mass ÷ 1,500 per formula unit |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 136 rows; FITS 132, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## F0050 thyme herb + primula root dry extracts, film-coated

NO SOURCE. Only labels and pharmacology papers give the 160 + 60 mg extracts; no excipient quantities or process.
Not counted.

## F0051 dotinurad, film-coated IR fluid-bed (variant: uncoated, high-shear, 0.25 mg)

Source: EP 4 074 313 A1 (Fuji Yakuhin), Example 2,
https://data.epo.org/publication-server/rest/v1.2/patents/EP4074313NWA1/document.pdf

- Batch in the example: dotinurad 0.8 g pre-diluted with lactose 8.0 g, lactose 156.0, D-mannitol 80.0, MCC 48.0, hypromellose 9.6, carmellose 16.0; granulated with 31.8 g water.
- Drying and compression: tray-dried at 60 °C for 240 min, graded through No. 30, Mg stearate 1.6 g added. Compressed to 100 mg tablets (6.5 mm, R 8.0, about 7.0 kgf), 0.25 mg dotinurad each (320 g makes 3,200 tablets).
- Variant: no source for the film-coated fluid-bed tablet; at the listed 2 mg the API would be 2 % of the tablet. Batch 1,000,000 tablets (100 kg). Standard practice assumed: blend uniformity, content uniformity and IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 105 rows; FITS 103, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0052 upadacitinib hemihydrate 15 mg, film-coated ER hydrophilic matrix

Source: US 2025/0161302 A1 (AbbVie), Example 1, Table 1 (the marketed tablet),
https://trea.com/information/extended-release-upadacitinib-formulations/patentapplication/1ef8a846-e17d-442f-a895-531598a77a3f

- Intragranular (mg): hemihydrate 15.4 (= 15 mg free base), HPMC K4M 4.9, MCC PH102 41.2.
- Extragranular (mg): MCC PH101 121.3, mannitol 100.6, HPMC K4M 91.1, tartaric acid 96.0, colloidal silica 2.4, Mg stearate 7.2; core 480.0; Opadry II PVA 14.4; 494.4 mg.
- The patent wants tablet water kept at no more than about 4 % (tartaric acid is hygroscopic) and the hydroxymethyl impurity at no more than about 0.5 %.
- Table 1 does not state the granulation method. The same document's examples granulate the intragranular part with water in a high-shear mixer, so that is used here, not the listed roller compaction. Batch 500,000 tablets.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | hemihydrate 15.4 mg to 15 mg free base (any two named forms) |
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 136 rows; FITS 133, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0053 betahistine dihydrochloride 48 mg, uncoated ER hydrophilic matrix

Source: US 11,433,058 B2 (Example 1, Table 1), https://patentimages.storage.googleapis.com/7f/29/79/a2e2883a685cd0/US11433058.pdf

- Per tablet (mg): betahistine 2HCl 48, MCC 230, citric acid 50, povidone K30 12, HPMC K100M CR 374, lambda carrageenan 40, colloidal silica 15, talc 8, sodium stearyl fumarate 8; total 785 mg.
- Granulation: API dissolved in water until clear; MCC, citric acid and povidone sifted (40 mesh) into the RMG and granulated with the solution (5 min).
- Drying and compression: dried at 55 ± 10 °C to LOD 2.0 %, sifted and blended (5 min, 16 rpm). Matrix formers added (20 min), then glidant and lubricants (5 min). Compressed on 18 × 10 mm oval tooling to 150-220 N.
- Batch 300,000 tablets (235.5 kg). Standard practice assumed: water quantity, RH limit for the hygroscopic API, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 119 rows; FITS 117, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0054 lamotrigine, ER membrane-coated, wet granulation (200 mg strength)

Source: EP 2 263 657 A1 (Ranbaxy), Example 4, https://data.epo.org/publication-server/rest/v1.2/patents/EP2263657NWA1/document.pdf

- Core (mg): lamotrigine 200, HPMC E4M 70, lactose 80, MCC 50, povidone 12 (in isopropyl alcohol), talc 3, Mg stearate 3; 418 mg.
- Coat (mg): Eudragit L30D-55 32.15, HPMC 3.22, triethyl citrate 3.22, talc 3.21, water q.s.; total 459.80 mg (about 10 % gain, no orifice).
- Process: RMG granulation with povidone/IPA, dried, sized, lubricated, compressed, then coated in a pan until the target gain is reached.
- The source has no 100 mg example; the 200 mg example is used. Batch 200,000 tablets. Standard practice assumed: LOD, residual IPA, coat solids and IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 141 rows; FITS 139, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0055 modafinil 100 mg, uncoated IR (variant: high-shear wet granulation, not direct compression)

Source: EP 1 397 127 B1 (Cephalon), Examples 1 and 3, https://data.epo.org/publication-server/rest/v1.2/patents/EP1397127NWB1/document.pdf

- Per tablet (mg): modafinil 100.0, lactose monohydrate 71.75, MCC PH102 26.0, pregelatinised starch 27.25, povidone K29/32 13.0, croscarmellose 10.0, Mg stearate 2.0; total 250.0 mg.
- Example 3 (250 kg): dry mix 6 min in a 600 L Collette, water 100 kg pumped at 14 kg/min (more water or mixing allowed), 30 s wet mix.
- Drying and blending: oven trays no deeper than 2 inches, 60 ± 2 °C to LOD 1.0-2.1 %; Fitzmill; Mg stearate split between the two sides of a PK blender (5 min); compression on a Kikusui press.
- Variant: no direct-compression source with quantities. Batch 1,000,000 tablets (Example 3 scale). Controlled-substance accountability is added (standard practice).

| Template | Result | Step |
|---|---|---|
| T8 | FITS WITH SETTING | water addition time from quantity and pump rate (T8 rate × time) |
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 109 rows; FITS 106, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0056 ponesimod 20 mg, film-coated IR

NO SOURCE. The EMA assessment report (EMA/CHMP/206970/2021) gives only excipient names and the 11-step process; the
SmPC gives only the lactose content. No patent example with quantities was found. Not counted.

## F0057 pramipexole dihydrochloride monohydrate, uncoated ER matrix, direct compression (0.75 mg)

Source: EP 1 781 260 B1 (Boehringer Ingelheim), Examples 1 and 3,
https://data.epo.org/publication-server/rest/v1.2/patents/EP1781260NWB1/document.pdf

- Per tablet (mg): pramipexole 2HCl H2O (peg-milled) 0.750 (= 0.524 mg base), HPMC 2208 157.5, corn starch 183.7, carbomer 941 3.5, colloidal silica 2.8, Mg stearate 1.75; total 350.0 mg, 14 × 6.8 mm oblong.
- Process: API trituration with part of the HPMC (10 min); premix with the rest (5 min); optional 0.8 mm screening; main mix (5 min); Mg stearate (3 min); compression. IPC: mass, hardness, height, friability. The API d90 is below 75 µm.
- The example strength is 0.75 mg (0.375 mg is not given as an example). Batch 500,000 tablets.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | 0.75 mg salt monohydrate = 0.524 mg base when the label is on base (any two named forms) |
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 85 rows; FITS 82, FITS WITH SETTING 3, NEW SETTING 0, GAP 0.

## F0058 pyridostigmine bromide 180 mg, ER hydrophobic matrix (variant: hot-melt extrusion, uncoated)

Source: EP 3 556 357 B1, Examples 1 and 2, https://data.epo.org/publication-server/rest/v1.2/patents/EP3556357NWB1/document.pdf

- Extrudate (% w/w): pyridostigmine bromide 25, Kollidon SR 60, MCC PH102 15.
- Extrusion: single screw, zones 120/135/135/135 °C, 60 rpm; pelletised, then milled in a cutting mill.
- Tablets: milled extrudate with lubricant only, 720 mg (180 mg API), 12 mm, 1,500 psi.
- Variant: no wax melt-granulation source; this melt process for the same API is used. The source has no film coat, so no coat stage. Batch 200,000 tablets. Standard practice assumed: lubricant (0.5 % Mg stearate), RH limit, IPC limits.

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |
| C1 | NEW SETTING | compression pressure recorded in psi: the unit list has kgf/cm² but not psi (lbf/in²); add psi with its conversion |

Counts: 81 rows; FITS 78, FITS WITH SETTING 2, NEW SETTING 1, GAP 0.

## F0059 tolcapone, film-coated IR wet granulation (variant: 300 mg sustained release, direct compression, uncoated)

Source: EP 3 275 433 A1, Example 4, https://data.epo.org/publication-server/rest/v1.2/patents/EP3275433NWA1/document.pdf

- Per tablet (mg): micronised tolcapone 300, HPMC K100M CR 160, MCC Vivapur 102 336.24, talc 0.96, Mg stearate 0.4, colloidal silica 2.4; total 800 mg.
- Process: weigh, sieve (5 mm), mix everything in a biconical drum at 20 rpm for 10 min, compress 800 mg on 19 × 10 mm oblong punches. The micronised API is specified by particle size (Dv0.9 limit).
- Variant: the source names the marketed IR product as granulated, but no quantitative IR formula was found. Batch 150,000 tablets (120 kg).

| Template | Result | Step |
|---|---|---|
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 72 rows; FITS 70, FITS WITH SETTING 2, NEW SETTING 0, GAP 0.

## F0060 ubrogepant, uncoated IR (variant: hot-melt extrudate compressed, not direct compression)

Source: US 2023/0248655 A1 (Merck), Example I, https://ipiq.io/patents/1423354

- Extrudate: ubrogepant trihydrate 1.318 kg + PVP-VA 64 4.382 kg, pre-blended in a high-shear mixer in 8 runs, with molten TPGS 0.300 kg added over 5 min.
- Extrusion and milling: 16 mm extruder at 146-160 °C, die 14-16 bar, feed 30-52 g/min, giving 6.0 kg at about 20 % free base. Fitzmill, then a 600 µm screen; VMD about 195 µm.
- Tableting blend: extrudate 3.6 kg (200 mg/g free base), mannitol 1.160, sodium chloride 0.600, croscarmellose 0.600, colloidal silica 0.015, sodium stearyl fumarate 0.090, MCC PH102 0.5798 kg. Blended 5 min at 25 rpm, split into 1.25 kg parts, compressed to 12-16 kP. Target 90 % dissolved in 20 min.
- Variant: the marketed product uses this extrudate route; no direct-compression source was found. Batch 200,000 tablets. Standard practice assumed: IPC and release limits.

| Template | Result | Step |
|---|---|---|
| T11 | FITS WITH SETTING | trihydrate to free base (any two named forms) |
| T18 | FITS WITH SETTING | extrudate quantity from this batch's measured free-base content (in-process content) |
| C1 | FITS WITH SETTING | mean weight within ± % of target |
| T5 | FITS WITH SETTING | friability (T5 loss mode) |

Counts: 118 rows; FITS 114, FITS WITH SETTING 4, NEW SETTING 0, GAP 0.

## Part 3 totals

Counted 14 formulations, 1,563 rows: FITS 1,525, FITS WITH SETTING 37, NEW SETTING 1, GAP 0.
NO SOURCE 6 (F0043, F0044, F0046, F0048, F0050, F0056).

New settings:
- psi as a pressure unit (F0058), with conversion to kN/MPa: variant of the unit list (round 3 added kgf/cm²). Not a new template.

Safety rules:
- **Label basis by market (F0041, F0057).** The same tablet is labelled on the salt in one market and on the base in
  another. Prochlorperazine "5 mg" is the maleate in UK/Indian labels but base-equivalent in US labels (factor
  606.1/373.9 = 1.62). Pramipexole "0.75 mg" is the salt monohydrate in the US but 0.52 mg base in the EU (factor
  1.43). The master must state the basis of each strength claim for each market, so that T11 is applied or refused
  correctly. Reusing a master across markets on the wrong basis gives 62 % or 43 % more drug, or that much less.
- **Ratios in process text (F0060).** The premix ratio of 1 : 3.75 holds only if the API is counted as free base and
  the hydrate water is counted with the polymer. As weighed, the ratio is 1 : 3.32. If the trihydrate were weighed to
  1 : 3.75, the tablets would get about 9 % less drug (549.5/603.6). Any ratio or % that involves the API in an
  instruction (T6 checks, premix ratios, % loading) must carry its basis, the same as in T11/C5.
- **Herbal quantity basis (F0045).** The guggulu line (416.67 mg) is given as raw-herb equivalent, but what is weighed
  is the spray-dried Shuddha Guggulu. The master must state which one the line means and convert with this lot's
  measured extract ratio (T18 in-process). Reading it the wrong way changes the dose by the extract ratio.
- **Toxic conversion limit (F0049).** Drying the realgar is limited in temperature, because heat turns it into arsenic
  trioxide (a related Niuhuang Jiedu process patent says so; not checked in full text). This is a C1 maximum that must not be widened. It fits C1; the point is that
  this limit needs QA approval to change.

Sources that contradict themselves:
- US 2023/0248655 Example I (F0060):
  - The tableting blend is stated as 6 kg, but its lines add up to 6.645 kg.
  - At 200 mg/g, 3.6 kg of extrudate gives 54 mg or 60 mg per 500 mg tablet, depending on which blend weight is used. Neither is a marketed strength.
  - The weighed premix ratio is 1 : 3.32, not the stated 1 : 3.75.
  - The dissolution criterion names the other compound (FIa-F).
- US 2023/0381109 Example 1 (F0042): the lines add up to 350.1 mg, but the stated total is 350.0 mg. Example 2, used here, adds up.
- AYU 2015; 36: 318 (F0045): the selected blend F3 has no Mg stearate or glidant in Table 1 but two crospovidone rows. The table is headed "each 750 mg" while every column totals 1,000 mg.
- EP 3 556 357 B1 (F0058): 720 mg holds exactly 180 mg only if the tablet is 100 % extrudate, yet the text says lubricants were added. No lubricant amount is given.
- US 2025/0161302 Table 1 (F0052): the 15 mg column adds up to 480.1 mg, but the stated core is 480.0 mg (a footnote blames rounding).
- EP 2 263 657 Example 4 (F0054): the Eudragit L30D-55 line does not say whether it is dispersion or dry polymer. The totals add up only if it is dry polymer (9.6 mg would be the solids if it were dispersion).
- EP 3 275 433 (F0059): the particle sizes are printed in mm (Dv0.5 below 87.23 mm), which must be µm.
- Indian J Pharm Sci 2010 (F0041): the test called content uniformity is an assay of 10 pooled tablets, so it gives no individual results.
