'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Words', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      word_transcription: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      word_translate: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      word_example: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      word_transExample: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      topic_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
          key: 'id'
        }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Words');
  }
};
