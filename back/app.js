// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit:50000
}));
// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app)
const { isAuthenticated } = require('./middlewares/jwt.middleware')

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const authRouter = require('./routes/auth.routes')
app.use('/auth', authRouter)

const allRoutes = require('./routes/index.routes')
app.use('/api', allRoutes)

const beersRouter = require('./routes/beers.routes')
app.use('/api/beers', isAuthenticated, beersRouter)

const barsRouter = require('./routes/bars.routes')
app.use('/api/bars', isAuthenticated, barsRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
