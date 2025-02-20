const db = require('./db')

// create user

exports.createUser = (u_name,email,password) =>{
   return new Promise((resolve, reject) =>{
     db.query('INSERT INTO users (u_name, email, password) VALUES (?,?,?)', [u_name, email, password], (err, result) => {
       if(err) reject(err)
       else resolve(result)
     })
   })
}

// get user by email 
exports.getUserByEmail = (email) =>{
   return new Promise((resolve, reject) =>{
     db.query('SELECT * FROM users WHERE email =?', [email], (err, result) => {
       if(err) reject(err)
       else resolve(result[0])
     })
   })}