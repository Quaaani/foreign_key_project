// Examples
// npm
const config = require('./config/config')
const express = require('express')
 
// routers
const exampleRouter = require('./routes/exampleRouter.route')
const registrationRouter = require('./routes/registrationRouter.route')
const loginRouter = require('./routes/loginRouter.route')
const sessionRouter = require('./routes/sessionRouter.route')
 
// app && PORT
const app = express()
const PORT = process.env.PORT ?? 4000
 
// config
config(app)
 
// routes
app.use('/example', exampleRouter)
app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
app.use('/session', sessionRouter)

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`) })
