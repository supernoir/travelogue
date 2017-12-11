import React from 'react'

export default class TimelineNode extends React.Component {
  render() {
    return (
      <div
        className="timeline-item"
        id="timeline-example-1"
        key={this.props.id}
      >
        <div className="timeline-left">
          <a className="timeline-icon icon-lg" href="#timeline-example-2">
            <i className="icon icon-check" />
          </a>
        </div>
        <div className="timeline-content">
          <div className="tile-content">
            <p className="tile-title text-bold">{this.props.station}</p>
            <p className="tile-subtitle">{this.props.date}</p>
          </div>
        </div>
      </div>
    )
  }
}
