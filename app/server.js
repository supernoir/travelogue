var connect = require('connect');
var http = require('http');
var express  = require('express');
var bodyParser = require('body-parser');
var cors = require("cors");
var morgan = require('morgan');
var mongoose = require('mongoose');   

var app = express();      
                         

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


 // Mongoose Models

var Characters = mongoose.model('Characters', {
        text : String
    });

var Journeys = mongoose.model('Journeys', {
        name : String,
        cast : Array,
        desc : String
    });

var Milestones = mongoose.model('Milestones', {
        journey : String,
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

app.get('/milestones', function(request, response) {
        Milestones.find(function(error, milestones) {
            if (error)
                response.send(error)
            response.json(milestones);
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

app.post("/milestones", function(request, response, next) {
    var milestone = new Milestones();
        milestone.journey = request.body.journey;
        milestone.name = request.body.name;
        milestone.date = request.body.date;
        milestone.location = request.body.location;
        milestone.cast = request.body.cast;
        

    milestone.save(function(error, milestone) {
        if (error) { return next(error) }
        response.json({ message: 'Milestone added!', data: milestone });
       
    });
});

app.post("/delete_journey", function(request, response, next) {

    Journeys.findByIdAndRemove(request.body._id, function(error, journey) {
    if (error)
        response.send(error)
    response.json({ message: 'Journey deleted!', data: journey });
  });
});

app.post("/view_journey", function(request, response, next) {
    Journeys.findById(request.body._id, function(error, selection) {
    if (error)
        response.send(error)
    response.json(selection);
  });
});

app.get('*', function(request, response) {
        response.sendFile('./index.html');
    });
    

// LISTENING
var port = 8080;
app.listen(port);
console.log("App listening on port " + port);

