const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    if (!req.session.user_data) return res.sendStatus(400)

    return res.status(200).json({ data: req.session.user_data })
  })

module.exports = router
