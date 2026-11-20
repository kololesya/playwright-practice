import { test, expect } from '@playwright/test';

test('Validation messages disappear after reloading the form', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Register', exact: true }).click();

    const visibleMessages = page.locator('.invalid-feedback:visible');
    await expect(visibleMessages).toHaveCount(3);

    await page.reload();
    await expect(page.locator('.invalid-feedback:visible')).toHaveCount(0);
});