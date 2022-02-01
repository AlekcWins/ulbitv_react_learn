const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ApiError = require("../errors/ApiError");
const {User, Basket} = require('../models/models')
const secretJWTKey = process.env.SECRET_JWT_KEY

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        secretJWTKey,
        {expiresIn: '24h'}
    )
}

class UserController {

    async registration(req, res, next) {
        //role only for test
        const {email, password, role} = req.body;
        //TODO after add normal validate
        if (!email || !password) {
            return next(ApiError.badRequest('Неккоректный email или пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email зарегистрирован'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = Basket.create({userId: user.id})

        const token = generateJWT(user.id, user.email, user.role)

        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не зарегистрирован'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('неправильный пароль'))
        }
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}


module.exports = new UserController();
