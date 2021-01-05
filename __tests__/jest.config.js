const { resolve } = require('path')
const root = resolve(__dirname, '..')
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {...rootConfig, ...{
  rootDir: root,
  displayName: "end2end-tests",
  setupFilesAfterEnv: ["<rootDir>/__tests__/jest-setup.js"],
  testMatch: ["<rootDir>/__tests__/**/*.test.js"],
}}
