'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Enrollments',
      {
        status: 'confirmed',
        student_id: 1,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'confirmed',
        student_id: 2,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'cancelled',
        student_id: 3,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'cancelled',
        student_id: 4,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Enrollments')
  },
}
