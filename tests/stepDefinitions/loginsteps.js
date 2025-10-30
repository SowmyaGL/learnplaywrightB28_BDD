

const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")


Given('user launch the Application', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
});

When('User enter username as {string} and password as {string}', async function (username, password) {
   
    await page.locator('//input[@name="username"]').fill(username)
    await page.locator('//input[@name="password"]').fill(password)

});

When('user click on login button', async function () {
    await page.locator('button[type="submit"]').click()
});

Then('user should be navigated to dashbaord page', async function () {

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
});

Then('user should see login error message', async function () {
   
    await expect(page.getByText("Invalid credentials")).toBeVisible()
});


// Given('user launch the Application', function () {
    
// });

// When('User enter username as {string} and password as {string}', function (string, string2) {
    
// });


// When('user click on login button', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
// });


// Then('user should be navigated to dashbaord page', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
// });


// Then('user should see login error message', function () {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
// });