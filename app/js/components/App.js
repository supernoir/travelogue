import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import intl from 'react-intl-universal';

import Dashboard from './Dashboard';
import NotFound from './NotFound';
import JourneyList from './journey/JourneyList';
import SingleJourney from './journey/SingleJourney';
import NewJourney from './journey/NewJourney';

import SingleMilestone from './milestone/SingleMilestone';

const locales = {
  'en-US': require('../locales/en-US.json'),
  'de-DE': require('../locales/de-DE.json')
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      initDone: false
    };
  }

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    intl
      .init({
        currentLocale: 'de-DE',
        locales
      })
      .then(() => {
        this.setState({ initDone: true });
      });
  }

  render() {
    return (
      <div>
        <h1>{intl.get('WELCOME')}</h1>
        <Router>
          <main>
            <Route exact path="/" component={Dashboard} />
            <Route path="/404*" component={NotFound} />
            <Route exact path="/journeys" component={JourneyList} />
            <Route
              path="/journeys/:journey"
              render={props => <SingleJourney {...props} />}
            />
            <Route exact path="/journey/new" component={NewJourney} />
            <Route
              path="/milestones/:milestone"
              render={props => <SingleMilestone {...props} />}
            />
          </main>
        </Router>
      </div>
    );
  }
}
