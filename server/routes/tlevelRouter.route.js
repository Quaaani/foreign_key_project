const router = require('express').Router()
const { TLevel } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    console.log('*** GET REQUEST /tlevel/question ***')

    const questions = await TLevel.findAll({ raw: true })

    res.status(200).json(questions)
  })

module.exports = router
