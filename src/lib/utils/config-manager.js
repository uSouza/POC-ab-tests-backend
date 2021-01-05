const config = require('config')

module.exports = {
  get (configKey) {
    if (!configKey) throw new Error('config key is required')
    return config.get(configKey)
  }
}