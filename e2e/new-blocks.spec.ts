import { expect, test, type Page } from '@playwright/test';
import { connect } from '../server/db.js';
import { TEST_DATABASE_URL, handLabels } from '../test/helpers.js';
import { small } from '../test/engine-fixture.js';
import { E2E_SCHEMA } from './config.js';
import { logIn } from './helpers.js';

// Round 46: roller compaction (dry granulation) and device assembly in the master designer and on the floor.

const pct = (low: string, high: string) => ({ low, high, unit: '%' });
const ROLLER = { forceUnit: 'kN/cm', forceLimit: { low: '6', high: '10', unit: 'kN/cm' }, gapLimit: { low: '2.0', high: '3.0', unit: 'mm' }, screen: '1.0 mm',
  densityLimit: { low: '0.90', high: '1.20', unit: 'g/cm³' }, finesLimit: { high: '30', unit: '%' } };
const DEVICE = { component: { formula: 'x' }, theoretical: '1000 units', functionSample: '5', level: 'II', criticalAql: '0', majorAql: '0.65', minorAql: '2.5',
  yieldLimit: pct('97.0', '100.5'), accountabilityLimit: pct('99.0', '100.5'), componentLimit: pct('99.0', '100.5') };
// One stage: the compaction's rounds, then the device assembly (a yield step, so the stage needs no other).
const stages = () => small([
  { name: 'Dry granulation', steps: [{ key: 'compact', block: { id: 'roller-compact', version: 1 }, everyMinutes: 30, flow: { kind: 'repeat-until', maxRounds: 20 }, settings: ROLLER },
    { key: 'assemble', block: { id: 'device-assembly', version: 1 }, checker: true, settings: DEVICE }] },
]);

async function sign(page: Page) {
  await page.getByRole('dialog').last().getByRole('button', { name: 'Sign', exact: true }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
}

test('the designer offers both blocks: added from the library, their limits asked by the master check, described in the plain view', async ({ browser }) => {
  const page = await (await browser.newContext()).newPage();
  await logIn(page, 'author1');
  const doc = small([{ name: 'Dry granulation', steps: [{ key: 'yield', block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '0.100 kg', yieldLimit: pct('97.0', '100.5') } }] }]);
  const m = await page.request.post('/api/masters', { data: { doc } });
  expect(m.ok(), await m.text()).toBe(true);
  await page.goto('/');
  await page.getByRole('button', { name: 'Master records' }).click();
  await page.getByRole('row', { name: /PRD-050.*Draft/ }).last().getByRole('button', { name: 'Open' }).click();
  await page.getByRole('button', { name: 'Process', exact: true }).click();
  await page.getByRole('button', { name: '+ Add a step' }).click();
  await page.getByLabel('Search the block library').fill('roller');
  await page.getByRole('button', { name: /Roller compaction with periodic checks/ }).click();
  await expect(page.getByRole('heading', { name: 'Roller compaction with periodic checks' })).toBeVisible();
  const check = page.getByRole('complementary', { name: 'Master check' });
  await expect(check).toContainText('Roll force limits is not set');
  // Display round: the roll force limit waits for its unit, and the unit list is the block's own (kN/cm, kN, bar).
  await expect(page.getByText('within limits; choose the roll force unit first')).toBeVisible();
  await expect(page.getByLabel('Roll force unit (as the compactor shows it)').locator('option')).toHaveText(['(choose)', 'kN/cm', 'kN', 'bar']);
  await page.getByLabel('Roll force unit (as the compactor shows it)').selectOption('kN/cm');
  await page.getByLabel('Roll force limits: lowest').fill('6');
  await page.getByLabel('Roll force limits: highest').fill('10');
  await expect(check.getByRole('button', { name: /Roll force limits is not set/ })).toBeHidden();

  await page.getByRole('button', { name: '+ Add a step' }).click();
  await page.getByLabel('Search the block library').fill('device');
  await expect(page.locator('.library .pick-list button')).toHaveCount(1);
  await page.getByRole('button', { name: /Device assembly/ }).click();
  await expect(page.getByRole('heading', { name: 'Device assembly' })).toBeVisible();
  await expect(check).toContainText('Theoretical number of devices is not set');
  await page.getByLabel('Inspection level').selectOption('II');
  await expect(page.locator('.settings-col')).toContainText(/devices tested for function must be at least/i);
  await page.getByRole('button', { name: 'Review and approval' }).click();
  await expect(page.locator('.plain-view')).toContainText('Roller compaction with periodic checks');
  await expect(page.locator('.plain-view')).toContainText('The roll force must be within 6 to 10 kN/cm.');
  await expect(page.locator('.plain-view')).toContainText('The devices that failed the function test must be 0: none allowed.');
  await expect(page.locator('.plain-view')).toContainText('The AQL inspection is a sample of the good devices assembled at inspection level II, with AQL (not set) for a critical defect');
  await expect(page.locator('.plain-view')).toContainText('The components used is the components issued minus the components returned to stores.');
});

test('on the floor: a roller compaction round out of limits needs a deviation note; a device assembly shows its function test, AQL and accountability, and is checked', async ({ browser }) => {
  // Issue: the fixture master written through the API and made effective by the database owner (as in floor.spec.ts).
  const iss = await (await browser.newContext()).newPage();
  await logIn(iss, 'iss1');
  const m = await iss.request.post('/api/masters', { data: { doc: stages() } });
  expect(m.ok(), await m.text()).toBe(true);
  const { id: masterId } = (await m.json()) as { id: number };
  const owner = connect(TEST_DATABASE_URL, { searchPath: E2E_SCHEMA });
  for (const s of ['in_review', 'approved', 'effective']) await owner`update master_versions set state = ${s} where id = ${masterId}`;
  await owner.end();
  await iss.goto('/');
  await iss.getByRole('button', { name: 'Master records' }).click();
  await iss.getByRole('row', { name: /PRD-050/ }).last().getByRole('button', { name: 'Issue a batch' }).click();
  await iss.getByRole('button', { name: 'Next: sign' }).click();
  await sign(iss);
  await iss.waitForURL(/#\/batch\/\d+$/);
  const batch = { id: Number(/#\/batch\/(\d+)$/.exec(iss.url())![1]), batchNo: (await iss.locator('.bno').textContent())! };

  // The operator records a round of roller compaction on the screen.
  const op = await (await browser.newContext({ viewport: { width: 1366, height: 900 } })).newPage();
  await logIn(op, 'op1');
  await op.goto(`/#/batch/${batch.id}`);
  await op.getByRole('button', { name: /^1 Roller compaction with periodic checks/ }).click();
  await op.getByRole('button', { name: 'Start', exact: true }).click();
  await op.getByRole('group', { name: 'Roller compactor', exact: true }).getByRole('button', { name: /RC-01/ }).click();
  // No Logbook link here: the compactor's status label is answered by hand.
  await expect(op.getByRole('group', { name: /^Roller compactor: / }).first()).toBeVisible();
  for (const g of await op.getByRole('group', { name: /^Roller compactor: / }).all()) await g.getByRole('button', { name: 'Yes' }).click();
  for (const [label, v] of [['Roll force', '8.0'], ['Roll gap', '3.4'], ['Roll speed', '5'], ['Feed screw speed', '40'], ['Ribbon density', '1.05'], ['Fines of the milled granules', '22.0']] as const) {
    await op.getByLabel(label, { exact: true }).fill(v);
    await op.getByLabel(label, { exact: true }).press('Enter');
  }
  for (const [i, v] of ['2.4', '2.6', '2.5'].entries()) await op.getByLabel(`Thickness of 3 ribbon pieces ${i + 1}`).fill(v);
  await op.getByRole('button', { name: 'Save the 3 readings' }).click();
  await op.getByRole('group', { name: 'Mill screen as shown and intact' }).getByRole('button', { name: 'Yes' }).click();
  await op.getByRole('group', { name: 'Compaction finished' }).getByRole('button', { name: 'Yes' }).click();
  const results = op.getByRole('region', { name: 'Results' });
  await expect(results).toContainText('Roll gap');
  await expect(results).toContainText('Out of limits');
  await expect(results).toContainText('2.50 mm');
  await expect(op.locator('.action-bar')).toContainText('Add a deviation note first');
  await op.getByRole('button', { name: 'Add deviation note' }).click();
  await op.getByLabel('What happened').fill('Roll gap 3.4 mm: feed screw speed raised, gap back to 2.6 mm');
  await op.getByRole('button', { name: 'Add the note' }).click();
  await expect(op.locator('.action-bar')).not.toContainText(/not recorded|deviation note first/);
  await op.getByRole('button', { name: 'Done', exact: true }).click();
  await sign(op);
  await expect(op.getByRole('region', { name: 'History' })).toContainText('Deviation note');

  // The device assembly: recorded through the API (a lot and the line typed by hand, MMS and the Logbook absent here),
  // then shown and signed on the screen, and checked by a second person.
  const key = '0.1.1.1';
  const post = async (p: Page, action: string, data: object = {}) => {
    const r = await p.request.post(`/api/batches/${batch.id}/steps/${key}/${action}`, { data });
    expect(r.ok(), `${action}: ${await r.text()}`).toBe(true);
  };
  await post(op, 'start');
  await post(op, 'record', { values: { lot: 'AI-HSG-2601', ...handLabels('lot', 'lot'), machine: 'eq-al', ...handLabels('machine', 'machine'),
    issued: '1010', unitsIn: '1000', tested: '5', failed: '0', works: 'yes', complete: 'yes', inspected: '80', critical: '0', major: '0', minor: '1',
    good: '980', rejected: '10', samples: '5', componentRejects: '5', returned: '5' } });
  await op.reload();
  await op.getByRole('button', { name: `← Batch ${batch.batchNo}` }).click();
  await op.getByRole('button', { name: /Device assembly/ }).click();
  const r2 = op.getByRole('region', { name: 'Results' });
  for (const text of ['AQL inspection', 'Sample 80 of 980', 'Yield', '98.0 %', 'Accountability of the units fed', 'Accountability of the component', 'Components used']) await expect(r2).toContainText(text);
  await expect(r2).not.toContainText('Out of limits');
  await op.getByRole('button', { name: 'Done', exact: true }).click();
  await sign(op);
  await expect(op.locator('.step-title')).toContainText('Waiting for check');

  const chk = await (await browser.newContext()).newPage();
  await logIn(chk, 'chk1');
  await chk.getByRole('region', { name: 'Waiting for your check' }).getByRole('button', { name: /Device assembly/ }).click();
  await expect(chk.getByRole('region', { name: 'What was recorded' })).toContainText('AI-HSG-2601');
  await chk.getByRole('button', { name: 'Checked', exact: true }).click();
  await sign(chk);
  await expect(chk.locator('.step-title')).toContainText('Checked');
});
