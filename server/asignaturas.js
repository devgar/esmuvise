const { Router } = require('express')
const { Asignatura } = require('../models')
const int = require('./util/int')

const router = Router()

router.get('/', async (_, res) => {
  const result = await Asignatura.findAll()
  res.status(200).json(result)
})

router.post('/', async (req, res, next) => {
  try {
    const result = await Asignatura.create(req.body)
    res.status(200).json(result)
  } catch (e) {
    next(e)
  }
})

router.put('/:id', int(), async (req, res, next) => {
  try {
    const { id, ...body } = { ...req.body, id: req.params.id }
    const result = await Asignatura.update(body, { where: { id } })
    res.status(200).json(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
