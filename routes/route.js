const {Router} = require('express')
const router = Router()
const routeController = require('../controller/routeController')

router.get('/', routeController.Hello)
router.post('/', routeController.City)

module.exports = router