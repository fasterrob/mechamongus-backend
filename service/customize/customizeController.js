const service = require("./customizeService");

const newCustomize = async (req, res) => {
  try {
    const data = await service.newCustomize(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};
const getCustomizes = async (req, res) => {
  try {
    const data = await service.getCustomizes();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getCustomizeById = async (req, res) => {
  try {
    const data = await service.getCustomizeById(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};



module.exports = {
  newCustomize,
  getCustomizeById,
  getCustomizes,
};
