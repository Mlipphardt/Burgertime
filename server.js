const express = require("express");
const orm = require("./config/orm");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("app/public"));

orm.insertOne("trapezoidal burger");

orm.selectAll();

app.listen(PORT, function() {
    console.log("Sever live and listening on PORT " + PORT + "!");
  });
  