const {createUser,getUserByEmail} = require('../db/user')

const login_utils = require('../utils/login')

exports.login = (req,res) => {
    const data = req.query
getUserByEmail(data.email).then(user => {
  let token = login_utils.token(data)
  res.json({key: token})
}).catch(err => {
    res.status(404).json({message: 'User not found'})
  
})
}



exports.signup = (req,res) => {
 const data = req.query
 createUser(data.name, data.email ,data.password).then(user => {
  let token = login_utils.token(data)
    res.send({key: token})
 }).catch(err => {
    res.status(400).json({message: 'Error creating user'})
 })
 
}


