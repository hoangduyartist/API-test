
var mongoose = require("mongoose");

/**
 * @swagger
 * definitions:
 *   PRODUCT:
 *     type: object
 *     required:
 *       - _id
 *       - name
 *       - userID
 *     properties:
 *       _id: 
 *         type: objectID
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       userID:
 *         type: objectID
 */

const productSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,

    name: { type: String, required: true },
    description: { type: String, required: true },
    userID: { type: String, required: true, default: "ObjectID" }

});

module.exports = mongoose.model("products",productSchema);
