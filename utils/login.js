const jwt = require('jsonwebtoken')

exports.token = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
}