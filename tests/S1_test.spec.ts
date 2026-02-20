
import {test,expect} from '@playwright/test';

test('verify the page titel', async({page})=>{

await page.goto('http://www.automationpractice.pl/index.php')

await expect(page).toHaveTitle(/My Shop/);
});