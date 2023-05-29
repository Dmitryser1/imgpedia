const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const CommentsController = require('../controller/comments_controller')

router.post('/', authMiddleware, CommentsController.create)
router.get('/', CommentsController.getAll )


module.exports = router