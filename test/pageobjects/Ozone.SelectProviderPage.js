class selectProvider{
    get createNewProvider_txt(){
        return $('//label[contains(.,"Create a new Provider")]')
    }
    get github(){
        return $('//label[contains(.,"Github")]')
    }

}
export default new selectProvider();