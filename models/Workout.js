const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      duration: {
        type: Number,
        trim: true
      },
      weight: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      },
      distance: {
        type: Number,
        trim: true
      }
    }
  ]
},
{
  toOBject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((time, exercise) => {
    return time + (exercise.duration || 0);
  })
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;