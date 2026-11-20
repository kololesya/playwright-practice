import { test } from '@playwright/test';

test('A screenshot of the home page is saved with the test results', async ({ page }, testInfo) => {
    await page.goto('/');

    await page.screenshot({
        path: testInfo.outputPath('home-page.png'),
        fullPage: true,
    });
});