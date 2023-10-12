const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const message = mongoose.model("message", messageSchema);

module.exports = message;
