const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const router = Router()

router.get('/people', PeopleController.catchPeople)
router.get('/people/:id', PeopleController.catchPerson)
router.post('/people', PeopleController.createPerson)
router.put('/people/:id', PeopleController.updatePerson)
router.delete('/people/:id', PeopleController.deletePerson)
router.get('/people/:studentId/enrollment/:enrollmentId', PeopleController.catchEnrollment)

module.exports = router
