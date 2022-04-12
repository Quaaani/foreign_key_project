const router = require('express').Router()
const { Word, Dictionary } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('*** GET REQUEST /dictionaries ****')

      if (!req.session.user_data) return res.status(400).json({ message: 'No session!' })
      const user_id = req.session.user_data.id
  
      const dictionaries = await Dictionary.findAll({ raw: true, where: { user_id } })
      const words_id = dictionaries.map(el => el.word_id)
      const words = await Word.findAll({ raw: true, where: { id: { [Op.or]: words_id } } })
  
      res.status(200).json(words)
    } catch(error) {
        throw error
    }

  })

  .post( async (req, res) => {
    try {
      if(!req.session.user_data) return res.status(400).json({ message: 'No session!'})
      const user_id = req.session.user_data.id
      
      const { word_name, word_translate } = req.body
      
      const newWord = await Word.create({ 
        word_name,
        word_translate,
        word_transcription: '',
        word_example: '...',
        word_transExample: '...',
        topic_id: 5,
      })
      
      await Dictionary.create({
        user_id,
        word_id: newWord.id,
      })

      res.status(200).json({message: 'Успешное добавление слова'})
    } catch (error) {
      throw error
    }
  })
router.route('/:id')
  .delete( async (req, res) => {
    try {
      const { id } = req.params
      console.log('IDDDD', id)
      await Word.destroy({
        where: {id}
      })
      res.status(200).json({message: 'Успешное удаление слова'})
    } catch(error) {
        throw error
    }
  })

module.exports = router
