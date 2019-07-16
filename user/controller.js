const mongoose = require("mongoose");

const userService = require('./service');

/**
 * @swagger
 * /user/new:
 *   post:
 *     description: Send user-info to server (include username, password, email), then activate account by email
 *     tags:
 *       - user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json    
 *     parameters:
 *       - name: user
 *         description: new user-info
 *         in: body 
 *         required: true
 *         schema:
  *           example: {
  *             "username": "someUser",
  *             "password": "somePassword",
  *             "email": "example@gmail.com"
  *           }
 *     responses:
 *       201:
 *         description: (status:1) New account created
 *       500: 
 *         description: (status:0) Email or username is taken
 */
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

/**
 * @swagger
 * /user/login:
 *   post:
 *     description: authentication
 *     tags:
 *       - user
 *     produces:
 *       - application/json
 *       - application/xml
 *       - applocation/formData  
 *       - application/x-www-form-urlencoded   
 *     consumes:
 *       - application/json
 *       - application/xml
 *       - applocation/formData  
 *       - application/x-www-form-urlencoded   
 *     parameters:
 *       - name: user
 *         description: authenticaton
 *         in: body
 *         required: true
  *         schema:
  *           example: {
  *             "username": "someUser",
  *             "password": "somePassword"
  *           }     
 *     responses:
 *       200:
 *         description: (status:1) User found and logged in successfully
 *       401:
 *         description: (status:0) Bad username, not found in db
 *       403:
 *         description: (status:0) Username and password don't match
 */
function authenticate(req, res) {

    userService.authenticate(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ status: 0, message: err }))
}

module.exports = {
    create,
    authenticate
}