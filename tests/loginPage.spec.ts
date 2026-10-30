import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test("User Registration Successfully", async({page})=>{
     const loginPage = new LoginPage(page);

     await loginPage.openApp();
     await loginPage.userGoSignup();
     await loginPage.openLoginPage();
     await loginPage.fillSignupDetail("Sanji", `sanji_${Date.now()}@example.com`);
     await loginPage.clickSignupButton();
     //await loginPage.openSignupPage();
     await loginPage.userTitle();
     await expect(loginPage.title).toBeChecked();
     await loginPage.enterPassword("sanji120");
     await loginPage.chooseDobDay();
     await expect(loginPage.dobDay).toHaveValue("2");
     await loginPage.chooseDobMonth();
     await expect(loginPage.dobMonth).toHaveValue("6");
     await loginPage.chooseDobYear();
     await expect(loginPage.dobYear).toHaveValue("1983");
     await loginPage.checkNewsletter();
     await expect(loginPage.newsletter).toBeChecked();
     await loginPage.checkOptin();
     await expect(loginPage.optin).toBeChecked();

     await loginPage.userAddressInfo("Sanjay", "Panda", "TFT", "A-185", "A Block", "UP", "Noida", "201301", "9934267854");

     await loginPage.selectCountry();
     await expect(loginPage.country).toHaveValue("India");

     await loginPage.pushAccount();
    
})