const database = require('../models')

class PeopleController {
  static async catchPeople(req, res) {
    try {
      const allPeople = await database.People.findAll()
      return res.status(200).json(allPeople)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchPerson(req, res) {
    const { id } = req.params
    try {
      const onePerson = await database.People.findOne({
        where: { id: Number(id) },
      })
      return res.status(200).json(onePerson)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body
    try {
      const newPersonCreated = await database.People.create(newPerson)
      return res.status(200).json(newPersonCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PeopleController
