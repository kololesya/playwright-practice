import { test, expect } from '@playwright/test';

const firstNames = ['Olesya', 'Katya', 'Demid'];

for (const name of firstNames) {
    test(`accepts the first name "${name}"`, async ({ page }) => {
        await page.goto('/');

        const firstNameInput = page.getByLabel('First name');

        await firstNameInput.fill(name);

        await expect(firstNameInput).toHaveValue(name);
    });
}