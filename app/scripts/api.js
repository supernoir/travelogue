'use strict';

// Creating an API for the App to receive data from a source
// Connects to the data source (JSON > MongoDB)
// Make a new Controller

travelogueApp.controller('characterController', function ($scope, $http){
    

$http({
  method: 'GET',
  url: 'http://localhost:9000/json/characters.json'
}).then(function successCallback(response) {
 //   console.log(response);
       console.log(response.status);
    $scope.data = response.data;
  }, function errorCallback(response) {
      console.error(response.status);
  });
});
