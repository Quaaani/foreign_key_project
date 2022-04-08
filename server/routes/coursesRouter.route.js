const router = require('express').Router()
const { Course } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    console.log('REQ BODY=>>>', req.body);
    const courses = await Course.findAll({raw: true})
    return res.status(200).json(courses)
  })

module.exports = router
