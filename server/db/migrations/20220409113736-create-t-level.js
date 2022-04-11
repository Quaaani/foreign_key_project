'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TLevels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tlevel_question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_option1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_option2: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_option3: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_option4: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_answer1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_answer2: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_answer3: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_answer4: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tlevel_price: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TLevels');
  }
};
