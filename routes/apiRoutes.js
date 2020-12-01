const express = require("express");
const path = require("path");
const { inflateRawSync } = require("zlib");
// const { db } = require("../models/Workout");
const router = express.Router();
const Workout = require("../models/Workout");


// async getLastWorkout() {
//   let res;
//   try {
//     res = await fetch("/api/workouts");
//   } catch (err) {
//     console.log(err)
//   }
//   const json = await res.json();
//   return json[json.length - 1];
// },
router.get("/api/workouts", (req, res) => {
  // router.get("/", async (req, res) => {
  Workout.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err))

  // try {
  //   const data = await Workout.find({});
  //   // return res.json(data);
  //   res.json(data);
  // } catch (err) {
  //   // return res.status(400).json(err);
  //   res.status(400).json(err);
  // }
});

// async addExercise(data) {
//   const id = location.search.split("=")[1];
//   const res = await fetch("/api/workouts/" + id, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });
//   const json = await res.json();
//   return json;
// },
router.put("/api/workouts/:id", (req, res) => {
// router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  Workout.update({ _id: req.params.id },
    { $inc: { totalDuration: req.body.duration },$push: { exercises: req.body } },
    { new: true })
    .then(workout => {
      res.json(workout)
    })
  // Workout.findById(req.params.id, (err, data) => {
  //   if (err) {
  //     res.json(err)
  //   } else {
  //     saved = data.exercises;
  //     let allExercises = [...saved, req.body];
  //     res.json(allExercises);
  //   }
  // })


  // try {
  //   let saved = [];
  //   const previous = await Workout.findById(req.params.id);
  //   saved = previous.exercises;
  //   let allExercises = [...saved, req.body];
  //   // return res.json(allExercises);
  //   res.json(allExercises);
  // } catch (err) {
  //   // return res.status(400).json(err);
  //   res.status(400).json(err);
  // }
});

// async createWorkout(data = {}) {
//   const res = await fetch("/api/workouts", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json" }
//   });
//   const json = await res.json();
//   return json;
// },
router.post("/api/workouts", (req, res) => {
// router.post("/", async (req, res) => {
  Workout.create(req.body)
    .then(data => console.log(data))
    .catch(err => res.json(err))
  
  // try {
  //   const data = await Workout.create(req.body);
  //   // return res.json(data);
  //   res.json(data);
  // } catch (err) {
  //   // return res.status(400).json(err);
  //   res.status(400).json(err);
  // };
});

// async getWorkoutsInRange() {
//   const res = await fetch(`/api/workouts/range`);
//   const json = await res.json();
//   return json;
// },
router.get("/api/workouts/range", (req, res) => {
// router.get("/range", async (req, res) => {
  Workout.find({}, (err, data) => {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })

  // try {
  //   const data = await Workout.find({});
  //   // return res.json(data);
  //   res.json(data);
  // } catch (err) {
  //   // return res.status(400).json(err);
  //   res.status(400).json(err);
  // }
});

module.exports = router;