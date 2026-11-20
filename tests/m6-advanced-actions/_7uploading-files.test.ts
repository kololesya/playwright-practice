import { test, expect } from '@playwright/test';

test('Playwright can set a file on an upload input', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => {
        const input = document.createElement('input');
        input.type = 'file';
        input.id = 'file-upload';
        document.body.append(input);
    });

    const fileInput = page.locator('#file-upload');
    await fileInput.setInputFiles('test-data/notes.txt');

    const uploadedFileName = await fileInput.evaluate(
        (input: HTMLInputElement) => input.files?.[0]?.name ?? null,
    );

    expect(uploadedFileName).toBe('notes.txt');
});