const express = require("express");
const router = express.Router();
const { getUser, removeUser, getUserById, updateUserById} = require("./userController");

router.route("/").get(getUser);
router.route("/byid").get(getUserById);
router.route("/updatebyid").patch(updateUserById);
router.route("/removeuser").post(removeUser);


module.exports = router;
