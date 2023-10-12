const service = require("./messageService");

const createMessage = async (req, res) => {
  const { content } = req.body;
  try {
    const data = await service.createMessage(content);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getMessage = async (req, res) => {
  try {
    const dataMessage = await service.getMessage();
    res.status(200).send(dataMessage);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createMessage,
  getMessage,
};
