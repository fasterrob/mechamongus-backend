const TestMessage = require("../../models/testMessageModel");

const createTestMessage = (content) => {
  return new Promise(async (resolve, reject) => {
    const create_message = new TestMessage({
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

module.exports = {
  createTestMessage,
};
