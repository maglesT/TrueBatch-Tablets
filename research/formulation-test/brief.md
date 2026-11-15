# Task for the lead session: test the TrueBatch Tablets templates on 1,000 more tablet formulations

From the owner (maglesT), 15 November 2026. Please run this as a multi-agent piece of work.

## Background (read first)

TrueBatch Tablets is the owner's new, thin batch record product for tablet manufacturing (see the earlier
"TrueBatch Tablets: owner decisions" note). It has NO formula language. Every calculation and check in a master
batch record is one of a fixed set of about 42 TEMPLATES (small pure functions) that the person building the
master only picks and fills in. The owner wants to know that this fixed set really covers every kind of tablet.

So far 205 real tablet formulations (patents, WHO/EMA reports, articles) have been mapped onto the templates,
about 9,000 calculations and checks in total:

| Round | Formulations | Checks | Fit | New templates found |
|---|---|---|---|---|
| 1 | 10 | 462 | 87 % | 12 |
| 2 | 40 | 2,174 | 98 % | 5 |
| 3 | 140 | 5,665 | 99.5 % | 1 |
| Owner's patents | 15 | 691 | 99.9 % | 0 |

The owner now wants **1,000 MORE tablet formulations, with NO repeats and a LOT of variation**, to make the
template set robust.

## The templates to test (version 2 + round-3 additions)

# TrueBatch Tablets: calculation and check templates, version 1 (v0 plus the gaps found in the first 10 patented formulations)

The person who builds a master batch record never types a formula. They pick a template, pick its inputs
from lists (a value recorded at an earlier step, a quantity from the formula, a lot's assay or LOD from the
material system, a constant they type such as a limit), and type the limits. Under the templates there is only
GMP maths: exact decimals, unit conversion, pharmacopoeia rounding at limits, and a record of each input's source.

## Calculations

| ID | Template | What it computes | Typical use |
|---|---|---|---|
| T1 | Net weight | gross − tare | every weighing |
| T2 | Total | sum of several values | total of containers, total granule weight |
| T3 | % of target (yield) | actual ÷ theoretical × 100 | stage yield, granule yield |
| T4 | Accountability and unaccounted | (output + samples + rejects + waste) ÷ input × 100; input − all parts | reconciliation at each stage |
| T5 | % change | (after − before) ÷ before × 100 (gain) or (before − after) ÷ before × 100 (loss) | coating weight gain, loss on drying by weight |
| T6 | Ratio and powder indices | a ÷ b; Carr index (tapped − bulk) ÷ tapped × 100; Hausner tapped ÷ bulk | bulk/tapped density, flow |
| T7 | Statistics of readings | mean, SD, % RSD, min, max, count of a series of readings | tablet weights, hardness, thickness, friability inputs |
| T8 | Batch scaling | quantity per tablet × number of tablets; or % w/w × batch weight | dispensing quantities from the formula |
| T9 | Potency-adjusted quantity | standard quantity × 100 ÷ assay (as is), with the assay converted from an anhydrous / dried basis using water or LOD | API dispensing |
| T10 | Compensating excipient | standard filler − (adjusted API − standard API), refused if negative; option: spread over two or more fillers in a fixed ratio | keeps the batch weight constant |
| T11 | Salt / base factor | quantity of base × (molecular weight salt ÷ molecular weight base) | API given as base, weighed as salt |
| T12 | Quantity from dry basis | dry quantity × 100 ÷ (100 − LOD) | formula written on a dry basis |
| T13 | Duration and hold time | end − start, compared with a maximum or minimum | mixing time, drying time, hold times |
| T14 | Content uniformity acceptance value | the pharmacopoeia's AV from the individual results; option: by weight variation (each tablet's content estimated from its weight × assay ÷ mean weight) where the pharmacopoeia allows it | content uniformity |
| T15 | Re-scale to actual yield | formula quantity × actual intermediate weight ÷ theoretical intermediate weight | lubricant / extra-granular materials on the real granule weight |
| T16 | Overage | quantity × (100 + overage %) ÷ 100, after any potency adjustment, on one material or one portion; shown in reconciliation | vitamins, +1 % API, solution losses |
| T17 | Liquid make-up | from the dry components, overage, target % solids and any liquid ingredient's own solids: total solids, total liquid, water/solvent to add; refused if negative | coating suspension, binder solution |
| T18 | Content-adjusted quantity (any material) | quantity × 100 ÷ content %, the content from the lot's certificate (assay, % solids, % elemental, marker content) | polymer dispersions at 30 % solids, lanthanum by lot, extracts |
| T19 | Split into portions | a total split into portions (as % or fixed), the last portion = what is left; checks the parts add up; refused if a remainder is negative | geometric dilution, intra/extra-granular disintegrant, solution vs dry-mix portions |
| T20 | Multi-lot quantity | the material weighed from two or more lots with different assays: pure content of lot A = weighed × assay ÷ 100; the rest from lot B at lot B's assay; the total feeds T10 | API from part lots |
| T21 | Lesser / greater of values | the smaller or larger of several values (computed or recorded) | expected bilayer tablets = the smaller of the two layer counts |
| T22 | Sieve analysis | per-sieve % retained, cumulative %, % fines, recovery check | milled ribbons, granule size |

## Checks (applied to any value or result)

| ID | Template | What it checks |
|---|---|---|
| C1 | Within limits | value inside low–high (or only low / only high), with the pharmacopoeia's rounding; alert and action tiers allowed |
| C2 | Count of readings | the number of readings is what the step asks (e.g. 20 tablets) |
| C4 | Observation | a yes/no (or from a fixed list) answer, per unit or per step, that can trigger F3 (e.g. sieve intact, solution clear, no sticking, right tooling fitted) |
| C5 | Same basis (safety rule, built into T9 + T11) | a salt/hydrate factor and an assay/water/LOD correction are on the same basis: if the molecular weight used is the hydrate's, no further water correction; refused otherwise (double counting gave about 6.7 % too much pantoprazole) |
| C6 | Staged test | a pharmacopoeia test in stages across two or more sets of results (disintegration retest 6 + 12 tablets; content uniformity L1/L2; dissolution S1-S3 / L1-L3; enteric acid stage then buffer stage) |
| C3 | All individual values | each individual reading inside its limits, plus how many may be outside (e.g. weight variation: not more than 2 outside ±5 %, none outside ±10 %) |

## Step flow choices

| ID | Template | Example |
|---|---|---|
| F1 | Steps in order | the normal case |
| F2 | Repeat until | dry and test LOD again until LOD ≤ 2.0 %, at most N times |
| F3 | If a result is out of limits | stop and raise a deviation, or go to a defined corrective step |
| F4 | Optional step chosen with a reason | e.g. extra sieving if lumps are seen |
| F5 | Hold for QA | the batch waits until QA releases a hold point |
| F6 | Periodic check | repeat a set of checks every N minutes or N tablets until the stage ends, recording each round; a missed round is flagged | compression IPC every 30 minutes, room RH, spray rate |
| F7 | Sub-batches | the same steps repeated for N sub-batches, each with its own records, then combined (T2, T4) | granulation in 9 sub-lots |

# Templates version 2 = version 1 (templates-v1.md) + these changes from round 2 (40 formulations)

## New templates
| ID | Template | What it does |
|---|---|---|
| T23 | Compact strength and solid fraction | tensile strength = 2F ÷ (π × D × T) from breaking force, diameter, thickness (shape setting); apparent density, solid fraction, porosity, with true density from the material record; ribbons by envelope density |
| T24 | Extruder specific mechanical energy (optional) | SME kWh/kg from motor power, torque %, screw speed ÷ max speed, efficiency, feed rate |
| T25 | Absolute humidity (optional) | g/kg from % RH and temperature, for limits written in g/kg |
| C7 | Sampling plan by lot size (AQL) | from the actual lot size, inspection level and AQL per defect class (ISO 2859-1 / ANSI Z1.4 single, normal): code letter, sample size, accept/reject numbers; feeds C2, C3, F3 |
| F8 | Diversion window (continuous lines) | from an excursion's start/end and the line's residence-time delays and rate: divert-from/to times and quantity; reverse: which lots were in the line in a window |

## New settings on existing templates
- T1 is named "Difference" (gross − tare is its common case).
- T5: weight gain on each layer's own starting weight; loss mode.
- T6: log10 of a ratio (log reduction of viable counts).
- T7 / C3: a per-unit value from two readings on the same unit (e.g. top minus bottom wall); C3 limits as ± % of the series mean.
- T8: rate × time (continuous lines); % w/w mode.
- T10: several adjusted materials into one filler (sum of excesses, + or −, refused if negative); and one excess spread over several fillers in a ratio.
- T11: any two named forms (salt ↔ base, salt ↔ other salt, molar factor between species); "drug molecules per salt formula unit" (default 1; hemifumarate, calcium salts = 2).
- T12: reverse direction (dry weight = as-is × (100 − LOD) ÷ 100).
- T13: time counted only while a value read in F6 rounds is inside limits (curing).
- T14: weight-variation option REFUSED for coated tablets other than film-coated (safety rule); large-sample (large N) option; "individual results only" for drug-in-coat / pellet tablets.
- T17: % w/v made up to a final volume, liquids by volume via density.
- T18: content in units per mass (IU/g, activity units/mg, cfu/g) with the target in the same unit; content from an in-process result of the same batch, not only a CoA; the master states whether a formula quantity is wet or dry.
- T22: median size (d50) by interpolation.
- F2: stop only when ALL named checks pass; high maximum (20-40 rounds, sugar coating).
- F7: N cycles on the same lot (no split, no combine).
- Inputs may be picked from the equipment record (balance minimum weight, punch face area).
- Preparation stages (binder solution, coating suspension) may run alongside other stages and must finish before the stage that uses them.

### Round-3 additions (treat as already existing, not as new findings)
- T26 Mix to a target: quantity of a donor lot to add = mass A × (t − a) ÷ (b − t); refused unless b is beyond t.
- C1 option: limits as ± % (or ± absolute) of a value computed earlier in the same batch.
- C5 extended (safety): potency stated "as parent/base" (µg parent per mg, e.g. azithromycin dihydrate,
  cefuroxime axetil, faropenem sodium, amoxicillin trihydrate) or "as element" (% Ca, % Zn) refuses a T11 salt
  factor in the same chain.
- T9 bases: anhydrous and solvent-free; ignited (loss on ignition).
- T5 base option: the layer's own start, the final weight, or a named earlier stage (e.g. uncoated core).
- Repeat-until "no further change" (compare with the previous round, absolute or %).
- T6 option: angle of repose. Per-area coat dosing (mg/cm² × tablet surface area from the tooling record).
- Per-unit value from any number of readings on one unit (loss of mass on splitting).
- T8 option: product of two or three readings. T8 "% of" may use any recorded weight as its base.
- Units added: Strong-Cobb, rad/min, kgf, kgf/cm².

## What to do

### Step 1. Make the list of 1,000 (no repeats, lots of variation)
- Tablets only, human medicines only, really marketed as tablets where possible.
- Must NOT repeat any API + tablet type already tested (list below). No API more than twice in the 1,000, and
  then the two must differ in tablet type or release type.
- Spread across ALL of these axes and report the counts per axis:
  - therapeutic area (every major area, plus vitamins/minerals, OTC, herbal/Ayurvedic, rare diseases);
  - dose (sub-microgram to ≥ 1 g);
  - API form (free base/acid, salts incl. 2 molecules per salt unit, hydrates, solvates, esters/prodrugs,
    cocrystals, amorphous dispersions, elements/minerals, extracts with markers, IU/CFU/activity potency,
    peptides);
  - process (direct compression; wet granulation high-shear / fluid-bed / single-pot / solvent / steam / foam /
    MADG / melt; roller compaction / slugging; extrusion; spray drying; pellets compressed; drug layering;
    3D printing; moulding; freeze-drying; continuous lines);
  - release (IR, ER hydrophilic/hydrophobic matrix, ER membrane, osmotic, enteric/DR, colon, pulsatile,
    gastroretentive, multiparticulate, bilayer/trilayer/press-coated, IR + ER);
  - tablet type (film-coated, sugar-coated, uncoated, scored/functional score, chewable, ODT, dispersible,
    soluble, effervescent, sublingual, buccal, lozenge, mini-tablet, printed/polished);
  - combinations (1, 2, 3, 4+ APIs, incompatible APIs);
  - special handling (moisture, light, oxygen, potent/cytotoxic, hormone, beta-lactam, controlled substance,
    narrow therapeutic index, paediatric, geriatric).
- Split into 10 waves of 100, each wave spread over all axes. Check with a script that nothing repeats.

### Step 2. For each formulation
1. Find a real source with the formula (mg per tablet or % w/w) AND the process: a patent example (Google
   Patents, the EPO publication server data.epo.org, WIPO Patentscope, patentimages PDFs), a WHO
   prequalification public assessment report, an EMA/FDA public document, or a peer-reviewed article. Give the
   number/reference and URL. If part of the process is missing, use standard practice and SAY which parts.
   Never invent a source or a number. If nothing usable is found, mark it "NO SOURCE" and do not count it.
2. Outline the master batch record a plant would run (realistic commercial batch size): every calculation,
   check and decision an Indian / EU / US plant records (dispensing with potency/assay/LOD/water adjustment,
   salt factors, compensating filler, LOD, densities, blend uniformity, weight, hardness, thickness,
   friability, disintegration, coating solution and weight gain, yields and reconciliation, hold times,
   mixing/drying times, room conditions, repeats).
3. Map each one to a template: FITS / FITS WITH SETTING (name the setting) / NEW SETTING (describe it) /
   GAP (no template does it: describe the new template; do not stretch a template to make it fit).
4. Keep each formulation short: heading, source line, 3-6 line formula summary, then ONLY the non-FITS rows,
   then the counts.
- Paraphrase patents and pharmacopoeias; never paste more than a short phrase.

### Step 3. Report after EACH wave of 100 (to the owner, in plain short English)
- counted / FITS / FITS WITH SETTING / NEW SETTING / GAP, and the number of NO SOURCE;
- every NEW SETTING and GAP, merged, each marked "truly new" or "variant of <template>";
- any new SAFETY rule (a case where a wrong choice could over- or under-dose, like the hydrate double count or
  the "as parent" potency);
- patents that contradict themselves (useful for TrueBatch's master check).
- The owner may stop after any wave if new findings have dried up.

### Where to put the results
- Push them to the public repo maglesT/TrueBatch-Tablets on a branch `research/formulation-test`, folder
  `research/formulation-test/` (one file per wave plus a running summary). Do not merge to main without the
  owner's yes. Public repo: no secrets, no server addresses, no real customer data.
- Send the per-wave summary to the owner.

## Already tested (do NOT repeat these API + tablet-type combinations)

Round 1: imatinib mesylate wet-granulation film-coated; levothyroxine sodium low-dose DC; valsartan roller
compaction; quetiapine fumarate ER HPMC matrix; pantoprazole sodium seal + enteric; telmisartan + HCTZ bilayer;
ticagrelor ODT; alendronate effervescent; lanthanum carbonate chewable; tacrolimus melt granulation.

Round 2: gemcabene calcium fluid-bed IR; ivermectin/pyrantel solvent granulation (veterinary); rucaparib slugging;
quinolinone sugar-coated; multivitamin press-coated with organic film coat; acyclovir dispersible; valsartan +
HCTZ + amlodipine FDC; calcium carbonate + D3 chewable; multivitamin/multimineral; red vine leaf extract;
glipizide osmotic; nifedipine press-coated ER; diltiazem trilayer; oxycodone wax matrix ER; metoprolol succinate
MUPS; ciprofloxacin floating; prednisone lag-time press-coated; methylphenidate ion-exchange ER chewable;
oxycodone PEO abuse-deterrent; lopinavir/ritonavir HME; buprenorphine/naloxone sublingual; miconazole buccal;
paracetamol ODT coated crystals; pravastatin oral lyophilisate; aliskiren mini-tablets; metformin soluble;
nicotine lozenge; montelukast paediatric chewable; ivacaftor spray-dried dispersion; fenofibrate nanocrystal;
aspirin low-RH enteric; nifedipine light-protected; methotrexate cytotoxic; drospirenone + ethinylestradiol;
amoxicillin + clavulanate; Lactobacillus GG probiotic; pancreatin enzyme; semaglutide + SNAC; tramadol-celecoxib
cocrystal; tramadol controlled-release; Takeda printed film-coated; ivacaftor colour coat + wax; vitamin C
effervescent; Mg/Al hydroxide + cimetidine chewable antacid; aspirin 75 mg enteric; sitagliptin on metformin ER;
saxagliptin active coat; lansoprazole ODT pellets; deferasirox dispersible; continuous wet granulation line.

Round 3 (by planned group; most were done, a few had no source):
G01 Cardiovascular (16): 51 amlodipine besylate direct compression; 52 atenolol wet granulation; 53 losartan potassium film-coated; 54 rosuvastatin calcium film-coated; 55 clopidogrel bisulfate (moisture-sensitive); 56 ramipril (stability, low dose); 57 carvedilol; 58 bisoprolol fumarate low dose; 59 warfarin sodium (narrow therapeutic index, low dose); 60 digoxin (very low dose); 61 nebivolol; 62 ivabradine; 63 ranolazine ER; 64 isosorbide mononitrate ER; 65 atorvastatin calcium + ezetimibe FDC; 66 rivaroxaban film-coated.
G02 Diabetes / metabolic / bone (16): 67 glimepiride low dose; 68 gliclazide modified release; 69 pioglitazone HCl; 70 vildagliptin + metformin FDC; 71 linagliptin; 72 dapagliflozin propanediol (solvate); 73 empagliflozin; 74 sitagliptin phosphate monohydrate; 75 glibenclamide micronised; 76 acarbose; 77 voglibose ODT; 78 liothyronine; 79 risedronate delayed release; 80 febuxostat; 81 allopurinol high dose; 82 cinacalcet.
G03 Anti-infectives (16): 83 levofloxacin hemihydrate; 84 azithromycin dihydrate film-coated; 85 clarithromycin ER; 86 cefuroxime axetil (cephalosporin); 87 cefixime dispersible; 88 linezolid; 89 fluconazole; 90 metronidazole high dose; 91 albendazole chewable; 92 rifampicin + isoniazid + pyrazinamide + ethambutol 4-FDC; 93 valacyclovir HCl; 94 tenofovir + lamivudine + efavirenz FDC; 95 dolutegravir sodium; 96 hydroxychloroquine sulfate; 97 nitazoxanide; 98 faropenem or another penem (beta-lactam).
G04 CNS (16): 99 sertraline HCl; 100 escitalopram oxalate; 101 olanzapine ODT; 102 risperidone low dose; 103 aripiprazole; 104 levetiracetam high-dose film-coated; 105 lamotrigine dispersible/chewable; 106 carbamazepine controlled release; 107 divalproex sodium ER (hygroscopic); 108 lithium carbonate ER; 109 zolpidem tartrate (controlled substance); 110 alprazolam low dose (controlled, content uniformity); 111 donepezil; 112 pregabalin ER tablet; 113 quetiapine IR; 114 topiramate.
G05 GI / respiratory / allergy / pain (16): 115 famotidine; 116 rabeprazole sodium enteric; 117 domperidone; 118 ondansetron ODT; 119 mesalamine delayed release high dose; 120 montelukast sodium film-coated (adult); 121 cetirizine; 122 fexofenadine; 123 ibuprofen 400 film-coated; 124 diclofenac sodium enteric or SR; 125 paracetamol 650 ER bilayer; 126 aceclofenac; 127 etoricoxib; 128 tramadol + paracetamol FDC; 129 itopride; 130 ursodeoxycholic acid.
G06 Oncology / immunology / hormones / urology (15): 131 tamoxifen citrate; 132 letrozole; 133 anastrozole; 134 capecitabine high dose; 135 erlotinib; 136 abiraterone acetate; 137 mycophenolate mofetil; 138 azathioprine; 139 prednisolone; 140 dexamethasone low dose; 141 finasteride; 142 tadalafil; 143 sildenafil citrate; 144 misoprostol (very low dose, moisture); 145 tofacitinib.
G07 Vitamins / minerals / OTC / herbal / Ayurvedic (15): 146 ferrous ascorbate or ferrous sulfate + folic acid; 147 folic acid 5 mg; 148 vitamin B complex; 149 calcium citrate + vitamin D; 150 zinc sulfate dispersible (paediatric); 151 potassium chloride ER; 152 sodium bicarbonate; 153 magnesium oxide; 154 glucosamine; 155 ashwagandha (Withania) extract tablet; 156 curcumin tablet; 157 methylcobalamin sublingual; 158 vitamin D3 60,000 IU chewable; 159 simethicone chewable; 160 an Ayurvedic polyherbal classical tablet (vati/gutika) or nearest real example.
G08 Process variants (15): 161 single-pot granulation with vacuum or microwave drying; 162 steam granulation; 163 foam granulation; 164 moisture-activated dry granulation (MADG); 165 twin-screw wet granulation (batch mode); 166 fluid-bed spray granulation from an API solution; 167 extrusion-spheronisation pellets compressed into tablets; 168 Wurster drug layering then compression; 169 dry powder coating of tablets; 170 direct compression with a co-processed excipient; 171 low-dose API sprayed onto a carrier (spray-on); 172 dual granulation of two incompatible APIs; 173 3D-printed tablet (e.g. levetiracetam ZipDose) or nearest; 174 moulded tablet triturates; 175 compression with external (punch-face) lubrication.
G09 Release mechanisms (15): 176 colon-targeted pH + time tablet; 177 swellable/expandable gastroretentive; 178 ethylcellulose-coated ER tablet (barrier membrane); 179 elementary osmotic pump (monolithic); 180 delayed + extended release combination (e.g. mesalamine MMX); 181 IR + DR bilayer; 182 soluble effervescent analgesic (aspirin + paracetamol + caffeine); 183 multilayer ER with drug-free barrier layers; 184 ER matrix with pH-independent release (buffered); 185 ER tablet with an IR loading-dose coat; 186 gastro-resistant tablet with a film-coated outer colour coat and printing; 187 lipid-based (self-emulsifying) solid tablet; 188 cyclodextrin complex tablet; 189 amorphous drug on mesoporous silica tablet; 190 enteric-coated mini-tablets in a sachet or tablet form.
G10 Paediatric / global health / special (15): 191 abacavir + lamivudine dispersible scored; 192 artemether + lumefantrine dispersible; 193 artesunate + amodiaquine FDC; 194 arpraziquantel paediatric ODT; 195 scored tablet with a functional score (subdivision test); 196 potassium iodide tablet; 197 phenytoin chewable (infatabs); 198 dispersible amoxicillin (beta-lactam, paediatric); 199 ORS-like or electrolyte effervescent tablet; 200 deferiprone; 201 hydroxyurea dispersible; 202 low-dose API by micronisation and direct compression; 203 FDC with incompatible APIs separated by a layer; 204 tablet packed with desiccant requirement (very hygroscopic); 205 orphan or high-potency small-batch tablet (e.g. a few thousand tablets).

Owner-supplied patents: glibenclamide micronised DC; liothyronine sodium ER; glimepiride micronised wet
granulation; acarbose DC; alprazolam ER DC; topiramate DC film-coated; prednisolone sodium phosphate ODT beads;
calcium carbonate + citrate + D3 ER; zinc sulphate dispersible; methylcobalamin sublingual; vitamin D3 1,000 IU
chewable; turmeric herbal tablet; aceclofenac film-coated; itopride dispersible; ursodeoxycholic acid
gastro-resistant.
