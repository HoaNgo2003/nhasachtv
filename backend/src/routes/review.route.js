const authenticate = require("../middleware/authenticate.js");
const express = require("express");
const router = express.Router();
const reviewController = require("../controller/review.controller.js");
router.post("/create", authenticate,reviewController.creatReview );
router.get("/product/:productId",  reviewController.getAllReview);
module.exports = router;