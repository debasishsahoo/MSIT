const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();
const secret_key = `${process.env.SECRET_KEY}`


const authUser = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            const isCustomAuth = token.length < 500

            let deCodedData;
            if (token && isCustomAuth) {
                deCodedData = jwt.verify(token, secret_key);
                req.userid = deCodedData?.id;
            }
            else {
                deCodedData = jwt.decode(token);
                req.userid = deCodedData?.sub;
            }
            next()
        } else {
            res.status(404).json({
                meassage: `Please Login to Process`
            })
        }

    }
    catch (error) {
        console.log(error)
    }
}
module.exports = authUser
