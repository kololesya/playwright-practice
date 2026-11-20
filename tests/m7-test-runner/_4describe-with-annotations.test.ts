import { test, expect } from '@playwright/test';

test.describe('Home page', { tag: '@smoke' }, () => {
    test('displays the registration form', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByLabel('First name')).toBeVisible();
    });

    test('navigates to Savings', { tag: '@navigation' }, async ({ page }) => {
        await page.goto('/');

        await page.getByRole('link', { name: 'Savings', exact: true }).click();

        await expect(page).toHaveURL(/savings\.html/);
    });
});