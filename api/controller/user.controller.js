class UserController{
    async createUser(req,res){
        const {name, characteristic ,password, email} = req.body
        console.log(name, characteristic ,password, email)
        res.json('ok')

    }
    async getUsers(req,res){
        
    }
    async getOneUser(req,res){
        
    }
    async updateUser(req,res){
        
    }
    async deleteUser(req,res){
        
    }

}

module.exports = new UserController()