import React from 'react';
import MenuItem, { Menu, Container, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';

import MenuItemLink from './MenuItemLink';

export default class MainMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			activeItem: 'dashboard'
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(event) {
		event.preventDefault();
		this.setState({ activeItem: event.target.name });
	}

	render() {
		const { activeItem } = this.state;

		return (
			<Menu fixed="top" inverted>
				<Container>
					<Menu.Item as="a" header>
						{intl.get('i18n-app-name')}
					</Menu.Item>
					<MenuItemLink name={'dashboard'} target={'/'} label={intl.get('i18n-menu-item-dashboard')} icon={'dashboard'} />
					<MenuItemLink name={'journeys'} target={'/journeys'} label={intl.get('i18n-menu-item-journeys')} icon={'map signs'} />
					<MenuItemLink name={'profile'} target={'/profile'} label={'Ada Lovelace'} icon={'user circle outline'} />
					<Dropdown item simple text="Language Selection">
						<Dropdown.Menu>
							<Dropdown.Header>Languages</Dropdown.Header>
							<Dropdown.Divider />
							<Dropdown.Item>English</Dropdown.Item>
							<Dropdown.Item>Deutsch</Dropdown.Item>
							<Dropdown.Item>Svenska</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Menu>
		);
	}
}
