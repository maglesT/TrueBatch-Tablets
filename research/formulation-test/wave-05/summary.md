# Wave 5 summary (F0401-F0500)

Sources found first by one paced source finder, mapped offline. Formulations with a usable source: **66** of 100.
NO SOURCE: **34** — F0403, F0405, F0408-F0411, F0416, F0419, F0426, F0431, F0435, F0441, F0444-F0448, F0452,
F0455-F0457, F0462, F0464, F0467, F0469, F0470, F0477, F0479, F0484, F0488, F0493, F0497-F0499.

| Checks mapped | FITS | FITS WITH SETTING | NEW SETTING | GAP | Fit (no new setting or gap) |
|---|---|---|---|---|---|
| 8642 | 8375 | 263 | 4 | 0 | 99.95 % |

## New settings (none truly new; no gaps)

- **T22** (variant; F0418): predicted particle-size distribution of a mix of API lots — mass-weighted cumulative %
  undersize of each lot's laser-diffraction table, then D0.5 / D0.9 by interpolation.
- **T26** (variant; F0450): mixing extract lots to one marker (3.0 % rosavin) must show and check the other marker
  (salidroside ≥ 1 %) and refuse the step when it is out of limits.
- **Units** (F0476): US gallon (an imperial gallon is 20 % larger) and cubic feet per minute (cfm).

## Safety rules (calculation checks for the master; not GMP rules)

- **T26 must refuse properties that do not mix by mass** (F0418): D50/D90, hardness, pH (here particle size decides
  bioavailability); use the T22 mix prediction instead.
- **Target tablet weight from what was charged, not what was recovered** (F0412, F0414): dry solids charged at the
  granule's measured LOD ÷ theoretical count; T15 rescaling only for losses that change the composition (a 3 % dust
  loss otherwise gives tablets 3 % low).
- **Drug layer end point = drug actually deposited** (F0438), not the amount sprayed.
- **Salt-labelled, base-assayed API** (F0434, desmopressin acetate): the acetate-to-base factor is required; C5 must not
  refuse it as an "as parent" double count (extends wave 1's hydrate-labelled rule to salts).
- **Mixing to one marker can push the other out** (F0450).
- **An excipient ratio can set exposure** (F0494, mirabegron PEO:PEG: Cmax 56-173 %): check the ratio of the quantities
  actually weighed.
- **A label claim made from several salts** (F0487, 20 mEq K from three salts): check the claim as the sum.
- **API particle size and surface area need an upper and a lower limit** (F0490: Cmax 67.5-130 %).
- **Removed processing aids** (F0476, polyethylene rinsed out): flagged "removed" so content, yield and reconciliation
  use only retained solids (otherwise about 12.5 % too much drug).
- **Lubricant choice decides stability of the dose** (F0458): the exact lubricant is checked (C4) at dispensing.
- Reminders of known rules with their size: 3D-printing melt assay (F0421), hydrate + LOD (F0424: +9 %), coat line among
  core lines (F0423), triturate read as pure drug (F0422: 10×), crossed blends for one strength (F0433: −20/+25 %),
  mesylate read as base (F0430: +14.8 %), dry-basis charcoal (F0436), premix order (F0425).
