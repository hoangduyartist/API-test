const express = require("express");
const router = express.Router();

const userController = require('./../user/controller');
const productController = require('./../product/controller');
const swaggerController = require('./../swagger/controller');

//swagger
router.use('/docs',swaggerController.swaggerUI.serve,swaggerController.swaggerUI.setup(swaggerController.swaggerSpec));
router.get('/json',swaggerController.getJson)
//end swagger

router.post('/user/new', userController.create);
router.post('/user/login', userController.authenticate);
// router.get('/user/me', userController.fetchMyProfile)

router.post('/product/new', productController.postByUser);
router.get('/product', productController.retrieveAllProduct);

module.exports = router;