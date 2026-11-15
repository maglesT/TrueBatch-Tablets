import { expect, test } from '@playwright/test';
import { logIn, logOut } from './helpers.js';

test('PL-01: sign in through core, see My work with the TrueBatch header, and log out', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'TrueBatch' })).toBeVisible();
  await logIn(page, 'op1');
  await expect(page.getByRole('heading', { name: 'My work' })).toBeVisible();
  await expect(page.locator('header.bar')).toContainText('TrueBatch Tablets');
  await expect(page.locator('header.bar')).toContainText('OP1');
  await logOut(page);
});

test('PL-01: a person without a TrueBatch permission is refused at sign-in', async ({ page }) => {
  await page.goto('/login?login_hint=norole');
  await expect(page.getByRole('heading', { name: 'No access' })).toBeVisible();
});
