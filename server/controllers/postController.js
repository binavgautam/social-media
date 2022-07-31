const postRouter = require("express").Router();

postRouter.get("/", (req, res) => {
  res.json({ bruh: "bruh" });
});

module.exports = postRouter;
