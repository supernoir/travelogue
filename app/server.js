var connect = require('connect');
var http = require('http');

var express  = require('express');
var bodyParser = require('body-parser');

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

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();      
});


 var Characters = mongoose.model('Characters', {
        text : String
    });

app.get('/characters', function(request, response) {
        Characters.find(function(error, characters) {
            if (error)
                response.send(error)
            response.json(characters);
        });
    });
/*
app.post('/characters', function(request, response){
      console.log(request.body);      // your JSON
  response.send(request.body);    // echo the result back

});*/

app.get('*', function(request, response) {
        response.sendfile('./index.html');
    });
    

// LISTENING
var port = 8080;
app.listen(port);
console.log("App listening on port " + port);

