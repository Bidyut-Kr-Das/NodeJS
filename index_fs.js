const fs = require("fs");

//read file synchronously
const text = fs.readFileSync("./txt/avocado.txt", "utf-8");

// console.log(text)
const textOut = `This is we know about avocado: ${text}\n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);

// __dirname tells you the current working directory where node is running
//This is file read function asynchronous version.
fs.readFile(`${__dirname}/txt/output.txt`, "utf-8", (error, data) => {
  if (error) throw new Error("^_^");
  console.log(data);
});
//as above code is asynchronous This will be executed first
console.log(__dirname);
