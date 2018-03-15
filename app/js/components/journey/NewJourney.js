import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import intl from 'react-intl-universal';
import { Container, Header, Form, Button } from 'semantic-ui-react';

import MainMenu from '../Menu/MainMenu';
import Footer from '../basics/Footer';

const baseUri = `https://${window.location.hostname}:8086`;

export default class NewJourney extends React.Component {
	constructor() {
		super();
		this.state = {
			journeyName: '',
			journeyDesc: '',
			journeyCast: [],
			journeyStartDate: '',
			journeyEndDate: '',
			journeyDateRange: []
			//journeyMilestones: []
		};
		this.addNewJourneyName = this.addNewJourneyName.bind(this);
		this.addNewJourneyCast = this.addNewJourneyCast.bind(this);
		this.addNewJourneyDesc = this.addNewJourneyDesc.bind(this);
		this.addNewJourneyStartDate = this.addNewJourneyStartDate.bind(this);
		this.addNewJourneyEndDate = this.addNewJourneyEndDate.bind(this);
		this.submitNewJourney = this.submitNewJourney.bind(this);
	}

	addNewJourneyName(event) {
		let name = event.target.value;
		this.setState({ journeyName: name });
	}

	addNewJourneyCast(event) {
		let cast = event.target.value;
		this.setState({ journeyCast: cast });
	}

	addNewJourneyDesc(event) {
		let desc = event.target.value;
		this.setState({ journeyDesc: desc });
	}

	addNewJourneyStartDate(event) {
		let startDate = event.target.value;
		this.setState({ journeyStartDate: startDate });
	}

	addNewJourneyEndDate(event) {
		let endDate = event.target.value;
		this.setState({ journeyEndDate: endDate });
	}

	submitNewJourney() {
		let name = this.state.journeyName;
		let cast = this.state.journeyCast;
		let desc = this.state.journeyDesc;
		let dateRange = [this.state.journeyStartDate, this.state.journeyEndDate];
		this.setState({ journeyDateRange: dateRange });

		axios({
			method: 'post',
			url: baseUri + '/journeys',
			data: {
				name: this.state.journeyName,
				desc: this.state.journeyDesc,
				cast: this.state.journeyCast,
				daterange: this.state.journeyDateRange,
				startdate: this.state.journeyStartDate,
				enddate: this.state.journeyEndDate
			}
		}).catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<MainMenu />
				<Container style={{ marginTop: '7em' }}>
					<Header as="h1">Create New Journey</Header>
					<h3>Name: {this.state.journeyName}</h3>
					<h3>Cast: {this.state.journeyCast}</h3>
					<h3>Desc: {this.state.journeyDesc}</h3>
					<h3>
						Date: {this.state.journeyStartDate} - {this.state.journeyEndDate}
					</h3>

					<Form>
						<Form.Field>
							<label>Journey Name</label>
							<input className="form-input" type="text" id="input-example-1" placeholder="Name" onChange={this.addNewJourneyName} />
						</Form.Field>
						<Form.Field>
							<label>Journey Cast</label>
							<input className="form-input" type="text" id="input-example-1" placeholder="Cast" onChange={this.addNewJourneyCast} />
						</Form.Field>
						<Form.Field>
							<label>Journey Description</label>
							<input className="form-input" type="text" id="input-example-1" placeholder="Description" onChange={this.addNewJourneyDesc} />
						</Form.Field>
						<Form.Field>
							<label>Journey Date</label>
							<input className="form-input" type="date" id="input-example-1" placeholder="Start Date" onChange={this.addNewJourneyStartDate} />
							<input className="form-input" type="date" id="input-example-1" placeholder="End Date" onChange={this.addNewJourneyEndDate} />
						</Form.Field>
						<Button warn as={Link} to="/journeys" type="submit">
							Discard changes
						</Button>
						<Button primary as={Link} to="/journeys" type="submit" onClick={this.submitNewJourney}>
							Create Journey
						</Button>
					</Form>
				</Container>
				<Footer />
			</div>
		);
	}
}
