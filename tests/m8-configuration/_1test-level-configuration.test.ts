import { test, expect } from '@playwright/test';

test('A test can create a browser with a custom context', async ({ playwright }) => {
    const browser = await playwright.chromium.launch({ headless: true });

    try {
        const context = await browser.newContext({
            baseURL: 'http://localhost:3000',
            locale: 'en-US',
            viewport: { width: 1200, height: 700 },
        });

        const page = await context.newPage();
        await page.goto('/');

        await expect(page.getByLabel('First name')).toBeVisible();
        expect(page.viewportSize()).toEqual({ width: 1200, height: 700 });
    } finally {
        await browser.close();
    }
});