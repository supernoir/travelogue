const express = require('express');
const fs = require('fs');
const path = require('path');
const connect = require('connect');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const rfs = require('rotating-file-stream');
const spdy = require('spdy');

const app = express();

mongoose.connect('mongodb://localhost/library');
app.use(express.static(__dirname + '/app'));

const logDirectory = path.join(__dirname, 'log');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs('access.log', {
	interval: '1d',
	path: logDirectory
});

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	response.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS');
	next();
});

const Users = mongoose.model('Users', {
	id: Number,
	firstName: String,
	lastName: String,
	fullName: String,
	roles: Array,
	langs: Array
});

const Characters = mongoose.model('Characters', {
	text: String
});

const Journeys = mongoose.model('Journeys', {
	name: String,
	desc: String,
	cast: Array,
	startdate: String,
	enddate: String,
	daterange: Array,
	milestones: Array
});

const Milestones = mongoose.model('Journey', {
	journey: String,
	name: String,
	date: String,
	desc: String,
	loc: String,
	cast: Array
});

/** REST: Base Route */
const baseRoute = () => {
	app.get('/', (req, res) => {
		res.json({
			message: 'Please use a descriptive route. See the API documentation for reference'
		});
	});
};
baseRoute();

/** REST: Users Route */
const usersRoute = () => {
	app.get('/users', (req, res) => {
		Users.find((error, users) => {
			if (error) res.send(error);
			res.json(users);
		});
	});
};
usersRoute();

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

/** REST: Journeys - GET all Journeys  */
const journeysRoute = () => {
	app.get('/journeys/all', (request, response) => {
		Journeys.find((error, journeys) => {
			if (error) response.send(error);
			response.json(journeys);
		});
	});
};
journeysRoute();

/** REST: Journeys - GET Single Journey by Name */
app.get('/journeys/:name', (req, res) => {
	Journeys.findOne({ name: req.params.name }, function(err, journey) {
		res.json({ journey });
	});
});

/** REST: Journeys - POST new Journey */
app.post('/journeys', (req, res) => {
	const journeyName = req.param('name');
	const journeyCast = req.param('cast');
	const journeyDesc = req.param('desc');
	const journeyDateRange = req.param('daterange');
	const journeyStartDate = req.param('startdate');
	const journeyEndDate = req.param('enddate');

	const journey = new Journeys();
	journey.name = journeyName;
	journey.cast = journeyCast;
	journey.desc = journeyDesc;
	journey.daterange = journeyDateRange;
	journey.startdate = journeyStartDate;
	journey.enddate = journeyEndDate;

	journey.save((error, journey) => {
		if (error) {
			throw error;
		}
		res.json({
			message: 'Journey added!',
			data: journey
		});
	});
});

/** REST: Journeys - DELETE Journey */
app.post('/delete_journey', (request, response, next) => {
	Journeys.findByIdAndRemove(request.body._id, (error, journey) => {
		if (error) response.send(error);
		response.json({ message: 'Journey deleted!', data: journey });
	});
});

/** REST: Milestones  Route */
const milestonesRoute = () => {
	app.get('/milestones/all', (request, response) => {
		Milestones.find((error, milestones) => {
			if (error) response.send(error);
			response.json(milestones);
		});
	});
};
milestonesRoute();

app.get('/milestones/:name', (req, res) => {
	Milestones.findOne({ name: req.params.name }, function(err, milestone) {
		res.json({ milestone });
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
			throw err;
		}
		res.json({ message: 'Milestone added', data: milestone });
	});
});

// CERTS
const options = {
	key: fs.readFileSync(__dirname + '/cert/server.key'),
	cert: fs.readFileSync(__dirname + '/cert/server.crt')
};

// LISTENING
const port = 8086 || process.env.port;
/* app.listen(port);
console.log('App listening on port ' + port); */

const runServer = spdy.createServer(options, app);
runServer.listen(port);
console.log(`Listening on port ${port}`);
