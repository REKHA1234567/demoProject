import OzoneCred from "./Ozone.cred.js";
import genric from "./genric.js";
import { expect } from "chai"

class fillGitHubDetails{
    get gitHub_icon(){
        return $('//label[contains(.,"Github")]')
    }
    get name_tf(){
        return $('//input[@name="name"]')
    }
    get description_tf(){
        return $('//input[@name="description"]')
    }
    get userName_tf(){
        return $('//input[@name="user_name"]')
    }
    get personalAccess_tf(){
        return $('//input[@name="password"]')
    }
    get syncPersonalRepo_chkbox(){
        return $('//input[@name="sync_user_repos"]')
    }
    get testMyIntegration_btn(){
        return $('//button[contains(.,"Test my integration")]')
    }
    get toastmsg(){
        return $('//label[contains(.,"Integration test successfully completed")]')
    }

    async fillGitHubDetails(){
        expect(await genric.isElementDisplayed(await this.name_tf)).to.be.true;
        await genric.click(await this.name_tf)
        await this.name_tf.setValue(OzoneCred.credentials.gitHubName)

        expect(await genric.isElementDisplayed(await this.description_tf)).to.be.true;
        await genric.click(await this.description_tf)
        await this.description_tf.setValue(OzoneCred.credentials.gitHubDescription)

        await this.userName_tf.scrollIntoView()
        expect(await genric.isElementDisplayed(await this.userName_tf)).to.be.true;
        await genric.click(await this.userName_tf)
        await this.userName_tf.setValue(OzoneCred.credentials.gitHubUserName)
        
        expect(await genric.isElementDisplayed(await this.personalAccess_tf)).to.be.true;
        await genric.click(await this.personalAccess_tf)
        await this.personalAccess_tf.setValue(OzoneCred.credentials.gitHubPersonalAccessToken)
        
        expect(await genric.isElementDisplayed(await this.syncPersonalRepo_chkbox)).to.be.false;
        await genric.click(await this.syncPersonalRepo_chkbox)
           
        await this.testMyIntegration_btn.scrollIntoView()
        expect(await genric.isElementDisplayed(await this.testMyIntegration_btn)).to.be.true;
        await genric.click(await this.testMyIntegration_btn)
  
    }
}
export default new fillGitHubDetails();