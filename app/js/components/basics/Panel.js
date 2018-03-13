import React from 'react';
import PropTypes from 'prop-types';

export default class Panel extends React.Component {
	render() {
		return (
			<div className="panel-container">
				<div className="panel-header">
					{this.props.panelHeader}
				</div>
				<div className="panel-body">
					{this.props.panelBody}
				</div>
				<div className="panel-footer">
					{this.props.panelFooter}
				</div>
			</div>
		);
	}
}

Panel.propTypes = {
  panelheader = PropTypes.string,
  panelBody = PropTypes.string,
  panelFooter = PropTypes.string
}
