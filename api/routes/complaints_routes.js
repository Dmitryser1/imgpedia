const Router = require('express')
const router = new Router()

router.use('/users')
router.use('/types')
router.use('/galleries')
router.use('/photos')
router.use('/complaints')
router.use('/comments')

module.exports = router