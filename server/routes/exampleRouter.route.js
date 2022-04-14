const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    console.log('*** GET REQUEST ***')

    res.status(200).json({ message: 'GET RESPONSE FROM SERVER' })
  }) 
  .post((req, res) => {
    console.log('*** POST REQUEST ***')

    res.status(200).json({ message: 'POST RESPONSE FROM SERVER' })
  })

module.exports = router
