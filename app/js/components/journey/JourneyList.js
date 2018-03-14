import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import intl from 'react-intl-universal';

import Header from '../Header';
import Card from '../Card';
import Title from '../basics/Title';
import LinkButton from '../basics/LinkButton';
import Toast from '../basics/Toast';

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
			<div className="container">
				<Header />
				<Toast
					showToast={this.state.showError}
					toastType={'error'}
					toastTitle={`${this.state.errorCode} - ${this.state.errorTitle}`}
					toastContent={this.state.errorMessage}
				/>
				<Title headline={intl.get('i18n-journeylist-title')} />
				<LinkButton target={'/journey/new'} label={intl.get('i18n-journeylist-cta-createnewjourney')} />
				<div className="columns">
					{this.state.allJourneys.map(journey => {
						return (
							<div className="column col-5">
								<Card
									key={journey.id}
									id={journey.id}
									title={journey.name}
									subtitle={journey.desc}
									img={'jack-anstey-383370.jpg'}
									cast={journey.cast}
									startdate={journey.startdate}
									enddate={journey.enddate}
									daterange={journey.daterange}
									cta={'View Journey'}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
