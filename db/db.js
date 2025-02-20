const mysql = require('mysql2')
require('dotenv').config()

// to create connection to mysql server auth db

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME
})

db.connect((err) => {
    if (err) throw err
    console.log('Connected to the MySQL server')
})

// export database connection

module.exports = db