// Order model
// userId: whose order it is 
// Items: an array of products that need to ordered {productId, quantity, checkout out price (maybe)}
// totalCost: total value of the order
// PlacedAt: time at which order request received

const { ObjectId } = require("bson");
const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
    userId: {type: ObjectId, ref: 'User', required: true}, // TODO: create user schema
    items: [
        {
            productId: {type: ObjectId, ref: 'Product', required: true},
            quantity: {type: Number, required: true},
            price:  {type: Number}
        }
    ],
    createdAt: {type: Date, default: Date.now },
    totalCost: {type: Number}
})

module.exports = model('Order', orderSchema)