const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require('./model');
const config = require('./../configs/config');

async function create(userParams) {
    const userValidate = await User.findOne({ username: userParams.username });

    if (userValidate) {
        return ({ status: 0, message: 'Username is already taken' })
    }
    if (!userValidate) {
        if (await User.findOne({ email: userParams.email }))
            return ({ status: 0, message: 'Email is already taken' })
    }

    const user = new User({
        _id: userParams._id,
        username: userParams.username,
        email: userParams.email,
        password: userParams.password
    });

    const newuser = await user.save();

    if (newuser) {
        return ({ status: 1, newuser: newuser, message: "Register successful !" })
    }

    return ({ status: 0, message: "Register failed !" })
}

async function authenticate(userParams) {

    const user = await User.findOne({ username: userParams.username })

    if (user && bcrypt.compareSync(userParams.password, user.password)) {
        const token = jwt.sign({ userID: user._id }, config.secretString, { expiresIn: '1d' });
        return { status: 1, message: "Successfully logged in", data: { user: user, token: token } }
    }

    return { status: 0, message: "Username or Password is not correct", data: null };

}

module.exports = {
    create,
    authenticate
}