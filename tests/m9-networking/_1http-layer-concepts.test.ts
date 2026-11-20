import { test, expect } from '@playwright/test';

test('The home page returns a successful HTTP response', async ({ page }) => {
    const response = await page.goto('/');

    expect(response, 'Navigation should return an HTTP response').not.toBeNull();
    if (!response) return;

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.request().method()).toBe('GET');
});