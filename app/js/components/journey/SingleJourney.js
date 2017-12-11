import React from 'react'
import TimelineNode from '../TimelineNode'
import Header from '../Header'

import journeydata from '../../data/journeys.json'

export default class SingleJourney extends React.Component {
  constructor() {
    super()
    this.state = {
      journeyName: ''
    }
  }

  componentWillMount() {
    this.setState({ journeyName: 'Loading...' })
  }

  componentDidMount() {
    const { match: { params } } = this.props
    this.setState({ journeyName: this.props.match.params.journey })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1>{this.state.journeyName}</h1>
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
