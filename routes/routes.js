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
router.get("/api/workouts", async (req, res) => {
  try {
    const data = await Workout.find({});
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
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
router.put("/api/workouts/:id", async (req, res) => {
  try {
    let saved = [];
    const previous = await Workout.findById(req.params.id);
    saved = previous.exercises;
    let allExercises = [...saved, req.body];
    res.json(allExercises);
  } catch (err) {
    res.status(400).json(err);
  }
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
router.post("/api/workouts", async (req, res) => {
  try {
    const data = await Workout.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  };
});

// async getWorkoutsInRange() {
//   const res = await fetch(`/api/workouts/range`);
//   const json = await res.json();
//   return json;
// },
router.get("/api/workouts/range", async (req, res) => {
  try {
    const data = await Workout.find({});
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
})

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

module.exports = router;