import { test, expect } from '@playwright/test';

test('Browser storage values can be read from the page', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => {
        localStorage.setItem('course-item', 'saved locally');
        sessionStorage.setItem('session-item', 'saved for this session');
    });

    const storageValues = await page.evaluate(() => ({
        local: localStorage.getItem('course-item'),
        session: sessionStorage.getItem('session-item'),
    }));

    expect(storageValues.local).toBe('saved locally');
    expect(storageValues.session).toBe('saved for this session');
});