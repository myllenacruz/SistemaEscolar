const database = require('../models')

class LevelController {
  static async catchLevels(req, res) {
    try {
      const allLevels = await database.Levels.findAll()
      return res.status(200).json(allLevels)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchLevel(req, res) {
    const { id } = req.params
    try {
      const oneLevel = await database.Levels.findOne({
        where: { id: Number(id) },
      })
      return res.status(200).json(oneLevel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body
    try {
      const newLevelCreated = await database.Levels.create(newLevel)
      return res.status(200).json(newLevelCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Levels.update(newInfo, { where: { id: Number(id) } })
      const updatedLevel = await database.Levels.findOne({
        where: { id: Number(id) },
      })
      return res.status(200).json(updatedLevel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params
    try {
      await database.Levels.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = LevelController