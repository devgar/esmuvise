'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Equivalence extends Model {

        static associate(models) {

        }
    }
    Equivalence.init(
        {
            max: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            label: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            sequelize,
            modelName: 'Equivalence',
        }
    )
    return Equivalence
}