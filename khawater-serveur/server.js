const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("./config/db");

const articleController = require("./controllers/articleController");
const userController = require("./controllers/userController");

const app = express(); //objet express

app.use(cors());

app.use(bodyParser.json());

app.use("/users", userController);
app.use("/articles", articleController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome !");
});

app.listen(3100, () => {
  console.log("server started");
});
