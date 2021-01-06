const logger = require('../utils/log-manager')

module.exports = (err, req, res, next) => {
  logger.error(err.stack)
  next(err)
}
