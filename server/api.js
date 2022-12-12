const express = require('express')

const app = express()

app.use(express.json())

app.use('/alumnos', require('./alumnos'))
app.use('/asignaturas', require('./asignaturas'))
app.use('/matriculas', require('./matriculas'))
app.use('/rubricas', require('./rubricas'))
app.use('/evaluationItems', require('./evaulationItems'))

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err)
  res.status(500).json({ error: err })
})

module.exports = app
