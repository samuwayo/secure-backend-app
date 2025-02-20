const {createUser,getUserByEmail} = require('../db/user')

exports.login = (req,res) => {
    
}
exports.signup = (req,res) => {
 const data = req.query
 createUser(data.name, data.email ,data.password)
 res.send('user created')
//  createUser(data.name, data.email,data.password)
}