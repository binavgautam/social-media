const { response } = require("express");
const User = require("../models/User");

const userRouter = require("express").Router();

userRouter.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

userRouter.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

userRouter.post("/", async (req, res) => {
  const { username, name, password, email } = req.body;
  const newUser = new User({
    username,
    name,
    password,
    email,
  });

  const user = await newUser.save();
  res.status(201).json(user);
});

userRouter.delete("/", async (req, res) => {
  await User.deleteMany({});
  res.json(204);
});

module.exports = userRouter;
