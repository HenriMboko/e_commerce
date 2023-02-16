const express = require("express");
const productRouter = express.Router();
const productModel = require("../models/productModel")

// @desc Fetch all products
// @route Get/api/products
// @access Public
productRouter.get("/", async (req, res, next) => {

    const products = await productModel.find({});
    res.status(200).json(products)

})

// @desc Fetch products by Id
// @route Get/api/products/:id
// @access Public

productRouter.get("/:id", async (req, res, next) => {
    const product = await productModel.findById(req.params.id);

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({ message: "Product no found" })
    }


})





module.exports = productRouter;