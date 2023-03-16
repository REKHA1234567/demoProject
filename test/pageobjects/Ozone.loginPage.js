import { expect } from "chai"
import genric from "../pageobjects/genric.js";
import OzoneCred from "./Ozone.cred.js";

class loginPage{

    get ozoneLogo(){
        return $('//img[@src="/assets/logo.f763d31c.svg"]')
    }
    get welcomeMsg(){
        return $(`//label[contains(.,"${OzoneCred.credentials.accountName}")]`)
    }
    get email_tf(){
        return $('//input[@name="email"]')
    }
    get password_tf(){
        return $('//input[@name="password"]')
    }
    get continue_btn(){
        return $('#Login_CredentialsSubmit')
    }
    get rememberMe_chkbox(){
        return $('//span[@class="z_checkmark-sm"]')
    }

    async loginToApplication(email,password){

            //assertion: ozonelogo and text msg having account name
            expect(await genric.isElementDisplayed(await this.ozoneLogo)).to.be.true;
            expect(await genric.isElementDisplayed(await this.welcomeMsg)).to.be.true;
         
            //enter email
            expect(await genric.isElementDisplayed(await this.email_tf)).to.be.true;
            await genric.click(await this.email_tf)
            await this.email_tf.setValue(email)
    
            //enter password
            expect(await genric.isElementDisplayed(await this.password_tf)).to.be.true;
            await genric.click(await this.password_tf)
            await this.password_tf.setValue(password)
        
            //uncheck the rememeber me checkbox and click continue
            await genric.click(await this.rememberMe_chkbox)     
            expect(await genric.isElementDisplayed(await this.continue_btn)).to.be.true;
            await genric.click(await this.continue_btn)     
    }   
}

export default new loginPage();