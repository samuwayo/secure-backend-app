const express = require('express')
const router = express.Router()

const {login, signup, getAllUsers } = require('../controllers/userController')

const middleware = require('../middleware/auth')




// Define the routes

router.post('/', (req,res) =>{

    res.send('welcome guest user try to login')
})


router.post('/login/', login)



router.post('/register',signup)

router.get('/users',middleware.is_logged_in,getAllUsers)


// export routes

module.exports = router