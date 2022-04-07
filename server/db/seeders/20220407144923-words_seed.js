'use strict';
const fs

module.exports = {
  async up (queryInterface, Sequelize) {

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {})
  }
};
