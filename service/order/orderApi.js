const express = require("express");
const router = express.Router();
const { newOrder, getOrders, removeOrder } = require("./orderController");

router.route("/").post(newOrder).get(getOrders).delete(removeOrder);

module.exports = router;
