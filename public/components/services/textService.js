angular.module("d2d")
  .service("textService", function($http){

    this.sendText = function(message){
      return $http({
        method: "POST",
        url: "/api/text",
        data: message
      }).then(function(resp){
        return resp.data;
      });
    };

  });
