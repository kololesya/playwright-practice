import { test, expect } from '@playwright/test';

test('The app responds to an API request and displays its home page', async ({
                                                                                 request,
                                                                                 page,
                                                                             }) => {
    const response = await request.get('/');

    expect(
        response.ok(),
        'The app should respond successfully to a direct request',
    ).toBeTruthy();

    await page.goto('/');

    await expect(
        page.getByText('Register to become a member', { exact: true }),
        'The home page should display the registration form',
    ).toBeVisible();
});