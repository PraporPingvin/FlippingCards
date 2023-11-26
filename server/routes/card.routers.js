const {Router} = require("express")
const cardController = require("../controllers/cardController")

const router = Router()

router.post('/create',cardController.createCard)
router.get('/get',cardController.getCards)

module.exports = router