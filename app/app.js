require('dotenv').config()
const express = require('express')
const middleware = require('../middleware/middleware')
const {notFoundHandler,errorHandler} = require('../error/routeError')
const app = express()


//middleware
app.use(middleware)

//routes
app.use(require('../routes/health'))

// error
app.use(notFoundHandler)
app.use(errorHandler)


module.exports = app