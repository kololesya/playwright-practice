import { test, expect } from '@playwright/test';

test('A user can verify form state with assertions', async ({ page }) => {
    await page.goto('/');

    const firstName = page.getByLabel('First name');
    const registerButton = page.getByRole('button', {
        name: 'Register',
        exact: true,
    });

    await expect(page).toHaveURL(/\/$/);
    await expect(registerButton).toBeVisible();
    await expect(registerButton).toBeEnabled();

    await firstName.fill('Olesya');
    await expect(firstName).toHaveValue('Olesya');
});