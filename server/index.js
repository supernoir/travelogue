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
    extended: true,
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
  text: String,
});

const Journeys = mongoose.model('Journeys', {
  name: String,
  cast: Array,
  desc: String,
});

const Milestones = mongoose.model('Journey', {
  journey: String,
  name: String,
  date: String,
  desc: String,
  loc: String,
  cast: Array,
});

/** REST: Base Route */
const baseRoute = () => {
  app.get('/', async (req, res) => {
    await res.json({
      message: 'Please use a descriptive route. See the API documentation for reference',
    });
  });
};

baseRoute();

/** REST: Characters Route */
const characterRoute = () => {
  app.get('/characters', (req, res) => {
    Characters.find((error, characters) => {
      if (error) res.send(error);
      res.json(characters);
    });
  });
};
characterRoute();

/** REST: Journeys Route */
const journeysRoute = () => {
  app.get('/journeys/all', async (request, response) => {
    await Journeys.find((error, journeys) => {
      if (error) response.send(error);
      response.json(journeys);
    });
  });
};
journeysRoute();

app.get('/journeys/:name', function(req, res) {
  Journeys.findOne({name: req.params.name}, function(err, journey) {
    res.json({journey});
  });
});

app.post('/journeys', function(req, res) {
  const journeyName = req.param('name');
  const journeyCast = req.param('cast');
  const journeyDesc = req.param('desc');

  const journey = new Journeys();
  journey.name = journeyName;
  journey.cast = journeyCast;
  journey.desc = journeyDesc;

  journey.save(function(error, journey) {
    if (error) {
      console.log(error);
      return next(error);
    }
    res.json({
      message: 'Journey added!',
      data: journey,
    });
  });
});

app.post('/delete_journey', (request, response, next) => {
  Journeys.findByIdAndRemove(request.body._id, (error, journey) => {
    if (error) response.send(error);
    response.json({message: 'Journey deleted!', data: journey});
  });
});

/** REST: Milestones  Route */
const milestonesRoute = () => {
  app.get('/milestones/all', async (request, response) => {
    await Milestones.find((error, milestones) => {
      if (error) response.send(error);
      response.json(milestones);
    });
  });
};
milestonesRoute();

app.get('/milestones/:name', function(req, res) {
  Milestones.findOne({name: req.params.name}, function(err, milestone) {
    res.json({milestone});
  });
});

app.post('/milestones/', (req, res) => {
  const milestoneName = req.param('name');
  const milestoneJourney = req.param('journey');
  const milestoneDate = req.param('date');
  const milestoneDesc = req.param('desc');
  const milestoneCast = req.param('cast');
  const milestoneLoc = req.param('loc');

  const milestone = new Milestones();
  milestone.name = milestoneName;
  milestone.journey = milestoneJourney;
  milestone.date = milestoneDate;
  milestone.desc = milestoneDesc;
  milestone.cast = milestoneCast;
  milestone.loc = milestoneLoc;

  milestone.save((err, milestone) => {
    if (err) {
      return next(err);
    }
    res.json({message: 'Milestone added', data: milestone});
  });
});

// LISTENING
const port = 8086;
app.listen(port);
console.log('App listening on port ' + port);

