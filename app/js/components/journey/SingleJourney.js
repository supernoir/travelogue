import React from 'react'
import TimelineNode from '../TimelineNode'
import Header from '../Header'

import journeydata from '../../data/journeys.json'

export default class SingleJourney extends React.Component {
  constructor() {
    super()
    this.state = {
      journeyName: '',
      journeyDesc: '',
      journeyCast: ''
    }
  }

  componentWillMount() {
    this.setState({ journeyName: 'Loading...' })
  }

  componentDidMount() {
    const { match: { params } } = this.props
    this.setState({ journeyName: this.props.match.params.journey })
    fetch(`http://localhost:8086/journeys/${this.props.match.params.journey}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          journeyName: res.journey.name,
          journeyDesc: res.journey.desc,
          journeyCast: res.journey.cast
        })
      )
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1><strong>Name: </strong>{this.state.journeyName}</h1>
        <h2><strong>Description: </strong>{this.state.journeyDesc}</h2>
        <h3><strong>Cast: </strong>{this.state.journeyCast}</h3>
        <div className="timeline">
          {journeydata[0].journey.map(journey => {
            return (
              <TimelineNode
                id={journey.id}
                station={journey.station}
                date={journey.date}
              />
            )
          })}

        </div>
      </div>
    )
  }
}
