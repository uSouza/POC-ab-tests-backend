const testCaseModel = require('../../src/test-cases/domain/test-cases-model')

describe('Test cases functional tests', () => {
  beforeEach(async () => {
    await testCaseModel.destroy({ where: {}, truncate: true })
  })
  describe('When creating a new test case', () => {
    it('should successfully create a test case', async () => {
      const newTestCase = {
        title: 'functional test',
        componentTarget: 'skill-modal',
        description: 'skill modal test case',
        durationInDays: 15,
      }
      const { body, status } = await global.testRequest.post('/test-cases').send(newTestCase)
      expect(status).toBe(200)
      expect(body).toEqual(
        expect.objectContaining(newTestCase)
      )
    })
    it('should return a list of validation errors', async () => {
      const newTestCase = {
        title: null,
        componentTarget: null,
        description: null,
        durationInDays: '15A',
      }
      const expectedErrors = [
        {
          message: 'TestCase.title cannot be null',
          type: 'notNull Violation',
          receivedValue: null
        },
        {
          message: 'TestCase.componentTarget cannot be null',
          type: 'notNull Violation',
          receivedValue: null
        },
        {
          message: 'Validation isInt on durationInDays failed',
          type: 'Validation error',
          receivedValue: '15A'
        }
      ]
      const { body, status } = await global.testRequest.post('/test-cases').send(newTestCase)
      expect(status).toBe(400)
      expect(body.errors).toEqual(expectedErrors)
    })
  })
})