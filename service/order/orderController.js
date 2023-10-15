const service = require("./orderService");

const newOrder = async (req, res) => {
  try {
    const data = await service.newOrder(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};
const getOrders = async (req, res) => {
  try {
    const data = await service.getOrders();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const removeOrder = async (req, res) => {
  try {
    const data = await service.removeOrder(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  newOrder,
  getOrders,
  removeOrder,
};
