const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: String,
  },
  caption: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

postSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Posts", postSchema);
