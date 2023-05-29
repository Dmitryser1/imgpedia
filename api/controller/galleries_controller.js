const {Gallery, Photo} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')
const uuid = require('uuid')
const path = require('path')
const fs = require('fs');


class GalleryController{
    async create(req, res, next){
        try{

            const {GalleryName} = req.body
            let  Mainphoto = req.files.photo
            let filename = uuid.v4() + '.jpg'
            await Mainphoto.mv(path.resolve(__dirname, '...', 'static', filename))

            let UsersId = req.user.id
            const gallery = await Gallery.create({GalleryName, Mainphoto, UsersId})
            return res.json(gallery)

        } catch(e){
            next(ApiError.badRequest("Something wrong"))
        }
    }

    async getAll(req, res){
        let UserId = req.user.id
        if(!UserId){ // Для вывода на страничке Димы всех галерей
            let gallery 
            gallery = await Gallery.findAndCountAll()
        }
        else if (UserId) {gallery = await Gallery.findAll({where: {UserId}})}
        return res.json(gallery)
    }

    async del(req, res, next) { //Удаление самой галереи
        try{
            const {id} = req.body
            await Gallery.destroy( {
                where:{id:id}
            })
            return res.json()
        }
        catch (e){
            next(ApiError.badRequest("Something wrong"))
        }
    }
    
    async getAllPhoto(req, res, next){ //Возращает все фото, которые принадлежат галерее
        try{
            const {id} = req.params.id
            let photo = await Photo.findAll({where:{id}})
            return res.json(photo)

        }catch(e){
            next(ApiError.badRequest("Something wrong"))
        }

    }
    
    async updatePhoto(req, res, next){
        try{ // Создает обьект фотку с привязкой к галерее, Котороую мы передаем ( в текущую, тут будет где-то метод гета по всем фото, которая этой галерее принадлежат)
            const {GalleryId} = req.body
            let photo1 = req.files.photo
            let filename = uuid.v4() + '.jpg'
            await photo.mv(path.resolve(__dirname, '...', 'static', filename))
            const photo = await Photo.create({GalleryId, photo1})
            return res.json(Photo)

        } catch(e){
            next(ApiError.badRequest("Something wrong"))
        }
    }
}

module.exports = new GalleryController()