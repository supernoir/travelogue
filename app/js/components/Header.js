import React from 'react';
import { Link } from 'react-router-dom';
import Select from './Select';

export default class Header extends React.Component {
  render() {
    return (
      <header className="navbar bg-secondary">
        <section className="navbar-section">
          <Link to="/" className="btn btn-link">Dashboard</Link>
          <Link to="/journeys" className="btn btn-link">Journeys</Link>
        </section>
        <section className="navbar-center">Travelogue</section>
        <section className="navbar-section">
          <a href="#" className="btn btn-link">Johnny Appleseed</a>
          <Select
            options={[
              { id: 1, label: 'English' },
              { id: 2, label: 'Deutsch' },
              { id: 3, label: 'Dansk' },
              { id: 4, label: 'Norsk (Bokmål)' },
              { id: 5, label: 'Svenska' }
            ]}
          />
        </section>
      </header>
    );
  }
}
