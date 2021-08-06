const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {
  constructor() {
    super('People')
    this.enrollments = new Services('Enrollments')
  }

  async catchActiveRegisters(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } })
  }

  async catchAllRegisters(where = {}) {
    return database[this.modelName]
      .scope('all')
      .findAll({ where: { ...where } })
  }

  async cancelPersonAndEnrollments(studentId) {
    return database.sequelize.transaction(async (transaction) => {
      await super.updateRegister({ active: false }, studentId, {
        transaction: transaction,
      })
      await this.enrollments.updateRegisters(
        { status: 'canceled' },
        { student_id: studentId },
        { transaction: transaction }
      )
    })
  }

  async catchStudentEnrollment(where = {}) {
    const enrollments = await database[this.modelName].findOne({ where: { ... where } })
    return enrollments.getRegisteredClasses()
  }
}

module.exports = PeopleServices
