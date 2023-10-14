const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      require: true,
    },
    product_name: {
      type: String,
      require: true,
    },
    product_desc: {
      type: String,
    },
    price: {
      type: String,
      require: true,
    },
    count: {
      type: Number,
      require: true,
    },
    category_id: {
      type: String,
      require: true,
    },
    uploaded_date: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("product", productSchema);

module.exports = product;
