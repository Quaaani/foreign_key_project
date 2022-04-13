const router = require('express').Router()
const { Homework } = require('../db/models')

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

            res.status(200).json({message: 'Домашнее задание отправлено'})
        } catch(error) {
            throw error
        }
    })

module.exports = router
