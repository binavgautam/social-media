const app = require("./app");
const http = require("http");

const server = http.createServer(app);

const PORT = 3001;
server.listen(PORT, () => {
  console.log("running on port 3001");
});