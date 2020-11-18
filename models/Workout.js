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
      type: Schema.Types.ObjectId,
      ref: "Resistance"
    },
    {
      type: Schema.Types.ObjectId,
      ref: "Cardio"
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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;