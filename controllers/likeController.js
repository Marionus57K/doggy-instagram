const likeModel = require("../models/like");
const imageModel = require("../models/image");

module.exports.create = async function (req, res) {
  let image = null;

  try {
    image = await imageModel.findById({ _id: req.params.imageId });
  } catch (err) {
    return res.status(404).send("");
  }

  const likeValue = {
    image: image._id,
    userId: req.body.userId,
  };

  const like = await likeModel.findOne(likeValue);

  if (like === null) {
    await likeModel.create(likeValue);
  } else {
    await likeModel.deleteOne(likeValue);
  }

  return res.status(204).send("");
};
