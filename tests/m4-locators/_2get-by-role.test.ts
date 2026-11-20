import { test, expect } from '@playwright/test';

test('The registration form has a Register button', async ({ page }) => {
    await page.goto('/');

    await expect(
        page.getByRole('heading', { name: 'Register to become a member' }),
        'The registration form heading should be visible',
    ).toBeVisible();

    await expect(
        page.getByRole('button', { name: 'Register', exact: true }),
        'The Register button should be visible',
    ).toBeVisible();
});