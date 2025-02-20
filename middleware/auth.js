exports.is_logged_in = (req,res,next) => {
    // Check if user is have jwt token
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ error: "you don't have token" })
    }else{
        next()
    }
   
}