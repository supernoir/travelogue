import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MenuItemLink extends React.Component {
	render() {
		return (
			<Menu.Item as={Link} name={this.props.name} to={this.props.target}>
				{this.props.icon ? <Icon name={this.props.icon} /> : null}
				{this.props.label}
			</Menu.Item>
		);
	}
}

MenuItemLink.propTypes = {
	name: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string
};
