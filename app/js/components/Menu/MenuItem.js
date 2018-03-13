import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';

export default class MenuItem extends React.Component {
	render() {
		return (
			<Link to={this.props.target} className={'btn btn-link'}>
				{this.props.label}
			</Link>
		);
	}
}

MenuItem.propTypes = {
	target: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};
