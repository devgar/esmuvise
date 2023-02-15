'use strict'

import { env as _env } from 'process'
import Sequelize from 'sequelize'

import config from '../config/config.mjs'

const sequelize = new Sequelize(config.development)

import modelAlumno from './alumno.js'
import modelAsignatura from './asignatura.js'
import modelEquivalence from './equivalence.js'
import modelEvaluationItem from './evaluationItem.js'
import modelMatricula from './matricula.js'
import modelRubrica from './rubrica.js'
import modelRubricaGroup from './rubricaGroup.js'

const loadModel = (m) => {
  const model = m(sequelize, Sequelize.DataTypes)
  return [model.name, model]
}

const dbEntries = [
  loadModel(modelAlumno),
  loadModel(modelAsignatura),
  loadModel(modelEquivalence),
  loadModel(modelEvaluationItem),
  loadModel(modelMatricula),
  loadModel(modelRubrica),
  loadModel(modelRubricaGroup),
]

const db = Object.fromEntries(dbEntries)

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
export const Alumno = db.Alumno
export const Asignatura = db.Asignatura
export const Equivalence = db.Equivalence
export const EvaluationItem = db.EvaluationItem
export const Matricula = db.Matricula
export const Rubrica = db.Rubrica
export const RubricaGroup = db.RubricaGroup