import { test, expect } from '@playwright/test';


//Ejecutar desde consola: npx playwright test -g "test2"

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
  // Maximizar el navegador
  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto('https://duckduckgo.com');
  await page.locator('input[name="q"]').fill('Gatitos');
  await page.keyboard.press('Enter');

  // Esperar a que carguen los resultados
  await page.waitForSelector('ol[class*="react-results"]');

  // Dos scrolls hacia abajo
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(500);
  await page.mouse.wheel(0, 600);
});