const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/user.controller.js")
router.get("/profile", usercontroller.getUserProfile);
router.get("/", usercontroller.getAllUser);
module.exports = router;
