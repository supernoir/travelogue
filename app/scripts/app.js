    var travelogueApp = angular.module('travelogueApp', ['ngRoute']);

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

travelogueApp.controller('mainCtrl', function($scope){

$scope.characters = [
    {firstname:'John',lastname:'Lennon',uuid:'0001'},
    {firstname:'Paul',lastname:'McCartney',uuid:'0002'},
    {firstname:'George',lastname:'Harris',uuid:'0003'},
    {firstname:'Ringo',lastname:'Starr',uuid:'0004'}
];
    
$scope.milestones = [
        {date:'31 July 1980', location:'London, England', event: 'Birthday', cast: 'Harry, Hermione'},
        {date:'22 October 1979', location:'Pune, India', event: 'Trip to India', cast: 'Hermione'}
        ];

$scope.journeys = [
    {name:'The Roadtrip', uuid:'0001',cast:['Finn','Jake']},
    {name:'The Fellowship', uuid:'0002',cast:['Frodo','Gandalf']}
    ];

$scope.createMilestone = function(date,location,event,cast) {
    var newMilestone = new function() {
        this.date = $scope.newdate;
        this.location = $scope.newlocation;
        this.event = $scope.newevent;
        this.cast = $scope.newcast;
        }
        $scope.milestones = $scope.milestones.concat(newMilestone);
    }

$scope.createJourney = function(name,cast,uuid) {
    var newJourney = new function() {
        this.name = $scope.journeynewname;
        this.cast = $scope.journeynewcast;
        this.uuid = $scope.generateUUID();
        }
        $scope.journeys = $scope.journeys.concat(newJourney);
}

// Generate UUID
$scope.generateUUID = function(){
    var uuid = Math.random(1000);
    return uuid;
}
    
});

