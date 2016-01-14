angular.module("travelogue", []).controller('mainCtrl', function($scope){

$scope.locations = ["John","Paul","George", "Ringo"];
    
$scope.milestones = [
        {date:'31 July 1980', location:'London, England', event: 'Birthday', cast: 'Harry, Hermione'},
        {date:'22 October 1979', location:'Pune, India', event: 'Trip to India', cast: 'Hermione'}
        ];

$scope.journeynames = []

$scope.createMilestone = function(date,location,event,cast) {
    
    var newMilestone = new function() {
        this.date = $scope.newdate;
        this.location = $scope.newlocation;
        this.event = $scope.newevent;
        this.cast = $scope.newcast;
        }


        $scope.milestones = $scope.milestones.concat(newMilestone);
        console.log(newMilestone);
        
    }

$scope.createJourney = function(journeyname) {
    console.log(journeyname);
}
    
});

