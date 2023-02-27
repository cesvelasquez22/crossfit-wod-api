const express = require("express");
const router = express.Router();
const workoutsController = require("../workouts/workouts.controller");

router.get("/", workoutsController.getAllWorkouts);

router.get("/:workoutId", workoutsController.getOneWorkout);

router.post("/", workoutsController.createNewWorkout);

router.patch("/:workoutId", workoutsController.updateOneWorkout);

router.delete("/:workoutId", workoutsController.deleteOneWorkout);

module.exports = router;