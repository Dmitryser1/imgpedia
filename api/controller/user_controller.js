const ApiError = require('../error/ApiError')


const generateJwt = (id, email,name, role) => {
    return jwt.sign(
        {id, email,name, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'},
        {}
    )
}


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

    async registration (req, res){

    }

    async login (req, res){
        
    }

    async check (req, res){
        
    }

}

module.exports = new UserController()