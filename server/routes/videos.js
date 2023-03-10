const videoController = require("../controllers/video");

const express = require("express");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

// router.post("/", verifyToken, videoController.addVideo);

// router.put("/:id", verifyToken, videoController.addVideo);

// router.delete("/:id", verifyToken, videoController.addVideo);

// router.get("/find/:id", videoController.getVideo);

// router.put("/view/:id", videoController.addView);

// router.get("/random", videoController.random);

// router.get("/sub", verifyToken, videoController.sub);

// router.get("/tags", videoController.getByTag);

// router.get("/search", videoController.search);

module.exports = router;
