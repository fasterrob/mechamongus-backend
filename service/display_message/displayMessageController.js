const service = require("./displayMessageService");

const createDisplay = async (req, res) => {
  const { display } = req.body;
  try {
    const data = await service.createDisplay(display);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getDisplayMessage = async (req, res) => {
  try {
    const data = await service.getDisplayMessage();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createDisplay,
  getDisplayMessage,
};
