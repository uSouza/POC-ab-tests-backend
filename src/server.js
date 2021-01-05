const express = require('express')
const config = require('./lib/utils/config-manager')
const logger = require('./lib/utils/log-manager')
const database = require('./lib/clients/database')
const testCasesRouter = require('./test-cases/infra/router')

module.exports = class Server {
  constructor (app = express()) {
    this.app = app
    this.server = null
  }

  registerRoutes () {
    this.app.use('/test-cases', testCasesRouter)
    this.app.get('/health-check', async (_, res) => {
      const databaseIsOkay = await database.check()
      const httpStatus = databaseIsOkay ? 200 : 503
      res.status(httpStatus).send({
        database: databaseIsOkay
      })
    })
  }

  setup () {
    this.registerRoutes()
  }

  start () {
    this.setup()
    this.server = this.app.listen(config.get('Server.port'), () => {
      logger.info('Server is running')
    })
  }

  getApp () {
    return this.app
  }

  async close () {
    if (this.server) {
      await new Promise(async (resolve, reject) => {
        await database.close()
        this.server.close((err) => {
          if (err) {
            return reject(err)
          }
          resolve(true)
        })
      })
    }
  }
}
