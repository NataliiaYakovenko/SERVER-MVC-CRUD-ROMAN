const fs = require("fs");
const path = require("path");
const http = require("http");
const app = require("./app");

const currentFileName = path.basename(__filename);

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
