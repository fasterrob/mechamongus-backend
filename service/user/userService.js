const User = require("../../models/authModel");

const getUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.find();
      console.log("Display >>> ", user);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const getUserById = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ _id: req.query.id });
      console.log("Display >>> ", user);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const removeUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userid = id.id;
      console.log(userid);
      const user = await User.deleteOne({ _id: userid });
      console.log("Delete user >>> ", user);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getUser,
  removeUser,
  getUserById,
};
