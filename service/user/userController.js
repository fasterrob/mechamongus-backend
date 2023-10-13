const service = require("./userService");

const getUser = async (req, res) => {
  try {
    const data = await service.getUser();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getUserById = async (req, res) => {
  try {
    const data = await service.getUserById(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const removeUser = async (req, res) => {
  try {
    const data = await service.removeUser(req.body);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getUser,
  removeUser,
  getUserById,
};
