const express = require("express");
const square = require("./utils");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
  console.log(`The area of a square with a width of 4 is ${square.area(4)}`);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
