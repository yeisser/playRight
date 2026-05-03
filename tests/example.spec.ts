import { test, expect } from '@playwright/test';

test('Aprendiendo playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.locator('')
  await page.pause();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.pe')
  await page.locator('')
  await page.pause();
});

test('test2', async ({ page }) => {
  await page.goto('https://www.google.com')
  await page.getByLabel('Search', { exact: true }).fill('Gatitos');
  await page.keyboard.press('Enter');
  await page.locator('.sPlQxd').click();
});