const express = require("express");
const mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3e3;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pain-tracker",
  {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});