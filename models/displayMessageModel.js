const mongoose = require("mongoose");

const displayMessageSchema = new mongoose.Schema(
  {
    display: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

const displayMessage = mongoose.model("display", displayMessageSchema);

module.exports = displayMessage;
