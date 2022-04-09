'use strict';
const fs = require('fs').promises
const path = require('path')

const tlevelPath = path.join(process.env.PWD, 'files', 'TestLevel.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const tlevelFs = await fs.readFile(tlevelPath, 'utf-8')
    const tlevelArr = tlevelFs.split('\n')
    const tlevelSeedArr = []

    for (let i = 0; i < tlevelArr.length; i += 7) {
      const tlevelSeed = {}
      if (tlevelArr[i] !== '') {
        tlevelSeed.tlevel_question = tlevelArr[i]
        tlevelSeed.tlevel_option1 = tlevelArr[i + 1]
        tlevelSeed.tlevel_option2 = tlevelArr[i + 2]
        tlevelSeed.tlevel_option3 = tlevelArr[i + 3]
        tlevelSeed.tlevel_option4 = tlevelArr[i + 4]
        tlevelSeed.tlevel_answer = tlevelArr[i + 5]
        tlevelSeed.tlevel_price = +tlevelArr[i + 6]
        tlevelSeed.createdAt = new Date()
        tlevelSeed.updatedAt = new Date()

        tlevelSeedArr.push(tlevelSeed)
      }
    }

    await queryInterface.bulkInsert('TLevels', tlevelSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TLevels', null, {})
  }
};
