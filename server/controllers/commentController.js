const commentRouter = require("express").Router();

commentRouter.get("/", (req, res) => {
  res.json({ bruh: "bruh" });
});

module.exports = commentRouter;
