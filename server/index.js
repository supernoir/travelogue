const express = require('express')
const fs = require('fs')
const path = require('path')
const connect = require('connect')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const rfs = require('rotating-file-stream')

const app = express()

mongoose.connect('mongodb://localhost/library')
app.use(express.static(__dirname + '/app'))

const logDirectory = path.join(__dirname, 'log')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDirectory
})

app.use(morgan('combined', { stream: accessLogStream }))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  response.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, OPTIONS')
  next()
})

const Characters = mongoose.model('Characters', {
  text: String
})

const Journeys = mongoose.model('Journeys', {
  name: String,
  desc: String,
  cast: Array,
  startdate: String,
  enddate: String,
  daterange: Array,
  milestones: Array
})

const Milestones = mongoose.model('Journey', {
  journey: String,
  name: String,
  date: String,
  desc: String,
  loc: String,
  cast: Array
})

/** REST: Base Route */
const baseRoute = () => {
  app.get('/', async (req, res) => {
    await res.json({
      message: 'Please use a descriptive route. See the API documentation for reference'
    })
  })
}

baseRoute()

/** REST: Characters Route */
const characterRoute = () => {
  app.get('/characters', async (req, res) => {
    await Characters.find((error, characters) => {
      if (error) res.send(error)
      res.json(characters)
    })
  })
}
characterRoute()

/** REST: Journeys - GET all Journeys  */
const journeysRoute = () => {
  app.get('/journeys/all', async (request, response) => {
    await Journeys.find((error, journeys) => {
      if (error) response.send(error)
      response.json(journeys)
    })
  })
}
journeysRoute()

/** REST: Journeys - GET Single Journey by Name */
app.get('/journeys/:name', async (req, res) => {
  await Journeys.findOne({ name: req.params.name }, function(err, journey) {
    res.json({ journey })
  })
})

/** REST: Journeys - POST new Journey */
app.post('/journeys', async (req, res) => {
  const journeyName = req.param('name')
  const journeyCast = req.param('cast')
  const journeyDesc = req.param('desc')
  const journeyDateRange = req.param('daterange')
  const journeyStartDate = req.param('startdate')
  const journeyEndDate = req.param('enddate')

  const journey = new Journeys()
  journey.name = journeyName
  journey.cast = journeyCast
  journey.desc = journeyDesc
  journey.daterange = journeyDateRange
  journey.startdate = journeyStartDate
  journey.enddate = journeyEndDate

  await journey.save((error, journey) => {
    if (error) {
      console.log(error)
      return next(error)
    }
    res.json({
      message: 'Journey added!',
      data: journey
    })
  })
})

/** REST: Journeys - DELETE Journey */
app.post('/delete_journey', async (request, response, next) => {
  await Journeys.findByIdAndRemove(request.body._id, (error, journey) => {
    if (error) response.send(error)
    response.json({ message: 'Journey deleted!', data: journey })
  })
})

/** REST: Milestones  Route */
const milestonesRoute = () => {
  app.get('/milestones/all', async (request, response) => {
    await Milestones.find((error, milestones) => {
      if (error) response.send(error)
      response.json(milestones)
    })
  })
}
milestonesRoute()

app.get('/milestones/:name', async (req, res) => {
  await Milestones.findOne({ name: req.params.name }, function(err, milestone) {
    res.json({ milestone })
  })
})

app.post('/milestones/', async (req, res) => {
  const milestoneName = req.param('name')
  const milestoneJourney = req.param('journey')
  const milestoneDate = req.param('date')
  const milestoneDesc = req.param('desc')
  const milestoneCast = req.param('cast')
  const milestoneLoc = req.param('loc')

  const milestone = new Milestones()
  milestone.name = milestoneName
  milestone.journey = milestoneJourney
  milestone.date = milestoneDate
  milestone.desc = milestoneDesc
  milestone.cast = milestoneCast
  milestone.loc = milestoneLoc

  await milestone.save((err, milestone) => {
    if (err) {
      return next(err)
    }
    res.json({ message: 'Milestone added', data: milestone })
  })
})

// LISTENING
const port = 8086 || process.env.port
app.listen(port)
console.log('App listening on port ' + port)
