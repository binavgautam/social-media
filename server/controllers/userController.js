const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  res.json({ bruh: "bruh" });
});

module.exports = userRouter;
