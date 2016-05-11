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
    });



});
