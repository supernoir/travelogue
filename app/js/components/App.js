import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NotFound from './NotFound'
import JourneyList from './journey/JourneyList'
import SingleJourney from './journey/SingleJourney'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <main>
            <Route exact path="/" component={Dashboard} />
            <Route path="/404*" component={NotFound} />
            <Route exact path="/journeys" component={JourneyList} />
            <Route
              path="/journeys/:journey"
              render={props => <SingleJourney {...props} />}
            />
          </main>
        </Router>
      </div>
    )
  }
}
