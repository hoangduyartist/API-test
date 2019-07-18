const Product = require('./model');

async function postByUser(product){
    const newproduct = await Product.create(product);
    if (newproduct)
    return {status: 1, message: "Add new product successful", data: newproduct}

    return {status: 0, message: "Add new product failed"}
}

async function retrieveAll(){
    const allProduct = await Product.find({});
    
    if(allProduct && allProduct.length>0)
    return {status: 1, message: "Fetch all Products", data: allProduct}

    return {status: 0, message: "Empty or error occured"}
}

async function updateByUser(){

}

async function deleteByUser(){

}

module.exports = {
    postByUser,
    retrieveAll,
    updateByUser,
    deleteByUser
}