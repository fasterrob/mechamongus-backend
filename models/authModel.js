const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phonenumber: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const authenticate = mongoose.model("auth", authSchema);

module.exports = authenticate;
