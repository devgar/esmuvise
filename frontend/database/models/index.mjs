'use strict'

import { env as _env } from 'process'
import Sequelize from 'sequelize'

import config from '../config/config.mjs'

const sequelize = new Sequelize(config.development)

import modelAlumno from './alumno.js'
import modelAsignatura from './asignatura.js'
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

db.IsEmpty = async () => {
  return !(await db.Alumno.findOne())
}

db.Initialize = () => {
  return Promise.all([
    import('../seed/alumnos.json'),
    import('../seed/asignaturas.json'),
    import('../seed/matriculas.json'),
  ]).then(([alumnos, asignaturas, matriculas]) => {
    return Promise.all([
      db.Alumno.bulkCreate(alumnos),
      db.Asignatura.bulkCreate(asignaturas),
      db.Matricula.bulkCreate(matriculas)
    ])
  }).catch(err  => {
    console.warn('Imposible to initialize due to:', err)
    })
}

// await sequelize.sync()

export default db
