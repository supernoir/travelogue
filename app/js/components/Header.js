import React from 'react'
import { Link } from 'react-router-dom'

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
        </section>
      </header>
    )
  }
}
