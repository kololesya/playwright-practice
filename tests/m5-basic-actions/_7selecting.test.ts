import { test, expect } from '@playwright/test';

test('A user can select an option from a dropdown', async ({ page }) => {
    await page.goto('/loans.html');

    const dropdown = page.locator('select').first();
    const optionToSelect = dropdown.locator('option').nth(1);
    const optionText = (await optionToSelect.textContent())?.trim() ?? '';

    await dropdown.selectOption({ index: 1 });

    await expect(
        dropdown.locator('option:checked'),
        'The selected option should be displayed in the dropdown',
    ).toHaveText(optionText);
});