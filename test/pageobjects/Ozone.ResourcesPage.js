class Resources{
    get resources_txt(){
        return $('//label[@class="z-label__text label-20 "]')
    }
    get resourceProvider(){
        return $('#Resources_ViewProvider')
    }

}

export default new Resources();