'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
      },
    })

    await queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      extId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        field: 'ext_id',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      image: {
        type: Sequelize.TEXT,
      },
      stats: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
        defaultValue: Sequelize.NOW,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users')
    await queryInterface.dropTable('pokemons')
  },
}
