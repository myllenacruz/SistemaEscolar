const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')
const EnrollmentController = require('../controllers/EnrollmentController')

const router = Router()

router.get('/people', PeopleController.catchPeople)
router.get('/people/active', PeopleController.catchActivePeople)
router.get('/people/:id', PeopleController.catchPerson)
router.post('/people', PeopleController.createPerson)
router.put('/people/:id', PeopleController.updatePerson)
router.delete('/people/:id', PeopleController.deletePerson)

router.get('/people/:studentId/enrollment/:enrollmentId', EnrollmentController.catchEnrollment)
router.post('/people/:studentId/enrollment', EnrollmentController.createEnrollment)
router.put('/people/:studentId/enrollment/:enrollmentId', EnrollmentController.updateEnrollment)
router.delete('/people/:studentId/enrollment/:enrollmentId', EnrollmentController.deleteEnrollment)
router.get('/people/:studentId/enrollment', PeopleController.catchEnrollment)
router.get('/people/enrollment/:classId/confirmed', EnrollmentController.catchEnrollmentsByClass)
router.get('/people/enrollment/full', EnrollmentController.catchFullClasses)
router.post('/people/:studentId/cancel', PeopleController.cancelPerson)

router.post('/people/:id/restore', PeopleController.restorePerson)
router.post('/people/:studentId/enrollment/:enrollmentId/restore', EnrollmentController.restoreEnrollment)

module.exports = router
