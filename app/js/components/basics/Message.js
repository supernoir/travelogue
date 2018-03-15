import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { Message as SemanticMessage, Icon } from 'semantic-ui-react';

export default class Message extends React.Component {
	render() {
		if (this.props.showMessage) {
			return <SemanticMessage error header={this.props.title} content={this.props.content} />;
		} else {
			return (
				<SemanticMessage info icon>
					<Icon name="circle notched" loading />
					<SemanticMessage.Content>
						<SemanticMessage.Header>Just one second</SemanticMessage.Header>
						We are fetching that content for you.
					</SemanticMessage.Content>
				</SemanticMessage>
			);
		}
	}
}

Message.propTypes = {
	showMessage: PropTypes.bool.isRequired,
	type: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string
};
