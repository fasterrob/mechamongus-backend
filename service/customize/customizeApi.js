const express = require("express");
const router = express.Router();
const {
  newCustomize,
  getCustomizeById,
  getCustomizes,
} = require("./customizeController");

router.route("/").post(newCustomize).get(getCustomizes);
router.route("/byid").get(getCustomizeById);

module.exports = router;
