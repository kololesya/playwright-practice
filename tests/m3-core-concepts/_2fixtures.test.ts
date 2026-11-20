import { test } from '@playwright/test';

test('The page fixture opens the local application', async ({ page }) => {
    await page.goto('/');

    console.log(await page.title());
});
