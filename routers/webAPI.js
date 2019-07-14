const express = require("express");
const router = express.Router();

const userController = require('./../user/controller');

router.post('/user/new', userController.create);
router.post('/user/login', userController.authenticate);
// router.get('/user/me', userController.fetchMyProfile)

module.exports = router;