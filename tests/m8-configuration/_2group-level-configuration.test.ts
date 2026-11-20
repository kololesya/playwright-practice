import { test, expect } from '@playwright/test';

test.describe('English locale', () => {
    test.use({ locale: 'en-US' });

    test('uses the English locale', async ({ page }) => {
        await page.goto('/');

        const locale = await page.evaluate(() => navigator.language);
        expect(locale).toBe('en-US');
    });
});

test.describe('French locale', () => {
    test.use({ locale: 'fr-FR' });

    test('uses the French locale', async ({ page }) => {
        await page.goto('/');

        const locale = await page.evaluate(() => navigator.language);
        expect(locale).toBe('fr-FR');
    });
});