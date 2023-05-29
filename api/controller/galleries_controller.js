const {Gallery} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')
const path = require('path')
const fs = require('fs');

class GalleryController{
    async create(req, res, next){
        try{

            const {GalleryName} = req.body
            let Mainphoto = req.files.photo
            let UsersId = req.user.id
            const gallery = await Gallery.create({GalleryName, Mainphoto, UsersId})
            return res.json(gallery)

        } catch(e){
            next(ApiError.badRequest("Something wrong"))
        }
    }

    async getAll(req, res){
        let UserId = req.user.id
        if(!UserId){
            let gallery 
            gallery = await Gallery.findAndCountAll()
        }
        else if (UserId) {gallery = await Gallery.findAll({where: {UserId}})}
        return res.json(gallery)
    }

    async delete(req, res, next) { //Удаление самой галереи
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

    async updatePhoto(req, res, next){
        try{
            const{} 
            let pghoto = req.files.photo
            let galleryphoto = await Gallery.
        } catch(e){
            next(ApiError.badRequest("Something wrong"))
        }
    }


}

module.exports = new GalleryController