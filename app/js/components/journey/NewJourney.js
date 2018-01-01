import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import intl from 'react-intl-universal';

import Header from '../Header';

const baseUri = `http://${window.location.hostname}:8086`;

export default class NewJourney extends React.Component {
  constructor() {
    super();
    this.state = {
      journeyName: '',
      journeyDesc: '',
      journeyCast: [],
      journeyStartDate: '',
      journeyEndDate: '',
      journeyDateRange: []
      //journeyMilestones: []
    };
    this.addNewJourneyName = this.addNewJourneyName.bind(this);
    this.addNewJourneyCast = this.addNewJourneyCast.bind(this);
    this.addNewJourneyDesc = this.addNewJourneyDesc.bind(this);
    this.addNewJourneyStartDate = this.addNewJourneyStartDate.bind(this);
    this.addNewJourneyEndDate = this.addNewJourneyEndDate.bind(this);
    this.submitNewJourney = this.submitNewJourney.bind(this);
  }

  addNewJourneyName(event) {
    let name = event.target.value;
    this.setState({ journeyName: name });
  }

  addNewJourneyCast(event) {
    let cast = event.target.value;
    this.setState({ journeyCast: cast });
  }

  addNewJourneyDesc(event) {
    let desc = event.target.value;
    this.setState({ journeyDesc: desc });
  }

  addNewJourneyStartDate(event) {
    let startDate = event.target.value;
    this.setState({ journeyStartDate: startDate });
  }

  addNewJourneyEndDate(event) {
    let endDate = event.target.value;
    this.setState({ journeyEndDate: endDate });
  }

  submitNewJourney() {
    let name = this.state.journeyName;
    let cast = this.state.journeyCast;
    let desc = this.state.journeyDesc;
    let dateRange = [this.state.journeyStartDate, this.state.journeyEndDate];
    this.setState({ journeyDateRange: dateRange });

    axios({
      method: 'post',
      url: baseUri + '/journeys',
      data: {
        name: this.state.journeyName,
        desc: this.state.journeyDesc,
        cast: this.state.journeyCast,
        daterange: this.state.journeyDateRange,
        startdate: this.state.journeyStartDate,
        enddate: this.state.journeyEndDate
      }
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1>Create New Journey</h1>
        <h3>Name: {this.state.journeyName}</h3>
        <h3>Cast: {this.state.journeyCast}</h3>
        <h3>Desc: {this.state.journeyDesc}</h3>
        <h3>
          Date: {this.state.journeyStartDate} - {this.state.journeyEndDate}
        </h3>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-3">
              <label className="form-label" htmlFor="input-example-1">
                Journey Name
              </label>
            </div>
            <div className="col-9">
              <input
                className="form-input"
                type="text"
                id="input-example-1"
                placeholder="Name"
                onChange={this.addNewJourneyName}
              />
            </div>
          </div>
          <div className="divider" />
          <div className="form-group">
            <div className="col-3">
              <label className="form-label" htmlFor="input-example-1">
                Journey Cast
              </label>
            </div>
            <div className="col-9">
              <input
                className="form-input"
                type="text"
                id="input-example-1"
                placeholder="Cast"
                onChange={this.addNewJourneyCast}
              />
            </div>
          </div>
          <div className="divider" />
          <div className="form-group">
            <div className="col-3">
              <label className="form-label" htmlFor="input-example-1">
                Journey Description
              </label>
            </div>
            <div className="col-4">
              <input
                className="form-input"
                type="text"
                id="input-example-1"
                placeholder="Description"
                onChange={this.addNewJourneyDesc}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-3">
              <label className="form-label" htmlFor="input-example-1">
                Journey Date
              </label>
            </div>
            <div className="col-4">
              <input
                className="form-input"
                type="date"
                id="input-example-1"
                placeholder="Start Date"
                onChange={this.addNewJourneyStartDate}
              />
            </div>
            <div className="divider text-center" data-content="until" />
            <div className="col-4">
              <input
                className="form-input"
                type="date"
                id="input-example-1"
                placeholder="End Date"
                onChange={this.addNewJourneyEndDate}
              />
            </div>
          </div>
          <div className="form-group">
            <Link to="/journeys/" className="btn btn-secondary btn-lg">
              Discard changes
            </Link>
            <Link
              to="/journeys/"
              className="btn btn-primary btn-lg"
              onClick={this.submitNewJourney}
            >
              Create Journey
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
