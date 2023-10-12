const mongoose = require("mongoose");

const testMessageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const testMessage = mongoose.model("test_message", testMessageSchema);

module.exports = testMessage;
