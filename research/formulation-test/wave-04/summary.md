# Wave 4 summary (F0301-F0400)

Sources found first by one paced source finder, mapped offline. Formulations with a usable source: **72** of 100.
NO SOURCE: **28** — F0302, F0307, F0312, F0317, F0323, F0325, F0328, F0332, F0333, F0336, F0338, F0341, F0347, F0353,
F0358, F0361, F0370, F0372, F0376, F0380, F0381, F0384, F0386, F0390, F0392, F0396, F0398, F0400.

| Checks mapped | FITS | FITS WITH SETTING | NEW SETTING | GAP | Fit (no new setting or gap) |
|---|---|---|---|---|---|
| 8283 | 7988 | 294 | 1 | 0 | 99.99 % |

## New settings (none truly new; no gaps)

- **T11** (variant: units; F0393): label strength in mEq. mmol of ion = mEq ÷ ion charge; mg of salt = mmol of ion ÷ ions
  per formula unit × MW (10 mEq K = 3.333 mmol potassium citrate monohydrate = 1,081 mg). Needs mEq with the ion's charge.

## Safety rules (calculation checks for the master; not GMP rules)

- **mEq read as mmol of salt** (F0393): 10 mEq K becomes 3,244 mg instead of 1,081 mg (3× the potassium); T11 takes the
  ion's charge and ions per formula unit from the material record.
- **Batch column written for two batch sizes** (F0303) and **batch column disagreeing with the per-unit formula**
  (F0388: −91 %): every batch quantity comes from T8 (per-unit × one batch count); a typed batch quantity that disagrees
  is refused.
- **Salt name that does not fix the stoichiometry** (F0331, "sulfate" for a bisulfate: about −8 %): drug molecules per
  salt unit and the salt's molecular weight come from the lot's material record, never from the name.
- **Liquid made in excess with only a set part sprayed** (F0339): the master states the amount to apply per charge and
  stops at that net weight; leftover liquid goes to the API reconciliation (spraying all: +4.5 % drug, +14 % coat).
- **Order of addition decides the dose** (F0318: 37 % of the drug converted in the wrong order): such steps stay
  separate and cannot be merged or reordered.
- **Homeopathic decimal steps** (F0352): each 1:10 trituration step is its own recorded step; one missed step leaves 10×
  the (possibly toxic) starting material.
- **Enteric polymer per tablet must match the suspension made** (F0360).
- Cocrystal basis (F0373: +51 % if read as the parent), hydrate not named (F0368: ±11 %), stated strength against the
  lines (F0374: +11 %), dose per unit = fill volume × concentration (F0377), grams under an mg header (F0364: 1,000×),
  % of the coated tablet applied to the core (F0367), a lubricant added without re-deriving the weight (F0375), one blend
  for two strengths (F0366, F0385), salt-equivalent label (F0371: +7.5 %), and reminders of known rules.

Self-contradicting sources: listed per formulation in the part files (common patterns again: batch and per-unit figures
disagree, unit errors, salt/base not stated, % of the wrong stage).
