import { test, expect } from '@playwright/test';

test('A user can fill text and date fields', async ({ page }) => {
    await page.goto('/');

    const firstName = page.getByLabel('First name');
    const dateOfBirth = page.getByLabel('Date of birth (optional)');

    await firstName.fill('Olesya');
    await dateOfBirth.fill('1980-02-01');

    await expect(firstName).toHaveValue('Olesya');
    await expect(dateOfBirth).toHaveValue('1980-02-01');
});