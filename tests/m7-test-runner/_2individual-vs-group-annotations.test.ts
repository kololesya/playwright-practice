import { test, expect } from '@playwright/test';

test.skip('Skip one test individually', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/$/);
});

test.describe.skip('Skip the whole group', () => {
    test('First test in the skipped group', async ({ page }) => {
        await page.goto('/');
    });

    test('Second test in the skipped group', async ({ page }) => {
        await page.goto('/');
    });
});