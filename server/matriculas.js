const { Router } = require('express')
const { Matricula } = require('../models')
const int = require('./util/int')

const router = Router()

router.get('/', async (_, res) => {
  const result = await Matricula.findAll()
  res.status(200).json(result)
})

router.post('/', async (req, res, next) => {
  try {
    const result = await Matricula.create(req.body)
    res.status(200).json(result)
  } catch (e) {
    next(e)
  }
})

router.put(
  '/:AlumnoId/:AsignaturaId',
  int('AlumnoId'),
  int('AsignaturaId'),
  async (req, res, next) => {
    try {
      const { id, ...body } = req.body
      const { AlumnoId, AsignaturaId } = req.params
      const opts = { where: { AlumnoId, AsignaturaId } }
      const result = await Matricula.update(body, opts)
      res.status(200).json(result)
    } catch (err) {
      next(err)
    }
  }
)

module.exports = router
