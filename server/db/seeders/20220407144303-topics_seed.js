'use strict';
const fs = require('fs').promises;
const path = require('path');

const topicPath = path.join(process.env.PWD, 'files', 'Topic.txt');

module.exports = {
  async up(queryInterface, Sequelize) {

    const topicsFs = await fs.readFile(topicPath, 'utf-8');
    const topicsArr = topicsFs.split('\n');
    const topicSeedArr = [];

    for (let i = 0; i < topicsArr.length; i++) {
      const topicSeed = {}

      if (topicsArr[i] !== '') {
        topicSeed.topic_title = topicsArr[i]
        topicSeed.createdAt = new Date()
        topicSeed.updatedAt = new Date()

        topicSeedArr.push(topicSeed)
      }
    }

    await queryInterface.bulkInsert('Topics', topicSeedArr, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {})
  },
};
