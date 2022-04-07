'use strict';
const fs = require('fs').promises
const path = require('path')

const wordPath = path.join(process.env.PWD, 'files', 'Words.txt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const wordsFs = await fs.readFile(wordPath, 'utf-8')
    const wordsArr = wordsFs.split('\n')
    const wordSeedArr = []

    for (let i = 0; i < wordsArr.length; i += 6) {
      const wordSeed = {}
      if (wordsArr[i] !== '') {
        wordSeed.word_name = wordsArr[i]
        wordSeed.word_transcription = wordsArr[i + 1]
        wordSeed.word_translate = wordsArr[i + 2]
        wordSeed.word_example = wordsArr[i + 3]
        wordSeed.word_transExample = wordsArr[i + 4]
        wordSeed.topic_id = wordsArr[i + 5]
        wordSeed.createdAt = new Date()
        wordSeed.updatedAt = new Date()

        wordSeedArr.push(wordSeed)
      }
    }

    await queryInterface.bulkInsert('Words', wordSeedArr, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Words', null, {})
  }
};
