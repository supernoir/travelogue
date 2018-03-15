import React from 'react';
import { Link } from 'react-router-dom';
import { Card as SemanticCard, Icon, Image } from 'semantic-ui-react';

import LinkButton from './basics/LinkButton';
import CardImg from '../../public/jack-anstey-383370.jpg';

export default class Card extends React.Component {
	render() {
		return (
			<div key={this.props.id}>
				<SemanticCard>
					<Image src={`../../public/${this.props.img}`} />
					<SemanticCard.Content>
						<SemanticCard.Header>{this.props.title}</SemanticCard.Header>
						<SemanticCard.Meta>{this.props.subtitle}</SemanticCard.Meta>
						<SemanticCard.Description>{this.props.cast}</SemanticCard.Description>
						<SemanticCard.Description>
							{this.props.startdate} ‑ {this.props.enddate}
						</SemanticCard.Description>
					</SemanticCard.Content>
					<SemanticCard.Content extra>
						<LinkButton target={`/journeys/${this.props.title}`} label={this.props.cta} icon={'eye'} />
					</SemanticCard.Content>
				</SemanticCard>
			</div>
		);
	}
}
