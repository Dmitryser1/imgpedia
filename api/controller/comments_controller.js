const {Comments} = require('../models/models.js')


class CommentsController{
    async create(req, res){
        const {Text, GalleryId} = req.body
        let UserId = req.user.id
        const Comment = await Comments.create({Text, UserId, GalleryId})
        return res.json(Comment)
    }

    async getAll(req, res){
        const {UserId, GalleryId} = req.query
        let Comment = await Comments.findAll({where: {UserId, GalleryId}})
        return res.json(Comment)
    }

}

module.exports = new CommentsController()