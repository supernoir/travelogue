const express = require('express');
const connect = require('connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/library');
app.use(express.static(__dirname + '/app'));

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS');
  next();
});

const Characters = mongoose.model('Characters', {
  text: String
});

const Journeys = mongoose.model('Journeys', {
  name: String,
  cast: Array,
  desc: String
});

const Milestones = mongoose.model('Journey', {
  journey: String,
  name: String,
  date: Date,
  location: String,
  cast: []
});

app.get('/characters', (request, response) => {
  Characters.find((error, characters) => {
    if (error) response.send(error);
    response.json(characters);
  });
});

app.get('/journeys', (request, response) => {
  Journeys.find((error, journeys) => {
    if (error) response.send(error);
    response.json(journeys);
  });
});

app.post('/journeys', (request, response, next) => {
  const journey = new Journeys();
  journey.name = request.body.name;
  journey.cast = request.body.cast;
  journey.desc = request.body.description;

  journey.save((error, journey) => {
    if (error) {
      return next(error);
    }
    response.json({ message: 'Journey added!', data: journey });
  });
});

app.post('/delete_journey', (request, response, next) => {
  Journeys.findByIdAndRemove(request.body._id, (error, journey) => {
    if (error) response.send(error);
    response.json({ message: 'Journey deleted!', data: journey });
  });
});

// LISTENING
const port = 8086;
app.listen(port);
console.log('App listening on port ' + port);
