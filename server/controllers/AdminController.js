class AdminController{
    async getInfo(req,res){
        try {
            if(req.params.id === process.env.ADMIN){
                const info = await req.app.locals.services.admin.getInfo()
                res.json(info)
            }else{
                res.json("error")
            }
        } catch (error) {
            res.json(error)
        }
    }
    
    async updateInfo(req,res){
        try {
            if(req.params.id === process.env.ADMIN){
                const {title,text} = req.body
                const updateinfo = await req.app.locals.services.admin.updateInfo(title,text)
                res.json(updateinfo)
            }else{
                res.json("error")
            }
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = AdminController