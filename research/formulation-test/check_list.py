#!/usr/bin/env python3
"""Check list.csv (the 1,000 formulations for the template-coverage study, Step 1 of brief.md).

Standard library only. Run:  python3 -I check_list.py [path/to/list.csv]

Checks (any failure -> exit code 1):
  1. exactly 1,000 rows, ids F0001..F1000, unique; required columns present; values on the allowed lists
  2. waves 1..10, exactly 100 rows each
  3. no API more than twice in the 1,000. Every API inside a combination counts. Counted twice over:
     (a) normalised name with salt words kept (lower case, aliases such as acetaminophen = paracetamol), and
     (b) the base name with salt / hydrate words removed (stricter: "naproxen" and "naproxen sodium" share a count)
  4. where an API is used twice, the two rows differ in tablet_type or in release
  5. no row repeats an "Already tested" API (or API set) + tablet type from brief.md (data below);
     matched on base names, so a different salt of a tested API in the same tablet type also fails
  6. each wave is spread over every axis: for every axis value used n times, each wave holds at most
     ceil(n/10) + slack and, when n >= 10, at least floor(n/10) - slack (slack = max(1, ceil(n/100)))
Then prints the counts per axis, overall and per wave.
"""
import csv
import math
import re
import sys
from collections import Counter, defaultdict

HERE = __file__.rsplit("/", 1)[0] if "/" in __file__ else "."
PATH = sys.argv[1] if len(sys.argv) > 1 else HERE + "/list.csv"

COLUMNS = ["id", "wave", "api", "tablet_type", "release", "process", "dose", "therapeutic_area",
           "api_form", "n_apis", "special_handling"]

TABLET_TYPES = ["film-coated", "sugar-coated", "uncoated", "scored / functional score", "chewable",
                "orodispersible (ODT)", "dispersible", "soluble", "effervescent", "sublingual", "buccal",
                "lozenge", "mini-tablet", "printed / polished"]
RELEASES = ["IR", "ER hydrophilic matrix", "ER hydrophobic matrix", "ER membrane-coated", "osmotic",
            "enteric / DR", "colon-targeted", "pulsatile", "gastroretentive", "multiparticulate (MUPS)",
            "bilayer", "trilayer", "press-coated", "IR + ER"]
PROCESSES = ["direct compression", "wet granulation high-shear", "wet granulation fluid-bed",
             "wet granulation single-pot", "wet granulation solvent", "steam granulation", "foam granulation",
             "MADG", "melt granulation", "roller compaction", "slugging", "hot-melt extrusion", "spray drying",
             "pellets compressed", "drug layering", "3D printing", "moulding", "freeze-drying",
             "continuous line"]
AREAS = ["cardiovascular", "diabetes / metabolic", "endocrine / hormones", "bone", "women's health",
         "antibacterial", "antiviral", "HIV", "tuberculosis", "antifungal", "antiparasitic / antimalarial",
         "psychiatry", "neurology", "pain / musculoskeletal", "gastrointestinal / hepatic",
         "respiratory / allergy", "oncology", "immunology / rheumatology", "urology", "renal / electrolytes",
         "haematology", "vitamins / minerals", "OTC (throat / cough / antacid)", "herbal / Ayurvedic / homeopathic",
         "rare disease", "dermatology", "ophthalmology"]
FORMS = ["free base / neutral", "free acid", "salt", "salt, 2 drug molecules per salt unit", "hydrate",
         "solvate", "ester / prodrug", "cocrystal / complex", "cyclodextrin complex", "amorphous dispersion",
         "element / mineral", "extract with marker", "IU / CFU / activity potency", "peptide"]
HANDLING = ["none", "moisture", "light", "oxygen", "potent / cytotoxic", "hormone", "beta-lactam",
            "controlled substance", "narrow therapeutic index", "paediatric", "geriatric", "incompatible APIs"]

# ---------------------------------------------------------------- normalisation
ALIASES = {
    "acetaminophen": "paracetamol", "acyclovir": "aciclovir", "valacyclovir": "valaciclovir",
    "mesalamine": "mesalazine", "hydroxyurea": "hydroxycarbamide", "glyburide": "glibenclamide",
    "vitamin d3": "cholecalciferol", "colecalciferol": "cholecalciferol", "vitamin c": "ascorbic acid",
    "albuterol": "salbutamol", "simethicone": "simeticone", "rifampin": "rifampicin",
    "methimazole": "thiamazole", "ursodiol": "ursodeoxycholic acid", "acetylsalicylic acid": "aspirin",
    "turmeric": "curcumin", "curcuma longa": "curcumin", "ashwagandha": "withania somnifera",
    "withania somnifera extract": "withania somnifera", "zinc sulphate": "zinc sulfate",
    "hydrochlorthiazide": "hydrochlorothiazide", "hctz": "hydrochlorothiazide",
    "dexamphetamine": "dexamfetamine", "amphetamine": "amfetamine", "frusemide": "furosemide",
    "lignocaine": "lidocaine", "cephalexin": "cefalexin", "valproic acid": "valproic acid",
}
SALT_WORDS = set("""hydrochloride dihydrochloride tetrahydrochloride hcl hydrobromide sodium disodium potassium
calcium magnesium mesylate mesilate dimesylate besylate besilate maleate dimaleate fumarate hemifumarate
succinate tartrate bitartrate citrate sulfate sulphate bisulfate hyclate phosphate diphosphate acetate bromide
chloride monohydrate dihydrate trihydrate hemihydrate sesquihydrate pentahydrate hexahydrate hydrate anhydrous
tosylate tosilate ditosylate benzoate malate oxalate arginine erbumine tromethamine trometamol meglumine
olamine diolamine lactate pamoate embonate gluconate pidolate l-proline ethanolate choline saccharate
aspartate""".split())
CATION_FIRST = set("""sodium potassium calcium magnesium zinc ferrous ferric iron lithium lanthanum aluminium
aluminum bismuth tripotassium selenium chromium""".split())


def clean(name):
    s = name.lower().replace(" ", " ").strip()
    s = re.sub(r"\s+", " ", s)
    s = s.replace("sulphate", "sulfate")
    return ALIASES.get(s, s)


def base(name):
    s = clean(name)
    head = re.split(r"[ (]", s, maxsplit=1)[0]
    if head in CATION_FIRST:
        return s
    words = [w for w in s.split(" ") if w not in SALT_WORDS]
    b = " ".join(words).strip()
    return ALIASES.get(b, b) if b else s


def split_apis(api):
    """Split on ' + ' outside parentheses."""
    parts, depth, cur, i = [], 0, "", 0
    while i < len(api):
        c = api[i]
        if c == "(":
            depth += 1
        elif c == ")":
            depth -= 1
        if depth == 0 and api.startswith(" + ", i):
            parts.append(cur.strip())
            cur, i = "", i + 3
            continue
        cur += c
        i += 1
    parts.append(cur.strip())
    return [p for p in parts if p]


# ---------------------------------------------------------------- already tested (brief.md)
# (API set, tablet types). Where the brief does not state the tablet type, every type the product is
# commonly made in is listed, so the check errs on the side of refusing.
FC, SC, UC, SCO, CHW, ODT, DT, SOL, EFF, SL, BUC, LOZ, MINI, PRT = TABLET_TYPES
TESTED = [
    # Round 1
    ("imatinib mesylate", [FC]), ("levothyroxine sodium", [UC]), ("valsartan", [FC, UC]),
    ("quetiapine fumarate", [FC]), ("pantoprazole sodium", [FC]),
    ("telmisartan + hydrochlorothiazide", [UC, FC]), ("ticagrelor", [ODT]), ("alendronate sodium", [EFF]),
    ("lanthanum carbonate", [CHW]), ("tacrolimus", [FC, UC]),
    # Round 2
    ("gemcabene calcium", [FC, UC]), ("ivermectin + pyrantel", [UC, CHW]), ("rucaparib", [FC]),
    ("quinolinone", [SC]), ("multivitamin", [FC, SC]), ("aciclovir", [DT]),
    ("valsartan + hydrochlorothiazide + amlodipine", [FC]), ("calcium carbonate + cholecalciferol", [CHW]),
    ("multivitamin + multimineral", [FC]), ("red vine leaf extract", [FC]), ("glipizide", [FC]),
    ("nifedipine", [FC, UC]), ("diltiazem", [FC, UC]), ("oxycodone", [FC, UC]),
    ("metoprolol succinate", [FC]), ("ciprofloxacin", [FC, UC]), ("prednisone", [UC, FC]),
    ("methylphenidate", [CHW]), ("lopinavir + ritonavir", [FC]), ("buprenorphine + naloxone", [SL]),
    ("miconazole", [BUC]), ("paracetamol", [ODT]), ("pravastatin", [ODT]), ("aliskiren", [MINI]),
    ("metformin", [SOL]), ("nicotine", [LOZ]), ("montelukast", [CHW]), ("ivacaftor", [FC]),
    ("fenofibrate", [FC, UC]), ("aspirin", [FC]), ("methotrexate", [UC, FC]),
    ("drospirenone + ethinylestradiol", [FC]), ("amoxicillin + clavulanate", [FC]),
    ("lactobacillus rhamnosus gg", [UC, CHW]), ("pancreatin", [FC]), ("semaglutide", [UC]),
    ("tramadol + celecoxib", [FC]), ("tramadol", [FC, UC]),
    ("magnesium hydroxide + aluminium hydroxide", [CHW]),
    ("magnesium hydroxide + aluminium hydroxide + cimetidine", [CHW]), ("ascorbic acid", [EFF]),
    ("sitagliptin + metformin", [FC]), ("saxagliptin", [FC]), ("saxagliptin + metformin", [FC]),
    ("lansoprazole", [ODT]), ("deferasirox", [DT]),
    # Round 3 (types not stated in the brief: the usual marketed types)
    ("amlodipine besylate", [UC]), ("atenolol", [UC, FC]), ("losartan potassium", [FC]),
    ("rosuvastatin calcium", [FC]), ("clopidogrel bisulfate", [FC]), ("ramipril", [UC]),
    ("carvedilol", [FC, UC]), ("bisoprolol fumarate", [FC, UC]), ("warfarin sodium", [UC]),
    ("digoxin", [UC]), ("nebivolol", [UC]), ("ivabradine", [FC]), ("ranolazine", [FC]),
    ("isosorbide mononitrate", [FC, UC]), ("atorvastatin calcium + ezetimibe", [FC]), ("rivaroxaban", [FC]),
    ("glimepiride", [UC]), ("gliclazide", [UC]), ("pioglitazone hydrochloride", [UC]),
    ("vildagliptin + metformin", [FC]), ("linagliptin", [FC]), ("dapagliflozin", [FC]),
    ("empagliflozin", [FC]), ("sitagliptin phosphate monohydrate", [FC]), ("glibenclamide", [UC]),
    ("acarbose", [UC]), ("voglibose", [ODT]), ("liothyronine", [UC]), ("risedronate", [FC]),
    ("febuxostat", [FC]), ("allopurinol", [UC]), ("cinacalcet", [FC]),
    ("levofloxacin hemihydrate", [FC]), ("azithromycin dihydrate", [FC]), ("clarithromycin", [FC]),
    ("cefuroxime axetil", [FC]), ("cefixime", [DT]), ("linezolid", [FC]), ("fluconazole", [UC, FC]),
    ("metronidazole", [FC, UC]), ("albendazole", [CHW]),
    ("rifampicin + isoniazid + pyrazinamide + ethambutol", [FC]), ("valaciclovir", [FC]),
    ("tenofovir + lamivudine + efavirenz", [FC]), ("dolutegravir sodium", [FC]),
    ("hydroxychloroquine sulfate", [FC]), ("nitazoxanide", [FC]), ("faropenem", [FC]),
    ("sertraline", [FC]), ("escitalopram oxalate", [FC]), ("olanzapine", [ODT]), ("risperidone", [FC]),
    ("aripiprazole", [UC]), ("levetiracetam", [FC, DT, ODT]), ("lamotrigine", [DT, CHW]),
    ("carbamazepine", [FC, UC]), ("divalproex sodium", [FC]), ("lithium carbonate", [FC, UC]),
    ("zolpidem tartrate", [FC]), ("alprazolam", [UC]), ("donepezil", [FC]), ("pregabalin", [FC]),
    ("quetiapine", [FC]), ("topiramate", [FC]), ("famotidine", [FC]), ("rabeprazole sodium", [FC]),
    ("domperidone", [UC, FC]), ("ondansetron", [ODT]), ("mesalazine", [FC]), ("montelukast sodium", [FC]),
    ("cetirizine", [FC]), ("fexofenadine", [FC]), ("ibuprofen", [FC]), ("diclofenac sodium", [FC]),
    ("paracetamol", [FC, UC]), ("aceclofenac", [FC]), ("etoricoxib", [FC]),
    ("tramadol + paracetamol", [FC]), ("itopride", [FC, DT]), ("ursodeoxycholic acid", [FC]),
    ("tamoxifen citrate", [UC, FC]), ("letrozole", [FC]), ("anastrozole", [FC]), ("capecitabine", [FC]),
    ("erlotinib", [FC]), ("abiraterone acetate", [UC, FC]), ("mycophenolate mofetil", [FC]),
    ("azathioprine", [FC, UC]), ("prednisolone", [UC, ODT]), ("dexamethasone", [UC]),
    ("finasteride", [FC]), ("tadalafil", [FC]), ("sildenafil citrate", [FC]), ("misoprostol", [UC]),
    ("tofacitinib", [FC]), ("ferrous ascorbate + folic acid", [FC]), ("ferrous sulfate + folic acid", [FC]),
    ("folic acid", [UC]), ("vitamin b complex", [SC, FC]), ("calcium citrate + cholecalciferol", [FC]),
    ("zinc sulfate", [DT]), ("potassium chloride", [FC, UC]), ("sodium bicarbonate", [UC]),
    ("magnesium oxide", [UC, FC]), ("glucosamine", [FC]), ("withania somnifera", [FC, UC]),
    ("curcumin", [FC, UC]), ("methylcobalamin", [SL]), ("cholecalciferol", [CHW]),
    ("simeticone", [CHW]), ("polyherbal classical vati", [UC]),
    ("aspirin + paracetamol + caffeine", [EFF, SOL]), ("abacavir + lamivudine", [DT]),
    ("artemether + lumefantrine", [DT]), ("artesunate + amodiaquine", [UC, FC]),
    ("arpraziquantel", [ODT, DT]), ("potassium iodide", [UC]), ("phenytoin", [CHW]),
    ("amoxicillin", [DT]), ("deferiprone", [FC]), ("hydroxycarbamide", [DT]),
    # Owner-supplied patents
    ("glibenclamide", [UC]), ("liothyronine sodium", [UC]), ("glimepiride", [UC]), ("acarbose", [UC]),
    ("alprazolam", [UC]), ("topiramate", [FC]), ("prednisolone sodium phosphate", [ODT]),
    ("calcium carbonate + calcium citrate + cholecalciferol", [FC]), ("zinc sulfate", [DT]),
    ("methylcobalamin", [SL]), ("cholecalciferol", [CHW]), ("curcumin", [UC, FC]), ("aceclofenac", [FC]),
    ("itopride", [DT]), ("ursodeoxycholic acid", [FC]),
]
TESTED_KEYS = defaultdict(set)
for names, types in TESTED:
    key = frozenset(base(n) for n in split_apis(names))
    TESTED_KEYS[key].update(types)


def dose_band(dose):
    to_mg = {"ng": 1e-6, "µg": 1e-3, "mcg": 1e-3, "ug": 1e-3, "mg": 1.0, "g": 1000.0}
    vals = [float(n.replace(",", "")) * to_mg[u] for n, u in
            re.findall(r"(\d[\d,]*(?:\.\d+)?)\s*(ng|µg|mcg|ug|mg|g)(?![A-Za-z])", re.sub(r"\([^)]*\)", "", dose))]
    if not vals:
        return "activity units (IU / CFU / other)"
    m = max(vals)
    if m < 0.001:
        return "a <1 µg"
    if m < 1:
        return "b 1-999 µg"
    if m < 10:
        return "c 1-9.9 mg"
    if m < 100:
        return "d 10-99 mg"
    if m < 500:
        return "e 100-499 mg"
    if m < 1000:
        return "f 500-999 mg"
    return "g >=1 g"


def n_band(n):
    return "4+" if n >= 4 else str(n)


def main():
    errors = []
    with open(PATH, newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        if reader.fieldnames != COLUMNS:
            errors.append(f"columns are {reader.fieldnames}, expected {COLUMNS}")
        rows = list(reader)

    # 1. ids and allowed values
    if len(rows) != 1000:
        errors.append(f"{len(rows)} rows, expected 1000")
    ids = [r["id"] for r in rows]
    if len(set(ids)) != len(ids):
        errors.append("duplicate ids: " + ", ".join(i for i, c in Counter(ids).items() if c > 1))
    if sorted(ids) != [f"F{i:04d}" for i in range(1, 1001)]:
        errors.append("ids are not exactly F0001..F1000")
    allowed = {"tablet_type": TABLET_TYPES, "release": RELEASES, "process": PROCESSES,
               "therapeutic_area": AREAS, "api_form": FORMS}
    for r in rows:
        for col, vals in allowed.items():
            if r[col] not in vals:
                errors.append(f"{r['id']}: {col} '{r[col]}' not on the allowed list")
        for h in r["special_handling"].split("; "):
            if h not in HANDLING:
                errors.append(f"{r['id']}: special_handling '{h}' not on the allowed list")
        if not r["dose"].strip() or not r["api"].strip():
            errors.append(f"{r['id']}: empty api or dose")
        try:
            n = int(r["n_apis"])
            if n < len(split_apis(r["api"])) or n < 1:
                errors.append(f"{r['id']}: n_apis {n} < number of APIs listed")
        except ValueError:
            errors.append(f"{r['id']}: n_apis not an integer")

    # 2. waves
    waves = Counter(r["wave"] for r in rows)
    if sorted(waves) != sorted(str(w) for w in range(1, 11)) or any(c != 100 for c in waves.values()):
        errors.append(f"wave sizes {dict(sorted(waves.items(), key=lambda kv: int(kv[0])))}, expected 100 each")

    # 3 + 4. API counts and repeats
    for label, fn in (("salt words kept", clean), ("base name", base)):
        uses = defaultdict(list)
        for r in rows:
            for a in {fn(x) for x in split_apis(r["api"])}:
                uses[a].append(r)
        for a, rs in uses.items():
            if len(rs) > 2:
                errors.append(f"API '{a}' ({label}) used {len(rs)} times: " + ", ".join(x["id"] for x in rs))
            elif len(rs) == 2:
                x, y = rs
                if x["tablet_type"] == y["tablet_type"] and x["release"] == y["release"]:
                    errors.append(f"API '{a}' ({label}) repeated with the same tablet type and release: "
                                  f"{x['id']}, {y['id']}")

    # 5. already tested
    for r in rows:
        key = frozenset(base(x) for x in split_apis(r["api"]))
        if r["tablet_type"] in TESTED_KEYS.get(key, ()):
            errors.append(f"{r['id']}: '{r['api']}' as {r['tablet_type']} is on the already-tested list")

    # 6 + counts
    axes = {
        "tablet_type": lambda r: [r["tablet_type"]],
        "release": lambda r: [r["release"]],
        "process": lambda r: [r["process"]],
        "therapeutic_area": lambda r: [r["therapeutic_area"]],
        "api_form": lambda r: [r["api_form"]],
        "dose band": lambda r: [dose_band(r["dose"])],
        "n_apis": lambda r: [n_band(int(r["n_apis"]))],
        "special_handling": lambda r: r["special_handling"].split("; "),
    }
    out = []
    for axis, f in axes.items():
        total = Counter()
        per = defaultdict(Counter)
        for r in rows:
            for v in f(r):
                total[v] += 1
                per[v][r["wave"]] += 1
        out.append(f"\n== {axis} ({len(total)} values) ==")
        out.append(f"{'value':44s} {'all':>5s}  " + " ".join(f"w{w:<3d}" for w in range(1, 11)))
        for v, n in sorted(total.items(), key=lambda kv: (-kv[1], kv[0])):
            counts = [per[v][str(w)] for w in range(1, 11)]
            out.append(f"{v[:44]:44s} {n:5d}  " + " ".join(f"{c:<4d}" for c in counts))
            slack = max(1, math.ceil(n / 100))
            hi = math.ceil(n / 10) + slack
            lo = math.floor(n / 10) - slack if n >= 10 else 0
            lo = max(lo, 1) if n >= 10 else 0
            bad = [w + 1 for w, c in enumerate(counts) if c > hi or c < lo]
            if bad:
                errors.append(f"{axis} '{v}' (n={n}) clustered: waves {bad} outside {lo}..{hi}")

    print(f"file: {PATH}")
    print(f"rows: {len(rows)}  unique ids: {len(set(ids))}  waves: "
          + " ".join(f"{w}:{waves.get(str(w), 0)}" for w in range(1, 11)))
    salt = Counter(clean(x) for r in rows for x in set(split_apis(r["api"])))
    print(f"distinct APIs (salt words kept): {len(salt)}; used twice: {sum(1 for c in salt.values() if c == 2)}")
    print("\n".join(out))
    if errors:
        print(f"\nFAILED: {len(errors)} problem(s)")
        for e in errors[:200]:
            print("  - " + e)
        sys.exit(1)
    print("\nPASSED: all checks")


if __name__ == "__main__":
    main()
