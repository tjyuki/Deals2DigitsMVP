var Deal = require("../models/DealsModel.js");

module.exports = {
  postNewDeal: function(req, res, next){
    console.log(req.body);
    var newDeal = new Deal(req.body);
    newDeal.save(function(err, resp){
      console.log(resp);
      if(err){
              res.status(500).json(err);
          }else{
              res.status(200).json(resp);
          }
    });
  },

getDeals: function(req, res, next){
  Deal.find().exec(function(err, resp){
    if(err){
      res.status(500).json(err);
    } else{
      res.send(resp);
    }
  });
},


  updateDeal: function(req, res, next){
    Deal.findbyIdandUpdate(req.params.id, req.body, function(err, resp){
      if(err){
        res.status(500).json(err);
    } else{
      res.send(resp);
      }
    });
  },

  deleteDeal: function(req, res, next){
    Deal.findbyIdandUpdate(req.params.id, req.body, function(err, resp){
      if(err){
        res.status(500).json(err);
    } else{
      res.send(resp);
      }
    });
  }





};
