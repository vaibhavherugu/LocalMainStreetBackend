const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

var compression = require("compression");

const Post = require("./models/Post");

require("dotenv/config");

const cors = require("cors");

const helmet = require("helmet");

//Middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression()); //Compress all routes
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Import Routes
const postsRoute = require("./routes/posts");
const loginRoute = require("./routes/login");
const shopRoute = require("./routes/Shop");

app.use("/posts", postsRoute);
app.use("/login", loginRoute);
app.use("/shop", shopRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on Home");
});

//Connect to the Database:

// mongoose.connect(
//   process.env.DB_CONNECTION,

//   { useNewUrlParser: true, useUnifiedTopology: true },

//   () =>
//     console.log(
//       "Connection to the MongoDB server-side database was successful."
//     )
// );



// app.listen(3000);

module.exports = app;
