const Post = require("../models/Post");
const url = `mongodb+srv://user1:user1@cluster0.y5msw.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected");

    const post = new Post({
      content: "HTML is Easy",
      date: new Date(),
      important: true,
    });

    return note.save();
  })
  .then(() => {
    console.log("note saved!");
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
