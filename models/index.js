'use strict'

const path = require('path')
const process = require('process')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'

const config = require(path.join(__dirname, '/../config/config.json'))[env]
const db = {}

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable], config)
  : new Sequelize(config.database, config.username, config.password, config)

const models = [
  'alumno',
  'asignatura',
  'evaluationItem',
  'matricula',
  'rubrica',
  'rubricaGroup'
]

models.forEach((file) => {
  const model = require(path.join(__dirname, file))(
    sequelize,
    Sequelize.DataTypes
  )
  db[model.name] = model
})

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
