import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Card from '../Card';
import journeydata from '../../data/journeys.json';

export default class JourneyList extends React.Component {
  constructor() {
    super();
    this.state = {
      journeyName: '',
      journeyDesc: '',
      journeyCast: ''
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <h1>JourneyList</h1>
        <Link to="/journey/new" className="btn btn-primary btn-lg">
          New Journey
        </Link>
        <div className="columns">
          {journeydata.map(journey => {
            return (
              <div className="column col-5">
                <Card
                  id={journey.id}
                  title={journey.name}
                  subtitle={'A pretty story'}
                  img={journey.img}
                  body={'Here goes some more info'}
                  cta={'View Journey'}
                />
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}
