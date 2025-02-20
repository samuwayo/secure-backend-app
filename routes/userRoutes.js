const express = require('express')
const router = express.Router()

const {login, signup} = require('../controllers/userController')
// Define the routes

router.post('/', (req,res) =>{

    res.send('welcome guest user try to login')
})


router.post('/login/', login)



router.post('/register',signup)



// export routes

module.exports = router