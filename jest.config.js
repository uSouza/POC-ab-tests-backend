const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  testEnvironment: 'node',
  clearMocks: true
}