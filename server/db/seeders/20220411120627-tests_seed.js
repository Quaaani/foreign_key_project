'use strict';
const fs = require('fs').promises
const path = require('path')

const testsPath = path.join(process.env.PWD, 'files', 'Tests.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const testsFs = await fs.readFile(testsPath, 'utf-8')
    const testsArr = testsFs.split('\n')
    const testsSeedArr = []

    for (let i = 0; i < testsArr.length; i += 11) {
      const testsSeed = {}
      if (testsArr[i] !== '') {
        testsSeed.course_id = testsArr[i]
        testsSeed.lesson_id = testsArr[i + 1]
        testsSeed.test_question = testsArr[i + 2]
        testsSeed.test_option1 = testsArr[i + 3]
        testsSeed.test_option2 = testsArr[i + 4]
        testsSeed.test_option3 = testsArr[i + 5]
        testsSeed.test_option4 = testsArr[i + 6]
        testsSeed.test_answer1 = testsArr[i + 7]
        testsSeed.test_answer2 = testsArr[i + 8]
        testsSeed.test_answer3 = testsArr[i + 9]
        testsSeed.test_answer4 = testsArr[i + 10]
        testsSeed.createdAt = new Date()
        testsSeed.updatedAt = new Date()

        testsSeedArr.push(testsSeed)
       }
    }

    await queryInterface.bulkInsert('Tests', testsSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tests', null, {})
  }
};
