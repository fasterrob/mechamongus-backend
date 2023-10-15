const service = require("./cartService");

const getCarts = async (req, res) => {
  try {
    const data = await service.getCarts();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const newCart = async (req, res) => {
  try {
    const data = await service.newCart(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getCartById = async (req, res) => {
  try {
    const data = await service.getCartById(req);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};


const updateCartById = async (req, res) => {
  try {
    const updatedCart = await service.updateCartById(req);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const removeItemInCart = async (req, res) => {
  try {
    const data = await service.removeItemInCart(req);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const removeCart = async (req, res) => {
  try {
    const data = await service.removeCart(req.body);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getCarts,
  newCart,
  getCartById,
  updateCartById,
  removeItemInCart,
  removeCart,
};
