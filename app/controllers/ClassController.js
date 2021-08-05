const database = require('../models')

class ClassController {
  static async catchClasses(req, res) {
    try {
      const allClasses = await database.Classes.findAll()
      return res.status(200).json(allClasses)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchClass(req, res) {
    const { id } = req.params
    try {
      const oneClass = await database.Classes.findOne({
        where: { id: Number(id) },
      })
      return res.status(200).json(oneClass)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createClass(req, res) {
    const newClass = req.body
    try {
      const newClassCreated = await database.Classes.create(newClass)
      return res.status(200).json(newClassCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Classes.update(newInfo, { where: { id: Number(id) } })
      const updatedClass = await database.Classes.findOne({
        where: { id: Number(id) },
      })
      return res.status(200).json(updatedClass)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params
    try {
      await database.Classes.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restoreClass(req, res) {
    const { id } = req.params 
    try {
      await database.Classes.restore( { where: { id: Number(id) } })
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ClassController
