import { test, expect } from '@playwright/test';

test('A request can be intercepted and answered with test data', async ({
                                                                            page,
                                                                        }) => {
    await page.route('**/api/products', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                { id: 1, name: 'Test Backpack' },
                { id: 2, name: 'Test T-Shirt' },
            ]),
        });
    });

    await page.goto('/');

    const products = await page.evaluate(async () => {
        const response = await fetch('/api/products');
        return response.json();
    });

    expect(products).toHaveLength(2);
    expect(products[0].name).toBe('Test Backpack');
});