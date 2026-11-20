import { test, expect } from '@playwright/test';

test('fill replaces text, while pressSequentially types it character by character', async ({ page }) => {
    await page.goto('/');

    const firstName = page.getByLabel('First name');
    const lastName = page.getByLabel('Last name');

    await firstName.fill('Old name');
    await firstName.fill('Olesya');

    await lastName.fill('Kolen');
    await lastName.pressSequentially('chenko');

    await expect(firstName).toHaveValue('Olesya');
    await expect(lastName).toHaveValue('Kolenchenko');
});