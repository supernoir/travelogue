import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import intl from 'react-intl-universal';
import { Container, Header, Grid, Segment, Divider } from 'semantic-ui-react';

import MainMenu from '../Menu/MainMenu';
import Card from '../Card';
import Footer from '../basics/Footer';
import LinkButton from '../basics/LinkButton';
import Message from '../basics/Message';

import defaultImg from '../../../public/jack-anstey-383370.jpg';

export default class JourneyList extends React.Component {
	constructor() {
		super();
		this.state = {
			allJourneys: [],
			journeyName: '',
			journeyDesc: '',
			journeyCast: '',
			showError: false,
			errorCode: 0,
			errorTitle: '',
			errorMessage: ''
		};
	}
	componentWillMount() {
		axios
			.get('https://localhost:8086/journeys/all')
			.then(res => this.setState({ allJourneys: res.data }))
			.catch(err =>
				this.setState({
					showError: true,
					errorCode: 124,
					errorTitle: 'Something went wrong',
					errorMessage: 'There is an issue with the Database. Please consult your admin.'
				})
			);
	}

	render() {
		return (
			<div>
				<MainMenu />
				<Container style={{ marginTop: '7em' }}>
					<Message
						showMessage={this.state.showError}
						type={'error'}
						title={`${this.state.errorCode} - ${this.state.errorTitle}`}
						content={this.state.errorMessage}
					/>
					<Header as="h1">{intl.get('i18n-journeylist-title')} </Header>
					<LinkButton target={'/journey/new'} label={intl.get('i18n-journeylist-cta-createnewjourney')} />
					<Divider />
					<Grid columns={3} stackable>
						{this.state.allJourneys.map(journey => {
							return (
								<Grid.Column width={5}>
									<Card
										key={journey.id}
										id={journey.id}
										title={journey.name}
										subtitle={journey.desc}
										img={'placeholder.png'}
										cast={journey.cast}
										startdate={journey.startdate}
										enddate={journey.enddate}
										daterange={journey.daterange}
										cta={'View Journey'}
									/>
								</Grid.Column>
							);
						})}
					</Grid>
				</Container>

				<Footer />
			</div>
		);
	}
}
