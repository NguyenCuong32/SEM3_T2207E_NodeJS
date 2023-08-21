const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const User = require("./model/model");
const mongoose = require("mongoose");
const data = mongoose.connection;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("", require("./routes/route"));
app.use("/api", require("./routes/api"));
require("dotenv").config();
mongoose.connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true });
data.on("error", (err) => console.log("Error"));
data.once("open", () => console.log("connection successfully"));
app.set("view engine", "ejs");
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
