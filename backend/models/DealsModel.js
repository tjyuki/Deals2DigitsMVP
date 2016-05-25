var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dealSchema = new Schema({
title: {type: String, index: true},
location: {type: String},
description: {type: String},
startDay: {type: String},
endDay: {type: String}
});

module.exports = mongoose.model("Deal", dealSchema);
