const { Router } = require('express')
const ClassController = require('../controllers/ClassController')

const router = Router()
router.get('/classes', ClassController.catchClasses)
router.get('/classes/:id', ClassController.catchClass)
router.post('/classes', ClassController.createClass)
router.put('/classes/:id', ClassController.updateClass)
router.delete('/classes/:id', ClassController.deleteClass)
router.post('/classes/:id/restore', ClassController.restoreClass)

module.exports = router
