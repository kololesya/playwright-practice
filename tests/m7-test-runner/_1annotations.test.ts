import { test, expect } from '@playwright/test';

test.skip('This test is skipped', async () => {
    expect(1).toBe(1);
});

test.fixme('This test is marked for a future fix', async () => {
    expect(1).toBe(1);
});

test.fail('This test is expected to fail', async () => {
    expect(1).toBe(2);
});