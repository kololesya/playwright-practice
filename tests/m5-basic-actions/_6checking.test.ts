import { test, expect } from '@playwright/test';

test('A user can check and uncheck the sharing checkbox', async ({ page }) => {
    await page.goto('/');

    const sharingCheckbox = page.getByRole('checkbox', {
        name: "I wish to share how I've heard about this company",
    });

    await sharingCheckbox.check();
    await expect(sharingCheckbox).toBeChecked();

    await sharingCheckbox.uncheck();
    await expect(sharingCheckbox).not.toBeChecked();
});