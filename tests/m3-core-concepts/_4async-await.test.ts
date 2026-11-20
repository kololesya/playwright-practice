import { test, expect } from '@playwright/test';

test('The location message appears after loading', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('location'))
        .toContainText('You are visiting us from New York');
});
