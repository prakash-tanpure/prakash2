import {test, expect, Locator} from "@playwright/test";

test('verify the page locators', async({page})=>{


    //1)getByAltText

           await page.goto("https://demo.nopcommerce.com/");

    //1)getByAltText
           const logo:Locator=page.getByAltText('nopCommerce demo store');
    
       //console.log(logo);
           await  expect(logo).toBeVisible();


await page.goto('file:///D:/VSCode/MyTS/playwright_locator_practice_page.html');
     //2) getByText
    //const test:Locator= await page.getByText('Welcome to Playwright Automation Testing');
    //await expect(test).toBeVisible();
    await expect(page.getByText('Welcome to Playwright Automation Testing')).toBeVisible();

     //3)getByRole
 await page.getByRole('button',{name: 'Submit'}).click();
     
     //4)getByLael
await page.getByLabel('username').fill('prakash');

     //5) getByPlaceholder
 await page.getByPlaceholder('Enter your email').fill('prakash@gmail.com')

     //6) getByTitle
     await page.getByTitle('Save the form').click();
     //7) getByTestID
     await page.getByTestId('login-username').fill('praksh');
       await expect(page.getByTestId('login-button')).toBeVisible();
     await page.getByTestId('login-button').click();
});