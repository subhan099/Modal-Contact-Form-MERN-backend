const express = require("express");
const { user } = require("../Controller");
const router = express.Router();

// Register route
router.post("/request", user.quoteRequest);

module.exports = router;
