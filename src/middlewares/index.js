const jwt = require('jsonwebtoken')
const authConfig = require('../../config/jwt.json')

const middleware = {
    authentication(req, res, next) {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ error: "No token provided" })
        }

        const parts = authHeader.split(' ')

        if(!parts.lenght === 2) {
            return res.status(401).json({ error: "Token error" })
        }

        const [ scheme, token ] = parts

        if(!/^Bearer$/i.test(scheme)) {
            return res.status(401).json({ error: "Token malformated" })
        }

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Invalid token" })
            }

                req.user_id = decoded.id
                return next()


        })
    }
        
}

module.exports = middleware