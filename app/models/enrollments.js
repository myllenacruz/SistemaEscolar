'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollments extends Model {
    static associate(models) {
      Enrollments.belongsTo(models.People)
      Enrollments.belongsTo(models.Classes)
    }
  };
  Enrollments.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollments',
  });
  return Enrollments;
};