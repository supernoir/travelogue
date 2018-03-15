import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class LinkButton extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Button icon as={Link} to={this.props.target}>
				{this.props.icon ? <Icon name={this.props.icon} /> : null}
				{this.props.label}
			</Button>
		);
	}
}

LinkButton.propTypes = {
	target: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string
};
