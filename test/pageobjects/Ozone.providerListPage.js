class ProviderList{
    get providerList_txt(){
        return $('//label[contains(.,"Provider List")]')
    }
    get createNewProvide_btn(){
        return $('//label[contains(.,"Create a new Provider")]')
    }

}
export default new ProviderList();