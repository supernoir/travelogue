import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment } from 'semantic-ui-react'

export default class Panel extends React.Component {
	render() {
		return (

				<div>
					<Header as='h2' attached='top'>
						Attached Header
					</Header>
					<Segment attached>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
					</Segment>
				</div>

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
