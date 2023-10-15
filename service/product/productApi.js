const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  removeProductById,
  updateProductById,
} = require("./productController");

router.route("/").get(getProducts);
router.route("/createproduct").post(createProduct);
router.route("/getproductbyid").get(getProductById);
router.route("/updateproductbyid").patch(updateProductById);
router.route("/removeproductbyid").delete(removeProductById);

module.exports = router;
