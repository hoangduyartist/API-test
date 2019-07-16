const Product = require('./model');

async function postByUser(product){
    const newproduct = await Product.create(product);
    if (newproduct)
    return {status: 1, message: "Add new product successful", data: newproduct}

    return {status: 0, message: "Add new product failed"}
}

async function updateByUser(){

}

async function deleteByUser(){

}

module.exports = {
    postByUser,
    updateByUser,
    deleteByUser
}