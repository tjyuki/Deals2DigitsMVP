angular.module("d2d")
  .controller("businessProfileCtrl", function($scope, businessUser, businessLoginService, $state){

    $scope.businessUser = businessUser;

    $scope.logout = function(){
      businessLoginService.logout().then(function(resp){
        $state.go("login");
      });
    };

$scope.test = "test";


//TEXT//
    $scope.sendText = function(message){

      var newMessage = {
        to: ["+18017104549", "+18012599859", "18015051100"],
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
