const line = require("@line/bot-sdk");
const dotenv = require("dotenv");
const Message = require("../../models/messageModel");
const Display = require("../../models/displayMessageModel");

const env = dotenv.config().parsed;

const handleEvent = async (event) => {
  return new Promise(async (resolve, reject) => {
    try {
      const lineConfig = {
        channelAccessToken: env.ACCESS_TOKEN,
        channelSecret: env.SECRET_TOKEN,
      };
      const client = new line.Client(lineConfig);
      if (await display()) {
        if (event.type === "follow") {
          const content = await lineFlexContent();
          return await client.replyMessage(event.replyToken, content);
        }
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const display = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const display = await Display.find().limit(1).sort({ $natural: -1 });
      resolve(display[0].display);
    } catch (error) {
      reject(error);
    }
  });
};

const lineFlexContent = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { content } = await Message.findOne()
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
