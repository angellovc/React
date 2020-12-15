/*
    User Rutes / Auth
    host + /api/auth
*/
const {Router} = require('express');
const router = Router();
const {
    registerController,
    loginController,
    renewController
} = require('../controllers/authController');
const {check} = require('express-validator');
const validateFields = require('../middlewares/validateFields');
const validateJWT = require('../middlewares/validateJWT');



router.post(
    '/register',
    [
        check('name', 'name is mandatory').not().isEmpty(),
        check('email', 'email needs to be a valid one').isEmail(),
        check('password', 'password needs to be at least 6 char long').isLength({min: 6}),
        validateFields
    ],
    registerController
);

router.post(
    '/',
    [
        check('email', 'email needs to be a valid one').isEmail(),
        check('password', 'password needs to be at least 6 char long').isLength({min: 6}),
        validateFields
    ],
    loginController
);

router.get(
    '/renew',
    validateJWT,
    renewController
);

module.exports = router;