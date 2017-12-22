import React from 'react'
import { Link } from 'react-router-dom'
import CardImg from '../../public/jack-anstey-383370.jpg'

export default class Card extends React.Component {
  render() {
    return (
      <div className="card" key={this.props.id}>
        <div className="card-image">
          <img
            src={`../../public/${this.props.img}`}
            className="img-responsive"
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">{this.props.title}</div>
          <div className="card-subtitle text-gray">{this.props.subtitle}</div>
        </div>
        <div className="card-body">
          {this.props.body}
        </div>
        <div className="card-footer">
          <Link
            to={`/journeys/${this.props.title}`}
            className="btn btn-primary"
          >
            {this.props.cta}
          </Link>
        </div>
      </div>
    )
  }
}
