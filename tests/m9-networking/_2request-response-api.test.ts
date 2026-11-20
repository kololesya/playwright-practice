import { test, expect } from '@playwright/test';

test('GitHub API returns the Playwright repository', async ({ request }) => {
    const response = await request.get(
        'https://api.github.com/repos/microsoft/playwright',
    );

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const repository = await response.json();
    expect(repository.full_name).toBe('microsoft/playwright');
});