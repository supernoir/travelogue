import React from 'react';
import { Segment, Container, List } from 'semantic-ui-react';

export default class Footer extends React.Component {
	render() {
		return (
			<Segment vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
				<Container textAlign="center">
					<List horizontal divided link>
						<List.Item as="a" href="#">
							Site Map
						</List.Item>
						<List.Item as="a" href="#">
							Contact Us
						</List.Item>
						<List.Item as="a" href="#">
							Terms and Conditions
						</List.Item>
						<List.Item as="a" href="#">
							Privacy Policy
						</List.Item>
					</List>
				</Container>
			</Segment>
		);
	}
}
