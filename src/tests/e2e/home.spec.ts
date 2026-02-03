import { test, expect } from '@playwright/test';

test('home page loads and displays content', async ({ page }) => {
  await page.goto('/');

  // Check for announcement bar
  await expect(page.locator('text=Free Shipping PAN India')).toBeVisible();

  // Check for hero section
  await expect(page.locator('text=Thoughtful design. Joyful living.')).toBeVisible();

  // Check for navigation
  await expect(page.locator('text=HomeCanvas')).toBeVisible();
});

