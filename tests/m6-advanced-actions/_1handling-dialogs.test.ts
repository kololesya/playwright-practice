import { test, expect } from '@playwright/test';

test('Playwright can inspect and accept a confirmation dialog', async ({ page }) => {
    await page.goto('/');

    const dialogPromise = page.waitForEvent('dialog');
    const resultPromise = page.evaluate(() => window.confirm('Continue?'));

    const dialog = await dialogPromise;
    const dialogType = dialog.type();
    const dialogMessage = dialog.message();

    await dialog.accept();

    expect(dialogType).toBe('confirm');
    expect(dialogMessage).toBe('Continue?');
    expect(await resultPromise).toBe(true);
});