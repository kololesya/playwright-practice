import { test } from '@playwright/test';

test('The test runner executes the first test', async () => {
    console.log('First test is running');
});

test('The test runner executes a second test in the same file', async () => {
    console.log('Second test is running');
});