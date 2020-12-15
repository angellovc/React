const {response} = require('express');
const {validationResult} = require('express-validator');

const validateFields = (request, response = response, next) => {

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({
            ok: false,
            errors: errors
        });
    }
    next();
}

module.exports = validateFields
