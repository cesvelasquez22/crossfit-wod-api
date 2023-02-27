const workoutsService = require("./workouts.service");

const getAllWorkouts = (req, res) => {
  const workouts = workoutsService.getAllWorkouts();
  res.status(200).send(workouts);
};

const getOneWorkout = (req, res) => {
  const workout = workoutsService.getOneWorkout();
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutsService.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const updateddWorkout = workoutsService.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  workoutsService.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
