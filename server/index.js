const cookieSession = require("cookie-session")
const express = require("express")
const cors = require('cors')
const passport = require('passport')
const passportSetup = require('./passport')
const route = require('./routes')
const app = express()

app.use(cookieSession(
    {
        name: 'session',
        keys: ['test'],
        maxAge: 24 * 60 * 60 * 100
    }
))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, DELETE, PUT',
    credentials: true,
}))

app.use('/auth', route)

app.listen('8000')