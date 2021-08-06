const Sequelize = require('sequelize')
const { EnrollmentsServices } = require('../services')
const enrollmentsServices = new EnrollmentsServices()

class EnrollmentController {
  static async catchEnrollment(req, res) {
    const { studentId, enrollmentId } = req.params
    try {
      const oneEnrollment = await enrollmentsServices.catchOneRegister({
        id: enrollmentId,
        student_id: studentId,
      })
      return res.status(200).json(oneEnrollment)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createEnrollment(req, res) {
    const { studentId } = req.params
    const newEnrollment = { ...req.body, student_id: Number(studentId) }
    try {
      const newEnrollmentCreated = await enrollmentsServices.createRigester(
        newEnrollment
      )
      return res.status(200).json(newEnrollmentCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateEnrollment(req, res) {
    const { studentId, enrollmentId } = req.params
    const newInfo = req.body
    try {
      await enrollmentsServices.updateRegisters(newInfo, {
        id: Number(enrollmentId),
        student_id: Number(studentId),
      })
      return res.status(200).json('Ok!')
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteEnrollment(req, res) {
    const { enrollmentId } = req.params
    try {
      await enrollmentsServices.deleteRegister(Number(enrollmentId))
      return res.status(200).json({ message: 'Deleted!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restoreEnrollment(req, res) {
    const { enrollmentId } = req.params
    try {
      await enrollmentsServices.restoreEnrollment(Number(enrollmentId))
      return res.status(200).json({ message: 'Ok!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchEnrollmentsByClass(req, res) {
    const { classId } = req.params
    try {
      const allEnrollments = await enrollmentsServices.findAndCountRegisters(
        {
          class_id: Number(classId),
          status: 'confirmed'
        },
        { limit: 20, order: [['student_id', 'ASC']] }
      )
      return res.status(200).json(allEnrollments)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async catchFullClasses(req, res) {
    const classCapacity = 2
    try {
      const fullClasses = await enrollmentsServices.findAndCountRegisters(
        { status: 'confirmed' },
        {
          attributes: ['class_id'],
          group: ['class_id'],
          having: Sequelize.literal(`count(class_id) >= ${classCapacity}`)
        }
      )
      return res.status(200).json(fullClasses.count)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = EnrollmentController