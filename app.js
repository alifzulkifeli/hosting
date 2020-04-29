require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const khatam = require("./routes/khatam");

app.use("/khatam", khatam);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// *database
mongoose.connect("mongodb://localhost:27017/data", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
