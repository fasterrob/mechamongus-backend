const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    orderstatus: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("order", orderSchema);

module.exports = order;
