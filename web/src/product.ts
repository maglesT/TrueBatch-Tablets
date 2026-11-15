// Which product this web UI is: TrueBatch Tablets (web/src/main.tsx) or TrueBatch Tablets Packing, whose entry
// (packing/web/main.tsx) sets it before the screens load. The server checks everything again.
export const product = {
  name: 'TrueBatch Tablets',
  about: 'Electronic batch records for tablet manufacturing, from dispensing to QA release.',
  packing: false,
};
