require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const cors = require('cors')

const connectWithDB = require('./config/db')

connectWithDB()

const app = express()

app.use(cookieParser)
app.use(cookieSession({
    name: 'session',
    maxAge: process.env.COOKIE_TIME * 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_SECRET],
    sameSite: 'none'
}))

app.use(express.json())

app.use(cors({
    prigin: process.env.CLIENT_URL,
    credentials: true,
}))

app.listen(process.env.PORT || 8000, (err) => {
    if(err){
        console.log('ERROR : ' + err)
    }
    console.log(`Server is running on port ${process.env.PORT}`)
})