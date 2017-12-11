import React from 'react'
import Header from './Header'

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>Dashboard</h1>
      </div>
    )
  }
}
