const express = require("express");
const v1Routes = require("./v1");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Crossfit WOD api running!</h2>");
});

app.use("/api/v1", v1Routes);

module.exports = app;
