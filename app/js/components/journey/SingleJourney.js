import React from 'react';
import TimelineNode from '../TimelineNode';

import journeydata from '../../data/journeys.json';

export default class SingleJourney extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>SingleJourney</h1>
        <div className="timeline">
          {journeydata[0].journey.map(journey => {
            return (
              <TimelineNode
                id={journey.id}
                station={journey.station}
                date={journey.date}
              />
            );
          })}

        </div>
      </div>
    );
  }
}
