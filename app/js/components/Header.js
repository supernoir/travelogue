import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from './Select';
import LocaleSelect from '../containers/LocaleSelect';
import intl from 'react-intl-universal';

import MenuItem from '../components/Menu/MenuItem';

const Users = {
	id: 1337,
	firstName: 'Ada',
	lastName: 'Lovelace',
	fullName: 'Ada Lovelace',
	role: 'contributor',
	langs: ['en-US', 'sv-SE']
};

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			User: {
				id: 0,
				fullName: ''
			}
		};
	}

	componentWillMount() {
		axios.get('https://localhost:8086/users/1337').then(res => this.setState({ User: res.data })).catch(err => console.log(err));
	}

	render() {
		return (
			<header className="navbar bg-secondary">
				<section className="navbar-section">
					<Link to="/" className="btn btn-link">{intl.get('i18n-menu-item-dashboard')}</Link>
					<Link to="/journeys" className="btn btn-link">{intl.get('i18n-menu-item-journeys')}</Link>
				</section>
				<section className="navbar-center">{intl.get('i18n-app-name')}</section>
				<section className="navbar-section">
					<MenuItem target={`/users/${Users.id}`} label={`${Users.fullName}`} />
					<LocaleSelect
						options={[{ id: 1, label: 'English', val: 'en-US' }, { id: 2, label: 'Deutsch', val: 'de-DE' }, { id: 5, label: 'Svenska', val: 'sv-SE' }]}
					/>
				</section>
			</header>
		);
	}
}
