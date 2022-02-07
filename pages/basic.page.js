
const basicPageSelectors = {
    basicTabSelector: "[data-id=basic]",
    networkMapSelector: "[data-target-id=basic_map_content]",
    wanTextSelector: "[data-href='/advance_network_wan_redefined.php']",
    addWanBtnSelector: "#add_wan_btn",
    connectionTypeDropDownSelector: "#wan_mode_selector",
    physicalInterfaceDropDownSelector: "#network_port",
    connectionNameInputSelector: "#connection_name",
    saveButtonSelector: "#advance_config_save",
    wanSelector: "//strong[contains(text(),'Test_Automation')]"
}

class BasicPage {

    constructor(page) {
        this.page = page
    }


    async accessBasic() {
        await this.page.click(basicPageSelectors.basicTabSelector)
    }

    async addANewWanFromBasic() {
        await this.page.locator("text=Networking").first().click()
        await this.page.click(basicPageSelectors.wanTextSelector)
        await this.page.click(basicPageSelectors.addWanBtnSelector)
        await this.page.selectOption(basicPageSelectors.connectionTypeDropDownSelector, "viasat_ka")
        await this.page.selectOption(basicPageSelectors.physicalInterfaceDropDownSelector, "enp2s0")
        await this.page.type(basicPageSelectors.connectionNameInputSelector, "Test Automation")
        await this.page.click(basicPageSelectors.saveButtonSelector)
    }

    async verifyNetworkMapText() {
        return await this.page.innerText(basicPageSelectors.networkMapSelector)

    }

    async verifyNewAddedWan() {
        return await this.page.innerText(basicPageSelectors.wanSelector)

    }


}

module.exports = { BasicPage, basicPageSelectors }