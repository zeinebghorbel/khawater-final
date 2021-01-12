const mongoose = require("mongoose");

let Article = mongoose.model("articles", {
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

module.exports = Article;
