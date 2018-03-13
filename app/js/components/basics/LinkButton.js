import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class LinkButton extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Link to={this.props.target} className={'btn btn-primary btn-lg'}>
				{this.props.label}
			</Link>
		);
	}
}

LinkButton.propTypes = {
	target: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};
