import { test, expect } from '@playwright/test';

test('Submitting an empty form displays a validation message', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Register', exact: true }).click();

    await expect(
        page.getByText('Valid first name is required', { exact: true }),
        'The first-name validation message should be visible',
    ).toBeVisible();
});