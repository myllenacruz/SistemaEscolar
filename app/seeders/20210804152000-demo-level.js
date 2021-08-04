'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Levels', [
      {
        descrLevel: 'basic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descrLevel: 'intermediate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descrLevel: 'advanced',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Levels')
  },
}
