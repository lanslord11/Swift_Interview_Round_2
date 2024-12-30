const Cart = require("../models/Cart")
const Product = require("../models/Product")

exports.addToCart = async(req,res) => {
    try{
        const {userId, productId, quantity} = req.body
        let cart = await Cart.findOne({userId})
        const product = await Product.findById(productId)

        if(!cart){
            cart = new Cart({userId, items: []})
        }else {
            const itemIndexInCart = cart.items.findIndex(items => items.productId.equals(productId))
            if (itemIndexInCart > -1){
                cart.items[itemIndexInCart].quantity += quantity
            }else {
                cart.items.push({productId, quantity})
            }
        }
        await cart.save();
        res.status(200).json(cart)
    }catch(error){
        console.log("--- Error: addToCart", error)
        res.status(500).json({message: "Failed to add to cart"})
    }
}

exports.getCart = async (req, res) => {
    try{
        const {userId} = req.query;
        const cart = await Cart.findOne({userId}).populate('items.productId')
        res.status(200).json(cart)
    }catch(error){
        console.log("--- Error: getCart", error)
        res.status(500).json({message: "Failed to fetch the cart"})
    }
}