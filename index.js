require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
let port = process.env.PORT || 5000;
const router = require('./routes/userRoutes')


// Middleware to parse JSON data in the body
app.use(express.json());

// Middleware to parse URL-encoded data (forms, etc.)
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth/', router)

// app listerning

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})