const Order = require("../../models/orderModel");

const newOrder = (order) => {
  return new Promise(async (resolve, reject) => {
    const data = order.body;
    console.log(data);
    const newOrder = await new Order({
      userId: data.userId,
      name: data.name,
      orderstatus: data.orderstatus,
      price: data.price,
      address: data.address,
    });
    newOrder
      .save()
      .then(() => {
        resolve(newOrder);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getOrders = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.find();
      resolve(order);
    } catch (err) {
      reject(err);
    }
  });
};

const removeOrder = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(req.query.id);
      const order = await Order.deleteOne({
        _id: req.query.id,
      });
      console.log("Order >>>", order);
      resolve(order);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  newOrder,
  getOrders,
  removeOrder,
};
