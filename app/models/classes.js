'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    static associate(models) {
      Classes.hasMany(models.Enrollments, {
        foreignKey: 'class_id'
      })
      Classes.belongsTo(models.People)
      Classes.belongsTo(models.Levels)
    }
  };
  Classes.init({
    startDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};