const jwt = require('jsonwebtoken');

const secretJWTKey = process.env.SECRET_JWT_KEY


module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer token
            if (!token) {
                return res.status(401).json({message: 'Не авторизован'})
            }
            const decoded = jwt.verify(token, secretJWTKey)
            console.log(decoded)
            if (decoded.role !== role) {
                return res.status(403).json({message: 'Нет доступа'})
            }
            req.user = decoded
            next()

        } catch (err) {
            res.status(401).json({message: 'Не авторизован'})
        }
    }
}



