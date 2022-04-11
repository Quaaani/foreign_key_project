'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      lesson_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Lessons',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      test_question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_option1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_option2: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_option3: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_option4: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_answer1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_answer2: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_answer3: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      test_answer4: {
        allowNull: false,
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
    await queryInterface.dropTable('Tests');
  }
};
