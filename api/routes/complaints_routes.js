const Router = require('express')
const router = new Router()
const ComplaintsController = require("../controller/complaints_controller.js")
const authMiddleware = require('../middleware/authMiddleware.js')

router.post('/', ComplaintsController.create)
router.get('/', ComplaintsController.getAll)
router.post('/:id/update', ComplaintsController.updateStatus)
//router.delete('/', authMiddleware, ComplaintsController.del)


module.exports = router