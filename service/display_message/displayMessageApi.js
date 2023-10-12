const express = require("express");
const router = express.Router();
const {
  createDisplay,
  getDisplayMessage,
} = require("./displayMessageController");

router.route("/").get(getDisplayMessage).post(createDisplay);

module.exports = router;
