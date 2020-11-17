const express = require("express");
const mongoose = require("mongoose");
const routes = require("./controller/routes");

var app = express();
var PORT = process.env.PORT || 3e3;

app.use(express.static("public", {
  extensions: ["html"]
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

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