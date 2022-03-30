require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const route = require("./src/routes/quiz");
require('./database');
const app = express();

//Setting
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(route)

//routes
app.get("/", (req, res) => {
  res.json({ mensaje: "hola" });
});
app.get('/',route)

//Listening
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
