angular.module("d2d", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider
    .otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "../view/templates/homeTmpl.html"
    })

    .state("about", {
      url: "/about",
      templateUrl: "../view/templates/aboutTmpl.html"
    })

    .state("register", {
      url: "/register",
      templateUrl: "../view/templates/registerTmpl.html",
      controller: "loginCtrl"
    })

    .state("login", {
      url: "/login",
      templateUrl: "../view/templates/loginTmpl.html",
      controller: "loginCtrl"
    })

    .state("business-profile", {
      url: "/business-profile",
      templateUrl: "../view/templates/businessProfileTmpl.html",
      controller: "businessProfileCtrl",
      resolve: {
        businessUser: function(businessLoginService, $state) {
          return businessLoginService.getBusinessUser().then(function(resp){
            return resp.data;
          }).catch(function(err){
            $state.go("login");
          });
        }
      }
    })

    .state("browse-deals", {
      url: "/deals",
      templateUrl: "../view/templates/browseDealsTmpl.html",
      controller: "dealsCtrl",
      resolve: {
        businessUser: function(businessLoginService, $state) {
          return businessLoginService.getBusinessUser().then(function(resp){
            return resp.data;
          }).catch(function(err){
            $state.go("login");
          });
        }
      }
    });


});
