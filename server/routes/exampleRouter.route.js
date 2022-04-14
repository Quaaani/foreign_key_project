const router = require('express').Router()

router.route('/')
  .get((req, res) => {
    try {
      console.log('*** GET REQUEST ***')
      return res.status(200).json({ message: 'GET RESPONSE FROM SERVER' })
    } catch (error) {
        console.log('example error', error.message)
    }
  }) 
  .post((req, res) => {
    try {
      console.log('*** POST REQUEST ***')
      return  res.status(200).json({ message: 'POST RESPONSE FROM SERVER' })
    } catch (error) {
        console.log('example error', error.message)
  }
  })

module.exports = router
