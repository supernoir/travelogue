var express  = require('express');
var app      = express();                               

var mongoose = require('mongoose');                     

//var morgan = require('morgan');             // log requests to the console (express4)
//var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration

mongoose.connect('mongodb://localhost/library');

app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
//app.use(morgan('dev'));                                         // log every request to the console
//app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
//app.use(bodyParser.json());                                     // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());


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


app.get('*', function(request, response) {
        response.sendfile('./index.html');
    });
    

// LISTENING
var port = 8080;
app.listen(port);
console.log("App listening on port " + port);

