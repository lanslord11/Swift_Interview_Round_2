const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    try {
        const {filter} = req.query;
        const products = await Product.find(filter ? JSON.parse(filter) : {})
        res.status(200).json(products)
    }catch(error){
        console.log("--- Error: getProduct", error)
        res.status(500).json({message: "Failed to fetch products"})
    }
}