const loginPageSelectors={
usernameInputSelector:"#usernamefld",
passwordInputSelector :"#passwordfld",
loginBtnSelector :"#loginBtn"
}

class LoginPage{

    constructor(page){
        this.page=page
    }

    async navigate(url) {
        await this.page.goto(url)
    }
    async loginToTheRouter(uName,pass) {
        await this.page.fill(loginPageSelectors.usernameInputSelector,uName)
        await this.page.type(loginPageSelectors.passwordInputSelector, pass)
        await this.page.click(loginPageSelectors.loginBtnSelector);
    }

}

module.exports ={LoginPage,loginPageSelectors}