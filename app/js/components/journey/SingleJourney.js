import React from 'react';
import { Container, Header, Segment, Divider, Feed } from 'semantic-ui-react';
import intl from 'react-intl-universal';

import TimelineNode from '../TimelineNode';
import MainMenu from '../Menu/MainMenu';
import Footer from '../basics/Footer';

import journeydata from '../../data/journeys.json';
import defaultImg from '../../../public/jack-anstey-383370.jpg';

export default class SingleJourney extends React.Component {
	constructor() {
		super();
		this.state = {
			journeyName: '',
			journeyDesc: '',
			journeyCast: ''
		};
	}

	componentWillMount() {
		this.setState({ journeyName: 'Loading...' });
	}

	componentDidMount() {
		const { match: { params } } = this.props;
		this.setState({ journeyName: this.props.match.params.journey });
		fetch(`https://localhost:8086/journeys/${this.props.match.params.journey}`)
			.then(res => res.json())
			.then(res => {
				console.log(res.journey);
				this.setState({
					journeyName: res.journey.name,
					journeyDesc: res.journey.desc,
					journeyCast: res.journey.cast
				});
			});
	}

	render() {
		return (
			<div>
				<MainMenu />
				<Container style={{ marginTop: '7em' }}>
					<Header as="h1">{intl.get('i18n-dashboard-title')}</Header>

					<Segment.Group>
						<Segment>
							<h1>
								<strong>Name: </strong>
								{this.state.journeyName}
							</h1>
						</Segment>
						<Segment>
							<h2>
								<strong>Description: </strong>
								{this.state.journeyDesc}
							</h2>
						</Segment>
						<Segment>
							<h3>
								<strong>Cast: </strong>
								{this.state.journeyCast}
							</h3>
						</Segment>
					</Segment.Group>
					<Divider />
					<Segment.Group>
						<Header as="h4" attached="top" block>
							Milestones
						</Header>
						{journeydata[0].journey.map(journey => {
							return <TimelineNode id={journey.id} image={'placeholder.png'} station={journey.station} date={journey.date} desc={'A short description'} />;
						})}
					</Segment.Group>
				</Container>
				<Footer />
			</div>
		);
	}
}
