const authController = require("../controllers/auth");

const express = require("express");

const router = express.Router();

router.post("/signup", authController.signup);

router.post("/signin", authController.signin);

// router.post("/signup",authController)

module.exports = router;
