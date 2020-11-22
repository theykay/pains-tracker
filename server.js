const express = require("express");
const mongoose = require("mongoose");
const routes = require("./controller/routes");

var app = express();
var PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.static("public", {
  extensions: ["html"]
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pain-tracker",
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
