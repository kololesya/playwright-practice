import { test, expect } from '@playwright/test';

test('A user can open Savings using a unique link locator', async ({ page }) => {
    await page.goto('/');

    const allLinks = page.getByRole('link');
    expect(
        await allLinks.count(),
        'The page should contain multiple links',
    ).toBeGreaterThan(1);

    const savingsLink = page.getByRole('link', {
        name: 'Savings',
        exact: true,
    });

    await expect(savingsLink).toHaveCount(1);
    await savingsLink.click();

    await expect(page).toHaveURL(/savings\.html/);
});