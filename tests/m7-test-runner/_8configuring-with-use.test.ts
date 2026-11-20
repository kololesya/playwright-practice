import { test, expect } from '@playwright/test';

test.describe('Home page with a custom viewport', () => {
    test.use({
        viewport: { width: 1200, height: 400 },
    });

    test('uses the configured viewport', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByLabel('First name')).toBeVisible();
        expect(page.viewportSize()).toEqual({ width: 1200, height: 400 });
    });
});