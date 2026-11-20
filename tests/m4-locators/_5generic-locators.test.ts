import { test, expect } from '@playwright/test';

test('A user can locate form elements with CSS and XPath', async ({ page }) => {
    await page.goto('/');

    const firstNameInput = page.locator('#firstName');
    await firstNameInput.fill('Olesya');

    const registerButton = page.locator('xpath=//form//button[2]');
    await registerButton.click();

    await expect(firstNameInput).toHaveValue('Olesya');
});