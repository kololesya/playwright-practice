import { test, expect } from '@playwright/test';

test('The home page shows the registration form', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Credit Association');

    await expect(
        page.getByRole('heading', { name: 'Register to become a member' }),
    ).toBeVisible();
});