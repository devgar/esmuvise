'use strict'
const { Model } = require('sequelize')
const unique = require('./helpers/unique')

module.exports = (sequelize, DataTypes) => {
  class EvaluationItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EvaluationItem.belongsTo(models.Alumno)
      EvaluationItem.belongsTo(models.Asignatura)
      EvaluationItem.belongsTo(models.Matricula)
      EvaluationItem.belongsTo(models.Rubrica)
    }
  }
  EvaluationItem.init(
    {
      value: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allownNull: false
      }
    },
    {
      sequelize,
      modelName: 'EvaluationItem',
      indexes: [unique(['RubricaId', 'AlumnoId', 'AsignaturaId'])]
    }
  )
  return EvaluationItem
}
