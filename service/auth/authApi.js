const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("./authController");

router.route("/").post(getUser);
router.route("/register").post(createUser);

module.exports = router;
