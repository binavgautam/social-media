const postRouter = require("express").Router();
const Posts = require("../models/Post");

postRouter.get("/", (req, res) => {
  res.json({ bruh: "bruh" });
});

module.exports = postRouter;
