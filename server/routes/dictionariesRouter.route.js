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
      if (dictionaries.length) {
        const words_id = dictionaries.map(el => el.word_id)
        const words = await Word.findAll({ raw: true, where: { id: { [Op.or]: words_id } } })
        return res.status(200).json(words)
      } else {
          return res.sendStatus(400)
        }
    } catch(error) {
        console.log('/dictionaries  GET Error', error.message)
      }
  })

  .post( async (req, res) => {
    try {
      if(!req.session.user_data) return res.status(400).json({ message: 'No session!'})
      const user_id = req.session.user_data.id
      
      const { word_name, word_translate } = req.body

      const myWordsArr = await Dictionary.findAll({
        where: {
          user_id
        },
        raw: true}
      )
      const myWordsId = myWordsArr.map(el => el.word_id)

      const myWordsNameArr = await Word.findAll({
        where: {
          id: { [Op.or] : myWordsId}
        },
        raw: true
      })

      const myWordsName = myWordsNameArr.map(el => el.word_name) 
      const chekWordName = myWordsName.includes(word_name)

      if(chekWordName) {
        return res.status(400).json({ message: 'Такое слово уже существует в словаре' });
      } else {
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
        return res.status(200).json({message: 'Успешное добавление слова'})
      }
   
    } catch (error) {
        console.log('error add word', error.message)
    }
  })
router.route('/:id')
  .delete( async (req, res) => {
    try {
      const { id } = req.params
      await Word.destroy({
        where: {id}
      })
      return res.status(200).json({message: 'Успешное удаление слова'})
    } catch(error) {
      console.log('error delete word', error.message)
    }
  })

module.exports = router
