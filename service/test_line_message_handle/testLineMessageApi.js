const express = require("express");
const router = express.Router();
const { hookHandle } = require("./testLineMessageController");

router.route("/").post(hookHandle);

module.exports = router;
