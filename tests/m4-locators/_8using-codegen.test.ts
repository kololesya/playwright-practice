import { test, expect } from '@playwright/test';

test('Codegen locators can fill the registration form', async ({ page }) => {
    await page.goto('/');

    const firstName = page.getByRole('textbox', { name: 'First name' });
    const lastName = page.getByRole('textbox', { name: 'Last name' });
    const email = page.getByRole('textbox', { name: 'Email' });
    const dateOfBirth = page.getByRole('textbox', {
        name: 'Date of birth (optional)',
    });
    const shareCheckbox = page.getByRole('checkbox', {
        name: "I wish to share how I've heard about this company",
    });

    await firstName.fill('Olesya');
    await lastName.fill('Kolenchenko');
    await email.fill('olesya@example.com');
    await dateOfBirth.fill('1980-02-01');
    await shareCheckbox.check();

    await expect(firstName).toHaveValue('Olesya');
    await expect(lastName).toHaveValue('Kolenchenko');
    await expect(email).toHaveValue('olesya@example.com');
    await expect(dateOfBirth).toHaveValue('1980-02-01');
    await expect(shareCheckbox).toBeChecked();
});