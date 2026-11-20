import { test, expect } from '@playwright/test';

test('Clicking Register submits the form and shows validation', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Register', exact: true }).click();

    await expect(
        page.getByText('Valid first name is required', { exact: true }),
        'Submitting the empty form should show the first-name validation message',
    ).toBeVisible();
});