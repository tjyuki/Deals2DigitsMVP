var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require("mongoose");

var mainCtrl = require("./backend/controllers/mainCtrl.js");
var userCtrl = require("./backend/controllers/userCtrl.js");

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/deals2digits");

app.post("/api/text", userCtrl.sendText);
















// LISTEN//
var port = 3000;
app.listen(port, function(){
  console.log("pika", port);
});
