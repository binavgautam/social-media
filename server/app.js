const express = require("express");
require("express-async-errors");
const cors = require("cors");
const connectDatabase = require("./utils/database");
const userRouter = require("./controllers/userController");
const postRouter = require("./controllers/postController");
const commentRouter = require("./controllers/commentController");

const app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDatabase();

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/posts", commentRouter);

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

module.exports = app;
