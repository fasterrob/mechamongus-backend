const mongoose = require("mongoose");

const customizeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    cpu: {
      type: String,
      require: true,
    },
    mainboard: {
      type: String,
      require: true,
    },
    gpu: {
      type: String,
      require: true,
    },
    ram: {
      type: String,
      require: true,
    },
    hdd: {
      type: String,
      require: true,
    },
    ssd: {
      type: String,
      require: true,
    },
    psu: {
      type: String,
      require: true,
    },
    cased: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const customize = mongoose.model("customize", customizeSchema);

module.exports = customize;
