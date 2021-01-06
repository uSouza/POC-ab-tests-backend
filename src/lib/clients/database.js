const { Sequelize } = require('sequelize')
const configManager = require('../utils/config-manager')
const dbConfigs = configManager.get('Database')

class Database {
  constructor () {
    this.connection = new Sequelize(
      dbConfigs.database,
      dbConfigs.user,
      dbConfigs.password,
      {
        dialect: "mariadb",
        host: dbConfigs.host,
        logging: configManager.get('Logger.enabled')
      }
    )
  }

  getConnection () {
    return this.connection
  }

  async check () {
    try {
      await this.connection.authenticate()
      return true
    } catch (error) {
      console.error('Unable to connect to the database:', error)
      return false
    }
  }

  close () {
    return this.connection.close()
  }
}

module.exports = new Database()
