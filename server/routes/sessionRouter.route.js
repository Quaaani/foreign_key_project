const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    try {
      console.log('*** /session GET REQUEST ****')
  
      if (!req.session.user_data) return res.status(400).json({ message: 'Вы не авторизованы' })
  
      return res.status(200).json({ data: req.session.user_data })
    } catch(error) {
        console.log('session error', error.message)
    }
  })

module.exports = router
