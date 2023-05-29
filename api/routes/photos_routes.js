const Router = require('express')
const router = new Router()
const PhotoController = require('../controller/photos_controller.js')


router.get('/', PhotoController.getAll )
//router.delete('/', PhotoController.del)

module.exports = router
