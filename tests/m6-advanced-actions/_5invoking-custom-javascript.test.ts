import { test, expect } from '@playwright/test';

test('Custom JavaScript can read a value from the page', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('First name').fill('Olesya');

    const firstNameValue = await page.evaluate(() => {
        const input = document.querySelector<HTMLInputElement>('#firstName');
        return input?.value ?? null;
    });

    expect(firstNameValue).toBe('Olesya');
});