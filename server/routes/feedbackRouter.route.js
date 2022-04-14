const router = require('express').Router()
const { Feedback, User } = require('../db/models')
const Sequelize = require('sequelize')
const { Op } = Sequelize

router.get('/', async (req, res) => {
  try {
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
     return res.status(200).json(feedbacks)

  } catch(error) {
      console.log('feedback  GET error', error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    await Feedback.create(req.body)
    return res.status(200)
  } catch(error) {
      console.log('feedback  POST error', error.message)
  }
})

module.exports = router
