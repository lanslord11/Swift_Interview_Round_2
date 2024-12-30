// Cart Model
// userId: whose own the this cart
// Items: an array of products { productId, quantity}

const { ObjectId } = require("bson");
const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
    userId: {type: ObjectId, ref: 'User', required: true}, // TODO: create user schema
    items: [
        {
            productId: {type: ObjectId, ref: 'Product', required: true},
            quantity: {type: Number, required: true}
        }
    ],
    createdAt: {type: Date, default: Date.now },
})

module.exports = model('Cart', cartSchema)