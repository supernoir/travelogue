import React from 'react';

export default class Button extends React.Component {
	constructor() {
		super();
		this.doSomething = this.doSomething.bind(this);
	}

	doSomething() {
		console.log('something');
	}

	render() {
		return (
			<a href="#" className={'btn'} id={'button'} onClick={this.doSomething.bind(this)}>
				{this.props.label}
			</a>
		);
	}
}
