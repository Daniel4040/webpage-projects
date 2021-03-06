const express = require("express");
const hbs = require("hbs");

var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

// Generic JSON data to show something on the screen
app.get("/", (req, res) => {
  res.send({
    name: "Daniel",
    likes: ["Skiing", "Hiking"]
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
