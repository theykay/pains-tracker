const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema ({
  type: {
    type: String,
    default: "resistance"
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  }
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;