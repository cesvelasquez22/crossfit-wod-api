// const workoutsRoutes = require("./workouts/workoutsRoutes");
const express = require("express");
const router = express.Router();
const workoutsRoutes = require("./workouts.routes");

router.route("/").get((req, res) => {
  res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

router.use('/workouts', workoutsRoutes)

module.exports = router;
