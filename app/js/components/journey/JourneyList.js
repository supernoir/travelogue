import React from 'react';

import Card from '../Card';
import journeydata from '../../data/journeys.json';

export default class JourneyList extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>JourneyList</h1>
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
