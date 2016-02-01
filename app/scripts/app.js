'use strict';

    var travelogueApp = angular.module('travelogueApp',['ngRoute']);

    // configure our routes
    travelogueApp.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainCtrl'
            })

            .when('/list_journeys', {
                templateUrl : 'views/list_journeys.html',
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
//            $locationProvider.html5Mode(true);
            
    });

travelogueApp.controller('mainCtrl', function($scope, $http){


$scope.createMilestone = function(date,location,event,cast) {
    var newMilestone = new function() {
        this.date = $scope.newdate;
        this.location = $scope.newlocation;
        this.event = $scope.newevent;
        this.cast = $scope.newcast;
        }
        $scope.milestones = $scope.milestones.concat(newMilestone);
    }

/*$scope.createJourney = function(name,cast,uuid) {
    var newJourney = new function() {
        this.name = $scope.journeynewname;
        this.cast = $scope.journeynewcast;
        this.uuid = $scope.generateUUID();
        }
        $scope.journeys = $scope.journeys.concat(newJourney);
}*/


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


$scope.journeyname = "Hallo Welt";

$scope.postJourney = [
    {name: $scope.journeyname, cast: ["Mickey","Minnie"], character: "David Bowie"}
    ];

    //{name:'The Roadtrip', uuid:'0001',cast:['Finn','Jake']},
    //{name:'The Fellowship', uuid:'0002',cast:['Frodo','Gandalf']}

    $scope.submitJourney = function() {
        $http.post('http://localhost:8080/journeys',$scope.postJourney).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    }


    
$scope.milestones = [
        {date:'31 July 1980', location:'London, England', event: 'Birthday', cast: 'Harry, Hermione'},
        {date:'22 October 1979', location:'Pune, India', event: 'Trip to India', cast: 'Hermione'}
        ];




// Generate UUID
$scope.generateUUID = function(){
    var uuid = Math.random(1000);
    return uuid;
}
    
});

