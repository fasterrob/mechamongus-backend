const express = require("express");
const router = express.Router();
const {
  getCarts,
  newCart,
  getCartById,
  updateCartById,
  removeCart,
  removeItemInCart,
} = require("./cartController");

router.route("/").get(getCarts).post(newCart);
router.route("/byid").get(getCartById);
router.route("/updatebyid").patch(updateCartById);
router.route("/removeItemInCart").patch(removeItemInCart);
router.route("/removecart").delete(removeCart);

module.exports = router;
