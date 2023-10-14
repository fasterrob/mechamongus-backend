const Product = require("../../models/productModel");

const createProduct = (pro) => {
  return new Promise(async (resolve, reject) => {
    const create_Product = new Product({
      product_id: pro.product_id,
      product_name: pro.product_name,
      product_desc: pro.product_desc,
      price: pro.price,
      count: pro.count,
      category_id: pro.category_id,
      uploaded_date: pro.uploaded_date,
    });
    create_Product
      .save()
      .then(() => {
        resolve(create_Product);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const products = await Product.find();
      resolve(products);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getProductById = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({ _id: req.query.id });
      if (product === "null") {
        resolve(404);
      }
      console.log("Product >>>", product);
      resolve(product);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const removeProductById = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.deleteOne({ id: req.id });
      console.log("Product delete >>>", product);
      resolve(product);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  removeProductById,
};
