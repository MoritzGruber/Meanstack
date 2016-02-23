var app = angular.module("fahrtenbuch", []);

app.controller("Homecontroller", function($scope, $http){
  $scope.message = "Hallo Angular";

  $http.get("http://localhost:3000/fahrten").success(function(response){
      $scope.fahrten = response;
  }).error(function(err) {
      $scope.error = err;
  });
});

//fuctionen um die Geschäftlichen bzw Privaten gefahren
//Kilometer zu berechnen und das feld zu füllen in er Tabelle
$scope.privateKm = function(fahrt){
  if(fahrt.privat){
    return fahrt.kmEnde - fahrt.kmStart;
  }
  return 0;
}

$scope.geschaeftlicheKm = function(fahrt){
  if(fahrt.privat){
  return 0;
  }
  return fahrt.kmEnde - fahrt.kmStart;
}
