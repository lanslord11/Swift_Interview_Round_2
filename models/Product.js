const { Schema, model } = require("mongoose");

// Product Model
// Name: store the name of the product
// Description: description about the product
// Price: price per piece
// Stock: count of the product in the inventory

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
})

// creating collection
module.exports = model('Product', productSchema)