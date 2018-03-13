import React from 'react';
import Header from './Header';
import Title from './basics/Title';
import intl from 'react-intl-universal';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Title headline={intl.get('i18n-dashboard-title')} />
				<main className="page">
					{intl.get('i18n-config-notfound')}
				</main>
			</div>
		);
	}
}
