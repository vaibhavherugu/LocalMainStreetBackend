//© COPYRIGHT LocalMainStreet 2020

const express = require("express");

const mongoose = require("mongoose");

const app = express();

const appjs = require("./app");
require("dotenv/config")

app.use("/app", appjs);

app.get("/", (req, res) => {
  res.send("Powered by express © LocalMainStreet 2020");
});

mongoose.connect(
  process.env.DB_CONNECTION,

  { useNewUrlParser: true, useUnifiedTopology: true },

  () =>
    console.log(
      "Connection to the MongoDB server-side database was successful."
    )
);


app.listen(process.env.PORT || 3006, '0.0.0.0', () => {
  console.log("mainbackend up and running");
}); 
