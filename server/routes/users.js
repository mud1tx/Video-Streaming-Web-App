const userController = require("../controllers/user");

const express = require("express");

const { verifyToken } = require("../verifyToken");

const router = express.Router();

router.put("/:id", verifyToken, userController.update);

router.delete("/:id", verifyToken, userController.deleteUser);

router.get("/find/:id", userController.getUser);

router.put("/sub/:id", verifyToken, userController.subscribe);

router.put("/unsub/:id", verifyToken, userController.unsubscribe);

router.put("/like/:videoId", verifyToken, userController.like);

router.put("/dislike/:videoId", verifyToken, userController.dislike);

module.exports = router;
