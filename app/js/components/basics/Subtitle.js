import React from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends React.Component {
	render() {
		return <h2>{this.props.subtitle}</h2>;
	}
}

Title.propTypes = {
	subtitle: PropTypes.string
};
