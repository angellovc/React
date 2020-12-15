/* Express is imported and used in the response to get hints
or autocomplete */
const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const {generateJWT} = require('../helpers/jwt');

const registerController = async (request, response = response) => {

    const {email, password} = request.body;
    try {

        let user = await User.findOne({email});
        if (user) {
            return response.status(400).json({
                ok: false,
                msg: "Email already exists"
            });
        }
        
        user = new User(request.body);

        /* Password encryption */
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        /* Generate the JWT */
        const token = await generateJWT(user.id, user.name);

        response.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Please contact to the admin'
        });
    }
}

const loginController = async (request, response = response) => {

    const {email, password} = request.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return response.status(400).json({
                ok: false,
                msg: "Incorrect Email or Password"
            });
        }

        /* confirm the password */
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return response.status(400).json({
                ok: false,
                msg: 'Incorrect Email or Password'
            });
        }
        /* Generate the JWT */
        const token = await generateJWT(user.id, user.name);

        response.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token: "token",
            token
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Please contact to the admin'
        });
    }
}

const renewController = async (request, response = response) => {

    const {uid, name} = request;
    const token = await generateJWT(uid, name);
    response.json({
        uid: uid,
        name: name,
        ok: true,
        token
    });
}

module.exports = {
    registerController,
    loginController,
    renewController
    
}