require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    const accessToken = jwt.sign({
        username: user.username,
        id: user.id
    }, process.env.ACCESS_TOKEN_SECRET)

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token']
    try {
        const validToken = jwt.verify(accessToken, 
            process.env.ACCESS_TOKEN_SECRET)
        if (validToken) {
            req.authenticated = true
            return next();
        }
    } catch(err) {
        return res.status(401).json({error: 'Invalid or Expired Token'});
    }
}

module.exports = { generateToken, validateToken };