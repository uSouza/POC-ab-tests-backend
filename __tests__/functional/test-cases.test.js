describe('Test cases functional tests', () => {
  it('should successfully retrieve all tests cases', async () => {
    const { status } = await global.testRequest.get('/test-cases')
    expect(status).toBe(200)
  })
})