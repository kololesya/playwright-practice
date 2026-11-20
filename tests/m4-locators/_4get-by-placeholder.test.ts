import { test, expect } from '@playwright/test';

test('A user can find the email field by its placeholder', async ({ page }) => {
    await page.goto('/');

    const emailInput = page.getByPlaceholder('you@example.com');
    await emailInput.fill('olesya@example.com');

    await expect(emailInput).toHaveValue('olesya@example.com');
});
