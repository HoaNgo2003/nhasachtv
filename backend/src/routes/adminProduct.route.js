const authenticate = require("../middleware/authenticate.js");
const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller.js");

router.post("/", authenticate, productController.createProduct);
router.post("/",authenticate, productController.createMultipleProduct);
router.delete("/:id", authenticate, productController.deleteProduct);
router.put("/:id", authenticate, productController.updateProduct);
module.exports = router;