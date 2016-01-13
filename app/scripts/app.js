angular.module("travelogue", []).controller('mainCtrl', function($scope){

$scope.locations = ["London","Bombay","Pune", "Mars"];
    
$scope.milestones = [
        {date:'31 July 1980', location:'London, England', event: 'Birthday', cast: 'Harry, Hermione'},
        {date:'22 October 1979', location:'Pune, India', event: 'Trip to India', cast: 'Hermione'},
        ];
    
});