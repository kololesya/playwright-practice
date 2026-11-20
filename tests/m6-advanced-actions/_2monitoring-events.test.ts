import { test, expect } from '@playwright/test';

test('Playwright can monitor a page navigation request', async ({ page }) => {
    const navigationRequests: string[] = [];

    page.on('request', request => {
        if (request.isNavigationRequest()) {
            navigationRequests.push(request.url());
        }
    });

    await page.goto('/');

    await expect(
        navigationRequests,
        'Opening the page should trigger a navigation request',
    ).toContain('http://localhost:3000/');
});