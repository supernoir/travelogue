import React from 'react';
import { Segment, Grid, Image, Header, Label, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class TimelineNode extends React.Component {
	render() {
		return (
			<Segment key={this.props.id}>
				<Grid>
					<Grid.Row>
						<Grid.Column width={2}>
							<Image src={`../../public/${this.props.image}`} />
						</Grid.Column>
						<Grid.Column width={14}>
							<Header as="h2">
								{this.props.station}
								<Label as="a">
									<Icon name="calendar" />
									{this.props.date}
								</Label>
								<Header.Subheader>{this.props.desc}</Header.Subheader>
							</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}

TimelineNode.propTypes = {
	id: PropTypes.number,
	image: PropTypes.string,
	date: PropTypes.string,
	station: PropTypes.string,
	desc: PropTypes.string
};
