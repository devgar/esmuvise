'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class RubricaGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RubricaGroup.hasMany(models.Asignatura)
      RubricaGroup.hasMany(models.Rubrica)
    }
  }
  RubricaGroup.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'RubricaGroup'
    }
  )
  return RubricaGroup
}
