const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Node app is running at the server : 5000");
});

app.get("/", function (req, res) {
  res.send("Hello Rudal!");
});
