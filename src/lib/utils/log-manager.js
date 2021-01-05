const config = require("./config-manager")
const logger = require("pino")({
  prettyPrint: true,
  enabled: config.get("Logger.enabled"),
})

module.exports = {
  info(msg) {
    logger.info(msg)
  },
  error(err) {
    logger.error(err)
  },
}
