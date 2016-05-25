angular.module("d2d")
  .service("businessLoginService", function($http){

    this.login = function(businessUser){
      return $http({
        method: "POST",
        url: "/login",
        data: businessUser
      }).then(function(resp){
        return resp;
      });
    };

    this.getBusinessUser = function(){
      return $http({
        method: "GET",
        url: "/me"
      }).then(function(resp){
        return resp;
      });
    };

    this.register = function(newBusinessUser){
      return $http({
        method: "POST",
        url: "/business-users",
        data: newBusinessUser
      }).then(function(resp){
        return resp;
      });
    };

    this.logout = function(){
      return $http({
        method: "GET",
        url: "/logout",
      }).then(function(resp){
        return resp;
      });
    };

//TEXT SERVICE//
    this.sendText = function(message){
      return $http({
        method: "POST",
        url: "/api/text",
        data: message
      }).then(function(resp){
        return resp.data;
      });
    };

//DEALS SERVICE//
this.postNewDeal = function(newDeal){
  return $http({
    method: "POST",
    url: "/deals",
    data: newDeal
  }).then(function(resp){
    return resp.data;
  });
};

this.getDeals = function(){
  return $http({
    method: "GET",
    url: "/deals"
  }).then(function(resp){
    return resp.data;
  });
};

  });
