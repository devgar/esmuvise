'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Rubrica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rubrica.belongsTo(models.RubricaGroup)
      Rubrica.hasMany(models.EvaluationItem)
    }
  }
  Rubrica.init(
    {
      concept: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vHigh: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vMid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vLow: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vFail: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Rubrica',
      indexes: [{ unique: true, fields: ['concept', 'RubricaGroupId'] }]
    }
  )
  return Rubrica
}
