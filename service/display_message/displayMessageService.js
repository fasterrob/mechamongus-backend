const Display = require("../../models/displayMessageModel");

const createDisplay = (display) => {
  return new Promise(async (resolve, reject) => {
    const create_display = new Display({
      display,
    });
    create_display
      .save()
      .then(() => {
        resolve(create_display.display);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getDisplayMessage = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const display = await Display.findOne().limit(1).sort({ $natural: -1 });
      console.log("Display >>> ", display);
      resolve(display);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getDisplayMessage,
  createDisplay,
};
