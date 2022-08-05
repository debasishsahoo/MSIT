const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const secret_key = `${process.env.SECRET_KEY}`
const TimeOut = parseInt(`${process.env.EXPIRESIN}`)

const JwtHelper = {
    LoginToken: (tokenobj) => {
        return jwt.sign(
            tokenobj, secret_key
        )
    }
}

module.exports = JwtHelper