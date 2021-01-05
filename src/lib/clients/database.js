const configManager = require('../utils/config-manager')

const knex = require('knex')

class Database {
  constructor (dbFramework = knex) {
    this.connection = dbFramework({
      client: 'mysql',
      connection: configManager.get('Database')
    })
  }

  getConnection () {
    return this.connection
  }

  check () {
    return new Promise((resolve, reject) => {
      this.connection.raw('SELECT 1+1 as test')
        .then((res) => {
          if (res && res.length > 0 && res[0].length > 0 && res[0][0].test === 2) {
            resolve(true)
          } else {
            reject(new Error('database check failed'))
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  close () {
    return this.connection.destroy()
  }
}

module.exports = new Database()
