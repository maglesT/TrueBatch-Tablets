# TrueBatch Tablets Packing: design decisions

Owner decisions of 15 November 2026. The packing batch record: from the RELEASED bulk tablets of TrueBatch Tablets to
QA release of the packed batch. Built the Logbook way, as TrueBatch Tablets is.

## A separate product on the same engine
- **Its own product on the platform**: its own tile, licence, database (`truebatch_packing`), app login
  (`truebatch_packing_app`), sign-on client (`truebatch_packing`) and permissions (`truebatch_packing.view`,
  `.master.author`, `.master.check`, `.master.approve`, `.batch.issue`, `.batch.operate`, `.batch.check`,
  `.batch.supervise`, `.qc.approve`, `.qa.release`). The platform allows only lower case and `_` in product, database and permission
  names, so the product is written `truebatch_packing`, not `truebatch-packing`.
- **The same code**: one server (`server/`), one engine, block library, templates, master document and checks
  (`shared/`), one set of screens (`web/src`). Nothing is copied. `server/product.ts` says which product a server is;
  inside the app each permission is known by its TrueBatch code, and a product's own codes in core's token are read as
  those (`truebatch_packing.batch.operate` is `truebatch.batch.operate`); every other code is ignored.
- **`packing/`** holds only what is the packing product's own: its entry points (`packing/server/index.ts`,
  `packing/web/`), its descriptor (`packing/product.ts`), its migrations (`packing/migrate.ts`: TrueBatch Tablets'
  migrations without the views it publishes, with packing's app role, then `packing/migrations/`) and its published
  view `packing_batch_v1`. `ops/packing.Dockerfile` and `ops/packing.manifest.draft.json` are its image and manifest.

## The packing master (TB-P1)
- One master document, as for tablets, with a **pack** section: the pack product (header), the bulk product, pack
  type (blister, strip, bottle) and size, packs per carton, the approved shelf life and expiry rule, destination
  (India domestic or export), MRP, serialisation on or off with the pack GTIN, and the packing materials picked from
  master data (kind, printed, coded, quantity per pack). The formula is empty; a step's material setting names a
  packing material.
- One master per product, pack type and size, and destination (another destination is a copy).
- The designer offers the packing blocks and a packing skeleton (issue to the line; packing; reconciliation and line
  clearance after). The master check runs the packing checks (`shared/master/packing.ts`) instead of the formula and
  calculation checks.

## The packing record
- **Issued from a released bulk batch** (TB-P2): the issue carries the line, the bulk batch and the tablets issued,
  recorded as the first step's values. The bulk batch is read live from TrueBatch Tablets' `batch_fact_v1`: it must
  be RELEASED and of the master's bulk product; its date of manufacture is its issue date in plant time. Without the
  link it is typed from the bulk labels ("RELEASED", the product) with a second-person check, and QA's review lists it.
- **One active packing order per line** (TB-P7): a line with a batch still being packed takes no other.
- **Batch facts and pack facts**: block calculations read the issue values (`$batch.bulk`, `$batch.mfgDate`,
  `$batch.tablets`, `$batch.packs`) and the master's pack (`$pack.shelfLifeMonths`, `$pack.mrp` …), so the coding
  checks compare the print with the record, never with a typed copy.
- **Checks alongside the line**: the periodic checks (coding, forming and sealing, leak test, on-line inspection,
  cartons, serialisation sample) open the next check after their first round and go on side by side; the stage
  closes when each has its end round.
- **Coded batch number**: the bulk batch number is printed on the packs; the packing record has its own number
  (`TP` + year + counter).
- **Expiry** (TB-P8): worked out from the date of manufacture and the approved shelf life (T27), never typed.
- **Reconciliation** (TB-P6): tablets (count by weight) and every printed material (issued = used + destroyed +
  returned, zero gap); a gap is out of limits, needs a deviation note and blocks release until its number is linked.
- **Serialisation** (optional per product): checked, never generated. Serial numbers received (typed, with the order
  or file reference), camera challenge at the start, sample codes at the start, at intervals and at the end (GTIN,
  batch, expiry of this batch; well-formed serial; no serial twice in the batch), and reconciliation (received =
  printed OK + rejected + destroyed + unused). No serial register, no regulator reporting.
- **Release** (owner, 15 November 2026: "QC signs first", as for tablets): production approval, then QC approval by
  e-signature (`truebatch_packing.qc.approve`, meaning `qc_approved`, with the QC report number: the finished packed
  product was tested and complies), then QA release or rejection by e-signature. QA cannot release or reject before
  QC has approved. `packing_batch_v1` shows QC_APPROVED in between (`packing/migrations/0101_packing_qc_status.sql`).
- **Published**: `packing_batch_v1` (packing order, coded batch number, products, pack, dates, packs and cartons,
  status) for MMS finished goods later.

## Left for later
- An issue screen (as for TrueBatch Tablets, batches are issued through the API for now) and a read-only line display.
- Reading the serialisation system's file (the count is typed with the file reference).
- Artwork specimens as attachments (the line set-up confirms they are attached to the paper annex).
