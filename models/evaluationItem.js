'use strict'
const { Model } = require('sequelize')
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
      EvaluationItem.belongsTo(models.Matricula)
    }
  }
  EvaluationItem.init(
    {
      value: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'EvaluationItem'
    }
  )
  return EvaluationItem
}
