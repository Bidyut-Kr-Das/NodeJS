// Creating a http Server(Localhost)
const http = require("http");
//This will create a server and will execute the call back if the serverCreation is successful
const server = http
  .createServer((request, response) => {
    response.end("Hey from the server");
  })
  //.listen(port,host callback())
  .listen(4000, "127.0.0.1", () => {
    console.log("The server is running");
  });
