const service = require("./testMessageService");

const createTestMessage = async (req, res) => {
  const { content } = req.body;
  try {
    const data = await service.createTestMessage(content);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createTestMessage,
};
