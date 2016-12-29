angular.module("d2d")
  .controller("businessProfileCtrl", function($scope, businessUser, businessLoginService, $state){

    $scope.businessUser = businessUser;

    $scope.logout = function(){
      businessLoginService.logout().then(function(resp){
        $state.go("login");
      });
    };

$scope.test = "test";

$scope.clear = function (message){
  message.value = "";
};

//TEXT//

    $scope.sendText = function(message, number){

      var newMessage = {
        to: ["+18017104549", "+14356507661", "+1" + number.toString()],
        from: "+18015099562",
        message: message
      };

      businessLoginService.sendText(newMessage).then(function(resp){
        $scope.message = resp;
      });

    };

    $(".datepicker").datepicker({
      weekStart:1
    });


//DEALS//
    $scope.postNewDeal = function(newDeal){
      businessLoginService.postNewDeal(newDeal).then(function(resp){
        $scope.showDeals();
        $scope.newDeal = resp;
      });
    };

    $scope.showDeals = function(){
      businessLoginService.getDeals().then(function(resp){
        $scope.currentDeals = resp;
      });
    };

    $scope.showDeals();



  });
