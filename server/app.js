// npm
const config = require('./config/config')
const express = require('express')
 
// routers
const exampleRouter = require('./routes/exampleRouter.route')
 
// app && PORT
const app = express()
const PORT = process.env.PORT ?? 4000
 
// config
config(app)
 
// routes
app.use('/example', exampleRouter)

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`) })
