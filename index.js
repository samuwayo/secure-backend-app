require('dotenv').config()
const express = require('express')
const app = express()
let port = process.env.PORT || 5000;
// middleware

app.use(express.json())

// routes


// app listerning

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})