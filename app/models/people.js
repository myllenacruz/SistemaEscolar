'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      // define association here
    }
  }
  People.init(
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'People',
    }
  )
  return People
}
