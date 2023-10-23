const {Router} = require("express")
const setController = require("../controllers/setController")

const router = Router()

router.post('/create',setController.createSet)
router.get('/getSets',setController.getSets)
router.get('/delete',setController.deleteSet)
router.patch('/update',setController.updateSet)

module.exports = router