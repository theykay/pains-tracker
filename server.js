const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 8080;
// const db = require("./models");

app.use(express.static("public", {
  extensions: ["html"]
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/api/workouts", apiRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Workout",
  {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
  });
})
.catch((err) => {
  console.log(err)
});
