const express = require("express");
const app = express();
require("./db/mongoose");
require("dotenv").config();
const port = process.env.DB_PORT || 3001;
app.use(express.json());

//router
app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("server is up on port !!!", port);
});
