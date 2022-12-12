'use strict'
const { Model } = require('sequelize')
const unique = require('./helpers/unique')

module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Matricula.belongsTo(models.Alumno)
      Matricula.belongsTo(models.Asignatura)
    }
  }
  Matricula.init(
    {
      curso: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Matricula',
      indexes: [unique(['curso', 'AlumnoId', 'AsignaturaId'])]
    }
  )
  return Matricula
}
