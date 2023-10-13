const mongoose = require("mongoose");
const dotenv = require("dotenv");

const uri =
  "mongodb+srv://mechamongus:6jPfhJBIIpJkP8pu@cluster0.irgau8y.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
  mongoose.connect(uri);
  const conn = mongoose.connection;
  conn.on("error", console.error.bind(console, "connection error: "));
  conn.once("open", function () {
    console.log("Connected Mongo DB successfully");
  });
};

module.exports = connectDb;
