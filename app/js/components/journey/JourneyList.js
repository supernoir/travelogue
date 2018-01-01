import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';
import Card from '../Card';
import journeydata from '../../data/journeys.json';

import defaultImg from '../../../public/jack-anstey-383370.jpg';

export default class JourneyList extends React.Component {
  constructor() {
    super();
    this.state = {
      allJourneys: [],
      journeyName: '',
      journeyDesc: '',
      journeyCast: ''
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:8086/journeys/all')
      .then(res => this.setState({ allJourneys: res.data }));
  }
  render() {
    return (
      <div className="container">
        <h1>JourneyList</h1>
        <Link to="/journey/new" className="btn btn-primary btn-lg">
          New Journey
        </Link>
        <div className="columns">
          {this.state.allJourneys.map(journey => {
            return (
              <div className="column col-5">
                <Card
                  id={journey.id}
                  title={journey.name}
                  subtitle={journey.desc}
                  img={'jack-anstey-383370.jpg'}
                  cast={journey.cast}
                  startdate={journey.startdate}
                  enddate={journey.enddate}
                  daterange={journey.daterange}
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
