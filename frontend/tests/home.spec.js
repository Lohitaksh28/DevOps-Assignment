import { test, expect } from '@playwright/test';

test('Page loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/DevOps Assignment/);
});

test('Backend message appears on UI', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Backend Message')).toBeVisible();
  await expect(page.locator('text=successfully integrated')).toBeVisible();
});

