const mongoose = require("mongoose");

const userService = require('./service');

function create(req, res) {
    let newUser = {
        _id: new mongoose.Types.ObjectId(),
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    userService.create(newUser)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ status: 0, message: err }))
}

function authenticate(req, res) {
    // let username = req.body.username,
    //     password = req.body.password;
    userService.authenticate(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ status: 0, message: err }))
}

module.exports = {
    create,
    authenticate
}