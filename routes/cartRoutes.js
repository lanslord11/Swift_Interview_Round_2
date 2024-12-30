const { Router } = require("express");
const { addToCart, getCart } = require("../controllers/cartController");

const cartRouter = Router()

// POST /cart - Add a product to the cart.
// GET /cart - View the cart.

cartRouter.post('/cart', addToCart)
cartRouter.get('/cart', getCart) 
module.exports = cartRouter;