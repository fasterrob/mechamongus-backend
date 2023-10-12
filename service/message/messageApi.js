const express = require("express");
const router = express.Router();
const { createMessage, getMessage } = require("./messageController");

router.route("/").get(getMessage).post(createMessage);

module.exports = router;
