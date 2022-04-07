const router = require('express').Router()
const { User } = require('../db/models')

router.route('/')
  .post(async (req, res) => {
    console.log('/login req.body =>', req.body)
    const { user_email, user_password } = req.body

    const user = await User.findOne({ where: { user_email }, raw: true })
    const passwordCheck = await bcrypt.compare(user_password, user.user_password)
    
    if (!user || !passwordCheck) return res.status(400).json({ message: 'Неправильная почта или пароль' })

    req.session.user_data = user
    res.sendStatus(200)
  })

module.exports = router
