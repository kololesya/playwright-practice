import { test, expect } from '@playwright/test';

test('Playwright can detect a file download', async ({ page }) => {
    await page.goto('/');

    const downloadPromise = page.waitForEvent('download');

    await page.evaluate(() => {
        const file = new Blob(['Playwright download practice'], {
            type: 'text/plain',
        });
        const url = URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'practice.txt';
        link.click();
    });

    const download = await downloadPromise;

    expect(download.suggestedFilename()).toBe('practice.txt');
});