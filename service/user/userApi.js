const express = require("express");
const router = express.Router();
const { getUser, removeUser, getUserById} = require("./userController");

router.route("/").get(getUser);
router.route("/byid").get(getUserById);

router.route("/removeuser").post(removeUser);


module.exports = router;
