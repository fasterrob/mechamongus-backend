const line = require("@line/bot-sdk");
const dotenv = require("dotenv");
const TestMessage = require("../../models/testMessageModel");

const env = dotenv.config().parsed;

const handleEvent = async (event) => {
  return new Promise(async (resolve, reject) => {
    try {
      // config test token
      const lineConfig = {
        channelAccessToken: env.TEST_ACCESS_TOKEN,
        channelSecret: env.TEST_SECRET_TOKEN,
      };
      const client = new line.Client(lineConfig);
      if (event.type === "follow") {
        const content = await lineFlexContent();
        return await client.replyMessage(event.replyToken, content);
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const lineFlexContent = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { content } = await TestMessage.findOne()
        .limit(1)
        .sort({ $natural: -1 });
      resolve(JSON.parse(content));
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleEvent,
};
