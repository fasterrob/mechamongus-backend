const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    typeCart: {
      type: String,
      require: true,
    },
    productList: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
