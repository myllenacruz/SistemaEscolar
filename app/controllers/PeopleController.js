const { PeopleServices } = require('../services')
const peopleServices = new PeopleServices()

class PeopleController {
  static async catchActivePeople(req, res) {
    try {
      const activePeople = await peopleServices.catchActiveRegisters()
      return res.status(200).json(activePeople)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchPeople(req, res) {
    try {
      const allPeople = await peopleServices.catchAllRegisters()
      return res.status(200).json(allPeople)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchPerson(req, res) {
    const { id } = req.params
    try {
      const onePerson = await peopleServices.catchOneRegister({ id })
      return res.status(200).json(onePerson)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body
    try {
      const newPersonCreated = await peopleServices.createRegister(newPerson)
      return res.status(200).json(newPersonCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await peopleServices.updateRegister(newInfo, Number(id))
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params
    try {
      await peopleServices.deleteRegister(Number(id))
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restorePerson(req, res) {
    const { id } = req.params 
    try {
      await peopleServices.restoreRegister(Number(id))
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  } 

  static async catchEnrollment(req, res) {
    const { studentId } = req.params
    try {
      const enrollments = await peopleServices.catchStudentEnrollment({ id: Number(studentId) })
      return res.status(200).json(enrollments)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async cancelPerson(req, res) {
    const { studentId } = req.params
    try {
      await peopleServices.cancelPersonAndEnrollments(Number(studentId))
      return res.status(200).json({ message: `Enrollments referring to ${studentId} canceled!` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PeopleController
