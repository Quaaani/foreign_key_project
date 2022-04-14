const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    try {
      req.session.destroy()
      return res.sendStatus(200)
    } catch(error) {
        console.log('logout error', error.message)
    }
  })

module.exports = router
