const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDb = () => {
  // mongoose.connect(uri);
  mongoose.connect("mongodb://127.0.0.1:27017/mechamongus");
  const conn = mongoose.connection;
  conn.on("error", console.error.bind(console, "connection error: "));
  conn.once("open", function () {
    console.log("Connected Mongo DB successfully");
  });
};

module.exports = connectDb;
