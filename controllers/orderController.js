const Cart = require("../models/Cart");
const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
    try {
        const {userId} = req.body;
        const cart = await Cart.findOne({userId}).populate('items.productId');
        if(!cart) return res.status(400).json({message: 'Cart is empty'})
        // TODO : implement transaction for rollbacks
        let totalCost = 0
        const orderItems = cart.items.map(item => {
            const productPrice = item.productId.price * item.quantity
            totalCost += productPrice
            return {
                productId: item.productId._id,
                quantity: item.quantity,
                price: productPrice
            }
        })

        const order = new Order({userId,items: orderItems, totalCost })
        await order.save()

        await Promise.all(
            orderItems.map(item => 
                Product.findByIdAndUpdate(item.productId, {$inc: {stock: -item.quantity}})
            )
        )

        await Cart.findByIdAndDelete(cart._id)

        res.status(200).json(order)
    } catch(error){
        console.log("--- Error: placeOrder", error)
        res.status(500).json({message: "Failed to place order"})
    }
}

exports.getOrders = async(req,res) => {
    try{
        const {userId, startDate, endDate} = req.query;
        const filter = {
            userId,
            createdAt: {$gte: new Date(startDate), $lte:new Date(endDate)}
        }
        const orders = await Order.find(filter).populate('items.productId')
        res.status(200).json(orders)
    }catch(error){
        console.log("--- Error: getOrders", error)
        res.status(500).json({message: "Failed to fetch order"})
    }
}