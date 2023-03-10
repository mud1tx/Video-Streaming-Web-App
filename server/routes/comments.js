const commentController = require("../controllers/comment");

const express = require("express");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

router.post("/", verifyToken, commentController.addComment);

router.delete("/:id", verifyToken, commentController.deleteComment);

router.get("/:videoId", commentController.getComments);

module.exports = router;
