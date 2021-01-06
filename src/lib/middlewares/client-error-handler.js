const { ValidationError } = require('sequelize')
const ApiError = require('../errors/api-error')
const httpStatusCodes = require('http-status-codes')

function errorFormat (error) {
  if (error instanceof ValidationError) {
    return ApiError.validationFormat(error)
  }

  return ApiError.format({
    code: error.code || 500,
    message: error.message || 'internal server error',
    codeAsString: error.codeAsString || httpStatusCodes.getStatusText(500),
    description: error.description,
    documentation: error.documentation,
  })
}

module.exports = (err, req, res, next) => {
  const response = errorFormat(err)
  res.status(response.code || 500).send(response)
  next(err)
}
