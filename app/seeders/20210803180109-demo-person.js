'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('People', [
      {
        name: 'Pink P',
        active: true,
        email: 'pink@pink.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gray G',
        active: false,
        email: 'gray@gray.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Black B',
        active: true,
        email: 'black@black.com',
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Yellow Y',
        active: true,
        email: 'yellow@yellow.com',
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Green G',
        active: true,
        email: 'green@green.com',
        role: 'teacher',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {})
  },
}
