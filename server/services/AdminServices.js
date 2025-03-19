class AdminServices{
    constructor(models){
        this.models = models
    }

    async getInfo(){
        const info = await this.models.adminns.find()
        return info
    }

    async updateInfo(title,text){
        console.log(title,text)
        const updateInfo = await this.models.adminns.findByIdAndUpdate("67d81ffe7cfd981f7cc7abcb", {[title] : text})
        return updateInfo
    }
}

module.exports = AdminServices