import React from 'react';
import Header from '../Header';
import MapBox from '../MapBox';
export default class SingleMilestone extends React.Component {
  constructor() {
    super();
    this.state = {
      milestoneName: '',
      milestoneJourney: '',
      milestoneDate: '',
      milestoneDesc: '',
      milestoneCast: '',
      milestoneLoc: ''
    };
  }

  componentWillMount() {
    this.setState({ milestoneName: 'Loading...' });
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ milestoneName: this.props.match.params.milestone });
    fetch(
      `http://localhost:8086/milestones/${this.props.match.params.milestone}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          milestoneName: res.milestone.name,
          milestoneJourney: res.milestone.journey,
          milestoneDesc: res.milestone.desc,
          milestoneDate: res.milestone.date,
          milestoneCast: res.milestone.cast,
          milestoneLoc: res.milestone.loc
        })
      );
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1><strong>Name: </strong>{this.state.milestoneName}</h1>
        <h2><strong>Description: </strong>{this.state.milestoneDesc}</h2>
        <h3><strong>Cast: </strong>{this.state.milestoneCast}</h3>
        <p><strong>Description: </strong>{this.state.milestoneDesc}</p>
        <p><strong>Location: </strong>{this.state.milestoneLoc}</p>
        <MapBox />
      </div>
    );
  }
}
