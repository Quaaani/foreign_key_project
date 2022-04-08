// npm
const config = require('./config/config')
const express = require('express')
 
// routers
const exampleRouter = require('./routes/exampleRouter.route')
const registrationRouter = require('./routes/registrationRouter.route')
const loginRouter = require('./routes/loginRouter.route')
const sessionRouter = require('./routes/sessionRouter.route')
<<<<<<< HEAD
const logoutRouter = require('./routes/logoutRouter.route')
=======
const coursesRouter = require('./routes/coursesRouter.route')
>>>>>>> cd8ea2e40dfa33276347346ad227810304b79f6b
 
// app && PORT
const app = express()
const PORT = process.env.PORT ?? 4000
 
// config
config(app)
 
// routes
app.use('/example', exampleRouter)
app.use('/session', sessionRouter)
app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
<<<<<<< HEAD
app.use('/logout', logoutRouter)
=======
app.use('/session', sessionRouter)
app.use('/courses', coursesRouter)
>>>>>>> cd8ea2e40dfa33276347346ad227810304b79f6b

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`) })
