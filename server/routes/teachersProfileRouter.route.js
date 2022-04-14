const router = require('express').Router()
const { Course, Favorite, User } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    try{
      console.log('*** GET REQUEST / teacherProfile ***')

      if (!req.session.user_data) return res.status(400).json({message: 'No session'})

      const user_id = req.session.user_data.id

      const currnetCourse = await Course.findAll({
        where: {
          user_id
        },
        raw: true
      })

      const students = await Favorite({
        where: {
          course_id: currnetCourse.id
        }
      })

      return res.status(200).json(currnetCourse, students)
      
    } catch (error) {
        console.log('teacher profile error', error.message)
    }
  })


module.exports = router
