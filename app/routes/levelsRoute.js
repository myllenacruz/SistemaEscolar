const { Router } = require('express')
const LevelController = require('../controllers/LevelController')
const router = Router()

router.get('/levels', LevelController.catchLevels)
router.get('/levels/:id', LevelController.catchLevel)
router.post('/levels', LevelController.createLevel)
router.put('/levels/:id', LevelController.updateLevel)
router.delete('/levels/:id', LevelController.deleteLevel)

module.exports = router
