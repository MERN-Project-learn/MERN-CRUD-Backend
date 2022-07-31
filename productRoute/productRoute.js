const express = require("express");
const { createproduct, getProduct, UpdateProduct, DeleteProduct } = require("../productController/productController");
const router = express.Router()

router.route("/product/new").post(createproduct)
router.route("/allproduct").get(getProduct)
router.route("/product/:id").put(UpdateProduct).delete(DeleteProduct)



module.exports = router;