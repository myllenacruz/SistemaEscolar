const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const router = Router()

router.get('/people', PeopleController.catchPeople)
router.get('/people/:id', PeopleController.catchPerson)

module.exports = router
