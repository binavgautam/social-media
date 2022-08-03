const postRouter = require("express").Router();
const { default: mongoose } = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");

postRouter.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

postRouter.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

postRouter.post("/", async (req, res) => {
  const { caption, image, id } = req.body;

  const user = await User.findById(id);
  const newPost = new Post({
    caption,
    image,
    user,
  });

  const savedPost = await newPost.save();
  user.posts = user.posts.concat(savedPost._id);
  await user.save();
  res.status(201).json(savedPost);
});

postRouter.delete("/", async (req, res) => {
  await Post.deleteMany({});
  res.status(204).end();
});

postRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Post.findByIdAndRemove(id);
  res.status(204).end();
});

module.exports = postRouter;
