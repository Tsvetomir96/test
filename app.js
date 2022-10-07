const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const expressRouter = require('./routes/express')

let app1 = express();
let app2 = express();

app1.use(cookieParser());
app1.use(express.json());
app1.use(express.static(path.join(__dirname, "express-template")));
app1.use('/', expressRouter);

app1.listen(3000, () => {
  console.log("Server3000");
});

app2.listen(3001, () => {
  console.log("Server3001");
});
