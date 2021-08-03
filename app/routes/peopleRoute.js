const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const router = Router()

router.get('/people', PeopleController.catchPeople)
router.get('/people/:id', PeopleController.catchPerson)
router.post('/people', PeopleController.createPerson)

module.exports = router
