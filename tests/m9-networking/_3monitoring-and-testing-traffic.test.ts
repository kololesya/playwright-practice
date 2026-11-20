import { test, expect } from '@playwright/test';

test('The page navigation request and response can be monitored', async ({ page }) => {
    const navigationRequests: string[] = [];
    const navigationResponses: number[] = [];

    page.on('request', (request) => {
        if (request.isNavigationRequest()) {
            const url = new URL(request.url());
            navigationRequests.push(`${request.method()} ${url.pathname}`);
        }
    });

    page.on('response', (response) => {
        if (response.request().isNavigationRequest()) {
            navigationResponses.push(response.status());
        }
    });

    await page.goto('/');

    expect(navigationRequests).toContain('GET /');
    expect(navigationResponses).toContain(200);
});