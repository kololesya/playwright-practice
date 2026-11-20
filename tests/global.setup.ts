import { test as setup, expect } from '@playwright/test';

setup('Local app is available', async ({ request }) => {
    const response = await request.get('/');

    expect(response.ok(), 'The local app should respond successfully').toBeTruthy();
});