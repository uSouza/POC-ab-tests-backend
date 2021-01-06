const configManager = require('../src/lib/utils/config-manager')

module.exports = {
  development: {
    ...configManager.get('Database'),
    port: 3306,
    dialect: 'mariadb'
  },
  test: {
    ...configManager.get('Database'),
    port: 3306,
    dialect: 'mariadb'
  },
  production: {
    ...configManager.get('Database'),
    dialect: 'mariadb'
  }
};