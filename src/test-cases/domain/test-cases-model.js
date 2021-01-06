const { DataTypes } = require('sequelize')
const database = require('../../lib/clients/database')

const TestCase = database.getConnection().define('TestCase', 
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    componentTarget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    durationInDays: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
  },
  {
    tableName: 'test_cases'
  }
)

module.exports = TestCase
