import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
    test('displays the registration form', async ({ page }) => {
        await page.goto('/');

        await expect(
            page.getByLabel('First name'),
            'The first-name field should be visible on the home page',
        ).toBeVisible();
    });

    test('navigates to the Savings page', async ({ page }) => {
        await page.goto('/');

        await page.getByRole('link', { name: 'Savings', exact: true }).click();

        await expect(page).toHaveURL(/savings\.html/);
    });
});