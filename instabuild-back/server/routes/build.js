const express = require("express");
const app = express();
const buildJSON = require("../models/buildModels.json");

app.get("/", function(req, res, next) {
  res.json(buildJSON.map(e => e));
  next();
});

app.get("/:id", function(req, res) {
  let id = req.params.id;
  res.json(buildJSON.find(e => e.apartment_number == id));
});

module.exports = app;
