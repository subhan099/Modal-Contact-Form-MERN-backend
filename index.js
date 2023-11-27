const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const requestroute = require("./Routes/request.route");

// connect database
require("./DataBase/db.connect");
const PORT = process.env.PORT || 3001;
// middleware
// Set CORS headers
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// api Routes
app.use("/quote", requestroute);
app.get("/", (req, res) => {
  console.log("req");
  return res.json({ success: "hello" });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server URL == http://localhost:${PORT}`);
});
