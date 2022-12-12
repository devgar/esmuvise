'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matricula.init(
    {
      curso: {
        type: DataTypes.INTEGER.UNSIGNED
      }
    },
    {
      sequelize,
      modelName: 'Matricula'
    }
  )
  return Matricula
}
