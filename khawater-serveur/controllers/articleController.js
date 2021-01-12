const express = require("express");
const { auth } = require("../middleware/auth");

const Article = require("./../models/article");

const app = express(); //objet express

app.delete("/:article_id", auth, (req, res) => {
  let id = req.params.article_id;

  Article.findOneAndDelete({ _id: id })
    .then((art) => {
      if (!art) {
        res.status(404).send({ msg: "Article not found" });
      } else {
        res.status(200).send({ msg: "article deleted" });
      }
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get("/", auth, (req, res) => {
  Article.find()
    .then((articles) => {
      res.status(200).send(articles);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.post("/", auth, (req, res) => {
  let data = req.body;

  let article = new Article({
    title: data.title,
    content: data.content,
    cover: data.cover,
  });

  article
    .save()
    .then((art) => {
      res.status(201).send({ msg: "article created" });
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

module.exports = app;
