const Auth = require("../../models/authModel");

const createNewUser = (user) => {
  return new Promise(async (resolve, reject) => {
    const create_User = new Auth({
      fullname: user.fullname,
      username: user.username,
      password: user.password,
      email: user.email,
      phonenumber: user.phonenumber,
      gender: user.gender,
    });
    create_User
      .save()
      .then(() => {
        resolve(create_User);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getUser = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      var data = { email: req.email, password: req.password };
      const user = await Auth.findOne(data);
      if (user === "null") {
        resolve(404);
      }
      resolve(user);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
  getUser,
};
