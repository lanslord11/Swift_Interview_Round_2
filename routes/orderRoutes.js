// POST /checkout - Place an order.
// GET /orders - Fetch past orders. - User should be able to filter data based on date range

const { Router } = require("express");
const { placeOrder, getOrders } = require("../controllers/orderController");

const orderRouter = Router()

orderRouter.post('/checkout', placeOrder) 
orderRouter.get('/orders', getOrders)

module.exports = orderRouter
