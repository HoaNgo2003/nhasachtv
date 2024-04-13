const authenticate = require("../middleware/authenticate.js");
const express = require("express");
const router = express.Router();
const ratingController = require("../controller/rating.controller.js");
router.post("/create", authenticate, ratingController.creatRating);
router.put("/product/:productId", authenticate, ratingController.getAllRating);
module.exports = router;