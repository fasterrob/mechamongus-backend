const service = require("./userService");

const getUser = async (req, res) => {
    try {
      const data = await service.getUser();
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send(e);
    }
  };

module.exports = {
  getUser,
};
