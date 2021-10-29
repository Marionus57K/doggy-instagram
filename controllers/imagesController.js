const imageModel = require("../models/image");
const validatorMessage = require("../lib/validatorMessage.js");

const list = async function (req, res) {
  const images = await imageModel.find().populate({
    path: "comments",
    select: "comment",
  });

  //Image sending isnt working for some damn reason - :(
  const data = images.map((result) => {
    return {
      description: result.description,
      date: result.createdAt,
      comments: result.comments,
      image: result.image.toString("base64"),
    };
  });

  res.json(data);
};

const create = function (req, res) {
  const { description, image } = req.body;

  imageModel.create({ description, image }, function (err) {
    if (err) {
      return res.status(406).json(validatorMessage(err));
    }

    res.status(204).send("");
  });
};

module.exports = {
  list,
  create,
};
