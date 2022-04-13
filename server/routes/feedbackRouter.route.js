const router = require('express').Router()
const { Feedback, User } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.get('/', async (req, res) => {
  const feedbacks = await Feedback.findAll({raw: true})
  
  const users_id = feedbacks.map(el => el.user_id);


  const users = await User.findAll({ raw: true, where: { id: { [Op.or]: users_id } } })

  for (let i = 0; i < feedbacks.length; i++) {
    for (let k = 0; k < users.length; k++) {
      if (feedbacks[i].user_id === users[k].id) {
        feedbacks[i].user_firstName = users[k].user_firstName
        feedbacks[i].user_lastName = users[k].user_lastName
        feedbacks[i].user_avatar = users[k].user_avatar
        feedbacks[i].user_email = users[k].user_email
      }
    } 
  }
  res.status(200).json(feedbacks)
})

router.post('/', async (req, res) => {
  await Feedback.create(req.body)
  res.status(200)
})

module.exports = router
