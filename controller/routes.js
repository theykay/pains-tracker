const express = require("express");
const router = express.Router();
const db = require("../models");

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
router.post("/api/workouts/:id", (req, res) => {

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

});

// async getWorkoutsInRange() {
//   const res = await fetch(`/api/workouts/range`);
//   const json = await res.json();
//   return json;
// },
router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;