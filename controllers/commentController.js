const commentModel = require("../models/comment");
const imageModel = require("../models/image");
const validatorMessage = require("../lib/validatorMessage.js");

module.exports.create = async function (req, res) {
  const image = await imageModel.findById({ _id: req.params.imageId });

  const comment = req.body.comment;

  commentModel.create({ comment, image: image._id }, function (err, comment) {
    if (err) {
      return res.status(406).json(validatorMessage(err));
    }

    image.commentIds.push(comment);
    image.save();

    return res.status(204).send("");
  });
};
