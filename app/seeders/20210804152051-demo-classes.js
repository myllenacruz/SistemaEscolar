'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Classes',
      {
        startDate: '2021-01-01',
        level_id: 1,
        teacher_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: '2021-02-01',
        level_id: 2,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startDate: '2021-01-01',
        level_id: 3,
        teacher_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classes')
  }
}
