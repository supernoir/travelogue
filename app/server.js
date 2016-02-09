var connect = require('connect');
var http = require('http');
var express  = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var morgan = require('morgan');
var mongoose = require('mongoose');   

var app      = express();      
                         

// configuration
mongoose.connect('mongodb://localhost/library');
app.use(express.static(__dirname + '/app'));         

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");  
  next();      
});



 var Characters = mongoose.model('Characters', {
        text : String
    });

 var Journeys = mongoose.model('Journeys', {
        name : String,
        cast : Array,
        desc : String
    });

    var Milestones = mongoose.model('Journey', {
        name : String,
        date : Date,
        location : String,
        cast : []
    });
   

app.get('/characters', function(request, response) {
        Characters.find(function(error, characters) {
            if (error)
                response.send(error)
            response.json(characters);
        });
    });

app.get('/journeys', function(request, response) {
        Journeys.find(function(error, journeys) {
            if (error)
                response.send(error)
            response.json(journeys);
        });
    });



app.post("/journeys", function(request, response, next) {
    var journey = new Journeys();
        journey.name = request.body.name;
        journey.cast = request.body.cast;
        journey.desc = request.body.description;

    journey.save(function(error, journey) {
        if (error) { return next(error) }
        response.json({ message: 'Journey added!', data: journey });
       
    });
});

//var journeyRoute = router.route('/journey_id');

app.delete("/journeys", function(request, response) {
    Journeys.findByIdAndRemove(request.params.journey_id, function(error, journeys) {
    if (error)
        response.send(error)
    response.json(journeys);
  });
});


app.get('*', function(request, response) {
        response.sendfile('./index.html');
    });
    

// LISTENING
var port = 8080;
app.listen(port);
console.log("App listening on port " + port);

