const { Router } = require("express");
const { getProducts } = require("../controllers/productController");

// GET /products - Fetch products with filters.

const productRouter = Router()
productRouter.get('/products', getProducts)
module.exports = productRouter;