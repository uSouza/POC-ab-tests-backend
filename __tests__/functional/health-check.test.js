describe('Health check functional tests', () => {
  it('should successfully check the server health', async () => {
    const { body, status } = await global.testRequest.get('/health-check')
    expect(body).toEqual({
      database: true
    })
    expect(status).toBe(200)
  })
})