import{ Page } from '@playwright/test';

export class LoginPage{
    private goSignup;
    private signupName;
    private signupEmail;
    private signupButton;
    readonly title;
    private password;
    readonly dobDay;
    readonly dobMonth;
    readonly dobYear;
    readonly newsletter;
    readonly optin;

    private firstName;
    private lastName;
    private company;
    private address;
    private address2;
    readonly country;
    private state;
    private city;
    private zipCode;
    private mobileNumber;
    private buttonAccount;


    constructor(private page: Page){

        this.goSignup = this.page.locator('a[href="/login"]');
        this.signupName = this.page.locator('[data-qa="signup-name"]');
        this.signupEmail = this.page.locator('[data-qa="signup-email"]');
        this.signupButton = this.page.locator('[data-qa="signup-button"]')
        this.title = this.page.locator("#id_gender1");
        this.password = this.page.locator('[data-qa="password"]');
        this.dobDay = this.page.locator('[data-qa="days"]');
        this.dobMonth = this.page.locator('[data-qa="months"]');
        this.dobYear = this.page.locator('[data-qa="years"]');
        this.newsletter = this.page.locator("#newsletter");
        this.optin = this.page.locator("#optin");

        this.firstName = this.page.locator('[data-qa="first_name"]');
        this.lastName = this.page.locator('[data-qa="last_name"]');
        this.company = this.page.locator('[data-qa="company"]');
        this.address = this.page.locator('[data-qa="address"]');
        this.address2 = this.page.locator('[data-qa="address2"]');
        this.country = this.page.locator('[data-qa="country"]');
        this.state = this.page.locator('[data-qa="state"]');
        this.city = this.page.locator('[data-qa="city"]');
        this.zipCode = this.page.locator('[data-qa="zipcode"]');
        this.mobileNumber = this.page.locator('[data-qa="mobile_number"]');
        this.buttonAccount = this.page.locator('[data-qa="create-account"]');

    }
    
    async openApp(){
        await this.page.goto("https://automationexercise.com/");
    }

    async userGoSignup(){
        await this.goSignup.click();
    }

    async openLoginPage(){
        await this.page.goto("https://automationexercise.com/login");
    }

    async fillSignupDetail(signupNameValue: string, signupEmailValue: string){
        await this.signupName.fill(signupNameValue);
        await this.signupEmail.fill(signupEmailValue);
    }

    async clickSignupButton(){
        await this.signupButton.click();
    }

    // async openSignupPage(){
    //     await this.page.goto("https://automationexercise.com/signup");
    // }

    async userTitle(){
        await this.title.check();
    }

    async enterPassword(passwordValue: string){
        await this.password.fill(passwordValue);
    }

    async chooseDobDay(){
        await this.dobDay.selectOption("2");
    }

    async chooseDobMonth(){
        await this.dobMonth.selectOption("6");
    }

    async chooseDobYear(){
        await this.dobYear.selectOption("1983");
    }

    async checkNewsletter(){
        await this.newsletter.check();
    }

    async checkOptin(){
        await this.optin.check();
    }

    async userAddressInfo(firstNmaeValue: string,
                          lastNameValue: string,
                          companyValue: string,
                          addressValue: string,
                          address2Value: string,
                          stateValue: string,
                          cityValue: string,
                          zipcodeValue: string,
                          mobileNumberValue: string)
    {
        await this.firstName.fill(firstNmaeValue);
        await this.lastName.fill(lastNameValue);
        await this.company.fill(companyValue);
        await this.address.fill(addressValue);
        await this.address2.fill(address2Value);
        await this.state.fill(stateValue);
        await this.city.fill(cityValue);
        await this.zipCode.fill(zipcodeValue);
        await this.mobileNumber.fill(mobileNumberValue);
    }

    async selectCountry(){
        await this.country.selectOption("India");
    }

    async pushAccount(){
        await this.buttonAccount.click();
    }
}