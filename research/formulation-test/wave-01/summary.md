# Wave 1 summary (F0001-F0100)

Formulations with a usable source: **75** of 100; NO SOURCE: **25** (F0009, F0010, F0015, F0016, F0029, F0034, F0035, F0061, F0066, F0068, F0070, F0072, F0074, F0080, F0043, F0044, F0046, F0048, F0050, F0056, F0081, F0085, F0090, F0092, F0094).

| Checks mapped | FITS | FITS WITH SETTING | NEW SETTING | GAP | Fit (no new setting or gap) |
|---|---|---|---|---|---|
| 5672 | 5427 | 234 | 11 | 0 | 99.8 % |

Detail per formulation: `part-1.md` to `part-5.md`. Part 5's agent returned 1008 as its formulation count; corrected to 15 here (20 rows, 5 NO SOURCE).

## New settings (none truly new; no gaps)

- **T26** (variant of T26; F0008): Mix to a target by % v/v: diluting 95 % ethanol to 75 % for a binder needs the alcohol-strength (v/v to w/w) table because volumes contract. A straight mass balance gives the wrong strength.
- **T11** (variant of T11; F0018): Molar factor using a lot-specific average molecular weight from the CoA. The average MW of HP-beta-cyclodextrin varies with its degree of substitution, so the complexing-agent quantity cannot use a fixed MW constant.
- **T26** (variant of T26 (and C5); F0027): Basis check on mix-to-target: when a racemate lot and an enantiomer lot are mixed to a 3:1 isomer ratio, each lot's isomer fraction must be a fraction of total sotalol HCl on the same assay basis (not % w/w of the lot, not base against HCl). Refused otherwise.
- **F6** (variant of F6; F0030): Periodic check whose interval changes during the stage: weigh 30 tablets every 30 min, then every 15 min as the drug-layer target weight nears (or after a set time or value).
- **T25** (variant of T25; F0033): Absolute humidity per volume of air (g/m3) as well as g/kg: fluid-bed inlet air humidity limits of 6-9 g/m3, read from the air handler or computed from RH, temperature and pressure.
- **T23** (variant of T23; F0039): Tablet strength as breaking force per fracture area, F / (D x H) in N/mm2 (limit over 0.8 N/mm2), not the 2F/(pi D T) tensile formula.
- **F4** (variant of F4; F0040): A step the master includes or skips by a rule on a recorded value (the Mg stearate bag premix only when the batch is at most 50 kg), with no operator choice or reason needed.
- **T11** (variant of T11 (and C5); F0062): Some dossiers give the salt factor as a number, such as 1.177 for anhydrous capmatinib dihydrochloride. T11 should check that number against the molecular weights of the form actually weighed (the marketed form is the monohydrate, factor 1.220) and refuse the step if they differ beyond rounding.
- **C1** (variant of unit list (round-3 unit additions, used by C1); F0058): Compression pressure recorded in psi (lbf/in2), e.g. 1,500 psi on a hydraulic press. The unit list has kgf/cm2 but not psi. Add psi with its conversion to kN and MPa.
- **T6** (variant of T6; F0087): Whole containers: containers needed = amount required ÷ amount per container, rounded UP to whole containers (vials of reconstituted allergen extract), with the excess shown and how it is handled (partial vial weighed or batch scaled).
- **C5 / T11** (variant of C5; F0088): Hydrate-labelled API: the label names the hydrate itself (procaterol hydrochloride hemihydrate) and the CoA assay is anhydrous. A hydrate-to-anhydrous factor (MW ratio below 1) followed by a water correction is valid and must not be refused as a double count. It is refused only when the factor runs the other way.

## Safety rules

- Double adjustment (F0008): the source sets the compression weight from the granule assay (T18 with in-process content). If the API was already potency-adjusted at dispensing (T9), adjusting again doses twice. Refuse it, or limit it to a stated band, when T9 was applied to the same API.
- Content of an in-house complex or solid dispersion (F0018, F0017): take it from the intermediate's measured drug content, never from the preparation ratio. The theoretical 1:6 molar content (about 6 %) against the measured 14.9 % gives about 2.3 times the dose.
- Mixed bases in one formula (F0002): when one line is stated as base and the other lines as weighed mg, the theoretical tablet weight must be the T2 sum of the weighed (salt-basis) quantities. The literal reading gives 103.9 mg against 106.4 mg weighed, so tablets about 2.3 % low in drug.
- Isomer-ratio mixing (F0027, sotalol 3:1): the l-isomer carries the beta-blockade. If T26 uses a lot's isomer % of lot weight (as-is), or mixes a base basis with an HCl assay, the ratio drifts and the beta-blocking dose changes. T26 must refuse inputs on different bases, as C5 does for T9 + T11.
- Formula ranges (F0036, diphenoxylate/atropine): when a source gives each excipient as a +/- 5 % range, the master fixes the target quantity. The range is only the allowed limit for the T10 compensation, never an operator choice.
- F0062 capmatinib: a typed salt factor of 1.177 (anhydrous dihydrochloride) used on a monohydrate lot gives about 3.5 % too little drug, unless the assay is on the anhydrous basis with a water correction. T11 must refuse a typed factor that does not match the named forms.
- F0078 fluoxetine (reminder, already covered by C5/T11 when the master states the basis): EP 0 693 281 examples use 20 or 20.1 mg of the hydrochloride (about 18 mg base). Carried into a 20 mg-as-base product, this underdoses by about 10 %.
- Label basis by market (F0041, F0057): the same tablet's strength is on the salt in one market and on the base in another. Prochlorperazine 5 mg is the maleate in UK/India but base-equivalent in the US (factor 1.62). Pramipexole 0.75 mg is the salt monohydrate in the US but 0.52 mg base in the EU (factor 1.43). The master must state the basis of each strength claim per market, so T11 is applied or refused correctly; reusing a master across markets on the wrong basis gives 62 % or 43 % more drug, or that much less.
- Ratios and % in process instructions carry a basis (F0060): the ubrogepant premix ratio of 1:3.75 holds only on the free-base basis; as weighed (trihydrate) it is 1:3.32. Weighing the trihydrate to 1:3.75 would give about 9 % less drug. Any ratio or % involving the API in a step (T6 checks, premix ratios, % loading) must name its basis, the same as T11/C5.
- Herbal raw-equivalent against extract mass (F0045): the guggulu line (416.67 mg) is raw-herb equivalent, but what is weighed is the spray-dried Shuddha Guggulu. The master must state which one the line means and convert with this lot's measured extract ratio (T18 in-process); reading it the wrong way changes the dose by the extract ratio.
- Toxic-conversion process limit (F0049): the realgar drying temperature maximum limits arsenic trioxide formation. It fits C1, but it is a safety-critical limit that must not be widened without QA approval.
- F0088 hydrate-labelled API: reading '50 µg procaterol hydrochloride hydrate' as anhydrous and then correcting for water gives about 2.8 % too much. C5 must allow the correct chain (hydrate to anhydrous factor, then water correction) and refuse the reverse.
- F0098 zinc sulfate with no hydrate named: anhydrous, monohydrate and heptahydrate differ by up to about 44 % in zinc. Already covered by T18 (% Zn from the lot) and C5 'as element' if the master names the form; recorded as a reminder.
- F0096 trace-mineral basis: 0.5 mg chromium picolinate is about 62 µg chromium; read as chromium it would be 8 times too much. Covered when the master states the basis (C5 'as element'); a reminder.

## Sources that contradict themselves

- EP 1 459 739 A1 (norfloxacin): the stabiliser is said to be about 50 % w/v of the solvent, 'i.e. 200 mg citric acid in 400 ml water', which is 0.05 % w/v.
- US 8,501,741 B2 Example 14 (levo-prulifloxacin): the solids add up to 183.5 g per 1,000 tablets, plus about 2.6 g HPMC from the binder (about 186 mg per tablet), but the tablet is stated as about 200 mg.
- IN 202241004939 (nirmatrelvir): the % w/w column does not match the mg column and sums to 98.5 %. The 300 mg column total of 940 mg does not match its lines (960 mg). Both strengths get the same 22.5 mg coat although the coat is stated as 3 %. Claim 5 gives a drug:croscarmellose ratio of 1:10 against about 6.7:1 in the example.
- Pharmazie 67:46-53 (2012) (atorvastatin HP-beta-CD complex): entrapment efficiency of 104.3 % for the 1:6 complex. Its 14.9 % drug content fits a 1:6 weight ratio, not the stated 1:6 molar ratio.
- WO 2013/153162 A1 (rilpivirine): the API is stated 'calculated as free base' with no core total, so the core weight is ambiguous (103.9 vs 106.4 mg).
- US 9,566,299 B2 (colesevelam): the Example 5 process uses IPA/dichloromethane but is headed 'aqueous dispersion'.
- Bactrosec 500 mg Module 1 (secnidazole): the weight tolerance '750.00 +/- 5.00' sits in the kg-per-batch column, so its unit is unclear.
- US 6,294,540 B1 (abacavir) Formulation A: 'active ingredient 250' does not say whether it is base or hemisulfate (Formulation D states both).
- EP 1 146 862 B1 (F0039, mesalazine): 2.765 kg of extra talc is dusted on during particle coating, but it is in neither the per-tablet formula (talc 12.67 mg = the 4.435 kg in the suspension only) nor the coated-particle total of 567 mg / 198.45 kg. With it, the coated particles would be about 575 mg.
- CN 105997913 A (F0031, gliquidone): the excipient parts add up to 88.9, but a 25 % drug load at 30 mg leaves 90 mg for excipients, so the tablet is 118.9 mg or 120 mg depending on the reading.
- EP 3 842 035 A1 (F0026, perindopril arginine): 449 g CaCl2.6H2O is stated as 227.3 g CaCl2; by molecular weight it is about 227.5 g (0.07 %, minor).
- US 5,281,421 A (F0022, gemfibrozil): pregelatinised starch 141 g appears in the formula and again as 'blend with 141 g'. It is ambiguous, but a single portion matches the 860 mg tablet.
- CN 105832713 A (F0079): the drug premix is stated as 1,500 g, but its parts (500 g drug + 250 g starch) add up to 750 g. The batch is therefore 4,535 g or 3,785 g, so the tablet weight cannot be fixed.
- US 12,178,814 B2 (F0065): Table 1 names the sweetener sucrose, but the process text says sucralose for the same 8.4 mg per tablet.
- US 4,474,813 A (F0064): the granulating water is listed as '(0.29)' per 750 mg tablet. No unit makes this workable (0.04 % is too little to granulate).
- CN 108125918 B (F0063): the patent says 10 L of suspension makes 100,000 tablets of 5 mg. Working from 10 % solids gives about 10.6 kg, roughly 13 L of ethanol suspension (minor).
- EP 0 693 281 A2 (F0078): the active is 20 or 20.1 mg of fluoxetine hydrochloride, while marketed 20 mg dispersible tablets are 20 mg as base (about 22.4 mg HCl).
- US 2023/0248655 A1 Example I (F0060): the tableting blend is stated as 6 kg, but its lines add up to 6.645 kg. At 200 mg/g the 500 mg tablet would hold 54 or 60 mg (not a marketed strength). The weighed premix ratio is 1:3.32, not the stated 1:3.75. The dissolution criterion names the other compound (FIa-F).
- US 2023/0381109 A1 Example 1 (F0042): the lines add up to 350.1 mg, but the stated total is 350.0 mg.
- AYU 2015;36:318 (F0045): the selected blend F3 has no lubricant or glidant but two crospovidone rows. The table is headed 'each 750 mg' while every column totals 1,000 mg.
- EP 3 556 357 B1 (F0058): 720 mg gives exactly 180 mg API only if the tablet is 100 % extrudate, yet the text says lubricants were added. No lubricant amount is given.
- US 2025/0161302 A1 Table 1 (F0052): the 15 mg column adds up to 480.1 mg, but the stated core is 480.0 mg (rounding footnote).
- EP 2 263 657 A1 Example 4 (F0054): the Eudragit L30D-55 line does not say whether it is dispersion or dry polymer; the totals add up only if it is dry polymer.
- EP 3 275 433 A1 (F0059): the particle sizes are printed in mm (e.g. Dv0.5 below 87.23 mm), which must be micrometres.
- Indian J Pharm Sci 2010;72:130 (F0041): the test called content uniformity is an assay of 10 pooled tablets, so it gives no individual results.
- El-Say et al., Acta Pharm. 2015 (F0082): the listed parts of each mini-tablet add up to about 4.0 mg, but the tablets are said to be 5 mg, and the method adds a lubricant that is not listed.
- CN 105748421 A (F0083): the % of the embodiments add up to about 98 %; the rest (glidant/lubricant) is not given.
- US 5,912,268 A (F0093): a release of 0.260 mg/h for 23.8 h (about 6.2 mg) from a core holding about 5 mg; push-layer ferric oxide is later called ferric chloride; BHT and Mg stearate appear in one composition but not in its granulation recipe.
- DE 25 15 365 C2 (F0098): 100 mg zinc sulfate gives 40 mg Zn (only true if anhydrous) and 125 mg gives 45 mg Zn (only true if monohydrate), for the same named salt.
- CN 119385963 A (F0099): the sugar layers are said to total about 5 %, which leaves out the 3 % colour layer.
- EP 1 990 044 A1 (F0100): Example 2 lists talc with no amount (the other lines still add up to 312.51 mg).
- EP 4 563 147 A1 (F0091): one row of Table 7 has 9 values for 8 formulations.
- WO 2017/182641 A1 and EP 3 397 285 A1 (F0090, not counted): the minimum % of the parts already exceed the stated layer totals.
