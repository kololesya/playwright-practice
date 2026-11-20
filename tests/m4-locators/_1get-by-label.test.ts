import { test, expect } from '@playwright/test';

test('A user can fill the registration form by label', async ({ page }) => {
    await page.goto('/');

    const firstNameInput = page.getByLabel('First name');
    const emailInput = page.getByLabel('Email');

    await firstNameInput.fill('Olesya');
    await emailInput.fill('olesya@example.com');

    await expect(firstNameInput).toHaveValue('Olesya');
    await expect(emailInput).toHaveValue('olesya@example.com');
});