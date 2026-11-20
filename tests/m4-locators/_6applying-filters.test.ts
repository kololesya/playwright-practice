import { test, expect } from '@playwright/test';

test('The Competition row shows a 2% rate', async ({ page }) => {
    await page.goto('/savings.html');

    const competitionRow = page
        .getByRole('row')
        .filter({ hasText: 'Competition' });

    await expect(
        competitionRow,
        'The table should contain one Competition row',
    ).toHaveCount(1);

    const rateCell = competitionRow.getByRole('cell').nth(1);

    await expect(
        rateCell,
        'The Competition row should show a 2% rate',
    ).toHaveText('2%');
});