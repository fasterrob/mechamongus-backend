const service = require("./productService");

// createProduct;
// getProducts;
// getProductById;
// removeProductById;

const createProduct = async (req, res) => {
  const newProduct = req.body;
  try {
    const data = await service.createProduct(newProduct);
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getProducts = async (req, res) => {
  try {
    const getProducts = await service.getProducts();
    res.status(200).send(getProducts);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getProductById = async (req, res) => {
  try {
    console.log(req)
    const getProducts = await service.getProductById(req);
    res.status(200).send(getProducts);
  } catch (e) {
    res.status(500).send(e);
  }
};

const removeProductById = async (req, res) => {
  try {
    const removeProductById = await service.removeProductById(req);
    res.status(200).send(removeProductById);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  removeProductById,
};
