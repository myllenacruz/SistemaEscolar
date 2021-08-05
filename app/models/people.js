'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Classes, {
        foreignKey: 'teacher_id'
      })
      People.hasMany(models.Enrollments, {
        foreignKey: 'student_id',
        scope: { status: 'confirmed' },
        as: 'enrolledClasses'
      })
    }
  }
  People.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 200],
        }
      },
      active: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid e-mail!'
          }
        }
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      defaultScope: {
        where: { active: true }
      },
      scopes: {
        all: { where: {} }
      },
      modelName: 'People',
    }
  )
  return People
}
