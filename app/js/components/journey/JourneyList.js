import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import intl from 'react-intl-universal';

import Header from '../Header';
import Card from '../Card';
import Title from '../basics/Title';
import LinkButton from '../basics/LinkButton';

import defaultImg from '../../../public/jack-anstey-383370.jpg';

export default class JourneyList extends React.Component {
	constructor() {
		super();
		this.state = {
			allJourneys: [],
			journeyName: '',
			journeyDesc: '',
			journeyCast: ''
		};
	}
	componentDidMount() {
		axios.get('https://localhost:8086/journeys/all').then(res => this.setState({ allJourneys: res.data })).catch(err => console.log(err));
	}
	render() {
		return (
			<div className="container">
				<Header />
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
