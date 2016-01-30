var connect = require('connect');
var http = require('http');

var express  = require('express');
var bodyParser = require('body-parser');

var cors = require("cors");


// Logs all HTTP
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

                                   
//app.use(methodOverride());

//app.set('port', 8080);

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");  
  next();      
});



 var Characters = mongoose.model('Characters', {
        text : String
    });

 var Journeys = mongoose.model('Journeys', {
        text : String
    });

app.get('/characters', function(request, response) {
        Characters.find(function(error, characters) {
            if (error)
                response.send(error)
            response.json(characters);
        });
    });

app.get('/journeys', function(request, response) {
        Journeys.find(function(error, characters) {
            if (error)
                response.send(error)
            response.json(characters);
        });
    });



/*
app.post('/journeys', function(request, response) {
  console.log(request.body);
 response.send(request.body);
    response.end();
});
*/

app.post("/journeys", function(request, response) {
    console.log(request.body);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('thanks');    
});

/*
app.post('/journeys', function(request, response) {
    console.log('POST /');
//    console.dir(req.body);
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('thanks');
});*/



/*
app.post('/journeys', function(request, response){
  console.log(request.body);
//  response.send(request.body);
});*/

app.get('*', function(request, response) {
        response.sendfile('./index.html');
    });
    

// LISTENING
var port = 8080;
app.listen(port);
console.log("App listening on port " + port);

