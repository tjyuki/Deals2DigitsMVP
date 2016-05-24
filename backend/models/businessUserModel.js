var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var BusinessUser = new mongoose.Schema({
  companyName: {type: String},
  email: {type: String, index: true, trim: true},
  password: {type: String}
});

BusinessUser.pre("save", function(next){
  var bizuser = this;
  if(!bizuser.isModified("password")) return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(bizuser.password, salt);
  bizuser.password = hash;
  return next(null, bizuser);
});

BusinessUser.methods.verifyPassword = function(reqBodyPassword){
  var bizuser = this;
  return bcrypt.compareSync(reqBodyPassword, bizuser.password);
};

module.exports = mongoose.model("BusinessUser", BusinessUser);
