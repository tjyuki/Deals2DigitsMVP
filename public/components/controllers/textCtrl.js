angular.module("d2d")
  .controller("textCtrl", function($scope, textService){

    $scope.sendText = function(message){

      var newMessage = {
        to: ["+18017104549", "+14356507661"],
        from: "+18015099562",
        message: message
      };

      textService.sendText(newMessage).then(function(resp){
        $scope.message = resp;
      });
    };
});
