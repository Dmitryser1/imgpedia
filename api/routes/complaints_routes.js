const Router = require('express')
const router = new Router()
const CommentsController = require("../controller/complaints_controller.js")
const authMiddleware = require('../middleware/authMiiddleware.js')

router.create('/', CommentsController.create)
router.get('/', CommentsController.getAll)
router.post('/:id/update', CommentsController.updateStatus)
router.delete('/:id', authMiddleware, CommentsController.delete)


module.exports = router