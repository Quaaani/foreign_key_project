'use strict';
const fs = require('fs').promises
const path = require('path')

const lessonsPath = path.join(process.env.PWD, 'files', 'Lessons.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const lessonsFs = await fs.readFile(lessonsPath, 'utf-8')
    const lessonsArr = lessonsFs.split('\n')
    const lessonsSeedArr = []

    for (let i = 0; i < lessonsArr.length; i += 4) {
      const lessonsSeed = {}
      if (lessonsArr[i] !== '') {
        lessonsSeed.lesson_name = lessonsArr[i]
        lessonsSeed.lesson_video = lessonsArr[i + 1]
        lessonsSeed.lesson_img = lessonsArr[i + 2]
        lessonsSeed.lesson_price = +lessonsArr[i + 3]
        lessonsSeed.createdAt = new Date()
        lessonsSeed.updatedAt = new Date()

        lessonsSeedArr.push(lessonsSeed)
      }
    }

    await queryInterface.bulkInsert('Lessons', lessonsSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lessons', null, {})
  }
};
