'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_firstName: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      user_lastName: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      user_email: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      user_password: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      user_role: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      user_age: {
        type: Sequelize.INTEGER
      },
      user_avatar: {
        type: Sequelize.TEXT
      },
      user_country: {
        type: Sequelize.TEXT
      },
      user_city: {
        type: Sequelize.TEXT
      },
      user_phone: {
        type: Sequelize.TEXT
      },
      user_level: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      user_lexicon: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
