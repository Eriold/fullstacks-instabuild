const express = require("express");
const app = express();
const buildData = require("./build.js");

app.use(buildData);

module.exports = app;
