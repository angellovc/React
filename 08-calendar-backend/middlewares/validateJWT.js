const {response} = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (request, response = response, next) => {

    // x-web-token
    const token = request.header('x-web-token');
    if (!token) {
        return response.status(401).json({
            ok: false,
            msg: 'Access Token is needed'
        });
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );
        const {uid, name} = payload;
        request.uid = uid;
        request.name = name;

    } catch (error) {
        console.log(error);
        return response.status(401).json({
            ok: false,
            msg: 'Invalid Token'
        });
    }

    next();
}

module.exports = validateJWT;
