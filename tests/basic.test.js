const { test, expect } = require('@playwright/test');
const { BasicPage, basicPageSelectors } = require('../pages/basic.page')
const { LoginPage, loginPageSelectors } = require('../pages/login.page')
const loginInfo = require('../projectVariables/loginInfo.json')

let loginPage, basicPage

test.describe("WAN Profile Feature Test", () => {
    test("Add a new Wan profile", async ({ page }) => {
        loginPage = new LoginPage(page)
        basicPage = new BasicPage(page)

        await loginPage.navigate("/")
        await basicPage.accessBasic()
        // await loginPage.loginToTheRouter(loginInfo.username, loginInfo.password)
        // await basicPage.verifyNetworkMapText().then((text)=>{
        //     expect(text).toContain('Network Map');
        // })
        // await basicPage.addANewWanFromBasic()
        // await basicPage.verifyNewAddedWan().then(locator=>{
        //     expect(locator).toBe("Test_Automation")
        // })

    })
})