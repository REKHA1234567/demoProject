import genric from "../pageobjects/genric.js";
import OzoneCred from "../pageobjects/Ozone.cred.js";
import OzoneDashboard from "../pageobjects/Ozone.dashboardPage.js";
import OzoneLoginPage from "../pageobjects/Ozone.loginPage.js";
import OzoneHomePage from "../pageobjects/Ozone.HomePage.js";
import OzoneResourcesPage from "../pageobjects/Ozone.ResourcesPage.js";
import OzoneProviderListPage from "../pageobjects/Ozone.providerListPage.js";
import OzoneSelectProviderPAge from "../pageobjects/Ozone.SelectProviderPAge.js";
import OzoneFillDetailsPage from "../pageobjects/Ozone.FillDetailsPage.js";

import { expect } from "chai"

describe('Login to application', async() => {
    it('enter account name', async() => {    
       await OzoneDashboard.EnterAccountName(OzoneCred.credentials.accountName);     
    });

    it('enter mail id and password for the login ',async()=>{       
       await OzoneLoginPage.loginToApplication(OzoneCred.credentials.loginUsername,OzoneCred.credentials.loginPassword)
    })

    it('create a new Provider from Resources module',async ()=>{
        //assertion: get title of home page
        let HomePageTitle = await browser.getTitle()
        console.log("the home page tile is"+HomePageTitle);

        //assertion: dashboard module is displayed
        expect(await genric.isElementDisplayed(await OzoneHomePage.dashboard)).to.be.true

        //assertion: resources module is displayed
        expect(await genric.isElementDisplayed(await OzoneHomePage.ResourcesModule)).to.be.true;
        await genric.click(await OzoneHomePage.ResourcesModule)
        
        //assertion: Resources text is displayed
        expect(await genric.isElementDisplayed(await OzoneResourcesPage.resources_txt)).to.be.true;

        //click on Provider
        expect(await genric.isElementDisplayed(await OzoneResourcesPage.resourceProvider)).to.be.true;
        await genric.click(await OzoneResourcesPage.resourceProvider)

        //assertion: Provider List text is displayed
        expect(await genric.isElementDisplayed(await OzoneProviderListPage.providerList_txt)).to.be.true;

        //click on create a new provider
        expect(await genric.isElementDisplayed(await OzoneProviderListPage.createNewProvide_btn)).to.be.true;
        await genric.click(await OzoneProviderListPage.createNewProvide_btn)
    })
    
    it('select git hub from Provider and provide the github details',async()=>{
        
        //assertion: create a new Provider text is displayed
        expect(await genric.isElementDisplayed(await OzoneSelectProviderPAge.createNewProvider_txt)).to.be.true

        //select gitHub
        expect(await genric.isElementDisplayed(await OzoneSelectProviderPAge.github)).to.be.true;
        await genric.click(await OzoneSelectProviderPAge.github)

        //assertion: gitHub icon is present
        expect(await genric.isElementDisplayed(await OzoneFillDetailsPage.gitHub_icon)).to.be.true;

        //fill the github details
        await OzoneFillDetailsPage.fillGitHubDetails()
     
        //assertion: successfull toast message
        expect(await genric.isElementDisplayed(await OzoneFillDetailsPage.toastmsg)).to.be.true;
    })
});