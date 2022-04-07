'use strict';
const fs = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const userPath = path.join(process.env.PWD, 'files', 'Users.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const usersFs = await fs.readFile(userPath, 'utf-8')
    const usersArr = usersFs.split('\n')
    const userSeedArr = []

    for (let i = 0; i < usersArr.length; i += 12) {
      const userSeed = {}
      if (usersArr[i] !== '') {
        userSeed.user_firstName = usersArr[i]
        userSeed.user_lastName = usersArr[i + 1]
        userSeed.user_email = usersArr[i + 2]
        userSeed.user_password = await bcrypt.hash(usersArr[i + 3], 10)
        userSeed.user_role = usersArr[i + 4]
        userSeed.user_age = usersArr[i + 5]
        userSeed.user_avatar = usersArr[i + 6]
        userSeed.user_country = usersArr[i + 7]
        userSeed.user_city = usersArr[i + 8]
        userSeed.user_phone = usersArr[i + 9]
        userSeed.user_level = usersArr[i + 10]
        userSeed.user_lexicon = usersArr[i + 11]
        userSeed.createdAt = new Date()
        userSeed.updatedAt = new Date()

        userSeedArr.push(userSeed)
      }
    }

    await queryInterface.bulkInsert('Users', userSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
