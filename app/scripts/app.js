angular.module("travelogue", []).controller('mainCtrl', function($scope){

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
        console.log(newMilestone);
        
    }

$scope.createJourney = function(journeyname) {
    console.log(journeyname);
}
    
});

