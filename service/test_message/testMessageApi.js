const express = require("express");
const router = express.Router();
const { createTestMessage } = require("./testMessageController");

router.route("/").post(createTestMessage);

module.exports = router;
