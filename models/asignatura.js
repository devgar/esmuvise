'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asignatura.hasMany(models.Matricula)
      Asignatura.belongsTo(models.RubricaGroup)
    }
  }
  Asignatura.init(
    {
      nameVLC: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nameCAS: {
        type: DataTypes.STRING
      },
      troncal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      sequelize,
      modelName: 'Asignatura'
    }
  )
  return Asignatura
}
