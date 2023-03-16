class HomePage{
    get releases(){
        return $("//label[text()='Releases']")
    }
    get dashboard(){
        return $('//label[contains(.,"Dashboard")]')
    }
    get ResourcesModule(){
        return $('//label[contains(.,"Resources")]')
    }
}
export default new HomePage(); 