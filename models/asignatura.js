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
      Asignatura.belongsToMany(models.Alumno, { through: models.Matricula })
      Asignatura.hasMany(models.Rubrica)
    }
  }
  Asignatura.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
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
