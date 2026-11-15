import { expect, test, type Browser, type Page } from '@playwright/test';
import { logIn } from './helpers.js';

// The master designer: a small master built from a skeleton, a master-check problem found and fixed, then the review
// and approval workflow with three people, each in their own browser (TB-02).

async function as(browser: Browser, who: string): Promise<Page> {
  const page = await (await browser.newContext()).newPage();
  await logIn(page, who);
  await page.getByRole('button', { name: 'Master records' }).click();
  return page;
}
// Signing opens core's password window; the stand-in answers at once and the window closes itself.
async function sign(page: Page) {
  const dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: 'Sign' }).click();
  await expect(dialog).toBeHidden();
}

test('TB-02 build a master from a skeleton, fix a master-check problem, then check, approve and make it effective', async ({ browser }) => {
  const author = await as(browser, 'author1');
  await author.getByRole('button', { name: 'New master' }).click();
  await author.getByLabel('Product').fill('PRD-001');
  await author.getByRole('button', { name: /PRD-001/ }).click();
  await author.getByLabel('Batch size (tablets)').fill('100000');
  await author.getByLabel('Theoretical core weight (mg per tablet)').fill('250.0');
  await author.getByText('Process skeleton: Direct compression, uncoated').click();
  await author.getByRole('button', { name: 'Create draft' }).click();
  await expect(author.getByRole('heading', { name: 'PRD-001 · Examplol 100 mg tablets' })).toBeVisible();

  // The formula: one material, picked from master data.
  await author.getByRole('button', { name: 'Formula', exact: true }).click();
  await author.getByRole('button', { name: '+ Add a material' }).click();
  await author.getByLabel('Material').fill('Examplol');
  await author.getByRole('button', { name: /MAT-001/ }).click();
  await author.getByLabel('mg per tablet of Examplol').fill('250.0');
  await author.getByLabel('Role of Examplol').selectOption('api');
  await expect(author.locator('.total.ok')).toContainText('equals the theoretical core weight');

  // The process: 2 stages; the mix step is removed, leaving 4 steps.
  await author.getByRole('button', { name: 'Process', exact: true }).click();
  await author.getByRole('button', { name: /2\. Mix for a time/ }).click();
  await author.getByRole('button', { name: 'Remove step blend' }).click();
  await expect(author.locator('.steps-col .olist li')).toHaveCount(2);

  // The master check shows what is missing; its link selects the step, and the template sentence takes the input.
  const check = author.getByRole('complementary', { name: 'Master check' });
  await check.getByRole('button', { name: /Target quantity is not set/ }).click();
  await expect(author.getByRole('heading', { name: 'Weigh a material' })).toBeVisible();
  const sentence = author.locator('.sentence', { hasText: 'must be within ±' });
  await sentence.getByLabel('Target quantity').selectOption({ label: 'Examplol' });
  await expect(author.locator('.ex-results')).toContainText('250.0 mg × 100000 tablets = 25.000 kg');
  await expect(check.getByRole('button', { name: /Target quantity is not set/ })).toBeHidden();

  await check.getByRole('button', { name: /Hardness limits is not set/ }).click();
  await author.getByLabel('Hardness limits: lowest').fill('60');
  await author.getByLabel('Hardness limits: highest').fill('120');
  await author.getByLabel('Thickness limits: lowest').fill('3.8');
  await author.getByLabel('Thickness limits: highest').fill('4.2');
  await expect(check).toContainText('No problems');
  await expect(author.getByRole('status')).toHaveText('All changes saved');

  // Sent for review: the author signs "prepared".
  await author.getByRole('button', { name: 'Review and approval' }).click();
  await expect(author.locator('.plain-view')).toContainText('The net weight must be within ± 0.5 % of the batch quantity of Examplol.');
  await author.getByRole('button', { name: 'Send for review' }).click();
  await sign(author);
  await expect(author.locator('.d-title')).toContainText('In review');

  // A second person checks it, in their own browser.
  const checker = await as(browser, 'mcheck1');
  await checker.getByRole('row', { name: /PRD-001/ }).getByRole('button', { name: 'Open' }).click();
  await checker.getByRole('button', { name: 'Pass the check' }).click();
  await sign(checker);
  await expect(checker.locator('.timeline')).toContainText('Checked (passed) · MCHECK1');

  // QA approves with a change control number, then makes it effective.
  const qa = await as(browser, 'qa1');
  await qa.getByRole('row', { name: /PRD-001/ }).getByRole('button', { name: 'Open' }).click();
  await qa.getByRole('button', { name: 'Approve' }).click();
  await qa.getByLabel('Change control number').fill('CC-2026-031');
  await qa.getByRole('button', { name: 'Continue to sign' }).click();
  await sign(qa);
  await expect(qa.locator('.d-title')).toContainText('Approved');
  await qa.getByRole('button', { name: 'Make effective' }).click();
  await qa.getByRole('dialog').getByRole('button', { name: 'Make effective' }).click();
  await expect(qa.locator('.d-title')).toContainText('Effective');
  await expect(qa.locator('.timeline')).toContainText('change control CC-2026-031');
});
