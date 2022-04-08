const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    console.log('*** /session GET REQUEST ****')

    if (!req.session.user_data) return res.sendStatus(400)

    console.log('session =>', req.session.user_data)
    return res.status(200).json({ data: req.session.user_data })
  })

module.exports = router