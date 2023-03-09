const userController = require("../controllers/user");

const express = require("express");

const router = express.Router();

router.get("/test", userController.test);

module.exports = router;
