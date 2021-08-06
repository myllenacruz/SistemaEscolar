const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const router = Router()

router.get('/people', PeopleController.catchActivePeople)
router.get('/people/all', PeopleController.catchPeople)
router.get('/people/:id', PeopleController.catchPerson)
router.post('/people', PeopleController.createPerson)
router.put('/people/:id', PeopleController.updatePerson)
router.delete('/people/:id', PeopleController.deletePerson)

router.get('/people/:studentId/enrollment/:enrollmentId', PeopleController.catchEnrollment)
router.post('/people/:studentId/enrollment', PeopleController.createEnrollment)
router.put('/people/:studentId/enrollment/:enrollmentId', PeopleController.updateEnrollment)
router.delete('/people/:studentId/enrollment/:enrollmentId', PeopleController.deleteEnrollment)
router.get('/people/:studentId/enrollment', PeopleController.catchEnrollments)
router.get('/people/enrollment/:classId/confirmed', PeopleController.catchEnrollmentsByClass)

router.post('/people/:id/restore', PeopleController.restorePerson)
router.post('/people/:studentId/enrollment/:enrollmentId/restore', PeopleController.restoreEnrollment)

module.exports = router
