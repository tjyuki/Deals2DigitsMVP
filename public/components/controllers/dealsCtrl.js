angular.module("d2d")
  .controller("dealsCtrl", function($scope, businessUser, businessLoginService, $state){

    $scope.businessUser = businessUser;

    $scope.logout = function(){
      businessLoginService.logout().then(function(resp){
        $state.go("login");
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
        console.log(resp);
        $scope.currentDeals = resp;
      });
    };

    $scope.showDeals();



  });
