var mongoose = require("mongoose");

var Schema = new mongoose.Schema({
  userName: {type: String},
  email: {type: String},
  number: {type: String}
});

module.exports = mongoose.model("User", Schema);
