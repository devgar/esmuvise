const { ValidationError } = require('sequelize')

module.exports = (arg = 'id') => (req, res, next) => {
  const value = parseInt(req.params[arg])
  if (isNaN(value) || value < 1)
    return next(new ValidationError('id must be a positive integer'))
  req.params[arg] = value
  next()
}
