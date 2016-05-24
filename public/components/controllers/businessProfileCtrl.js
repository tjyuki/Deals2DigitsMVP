angular.module("d2d")
  .controller("businessProfileCtrl", function($scope, businessUser, businessLoginService, $state){
    $scope.businessUser = businessUser;

    $scope.logout = function(){
      businessLoginService.logout().then(function(resp){
        $state.go("login");
      });
    };

  });
