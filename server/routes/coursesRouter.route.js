const router = require('express').Router()
const { Course, Lesson, Test, User } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.route('/')
  .get(async (req, res) => {
    console.log('REQ BODY=>>>', req.body);
    const courses = await Course.findAll({raw: true})
    return res.status(200).json(courses)
  })

router.route('/:course_id')
  .get(async (req, res) => {
    console.log('*** REQ PARAMS /courses ***', req.params)
    const { course_id } = req.params

    const course = await Course.findByPk(course_id, { raw: true })
    const tests = await Test.findAll({ raw: true, where: { course_id } })

    let first_lesson_id = 0
    let second_lesson_id = 0
    course.first_lesson_tests = []
    course.second_lesson_tests = []
    let lessons = []

    if (course_id == 1) {
      first_lesson_id = 1
      second_lesson_id = 2
      lesson = await Lesson.findAll({ raw: true, where: { id: { [Op.or]: [first_lesson_id, second_lesson_id] } } })
    }

    if (course_id == 2) {
      first_lesson_id = 3
      second_lesson_id = 4
      lesson = await Lesson.findAll({ raw: true, where: { id: { [Op.or]: [first_lesson_id, second_lesson_id] } } })
    }

    if (course_id == 3) {
      first_lesson_id = 5
      second_lesson_id = 6
      lesson = await Lesson.findAll({ raw: true, where: { id: { [Op.or]: [first_lesson_id, second_lesson_id] } } })
    }

    for (let i = 0; i < tests.length; i++) {
      if (tests[i].lesson_id === first_lesson_id) {
        course.first_lesson_tests.push(tests[i])
      }

      if (tests[i].lesson_id === second_lesson_id) {
        course.second_lesson_tests.push(tests[i])
      }
    }

    course.first_lesson_data = lesson[0]
    course.second_lesson_data = lesson[1]

    console.log('course =>', course)

    res.status(200).json(course)
  })

module.exports = router
