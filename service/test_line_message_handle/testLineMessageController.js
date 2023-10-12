const { handleEvent } = require("./testLineMessageService");

const hookHandle = async (req, res) => {
  try {
    const events = req.body.events;
    console.log("test event=>>>", events);
    if (events.length > 0) {
      await events.map((item) => handleEvent(item));
    }
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  hookHandle,
};
