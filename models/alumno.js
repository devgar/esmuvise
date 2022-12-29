'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Alumno.hasMany(models.Matricula)
      Alumno.hasMany(models.EvaluationItem)
    }
  }
  Alumno.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dni: DataTypes.STRING,
      codVia: DataTypes.STRING,
      domicilio: DataTypes.STRING,
      codPostal: DataTypes.STRING,
      localidad: DataTypes.STRING,
      telephone: DataTypes.STRING,
      birthDate: DataTypes.DATEONLY,
      sex: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Alumno'
    }
  )
  return Alumno
}
