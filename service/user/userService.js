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
// const getUser = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const user = await User.find();
//       console.log("Display >>> ", user);
//       resolve(user);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

module.exports = {
  getUser,
};
