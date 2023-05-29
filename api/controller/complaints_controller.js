const {Complaint} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class complaintsController{
    async create (req, res){
        try{
            const {Text, Status} = req.body
            let UserId = req.user.id
            const complaint = await Complaint.create({Text, Status, UserId})
            return res.json(complaint)
        } catch(e){
            next(ApiError.badRequest("Создание жалобы не произошло"))
        }
    }

    async getAll(req, res){
        let complaint 
            complaint = await Complaint.findAndCountAll()
            return res.json(complaint)
    }

    async updateStatus(req, res, next){
        try{
            const {id} = req.params.id
            const {Status} = req.body //Статус, на который мы хотим поменять, получаем с фронта 
            const complaint = await Complaint.findByPk(id);
            if(!complaint){
                return next(ApiError.internal(`Жалоба id = ${id} не найдена`));
            }
            console.log(Status)
            complaint.Status = Status
            await complaint.save()
            return res.json(complaint)
            
        }  catch(e){
            console.error(e);
            next(ApiError.internal(`Не удалось обновить жалобу с id=${id}`));
        }

    }

    async del(req, res, next){
        try {
            const {id} = req.body
            await Complaint.destroy({
                where:{id:id}
            })
            return res.json()

        } catch(e){
            next(ApiError.badRequest("Something wrong"))  
        }
    }

}

module.exports = new complaintsController()