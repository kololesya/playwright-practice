import { test, expect } from '@playwright/test';

test('A cookie can be added to the browser context', async ({ page }) => {
    const context = page.context();

    await context.addCookies([
        {
            name: 'course-cookie',
            value: 'playwright',
            url: 'http://localhost:3000',
        },
    ]);

    const cookies = await context.cookies('http://localhost:3000');

    expect(cookies).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: 'course-cookie',
                value: 'playwright',
            }),
        ]),
    );
});