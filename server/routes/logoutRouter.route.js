const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  })

module.exports = router
