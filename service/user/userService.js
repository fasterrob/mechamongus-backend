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
      console.log(req.query.id);
      const user = await User.findOne({ _id: req.query.id });
      if (user === "null") {
        resolve(404);
      }
      console.log("Display >>> ", user);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const updateUserById = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(req.query.id);
      console.log(req.body);
      const user = await User.updateOne(
        { _id: req.query.id },
        {
          email: req.body.email,
          fullname: req.body.fullname,
          username: req.body.username,
          phonenumber: req.body.phonenumber,
          gender: req.body.gender,
          address: req.body.address,
        }
      );
      console.log("Update User >>> ", user);
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
  getUserById,
  updateUserById,
  removeUser,
};
