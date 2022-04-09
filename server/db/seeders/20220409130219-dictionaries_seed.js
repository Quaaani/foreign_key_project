'use strict';
const fs = require('fs').promises
const path = require('path')

const dictPath = path.join(process.env.PWD, 'files', 'Dictionaries.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const dictFs = await fs.readFile(dictPath, 'utf-8')
    const dictArr = dictFs.split('\n')
    const dictSeedArr = []

    for (let i = 0; i < dictArr.length; i += 2) {
      const dictSeed = {}
      if (dictArr[i] !== '') {
        dictSeed.user_id = +dictArr[i]
        dictSeed.word_id = +dictArr[i + 1]
        dictSeed.createdAt = new Date()
        dictSeed.updatedAt = new Date()

        dictSeedArr.push(dictSeed)
      }
    }

    await queryInterface.bulkInsert('Dictionaries', dictSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dictionaries', null, {})
  }
};
