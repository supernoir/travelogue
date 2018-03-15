import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import MainMenu from './Menu/MainMenu';
import Footer from './basics/Footer';
import intl from 'react-intl-universal';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<MainMenu />
				<Container text style={{ marginTop: '7em' }}>
					<Header as="h1">{intl.get('i18n-dashboard-title')}</Header>
					<p>This is a basic fixed menu template using fixed size containers.</p>
					<p>A text container is used for the main container, which is useful for single column layouts.</p>
				</Container>
				<Footer />
			</div>
		);
	}
}
