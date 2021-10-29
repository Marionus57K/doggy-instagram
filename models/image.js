const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Buffer,
      required: true,
    },

    commentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    ],
  },
  {
    timestamps: true,
  }
);

imageSchema.virtual("comments", {
  ref: "Comments",
  localField: "_id",
  foreignField: "image",
});

imageSchema.set("toObject", { virtuals: true });
imageSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Image", imageSchema);
