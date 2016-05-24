var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var BusinessUser = require("../models/businessUserModel.js");

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
}, function(email, password, done){
  BusinessUser.findOne({ email: email })
  .exec(function(err, bizuser){
    if(err) done(err);
    if(!bizuser) return done(null, false);
    if(bizuser.verifyPassword(password)) return done(null, bizuser);
    return done(null, false);
  });
}));

passport.serializeUser(function(bizuser, done){
  done(null, bizuser._id);
});

passport.deserializeUser(function(_id, done){
  BusinessUser.findById(_id, function(err, bizuser){
    done(err, bizuser);
  });
});

module.exports = passport;
