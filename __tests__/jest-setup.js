const supertest = require('supertest')
const SetupServer = require('../src/server')

let server = null

beforeAll(async () => {
  server = new SetupServer()
  server.start()
  global.testRequest = supertest(server.getApp())
})

afterAll(async () => await server.close())
