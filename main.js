const express = require("express");
const app = express();
const router = require("./routes/all_routes");
const db = require("./util/db");
const bodyParser = require("body-parser");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi");
});
app.use(router);

db.sync().then(() => {
  app.listen(2000);
});
