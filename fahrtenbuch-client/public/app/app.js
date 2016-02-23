var app = angular.module("fahrtenbuch", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/fahrten", {
    templateUrl: "/app/templates/fahrten/list.html" ,
    controller: "FahrtenListController"
  })
  .otherwise({redirectTo: 'fahrten'});
});
