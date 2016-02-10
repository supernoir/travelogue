'use strict';

// -----------------------------------------------------------------------------  
//  APP SETUP
// -----------------------------------------------------------------------------

    var travelogueApp = angular.module('travelogueApp',['ngRoute']);

// -----------------------------------------------------------------------------  
//  ROUTING
// -----------------------------------------------------------------------------



    travelogueApp.config(function($locationProvider, $routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainCtrl'
            })

            .when('/list_journeys', {
                templateUrl : 'views/list_journeys.html',
                controller  : 'mainCtrl'
            })

            .when('/view_journey', {
                templateUrl : 'views/view_journey.html',
                controller  : 'mainCtrl'
            })

            .when('/new_journey', {
                templateUrl : 'views/new_journey.html',
                controller  : 'mainCtrl'
            })

            .when('/new_milestone', {
                templateUrl : 'views/new_milestone.html',
                controller  : 'mainCtrl'
            });
            $locationProvider.html5Mode(false);
            
    });

// -----------------------------------------------------------------------------  
//  MAIN CONTROLLER
// -----------------------------------------------------------------------------


travelogueApp.controller('mainCtrl', function($scope, $http, $location){


$scope.createMilestone = function(date,location,event,cast) {
    var newMilestone = new function() {
        this.date = $scope.newdate;
        this.location = $scope.newlocation;
        this.event = $scope.newevent;
        this.cast = $scope.newcast;
        }
        $scope.milestones = $scope.milestones.concat(newMilestone);
    }


// -----------------------------------------------------------------------------  
//  REST API
// -----------------------------------------------------------------------------


$http({
  method: 'GET',
  url: 'http://localhost:8080/characters'
}).then(function successCallback(response) {
       console.log(response.status, "GET CHARACTERS: " + response.statusText);
    $scope.characters = response.data;
  }, function errorCallback(response) {
      console.error(response.status, response.statusText);
  });


$http({
  method: 'GET',
  url: 'http://localhost:8080/journeys'
}).then(function successCallback(response) {
       console.log(response.status, "GET JOURNEYS: " + response.statusText);
    $scope.journeys = response.data;
  }, function errorCallback(response) {
      console.error(response.status, response.statusText);
  });


$scope.submitJourney = function() {
    var data = $scope.journey;  

    $http.post('http://localhost:8080/journeys', data).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    $location.path('/list_journeys');
    }

    $scope.deleteJourney = function(id) {
        var data = { _id : id };  
        $http.post('http://localhost:8080/delete_journey', data).
        success(function(data) {
            console.log(data)
            console.log("deleted successfully");
        }).error(function(data) {
            console.error("error in deleting");
        })
    }

    
$scope.milestones = [
        {date:'31 July 1980', location:'London, England', event: 'Birthday', cast: 'Harry, Hermione'},
        {date:'22 October 1979', location:'Pune, India', event: 'Trip to India', cast: 'Hermione'}
        ];

            

    
});

