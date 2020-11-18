const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema ({
  type: {
    type: String,
    default: "cardio"
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  }
},
{
  toOBject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;