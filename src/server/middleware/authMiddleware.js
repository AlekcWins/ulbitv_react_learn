const jwt = require('jsonwebtoken');

const secretJWTKey = process.env.SECRET_JWT_KEY


module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer token
        if (!token) {
            return res.status(401).json({message: 'Не авторизован'})
        }
        const decoded = jwt.verify(token, secretJWTKey)
        req.user = decoded
        next()

    } catch (err) {
        res.status(401).json({message: 'Не авторизован'})
    }
}
