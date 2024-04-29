const express = require("express");
const app = express();
const square = require("./square");
const wiki = require("./wiki.js");

const port = 3000;
const hostname = "localhost";
console.log(`Area of the square is ${square.area(4)}`);

app.use("/wiki", wiki);

app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server running at http://${hostname}:${port}`);
});
