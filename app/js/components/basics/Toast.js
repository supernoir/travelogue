import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';

export default class Toast extends React.Component {
	render() {
		if (this.props.showToast) {
			return (
				<div class={`toast ${this.props.toastType ? `toast-${this.props.toastType}` : 'toast-primary'}`}>
					<button class="btn btn-clear float-right" />
					<h6>{this.props.toastTitle}</h6>
					<p>{this.props.toastContent}</p>
				</div>
			);
		} else {
			return null;
		}
	}
}

Toast.propTypes = {
	showToast: PropTypes.bool.isRequired,
	toastType: PropTypes.string,
	toastTitle: PropTypes.string,
	toastContent: PropTypes.string
};
