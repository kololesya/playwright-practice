import { expect, test } from '@playwright/test';

test('Navigation links open the matching pages', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Savings' }).click();
  await expect(page).toHaveURL(/savings\.html$/);
  await expect(
    page.getByRole('heading', {
      name: 'Deposit your money with us to earn a great yield',
    }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Loans' }).click();
  await expect(page).toHaveURL(/loans\.html$/);
  await expect(
    page.getByRole('heading', { name: 'Get a loan with us!' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page).toHaveURL(/(?:index\.html)?$/);
  await expect(
    page.getByRole('heading', { name: 'Register to become a member' }),
  ).toBeVisible();
});
