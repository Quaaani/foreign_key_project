const router = require('express').Router()
const { TLevel } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    try {
      console.log('*** GET REQUEST /tlevel/question ***')
  
      const questions = await TLevel.findAll({ raw: true })
  
      const result = questions.map((el) => {
        el.options = [
          el.tlevel_option1,
          el.tlevel_option2,
          el.tlevel_option3,
          el.tlevel_option4,
        ]
        el.answers = [
          el.tlevel_answer1,
          el.tlevel_answer2,
          el.tlevel_answer3,
          el.tlevel_answer4,
        ]
        return el
      })
  
      return res.status(200).json(result)
    } catch(error) {
        console.log('test tLevel error', error.message)
    }
  })

module.exports = router
