const router = require('express').Router()
const { Course, Favorite } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.route('/')
  .get(async (req, res) => {
    console.log('*** GET REQUEST /favorites ***')

    if (!req.session.user_data) return res.status(400).json({ message: 'No session!' })
    const user_id = req.session.user_data.id

    const data = await Favorite.findAll({ where: { user_id }, raw: true })
    const courses_id = data.map(el => el.course_id)
    const courses = await Course.findAll({raw: true, where: { id: { [Op.or]: courses_id } } })

    res.status(200).json(courses)
  })

module.exports = router
