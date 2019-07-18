const productService = require('./service');

/**
 * @swagger
 * /product/new:
 *   post:
 *     description: Send product-info to server, adding new product
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json    
 *     parameters:
 *       - name: product
 *         description: new product-info
 *         in: body 
 *         required: true
 *         schema:
  *           example: {
  *             "name": "name",
  *             "description": "description"
  *           }
 *     responses:
 *       201:
 *         description: (status:1) New account created
 *       500: 
 *         description: (status:0) Email or username is taken
 */
function postByUser(req,res){
    productService.postByUser(req.body)
    .then(data=>res.send(data))
    .catch(err=>res.send({status: 0, message: err}))
}

/**
 * @swagger
 * /product:
 *   get:
 *     description: send request to server to get all products
 *     tags:
 *       - product
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json    
 *     responses:
 *       200:
 *         description: (status:1) Fetch all products successful
 *       500: 
 *         description: (status:0) Internal server error
 */
function retrieveAllProduct(req,res){
    productService.retrieveAll()
    .then(data=>res.send(data))
    .catch(err=>res.send({status: 0, message: err}))
}

function updateByUser(req,res){

}

function deleteByUser(req,res){

}

module.exports = {
    postByUser,
    retrieveAllProduct,
    updateByUser,
    deleteByUser
}