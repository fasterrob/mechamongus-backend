const express = require("express");
const router = express.Router();
const { hookHandle } = require("./lineMessageController");

router.route("/").post(hookHandle);

module.exports = router;
