const router = require("express").Router();
const ImagesController = require("./imagesController");
const CommentController = require("./commentController");
const LikeController = require("./likeController");

router.get("/images", ImagesController.list);
router.post("/images", ImagesController.create);

router.post("/comment/:imageId", CommentController.create);
router.post("/like/:imageId", LikeController.create);

module.exports = router;
