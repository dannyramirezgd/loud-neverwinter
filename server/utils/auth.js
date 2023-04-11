const jwt = require('jsonwebtoken');

const secret = 'mysecrets';
const expiration = '1h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.player = data;
        } catch {
            console.log('Invalid Token')    
        }

        return req;
    }, 
    signToken: function ({ playerName, email, _id }) {
        const payload = { playerName, email, _id };

        return jwt.sign({ data: payload }, secret, {expiresIn: expiration })
    }
}