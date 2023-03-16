import OzoneCred from "./Ozone.cred.js";
import genric from "./genric.js";
import { expect } from "chai"

class Dashboard{
    get ozoneLogo(){
        return $('//img[@src="/assets/logo.f763d31c.svg"]')
    }
    get login_text(){
        return $('//label[contains(.,"Log in")]')
    }
    get accountName_tf(){
        return $('#Login_AccountNameField')
    }
    get continue_btn(){
        return $('#Login_AccountNameSubmit')
    }
    get signUp_lnk(){
        return $('#Login_SignUp')
    }

    async EnterAccountName(accountName){
        //naviagate to application by entering url
        await browser.url(OzoneCred.credentials.url);
        await browser.maximizeWindow();
        
        //assertion: Dashboard title 
        let DashboardTitle = await browser.getTitle();
        console.log("the title of the Dashboard is "+DashboardTitle);
        expect(DashboardTitle).to.equal('Ozone');

        //assertion: ozone logo andlogin text 
        expect(await genric.isElementDisplayed(await this.ozoneLogo)).to.be.true;
        expect(await genric.isElementDisplayed(await this.login_text)).to.be.true;
        
        //enter accountName
        expect(await genric.isElementDisplayed(await this.accountName_tf)).to.be.true;
        await genric.click(await this.accountName_tf)
        await this.accountName_tf.setValue(accountName)
        
        //click on coontinue
        expect(await genric.isElementDisplayed(await this.continue_btn)).to.be.true;
        await genric.click(await this.continue_btn)    
    }
}
export default new Dashboard();