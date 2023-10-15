const Cart = require("../../models/cartModel");

const newCart = (cart) => {
  return new Promise(async (resolve, reject) => {
    const data = cart.body;
    const newCart = await new Cart({
      userId: data.userId,
      typeCart: data.typeCart,
      productList: data.productList,
    });
    newCart
      .save()
      .then(() => {
        resolve(newCart);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getCarts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const cart = await Cart.find();
      resolve(cart);
    } catch (error) {
      reject(error);
    }
  });
};

const getCartById = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cart = await Cart.findOne({ userId: req.query.id });
      if (cart === "null") {
        resolve(404);
      }
      console.log("Display >>> ", cart);
      resolve(cart);
    } catch (error) {
      reject(error);
    }
  });
};

const updateCartById = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const oldCart = await Cart.findOne({ userId: req.query.id });
      if (!oldCart) {
        throw new Error("Cart not found");
      }
      const oldProductList = oldCart.productList;
      console.log("api", req.body);
      oldProductList.unshift(req.body.productList);
      const newProductList = oldProductList;
      console.log("newProductList >>>", newProductList);

      const updatedCart = await Cart.updateOne(
        { userId: req.query.id }, // Assuming userId is the correct field for identifying the cart
        {
          productList: newProductList,
        }
      );
      console.log("Update Cart >>> ", updatedCart);
      resolve(updatedCart);
    } catch (error) {
      reject(error);
    }
  });
};

const removeItemInCart = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const id = req.query.id;
      const index = req.query.index;
      const oldCart = await Cart.findOne({ userId: id });
      if (!oldCart) {
        throw new Error("Cart not found");
      }
      const oldProductList = oldCart.productList;
      oldProductList.splice(index, 1);
      const newProductList = oldProductList;
      console.log("newProductList >>>", newProductList);

      const updatedCart = await Cart.updateOne(
        { userId: req.query.id }, // Assuming userId is the correct field for identifying the cart
        {
          productList: newProductList,
        }
      );
      console.log("Update Cart >>> ", updatedCart);
      resolve(updatedCart);
    } catch (error) {
      reject(error);
    }
  });
};

const removeCart = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cartId = id.id;
      console.log(cartId);
      const cart = await Cart.deleteOne({ id: cartId });
      console.log("Delete cart >>> ", cart);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getCarts,
  newCart,
  getCartById,
  updateCartById,
  removeItemInCart,
  removeCart,
};
