const Router = require('express')
const router = new Router()

const UserController = require(' ../controller/user_controller')

/*
router.post('/client', UserController.createUser)
router.get('/client', UserController.getUsers)
router.get('/client', UserController.getOneUser)
router.put('/client', UserController.updateUser)
router.delete('/client', UserController.deleteUser)
*/
router.post('/registration')

module.exports = router