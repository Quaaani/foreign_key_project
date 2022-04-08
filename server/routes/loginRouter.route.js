const router = require('express').Router()
const { User } = require('../db/models')
const bcrypt = require ('bcrypt')

router.route('/')
  .post(async (req, res) => {
    console.log('/login req.body =>', req.body)
    const { user_email, user_password } = req.body

    const user = await User.findOne({ where: { user_email }, raw: true })
    
    if (!user) return res.status(400).json({ message: 'Неправильная почта или пароль' })
    const passwordCheck = await bcrypt.compare(user_password, user.user_password)

    if (!passwordCheck) return res.status(400).json({ message: 'Неправильная почта или пароль' })
    
    req.session.user_data = user
    res.sendStatus(200)
  })

module.exports = router
