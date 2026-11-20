import { test, expect } from '@playwright/test';

test('Pressing Tab moves focus to the next form field', async ({ page }) => {
    await page.goto('/');

    const firstName = page.getByLabel('First name');
    const lastName = page.getByLabel('Last name');

    await firstName.focus();
    await firstName.press('Tab');

    await expect(
        lastName,
        'The last-name field should receive focus after pressing Tab',
    ).toBeFocused();
});