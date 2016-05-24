angular.module("d2d")
.controller("loginCtrl", function($scope, businessLoginService, $state){
  $scope.login = function(){
    businessLoginService.login($scope.credentials).then(function(resp){
      console.log(resp.data);
      $state.go("business-profile");
    });
  };

  $scope.register = function(){
    businessLoginService.register($scope.newBusinessUser).then(function(resp){
      console.log(resp.data);
    });
  };

});
