//Create a very simple api
//moddules
const http = require("http"); //module http
const url = require("url"); //module url
const fs = require("fs"); //module fileSystem to read the db

//The data file will be inside {__dirname}/data/db.json

//Reading the file synchronously as we want to start the api only when the file is read
const data = fs.readFileSync(`${__dirname}/data/db.json`, "utf-8");

// Create a server to show the data
const server = http.createServer((req, response) => {
  //get the url of page
  const url = req.url;
  if (url === "/api") {
    //Create header for the json to parse
    //first status code 200 - 300 for normal and 404 for no page found error
    //second object of headers
    response.writeHead(200, {
      "content-type": "application/json",
    });
    response.end(data);
  } else {
    response.writeHead(404, {
      "content-type": "text/html",
    });
    response.end("<h1>Page not found! 404</h1>");
  }
});

//Listen to the server just got created
server.listen(4000, "127.0.0.1", () => {
  console.log("server started \nPlease go to localhost:4000/api");
});
