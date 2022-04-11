'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lesson_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lesson_video: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lesson_img: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      lesson_price: {
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
    await queryInterface.dropTable('Lessons');
  }
};
