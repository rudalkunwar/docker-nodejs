const express = require("express");

const app = express();

app.listen(8000);

app.get("/", function (req, res) {
  res.send("Hello Rudal!");
});
