//EXTERNAL MODULES//
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require("mongoose");

//CONFIG//
var config = require("./config.js");

//CONTROLLERS//
var textCtrl = require("./backend/controllers/textCtrl.js");
var businessUserCtrl = require("./backend/controllers/businessUserCtrl.js");
var dealsCtrl = require("./backend/controllers/dealsCtrl.js");
//SERVICES//
var passport = require("./backend/services/passport.js");

//POLICIES//
var isAuthed = function(req, res, next) {
  if(!req.isAuthenticated()) return res.status(401).send();
  return next();
};

//EXPRESS//
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

//GET, POST, PUT, DELETE//

  //TEXT//
app.post("/api/text", textCtrl.sendText);

  //LOCAL AUTH//
app.post("/business-users", businessUserCtrl.register);
app.get("/me", isAuthed, businessUserCtrl.me);
app.put("/business-users/:_id", isAuthed, businessUserCtrl.update);

app.post("/login", passport.authenticate("local", {
  successRedirect: "/me"
}));

app.get("/logout", function(req, res, next) {
  req.logout();
  return res.status(200).send("logged out");
});

//BUSINESS DEALS//
app.post("/deals", dealsCtrl.postNewDeal);
app.get("/deals", dealsCtrl.getDeals);
app.put("/deals/:id", dealsCtrl.updateDeal);
app.delete("/deals", dealsCtrl.deleteDeal);

//CONNECTIONS//
var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongoose.set("debug", true);
mongoose.connect(mongoURI);
mongoose.connection.once("open", function(){
  console.log("Connected to Mongo DB at", mongoURI);
  app.listen(port, function(){
    console.log("pika", port);
  });
});




// LISTEN//
