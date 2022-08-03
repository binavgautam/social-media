const commentRouter = require("express").Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

commentRouter.get("/:id/comments", async (req, res) => {
  const comments = await Comment.find({});
  res.json(comments);
});

commentRouter.post("/:id/comments", async (req, res) => {
  const body = req.body;

  const user = await User.findById(body.user);
  const post = await Post.findById(body.post);

  const newComment = new Comment(body);

  const savedComment = await newComment.save();
  post.comments = post.comments.concat(savedComment._id);
  await post.save();
  res.status(201).json(savedComment);
});

commentRouter.delete("/", async (req, res) => {
  await Comment.deleteMany({});
  res.status(204).end();
});

commentRouter.delete("/:id/comments/:id", async (req, res) => {
  const id = req.params.id;
  await Comment.findByIdAndRemove(id);
  res.status(204).end();
});

module.exports = commentRouter;
