var BusinessUser = require("../models/businessUserModel");

module.exports = {

  register: function(req, res, next){
    BusinessUser.create(req.body, function(err, result){
      if(err) return res.status(500).send(err);
      newBusinessUser = result.toObject();
      newBusinessUser.password = null;
      res.status(200).json(newBusinessUser);
    });
  },

  me: function(req, res, next) {
    if(!req.user) return res.status(401).send("current business user not defined");
    req.user.password = null;
    return res.status(200).json(req.user);
  },

  update: function(req, res, next) {
    BusinessUser.findByIdAndUpdate(req.params._id, req.body, function(err, result){
      if(err) next(err);
      res.status(200).send("business user updated");
    });
  }

};
