const supertest = require('supertest')
const database = require('../src/lib/clients/database')
const SetupServer = require('../src/server')

let server = null

beforeAll(async () => {
  server = new SetupServer()
  server.start()
  global.testRequest = supertest(server.getApp())
  global.databaseConnection = database.getConnection()
})

afterAll(async () => await server.close())
