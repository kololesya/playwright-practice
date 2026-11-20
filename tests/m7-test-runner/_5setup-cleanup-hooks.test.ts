import { test, expect } from '@playwright/test';

test.describe('Browser storage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test.afterEach(async ({ page }) => {
        await page.evaluate(() => localStorage.removeItem('hook-test'));
    });

    test('stores a value in localStorage', async ({ page }) => {
        await page.evaluate(() => localStorage.setItem('hook-test', 'first value'));

        const value = await page.evaluate(() => localStorage.getItem('hook-test'));

        expect(value).toBe('first value');
    });

    test('can store another value under the same key', async ({ page }) => {
        await page.evaluate(() => localStorage.setItem('hook-test', 'second value'));

        const value = await page.evaluate(() => localStorage.getItem('hook-test'));

        expect(value).toBe('second value');
    });
});