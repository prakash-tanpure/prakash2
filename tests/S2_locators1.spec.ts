import {test, expect, Locator} from "@playwright/test";

test('verify the page locators', async({page})=>{

    await page.goto("https://demo.nopcommerce.com/");

    //1)getByAltText
    const logo:Locator=page.getByAltText('nopCommerce demo store');
    
    //console.log(logo);
           await  expect(logo).toBeVisible();
     //expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

     //2) getByText
    //await expect(page.getByText("welcome to")).toBeVisible();
     //await expect(page.getByText(/welcome\s+To/i)).toBeVisible();


     //3)getByRole

     await page.getByRole("link",{name:'Register'}).click();

     await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();

     //4)getByLael

     await page.getByLabel('First name:').fill('praksh');
     await page.getByLabel('Last name:').fill('tanpure');

     //5) getByPlaceholder

     await page.getByPlaceholder("Search store").fill('Mac book');

     //6) getByTitle

     //7) getByTestID
     await page.getByTestId("Email").fill('prakashtanpure18@gmail.com');
});