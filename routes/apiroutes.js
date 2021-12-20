const router = require("express").Router();
const fs = require("fs");
const { json } = require("express");
let database = require("../db/db.json");

// GET route
router.get("/notes", function (req, res) {
  database = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  res.json(database);
});

// POST route
router.post("/notes", function (req, res) {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 1000) // store note with randomly generated id
  }

  // push a new note to db.json with fs
  database.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(database));
  res.json(database);
});

// export module

module.exports = router;
