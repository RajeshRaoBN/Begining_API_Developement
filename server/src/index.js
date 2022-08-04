// src/index.js

const express = require('express')
var cors = require('cors')

const app = express()

const connectDB = require('../config/db')

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))

// routes
const books = require('./routes/api/books')
const port = process.env.PORT || 8082

connectDB()

// cors
app.use(cors({ origin: true, credentials: true}))

// Init Middleware
app.use(express.json({ extended: false }))

// use Routes
app.use('/api/books', books)

app.get('/', (req, res) => {
    res.send("<h1>Hello logRocket</h1>")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})