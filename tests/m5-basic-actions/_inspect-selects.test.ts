import { test } from '@playwright/test';

test('Find select controls in the application', async ({ page }) => {
    for (const path of ['/', '/loans.html', '/savings.html']) {
        await page.goto(path);

        const selects = page.locator('select');
        const count = await selects.count();

        console.log(`Page ${path}: ${count} select control(s)`);

        for (let i = 0; i < count; i++) {
            const select = selects.nth(i);
            console.log(
                `Select ${i + 1}:`,
                await select.locator('option').allTextContents(),
            );
        }
    }
});