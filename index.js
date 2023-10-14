const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const env = dotenv.config().parsed;

const mongoose = require("./util/mongodb");

app.use(express.json());
app.use(cors());
mongoose();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

// front-end
app.use("/login", require("./service/auth/authApi"));


// backoffice
app.use("/admin/user", require("./service/user/userApi"));
app.use("/admin/product", require("./service/product/productApi"));

app.listen(3000, () => {
  console.log(`listening on ${3000}`);
});
