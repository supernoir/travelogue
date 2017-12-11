import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default class NewJourney extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>Create New Journey</h1>
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-3">
              <label class="form-label" for="input-example-1">
                Journey Name
              </label>
            </div>
            <div class="col-9">
              <input
                class="form-input"
                type="text"
                id="input-example-1"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-3">
              <label class="form-label" for="input-example-1">
                Journey Cast
              </label>
            </div>
            <div class="col-9">
              <input
                class="form-input"
                type="text"
                id="input-example-1"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-3">
              <label class="form-label" for="input-example-1">
                Journey Description
              </label>
            </div>
            <div class="col-9">
              <input
                class="form-input"
                type="text"
                id="input-example-1"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group">
            <Link to="/journeys/" className="btn btn-secondary btn-lg">
              Discard changes
            </Link>
            <Link to="/journeys/" className="btn btn-primary btn-lg">
              Create Journey
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
