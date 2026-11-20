import { test, expect } from '@playwright/test';

test.describe('Independent home page checks', () => {
    test.describe.configure({ mode: 'parallel' });

    test('shows the first-name field', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByLabel('First name')).toBeVisible();
    });

    test('shows the Register button', async ({ page }) => {
        await page.goto('/');

        await expect(
            page.getByRole('button', { name: 'Register', exact: true }),
        ).toBeVisible();
    });
});