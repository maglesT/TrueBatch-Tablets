import { expect, test, type Page } from '@playwright/test';
import { connect } from '../server/db.js';
import { TEST_DATABASE_URL } from '../test/helpers.js';
import { small } from '../test/engine-fixture.js';
import { E2E_SCHEMA } from './config.js';
import { logIn } from './helpers.js';

// The floor screens, one stage of a small fixture master: a pH check (second-person check) and the stage yield.

/** Writes the fixture master through the API, makes it effective (no approval workflow yet: the database owner does it, as in the server tests) and issues a batch. */
async function issueBatch(page: Page): Promise<{ id: number; batchNo: string }> {
  await logIn(page, 'iss1');
  const doc = small([{ name: 'Blending', steps: [{ checker: true },
    { block: { id: 'stage-yield', version: 1 }, checker: true, settings: { theoretical: '0.100 kg', yieldLimit: { low: '97.0', high: '100.5', unit: '%' } } }] }]);
  const m = await page.request.post('/api/masters', { data: { doc } });
  expect(m.ok()).toBe(true);
  const { id } = (await m.json()) as { id: number };
  const owner = connect(TEST_DATABASE_URL, { searchPath: E2E_SCHEMA });
  for (const s of ['in_review', 'approved', 'effective']) await owner`update master_versions set state = ${s} where id = ${id}`;
  await owner.end();
  // The signing proof, as the sign window gets it after core asked for the password again (here the stand-in).
  await page.goto('/sign?meanings=issued');
  const proof = /"signProof":"([^"]+)"/.exec(await page.content())?.[1];
  const b = await page.request.post('/api/batches', { data: { masterVersionId: id, proof } });
  expect(b.ok()).toBe(true);
  return (await b.json()) as { id: number; batchNo: string };
}

/** Signs in the open sign dialog: the sign window opens, the stand-in for core confirms, the window closes. */
async function sign(page: Page) {
  await page.getByRole('dialog').getByRole('button', { name: 'Sign', exact: true }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
}

test('TB-14 floor journey: start, a value out of limits needs a deviation note, done, checked by a second person on their own device, stage yield on My work', async ({ browser }) => {
  const setup = await browser.newContext();
  const batch = await issueBatch(await setup.newPage());
  await setup.close();

  // The operator, on the line's tablet.
  const opCtx = await browser.newContext({ viewport: { width: 1024, height: 768 } });
  const op = await opCtx.newPage();
  await logIn(op, 'op1');
  await expect(op.getByRole('heading', { name: 'My work' })).toBeVisible();
  await op.getByRole('button', { name: new RegExp(`${batch.batchNo} · Demolol 50 mg tablets`) }).click();
  await expect(op.locator('.bh')).toContainText('Master version');
  await expect(op.getByRole('navigation', { name: 'Stages' })).toContainText('Blending');
  await op.getByRole('button', { name: /Check a value against limits: pH/ }).click();
  await op.getByRole('button', { name: 'Start', exact: true }).click();
  await op.getByLabel('Reading').fill('7.5');
  await op.getByLabel('Reading').press('Enter');
  const results = op.getByRole('region', { name: 'Results' });
  await expect(results).toContainText('Out of limits');
  await expect(results).toContainText('limit 5.0 to 7.0: OUT OF LIMITS');
  await expect(op.getByRole('button', { name: 'Done', exact: true })).toBeDisabled();
  await expect(op.locator('.action-bar')).toContainText('Add a deviation note first');
  await op.getByRole('button', { name: 'Add deviation note' }).click();
  await op.getByLabel('What happened').fill('pH 7.5 after the buffer addition; supervisor informed');
  await op.getByLabel('Deviation number (if one was raised)').fill('DEV-26-001');
  await op.getByRole('button', { name: 'Add the note' }).click();
  await expect(op.getByRole('region', { name: 'History' })).toContainText('Deviation note DEV-26-001');
  await op.getByRole('button', { name: 'Done', exact: true }).click();
  await sign(op);
  await expect(op.locator('.step-title')).toContainText('Waiting for check');
  await expect(op.getByRole('region', { name: 'What was recorded' })).toContainText('a second person checks it on their own device');

  // The checker, on their own device.
  const chkCtx = await browser.newContext();
  const chk = await chkCtx.newPage();
  await logIn(chk, 'chk1');
  const waiting = chk.getByRole('region', { name: 'Waiting for your check' });
  await waiting.getByRole('button', { name: /Check a value against limits: pH/ }).click();
  const recorded = chk.getByRole('region', { name: 'What was recorded' });
  await expect(recorded).toContainText('7.5');
  await expect(recorded).toContainText('OP1');
  await chk.getByRole('button', { name: 'Checked', exact: true }).click();
  await sign(chk);
  await expect(chk.locator('.step-title')).toContainText('Checked');

  // Stage yield: the operator records the output, samples and rejects and signs.
  await op.getByRole('button', { name: `← Batch ${batch.batchNo}` }).click();
  await op.getByRole('button', { name: /Stage yield/ }).click();
  await expect(op.locator('.step-title')).toContainText('Stage end · Blending');
  await op.getByRole('button', { name: 'Start', exact: true }).click();
  for (const [label, v] of [['Output', '0.099'], ['Samples', '0.000'], ['Rejects', '0.001']] as const) {
    await op.getByLabel(label).fill(v);
    await op.getByLabel(label).press('Enter');
  }
  await expect(op.getByRole('region', { name: 'Results' })).toContainText('99.0 %');
  await expect(op.getByRole('region', { name: 'Results' })).toContainText('Within limits');
  await op.getByRole('button', { name: 'Done', exact: true }).click();
  await sign(op);
  await expect(op.locator('.step-title')).toContainText('Waiting for check');

  // It shows on the checker's My work.
  await chk.getByRole('button', { name: 'My work' }).click();
  await expect(chk.getByRole('region', { name: 'Waiting for your check' })).toContainText('Stage yield');
  await expect(chk.getByRole('region', { name: 'Waiting for your check' })).toContainText(batch.batchNo);
  await opCtx.close();
  await chkCtx.close();
});
