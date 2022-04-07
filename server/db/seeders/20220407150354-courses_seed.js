'use strict';
const fs = require('fs').promises
const path = require('path')

const coursesPath = path.join(process.env.PWD, 'files', 'Courses.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const coursesFs = await fs.readFile(coursesPath, 'utf-8')
    const coursesArr = coursesFs.split('\n')
    const coursesSeedArr = []

    for (let i = 0; i < coursesArr.length; i += 4) {
      const coursesSeed = {}
      if (coursesArr[i] !== '') {
        coursesSeed.course_name = coursesArr[i]
        coursesSeed.course_level = coursesArr[i + 1]
        coursesSeed.course_description = coursesArr[i + 2]
        coursesSeed.course_img = coursesArr[i + 3]
        coursesSeed.createdAt = new Date()
        coursesSeed.updatedAt = new Date()

        coursesSeedArr.push(coursesSeed)
      }
    }

    await queryInterface.bulkInsert('Courses', coursesSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {})
  }
};
