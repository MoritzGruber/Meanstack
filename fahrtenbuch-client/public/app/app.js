var app = angular.module("fahrtenbuch", []);

app.controller("Homecontroller", function($scope, $http){
  $scope.message = "Hallo Angular";

  $http.get("http://localhost:3000/fahrten").success(function(response){
      $scope.fahrten = response;
  }).error(function(err) {
      $scope.error = err;
  });
});
