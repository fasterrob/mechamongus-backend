const Customize = require("../../models/customizeModel");

const newCustomize = (customize) => {
  return new Promise(async (resolve, reject) => {
    const data = customize.body;
    const newCustomize = await new Customize({
      userId: data.userId,
      cpu: data.cpu,
      mainboard: data.mainboard,
      gpu: data.gpu,
      ram: data.ram,
      hdd: data.hdd,
      ssd: data.ssd,
      psu: data.psu,
      cased: data.cased,
    });
    newCustomize
      .save()
      .then(() => {
        resolve(newCustomize);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getCustomizes = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const customize = await Customize.find();
      resolve(customize);
    } catch (err) {
      reject(err);
    }
  });
};

const getCustomizeById = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      const customizeLatest = await Customize.find({
        userId: req.query.id,
      }).sort({ updatedAt: -1 });
      console.log(customizeLatest[0]);
      if (!customizeLatest) {
        throw new Error("Cart not found");
      }
      console.log("Customize >>>", customizeLatest[0]);
      resolve(customizeLatest[0]);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  newCustomize,
  getCustomizes,
  getCustomizeById,
};
