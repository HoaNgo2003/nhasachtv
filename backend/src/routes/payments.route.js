const express = require("express");
const authenticate = require("../middleware/authenticate.js");
const route = express.Router();
const paymentController = require("../controller/payment.controller.js");
route.post("/:id", authenticate, paymentController.createPayment);
route.get("/", authenticate, paymentController.updatePaymentInfo);
module.exports = route