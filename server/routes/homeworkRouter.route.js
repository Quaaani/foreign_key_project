const router = require('express').Router()
const { Homework, User, Lesson } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.route('/')
    .post(async (req, res) => {
        try {
            const { from_user_id, to_user_id, lesson_id, homework} = req.body
            const myHomework = await Homework.create({
                from_user_id,
                to_user_id,
                lesson_id,
                homework,
            })

            return res.status(200).json({message: 'Домашнее задание отправлено'})
        } catch(error) {
            console.log('homework POST error', error.message)
        }
    })
    .get(async (req, res) => {
      
      try {
        console.log('*** REQ REQUEST /homework ***')
        if (!req.session.user_data) return res.json(400).json({ message: 'No session!' })

        const homework = await Homework.findAll({
          where: {
            to_user_id: req.session.user_data.id
          },
          raw: true
        })
        
        const student_id = homework.map(el => el.from_user_id).sort((a, b) => a - b).filter((el, index, arr) => el !== arr[index + 1])

        const lesson_id = homework.map(el => el.lesson_id).sort((a, b) => a - b).filter((el, index, arr) => el !== arr[index + 1])

        const students = await User.findAll({
          where: {
            id: {
              [Op.or]: student_id,
            }
          },
          raw: true,
        })

        const lessons = await Lesson.findAll({
          where: {
            id: {
              [Op.or]: lesson_id,
            }
          },
          raw: true,
        })

        for(let i = 0; i < students.length; i += 1) {
          for(let j = 0; j < homework.length; j += 1) {
            if(students[i].id === homework[j].from_user_id) {
              homework[j].user_firstName = students[i].user_firstName
              homework[j].user_lastName = students[i].user_lastName
              homework[j].user_email = students[i].user_email
              homework[j].user_phone = students[i].user_phone
              homework[j].user_level = students[i].user_level
              homework[j].user_avatar = students[i].user_avatar
            }
          }
        }

        for(let i = 0; i < lessons.length; i += 1) {
          for(let j = 0; j < homework.length; j += 1) {
            if(lessons[i].id === homework[j].lesson_id) {
              homework[j].lesson_name = lessons[i].lesson_name
              homework[j].lesson_price = lessons[i].lesson_price
            }
          }
        }

        return res.status(200).json(homework)
        
      } catch(error) {

          console.log('error  GET homework =>', error.message)
      }
    })

router.route('/:id')
    .post(async (req, res) => {
      try {
        const {id} = req.params
        const { user_level } = req.body

        const user = await User.findByPk(id)

        user.user_level += Number(user_level)
        user.save()

        return res.sendStatus(200)
      } catch (error) {
          console.log('error homework params', error.message)
      }
    })

module.exports = router
