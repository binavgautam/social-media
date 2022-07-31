const express = require("express");
require("express-async-errors");
const cors = require("cors");
const config = require("./utils/config");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());

const userRouter = require("./controllers/userController");
const postRouter = require("./controllers/postController");
const commentRouter = require("./controllers/commentController");
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/posts/:id/comments", commentRouter);

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

module.exports = app;
