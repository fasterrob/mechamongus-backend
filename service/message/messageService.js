const Message = require("../../models/messageModel");

const createMessage = (content) => {
  return new Promise(async (resolve, reject) => {
    const create_message = new Message({
      content,
    });
    create_message
      .save()
      .then(() => {
        resolve(create_message.content);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getMessage = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const content = await Message.findOne().limit(1).sort({ $natural: -1 });
      console.log(content)
      resolve(content);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getMessage,
  createMessage,
};
