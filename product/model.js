
var mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,

    name: { type: String, required: true },
    description: { type: String, required: true },
    userID: { type: String, required: true, default: "ObjectID" }

});

module.exports = mongoose.model("products",productSchema);
