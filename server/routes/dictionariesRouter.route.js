const router = require('express').Router()
const { Word, Dictionary } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.route('/')
  .get(async (req, res) => {
    console.log('*** GET REQUEST /dictionaries ****')

    if (!req.session.user_data) return res.status(400).json({ message: 'No session!' })
    const user_id = req.session.user_data.id

    const dictionaries = await Dictionary.findAll({ raw: true, where: { user_id } })
    const words_id = dictionaries.map(el => el.word_id)
    const words = await Word.findAll({ raw: true, where: { id: { [Op.or]: words_id } } })

    res.status(200).json(words)
  })

module.exports = router
