// Creating an API for the App to receive data from a source
// Connects to the data source (JSON > MongoDB)
// Make a new module

travelogueApp.controller('characterController', function ($scope, $http){
    $http.jsonp('http://www.bento-design.com/dev/travelogue/characters.json');
    console.log('works');
});
