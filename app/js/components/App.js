import React from 'react';
import Header from './Header';

import { HashRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import JourneList from './journey/JourneyList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <main>
            <Header />
            <Route path="/" component={Dashboard} />
            <Route path="/404*" component={NotFound} />
            <Route path="/journeys" component={JourneList} />
          </main>
        </Router>
      </div>
    );
  }
}
