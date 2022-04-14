// npm
const config = require('./config/config')
const express = require('express')

// routers
const registrationRouter = require('./routes/registrationRouter.route')
const loginRouter = require('./routes/loginRouter.route')
const sessionRouter = require('./routes/sessionRouter.route')
const logoutRouter = require('./routes/logoutRouter.route')
const coursesRouter = require('./routes/coursesRouter.route')
const tlevelRouter = require('./routes/tlevelRouter.route')
const favoritesRouter = require('./routes/favoritesRouter.route')
const dictionariesRouter = require('./routes/dictionariesRouter.route')
const feedbackRouter = require('./routes/feedbackRouter.route')
const teacherRouter = require('./routes/teachersProfileRouter.route')
const homeworkRouter = require('./routes/homeworkRouter.route')

// app && PORT
const app = express()
const PORT = process.env.PORT ?? 4000

// config
config(app)

// routes
app.use('/session', sessionRouter)
app.use('/registration', registrationRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
app.use('/courses', coursesRouter)
app.use('/tlevel', tlevelRouter)
app.use('/favorites', favoritesRouter)
app.use('/dictionaries', dictionariesRouter)
app.use('/feedback', feedbackRouter)
app.use('/teacherProfile', teacherRouter)
app.use('/homework', homeworkRouter)


// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`) })
