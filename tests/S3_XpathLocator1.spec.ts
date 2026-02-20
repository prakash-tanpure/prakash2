import { test, expect, Locator } from '@playwright/test';

test('test xpath locator', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/');

  const logo: Locator = page.locator('//header//img');
  await expect(logo).toBeVisible();

  await page.getByAltText('Picture of HTC smartphone').click();

  await page.goto('https://demowebshop.tricentis.com/');

  const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");

  // count
  const length: number = await products.count();
  console.log('Total products:', length);

  // get all product names
  const allProducts: string[] = await products.allTextContents();

  // first product text
  console.log('First product:', await products.first().textContent());

  // loop and print each product
  for (const pt of allProducts) {
    console.log(pt);
  }


  //text() fuction to get element
  const getText:Locator= page.locator("//a[text()='Register']");
   await expect(getText).toBeVisible();

});