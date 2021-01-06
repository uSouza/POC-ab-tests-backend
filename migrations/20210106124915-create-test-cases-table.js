'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('test_cases', {
      id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        primary: true,
        autoincrement: true
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      componentTarget: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
      },
      durationInDays: {
        type: Sequelize.DataTypes.INTEGER,
      },
      updatedAt: Sequelize.DataTypes.DATE,
      createdAt: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('test_cases')
  }
}
