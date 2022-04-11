const router = require('express').Router()
const { User, Course, Favorite } = require('../db/models')
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
    const courses_user_id = courses.map(el => el.user_id)
    const users = await User.findAll({ raw: true, where: { id: { [Op.or]: courses_user_id } } })

    for (let i = 0; i < courses.length; i++) {
      for (let j = 0; j < users.length; j++) {
        if (courses[i].user_id === users[j].id) {
          courses[i].course_teacher = users[j].user_firstName
          courses[i].course_email = users[j].user_email
          courses[i].course_phone = users[j].user_phone
        }
      }
    }

    res.status(200).json(courses)
  })

module.exports = router
